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
  '@media (max-width: 1180px)': {
    marginTop: -100,
  },
  '@media (max-width: 990px)': {
    marginTop: 0,
  },
  '@media (max-width: 480px)': {
    marginTop: 100,
  },
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
}));

export const CardDocuments = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.15)',
  borderRadius: 20,
  backgroundColor: '#e8f0f9',
  position: 'relative',
  marginTop: 250,
  padding: 70,
  paddingBottom: 30,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '420px',
    left: '50px',
    width: '350px',
    height: '300px',
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
    borderRadius: '50%',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50px',
    right: '140px',
    width: '500px',
    height: '550px',
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
    borderRadius: '50%',
    zIndex: 0,
  },
  '@media (max-width: 1180px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '@media (max-width: 480px)': {
    '&::before': {
      top: '420px',
      left: '-60px',
      width: '350px',
      height: '300px',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      borderRadius: '50%',
      zIndex: 0,
    },
  },
}));

// Left Documents

export const LeftContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: 680,
  '& h1': {
    fontSize: 50,
    color: '#30314e',
    lineHeight: '42px',
    fontWeight: 700,
    marginBottom: 40,
    textAlign: 'center',
  },
  '@media (max-width: 780px)': {
    '& h1': {
      fontSize: 44,
    },
  },
  '@media (max-width: 480px)': {
    '& h1': {
      fontSize: 32,
    },
  },
}));

export const PapaDocumentSome = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  '@media (max-width: 780px)': {
    justifyContent: 'center',
  },
}));

export const DocumentsSome = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '320px',
  marginBottom: 40,
  '& .icons': {
    borderRadius: 10,
    backgroundColor: '#ff5a05',
    padding: 10,
    display: 'inline-block',
    marginBottom: 20,
    '& ion-icon': {
      color: 'white',
      fontSize: 40,
    },
  },

  '& h2': {
    fontSize: 28,
    color: '#30314e',
    fontWeight: 700,
    marginBottom: 20,
  },

  '& p': {
    fontSize: 16,
    color: '#6b6b81',
    width: '100%',
    maxWidth: 280,
    textAlign: 'center',
    lineHeight: '26px',
  },
  '@media (max-width: 480px)': {
    '& h2': {
      fontSize: 26,
      textAlign: 'center',
    },
    '& p': {
      fontSize: 14,
    },
  },
}));

// Right Container

export const RightContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',

  '& img': {
    width: 350,
    height: 500,
    borderRadius: 20,
    marginLeft: 50,
    position: 'relative',
    transform: 'translateY(-150px)',
    zIndex: 2,
  },
  '@media (max-width: 1180px)': {
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: 650,
      transform: 'translateY(0px)',
      zIndex: 2,
      marginLeft: 0,
    },
  },
  '@media (max-width: 780px)': {
    margin: '0 20px',
    '& img': {
      width: 350,
    },
  },
  '@media (max-width: 480px)': {
    margin: '0 20px',
    '& img': {
      width: 250,
      height: 350,
    },
  },
}));
