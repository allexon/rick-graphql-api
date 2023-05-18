import { styled } from 'solid-styled-components'

interface Props {
    isOpen?: boolean;
}

export const Container = styled('div')<Props>`  
  position: absolute;
  width: 300px;
  height: 100vh;  
  background: rgb(68, 97, 86);
  top:0px;
  left: 0px;
  transition: transform 0.3s ease-in-out;    
  transform: ${props => props.isOpen? 'translateX(0px)' : 'translateX(-300px)'}; 
  z-index: 1;
  box-shadow: -5px 0 5px -5px rgba(68, 97, 86, 0.5); 
`

export const Button = styled('button')<Props>`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: transparent;
  top: 3px;
  right: ${({ isOpen }) => {
    // console.log(isOpen);
    return isOpen ? '3px' : '-60px';
  }};
  border: none;
  cursor: pointer;
`;