import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().required('Required'),
});

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = newContacts => {
    if (contacts.some(el => el.name === newContacts.name)) {
      alert(`${newContacts.name} is alredy in contacts`);
      return;
    }
    dispatch(addContacts(newContacts));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={PhonebookSchema}
      onSubmit={(values, actions) => {
        addNewContact(values);
        actions.resetForm();
      }}
    >
      {props => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  {...field}
                  placeholder="Name"
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="number">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.number && form.touched.number}
              >
                <FormLabel>Number</FormLabel>

                <Input
                  {...field}
                  placeholder="Number"
                  type="text"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
                <FormErrorMessage>{form.errors.number}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mb="32px"
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Add contact
          </Button>
        </Form>
      )}

      {/* <PhoneForm>
        <FormLabel>
          Name
          <FormField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></FormField>
          <ErrorMessageForm name="name" component="div" />
        </FormLabel>
        <FormLabel>
          Number
          <FormField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></FormField>
          <ErrorMessageForm name="number" component="div" />
        </FormLabel>
        <BtnForm type="submit">Add contact</BtnForm>
      </PhoneForm> */}
    </Formik>
  );
};
