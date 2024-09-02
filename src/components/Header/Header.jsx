import Nav from '../Nav/Nav';
import { StyledHeader } from '../../styled-components';
import Baner from '../Baner/Baner';

function Header() {
  return (
    <StyledHeader
      marg="0 0 120px 0"
      heig="800px"
      heigMediaLap="762px"
      heigMediaTab="475px"
      heigMediaMob="480px"
      mMargMediaLap="0 0 80px 0"
      mMargMediaTab="0 0 56px 0"
      mMargMediaMob="0 0 32px 0"
    >
      <Nav />
      <Baner />
    </StyledHeader>
  );
}

export default Header;
