import { styled } from '@mui/material';

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
  flexDirection: 'column',
  color: '#6a6a7f',
  '& h1': {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 20,
    color: '#0f0f30',
  },
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  '& h1': {
    fontSize: 50,
  },
  '@media (max-width: 990px)': {
    '& h1': {
      fontSize: 45,
    },
  },
  '@media (max-width: 480px)': {
    '& h1': {
      fontSize: 30,
    },
  },
}));

export const TextContainer = styled('div')(() => ({
  width: '100%',
  '& p': {
    fontSize: 20,
    fontWeight: 300,
    paddingBottom: 35,
    width: '100%',
    lineHeight: '28px',
  },
  '& .third': {
    textAlign: 'center',
    fontWeight: 700,
    color: '#0f0f30',
  },
  '& .firstUmra, .fourHadj, .fiveUmra, .sixUmra': {
    fontWeight: 700,
    color: '#0f0f30',
  },
  '@media (max-width: 990px)': {
    '& p': {
      fontSize: 18,
      lineHeight: '26px',
    },
  },
  '@media (max-width: 480px)': {
    '& p': {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
}));
