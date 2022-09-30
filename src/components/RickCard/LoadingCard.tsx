interface Rick {
  id: number;
  name: string;
  image: string;
}

export default function LoadingRickCard() {
  return (
    <div className='flex flex-col gap-3 text-center text-gray-600 rounded-lg shadow-md p-6 h-[70vw] w-[60vw]  sm:max-w-[298px] sm:max-h-[426px] justify-between animate-pulse  from-gray-300 to-gray-400 bg-gradient-to-b'>
      <div className='w-[250px] h-[250px] bg-neutral-400 rounded-lg'></div>
      <h3 className='text-lg font-medium'></h3>
      <button className='p-3 bg-neutral-400 rounded-md font-bold text-black'>
        PURE EVIL
      </button>
    </div>
  );
}
