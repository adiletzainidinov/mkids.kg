import { Box, Typography, Link, Container, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ContainerFooter, StyledBox } from './footerStyle';
import { Telegram, WhatsApp } from '@mui/icons-material';
import { scrollToElement } from '../../../utils/shared/scrollUtils';
import { handleSocialClick } from '../../../utils/shared/gotuSoccial';

const Footer = () => {
  return (
    <ContainerFooter>
      <StyledBox>
        <Box
          component="footer"
          sx={{
            py: 4,
            px: 2,
            mt: 'auto',
            backgroundColor: '#3d51f4',
            borderTop: '1px solid #ddd',
            color: 'white',
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="space-between">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  О нашем курсе
                </Typography>
                <Typography variant="body2" color="white">
                  Курс помогает детям узнать исламские ценности, учит уважению,
                  доброте и любви к окружающим через увлекательные уроки.
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  Полезные ссылки
                </Typography>
                <Link
                  onClick={() => scrollToElement('mainPage')}
                  color="inherit"
                  variant="body2"
                  style={{ textDecoration: 'none' }}
                >
                  Главная
                </Link>
                <br />
                <Link
                  color="inherit"
                  variant="body2"
                  style={{ textDecoration: 'none' }}
                  onClick={() => scrollToElement('priceSection')}
                >
                  О программе
                </Link>
                <br />
                <Link
                  color="inherit"
                  variant="body2"
                  style={{ textDecoration: 'none' }}
                  onClick={() => scrollToElement('footerContacts')}
                >
                  Контакты
                </Link>
                <br />
                <Link
                  color="inherit"
                  variant="body2"
                  style={{ textDecoration: 'none' }}
                  onClick={() => handleSocialClick('https://2gis.kg/bishkek/geo/70030076166070531')}
                >
                  Адрес
                </Link>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>
                  Следите за нами
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link
                    onClick={() =>
                      handleSocialClick(
                        'https://www.instagram.com/mkids.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                      )
                    }
                    color="inherit"
                  >
                    <InstagramIcon />
                  </Link>
                  <Link
                    onClick={() =>
                      handleSocialClick('https://wa.me/996706660241')
                    }
                    color="inherit"
                  >
                    <WhatsApp />
                  </Link>
                  <Link
                    onClick={() =>
                      handleSocialClick('https://t.me/b_suiunbekovna01')
                    }
                    color="inherit"
                  >
                    <Telegram />
                  </Link>
                </Box>
              </Grid>
            </Grid>

            <Box mt={4} textAlign="center">
              <Typography
                variant="body2"
                color="white"
                onClick={() =>
                  handleSocialClick('https://t.me/Makka567')
                }
              >
                &copy; {new Date().getFullYear()} Сайт создал Адилет{' '}
                <Link color="inherit">
                  <Telegram sx={{ position: 'relative', top: 7 }} />
                </Link>
              </Typography>
            </Box>
          </Container>
        </Box>
      </StyledBox>
    </ContainerFooter>
  );
};

export default Footer;
