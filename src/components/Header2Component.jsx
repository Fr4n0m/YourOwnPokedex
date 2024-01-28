import React from "react";
import ContactPageButton from "@/components/ContactPageButtonComponent";
import LogoImageComponent from "@/components/LogoImageComponent";

export default function Header2() {
  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden bg-[#fd0000] shadow-xl shadow-[#FE0000] h-[150px]">
        <div className="absolute top-0 left-0 right-0 p-10">
          <h1 className="drop-shadow-xl text-2xl sm:text-3xl md:text-6xl font-extrabold text-[yellow]">
            YOUR OWN POKEDEX
          </h1>
          <h1 className="absolute top-9 left-9 drop-shadow-xl text-2xl sm:text-3xl md:text-6xl font-extrabold text-[black]">
            YOUR OWN POKEDEX
          </h1>
        </div>

        <div className="absolute top-8 right-8 m-4 flex gap-10 items-center">
          <ContactPageButton />
          <LogoImageComponent />
        </div>
      </div>
    </>
  );
}
