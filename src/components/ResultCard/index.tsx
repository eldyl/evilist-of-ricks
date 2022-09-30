import Image from 'next/image';

interface RickResults {
  id: number;
  name: string;
  image: string;

  _count: {
    votedEvil: number;
    votedNotEvil: number;
  };
}

export default function ResultCard(props: RickResults) {
  let rick = props;
  const { id, name, image } = rick;

  return (
    <div className='flex px-6 py-3 sm:w-90 justify-between  from-gray-300 to-gray-400 bg-gradient-to-b rounded-md gap-4'>
      <Image
        className='rounded-md'
        src={image}
        width={150}
        height={150}
        alt={name}
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
}
