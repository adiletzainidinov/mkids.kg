import { GiHamburgerMenu } from 'react-icons/gi';
import styled from 'styled-components';
import logo from '../../../assets/logo.png';
import { MdLanguage } from 'react-icons/md';
import { AiOutlineCaretDown } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <Container>
        <MainContent>
          <GiHamburgerMenu size={28} color="#fff" />
          <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
          <div>
            <MdLanguage size={28} color="white" />
            <AiOutlineCaretDown color="white" />
          </div>
        </MainContent>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  height: 70px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
