import { StyledButton } from '../../styled-components';
/* eslint-disable react/jsx-props-no-spreading */
function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
