import { CategoryDialog } from "@/components/CategoriesDialog";
import { Button } from "@mui/material";
import { useFetchCategories } from "../ProductEditor/hooks/useFetchCategories";
import { useState } from "react";
import { CategoryManager } from ".";
import { Category } from "@/components/types/CategoryTypes";

const CategoryManagerWithData = () => {
  const [categories, isLoading] = useFetchCategories();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [categoryInEdit, setCategoryInEdit] = useState<Category>();

  const onEditClick = (category?: Category) => {
    setCategoryInEdit(category);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (categoryId: string) => {
    console.log(`Deleted ${categoryId}`);
  };

  return (
    !isLoading && (
      <>
        <CategoryManager
          onEditClick={onEditClick}
          onDeleteCategory={handleDeleteClick}
          categories={categories}
        ></CategoryManager>
        <Button onClick={() => onEditClick(undefined)}> Add Category </Button>
        <CategoryDialog
          open={isDialogOpen}
          category={categoryInEdit}
          onClose={() => setIsDialogOpen(false)}
          onAddCategory={() => console.log("ADDED")}
        ></CategoryDialog>
      </>
    )
  );
};

export { CategoryManagerWithData };
