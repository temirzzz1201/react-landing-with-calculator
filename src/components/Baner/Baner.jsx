import { useEffect, useRef, useState } from 'react';
import { StyledDiv, StyledH1, StyledSpan } from '../../styled-components';
import Image from '../../UI/Image/Image';
import BanerImg from '../../assests/images/ban.jpg';
import BanerMiddle from '../../assests/images/ban-middle.jpg';
import BanerImgSmall from '../../assests/images/ban-small.jpg';
import BanerImgExtraSmall from '../../assests/images/ban-extra-small.jpg';
import Bubles from '../../assests/images/bubles.svg';
import BublesExtraSmall from '../../assests/images/bubles-extra-small.svg';
import './Baner.scss';

function Baner() {
  const img = BanerImg;
  const imgSmall = BanerImgSmall;
  const imgExtraSmall = BanerImgExtraSmall;
  const bubles = Bubles;
  const bublesExtraSmall = BublesExtraSmall;
  const [banerImage, setBanerImage] = useState(img);
  const [bublesImage, setBublesImage] = useState(bubles);
  const head = useRef(null);

  function headerWidth() {
    const width = window.innerWidth;

    if (width <= 320) {
      setBanerImage(imgExtraSmall);
      setBublesImage(bublesExtraSmall);
    }
    if (width > 320 && width <= 767) {
      setBanerImage(imgSmall);
      setBublesImage(bubles);
    }

    if (width >= 768 && width <= 1279) {
      setBanerImage(BanerMiddle);
    }

    if (width > 1280) {
      setBanerImage(img);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', headerWidth);
    window.addEventListener('load', headerWidth);

    return () => {
      window.removeEventListener('resize', headerWidth);
      window.addEventListener('load', headerWidth);
    };
  }, []);

  return (
    <StyledDiv
      ref={head}
      wid="100%"
      disp="flex"
      pos="relative"
      marg="80px 0 0 0"
      mMargMediaTab="65px 0 0 0"
      className="baner"
    >
      <StyledDiv pos="relative" maxHeight="720px" className="baner__wrapper">
        <Image
          pos="relative"
          alt="baner"
          src={banerImage}
          objFit="cover"
          className="baner__main-img"
        />
        <Image
          pos="absolute"
          alt="bubles"
          src={bublesImage}
          objFit="cover"
          top="20px"
          right="20px"
          mTopMediaTab="10px "
          mTopMediaMob="9px"
          mRightMediaTab="23px"
          mRightMediaMob="16px"
          className="baner__bubles-img"
        />
      </StyledDiv>
      <StyledDiv
        className="baner__title-wrapper"
        wid="100%"
        pos="absolute"
        maxWidth="1120px"
        top="178px"
        mTopMediaLap="408px"
        mTopMediaTab="256px"
        mTopMediaMob="198px"
        mPadMediaBig="0 0 0 24px"
        mPadMediaTab="0 0 0 16px"
        left="50%"
        transfX="-50%"
      >
        <StyledH1>
          ДОЛЕВАЯ ПЕНСИОННАЯ ПРОГРАММА ГРУППЫ КОМПАНИЙ{' '}
          <StyledSpan ff="Punctuation">«</StyledSpan>КОМПАНИИ
          <StyledSpan ff="Punctuation">»</StyledSpan>
        </StyledH1>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Baner;
