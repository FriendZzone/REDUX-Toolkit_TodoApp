import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

RadioField.propTypes = {};

function RadioField({
  form,
  name,
  label,
  disabled,
}) {
  // console.log(form.formState, form);
  const { errors } = form.formState;
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => {
        return (
          <FormControl error={!!errors[name]}>
            <FormLabel>{label}</FormLabel>
            <RadioGroup {...field} name={name}>
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="All"
              />
              <FormControlLabel
                value="completed"
                control={<Radio />}
                label="Completed"
              />
              <FormControlLabel
                value="doing"
                control={<Radio />}
                label="Doing"
              />
            </RadioGroup>
            <FormHelperText>
              {errors[name]?.message || ' '}
            </FormHelperText>
          </FormControl>
        );
      }}
    ></Controller>
  );
}

export default RadioField;
