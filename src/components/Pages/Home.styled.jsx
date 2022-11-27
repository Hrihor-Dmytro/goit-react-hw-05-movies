import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HederBox = styled.div`
  margin: 0;
  padding: 0;
`;

export const NavigationLink = styled.header`
  display: block;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export const Link = styled(NavLink)`
  margin: 0;
  padding: 0px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000000;
  font-weight: bol;
  font-size: 30px;
  &.active {
    color: white;
    background-color: #00a6ff;
  }
`;
