import styled from 'styled-components';

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
