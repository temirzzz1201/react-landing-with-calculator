import { StyledDiv } from '../../styled-components';
import './LinesBlock.scss';

function LinesBlock({ isFork, isDoted, ...props }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return isFork ? (
    <StyledDiv
      {...props}
      maxWidth="794px"
      wid="100%"
      maxHeight="40px"
      heig="100%"
      bBottom="1px solid #0A5C6D"
      bLeft="1px solid #0A5C6D"
      bRight="1px solid #0A5C6D"
      displayMediaTab="none"
    >
      <StyledDiv
        pos="absolute"
        maxWidth="80px"
        mWidMediaLap="86px"
        mTopMediaLap="96%"
        mLeftMediaLap="37%"
        bacgr="#0A5C6D"
        rot="90deg"
        wid="100%"
        heig="1px"
        left="45%"
        top="100%"
      />
    </StyledDiv>
  ) : (
    <StyledDiv
      {...props}
      heig="3px"
      bacgr="#0A5C6D"
      rot="90deg"
      className="lines-block"
    >
      <StyledDiv
        heig="21px"
        wid="21px"
        bRad="50%"
        bacgr="#0A5C6D"
        pos="absolute"
        top="-9px"
      />
      <StyledDiv
        heig="21px"
        wid="21px"
        bRad="50%"
        bacgr="#0A5C6D"
        pos="absolute"
        top="-9px"
        left="235px"
        mLeftMediaLap="167px"
        mLeftMediaBig="215px"
      />
      <StyledDiv
        heig="21px"
        wid="21px"
        bRad="50%"
        bacgr="#0A5C6D"
        pos="absolute"
        top="-9px"
        left="370px"
        mLeftMediaLap="396px"
        mLeftMediaBig="480px"
      />
      <StyledDiv
        heig="21px"
        wid="21px"
        bRad="50%"
        bacgr="#0A5C6D"
        pos="absolute"
        top="-9px"
        left="540px"
        mLeftMediaLap="264px"
        mLeftMediaBig="346px"
      />
      <StyledDiv
        heig="21px"
        wid="21px"
        bRad="50%"
        bacgr="#0A5C6D"
        pos="absolute"
        top="-9px"
        left="708px"
        mLeftMediaLap="524px"
        mLeftMediaBig="631px"
      />
    </StyledDiv>
  );
}

export default LinesBlock;
