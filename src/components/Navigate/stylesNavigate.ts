import { styled } from 'solid-styled-components'
import { A } from '@solidjs/router'


export const Nav = styled('nav')`
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
    justify-content: center;
    background-color: transparent;
`

export const Link = styled(A)`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    min-width: 97%;
    max-width: 97%;
    padding-left: 10px;
    line-height: 45px;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #ff8c00;
    }
`

