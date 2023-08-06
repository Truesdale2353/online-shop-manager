import React, { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { ColorSelector } from "./components/ColorSelector";
import { StyledCardItem } from "./StyledCardItem";

interface CardItemProps {
  image?: string;
  description?: string;
  colors?: Array<string>;
  setImage?: Function;
  title?: string;
  onClick?: Function;
}

const CardItem = ({
  image,
  colors = [],
  setImage = () => {},
  description,
  title,
  onClick = () => {},
}: CardItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledCardItem
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <CardMedia component="img" height="70%" image={image} alt="Paella dish" onClick={() => onClick()}/>
      <CardContent >
        {!expanded ? (
          <div>
            <Typography variant="body1" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </div>
        ) : (
          <div>
            <CardActions>
              <div> 123$</div>
              <ColorSelector
                setColor={setImage}
                colors={colors}
              ></ColorSelector>
            </CardActions>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </div>
        )}
      </CardContent>
    </StyledCardItem>
  );
};

export { CardItem };
