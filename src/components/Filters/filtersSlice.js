import {
  createAction,
  createReducer,
} from '@reduxjs/toolkit';

export const SEARCH_NAME_CHANGE = createAction(
  'SEARCH_NAME_CHANGE'
);
export const SEARCH_STATUS_CHANGE = createAction(
  'SEARCH_STATUS_CHANGE'
);
export const SEARCH_PRIORITY_CHANGE =
  createAction('SEARCH_PRIORITY_CHANGE');
export const SEARCH_CHANGE = createAction(
  'SEARCH_CHANGE'
);

const initState = {
  filterByName: '',
  filterByStatus: 'all',
  filterByPriority: {
    low: true,
    medium: true,
    high: true,
  },
};

const filtersSlice = createReducer(
  initState,
  (builder) => {
    builder
      .addCase(
        SEARCH_NAME_CHANGE,
        (state, action) => {
          state.filterByName = action.payload;
        }
      )
      .addCase(
        SEARCH_STATUS_CHANGE,
        (state, action) => {
          state.filterByStatus = action.payload;
        }
      )
      .addCase(
        SEARCH_PRIORITY_CHANGE,
        (state, action) => {
          state.filterByPriority = action.payload;
        }
      )
      .addCase(SEARCH_CHANGE, (state, action) => {
        return (state = action.payload);
      });
  }
);
export default filtersSlice;
