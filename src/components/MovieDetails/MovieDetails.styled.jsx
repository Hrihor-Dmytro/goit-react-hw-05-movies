import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkBtn = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 30px;
  color: black;
  :hover {
    color: #0095ff;
  }
`;

export const AddInfoItemLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: #000000;
  :hover {
    color: #0095ff;
  }
`;

export const MoviDetailsHeader = styled.h2`
  font-size: 30px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-bottom: 3px solid rgba(47, 47, 44, 0.852);
`;
