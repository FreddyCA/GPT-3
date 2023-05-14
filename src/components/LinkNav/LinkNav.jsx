import styled from "styled-components";
import PropTypes from 'prop-types';

const LinkNavStyle = styled.a`
  background-color: transparent;
  white-space: nowrap;
  color: #fff;
  height: 45px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.color};
    border-bottom: 1px solid white;
    color: ${(props) => props.backgroundColor};
  }
`;


const LinkNav = ({ text = 'Default Text', href = '#' }) => {
  return (
    <LinkNavStyle href={href}>{text}</LinkNavStyle>
  );
};

LinkNav.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default LinkNav;