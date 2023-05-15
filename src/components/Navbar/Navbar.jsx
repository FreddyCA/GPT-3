// import { RiMenuLine,RiMenuUnfoldFill } from "react-icons/ri";
import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../Logo/Logo";
import Sign from "../Sign/Sign";
import MenuNav from "../MenuNav/MenuNav";
import { useEffect, useState } from "react";

const NavbarStyle = styled.div`
  display: flex;
  height: 100px;
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
  useEffect(() => {
    if (width > 1024) {
      setWidthState(true);
      console.log("big");
    } else {
      setWidthState(false);
      console.log("shorts");
    }
  }, [width]);

  return (
    <NavbarStyle widthState={widthState}>
      <Logo />
      <MenuNav></MenuNav>
      <Sign />
    </NavbarStyle>
  );
};

Navbar.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Navbar;
