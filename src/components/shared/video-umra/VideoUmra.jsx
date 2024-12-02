import { Container, StyledBox, Overlay, Background, TextContainer } from './VideoUmraStyle';

const VideoUmra = () => {
  return (
    <Container>
      <StyledBox>
        <Background />
        <Overlay />
        <TextContainer>
          <h1>Посланник Аллаха ﷺ (мир <span className='world'>ему</span> и благословение) сказал:</h1>
          <p>
            «Ни один отец не может подарить своему ребенку ничего более ценного, чем хорошее воспитание». 
          </p>
          <p className='tirmizi'>Имам Ат-Тирмизи</p>
        </TextContainer>
      </StyledBox>
    </Container>
  );
};

export default VideoUmra;
