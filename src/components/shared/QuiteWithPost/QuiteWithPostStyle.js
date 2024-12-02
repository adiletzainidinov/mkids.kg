import { Box, styled } from '@mui/material';

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
}));

export const QuoteContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(180deg, #1d1f47 0%, #0c625d 100%)',
  padding: '40px',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'Arial, sans-serif',
  width: '100%',
  paddingBottom: 60,
  '& .text': {
    fontSize: 32,
    color: '#bec3c8',
    lineHeight: '54px',
    fontWeight: 100,
    marginBottom: 40,
    marginTop: 50,
    width: '100%',
  },
  '@media (max-width: 990px)': {
    '& .text': {
      fontSize: 24,
      lineHeight: '44px',
    },
  },
  '@media (max-width: 480px)': {
    '& .text': {
      fontSize: 18,
      lineHeight: '34px',
    },
  },
}));
