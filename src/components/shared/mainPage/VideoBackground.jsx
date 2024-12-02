import styled from 'styled-components';
import videoForBackground from '../../../assets/videoForBackground.mp4';

const VideoBackground = () => {
  return (
    <>
      <div>
        <Overlay />

        <VideoBackgroundStyle autoPlay muted loop>
          <source src={videoForBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackgroundStyle>
      </div>
    </>
  );
};

export default VideoBackground;

const VideoBackgroundStyle = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;
