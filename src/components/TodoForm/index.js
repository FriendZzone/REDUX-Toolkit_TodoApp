import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import InputField from '../form-control/InputField';
import SelectField from '../form-control/SelectField';
import { ADD_TODO } from '../TodoList/todoListSlice';
TodoForm.propTypes = {};
function TodoForm(props) {
  const schema = yup
    .object()
    .shape({
      todoName: yup.string().required('Required'),
      todoPriority: yup.string(),
    })
    .required();

  const form = useForm({
    defaultValues: {
      todoName: '',
      todoPriority: 'medium',
    },

    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handleSubmit = (newTodo) => {
    dispatch(
      ADD_TODO({
        id: uuidv4(),
        name: newTodo.todoName,
        completed: false,
        priority: newTodo.todoPriority,
      })
    );
    form.resetField('todoName');
    form.setFocus('todoName');
  };
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <div
        style={{
          display: 'flex',
          marginTop: '20px',
        }}
      >
        <InputField
          name="todoName"
          form={form}
          label="Add New Todo"
        />
        <SelectField
          name="todoPriority"
          form={form}
          label="Priority"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            height: '56px',
            margin: 'auto',
          }}
        >
          Add
        </Button>
      </div>
    </form>
  );
}

export default TodoForm;
