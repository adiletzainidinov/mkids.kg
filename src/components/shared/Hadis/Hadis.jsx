import {
    Container,
    StyledBox,
    Overlay,
    Background,
    TextContainer,
  } from './HadisStyle';
  
  const Hadis = () => {
    return (
      <Container>
        <StyledBox>
          <Background />
          <Overlay />
          <TextContainer>
            <p className="tirmizi">(Ат-Тирмизи)</p>
            <h1>
              «Обучайте ребенка намазу с семилетнего возраста. В десять лет вы можете и наказать его (за нежелание совершать намаз)»
            </h1>
          </TextContainer>
        </StyledBox>
      </Container>
    );
  };
  
  export default Hadis;
  