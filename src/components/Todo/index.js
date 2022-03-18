import {
  Avatar,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_TODO } from '../TodoList/todoListSlice';
const priorityColorMapping = {
  High: '#e46161',
  Medium: '#f1b963',
  Low: '#cbf078',
};

export default function Todo({ todo }) {
  const { id, name, completed, priority } = todo;
  const [checked, setChecked] =
    useState(completed);
  const priorityFormat =
    priority.charAt(0).toUpperCase() +
    priority.slice(1);
  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    dispatch(TOGGLE_TODO(id));
    setChecked(!checked);
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
      <ListItemIcon>
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox}
        />
      </ListItemIcon>
      <ListItemText primary={name} />
      <ListItemIcon>
        <Avatar
          sx={{
            bgcolor:
              priorityColorMapping[
                priorityFormat
              ],
            width: '100%',
          }}
          variant="rounded"
        >
          {priorityFormat}
        </Avatar>
      </ListItemIcon>
    </ListItem>
  );
}
