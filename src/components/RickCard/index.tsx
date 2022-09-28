import Image from 'next/image';

interface Rick {
  id: number;
  name: string;
  image: string;
}

interface RickAndVote extends Rick {
  voteForMostEvil(selected: number): any;
}

export default function RickCard(props: RickAndVote) {
  let rick = props;
  let { name, image, voteForMostEvil, id } = rick;

  return (
    <>
      {image && (
        <div className='flex flex-col bg-neutral-300 gap-3 text-center text-gray-600 rounded-lg shadow-md p-6 h-[70vw] w-[60vw]  sm:max-w-[298px] sm:max-h-[426px] justify-between'>
          <Image
            src={image}
            alt={name}
            width={250}
            height={250}
            className='rounded-lg'
            priority
          />

          <h3 className='text-lg font-medium'>{name}</h3>
          <button
            type='button'
            className='rounded-md border border-transparent bg-neutral-200 px-4 py-2 text-base font-medium text-black hover:bg-slate-300 border-neutral-400'
            onClick={() => {
              voteForMostEvil(rick.id);
            }}
          >
            PURE EVIL
          </button>
        </div>
      )}
    </>
  );
}
