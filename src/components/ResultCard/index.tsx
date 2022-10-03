import Image from 'next/image';

interface RickResults {
  id: number;
  name: string;
  image: string;

  _count: {
    votedEvil: number;
    votedNotEvil: number;
  };

  totalVoteCount: number;
  percentForEvil: number;
  rank: number;
}

export default function ResultCard(props: RickResults) {
  let rick = props;
  const { name, image, percentForEvil, rank } = rick;

  return (
    <div className='flex sm:pr-6 pr-2 pb-3 sm:w-90 justify-between  from-gray-300 to-gray-400 bg-gradient-to-b rounded-md gap-4 items-center relative min-h-[150px] border-gray-200 border-4'>
      <div className='font-bold border-b-4 border-r-4 py-1 px-2 sm:py-3 sm:px-6 rounded-md absolute left-0 top-0 border-gray-300 bg-inherit text-gray-700'>
        {rank}
      </div>
      <div className='pl-16 sm:pl-24 pt-4'>
        <Image
          className='rounded-md'
          src={image}
          width={150}
          height={150}
          alt={name}
        />
      </div>
      <div className='text-center self-center font-bold text-xs sm:text-xl text-gray-700'>
        {name}
      </div>
      <div className='sm:text-sm text-lg sm:font-bold text-black'>
        {percentForEvil.toFixed(2)}% Evil
      </div>
    </div>
  );
}
