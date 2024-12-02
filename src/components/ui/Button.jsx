import { Button as ButtonMui, styled } from '@mui/material';

const Button = ({
  children,
  type = 'button',
  variant = 'contained',
  ...rest
}) => {
  return (
    <ButtonMuiStyle type={type} variant={variant} {...rest}>
      {children}
      <GreenBack className="green-back"></GreenBack>
    </ButtonMuiStyle>
  );
};

export default Button;

const ButtonMuiStyle = styled(ButtonMui)(() => ({
  padding: '10px 55px 10px 25px',
  borderRadius: '25px',
  backgroundColor: '#fff',
  color: '#8a56f6',
  fontWeight: 700,
  position: 'relative',
  transition: 'all 0.3s ease',
  fontSize: 16,
  '&:hover': {
    backgroundColor: 'rgba(243, 234, 255, 0.7)',
    '& .green-back': {
      backgroundColor: '#6a3ec8',
      opacity: 0.7,
    },
  },
}));

const GreenBack = styled('div')(() => ({
  width: '45px',
  height: '48px',
  backgroundColor: '#8a56f6',
  borderRadius: '50%',
  position: 'absolute',
  top: 24,
  right: -1,
  transform: 'translateY(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
