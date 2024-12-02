import {  Container, StyledBox } from './ContacktsStyle';
import LeftContact from './LeftContact';
import RightContackt from './RightContackt';

const Contackts = () => {
  return (
    <>
      <Container>
        <StyledBox>
            <LeftContact />
            <RightContackt/>
        </StyledBox>
      </Container>
    </>
  );
};

export default Contackts;
