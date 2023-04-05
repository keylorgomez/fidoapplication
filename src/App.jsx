import React, {Suspense} from 'react'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from './components/Login'



const App = () => {
  return (
    <BrowserRouter>
    <Suspense>
      <Routes>
      {/* <Route path='/' name='index'element={<Principal_Index/>} /> */}
      <Route path='/' name='login' element={<Login/>} />
      </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default App
