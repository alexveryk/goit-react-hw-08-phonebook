import { ContactLst } from 'components/ContactLst/ContactList';
import { Filter } from 'components/Filter/Filter';

import { PhonebookForm } from 'components/PhonebookForm/PhoneForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PhonebookForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactLst />
    </div>
  );
};
