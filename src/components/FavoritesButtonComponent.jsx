import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import styled from "styled-components";

const StyledFavoritePokemonButton = styled.div`
  display: inline-block;
  visibility: ${({ loaded }) => (loaded ? "visible" : "hidden")};
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

function FavoritesButtonComponent({ loaded }) {
  return (
    <div>
      <StyledFavoritePokemonButton loaded={loaded}>
        <Button
          variant="contained"
          className="bg-[#fd0000] hover:bg-[#9a0000] h-[61px] max-h-[61px] w-[150px] max-w-[150px]"
        >
          Favorites
        </Button>
      </StyledFavoritePokemonButton>
    </div>
  );
}

export default FavoritesButtonComponent;
