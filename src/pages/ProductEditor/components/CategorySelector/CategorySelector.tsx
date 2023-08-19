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
import { Category } from "@/components/types/CategoryTypes";

const StyledFormControl = styled(FormControl)`
  && {
    width: 300px;
  }
`;

interface CategorySelectorProps {
  onChange: Function;
  categories: Array<Category>;
}

const CategorySelector = ({ onChange, categories }: CategorySelectorProps) => {
  const [selectedCategories, setCategories] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value);
    setCategories(event.target.value as string[]);
  };

  return (
    <StyledFormControl>
      <InputLabel>Categories</InputLabel>
      <Select
        multiple
        value={selectedCategories}
        onChange={handleChange}
        MenuProps={{
          variant: "menu",
          getContentAnchorEl: null,
        }}
        renderValue={(selected) => (
          <div>
            {(selected as string[])
              .map((currentCategory) => {
                const g = categories.find((c) => c.id === currentCategory);
                return g?.name;
              })
              .join(", ")}
          </div>
        )}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            <Checkbox checked={selectedCategories.indexOf(category.id) > -1} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export { CategorySelector };
