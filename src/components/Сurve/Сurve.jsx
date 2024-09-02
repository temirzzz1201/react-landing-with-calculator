import { StyledDiv } from '../../styled-components';

function Сurve() {
  return (
    <StyledDiv
      rot="-90deg"
      wid="405px"
      heig="28px"
      pos="absolute"
      bBottom="1px solid #0A5C6D"
      bRight="1px solid #0A5C6D"
      top="252px"
      right="-72px"
      disp="none"
      displayMediaTab="block"
      left="72px"
    >
      <StyledDiv
        pos="absolute"
        wid="156px"
        heig="28px"
        bLeft="1px solid #0A5C6D"
        bRight="1px solid #0A5C6D"
        right="157px"
      />

      <StyledDiv
        pos="absolute"
        wid="160px"
        heig="27px"
        bTop="1px solid #0A5C6D"
        bLeft="1px solid #0A5C6D"
        rot="90deg"
        bottom="65px"
        left="-94px"
        widMediaMob="161px"
        mLeftMediaMob="-95px"
        mBottomMediaMob="66px"
      />
    </StyledDiv>
  );
}

export default Сurve;
