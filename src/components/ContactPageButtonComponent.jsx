import React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function ContactPageButton() {
  return (
    <div>
      <Link href={{ pathname: "/contact/contact" }}>
        <Button
          variant="outlined"
          className="text-[yellow] font-bold border-[yellow] border-[2px] hover:bg-[#9a0000] hover:border-[yellow] hover:border-[2px]"
        >
          Contact me
        </Button>
      </Link>
    </div>
  );
}
