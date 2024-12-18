import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import {
  BoxContainer,
  ButtonStyleVideo,
  CardContainer,
  Container,
  StyledBox,
  TitleRevievVideo,
} from './ReveievWithVideoStyle';
import revievWithvideoInstagram from '../../../assets/rev.mp4';
import { MdRateReview } from 'react-icons/md';

const RevievWithVideoData = [
  {
    id: 1,
    src: revievWithvideoInstagram,
    title: 'Как занятия изменили жизнь Айсулуу: отзыв мамы',
  },
  // {
  //   id: 2,
  //   src: revievWithvideoInstagram,
  //   title: 'История маленького Мансура: первый шаг к знанию',
  // },
  // {
  //   id: 3,
  //   src: revievWithvideoInstagram,
  //   title: 'Отзыв семьи Алии о важности исламского воспитания',
  // },
];

const ReveivWidthVideo = () => {
  return (
    <Container>
      <StyledBox>
        <BoxContainer>
          <TitleRevievVideo>
            <h2>Видео Отзывы наших детей</h2>
          </TitleRevievVideo>
          <CardContainer>
            {RevievWithVideoData.map((item) => (
              <Card key={item.id} sx={{ maxWidth: 345, marginBottom: 4 }}>
                <CardActionArea>
                  <CardMedia>
                    <video
                      width="100%"
                      height="100%"
                      controls
                      poster={
                        'https://i.pinimg.com/736x/43/4a/a5/434aa513587e452a79ec62af83e848c1.jpg'
                      }
                    >
                      <source src={item.src} type="video/mp4" />
                      Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </CardContainer>
          <ButtonStyleVideo>
            Все отзывы{' '}
            <MdRateReview
              style={{
                position: 'absolute',
                right: 12,
                zIndex: 1,
                color: '#fff',
                fontSize: 20,
              }}
            />
          </ButtonStyleVideo>
        </BoxContainer>
      </StyledBox>
    </Container>
  );
};

export default ReveivWidthVideo;
