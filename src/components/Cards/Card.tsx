type props = {
  name: string;
  title: string;
  children: React.ReactNode;
  textBtn: string;
  href: string;
};

export default function Card({ name, title, children, textBtn, href }: props) {
  return (
    <div className='bg-black p-8 text-white max-w-[28rem] lg:shadow-[0_5px_5px_5px_rgba(0,0,0,0.5)]'>
      <span className=''>{name}</span>
      <h2 className='my-4 font-bold text-3xl'>{title}</h2>
      {children}
      <a
        className='block bg-yellow w-full text-black font-semibold rounded-full text-sm text-center mt-6 py-2 uppercase hover:bg-white'
        href={href}
      >
        {textBtn}
      </a>
    </div>
  );
}
