import styled from "styled-components";
import LinkNav from "../LinkNav/LinkNav";

const MenuNavStyle = styled.div`
  flex: 1;
  margin: 0 66px;
  display: flex;
  gap: 50px;
`;

const linksMenu = [
  { link: "Home", href: "home" },
  { link: "What is GPT?", href: "whatIsGPT" },
  { link: "Open AI", href: "openAI" },
  { link: "Case Studies", href: "caseStudies" },
  { link: "Library", href: "library" },
];

const MenuNav = () => {
  return (
    <MenuNavStyle>
      {linksMenu.map((element) => (
        <LinkNav
          key={element.href}
          text={element.link}
          href={element.href}
        ></LinkNav>
      ))}
    </MenuNavStyle>
  );
};

export default MenuNav;
