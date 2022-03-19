import {
  Button,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function TodoEdit({
  editName,
  handleEditNameChange,
  editPriority,
  handleEditPriorityChange,
  handleSubmitEditTodo,
}) {
  return (
    <>
      <ListItemText>
        <TextField
          sx={{ fontSize: '10px' }}
          autoFocus
          fullWidth
          value={editName}
          onChange={handleEditNameChange}
        />
      </ListItemText>
      <Select
        sx={{ minWidth: '25%', fontSize: '14px' }}
        value={editPriority}
        onChange={handleEditPriorityChange}
      >
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
      <Button
        size="small"
        sx={{ minWidth: '40px' }}
      >
        <CheckCircleIcon
          color="success"
          onClick={handleSubmitEditTodo}
        />
      </Button>
    </>
  );
}

export default TodoEdit;
