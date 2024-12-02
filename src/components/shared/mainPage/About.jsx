import styled from 'styled-components';
import Button from '../../ui/Button';
import { PiArticleMedium } from 'react-icons/pi';
import { IoIosSchool } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiArrowDownDoubleFill } from 'react-icons/ri';

const SocialData = [
  {
    id: 1,
    text: 'Мы в',
    social: 'Instagram',
    icon: <RiInstagramFill size={40} />,
  },
  {
    id: 2,
    text: 'НАПИШИТЕ НА',
    social: 'WhatsApp',
    icon: <IoLogoWhatsapp size={40} />,
  },
];

const About = () => {
  const scrollToPriceSection = () => {
    const priceSection = document.getElementById('priceSection');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <MainContent>
        <Title>MUSLIM KIDS</Title>
        <SubTitle>Образовательная платформа для детей</SubTitle>

        <Buttons>
          <Button onClick={scrollToPriceSection}>
            УЗНАТЬ О ПРОГРАММЕ
            <PiArticleMedium
              style={{
                position: 'absolute',
                right: 12,
                zIndex: 1,
                color: '#fff',
                fontSize: 20,
              }}
            />
          </Button>
          <Button>
            НАЧАТЬ ОБУЧЕНИЕ
            <IoIosSchool
              style={{
                position: 'absolute',
                right: 12,
                zIndex: 1,
                color: '#fff',
                fontSize: 20,
              }}
            />
          </Button>
        </Buttons>

        <SocialMedia>
          {SocialData.map((item) => (
            <Instagram key={item.id}>
              {item.icon}
              <p>
                {item.text} <br />
                <span>{item.social}</span>
              </p>
            </Instagram>
          ))}
        </SocialMedia>

        <AnimationDiv>
          <RiArrowDownDoubleFill />
        </AnimationDiv>
      </MainContent>
    </>
  );
};

export default About;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 30px 0;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Instagram = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    margin-left: 7px;
    span {
      font-size: 24px;
      font-weight: 700;
    }
  }
`;

const AnimationDiv = styled.div`
  margin-top: 50px;
  font-size: 40px;
  color: white;
  animation: bounce 2s infinite;
  font-weight: 900;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
