import React, {Suspense} from 'react'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Principal_Index  from './components/Principal_Index'
import Login from './components/Login'
import CrearRegistroRapido from './components/RegistroRapido/crearRegistroRapido'



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' name='index'element={<Principal_Index/>} />
          <Route path='/login' name='login' element={<Login/>} />
          <Route path='/registrar' name='registrar' element={<CrearRegistroRapido/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
