import { styled } from '@mui/material';
import Button from '../../ui/Button';

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
}));

export const ReviewsFromЗilgrims = styled('h2')(() => ({
  textAlign: 'center',
  marginTop: '80px',
  marginBottom: '60px',
  fontSize: '42px',
  color: '#0f0f30',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'color 0.3s ease',
  marginLeft: 20,
  marginRight: 20,
  '&:hover': {
    color: '#FF6347',
  },
  '@media (max-width: 766px)': {
    fontSize: '36px',
  },
  '@media (max-width: 480px)': {
    fontSize: '28px',
    marginBottom: '40px',
  },
}));

export const ReviewPapa = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 50,
  flexWrap: 'wrap',
  margin: '0 20px',
  '@media (max-width: 1100px)': {
    justifyContent: 'center',
  },
}));

export const RevievCard = styled('div')(({ BackgroundColor }) => ({
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  backgroundColor: BackgroundColor,
  borderRadius: '20px',
  padding: '30px',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  },
}));

export const AboutNameReviev = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#131333',
  '& img': {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  '& p': {
    width: '100%',
    maxWidth: '200px',
    marginLeft: '10px',
    marginRight: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  '& .raiting': {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '10px 20px',
    borderBottomLeftRadius: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#FF6347',
  },
  '@media (max-width: 550px)': {
    '& p': {
      fontSize: '16px',
    },
    '& .raiting': {
      fontSize: '14px',
    },
  },
}));

export const RealReviev = styled('div')(() => ({
  marginTop: '30px',
  color: '#131333',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '40px',
  '& p': {
    transition: 'color 0.3s ease',
  },
  '&:hover p': {
    color: '#555',
  },
  '@media (max-width: 550px)': {
    '& p': {
      fontSize: '14px',
    },
  },
}));

export const DateAndRead = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '& h2': {
    fontSize: '14px',
    fontWeight: 300,
    color: '#666',
    transition: 'color 0.3s ease',
  },
  '& .icon': {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  '&:hover h2': {
    color: '#333',
  },
  '&:hover .icon': {
    transform: 'scale(1.1)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
  '@media (max-width: 550px)': {
    '& h2': {
      fontSize: '12px',
    },
  },
}));

// Button

export const ButtonStyle = styled(Button)(() => ({
  width: '100%',
  maxWidth: '250px',
  margin: '0 auto',
  marginTop: 50,
  padding: '20px',
  marginBottom: 80,
}));
