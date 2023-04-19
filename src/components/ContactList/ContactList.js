import { useSelector } from 'react-redux';
import { Contacts } from '../Contacts/Contacts';
import { selectAllContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contacts id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
