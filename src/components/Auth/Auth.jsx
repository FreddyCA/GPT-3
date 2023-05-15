import styled from "styled-components";

import Button from "../Button/Button";

const AuthStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100%;
  gap: 26px;
`;

const SingInStyle= styled.a`
  background-color: transparent;
  white-space: nowrap;
  color: #fff;
  height: 45px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &:hover {
    border-bottom: 1px solid white;
  }
`

const Sign = () => {
  return (
    <AuthStyle>
      <SingInStyle href="/">Sign in</SingInStyle>
      <Button
        backgroundColor="#FF4820"
        color="#fff"
        border="none"
        padding="15px 20px"
        fontSize="1.125rem"
        borderRadius="5px"
      >
        Sign Up
      </Button>
    </AuthStyle>
  );
};

export default Sign;
