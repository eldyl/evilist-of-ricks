import type { GetStaticProps, NextPage } from 'next';
import { prisma } from '@/server/utils/prisma';
import Image from 'next/image';

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
    return (
      <div
        key={rick.id}
        className='flex px-6 py-3 sm:w-90 justify-between  from-gray-300 to-gray-400 bg-gradient-to-b rounded-md gap-4'
      >
        <Image
          className='rounded-md'
          src={rick.image}
          width={150}
          height={150}
          alt={rick.name}
        />
        <div className='text-center self-center font-bold text-xl text-gray-700'>
          {rick.name}
        </div>

        <div className='self-center p-6 text-center text-gray-700'>
          VOTED EVIL
          <div className='font-bold text-black'>{rick._count.votedEvil} </div>
          Times
        </div>
      </div>
    );
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
