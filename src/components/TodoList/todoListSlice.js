import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

const initState = JSON.parse(
  localStorage.getItem('todoList')
) || [
  {
    id: 1,
    name: 'Learn Javascript',
    completed: true,
    priority: 'low',
  },
  {
    id: 2,
    name: 'Learn ReactJS',
    completed: false,
    priority: 'high',
  },
  {
    id: 3,
    name: 'Redux & Toolkit',
    completed: false,
    priority: 'medium',
  },
  {
    id: 4,
    name: 'Git & Github',
    completed: false,
    priority: 'medium',
  },
];
export const ADD_TODO = createAction('ADD_TODO');
export const TOGGLE_TODO = createAction(
  'TOGGLE_TODO'
);
export const todoListSlice = createReducer(
  initState,
  (builder) => {
    builder
      .addCase(ADD_TODO, (state, action) => {
        state.push(action.payload);
        localStorage.setItem(
          'todoList',
          JSON.stringify(state)
        );
      })
      .addCase(TOGGLE_TODO, (state, action) => {
        const todo = state.find(
          (item) => item.id === action.payload
        );
        todo.completed = !todo.completed;
        localStorage.setItem(
          'todoList',
          JSON.stringify(state)
        );
      });
  }
);
