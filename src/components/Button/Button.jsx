import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  border-radius: ${(props) => props.borderRadius};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
  }
`;

const Button = ({
  backgroundColor,
  color,
  border,
  padding,
  fontSize,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
