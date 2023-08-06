import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { StyledImage, StyledImageContainer, StyledThumbnailImage } from './Styled'


interface ImageGalleryProps {
  images?: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <StyledImageContainer>
      <StyledImage src={currentImage} alt="Main" />

      <Grid container spacing={2} justifyContent="center" alignItems="center" marginTop={'5px'}>
        {images.map((image, index) => (
          <Grid item key={index}>
            <StyledThumbnailImage
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </Grid>
        ))}
      </Grid>
    </StyledImageContainer>
  );
};

export default ImageGallery;
