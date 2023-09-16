import { NotFImg, StyledLink } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <StyledLink to={'/'}>Go Back</StyledLink>
      <NotFImg></NotFImg>
    </>
  );
};

export default NotFound;
