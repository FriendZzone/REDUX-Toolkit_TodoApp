import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

CheckboxField.propTypes = {};

function CheckboxField({
  form,
  name,
  label,
  disabled,
}) {
  const [formValues, setFormValues] = useState(
    () => {
      return form.getValues(name);
    }
  );
  // const { errors } = form.formState;
  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.value]: e.target.checked,
    });
    form.setValue(name, {
      ...formValues,
      [e.target.value]: e.target.checked,
    });
  };
  return (
    <Controller
      name={name}
      control={form.control}
      render={() => {
        return (
          <FormControl>
            <FormLabel>{label}</FormLabel>

            <FormControlLabel
              value="low"
              control={
                <Checkbox
                  defaultChecked
                  onChange={handleOnChange}
                />
              }
              label="Low"
            />
            <FormControlLabel
              value="medium"
              control={
                <Checkbox
                  defaultChecked
                  onChange={handleOnChange}
                />
              }
              label="Medium"
            />
            <FormControlLabel
              value="high"
              control={
                <Checkbox
                  defaultChecked
                  onChange={handleOnChange}
                />
              }
              label="High"
            />
          </FormControl>
        );
      }}
    ></Controller>
  );
}

export default CheckboxField;
