import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleName } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import {
  Card,
  Stack,
  CardBody,
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  Avatar,
  List,
  ListItem,
} from '@chakra-ui/react';

export const ContactLst = () => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContacts(id));

  const visibleName = useSelector(selectVisibleName);

  return (
    <List>
      {visibleName.map(contact => {
        return (
          <ListItem key={contact.id} mb="16px">
            <Card size="md" w="100%">
              <CardBody alignItems="center">
                <Flex alignItems="center">
                  <Box p="2">
                    <Heading as="h4" size="md">
                      <Stack direction="row">
                        <Avatar
                          name={contact.name}
                          src="https://bit.ly/broken-link"
                        />
                      </Stack>
                    </Heading>
                  </Box>
                  <Box p="2">
                    <Heading as="h4" size="md">
                      {contact.name}: {contact.number}
                    </Heading>
                  </Box>
                  <Spacer />
                  <Box p="2">
                    <Button
                      colorScheme="red"
                      size="md"
                      type="button"
                      onClick={() => {
                        handleDelete(contact.id);
                      }}
                    >
                      Delete
                    </Button>
                    {/* <BtnDelete>Delete</BtnDelete> */}
                  </Box>
                </Flex>
              </CardBody>
            </Card>

            {/* {contact.name}: {contact.number}
            <BtnDelete
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
            >
              Delete
            </BtnDelete> */}
          </ListItem>
        );
      })}
    </List>
  );
};
