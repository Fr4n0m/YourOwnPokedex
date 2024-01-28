import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContactPageButtonComponent from "@/components/ContactPageButtonComponent";
import LogoImageComponent from "@/components/LogoImageComponent";

export default function HeaderComponent() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-[#fd0000] shadow-xl shadow-[#cb0605]">
      <div className={`m-4 ${styles.shadowContainer} rounded-xl`}>
        <Image
          className={`h-auto w-full max-h-[80vh] rounded-xl ${styles.whiteShadow}`}
          src="/assets/images/all-pokemon.jpg"
          alt="All Pokemon"
          width={600}
          height={400}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 p-10">
        <h1 className="drop-shadow-xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-[yellow]">
          YOUR <br /> OWN <br /> POKEDEX
        </h1>
        <h1 className="absolute top-9 left-9 drop-shadow-xl text-4xl sm:text-5xl md:text-6xl font-extrabold text-[black]">
          YOUR <br /> OWN <br /> POKEDEX
        </h1>
      </div>

      <div className="absolute top-8 right-8 m-4 flex gap-10 items-center">
        <ContactPageButtonComponent />
        <LogoImageComponent />
      </div>
    </div>
  );
}
