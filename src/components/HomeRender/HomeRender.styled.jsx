import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SectionBox = styled.main`
  display: block;

  margin: 0;
  padding: 10px;
`;
export const TrendHeder = styled.h2`
  text-align: center;
`;

export const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;
export const FlexList = styled.li`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const StyledLink = styled(NavLink)`
  text-align: center;
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  &.active {
    color: #0a0809;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #00d9ff;
  }
`;

export const ImgBox = styled.img`
  width: 200px;
  height: 300px;
`;
