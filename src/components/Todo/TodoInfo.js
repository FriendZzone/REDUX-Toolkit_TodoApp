import {
  Avatar,
  Button,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

const priorityColorMapping = {
  High: '#e46161',
  Medium: '#f1b963',
  Low: '#cbf078',
};
function TodoInfo({
  priorityFormat,
  name,
  handleEditTodo,
}) {
  return (
    <>
      <ListItemText>
        <Typography noWrap>{name}</Typography>
      </ListItemText>
      <ListItemIcon>
        <Avatar
          sx={{
            fontSize: '14px',
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
      <Button>
        <EditIcon
          color="info"
          onClick={handleEditTodo}
        />
      </Button>
    </>
  );
}

export default TodoInfo;
