import { BoxContainer, Container, StyledBox, TextContainer } from './AboutUmraStyle';

const AboutUmra = () => {
  return (
    <>
      <Container>
        <StyledBox>
          <BoxContainer>
            <h1>Почему важно воспитывать детей исламскими ценностями?</h1>
            <TextContainer>
              <p className="first">
                Воспитание детей в духе <span className="firstValue">исламских ценностей</span> — это не только передача знаний, но и формирование нравственных ориентиров. Важно научить детей уважению к родителям, честности, заботе о других и духовной чистоте. Ислам учит детей быть добрыми, терпимыми и ответственными.
              </p>
              <br />
              <p className="second">
                В Коране Аллах сказал: &quot;О сын мой! Совершай намаз, повелевай совершать одобряемое, запрещай предосудительное и терпеливо сноси все, что постигает тебя. Воистину, в этих делах надлежит проявлять решимость&quot; (Коран, 31:17). Это напоминает нам о важности воспитания детей с глубокими духовными и нравственными ценностями.
              </p>
              <p className="third">
                Мы учим детей не только внешним действиям, как молитвы, но и внутренним ценностям — честности, заботе о ближних и уважении к старшим. Эти ценности помогут им стать добрыми и достойными людьми, готовыми помочь обществу и своей семье.
              </p>
              <p className="four">
                Важно, чтобы дети осознавали свою ответственность перед Аллахом и окружающими. Воспитание в духе ислама помогает детям не только соблюдать религиозные обряды, но и развивать характер, который направлен на добро и помощь нуждающимся.
              </p>
            </TextContainer>
          </BoxContainer>
        </StyledBox>
      </Container>
    </>
  );
};

export default AboutUmra;
