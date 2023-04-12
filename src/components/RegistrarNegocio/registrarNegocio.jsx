import React from 'react'
import Footer from '../Footer'
import { CssBaseline, Grid, Container, AppBar, Toolbar, IconButton, Typography, Paper,Avatar} from '@mui/material';
import FormRegistroNegocio from '../FormRegistroNegocio/formRegistroNegocio';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import {useNavigate} from 'react-router-dom'
import './style.css'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function RegistrarNegocio() {
    const navigate=useNavigate()
    const indexPage=()=>{
        navigate('/')
    }
    
  return (
    <React.Fragment>
        <CssBaseline/>
          <AppBar color='default'>
            <Toolbar>
                <IconButton style={{backgroundColor:'transparent'}} onClick={()=>indexPage()}>
                    <PetsRoundedIcon className='petsIcon'/>
                </IconButton>
                <Typography style={{flexGrow:1,fontWeight:'bold', cursor:'pointer'}} onClick={()=>indexPage()}>
                    FIDO
                </Typography>
            </Toolbar>
        </AppBar>
        <div className='contenedorPrincipal'>
            <div className='contenedorFormulario'>
            <div className='divLogo'>
                <Avatar>
                    <AddBusinessIcon/>
                </Avatar>
          </div>
          <div className='divTitulos' style={{marginLeft:'0px'}}>
            <Typography component='h1' variant='h5' style={{fontSize:'1.7rem', height:'40px', fontWeight:'700', color:'#8C30F5',fontFamily:[ 'Source Sans Pro','sans-serif'], marginBottom:'1rem'}}>Registrar Negocio</Typography>
          </div>
                <FormRegistroNegocio/>
            </div>

        </div>
        <Footer/>
    </React.Fragment>
  )
}

export default RegistrarNegocio
