import {
    BoxContainer,
    CardDocuments,
    Container,
    StyledBox,
  } from './DocumentsStyle';
  import LeftDocuments from './LeftDocuments';
  import RightDocuments from './RightDocuments';
  
  const Documents = () => {
    return (
      <>
        <Container>
          <StyledBox>
            <BoxContainer>
              <CardDocuments>
                <LeftDocuments />
                <RightDocuments />
              </CardDocuments>
            </BoxContainer>
          </StyledBox>
        </Container>
      </>
    );
  };
  
  export default Documents;
  