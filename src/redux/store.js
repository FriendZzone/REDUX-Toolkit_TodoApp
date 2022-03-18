import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import { todoListSlice } from '../components/TodoList/todoListSlice';

const store = configureStore({
  reducer: {
    todoList: todoListSlice,
    filters: filtersSlice,
  },
});

export default store;
