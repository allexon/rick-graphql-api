import { Component, JSX } from 'solid-js'
import { Container } from './stylesLayout'

interface LayoutProps {
  children: JSX.Element
}

const Layout: Component<LayoutProps> = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default Layout