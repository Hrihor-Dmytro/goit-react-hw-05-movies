import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: #00bfff;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #000000;
  }
`;
