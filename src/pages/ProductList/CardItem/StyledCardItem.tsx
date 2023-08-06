import { colors } from "@/assets";
import styled from "styled-components";
import Card from "@mui/material/Card";

const StyledCardItem = styled(Card)`
  height: 400px;

  border-radius: 3px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  img {
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: blur(3px);
    }
  }
  @media screen and (max-width: 940px) {
    flex-basis: 48%;
  }

  @media screen and (max-width: 600px) {
    flex-basis: 98%;
  }

  @media screen and (min-width: 940px) {
    flex-basis: 23.888888%;
    
  }
`;

export { StyledCardItem };

