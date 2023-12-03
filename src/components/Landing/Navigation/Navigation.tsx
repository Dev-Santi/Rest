"use client";
import { useState } from "react";

import Logo from "./Logo";
import LinkBtn from "./LinkBtn";
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Navigation() {
  const [activeNavbar, setActiveNavbar] = useState(false);

  function handleClick() {
    setActiveNavbar(!activeNavbar);
  }

  return (
    <>
      <div className='flex items-center justify-between bg-black'>
        <Logo />
        {activeNavbar ? (
          <IoCloseCircleOutline
            onClick={handleClick}
            className='text-yellow text-4xl mr-10 cursor-pointer md:hidden'
          />
        ) : (
          <FaHamburger
            onClick={handleClick}
            className='text-yellow text-4xl mr-10 cursor-pointer md:hidden'
          />
        )}
      </div>

      <nav className={activeNavbar ? "absolute inset-0 top-[5rem] md:static" : "hidden md:block"}>
        <ul className='flex flex-col gap-3 bg-black text-center py-2 md:gap-0 md:flex-row md:bg-inherit lg:gap-6 lg:mr-4'>
          <li>
            <LinkBtn href='#about'>Restaurante</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#history'>Historia</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#menu'>Carta</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#reservation'>Localización</LinkBtn>
          </li>
          <li>
            <LinkBtn href='#reservation' alternative>
              Reservar
            </LinkBtn>
          </li>
        </ul>
      </nav>
    </>
  );
}
