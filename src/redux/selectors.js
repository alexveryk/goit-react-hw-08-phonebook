export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

const getVisibleName = (contacts, filter) => {
  const contactNormalize = filter.filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactNormalize)
  );
};

export const selectVisibleName = state => {
  const constacts = selectContacts(state);
  const filter = selectFilter(state);

  return getVisibleName(constacts, filter);
};
