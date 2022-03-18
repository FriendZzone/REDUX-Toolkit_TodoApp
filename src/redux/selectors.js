import { createSelector } from '@reduxjs/toolkit';

export const nameSelector = (state) =>
  state.todoList.filter((item) =>
    item.name
      .toLowerCase()
      .includes(
        state.filters.filterByName.toLowerCase()
      )
  );
export const statusSelector = (state) => {
  const status = state.filters.filterByStatus;
  switch (status) {
    case 'all':
      return state.todoList;
    case 'completed':
      return state.todoList.filter(
        (item) => item.completed === true
      );
    case 'doing':
      return state.todoList.filter(
        (item) => item.completed === false
      );
    default:
      break;
  }
};
export const prioritySelector = (state) => {
  const todoList = state.todoList;
  const priorityBooleanFormat =
    state.filters.filterByPriority;
  const priorityArrayFormat = Object.entries(
    priorityBooleanFormat
  ).filter((key) => key[1] === true);
  const priorityFilter = priorityArrayFormat.map(
    (item) => item[0]
  );

  return todoList.filter((item) =>
    priorityFilter.includes(item.priority)
  );
};
export const todoSelector = createSelector(
  nameSelector,
  statusSelector,
  prioritySelector,
  (
    nameSelector,
    statusSelector,
    prioritySelector
  ) => {
    return nameSelector.filter((item) => {
      const filteredStatusIds =
        statusSelector.map((todo) => todo.id);
      const filteredPriorityIds =
        prioritySelector.map((todo) => todo.id);
      return (
        filteredStatusIds.includes(item.id) &&
        filteredPriorityIds.includes(item.id)
      );
    });
  }
);
