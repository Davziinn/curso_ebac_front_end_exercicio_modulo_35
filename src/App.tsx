import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer/indes'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <RouterProvider router={rotas} />
      </div>
      <Footer />
    </>
  )
}

export default App
