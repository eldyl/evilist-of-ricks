import type { GetStaticProps, NextPage } from 'next';
import { prisma } from '@/server/utils/prisma';
import ResultCard from '@/components/ResultCard';

interface ReceivedRickResults {
  rickResults: {
    id: number;
    name: string;
    image: string;

    _count: {
      votedEvil: number;
      votedNotEvil: number;
    };
  }[];
}

const Results: NextPage<ReceivedRickResults> = (props) => {
  const renderedResults = props?.rickResults?.map((rick) => {
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
  const rickResultsOrdered = await prisma.rick.findMany({
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
  return { props: { rickResults: rickResultsOrdered }, revalidate: 60 };
};
