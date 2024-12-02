import { useState } from 'react';
import {
  BoxContainer,
  Container,
  QuestionLine,
  QuestionsBox,
  StyledBox,
  QuestionContent,
} from './questionsStyle';
import { QuestionsData } from '../../../data/data';

const Questions = () => {
  const [visibleQuestionId, setVisibleQuestionId] = useState(null);

  const handleIsVisible = (id) => {
    setVisibleQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <h2>Вопросы и ответы</h2>
          {QuestionsData.map((item) => (
            <div key={item.id}>
              <QuestionsBox onClick={() => handleIsVisible(item.id)}>
                <div
                  className={`icon ${
                    visibleQuestionId === item.id ? 'rotate' : ''
                  }`}
                >
                  <ion-icon
                    name={
                      visibleQuestionId === item.id
                        ? 'caret-up'
                        : 'caret-forward'
                    }
                  ></ion-icon>
                </div>
                <p>{item.question}</p>
              </QuestionsBox>
              <QuestionContent isVisible={visibleQuestionId === item.id}>
                {item.answer}
              </QuestionContent>
              <QuestionLine />
            </div>
          ))}
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default Questions;
