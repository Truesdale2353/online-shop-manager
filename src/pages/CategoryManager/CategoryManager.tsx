import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CategoryActions,
  CategoryList,
  CategoryManagerWrapper,
  StyledTextContainer,
} from "./styled";
import { Category } from "@/components/types/CategoryTypes";

interface CategoryManagerProps {
  onDeleteCategory: (categoryId: string) => void;
  onEditClick: (category: Category) => void;
  categories: Array<Category> | null;
}

const CategoryManager = ({
  onDeleteCategory,
  onEditClick,
  categories,
}: CategoryManagerProps) => {
  return (
    <>
      <CategoryManagerWrapper>
        <CategoryList>
          {categories &&
            categories.map((category) => (
              <ListItem key={category.id}>
                <StyledTextContainer>
                  <ListItemText primary={category.name} secondary={category.displayName} />
                </StyledTextContainer>
                <CategoryActions>
                  <IconButton onClick={() => onEditClick(category)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDeleteCategory(category.id)}>
                    <DeleteIcon />
                  </IconButton>
                </CategoryActions>
              </ListItem>
            ))}
        </CategoryList>
      </CategoryManagerWrapper>
    </>
  );
};

export { CategoryManager };
