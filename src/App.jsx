import React, {Suspense} from 'react'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Principal_Index  from './components/Principal_Index'
import Login from './components/Login'
import CrearRegistroRapido from './components/RegistroRapido/crearRegistroRapido'
import Registered_index from './components/Principal_Index/registered_index'



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' name='index'element={<Principal_Index/>} />
          <Route path='/login' name='login' element={<Login/>} />
          <Route path='/registrar' name='registrar' element={<CrearRegistroRapido/>}/>
          <Route path='/app' name='logged-index' element={<Registered_index/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
