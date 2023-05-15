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
    width: 100%;
    height: 55px;
    justify-content: center;
    &:hover {
      background-color: #0489;
    }
  }
`;

const LinkNav = ({ text = "Default Text", href = "/" }) => {
  return <LinkNavStyle href={href}>{text}</LinkNavStyle>;
};

LinkNav.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkNav;
