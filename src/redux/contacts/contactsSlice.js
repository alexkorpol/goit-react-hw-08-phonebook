import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './services-API';


const initialState = {
  items: [],
  error: null,
};

// const handleSetErrorMessage = (state, action) => {
//   state.isLoading = false;
//   state.error = action.error.message;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.error = null;
      });
  },
});

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;

// !============================
// import { createSlice } from '@reduxjs/toolkit';
// import { fetchAll, addContact, deleteContact } from './operations';

// const initialState = {
//   items: [],
//   error: null,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchAll.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(fetchAll.fulfilled, (state, action) => {
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(addContact.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items = [...state.items, action.payload];
//         state.error = null;
//       })
//       .addCase(deleteContact.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(item => item.id !== action.payload.id);
//         state.error = null;
//       });
//   },
// });

// const { reducer: contactsReducer } = contactsSlice;
// export default contactsReducer;
