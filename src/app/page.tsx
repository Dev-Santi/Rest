import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-[url("/img/bg_1.png")] min-h-screen bg-center'>
      <header className='flex flex-col pt-6 md:flex-row md:items-center md:justify-between'>
        <div className='bg-black border-b-2 md:border-none md:bg-inherit'>
          <a
            className='font-bold text-white flex items-center gap-4 bg-black px-8 py-6 mx-auto md:mx-0'
            href='#'
          >
            <Image width={45} height={50} src='/img/logo.png' alt='Cubiertos de color amarillo.' />
            RESTAURANTE <br /> XXXXXXX
          </a>
        </div>

        <nav>
          <ul className='flex flex-col gap-3 bg-black text-center py-2 md:gap-0 md:flex-row md:bg-inherit lg:gap-8'>
            <li>
              <a
                className='text-white text-sm font-bold md:bg-black md:px-2 md:py-2 md:rounded-full lg:px-4'
                href='#'
              >
                RESTAURANTE
              </a>
            </li>
            <li>
              <a
                className='text-white text-sm font-bold md:bg-black md:px-4 md:py-2 md:rounded-full'
                href='#'
              >
                HISTORIA
              </a>
            </li>
            <li>
              <a
                className='text-white text-sm font-bold md:bg-black md:px-4 md:py-2 md:rounded-full'
                href='#'
              >
                CARTA
              </a>
            </li>
            <li>
              <a
                className='text-white text-sm font-bold md:bg-black md:px-4 md:py-2 md:rounded-full'
                href='#'
              >
                LOCALIZACION
              </a>
            </li>
            <li>
              <a
                className='text-white text-sm font-bold md:bg-black md:px-4 md:py-2 md:rounded-full'
                href='#'
              >
                RESERVAR
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
