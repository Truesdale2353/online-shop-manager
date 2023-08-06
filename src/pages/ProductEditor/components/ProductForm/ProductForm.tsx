import { ControllerRenderProps, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Button } from "@material-ui/core";
import { productFormSchema } from "./productFormResolver";
import ControllerWrapper from "../ControllerWrapper";
import { Product, ProductFormProps } from "../../types";
import { ImageFormWithData } from "../ImageForm/ImageFormWithData";
import { ColorSelector } from "../ColorSelector/ColorSelector";

const categories = ["Shirt", "Pants", "Shoes"];

const defaultValues: ProductFormProps = {
  name: '',
  price: 0,
  description: '',
  colors: [],
}

interface FormProps {
  product?: Product;
  onSubmit: (data: ProductFormProps) => void;
}
const ProductForm = ({ product, onSubmit }: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormProps>({
    resolver: yupResolver<ProductFormProps>(productFormSchema),
    defaultValues: product || defaultValues,
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
            name="price"
            label="Price"
            control={control}
            error={Boolean(errors.price)}
            helperText={errors.price?.message}
          />
        </Grid>
        <Grid item xs={12}>
        <ControllerWrapper
            name="description"
            label="Description"
            control={control}
            error={Boolean(errors.description)}
            helperText={errors.description?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <ControllerWrapper
            name="colors"
            label="Colors"
            control={control}
            error={Boolean(errors.colors)}
            helperText={errors.colors?.message}
            externalField={({onChange}: ControllerRenderProps) => <ColorSelector onChange={onChange}/>}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
        <ControllerWrapper
            name="categories"
            label="Categories"
            control={control}
            error={Boolean(errors.categories)}
            helperText={errors.categories?.message}
            options={categories}
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <ImageFormWithData />
          </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Product
          </Button>
        </Grid>
      </Grid>
      </form>
  );
};

export default ProductForm;
