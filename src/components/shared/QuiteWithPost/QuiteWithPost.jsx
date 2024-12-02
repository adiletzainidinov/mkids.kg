import { Typography } from '@mui/material';
import Button from '../../ui/Button';
import { Container, QuoteContainer, StyledBox } from './QuiteWithPostStyle';
import { FaShare } from 'react-icons/fa';

const shareToTelegram = (message) => {
  const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(
    message
  )}`;

  window.open(telegramUrl, '_blank');
};

const QuiteWithPost = () => {
  const message = `Посланник Аллаха ﷺ сказал: «Обязанность отца перед своим ребенком – дать ему хорошее имя и воспитать в нем благочестие и иман»`;

  return (
    <Container>
      <StyledBox>
        <QuoteContainer>
          <div className="text">{message}</div>
          <Typography
            variant="subtitle1"
            component="span"
            color="#7ad5ab"
            style={{ marginBottom: 35 }}
          >
            (Ат-Тирмизи)
          </Typography>
          <Button onClick={() => shareToTelegram(message)}>
            Поделиться в Telegram
            <FaShare
              style={{
                position: 'absolute',
                right: 12,
                zIndex: 1,
                color: '#fff',
                fontSize: 20,
              }}
            />
          </Button>
        </QuoteContainer>
      </StyledBox>
    </Container>
  );
};

export default QuiteWithPost;
