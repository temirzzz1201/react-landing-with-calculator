import { StyledLink } from '../../styled-components';
/* eslint-disable react/jsx-props-no-spreading */
function Link({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>;
}

export default Link;
