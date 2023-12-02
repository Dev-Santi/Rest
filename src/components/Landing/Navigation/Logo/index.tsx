import Image from "next/image";

export default function Logo() {
  return (
    <a className='font-bold text-white flex items-center gap-4 bg-black px-8 py-6' href='#'>
      <Image width={50} height={50} src='/img/logo.png' alt='Cubiertos de color amarillo.' />
      RESTAURANTE <br /> XXXXXXX
    </a>
  );
}
