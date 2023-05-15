import styled from "styled-components";

import Button from "../Button/Button";
import LinkNav from "../LinkNav/LinkNav";

const StyleSign = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 75px;
  gap: 26px;
`;

const Sign = () => {
  return (
    <StyleSign>
      <LinkNav href="/" text="Sign in"></LinkNav>
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
    </StyleSign>
  );
};

export default Sign;
