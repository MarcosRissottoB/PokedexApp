import React from 'react'
import Layout from './layouts/layout'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Layout>
  )
}

export default App
