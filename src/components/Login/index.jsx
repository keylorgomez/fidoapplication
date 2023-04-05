import React, {useState} from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline, AppBar, Toolbar, IconButton} from '@mui/material'
import './style.css'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import Footer from '../Footer'
import {useNavigate} from 'react-router-dom'
import GoogleAuthentication from '../GoogleAuthentication/googleAuthentication';


function Login() {
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()
    const indexPage=()=>{
        navigate('/')
    }
    const onSubmit=()=>{
        console.log(email)
        console.log(password)
        navigate('/app')
      }

  return (
    <div>
      <Grid container component='main' style={{backgroundColor:'#36949D',backgroundSize:'cover',backgroundPosition:'center',  height:'auto', flexWrap:'nowrap',}}>
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
        <Container component={Paper} elevation={0} maxWidth='xs' className='container' style={{borderRadius:'1.5rem', height:'500px', width:'350px', marginTop:'9.5rem', marginBottom:'5rem',boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)'}}>
            <div className='divLogo'>
                <Avatar>
                    <LoginOutlinedIcon/>
                </Avatar>
            </div>
            <div className='divTitulos'>
                <Typography component='h1' variant='h5' style={{fontSize:'2.2rem', height:'40px', fontWeight:'700', color:'#8C30F5',fontFamily:[ 'Source Sans Pro','sans-serif']}}>Inicio de sesión</Typography>
                <p style={{margin:'10px 0px 0px 0px', fontSize:'14px'}}>¿Aún no tienes cuenta? <a href='/registrar' path='/registrar' style={{textDecoration:'none', color:'#fdb44b',fontWeight:'bold'}}>Regístrate</a></p>
            </div> 
            <div className='divLogo' style={{marginTop:'2px', marginBottom:'0.2rem'}}>
                <form className='form'>
                    <TextField fullWidth autoFocus margin='normal' variant='outlined' label='Correo' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <TextField fullWidth margin='normal' variant='outlined' label='Contraseña' type='password' name='password' value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Button
                    fullWidth
                    variant='contained' style={{marginTop:'1rem', backgroundColor:'#8C30F5', fontWeight:500}} onClick={()=>onSubmit()}
                    >Iniciar Sesión</Button>
                </form>
                <a  href='/' style={{textDecoration:'none', color:'#fdb44b', margin:'15px', fontWeight:'bold', fontSize:'14px'}}>¿Olvidó su contraseña?</a>
            </div>
            <GoogleAuthentication/>
        </Container>
      </Grid>
      <Footer/>
    </div>
  )
}

export default Login
