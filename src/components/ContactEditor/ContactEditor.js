import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addContact(text));
      form.reset();
      return;
    }
    alert('Contacts cannot be empty. Enter some text!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="text" />
      <button type="submit">Add contacts</button>
    </form>
  );
};
