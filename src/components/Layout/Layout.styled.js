import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 4px 15px;
  display: flex;
  gap: 60px;
  border: solid blue;
  border-top: 0;
  border-left: 0;
  border-right: 0;
`;
export const Filmotela = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: blue;
`;
export const Ul = styled.ul`
  display: flex;
  gap: 36px;
`;
export const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  font-size: 24px;
  color: blue;
  border: transparent;
  border-radius: 24px;
  transition: background-color 0.5s ease-out;
  background-color: rgb(255 255 255);
  &.active {
    color: orange;
  }
  &:hover {
    background-color: rgb(33 150 243 / 13%);
  }
`;
