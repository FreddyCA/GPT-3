import styled from "styled-components";
import LinkNav from "../LinkNav/LinkNav";
import PropTypes from "prop-types";

const MenuNavStyle = styled.div`
  flex: 1;
  margin: 0 66px;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 992px) {
    position: absolute;
    top: 80px;
    left: ${({ showMenu }) => (showMenu ? "0" : "-100%")};
    width: 200px;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin: 0;
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.65);
  }
`;

const linksMenu = [
  { link: "Home", href: "home" },
  { link: "What is GPT?", href: "whatIsGPT" },
  { link: "Open AI", href: "openAI" },
  { link: "Case Studies", href: "caseStudies" },
  { link: "Library", href: "library" },
];

const MenuNav = ({ showMenu, showMenuFunc, widthState }) => {
  return (
    <MenuNavStyle showMenu={showMenu}>
      {linksMenu.map((element, index) => (
        <LinkNav
          showMenu={showMenu}
          showMenuFunc={showMenuFunc}
          key={index}
          text={element.link}
          href={element.href}
        ></LinkNav>
      ))}
      {!widthState && (
        <>
          <LinkNav
            showMenu={showMenu}
            showMenuFunc={showMenuFunc}
            text={"Sign in"}
            href={"#"}
          ></LinkNav>
          <LinkNav
            showMenu={showMenu}
            showMenuFunc={showMenuFunc}
            text={"Sign up"}
            href={"#"}
          ></LinkNav>
        </>
      )}
    </MenuNavStyle>
  );
};

MenuNav.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  showMenuFunc: PropTypes.func.isRequired,
  widthState: PropTypes.bool,
};

export default MenuNav;
