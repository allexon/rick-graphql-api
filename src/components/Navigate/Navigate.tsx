import { Nav, Link } from './stylesNavigate'

export default function Navigate() {
  return (
      <Nav>
        <Link href='/Home'>Home</Link>
        <Link href='/rick-list'>Lista</Link>
        <Link href='/rick-details'>Detalhes</Link>
        <Link href='/rick404'>Pagina 404</Link>
      </Nav>
  )
}