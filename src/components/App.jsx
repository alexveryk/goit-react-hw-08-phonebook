import { ContactLst } from './ContactLst/ContactList';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhoneForm';
import { AppContainer } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactLst />
    </AppContainer>
  );
};
