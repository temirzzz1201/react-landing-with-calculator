import { useRef } from 'react';
import Image from '../Image/Image';
import { StyledDiv, StyledVideo } from '../../styled-components';
import './Video.scss';

function Video({ withBtn, buttonProp, videoSourse, ...props }) {
  /* eslint-disable react/jsx-props-no-spreading */
  const videoRef = useRef(null);
  const videoButtonRef = useRef(null);

  const handlePlayVideo = () => {
    videoRef.current.play();
    videoButtonRef.current.classList.add('is-playing');
    videoRef.current.controls = true;
  };

  const handlePausedVideo = () => {
    videoRef.current.pause();
    // videoButtonRef.current.classList.remove('is-playing');
    // videoButtonRef.current.classList.add('is-paused');
    videoRef.current.controls = false;
  };

  const handleToggleVideo = () =>
    videoRef.current.paused ? handlePlayVideo() : handlePausedVideo();

  return (
    <StyledDiv
      className="video"
      wid="100%"
      marg="0 0 120px 0"
      mMargMediaBig="0 0 80px 0"
      mMargMediaLap="0 0 56px 0"
      mMargMediaTab="0 0 32px 0"
    >
      <StyledDiv pos="relative" wid="100%">
        <StyledVideo
          className="video__wrapper"
          wid="100%"
          objFit="cover"
          ref={videoRef}
          preload="metadata"
          {...props}
        >
          <track kind="captions" />
          <source src={videoSourse} />
        </StyledVideo>
        <Image
          src={buttonProp}
          ref={videoButtonRef}
          alt="button"
          pos="absolute"
          top="50%"
          left="50%"
          transf="-50%, -50%"
          cursor="pointer"
          onClick={handleToggleVideo}
        />
      </StyledDiv>
    </StyledDiv>
  );
}

export default Video;
