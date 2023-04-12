import React from 'react'
import './style.css'
import Logged_Header from '../Header/second_header'
import Footer from '../Footer'
import { Typography} from '@mui/material'
import MascotaList from './MascotaCardsList'

function Mascotas() {
  return (
    <React.Fragment>
     <Logged_Header/>
     <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Typography component='h1' variant='h1' style={{fontSize:'1.5rem', height:'40px', fontWeight:'700', color:'#8C30F5',fontFamily:[ 'Source Sans Pro','sans-serif'], marginTop:'6rem', marginBottom:'2rem'}}>Mis Mascotas</Typography>
     </div>

     <MascotaList/>
     <Footer/>
    </React.Fragment>
  )
}

export default Mascotas
