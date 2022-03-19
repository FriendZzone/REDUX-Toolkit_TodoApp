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
    name: 'Find first Internship Job',
    completed: false,
    priority: 'high',
  },
];
export const ADD_TODO = createAction('ADD_TODO');
export const EDIT_TODO =
  createAction('EDIT_TODO');
export const DELETE_TODO = createAction(
  'DELETE_TODO'
);
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
      })
      .addCase(EDIT_TODO, (state, action) => {
        const todo = state.find(
          (item) => item.id === action.payload.id
        );
        todo.name = action.payload.name;
        todo.priority = action.payload.priority;
        localStorage.setItem(
          'todoList',
          JSON.stringify(state)
        );
      })
      .addCase(DELETE_TODO, (state, action) => {
        const todoList = state.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem(
          'todoList',
          JSON.stringify(todoList)
        );
        return (state = todoList);
      });
  }
);
