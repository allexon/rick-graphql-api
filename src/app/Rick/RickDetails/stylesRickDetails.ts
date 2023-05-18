import { styled } from 'solid-styled-components'

interface props {
    width?: string;
    bg?: string;
}

export const Container = styled('div')`
    display:flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;    
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const Card = styled('div')`
    position: relative;
    display:flex;
    flex-flow: row wrap;
    width: 120px;    
    height: auto;
    background-color: #34363B;
    border-radius: 3px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    justify-content: center;
    padding: 10px;
    margin:5px;
`

export const Box = styled('div')<props>`
    position: relative;
    display:flex;
    flex-flow: row wrap;
    background-color: ${props => props.bg? props.bg : 'transparent'};
    width: ${props => props.width? props.width : 'auto'};    
    width: 100%;
`

export const ContainerImg = styled('div')<props>`
    position: relative;
    display:flex;
    flex-flow: row wrap;
    background-color: ${props => props.bg? props.bg : 'transparent'};
    width: 100%;
`

export const Img = styled('img')<props>`    
    display: flex;    
    width: 100%;
    justify-content: center;
    align-items: center;        
    overflow: hidden;  
    background-size: cover;
    background-position: center;    
    top:-5px;
`

export const Title = styled('span')`    
    display: block;
    font-family: 'Arial';
    font-size: 80%;
    max-width: 380px;
    color: white;
    font-weight: bold;
    text-align: center;
    padding-left: 10px;
`

export const Label = styled('label')`    
    display: block;
    min-width: 380px;
    height: 45px;    
    margin: 0px;
    padding: 0px;
    font-size: 25px;
    font-family: 'Caveat', cursive;
    padding-left: 20px;    
    color:white;

    &.circle {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: transparent;
        border-radius: 50%;
    }

    &.circle::after {
        content: "";
        position: absolute;
        top: 17px;
        left: 10px;
        transform: translate(-50%, -50%);
        width: 7px;
        height: 7px;
        background-color: orange;
        border-radius: 50%;
    }
`