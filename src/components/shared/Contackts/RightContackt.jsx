import {
  ContacktsRightBox,
  SossialMediaBox,
  SossialMediaButton,
} from './ContacktsStyle';
import { FaTelegramPlane } from 'react-icons/fa';

const sossialMediaData = [
  { id: 1, logo: 'logo-instagram' },
  { id: 2, logo: 'logo-whatsapp' },
  { id: 3, logo: 'logo-youtube' },
];

const RightContackt = () => {
  return (
    <>
      <ContacktsRightBox>
        <SossialMediaBox>
          {sossialMediaData.map((item) => (
            <p key={item.id}>
              <ion-icon name={item.logo}></ion-icon>
            </p>
          ))}
        </SossialMediaBox>
        <SossialMediaButton>
          <p>Будьте в курсе новых програм</p>{' '}
          <FaTelegramPlane
            style={{
              position: 'absolute',
              right: 12,
              zIndex: 1,
              color: '#fff',
              fontSize: 20,
            }}
          />
        </SossialMediaButton>
      </ContacktsRightBox>
    </>
  );
};

export default RightContackt;
