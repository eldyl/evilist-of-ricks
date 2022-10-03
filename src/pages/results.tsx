import type { GetStaticProps, NextPage } from 'next';
import { prisma } from '@/server/utils/prisma';
import ResultCard from '@/components/ResultCard';

interface RickResultsProps {
  rickResults: {
    id: number;
    name: string;
    image: string;

    _count: {
      votedEvil: number;
      votedNotEvil: number;
    };

    percentForEvil: number;
    totalVoteCount: number;
    rank: number;
  }[];
}

const Results: NextPage<RickResultsProps> = (props) => {
  const results = props.rickResults;
  const renderedResults = results?.map((rick) => {
    return <ResultCard key={rick.id} {...rick} />;
  });

  return (
    <div className='flex flex-col w-screen pb-6 px-3'>
      <h2 className='font-bold text-xl sm:text-5xl text-center p-3 sm:p-6'>
        Results
      </h2>
      <div className='flex flex-col mx-auto gap-4'>{renderedResults}</div>
    </div>
  );
};

export default Results;

export const getStaticProps: GetStaticProps = async () => {
  const ricksFromPrisma = await prisma.rick.findMany({
    orderBy: {
      votedEvil: { _count: 'desc' },
    },
    select: {
      id: true,
      name: true,
      image: true,
      _count: {
        select: {
          votedEvil: true,
          votedNotEvil: true,
        },
      },
    },
  });

  const calculatedResults = ricksFromPrisma.map((rick) => {
    const { votedEvil, votedNotEvil } = rick._count;

    return {
      id: rick.id,
      name: rick.name,
      image: rick.image,
      _count: {
        votedEvil: votedEvil,
        votedNotEvil: votedNotEvil,
      },
      totalVoteCount: votedEvil + votedNotEvil,
      percentForEvil: (votedEvil / (votedEvil + votedNotEvil)) * 100 || 0,
    };
  });

  const sortedResults = calculatedResults.sort(
    (a, b) => b.percentForEvil - a.percentForEvil,
  );

  const indexedResults = sortedResults.map((rick, index) => {
    return {
      id: rick.id,
      name: rick.name,
      image: rick.image,
      _count: {
        votedEvil: rick._count.votedEvil,
        votedNotEvil: rick._count.votedNotEvil,
      },
      totalVoteCount: rick._count.votedEvil + rick._count.votedNotEvil,
      percentForEvil:
        (rick._count.votedEvil /
          (rick._count.votedEvil + rick._count.votedNotEvil)) *
          100 || 0,
      rank: index + 1,
    };
  });

  return { props: { rickResults: indexedResults }, revalidate: 60 };
};
