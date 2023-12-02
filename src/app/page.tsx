import Card from "@/components/Card/Card";
import LinkBtn from "@/components/Landing/LinkBtn";
import Navigation from "@/components/Landing/Navigation/Navigation";

export default function Home() {
  return (
    <>
      {/* Landing */}

      <div className='bg-[url("/img/bg_1.png")] min-h-screen bg-cover border-b-8 border-yellow'>
        <div className='max-w-[90rem] mx-auto'>
          <header className='flex flex-col md:pt-6 md:flex-row md:items-center md:justify-between'>
            <Navigation />
          </header>
          <section className='mt-[25vh]'>
            <h1 className='text-center uppercase font-extrabold text-3xl'>
              <span className='block bg-white pt-4 md:w-fit md:pb-3 md:mx-auto md:px-8 md:text-4xl lg:text-5xl xl:text-6xl'>
                Disfruta de un ambiente
              </span>
              <span className='block bg-white pb-4 md:w-fit md:mx-auto md:px-8 md:text-4xl lg:text-5xl xl:text-6xl'>
                único y especial
              </span>
            </h1>
            <div className='flex gap-5 justify-center mt-5 '>
              <LinkBtn href='#'>Carta</LinkBtn>
              <LinkBtn alternative href='#'>
                Reservar
              </LinkBtn>
            </div>
          </section>
        </div>
      </div>

      {/* About */}
      <div className='bg-[url("/img/bg_2.png")] min-h-screen bg-cover flex items-center justify-center lg:justify-start lg:pl-24 border-b-8 border-yellow'>
        <div className='max-w-[90rem] p-6'>
          <Card name='El restaurante' title='Siéntete como en casa' textBtn='Reservar mesa'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, reprehenderit.
              Dignissimos nisi architecto maxime exercitationem non! Consequatur, officia
              voluptatum, a quisquam ea omnis dignissimos voluptatem incidunt, assumenda temporibus
              eaque porro?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos excepturi qui
              dolore recusandae nulla eaque deserunt repellat magni? Id quod exercitationem facere
              quidem earum dolore et, doloribus amet nesciunt eaque.
            </p>
          </Card>
        </div>
      </div>

      {/* History */}
      <div className='bg-[url("/img/bg_3.png")] min-h-screen bg-cover flex items-center justify-center lg:justify-end lg:pr-24 border-b-8 border-yellow'>
        <div className='max-w-[90rem] p-6'>
          <Card name='Historia' title='20 años sintiendo la gastronomía' textBtn='Ver carta'>
            <p>
              Ut a enim nec nisl ullamcorper eleifend. Praesent risus leo, fringilla et nulla at,
              egestas euismod orci. Suspendisse porttitor diam eu condimentum aliquam.
            </p>
            <br />
            <p>
              Fusce interdum cursus nisl ut rutrum. Donec et sapien sit amet nisl pretium efficitur.
              Morbi faucibus felis mauris, sit amet finibus ipsum finibus at.
            </p>
          </Card>
        </div>
      </div>

      {/* Menu */}
      <div className='bg-[url("/img/bg_4.png")] min-h-screen bg-cover flex items-center justify-center lg:justify-start lg:pl-24 border-b-8 border-yellow'>
        <div className='max-w-[90rem] p-6'>
          <div className='bg-black p-8 text-white max-w-[28rem]'>
            <span className=''>Carta</span>
            <h2 className='my-4 font-bold text-3xl'>Descarga nuestras cartas</h2>
            <div className='my-8'>
              <div className='flex justify-between items-center py-2 border-t-[1px] border-gray-600'>
                <h3>Menú del día</h3>
                <a className=' text-yellow underline my-6 hover:text-white' href='#'>
                  Descargar PDF
                </a>
              </div>
              <div className='flex justify-between items-center py-2 border-t-[1px] border-gray-600'>
                <h3>Carta para grupos</h3>
                <a className=' text-yellow underline my-6 hover:text-white' href='#'>
                  Descargar PDF
                </a>
              </div>
              <div className='flex justify-between items-center py-2 border-t-[1px] border-b-[1px] border-gray-600'>
                <h3>Carta Navidad 2023</h3>
                <a className=' text-yellow underline my-6 hover:text-white' href='#'>
                  Descargar PDF
                </a>
              </div>
              <div></div>
              <div></div>
            </div>
            <a
              className='block bg-yellow w-full text-black font-semibold rounded-full text-sm text-center py-2 uppercase hover:bg-white'
              href='#'
            >
              Reservar mesa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
