"use client";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Form() {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  function resetForm() {
    setDate("");
    setName("");
    setEmail("");
    setTel("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        resetForm();
        Swal.fire({
          title: "Reserva enviada",
          text: "Nos comunicaremos con usted a la brevedad.",
          confirmButtonColor: "green",
          icon: "success",
        });
      }}
      className='flex flex-col gap-8 text-black'
    >
      <input
        name='date'
        id='date'
        className='h-12 w-full px-2 placeholder:text-black'
        placeholder='Ingrese la fecha y la hora'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type='datetime-local'
        required
      />
      <input
        className='h-12 px-2 placeholder:text-black'
        placeholder='Tu nombre'
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        required
      />
      <input
        className='h-12 px-2 placeholder:text-black'
        placeholder='Tu correo electrónico'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        required
      />
      <input
        className='h-12 px-2 placeholder:text-black'
        placeholder='Tu teléfono'
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        type='text'
        required
      />
      <button
        type='submit'
        className='block bg-yellow w-full text-black font-semibold rounded-full text-sm text-center py-2 uppercase hover:bg-white'
      >
        Reservar mesa
      </button>
    </form>
  );
}
