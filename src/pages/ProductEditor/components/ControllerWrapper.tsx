import { Controller, FieldValues } from 'react-hook-form';
import { TextField, MenuItem } from '@material-ui/core';

interface ControllerWrapperProps<T> {
  name: keyof T;
  label: string;
  control: any;
  error: any;
  helperText: string | undefined;
  options?: string[];
  externalField?: Function;
}

const ControllerWrapper = <T extends FieldValues>({
  name,
  label,
  control,
  error,
  helperText,
  options,
  externalField,
}: ControllerWrapperProps<T>) => {

  return (
    <Controller
      name={name.toString()}
      control={control}
      render={({ field }) => externalField ? externalField({...field}) : (
        <TextField
          {...field}
          label={label}
          fullWidth
          required
          error={Boolean(error)}
          helperText={helperText}
          select={options !== undefined}
        >
          {options &&
            options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>
      )}
    />
  );
};

export default ControllerWrapper;
