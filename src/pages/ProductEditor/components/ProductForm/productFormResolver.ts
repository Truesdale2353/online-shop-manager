import * as yup from 'yup';
import { ProductFormProps } from '../../types';


const productFormSchema: yup.ObjectSchema<ProductFormProps> = yup.object({
  name: yup.string().required('Name is required'),
  price: yup.number().required('Price is required').positive('Price must be a positive number'),
  description: yup.string().required('Description is required'),
  colors: yup.array().of(yup.string().defined()).defined(),
});

export { productFormSchema };
