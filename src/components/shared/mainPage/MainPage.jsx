import styled from 'styled-components';
import About from './About';
import VideoBackground from './VideoBackground';

const MainPage = () => {
  return (
    <Container id='mainPage'>
      <MainContent>
        <About />
        <VideoBackground />
      </MainContent>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: -70px;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;
