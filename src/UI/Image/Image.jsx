import React from 'react';
import { StyledImg } from '../../styled-components';

/* eslint-disable react/jsx-props-no-spreading */
const Image = React.forwardRef((props, ref) => (
  <StyledImg ref={ref} {...props} />
));

export default Image;
