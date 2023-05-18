import { lazy } from 'solid-js'
import { Router, Routes, Route } from '@solidjs/router'

const Home        = lazy(() => import('./app/Home/Home'))
const RickList    = lazy(() => import('./app/Rick/RickList/RickList'))
const RickDetails = lazy(() => import('./app/Rick/RickDetails/RickDetails'))
const Rick404     = lazy(() => import('./app/Rick/Rick404/Rick404'))

export default function Routers() {
  return (
      <Routes>
          <Route path='/' component={RickList} />
          <Route path='/Home' component={Home} />
          <Route path='/rick-list' component={RickList} />
          <Route path='/rick-details' component={RickDetails} />
          <Route path='*' component={Rick404} />
      </Routes>
  )
}


