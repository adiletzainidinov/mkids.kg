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
  justifyContent: 'center',
  position: 'relative',
  paddingBottom: 100,
  backgroundColor: '#fdeee7',
}));

export const BoxContainer = styled('div')(() => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 20px',
  marginTop: 100,
  '& h2': {
    textAlign: 'center',
    fontSize: 44,
    marginBottom: 30,
    color: '#0f0f30',
  },
  '@media (max-width: 766px)': {
    '& h2': {
      fontSize: '38px',
    },
  },
  '@media (max-width: 480px)': {
    '& h2': {
      fontSize: '28px',
    },
  },
}));

export const QuestionsBox = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '15px 20px',
  marginBottom: '20px',
  transition: 'background-color 0.3s ease',
  paddingBottom: 0,

  '& .icon': {
    fontSize: '24px',
    color: '#007bff',
    transition: 'transform 0.3s ease',
  },

  '& .rotate': {
    transform: 'rotate(90deg)',
  },

  '& p': {
    marginLeft: 10,
    fontSize: '18px',
    fontWeight: 600,
    color: '#30314e',
  },
  '@media (max-width: 766px)': {
    '& p': {
      fontSize: '16px',
    },
  },
  '@media (max-width: 480px)': {
    '& p': {
      fontSize: '14px',
    },
  },
}));

export const QuestionContent = styled('div')(({ isVisible }) => ({
  maxHeight: isVisible ? '2500px' : '0px',
  opacity: isVisible ? 1 : 0,
  transition: 'max-height 0.5s ease, opacity 0.5s ease',
  overflow: 'hidden',
  fontSize: '16px',
  color: '#6b6b81',
  lineHeight: '26px',
  padding: isVisible ? '20px' : '0 20px',
  backgroundColor: '#fff',
  borderRadius: '0 0 10px 10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: isVisible && 20,
}));

export const QuestionLine = styled('div')(() => ({
  width: '100%',
  height: 1.5,
  backgroundColor: '#d9d9d9',
  marginBottom: 20,
}));
