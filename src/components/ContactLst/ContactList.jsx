import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleName } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';

export const ContactLst = () => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContacts(id));

  const visibleName = useSelector(selectVisibleName);

  return (
    <List>
      {visibleName.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <BtnDelete
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
            >
              Delete
            </BtnDelete>
          </ListItem>
        );
      })}
    </List>
  );
};
