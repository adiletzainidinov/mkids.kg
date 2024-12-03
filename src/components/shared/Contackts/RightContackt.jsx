import { handleSocialClick } from '../../../utils/shared/gotuSoccial';
import {
  ContacktsRightBox,
  SossialMediaBox,
  SossialMediaButton,
} from './ContacktsStyle';
import { FaTelegramPlane } from 'react-icons/fa';

const sossialMediaData = [
  {
    id: 1,
    logo: 'logo-instagram',
    url: 'https://www.instagram.com/mkids.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  { id: 2, logo: 'logo-whatsapp', url: 'https://wa.me/996706660241' },
  { id: 3, logo: 'call-outline', url: 'tel:+996706660241' },
];

const RightContackt = () => {
  return (
    <>
      <ContacktsRightBox>
        <SossialMediaBox>
          {sossialMediaData.map((item) => (
            <p key={item.id} onClick={() => handleSocialClick(item.url)}>
              <ion-icon name={item.logo}></ion-icon>
            </p>
          ))}
        </SossialMediaBox>
        <SossialMediaButton
          onClick={() => handleSocialClick('https://t.me/b_suiunbekovna01')}
        >
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
