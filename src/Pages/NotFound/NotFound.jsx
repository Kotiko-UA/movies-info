import { Link } from 'react-router-dom';
import { Img, NotFImg, StyledLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <StyledLink to={'/'}>Go Back</StyledLink>
      <NotFImg>{/* <Img src="../../img/404-status-code.png" /> */}</NotFImg>
    </>
  );
};

export default NotFound;
