import { Component, JSX } from 'solid-js'
import { Container } from './stylesContent'

interface Props {
  children: JSX.Element
}

const Content: Component<Props> = (props) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default Content