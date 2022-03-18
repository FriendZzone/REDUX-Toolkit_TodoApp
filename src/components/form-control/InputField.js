import {
  FormControl,
  FormLabel,
  TextField,
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {};

function InputField({
  form,
  name,
  label,
  disabled,
  placeholder,
}) {
  // console.log(form.formState, form);
  const { errors } = form.formState;
  return (
    <Controller
      name={name}
      control={form.control}
      defaultValue
      render={({ field, fieldState }) => {
        return (
          <FormControl
            error={!!errors[name]}
            fullWidth
            sx={{ height: '120%' }}
          >
            <FormLabel>{label}</FormLabel>
            <TextField
              placeholder={placeholder}
              // label={label}
              disabled={disabled}
              fullWidth
              error={!!errors[name]}
              helperText={
                errors[name]?.message || ' '
              }
              {...field}
            />
          </FormControl>
        );
      }}
    ></Controller>
  );
}

export default InputField;
