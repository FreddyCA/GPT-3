import styled from "styled-components";
import LinkNav from "../LinkNav/LinkNav";

const MenuNavStyle = styled.div`
  flex: 1;
  margin: 0 66px;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 992px) {
    position: absolute;
    top: 100px;
    left: 0;
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
