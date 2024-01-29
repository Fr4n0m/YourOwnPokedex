import React from "react";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";

const BackButton = ({ arrowSize = 40 }) => {
  const arrowStyle = {
    fontSize: `${arrowSize}px`,
  };
  return (
    <div className="animate__animated animate__fadeInLeft">
      <Link href="/">
        <Button
          variant="normal"
          className="flex items-center text-gray-200 hover:text-[#590706] mt-10 ml-10 max-w-[40px] rounded-[45%]"
        >
          <ArrowBack
            style={arrowStyle}
            className="p-1 hover:border-[#590706]"
          />
        </Button>
      </Link>
    </div>
  );
};

export default BackButton;
