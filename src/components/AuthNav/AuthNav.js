import { Tabs, TabList } from '@chakra-ui/react';
import { StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <StyledLink to="/register">Register</StyledLink>

          <StyledLink to="/login">Log In</StyledLink>
        </TabList>
      </Tabs>
    </div>
  );
};
