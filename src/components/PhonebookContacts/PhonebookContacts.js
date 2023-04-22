import { ContactLst } from 'components/ContactLst/ContactList';
import { Filter } from 'components/Filter/Filter';
import { PhonebookForm } from 'components/PhonebookForm/PhoneForm';

export const PhonebookContacts = () => {
  return (
    <div>
      <PhonebookForm />
      <Filter />
      <ContactLst />
    </div>
  );
};
