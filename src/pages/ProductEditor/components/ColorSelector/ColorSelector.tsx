import React, { useState } from "react";
import styled from "styled-components";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import { productColors } from "@/assets/productColors";

const StyledFormControl = styled(FormControl)`
  && {
    width: 300px;
  }
`;

interface ColorSelectorProps {
  onChange: Function;
}

const ColorSelector = ({ onChange }: ColorSelectorProps) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value);
    setSelectedColors(event.target.value as string[]);
  };

  return (
    <StyledFormControl>
      <InputLabel>Colors</InputLabel>
      <Select
        multiple
        value={selectedColors}
        onChange={handleChange}
        renderValue={(selected) => (
          <div>
            {(selected as string[]).map((color) => (
              <span
                key={color}
                style={{
                  backgroundColor: productColors[color],
                  border: "1px solid #ccc",
                  height: "25px",
                  width: "25px",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: "3px",
                }}
              ></span>
            ))}
          </div>
        )}
      >
        {Object.keys(productColors).map((color) => (
          <MenuItem key={color} value={color}>
            <Checkbox checked={selectedColors.includes(color)} />
            <ListItemText primary={color} />
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export { ColorSelector };
