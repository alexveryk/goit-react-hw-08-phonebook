import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 700;
  &.active {
    color: #276749;
  }
  &:nth-child(1) {
    margin-right: 16px;
  }
`;
