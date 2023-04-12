import React from 'react'
import './style.css'
import { AppBar, Toolbar,CssBaseline, IconButton, Typography, Button, Paper} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';

function Inicial_Header() {
    const navigate=useNavigate()
    const LogInPage=()=>{
        navigate('/login')
    }
    const indexPage=()=>{
        navigate('/')
    }
    const registerPage=()=>{
        navigate('/registrar')
    }

  return (
    <React.Fragment>
        <CssBaseline/>
        <AppBar color='default' className='AppBar'>
            <Toolbar>
                <PetsRoundedIcon className='petsIcon'/>
                <Typography style={{flexGrow:1,fontWeight:'bold', cursor:'pointer',color:'#000'}} onClick={()=>indexPage()}>
                    FIDO
                </Typography>
                <Button variant='contained' style={{textTransform:'none', backgroundColor:'#8C30F5', marginRight:'1rem', borderRadius:'0.5rem'}} onClick={()=>registerPage()}>Registrar</Button>
                <Button variant='contained' style={{textTransform:'none', backgroundColor:'#F1E4FF',color:'#8C30F5', borderRadius:'0.5rem'}} onClick={()=>LogInPage()}>Iniciar</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Inicial_Header
