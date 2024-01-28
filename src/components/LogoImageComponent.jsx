import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoImageComponent() {
  return (
    <div>
      <Link href={{ pathname: "/contact/contact" }}>
        <Image
          src="/assets/images/logo.webp"
          alt="FRM"
          className="rounded-[50%] hover:cursor-pointer hover:opacity-85"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
