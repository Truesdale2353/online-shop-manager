import { Clear } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Box,
} from "@mui/material";

interface Image {
  file: File;
}

interface ImageFormProps {
  images: Image[];
  handleImageDelete: Function;
  handleImageUpload: Function;
}
const ImageForm = ({
  images = [],
  handleImageDelete = () => {},
  handleImageUpload = () => {},
}: ImageFormProps) => {
  return (
    <>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(event)=>handleImageUpload(event.target.files)}
          />
        </Grid>
        <Typography variant="h6">Images</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" flexWrap="wrap" gap="8px">
          {images.map((image, index) => (
            <Box
              key={index}
              position="relative"
              width="150px"
              height="150px"
              bgcolor="lightgray"
              borderRadius="4px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={URL.createObjectURL(image.file)}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <IconButton
                edge="end"
                aria-label="Delete"
                onClick={() => handleImageDelete(index)}
                size="small"
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "4px",
                  backgroundColor: "white",
                }}
              >
                <Clear />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Grid>
    </>
  );
};

export { ImageForm };
