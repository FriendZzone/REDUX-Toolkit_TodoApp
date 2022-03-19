import { Container, List } from '@mui/material';
import { useSelector } from 'react-redux';
import { todoSelector } from '../../redux/selectors';
import Todo from '../Todo';

export default function TodoList() {
  const todoList = useSelector(todoSelector);
  const todoListTest = useSelector(todoSelector);
  console.log(todoListTest);
  return (
    <Container
      sx={{
        // maxHeight: '25vh',
        backgroundColor: '#ffc0cb52',
        borderRadius: '20px',
        overflow: 'hidden scroll',
        height: '144px',
      }}
      maxWidth="sm"
    >
      <List>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </List>
    </Container>
  );
}
