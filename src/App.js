import '@fontsource/montserrat';
import {
  Container,
  createTheme,
  Divider,
  ThemeProvider,
  Typography,
} from '@mui/material';
import './App.css';
import Filters from './components/Filters';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
      fontWeightRegular: 700,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container
          sx={{
            minHeight: '80vh',
            maxHeight: '90vh',
            maxWidth: '96%',
            backgroundColor: '#fff',
            borderRadius: '20px',
            overflowY: 'auto',
          }}
          maxWidth="sm"
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              marginTop: '20px',
            }}
            variant="h5"
            align="center"
            gutterBottom
          >
            Todo App with REDUX Toolkit
          </Typography>
          <Filters />
          <Divider sx={{ margin: '16px 0' }} />
          <TodoList />
          <TodoForm />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
