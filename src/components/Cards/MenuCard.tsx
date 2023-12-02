import Link from "next/link";

export default function MenuCard() {
  return (
    <div className='bg-black p-8 text-white max-w-[28rem] lg:shadow-[0_5px_5px_5px_rgba(0,0,0,0.5)]'>
      <span className=''>Carta</span>
      <h2 className='my-4 font-bold text-3xl'>Descarga nuestras cartas</h2>
      <div className='my-8'>
        <div className='flex justify-between items-center py-2 border-t-[1px] border-gray-600'>
          <h3>Menú del día</h3>
          <Link
            target='_blank'
            href='/menu/menu.pdf'
            className=' text-yellow underline my-6 hover:text-white'
          >
            Descargar PDF
          </Link>
        </div>
        <div className='flex justify-between items-center py-2 border-t-[1px] border-gray-600'>
          <h3>Carta para grupos</h3>
          <Link
            target='_blank'
            href='/menu/menu.pdf'
            className=' text-yellow underline my-6 hover:text-white'
          >
            Descargar PDF
          </Link>
        </div>
        <div className='flex justify-between items-center py-2 border-t-[1px] border-b-[1px] border-gray-600'>
          <h3>Carta Navidad 2023</h3>
          <Link
            target='_blank'
            href='/menu/menu.pdf'
            className='text-yellow underline my-6 hover:text-white'
          >
            Descargar PDF
          </Link>
        </div>
        <div></div>
        <div></div>
      </div>
      <Link
        className='block bg-yellow w-full text-black font-semibold rounded-full text-sm text-center py-2 uppercase hover:bg-white'
        href='#reservation'
      >
        Reservar mesa
      </Link>
    </div>
  );
}
