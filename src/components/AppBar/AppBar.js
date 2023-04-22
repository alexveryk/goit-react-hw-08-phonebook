import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '.././/../hooks/useAuth';
import { Flex, Box, Spacer, Divider } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Flex alignItems="center">
        <Box p="4">
          <Navigation />
        </Box>
        <Spacer />
        <Box p="4">{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
      </Flex>
      <Divider mb="20px" />
    </header>
  );
};
