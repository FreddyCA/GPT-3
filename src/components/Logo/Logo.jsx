import styled from "styled-components";
import logo from "../../assets/logo.svg";

const LogoStyle = styled.img`
  width: 62px;
  height: 16px;
`;

const Logo = () => {
  return <LogoStyle src={logo} alt="Logo Gpt-3"></LogoStyle>;
};

export default Logo;
