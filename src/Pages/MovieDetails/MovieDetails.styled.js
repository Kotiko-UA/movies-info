import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  color: orange;
  font-weight: 700;
`;
export const FilmWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 4px 15px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const H1 = styled.h1`
  color: blue;
  margin-bottom: 14px;
`;
export const RatingP = styled.p`
  display: inline;
  font-size: 20px;
  color: blue;
`;

export const Rating = styled.span`
  display: inline;
  margin-left: 14px;
  font-size: 32px;
  font-weight: 700;
  color: orange;
`;
export const H2 = styled.h2`
  margin-top: 14px;
  font-size: 20px;
  color: blue;
`;
export const P = styled.p`
  color: #0089ff;
`;
export const Warning = styled.div`
  font-size: 20px;
  color: red;
`;
export const Ul = styled.ul`
  padding: 8px 16px;
  display: flex;
  gap: 24px;
`;
export const StyledLinkList = styled(NavLink)`
  font-size: 20px;
  color: blue;
  &.active {
    color: orange;
  }
  &:hover {
    color: orange;
  }
`;
