/* @refresh reload */
import './assets/css/reset.css'
import { render } from 'solid-js/web'
import App from './App'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('ops... error')
}

render(() => <App />, root!)
