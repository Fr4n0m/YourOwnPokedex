import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ContactPageButton() {
  const handleHover = (e) => {
    e.target.classList.remove("animate__backInDown");
    e.target.classList.add("animate__pulse", "animate__infinite");
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove("animate__pulse");
  };

  return (
    <div>
      <Link href={{ pathname: "/contact/contactPage" }}>
        <Button
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          variant="outlined"
          className="animate__animated animate__backInDown text-[yellow] font-bold bg-[#9d9d01b1] border-[yellow] border-[3px] hover:bg-[#9d9d01e8] hover:border-[yellow] hover:border-[3px]"
        >
          Contact me
        </Button>
      </Link>
    </div>
  );
}
