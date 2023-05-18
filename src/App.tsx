import { Router } from '@solidjs/router'
import { Component } from 'solid-js'
import {  Layout, Sidebar, Footer, Content, Header } from './components/index'
import Routers from './Routers'

const App: Component = () => {

  return (
    <Router>
      <Layout>
        <Sidebar />      
        <Header />
        <Content>
          <Routers />
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
