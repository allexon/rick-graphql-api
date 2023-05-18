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
    width: 570px;    
    min-height: 180px;
    background-color: #3C3E44;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin:10px;
`

export const Box = styled('div')<props>`
    position: relative;
    display:flex;
    flex-flow: column nowrap;
    background-color: ${props => props.bg? props.bg : 'transparent'};
    width: ${props => props.width? props.width : 'auto'};
    height: auto;
    justify-content: center;
    align-items: flex-start;
`

export const ContainerImg = styled('div')<props>`
    position: relative;
    display:flex;
    flex-flow: column wrap;
    background-color: ${props => props.bg? props.bg : 'transparent'};
    width: 185px;
    height: 170px;
`

export const Img = styled('img')<props>`
    position: absolute;    
    display: flex;    
    height: 105%;
    justify-content: center;
    align-items: center;        
    overflow: hidden;  
    background-size: cover;
    background-position: center;
    border-radius: 5px 0px 0px 5px;
    top:-5px;
`

export const Title = styled('span')`    
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    min-width: 380px;
    color: white;
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

export const Buttons = styled('div')`    
    display:flex;
    flex-flow: row wrap;
    width: 100%;
    height:50px;
    background-color: green;
    justify-content: center;
    align-items: center;
`

export const Button = styled('button')`    
    display:flex;
    flex-flow: row wrap;
    width: 50px;    
    height: 50px;    
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border:none;
    cursor:pointer;

    &.disabled-button {
        pointer-events: none;
        cursor: not-allowed;
    }
`

export const ButtonShare = styled('button')`    
    position: absolute;
    display:flex;
    flex-flow: row wrap;
    width: 50px;    
    height: 50px;    
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border:none;
    cursor:pointer;
    bottom:0px;
    right: 0px;
    z-index: 10;
`