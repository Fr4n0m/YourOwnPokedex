import React from "react";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import styled from "styled-components";

const StyledCreatePokemonButton = styled.div`
  display: inline-block;
  visibility: ${({ loaded }) => (loaded ? "visible" : "hidden")};
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

export default function CreatePokemonButtonComponent({ loaded }) {
  return (
    <>
      <div>
        <StyledCreatePokemonButton loaded={loaded}>
          <Link href={"/createPokemon/createPokemon"}>
            <Button
              variant="contained"
              className="bg-[#fd0000] hover:bg-[#9a0000] max-w-[150px]"
            >
              Create Pokemon
            </Button>
          </Link>
        </StyledCreatePokemonButton>
      </div>
    </>
  );
}
