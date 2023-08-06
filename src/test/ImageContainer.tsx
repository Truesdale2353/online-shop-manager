import styled from "styled-components";

const StyledImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 500px;
  height: 500px;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ImageText = styled.p`
  position: absolute;
  top: 65%;
  left: 5%;
  width: 90%;
  transform-origin: top left;
  transform: translate(-50%, -50%);
  padding: 10px;
  font-size: 2em;
  font-weight: 600;
  background: -webkit-radial-gradient(#a7824e, #875c3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Cursive;
  transform: rotate(2deg);
`;

interface ImageContainerProps {
  text: string;
}
const ImageContainer = ({ text }: ImageContainerProps) => {
  return (
    <StyledImageContainer>
      <img src="src\test\image.jpg" />
      <ImageText>{text}</ImageText>
    </StyledImageContainer>
  );
};

export { ImageContainer };
