// import { RiMenu3line } from "react-icons/ri";
import styled from "styled-components";

import Logo from "../Logo/Logo";
import Sign from "../Sign/Sign";
import MenuNav from "../MenuNav/MenuNav";

const StyleNavbar = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
`;


const Navbar = () => {
  return (
    <StyleNavbar>
      <Logo />
      <MenuNav></MenuNav>
      <Sign />
    </StyleNavbar>
  );
};

export default Navbar;
