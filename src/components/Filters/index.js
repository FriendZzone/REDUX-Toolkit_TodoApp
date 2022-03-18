import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import CheckboxField from '../form-control/CheckboxField';
import InputField from '../form-control/InputField';
import RadioField from '../form-control/RadioField';
import { SEARCH_CHANGE } from './filtersSlice';
export default function Filters() {
  const schema = yup
    .object()
    .shape({
      filterByName: yup.string(),
    })
    .required();

  const form = useForm({
    defaultValues: {
      filterByName: '',
      filterByStatus: 'all',
      filterByPriority: {
        low: true,
        medium: true,
        high: true,
      },
    },

    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = (value) => {
    dispatch(SEARCH_CHANGE(value));
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={12}>
          <InputField
            name="filterByName"
            form={form}
            label="Search Todo by Name"
            placeholder="Input Todo name..."
            disabled={false}
          ></InputField>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ paddingLeft: '20px' }}
        >
          <RadioField
            name="filterByStatus"
            form={form}
            label="Search Todo by Status"
            disabled={false}
          ></RadioField>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ paddingLeft: '20px' }}
        >
          <CheckboxField
            form={form}
            name="filterByPriority"
            disabled={false}
            label="Search Todo by Priority"
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Search
        </Button>
      </Grid>
    </form>
  );
}
