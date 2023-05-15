import styled from "styled-components";
import PropTypes from "prop-types";

const LinkNavStyle = styled.a`
  background-color: transparent;
  white-space: nowrap;
  color: #fff;
  height: 45px;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: 1px solid white;
  }
  @media screen and (max-width: 992px) {
    border-bottom: 1px solid white;
    background-color: #01244a;
    width: 100%;
    height: 75px;
    justify-content: center;
    &:hover {
      background-color: #0489;
    }
  }

  @media screen and (max-width: 576px) {
    height: 50px;
  }
`;

const LinkNav = ({ text = "Default Text", href = "/",showMenu, showMenuFunc }) => {
  return (
    <LinkNavStyle href={href} onClick={() => showMenuFunc(!showMenu)}>
      {text}
    </LinkNavStyle>
  );
};

LinkNav.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  showMenu: PropTypes.bool.isRequired,
  showMenuFunc: PropTypes.func.isRequired,
};

export default LinkNav;
