import { createSignal } from 'solid-js'
import { Container, Button } from './stylesSidebar'
import { IconOpenSidebar, IconCloseSidebar } from '../../assets/svg-in-js'
import { Navigate } from '../../components/index'

interface SidebarProps {
    isOpen?: boolean  
}

const [isOpen, setIsOpen] = createSignal(false)

const fnToggleSidebar = () => {
    setIsOpen(!isOpen())
}

const Sidebar = (props: SidebarProps) => {
  return (
    <Container isOpen={isOpen()}>
        <Navigate />
        <Button onClick={fnToggleSidebar} isOpen={isOpen()}>
        {isOpen()? <IconCloseSidebar /> : <IconOpenSidebar /> }
      </Button>
    </Container>
  )
}

export default Sidebar



