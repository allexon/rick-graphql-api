import { Component, JSX } from 'solid-js'
import { Container, Text } from './stylesHeader'

interface Props {
  children?: JSX.Element
}

const Header: Component<Props> = (props) => {
  return (
    <Container>
        {
          props.children?
          props.children :
          <Text>GraphQl Rick e Morty</Text>
          }
    </Container>
  )
}

export default Header