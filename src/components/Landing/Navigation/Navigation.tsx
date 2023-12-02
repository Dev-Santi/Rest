"use client";
import { useState } from "react";

import Logo from "./Logo";
import LinkBtn from "./LinkBtn";
import { FaHamburger } from "react-icons/fa";

export default function Navigation() {
  const [activeNavbar, setActiveNavbar] = useState(false);

  function handleClick() {
    setActiveNavbar(!activeNavbar);
  }

  return (
    <>
      <div className='flex items-center justify-between bg-black'>
        <Logo />
        <FaHamburger
          onClick={handleClick}
          className='text-yellow text-4xl mr-10 cursor-pointer md:hidden'
        />
      </div>

      <nav className={activeNavbar ? "" : "hidden md:block"}>
        <ul className='flex flex-col gap-3 bg-black text-center py-2 md:gap-0 md:flex-row md:bg-inherit lg:gap-6 lg:mr-4'>
          <li>
            <LinkBtn href='#'>Restaurante</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#'>Historia</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#'>Carta</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#'>Localización</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#' alternative>
              Reservar
            </LinkBtn>
          </li>
        </ul>
      </nav>
    </>
  );
}
