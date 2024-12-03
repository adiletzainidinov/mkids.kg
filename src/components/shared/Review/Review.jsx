import { useState } from 'react';
import {
  BoxContainer,
  Container,
  StyledBox,
  ReviewsFromЗilgrims,
  RevievCard,
  AboutNameReviev,
  RealReviev,
  DateAndRead,
  ReviewPapa,
  ButtonStyle,
} from './ReviewStyle';
import { MdRateReview } from 'react-icons/md';

const ReviewData = [
    {
        id: 1,
        name: 'Ахмад Аскаров',
        img: 'https://i.pinimg.com/564x/37/d1/91/37d191df740d6260664ad945ab2d88da.jpg',
        raiting: '10/10',
        review: `Ас-саляму алейкум! Хочу выразить огромную благодарность организаторам курса! Мой сын стал более внимательным, научился уважению и ответственности. Пусть Всевышний вознаградит вас за этот труд!`,
        date: '5 августа 2024',
        BackgroundColor: '#f3ffc6',
    },
    // {
    //     id: 2,
    //     name: 'Фатима Абдылова',
    //     img: 'https://i.pinimg.com/564x/67/d2/93/67d293abfd027d227b8f8dc5e4bcb56b.jpg',
    //     raiting: '9/10',
    //     review: `Ас-саляму алейкум! Очень довольна курсом! Мои дети полюбили уроки и стали лучше понимать важность семейных ценностей. Рекомендую всем родителям!`,
    //     date: '10 августа 2024',
    //     BackgroundColor: '#fac8cd',
    // },
    // {
    //     id: 3,
    //     name: 'Мухаммад Камалдинов',
    //     img: 'https://i.pinimg.com/564x/ab/12/c3/ab12c3a27c7890db29007c79b4222266.jpg',
    //     raiting: '10/10',
    //     review: `Замечательный курс! Моему племяннику очень понравились интерактивные занятия и доброжелательная атмосфера. Большое спасибо преподавателям!`,
    //     date: '15 августа 2024',
    //     BackgroundColor: '#cdeafc',
    // },
    // {
    //     id: 4,
    //     name: 'Амина Юсупова',
    //     img: 'https://i.pinimg.com/564x/b3/d4/56/b3d456ee3f7381a0cd6584502b91483b.jpg',
    //     raiting: '9.5/10',
    //     review: `Спасибо за курс! Моя дочь стала более усидчивой и заинтересовалась исламскими историями. Это лучший выбор для духовного развития детей.`,
    //     date: '20 августа 2024',
    //     BackgroundColor: '#ffe9d6',
    // },
    // {
    //     id: 5,
    //     name: 'Саида Осмонова',
    //     img: 'https://i.pinimg.com/564x/4c/82/1f/4c821f71eb6769e8e76a77a0c45e5163.jpg',
    //     raiting: '10/10',
    //     review: `Курс превзошел все мои ожидания! Очень полезные знания, отличные преподаватели и дружелюбная атмосфера. Ребенок с удовольствием посещает занятия!`,
    //     date: '25 августа 2024',
    //     BackgroundColor: '#d8f3dc',
    // },
    
];

const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const maxTextLength = 120;

  const handleToggleExpand = (id) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <ReviewsFromЗilgrims>Отзывы Родителей</ReviewsFromЗilgrims>

          <ReviewPapa>
            {ReviewData.map((review) => {
              const isExpanded = expandedReviews[review.id];
              const displayedText = isExpanded
                ? review.review
                : `${review.review.slice(0, maxTextLength)}${
                    review.review.length > maxTextLength ? '...' : ''
                  }`;

              return (
                <RevievCard
                  key={review.id}
                  BackgroundColor={review.BackgroundColor}
                >
                  <AboutNameReviev>
                    <img src={review.img} alt="Отзыв паломника" />
                    <p>{review.name}</p>
                    <div className="raiting">{review.raiting}</div>
                  </AboutNameReviev>

                  <RealReviev>
                    <p>{displayedText}</p>
                  </RealReviev>

                  <DateAndRead onClick={() => handleToggleExpand(review.id)}>
                    <h2>{review.date}</h2>
                    <div className="icon">
                      <ion-icon name="chevron-forward-outline"></ion-icon>
                    </div>
                  </DateAndRead>
                </RevievCard>
              );
            })}
          </ReviewPapa>
          <ButtonStyle>
        Все отзывы <MdRateReview
              style={{
                position: 'absolute',
                right: 12,
                zIndex: 1,
                color: '#fff',
                fontSize: 20,
              }}
            />
          </ButtonStyle>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default Review;
