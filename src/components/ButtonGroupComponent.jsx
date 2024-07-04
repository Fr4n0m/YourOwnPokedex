import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

function ButtonGroupComponent() {
  const textFavoritesButton = "Favorites",
    textCreatePokeButton = "Create Pokemon";

  return (
    <div className="flex flex-row gap-10 mt-10 justify-center w-full">
      <Link href={"/createPokemon/createPokemonPage"}>
        <Button
          variant="contained"
          className="bg-[#fd0000] hover:bg-[#9a0000] w-40 h-16 animate__animated animate__fadeInLeft animate__delay-1s"
        >
          {textCreatePokeButton}
        </Button>
      </Link>

      <Link href="#favorites-section">
        <Button
          variant="contained"
          className="bg-[#fd0000] hover:bg-[#9a0000] w-40 h-16 animate__animated animate__fadeInRight animate__delay-1s"
        >
          {textFavoritesButton}
        </Button>
      </Link>
    </div>
  );
}

export default ButtonGroupComponent;
