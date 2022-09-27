import Image from 'next/image';

interface Rick {
  id: number;
  name: string;
  image: string;
}

export default function RickCard(props: Rick) {
  let { name, image } = props;

  return (
    <div className='mx-auto'>
      <div className='flex flex-col bg-neutral-300 gap-3 text-center text-gray-600 rounded-lg shadow-md p-6'>
        {image && (
          <Image
            src={image}
            alt={name}
            width={250}
            height={250}
            className='rounded-lg'
            priority
          />
        )}
        <h3 className=' text-xl text font-medium'>{name}</h3>
        <button
          className='p-3 bg-neutral-400 rounded-md font-bold text-black'
          onClick={() => {
            location.reload();
          }}
        >
          PURE EVIL
        </button>
      </div>
    </div>
  );
}
