import Card from "@/components/Cards/Card";
import MenuCard from "@/components/Cards/MenuCard";
import ReservationCard from "@/components/Cards/ReservationCard";
import LinkBtn from "@/components/Landing/LinkBtn";
import Navigation from "@/components/Landing/Navigation/Navigation";

export default function Home() {
  return (
    <>
      {/* Landing */}
      <div className='bg-[url("/img/bg_1.png")] min-h-screen bg-cover border-b-2 border-white'>
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
              <LinkBtn href='#menu'>Carta</LinkBtn>
              <LinkBtn alternative href='#reservation'>
                Reservar
              </LinkBtn>
            </div>
          </section>
        </div>
      </div>

      {/* About */}
      <div
        id='about'
        className='bg-[url("/img/bg_2.png")] min-h-screen py-24 bg-cover flex items-center justify-center lg:justify-start lg:pl-24 border-b-2 border-white'
      >
        <section className='max-w-[90rem] p-6'>
          <Card
            name='El restaurante'
            title='Siéntete como en casa'
            textBtn='Reservar mesa'
            href='#reservation'
          >
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
        </section>
      </div>

      {/* History */}
      <div
        id='history'
        className='bg-[url("/img/bg_3.png")] min-h-screen py-24 bg-cover flex items-center justify-center lg:justify-end lg:pr-24 border-b-2 border-white'
      >
        <section className='max-w-[90rem] p-6'>
          <Card
            name='Historia'
            title='20 años sintiendo la gastronomía'
            textBtn='Ver carta'
            href='#menu'
          >
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
        </section>
      </div>

      {/* Menu */}
      <div
        id='menu'
        className='bg-[url("/img/bg_4.png")] min-h-screen py-24 bg-cover flex items-center justify-center lg:justify-start lg:pl-24 border-b-2 border-white'
      >
        <section className='max-w-[90rem] p-6'>
          <MenuCard />
        </section>
      </div>

      {/* Reserva */}
      <div
        id='reservation'
        className='bg-[url("/img/bg_4.png")] min-h-screen py-24 bg-cover flex items-center justify-center'
      >
        <section className='max-w-[90rem] p-6'>
          <ReservationCard />
        </section>
      </div>
    </>
  );
}
