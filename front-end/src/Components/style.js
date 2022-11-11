import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const palette = {
  white: '#FFFFFF',
  black: '#000000',
  dkGray: '#3D3D3D',
  mdGray: '#7E7E7E',
  dkblue: '#03045E',
  mdblue: '#00B4D8',
  ltblue: '#CAF0F8',
};

export const Main = styled.div`
  position: fixed;
  color: ${palette.mdblue};
  height: 100vh;
  width: 50vw;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Navbar
export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  height: 70px;
  width: 100%;
  padding: 24px 50px;
  border-bottom: solid  1px;
  color: #CAF0F8;
  opacity: 1;


  }
`;

export const StyledNavHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const StyledLeftHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: flex-start;
`;

export const StyledRightHeader = styled(StyledLeftHeader)`
  justify-content: flex-end;
`;

export const StyledLogoHeader = styled.div`
  display: flex;
  width: 33%;
  justify-content: center;
`;

export const StyledLogoLink = styled(Link)`
  font-weight: 300px;
  color: #03045e;
  &:hover {
    color: #a2aab1;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: #a2aab1;
  }
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledNavHeaderBottom = styled(StyledNavHeader)`
  align-items: flex-end;
`;
