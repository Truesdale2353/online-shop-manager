// components/CategoryDialog.tsx
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { CategoryForm } from '@/pages/CategoryManager/CategoryForm/CategoryForm';
import { Category } from '../types/CategoryTypes';

interface CategoryDialogProps {
  open: boolean;
  onClose: () => void;
  onAddCategory: (category: Category) => void;
  category?: Category
}

const CategoryDialog: React.FC<CategoryDialogProps> = ({ open, onClose, onAddCategory, category }) => {

  const handleAddClick = (category: Category) => {
    console.log(category);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <CategoryForm
         category={category}
         onSubmit={handleAddClick}
        >
          <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button  type="submit" color="primary">
          Add
        </Button>
      </DialogActions>
        </CategoryForm>
      </DialogContent>
    </Dialog>
  );
};

export { CategoryDialog };
