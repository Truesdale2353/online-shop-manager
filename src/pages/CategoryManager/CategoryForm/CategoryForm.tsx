import { Category } from "@/components/types/CategoryTypes";
import ControllerWrapper from "@/pages/ProductEditor/components/ControllerWrapper";

import { yupResolver } from "@hookform/resolvers/yup";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { categoryFormSchema } from "./categoryFormSchema";

interface FormProps {
  category?: Category;
  onSubmit: (data: Category) => void;
  children?: React.ReactNode;
}
const CategoryForm = ({ category, onSubmit, children }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Category>({
    resolver: yupResolver<Category>(categoryFormSchema),
    defaultValues: {
      id: category?.id || "",
      name: category?.name || "",
      displayName: category?.displayName || "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ControllerWrapper
            name="name"
            label="Name"
            control={control}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ControllerWrapper
            name="displayName"
            label="Display Name"
            control={control}
            error={Boolean(errors.displayName)}
            helperText={errors.displayName?.message}
          />
        </Grid>
      </Grid>
      {children}
    </form>
  );
};

export { CategoryForm };
