import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkBtn = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 30px;
  color: black;
  :hover {
    color: #c0c0c0;
  }
`;

export const AddInfoItemLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #000000;
  :hover {
    color: #008cff;
  }
`;
