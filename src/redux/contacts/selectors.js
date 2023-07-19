export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;

// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const filterToLowerCase = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
};


// !==========================
// export const getContacts = state => state.contacts.items;

// export const getFilter = state => state.filter;


// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
