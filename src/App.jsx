import React, {Suspense} from 'react'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Principal_Index  from './components/Principal_Index'
import Login from './components/Login'
import CrearRegistroRapido from './components/RegistroRapido/crearRegistroRapido'
import Registered_index from './components/Principal_Index/registered_index'
import PerfilUsuario from './components/Perfil/perfilUsuario'
import Mascotas from './components/Mascotas'
import ReservasUsuario from './components/Reservaciones/reservasUsuario'
import PerfilNegocio from './components/Perfil/perfilNegocio'
import ServiciosNegocio from './components/Servicios'
import ReservasNegocio from './components/Reservaciones/reservasNegocio'
import GestionPromociones from './components/GestionPromociones/GestionPromociones'
import ClientsList from './components/Administration/clientsList'
import BusinessList from './components/Administration/businessList'
import RegistrarNegocio from './components/RegistrarNegocio/registrarNegocio'
import ReservationPage from './components/ResrvationPage/reservationPage'



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' name='index'element={<Principal_Index/>} />
          <Route path='/login' name='login' element={<Login/>} />
          <Route path='/registrar' name='registrar' element={<CrearRegistroRapido/>}/>
          <Route path='/app' name='logged-index' element={<Registered_index/>} />
          <Route path='/perfil-usuario' name='perfil' element={<PerfilUsuario/>}/>
          <Route path='/pets' name='pets' element={<Mascotas/>}/>
          <Route path='/reservas-usuario' name='reservas-usuarios' element={<ReservasUsuario/>}/>
          <Route path='/perfil-negocio' name='perfil-negocio' element={<PerfilNegocio/>}/>
          <Route path='/servicios-negocio' name='servicios' element={<ServiciosNegocio/>}/>
          <Route path='/reservas-negocio' name='reservas-negocios' element={<ReservasNegocio/>}/>
          <Route path='/promocion-noticias' name='promocion-noticias' element={<GestionPromociones/>}/>
          <Route path='/clientes-asociados' name='reservas-asociado-cliente' element={<ClientsList/>}/>
          <Route path='/negocios-asociados' name='reservas-asociado-negocio' element={<BusinessList/>}/>
          <Route path='/registrar-negocio' name='registro-negocio' element={<RegistrarNegocio/>}/>
          <Route path='/reservar-servicio' name='reservar-servicio' element={<ReservationPage/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
