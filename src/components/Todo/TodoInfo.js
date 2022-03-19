import {
  Avatar,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const priorityColorMapping = {
  High: '#e46161',
  Medium: '#f1b963',
  Low: '#cbf078',
};
function TodoInfo({
  priorityFormat,
  name,
  handleEditTodo,
  handleDeleteTodo,
}) {
  return (
    <>
      <ListItemText>
        <Typography noWrap>{name}</Typography>
      </ListItemText>
      <ListItemIcon>
        <Avatar
          sx={{
            fontSize: '12px',
            bgcolor:
              priorityColorMapping[
                priorityFormat
              ],
            width: '100%',
            height: '28px',
          }}
          variant="rounded"
        >
          {priorityFormat}
        </Avatar>
      </ListItemIcon>
      <Button
        size="small"
        sx={{ minWidth: '36px' }}
      >
        <EditIcon
          color="info"
          onClick={handleEditTodo}
        />
      </Button>
      <Button
        size="small"
        sx={{ minWidth: '36px' }}
      >
        <DeleteIcon
          color="error"
          onClick={handleDeleteTodo}
        />
      </Button>
    </>
  );
}

export default TodoInfo;
