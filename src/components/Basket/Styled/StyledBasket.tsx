import styled from "styled-components";

const StyledBasket = styled.div`
  position: absolute;
  right: 20px;
  z-index: 100;
  width: 400px;
  background-color: #333;
  transition: opacity 0.5s ease;
  overflow-y: auto;
  max-height: 300px;
  padding: 5px 5px 0px 5px;
`;

export { StyledBasket };
