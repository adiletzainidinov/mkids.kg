import { IoIosSchool } from 'react-icons/io';
import {
    ButtonRightPrice,
    CardRightPrice,
    FooterTextRightPrice,
    InformationRight,
    LineRightPrice,
  } from './PriceStyle';
  
  const PriceRightCardData = [
    {
      id: 1,
      icon: 'book-outline',
      text: 'Уроки Корана',
    },
    {
      id: 2,
      icon: 'cloud-outline',
      text: 'Молитвы и изучение сур',
    },
    {
      id: 3,
      icon: 'globe-outline',
      text: 'Изучение 6 основ Ислама',
    },
    {
      id: 4,
      icon: 'bookmarks-outline',
      text: 'Изучение хадисов',
    },
    {
      id: 5,
      icon: 'people-outline',
      text: 'Биографии сподвижников',
    },
    {
      id: 6,
      icon: 'game-controller-outline',
      text: 'Развивающие игры',
    },
    {
      id: 7,
      icon: 'clipboard-outline',
      text: 'Домашние задания',
    },
    {
      id: 8,
      icon: 'school-outline',
      text: 'Семинары для родителей',
    },
    {
      id: 9,
      icon: 'restaurant-outline',
      text: 'Вкусный обед🥘',
    },
    {
      id: 10,
      icon: 'heart-outline',
      text: 'Душевные беседы',
    },
    {
      id: 11,
      icon: 'bulb-outline',
      text: 'Интеллектуальные игры',
    },
    {
      id: 11,
      icon: 'airplane-outline',
      text: 'Оригами, рукоделие',
    },
  ];
  
  
  
  
  const RightPrice = () => {
    return (
      <CardRightPrice>
        <div className="ribbon">ВСЕ ВКЛЮЧЕНО</div>
        <h2>СТОИМОСТЬ КУРСА</h2>
        <p>за три месяца обучения</p>
        <h3>
          <span></span>9000<span className="dollar">сом</span>
        </h3>
        <h4>за 12 уроков</h4>
        {PriceRightCardData.map((item) => (
          <InformationRight key={item.id}>
            <div className="papaIconTextRight">
              <div>
                <ion-icon name={item.icon}></ion-icon>
              </div>
              <p>{item.text}</p>
            </div>
            <LineRightPrice></LineRightPrice>
          </InformationRight>
        ))}
        <ButtonRightPrice>НАЧАТЬ ОБУЧЕНИЕ
        <IoIosSchool
              style={{
                position: 'absolute',
                right: 12,
                zIndex: 1,
                color: '#fff',
                fontSize: 20,
              }}
            />
        </ButtonRightPrice>
        <FooterTextRightPrice>Внимание! Место ограничено!</FooterTextRightPrice>
      </CardRightPrice>
    );
  };
  
  export default RightPrice;
  