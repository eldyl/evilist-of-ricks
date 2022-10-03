import type { NextPage } from 'next';
import { trpc } from '@/utils/trpc';
import ResultCard from '@/components/ResultCard';

const Results: NextPage = () => {
  const receivedRicks = trpc.ricks.results.useQuery();
  const results = receivedRicks.data;
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
