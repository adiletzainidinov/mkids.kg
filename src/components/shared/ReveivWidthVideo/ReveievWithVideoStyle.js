import { styled } from '@mui/material';
import Button from '../../ui/Button';

export const Container = styled('div')(() => ({
  width: '100%',
  height: '100%',
  minHeight: '600px',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '480px',
  display: 'flex',
  justifyContent: 'center',
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
}));

export const CardContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 1100px)': {
    width: '100%',
    maxWidth: 500,
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto',
  },
}));

export const TitleRevievVideo = styled('div')(() => ({
  textAlign: 'center',
  '& h2': {
    fontSize: 50,
    marginBottom: 80,
    color: '#252543',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#FF6347',
    },
  },
  '@media (max-width: 990px)': {
    h2: {
      fontSize: 42,
    },
  },
  '@media (max-width: 480px)': {
    h2: {
      fontSize: 32,
    },
  },
}));

export const ButtonStyleVideo = styled(Button)(() => ({
  width: '100%',
  maxWidth: '250px',
  margin: '0 auto',
  marginTop: 50,
  marginBottom: 80,
}));
