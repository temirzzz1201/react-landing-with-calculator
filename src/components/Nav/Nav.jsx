import { useEffect, useRef } from 'react';
import { StyledNav, StyledDiv } from '../../styled-components';
import NavMenu from '../NavMenu/NavMenu';

import './Nav.scss';

function Nav() {
  const navbar = useRef(null);

  function navBehavior() {
    const scrollTop = window.scrollY;
    if (scrollTop >= 2) {
      navbar.current.classList.add('navbar_sticky');
    } else {
      navbar.current.classList.remove('navbar_sticky');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navBehavior);

    return () => {
      window.removeEventListener('scroll', navBehavior);
    };
  });

  return (
    <StyledNav ref={navbar} className="navbar" mHeigMediaTab="65px">
      <StyledDiv
        disp="flex"
        alignTab="center"
        wid="284px"
        heig="40px"
        marg="20px 0 0 32px"
        heigMediaTab="100%"
        mMargMediaLap="22px 0 0 30px"
        mMargMediaTab="0 0 0 25px"
        mMargMediaMob="0 0 0 16px"
        fill="#fff"
        col="#fff"
        className="navbar__logo"
      >
        Логотип
      </StyledDiv>
      <NavMenu />
    </StyledNav>
  );
}

export default Nav;
