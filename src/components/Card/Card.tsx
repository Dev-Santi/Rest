type props = {
  name: string;
  title: string;
  children: React.ReactNode;
  textBtn: string;
};

export default function Card({ name, title, children, textBtn }: props) {
  return (
    <div className='bg-black p-8 text-white max-w-[28rem]'>
      <span className=''>{name}</span>
      <h2 className='my-4 font-bold text-3xl'>{title}</h2>
      {children}
      <a className='block text-yellow underline my-6 hover:text-white' href='#'>
        Leer más
      </a>
      <a
        className='block bg-yellow w-full text-black font-semibold rounded-full text-sm text-center py-2 uppercase hover:bg-white'
        href='#'
      >
        {textBtn}
      </a>
    </div>
  );
}
