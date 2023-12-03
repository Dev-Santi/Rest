import Link from "next/link";
import Form from "../Form/Form";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function ReservationCard() {
  return (
    <div className='bg-black text-white flex flex-col gap-4 p-3 md:p-8 lg:gap-12 lg:flex-row lg:shadow-[0_5px_5px_5px_rgba(0,0,0,0.5)]'>
      <div className='lg:w-[25rem]'>
        <span>Localización</span>
        <h2 className='my-4 font-bold text-3xl'>Te esperamos</h2>
        <span>Horario</span>
        <p className='font-bold'>
          De Martes a Domingo, de 8:00h a <br /> 23:00h.
        </p>
        <Link
          className='block text-yellow underline my-2 hover:text-white'
          href='/calendar/calendar.pdf'
          target='_blank'
        >
          Ver calendario de festivos
        </Link>
        <span className='block h-[1px] bg-gray-600 w-full my-4'></span>
        <span>Dirección</span>
        <p className='font-bold text-yellow mb-2'>
          Tu calle 123, Tu barrio <br /> Tu ciudad
        </p>
        <span>Teléfono</span>
        <p className='font-bold text-yellow mb-2'>2205 Tu telefono</p>
        <span>Email</span>
        <p className='font-bold text-yellow mb-2'>tu@correoelectronico.uy</p>
        <span>Redes sociales</span>
        <div className='flex items-center gap-3 text-yellow text-2xl mt-2'>
          <Link target='_blank' href='https://www.instagram.com/santii.larrosa/'>
            <FaInstagram />
          </Link>
          <Link target='_blank' href='https://wa.me/+59897111899'>
            <FaWhatsapp />
          </Link>
          <Link target='_blank' href='https://www.tiktok.com/es/' className='text-xl'>
            <FaTiktok />
          </Link>
        </div>
      </div>

      <span className='w-[1px] bg-gray-600'></span>

      <div className='lg:w-[25rem]'>
        <h2 className='mb-2 font-bold text-3xl'>Haz una reserva</h2>
        <p className='font-bold my-4'>También puedes reservar por teléfono si lo prefieres.</p>
        <Form />
      </div>
    </div>
  );
}
