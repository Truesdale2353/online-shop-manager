import styled from 'styled-components';

const StyledThumbnailImage = styled.img`
cursor: pointer;
transition: opacity 0.3s ease;
width: 50px;
height: 50px;

&:hover {
  opacity: 0.7;
}
`;

export { StyledThumbnailImage }