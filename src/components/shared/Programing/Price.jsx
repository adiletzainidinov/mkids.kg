import {
  BlueBox,
  BoxContainer,
  Container,
  ContainerContent,
  PartnerBox,
  StyledBox,
  TextContent,
  WaveBox,
} from './PriceStyle';
import RightPrice from './RightPrice';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import mclub from '../../../assets/mclubLogo.jpg';
import muslimteens from '../../../assets/muslimteens.jpg';
import mkids from '../../../assets/mkids.jpg';
import zakat from '../../../assets/zakat.jpg';
import life from '../../../assets/life.jpg';

const BoxCardData = [
  { id: 1, text: mclub },
  { id: 2, text: muslimteens },
  { id: 3, text: mkids },
  { id: 4, text: zakat },
  { id: 5, text: life },
];

const animation = { duration: 15000, easing: (t) => t };

const Price = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    drag: false,
    slides: {
      perView: window.innerWidth < 768 ? 1 : window.innerWidth < 1200 ? 3 : 5,
      spacing: 40,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <Container id="priceSection">
      <StyledBox>
        <BoxContainer>
          <TextContent>
            <h2>О программе</h2>
            <p>
              Добро пожаловать в &quot;Muslim Kids&quot; — уникальный 3-месячный
              курс, где ваш ребенок выучит основы Ислама, начнет читать Коран и
              укрепит духовные и нравственные ценности. Занятия проходят в
              увлекательной и доступной форме!
            </p>
          </TextContent>
          <ContainerContent>
            <RightPrice />
          </ContainerContent>
        </BoxContainer>

        <BlueBox>
          <h2>НАШИ ПАРТНЕРЫ</h2>
          <PartnerBox ref={sliderRef} className="keen-slider">
            {BoxCardData.map((item) => (
              <div className="boxCard keen-slider__slide " key={item.id}>
                <img
                  style={{ width: 80, height: 80 }}
                  src={item.text}
                  alt={item.text}
                />
              </div>
            ))}
          </PartnerBox>
        </BlueBox>
        <WaveBox />
      </StyledBox>
    </Container>
  );
};

export default Price;
