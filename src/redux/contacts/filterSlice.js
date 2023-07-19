import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      return state = action.payload;

    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


// !==========================
// import { createSlice } from '@reduxjs/toolkit';

// const initialFilterState = '';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: initialFilterState,
//   reducers: {
//     changeFilter(state, action) {
//       return (state = action.payload); // Оновлення значення з попереднього
//     },
//   },
// });

// export const { changeFilter } = filterSlice.actions;

// export const filterReducer = filterSlice.reducer;

