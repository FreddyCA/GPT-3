import styled from "styled-components";
import logo from "../../assets/logo.svg";

const LogoStyle = styled.img`
  width: 62px;
  height: 16px;
  @media screen and (max-width: 992px) {
    margin-left: 45%;
  }
`;

const Logo = () => {
  return <LogoStyle src={logo} alt="Logo Gpt-3"></LogoStyle>;
};

export default Logo;
