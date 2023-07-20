export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const filterToLowerCase = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );
};
