import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../Login/style.css'
import Footer from '../Footer';
import { CssBaseline, Grid, Container, AppBar, Toolbar, IconButton, Typography, Paper,Avatar} from '@mui/material';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import {useNavigate} from 'react-router-dom'
import './style.css';

const CrearRegistroRapido = () => {
  const navigate=useNavigate()
    const indexPage=()=>{
        navigate('/')
    }
    
    return (
      <React.Fragment>
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
        <Container component={Paper} elevation={0} maxWidth='xs' style={{borderRadius:'1.5rem', minHeight:'600px', width:'350px', marginTop:'6.5rem', marginBottom:'5rem',boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12)'}} >
          <div className='divLogo'>
                <Avatar>
                    <PersonAddRoundedIcon/>
                </Avatar>
          </div>
          <div className='divTitulos'>
            <Typography component='h1' variant='h5' style={{fontSize:'2.2rem', height:'40px', fontWeight:'700', color:'#8C30F5',fontFamily:[ 'Source Sans Pro','sans-serif']}}>Crear cuenta</Typography>
            <p style={{margin:'10px 0px 0px 0px', fontSize:'14px'}}>¿Ya tienes cuenta? <a href='/login' path='/login' style={{textDecoration:'none', color:'#fdb44b',fontWeight:'bold'}}>Inicia sesión</a></p>
          </div>
          
          <Formik
            initialValues={{
              email: '',
              password: '',
              confirmPassword: '',
              firstName: '',
              lastName: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
              password: Yup.string()
                .min(6, 'Debe tener al menos 6 caracteres')
                .matches(
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
                  'Debe contener al menos un número, una letra mayúscula y una letra minúscula'
                )
                .required('Requerido'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
                .required('Requerido'),
              firstName: Yup.string().required('Requerido'),
              lastName: Yup.string().required('Requerido'),
            })}
            onSubmit={(values) => {
              const formData = JSON.stringify(values);
              console.log(formData);
            }}
          >
            {(formik) => (
              <div className='divLogo' style={{marginTop:'2px', marginBottom:'0.2rem'}}>
              <Form className='form-group'>
              
                  <label htmlFor="firstName">Nombre</label>
                  <Field type="text" name="firstName" className="form-control" />
                  <ErrorMessage name="firstName" className='error-message'>{msg => <div className='error-message'>{msg}</div>}</ErrorMessage>

                  <label htmlFor="lastName">Apellidos</label>
                  <Field type="text" name="lastName" className="form-control" />
                  <ErrorMessage name="lastName" className='error-message'>{msg => <div className='error-message'>{msg}</div>}</ErrorMessage>
                  
                  <label htmlFor="email">Correo electrónico</label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" className='error-message'>{msg => <div className='error-message'>{msg}</div>}</ErrorMessage>
                
      
                
                  <label htmlFor="password">Contraseña</label>
                  <Field type="password" name="password" className="form-control" />
                  <ErrorMessage name="password" className='error-message'>{msg => <div className='error-message'>{msg}</div>}</ErrorMessage>
                
      
                
                  <label htmlFor="confirmPassword">Confirmar contraseña</label>
                  <Field type="password" name="confirmPassword" className="form-control" />
                  <ErrorMessage name="confirmPassword" className='error-message'>{msg => <div className='error-message'>{msg}</div>}</ErrorMessage>

                <button type="submit" style={{marginBottom:'2rem'}}>
                  REGISTRARSE
                </button>
              </Form>
              </div>
              
            )}
          </Formik>
        </Container>
        </Grid>
          
        <Footer/>
      </React.Fragment>
      
    );
    const onSubmitHandler = (values) => {
        const formData = JSON.stringify(values);
        console.log(formData);
      }      
  };
  
  export default CrearRegistroRapido;
