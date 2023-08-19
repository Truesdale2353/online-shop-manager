import { Category } from '@/components/types/CategoryTypes';
import * as yup from 'yup';


const categoryFormSchema: yup.ObjectSchema<Category> = yup.object({
    name: yup.string().required('Name is required'),
    displayName: yup.string().required('Display Name is required'),
    id: yup.string().default('')
});

export  { categoryFormSchema };

