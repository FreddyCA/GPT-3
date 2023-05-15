import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../Logo/Logo";
import Auth from "../Auth/Auth";
import MenuNav from "../MenuNav/MenuNav";
import { useEffect, useState } from "react";
import MobileNav from "../MobileNav/MobileNav";

const NavbarStyle = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: space-between;
  }
`;

const Navbar = ({ width }) => {
  const [widthState, setWidthState] = useState(null);
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    if (width > 576) {
      setWidthState(true);
      console.log("big");
    } else {
      setWidthState(false);
      console.log("shorts");
    }
  }, [width]);

  return (
    <NavbarStyle>
      <Logo />
      <MobileNav showMenu={menuMobile} showMenuFunc={setMenuMobile}></MobileNav>
      <MenuNav
        showMenu={menuMobile}
        showMenuFunc={setMenuMobile}
        widthState={widthState}
      ></MenuNav>
      {widthState ? <Auth /> : <></>}
    </NavbarStyle>
  );
};

Navbar.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Navbar;
