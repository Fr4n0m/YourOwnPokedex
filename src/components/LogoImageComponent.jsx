import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoImageComponent() {
  const handleHover = (e) => {
    e.target.classList.remove("animate__backInRight");
    e.target.classList.add("animate__rubberBand");
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove("animate__rubberBand");
  };
  return (
    <div>
      <Link href={{ pathname: "/contact/contactPage" }}>
        <Image
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          src="/assets/images/logo.webp"
          alt="FRM"
          className="animate__animated animate__backInRight rounded-[50%] hover:cursor-pointer hover:opacity-85"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
