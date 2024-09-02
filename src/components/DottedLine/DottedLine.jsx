import { StyledDiv } from '../../styled-components';

function DottedLine() {
  return (
    <StyledDiv
      disp="none"
      wid="100%"
      heig="3px"
      bacgr="#0A5C6D"
      pos="relative"
      displayMediaTab="block"
      mMargMediaTab="24px 0 24px 0"
    >
      <StyledDiv
        pos="absolute"
        displayMediaTab="none"
        wid="20px"
        heig="20px"
        bRad="50%"
        bacgr="#0A5C6D"
        top="-8px"
        left="0"
      />
    </StyledDiv>
  );
}

export default DottedLine;
