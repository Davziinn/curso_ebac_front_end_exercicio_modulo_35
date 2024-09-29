import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer/indes'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
