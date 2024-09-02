import Link from '../../UI/Link/Link';
import Button from '../../UI/Button/Button';
import { StyledPar, StyledDiv } from '../../styled-components';
import { ReactComponent as PhoneIcon } from '../../assests/images/phone_icon.svg';

function NavMenu() {
  return (
    <StyledDiv
      className="navbar__menu"
      marg="16px 0 0 0"
      disp="flex"
      mMargMediaTab="0"
      alignTab="center"
      heigMediaTab="100%"
    >
      <Link
        href="tel:8 (800) 00-00-00"
        className="navbar__phone-icon"
        col="#fff"
        fill="#fff"
      >
        <PhoneIcon />
      </Link>
      <StyledDiv className="navbar__link-wrapper">
        <Link
          className="navbar__link"
          fsz="28px"
          lh="28px"
          href="tel:8 (800) 00-00-00"
          col="#fff"
          ff="Druk"
        >
          8 (800) 00-00-00
        </Link>
        <StyledPar col="#9A9CA2" fsz="12px" lh="20px" ff="Graphik">
          бесплатно по России
        </StyledPar>
      </StyledDiv>
      <Button
        wid="256px"
        heig="48px"
        bacgr="#DA2A35"
        disp="flex"
        bord="none"
        marg="0 40px"
        fsz="16px"
        fw="500"
        lh="24px"
        ff="Graphik"
        fontMediaTab="14px"
        mMargMediaTab="0 16px"
        widthMediaTab="200px"
        heigMediaTab="40px"
      >
        <Link col="#fff" href="№" target="_blank">
          Участвовать в программе
        </Link>
      </Button>
    </StyledDiv>
  );
}

export default NavMenu;
