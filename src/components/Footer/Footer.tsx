import { Component, JSX } from 'solid-js'
import { Container, Text } from './stylesFooter'

interface Props {
  children?: JSX.Element
}

const Footer: Component<Props> = (props) => {
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

export default Footer