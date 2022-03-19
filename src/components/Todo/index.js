import {
  Checkbox,
  ListItem,
  ListItemIcon,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from '../TodoList/todoListSlice';
import TodoEdit from './TodoEdit';
import TodoInfo from './TodoInfo';

export default function Todo({ todo }) {
  const { id, name, completed, priority } = todo;
  const [checked, setChecked] =
    useState(completed);

  const [edit, setEdit] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editPriority, setEditPriority] =
    useState(priority);
  const priorityFormat =
    priority.charAt(0).toUpperCase() +
    priority.slice(1);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch(TOGGLE_TODO(id));
    setChecked(!checked);
  };

  const handleEditTodo = () => {
    setEdit(!edit);
  };
  const handleDeleteTodo = () => {
    dispatch(DELETE_TODO(id));
  };
  const handleEditPriorityChange = (e) => {
    setEditPriority(e.target.value);
  };
  const handleEditNameChange = (e) => {
    setEditName(e.target.value);
  };
  const handleSubmitEditTodo = () => {
    dispatch(
      EDIT_TODO({
        id,
        name: editName,
        priority: editPriority,
      })
    );
    setEdit(!edit);
  };

  return (
    <ListItem
      sx={
        checked
          ? {
              textDecoration: 'line-through',
              opacity: 0.7,
              padding: 0,
            }
          : { padding: 0 }
      }
    >
      <ListItemIcon sx={{ minWidth: '24px' }}>
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox}
        />
      </ListItemIcon>
      {edit ? (
        <TodoEdit
          editName={editName}
          handleEditNameChange={
            handleEditNameChange
          }
          editPriority={editPriority}
          handleEditPriorityChange={
            handleEditPriorityChange
          }
          handleSubmitEditTodo={
            handleSubmitEditTodo
          }
        />
      ) : (
        <TodoInfo
          priorityFormat={priorityFormat}
          name={name}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      )}
    </ListItem>
  );
}
