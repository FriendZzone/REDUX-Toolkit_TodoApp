import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

SelectField.propTypes = {};

function SelectField({
  form,
  name,
  label,
  disabled,
}) {
  const { errors } = form.formState;
  const [age, setAge] = useState(() =>
    form.getValues(name)
  );

  const handleChange = (event) => {
    setAge(event.target.value);
    form.setValue(name, event.target.value);
  };
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => {
        return (
          <FormControl
            error={!!errors[name]}
            sx={{
              width: '30%',
            }}
          >
            <FormLabel>{label}</FormLabel>
            <Select
              {...field}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">
                Medium
              </MenuItem>
              <MenuItem value="high">
                High
              </MenuItem>
            </Select>
          </FormControl>
        );
      }}
    ></Controller>
  );
}

export default SelectField;
