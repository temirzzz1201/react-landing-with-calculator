import { StyledDiv } from '../../styled-components';
import './Loader.scss';

function Loader() {
  return (
    <StyledDiv className="loader">
      <StyledDiv className="loader__spin" />
    </StyledDiv>
  );
}

export default Loader;
