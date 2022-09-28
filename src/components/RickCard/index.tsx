import Image from 'next/image';

interface Rick {
  id: number;
  name: string;
  image: string;
}

interface VoteFunction {
  voteForMostEvil: (selected: number) => { return: any };
}

export default function RickCard(props: any) {
  let { name, image, voteForMostEvil, id } = props;

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
            className='p-3 bg-neutral-400 rounded-md font-bold text-black'
            onClick={() => {
              voteForMostEvil(id);
            }}
          >
            PURE EVIL
          </button>
        </div>
      )}
    </>
  );
}
