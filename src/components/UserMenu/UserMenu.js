import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Spacer, Box, Stack, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex alignItems="center">
      <Box p="2">Welcome, {user.name}</Box>
      <Spacer />
      <Box p="2">
        <Stack direction="row" spacing={4} align="center">
          <Button
            colorScheme="teal"
            variant="ghost"
            type="button"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
