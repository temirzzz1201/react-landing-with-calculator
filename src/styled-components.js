import styled from 'styled-components';

const size = {
  mobile: '320px',
  tablet: '767px',
  laptop: '1023px',
  biggest: '1279px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  biggest: `(max-width: ${size.biggest})`,
};

// Header
export const StyledHeader = styled.header`
  width: 100%;
  background: #0a5c6d;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  min-width: ${({ minWid }) => minWid};
  min-height: ${({ minHeig }) => minHeig};
  height: ${({ heig }) => heig};
  margin: ${({ marg }) => marg};
  border-bottom: ${({ bb }) => bb};
  position: relative;

  @media ${device.biggest} {
    height: ${({ heigMediaBig }) => heigMediaBig};
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
  }
  @media ${device.laptop} {
    height: ${({ heigMediaLap }) => heigMediaLap};
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
  }
  @media ${device.tablet} {
    height: ${({ heigMediaTab }) => heigMediaTab};
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
  }
  @media ${device.mobile} {
    height: ${({ heigMediaMob }) => heigMediaMob};
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
  }
`;

export const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 80px;
  border-bottom: ${({ bb }) => bb};

  @media ${device.biggest} {
    max-height: ${({ mHeigMediaBig }) => mHeigMediaBig};
  }
  @media ${device.laptop} {
    max-height: ${({ mHeigMediaLap }) => mHeigMediaLap};
  }
  @media ${device.tablet} {
    max-height: ${({ mHeigMediaTab }) => mHeigMediaTab};
  }
  @media ${device.mobile} {
    max-height: ${({ mHeigMediaMob }) => mHeigMediaMob};
  }
`;

// Body Elements
export const StyledH1 = styled.h1`
  font-weight: 500;
  font-size: 80px;
  line-height: 80px;
  text-transform: uppercase;
  font-family: Druk, Impact, sans-serif;
  color: #ffffff;
  max-width: 770px;

  @media ${device.laptop} {
    font-size: 48px;
    line-height: 48px;
    max-width: 400px;
  }
  @media ${device.tablet} {
    max-width: 370px;
    font-size: 32px;
    line-height: 32px;
  }

  @media ${device.mobile} {
    max-width: 270px;
  }
`;

export const StyledButton = styled.button`
  display: ${({ disp }) => disp};
  justify-content: ${({ just }) => just || 'center'};
  align-items: ${({ align }) => align || 'center'};
  width: ${({ wid }) => wid};
  height: ${({ heig }) => heig};
  margin: ${({ marg }) => marg};
  padding: ${({ pad }) => pad};
  background: ${({ bacgr }) => bacgr || 'inherit'};
  border: ${({ bord }) => bord || 'inherit'};
  color: ${({ col }) => col};
  font-size: ${({ fsz }) => fsz};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  border-bottom: ${({ bb }) => bb};
  /* font-family: 'Graphik, Arial, Helvetica, sans-serif'; */
  cursor: pointer;

  @media ${device.biggest} {
    display: ${({ dispMediaBig }) => dispMediaBig};
    height: ${({ heigMediaBig }) => heigMediaBig};
    width: ${({ widthMediaBig }) => widthMediaBig};
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
    padding: ${({ mPadMediaBig }) => mPadMediaBig};
    font-size: ${({ fontMediaBig }) => fontMediaBig};
    line-height: ${({ lhMediaBig }) => lhMediaBig};
    position: ${({ posMediaBig }) => posMediaBig};
    top: ${({ mTopMediaBig }) => mTopMediaBig};
    right: ${({ mRightMediaBig }) => mRightMediaBig};
    left: ${({ mLeftMediaBig }) => mLeftMediaBig};
    bottom: ${({ mBottomMediaBig }) => mBottomMediaBig};
  }
  @media ${device.laptop} {
    display: ${({ dispMediaLap }) => dispMediaLap};
    height: ${({ heigMediaLap }) => heigMediaLap};
    width: ${({ widthMediaLap }) => widthMediaLap};
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
    padding: ${({ mPadMediaLap }) => mPadMediaLap};
    font-size: ${({ fontMediaLap }) => fontMediaLap};
    line-height: ${({ lhMediaLap }) => lhMediaLap};
    position: ${({ posMediaLap }) => posMediaLap};
    top: ${({ mTopMediaLap }) => mTopMediaLap};
    right: ${({ mRightMediaLap }) => mRightMediaLap};
    left: ${({ mLeftMediaLap }) => mLeftMediaLap};
    bottom: ${({ mBottomMediaLap }) => mBottomMediaLap};
  }
  @media ${device.tablet} {
    display: ${({ dispMediaTab }) => dispMediaTab};
    height: ${({ heigMediaTab }) => heigMediaTab};
    width: ${({ widthMediaTab }) => widthMediaTab};
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
    padding: ${({ mPadMediaTab }) => mPadMediaTab};
    font-size: ${({ fontMediaTab }) => fontMediaTab};
    line-height: ${({ lhMediaTab }) => lhMediaTab};
    position: ${({ posMediaTab }) => posMediaTab};
    top: ${({ mTopMediaTab }) => mTopMediaTab};
    right: ${({ mRightMediaTab }) => mRightMediaTab};
    left: ${({ mLeftMediaTab }) => mLeftMediaTab};
    bottom: ${({ mBottomMediaTab }) => mBottomMediaTab};
  }
  @media ${device.mobile} {
    display: ${({ dispMediaMob }) => dispMediaMob};
    height: ${({ heigMediaMob }) => heigMediaMob};
    width: ${({ widthMediaMob }) => widthMediaMob};
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
    padding: ${({ mPadMediaMob }) => mPadMediaMob};
    font-size: ${({ fontMediaMob }) => fontMediaMob};
    line-height: ${({ lhMediaMob }) => lhMediaMob};
    position: ${({ posMediaMob }) => posMediaMob};
    top: ${({ mTopMediaMob }) => mTopMediaMob};
    right: ${({ mRightMediaMob }) => mRightMediaMob};
    left: ${({ mLeftMediaMob }) => mLeftMediaMob};
    bottom: ${({ mBottomMediaMob }) => mBottomMediaMob};
  }
`;

export const StyledImg = styled.img.attrs(({ isBubbles }) => isBubbles)`
  position: ${({ pos }) => pos};
  width: ${({ wid }) => wid};
  height: ${({ heig }) => heig};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  margin: ${({ marg }) => marg};
  padding: ${({ pad }) => pad};
  color: ${({ col }) => col};
  z-index: ${({ zInd }) => zInd};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  object-fit: ${({ objFit }) => objFit};
  aspect-ratio: ${({ asp }) => asp};
  transform: translate(${({ transf }) => transf});
  cursor: ${({ cursor }) => cursor};

  @media ${device.biggest} {
    height: ${({ heigMediaBig }) => heigMediaBig};
    width: ${({ widMediaBig }) => widMediaBig};
    max-width: ${({ mWidMediaBig }) => mWidMediaBig};
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
    padding: ${({ mPadMediaBig }) => mPadMediaBig};
    top: ${({ mTopMediaBig }) => mTopMediaBig};
    right: ${({ mRightMediaBig }) => mRightMediaBig};
    left: ${({ mLeftMediaBig }) => mLeftMediaBig};
    bottom: ${({ mBottomMediaBig }) => mBottomMediaBig};
  }
  @media ${device.laptop} {
    height: ${({ heigMediaLap }) => heigMediaLap};
    width: ${({ widMediaLap }) => widMediaLap};
    max-width: ${({ mWidMediaLap }) => mWidMediaLap};
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
    padding: ${({ mPadMediaLap }) => mPadMediaLap};
    top: ${({ mTopMediaLap }) => mTopMediaLap};
    right: ${({ mRightMediaLap }) => mRightMediaLap};
    left: ${({ mLeftMediaLap }) => mLeftMediaLap};
    bottom: ${({ mBottomMediaLap }) => mBottomMediaLap};
  }
  @media ${device.tablet} {
    height: ${({ heigMediaTab }) => heigMediaTab};
    width: ${({ widMediaTab }) => widMediaTab};
    max-width: ${({ mWidMediaTab }) => mWidMediaTab};
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
    padding: ${({ mPadMediaTab }) => mPadMediaTab};
    top: ${({ mTopMediaTab }) => mTopMediaTab};
    right: ${({ mRightMediaTab }) => mRightMediaTab};
    left: ${({ mLeftMediaTab }) => mLeftMediaTab};
    bottom: ${({ mBottomMediaTab }) => mBottomMediaTab};
  }
  @media ${device.mobile} {
    height: ${({ heigMediaMob }) => heigMediaMob};
    width: ${({ widMediaMob }) => widMediaMob};
    max-width: ${({ mWidMediaMob }) => mWidMediaMob};
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
    padding: ${({ mPadMediaMob }) => mPadMediaMob};
    top: ${({ mTopMediaMob }) => mTopMediaMob};
    right: ${({ mRightMediaMob }) => mRightMediaMob};
    left: ${({ mLeftMediaMob }) => mLeftMediaMob};
    bottom: ${({ mBottomMediaMob }) => mBottomMediaMob};
  }
`;

export const StyledVideo = styled.video`
  width: ${({ wid }) => wid};
  height: ${({ heig }) => heig};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  position: ${({ pos }) => pos};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  object-fit: ${({ objFit }) => objFit};
`;

export const StyledDiv = styled.div.attrs(({ dataLifeTable }) => dataLifeTable)`
  position: ${({ pos }) => pos};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  display: ${({ disp }) => disp};
  flex-direction: ${({ direct }) => direct};
  justify-content: ${({ just }) => just};
  flex-wrap: ${({ fWrap }) => fWrap};
  align-items: ${({ align }) => align};
  width: ${({ wid }) => wid};
  height: ${({ heig }) => heig};
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  min-width: ${({ minWid }) => minWid};
  min-height: ${({ minHeig }) => minHeig};
  margin: ${({ marg }) => marg};
  padding: ${({ pad }) => pad};
  border-bottom: ${({ bBottom }) => bBottom};
  border-top: ${({ bTop }) => bTop};
  border-left: ${({ bLeft }) => bLeft};
  border-right: ${({ bRight }) => bRight};
  border-radius: ${({ bRad }) => bRad};
  background: ${({ bacgr }) => bacgr};
  font-size: ${({ fsz }) => fsz};
  line-height: ${({ lh }) => lh};
  font-weight: ${({ fw }) => fw};
  fill: ${({ fill }) => fill};
  color: ${({ col }) => col};
  cursor: ${({ curs }) => curs};
  text-transform: ${({ tt }) => tt};
  transform: rotate(${({ rot }) => rot || 'none'});
  transform: translateX(${({ transfX }) => transfX || 'none'});
  font-family: ${({ ff }) => ff};

  @media ${device.biggest} {
    width: ${({ widMediaBig }) => widMediaBig};
    display: ${({ displayMediaBig }) => displayMediaBig};
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
    padding: ${({ mPadMediaBig }) => mPadMediaBig};
    max-height: ${({ mHeigMediaBig }) => mHeigMediaBig};
    max-width: ${({ mWidMediaBig }) => mWidMediaBig};
    height: ${({ heigMediaBig }) => heigMediaBig};
    font-size: ${({ fontMediaBig }) => fontMediaBig};
    line-height: ${({ lhMediaBig }) => lhMediaBig};
    flex-wrap: ${({ flexWrapBig }) => flexWrapBig};
    justify-content: ${({ justyfyBig }) => justyfyBig};
    align-items: ${({ alignBig }) => alignBig};
    flex-direction: ${({ flexDirectionBig }) => flexDirectionBig};
    position: ${({ positionBig }) => positionBig};
    top: ${({ mTopMediaBig }) => mTopMediaBig};
    right: ${({ mRightMediaBig }) => mRightMediaBig};
    left: ${({ mLeftMediaBig }) => mLeftMediaBig};
    bottom: ${({ mBottomMediaBig }) => mBottomMediaBig};
    transform: rotate(${({ rotateBig }) => rotateBig});
    transform: translateX(${({ transfXbig }) => transfXbig || 'none'});
  }
  @media ${device.laptop} {
    width: ${({ widMediaLap }) => widMediaLap};
    display: ${({ displayMediaLap }) => displayMediaLap};
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
    padding: ${({ mPadMediaLap }) => mPadMediaLap};
    max-height: ${({ mHeigMediaLap }) => mHeigMediaLap};
    max-width: ${({ mWidMediaLap }) => mWidMediaLap};
    height: ${({ heigMediaLap }) => heigMediaLap};
    font-size: ${({ fontMediaLap }) => fontMediaLap};
    line-height: ${({ lhMediaLap }) => lhMediaLap};
    flex-wrap: ${({ flexWrapLap }) => flexWrapLap};
    justify-content: ${({ justyfyLap }) => justyfyLap};
    align-items: ${({ alignLap }) => alignLap};
    flex-direction: ${({ flexDirectionLap }) => flexDirectionLap};
    position: ${({ positionLap }) => positionLap};
    top: ${({ mTopMediaLap }) => mTopMediaLap};
    right: ${({ mRightMediaLap }) => mRightMediaLap};
    left: ${({ mLeftMediaLap }) => mLeftMediaLap};
    bottom: ${({ mBottomMediaLap }) => mBottomMediaLap};
    transform: rotate(${({ rotateLap }) => rotateLap});
    transform: translateX(${({ transfXLap }) => transfXLap || 'none'});
  }
  @media ${device.tablet} {
    width: ${({ widMediaTab }) => widMediaTab};
    display: ${({ displayMediaTab }) => displayMediaTab};
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
    padding: ${({ mPadMediaTab }) => mPadMediaTab};
    max-height: ${({ mHeigMediaTab }) => mHeigMediaTab};
    max-width: ${({ mWidMediaTab }) => mWidMediaTab};
    height: ${({ heigMediaTab }) => heigMediaTab};
    font-size: ${({ fontMediaTab }) => fontMediaTab};
    line-height: ${({ lhMediaTab }) => lhMediaTab};
    flex-wrap: ${({ flexWrapTab }) => flexWrapTab};
    justify-content: ${({ justifyTab }) => justifyTab};
    align-items: ${({ alignTab }) => alignTab};
    flex-direction: ${({ flexDirectionTab }) => flexDirectionTab};
    position: ${({ positionTab }) => positionTab};
    top: ${({ mTopMediaTab }) => mTopMediaTab};
    right: ${({ mRightMediaTab }) => mRightMediaTab};
    left: ${({ mLeftMediaTab }) => mLeftMediaTab};
    bottom: ${({ mBottomMediaTab }) => mBottomMediaTab};
    transform: rotate(${({ rotateTab }) => rotateTab});
    transform: translateX(${({ transfXTab }) => transfXTab || 'none'});
  }
  @media ${device.mobile} {
    width: ${({ widMediaMob }) => widMediaMob};
    display: ${({ displayMediaMob }) => displayMediaMob};
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
    padding: ${({ mPadMediaMob }) => mPadMediaMob};
    max-height: ${({ mHeigMediaMob }) => mHeigMediaMob};
    max-width: ${({ mWidMediaMob }) => mWidMediaMob};
    height: ${({ heigMediaMob }) => heigMediaMob};
    font-size: ${({ fontMediaMob }) => fontMediaMob};
    line-height: ${({ lhMediaMob }) => lhMediaMob};
    flex-wrap: ${({ flexWrapMob }) => flexWrapMob};
    justify-content: ${({ justifyMob }) => justifyMob};
    align-items: ${({ alignMob }) => alignMob};
    flex-direction: ${({ flexDirectionMob }) => flexDirectionMob};
    position: ${({ positionMob }) => positionMob};
    top: ${({ mTopMediaMob }) => mTopMediaMob};
    right: ${({ mRightMediaMob }) => mRightMediaMob};
    left: ${({ mLeftMediaMob }) => mLeftMediaMob};
    bottom: ${({ mBottomMediaMob }) => mBottomMediaMob};
    transform: rotate(${({ rotateMob }) => rotateMob});
    transform: translateX(${({ transfXmob }) => transfXmob || 'none'});
  }
`;

export const StyledPar = styled.p`
  width: ${({ wid }) => wid};

  max-width: ${({ maxWidth }) => maxWidth};
  font-family: ${({ ff }) => ff};
  font-size: ${({ fsz }) => fsz};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  margin: ${({ marg }) => marg};
  padding: ${({ pad }) => pad};
  text-align: ${({ tAlign }) => tAlign};
  color: ${({ col }) => col || '#343944'};
  text-transform: ${({ tt }) => tt};
  white-space: ${({ whiteSpace }) => whiteSpace};

  @media ${device.biggest} {
    width: ${({ widMediaBig }) => widMediaBig};
    height: ${({ heigMediaBig }) => heigMediaBig};
    font-size: ${({ fontMediaBig }) => fontMediaBig};
    line-height: ${({ lhMediaBig }) => lhMediaBig};
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
    padding: ${({ mPadMediaBig }) => mPadMediaBig};
    max-width: ${({ mWidMediaBig }) => mWidMediaBig};
  }
  @media ${device.laptop} {
    width: ${({ widMediaLap }) => widMediaLap};
    height: ${({ heigMediaLap }) => heigMediaLap};
    font-size: ${({ fontMediaLap }) => fontMediaLap};
    line-height: ${({ lhMediaLap }) => lhMediaLap};
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
    padding: ${({ mPadMediaLap }) => mPadMediaLap};
    max-width: ${({ mWidMediaLap }) => mWidMediaLap};
  }
  @media ${device.tablet} {
    width: ${({ widMediaTab }) => widMediaTab};
    height: ${({ heigMediaTab }) => heigMediaTab};
    font-size: ${({ fontMediaTab }) => fontMediaTab};
    line-height: ${({ lhMediaTab }) => lhMediaTab};
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
    padding: ${({ mPadMediaTab }) => mPadMediaTab};
    max-width: ${({ mWidMediaTab }) => mWidMediaTab};
  }
  @media ${device.mobile} {
    width: ${({ widMediaMob }) => widMediaMob};
    height: ${({ heigMediaMob }) => heigMediaMob};
    font-size: ${({ fontMediaMob }) => fontMediaMob};
    line-height: ${({ lhMediaMob }) => lhMediaMob};
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
    padding: ${({ mPadMediaMob }) => mPadMediaMob};
    max-width: ${({ mWidMediaMob }) => mWidMediaMob};
  }
`;

export const StyledSpan = styled.span`
  position: ${({ pos }) => pos};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  font-size: ${({ fsz }) => fsz};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  font-family: ${({ ff }) => ff};
  margin: ${({ marg }) => marg};
  padding: ${({ pad }) => pad};
  color: ${({ col }) => col};
  white-space: ${({ wSpace }) => wSpace};
  text-transform: ${({ tt }) => tt};

  @media ${device.biggest} {
    font-size: ${({ fontMediaBig }) => fontMediaBig};
    line-height: ${({ lineHeightBig }) => lineHeightBig};
    display: ${({ displayMediaBig }) => displayMediaBig};
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
  }
  @media ${device.laptop} {
    font-size: ${({ fontMediaLap }) => fontMediaLap};
    line-height: ${({ lineHeightLap }) => lineHeightLap};
    display: ${({ displayMediaLap }) => displayMediaLap};
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
  }
  @media ${device.tablet} {
    font-size: ${({ fontMediaTab }) => fontMediaTab};
    line-height: ${({ lineHeightTab }) => lineHeightTab};
    display: ${({ displayMediaTab }) => displayMediaTab};
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
  }
  @media ${device.mobile} {
    font-size: ${({ fontMediaMob }) => fontMediaMob};
    line-height: ${({ lineHeightMob }) => lineHeightMob};
    display: ${({ displayMediaMob }) => displayMediaMob};
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
  }
`;

export const StyledLink = styled.a`
  width: ${({ wid }) => wid};
  font-family: ${({ ff }) => ff};
  text-decoration: ${({ td }) => td};
  font-size: ${({ fsz }) => fsz};
  font-weight: ${({ fw }) => fw};
  line-height: ${({ lh }) => lh};
  color: ${({ col }) => col};

  @media ${device.biggest} {
    margin: ${({ mMargMediaBig }) => mMargMediaBig};
  }
  @media ${device.laptop} {
    margin: ${({ mMargMediaLap }) => mMargMediaLap};
  }
  @media ${device.tablet} {
    margin: ${({ mMargMediaTab }) => mMargMediaTab};
  }
  @media ${device.mobile} {
    margin: ${({ mMargMediaMob }) => mMargMediaMob};
  }
`;

export const StyledFooter = styled.footer`
  position: relative;
  width: 100%;
  min-height: 425px;
  background: #343944;
  @media screen and (max-width: 1200px) {
    min-height: 364px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 376px;
  }
`;
