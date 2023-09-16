import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  font-size: 16px;
  color: orange;
  font-weight: 700;
`;

export const NotFImg = styled.div`
  width: 100vw;
  height: 90vh;
  background-image: url('https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png');
  background-size: cover;
  background-position: 50% 50%;
`;
export const Img = styled.img`
  width: 100%;
`;
