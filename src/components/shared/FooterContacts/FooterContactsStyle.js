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
  flexDirection: 'column',
  padding: '0 20px',
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  '& h2': {
    textAlign: 'center',
    fontSize: 44,
    marginTop: 100,
    marginBottom: 40,
    color: '#0f0f30',
  },
  '@media (max-width: 990px)': {
    '& h2': {
      fontSize: 36,
    },
  },
  '@media (max-width: 350px)': {
    '& h2': {
      fontSize: 28,
    },
  },
}));

// Content

export const PapaLeftRightFooter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 1200px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
}));

export const LeftContactsFooter = styled('div')(() => ({}));

export const FooterFlex = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  gap: 40,
  '& .call': {
    marginRight: 10,
  },
  '@media (max-width: 610px)': {
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    '& .call-out': {
      marginRight: 40,
    },
  },
}));

export const ButtonStyle = styled(Button)(() => ({
  position: 'relative',
  fontSize: 18,
  paddingLeft: 64,
  '& .or': {
    borderRadius: '50%',
    backgroundColor: '#8a56f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: 'black',
    position: 'absolute',
    top: 5,
    left: -30,
    borderRight: '5px solid #b19df9 ',
    '& p': {
      color: '#fff',
    },
  },
  '& .whatsapp': {
    marginLeft: 10,
  },
  '& .telegram': {
    width: 20,
    height: 20,
  },
  '@media (max-width: 400px)': {
    fontSize: 14,
  },
  '@media (max-width: 350px)': {
    fontSize: 12,
  },
  '@media (max-width: 320px)': {
    fontSize: 10,
  },
}));
