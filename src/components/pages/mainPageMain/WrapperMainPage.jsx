import AboutUmra from '../../shared/AboutUmra/AboutUmra';
import Contackts from '../../shared/Contackts/Contackts';
import Documents from '../../shared/Documents/Documents';
import FooterContacts from '../../shared/FooterContacts/FooterContacts';
import Hadis from '../../shared/Hadis/Hadis';
import MainPage from '../../shared/mainPage/MainPage';
import Price from '../../shared/Programing/Price';
import Questions from '../../shared/Questions/Questions';
import QuiteWithPost from '../../shared/QuiteWithPost/QuiteWithPost';
import ReveivWidthVideo from '../../shared/ReveivWidthVideo/ReveivWidthVideo';
import Review from '../../shared/Review/Review';
import VideoUmra from '../../shared/video-umra/VideoUmra';

const WrapperMainPage = () => {
  return (
    <>
      <MainPage />
      <AboutUmra />
      <VideoUmra />
      <Price />
      <Contackts />
      <Documents />
      <Hadis />
      <Questions />
      <Review />
      <ReveivWidthVideo />
      <QuiteWithPost />
      <FooterContacts />
    </>
  );
};

export default WrapperMainPage;
