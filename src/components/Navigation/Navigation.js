import { useAuth } from '../../hooks/useAuth';
import { Tabs, TabList } from '@chakra-ui/react';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <StyledLink to="/">Home</StyledLink>

          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </TabList>
      </Tabs>
    </nav>
  );
};
