import styled from "styled-components";
import logo from "../../assets/logo.svg";

const LogoStyle = styled.img`
  width: 62px;
  height: 16px;
  @media screen and (max-width: 992px) {
    margin-left: 40%;
  }
  @media screen and (max-width: 576px) {
    margin: 0 auto;
  }
`;

const Logo = () => {
  return <LogoStyle src={logo} alt="Logo Gpt-3"></LogoStyle>;
};

export default Logo;
