import { Link } from 'react-router-dom';

const { default: styled } = require('styled-components');
export const Main = styled.main`
  padding: 20px 15px;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 28px 18px;
`;
export const Li = styled.li`
  display: block;
  width: 300px;
  &:hover {
    box-shadow: 0px 3px 5px 9px rgba(0, 110, 255, 0.75);
    -webkit-box-shadow: 0px 3px 5px 9px rgba(0, 110, 255, 0.75);
    -moz-box-shadow: 0px 3px 5px 9px rgba(0, 110, 255, 0.75);
  }
`;

export const H1 = styled.h1`
  font-size: 20px;
  color: blue;
  margin-bottom: 14px;
`;
export const StyledMovesLink = styled(Link)`
  display: block;
  font-size: 20px;
  color: blue;
`;
