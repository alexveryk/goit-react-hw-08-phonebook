import { nanoid } from 'nanoid';
import { Stack, Input, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  const handleIputСhange = event => {
    handleFilterChange(event.currentTarget.value);
  };

  const idForm = nanoid(5);

  return (
    <>
      <Heading as="h2" size="lg">
        Find contacts by name
      </Heading>

      <Stack spacing={3} mb="16px">
        <Input
          variant="flushed"
          placeholder="Search"
          id={idForm}
          onChange={handleIputСhange}
        />
      </Stack>
    </>
  );
};
