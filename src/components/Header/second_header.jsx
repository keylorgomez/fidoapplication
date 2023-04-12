import React,{useState} from 'react'
import './style.css'
import { AppBar, Toolbar,CssBaseline, IconButton, Typography, Button, Paper, Drawer, Divider, Avatar, useMediaQuery} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import ListaSlideBar from '../ListaSlideBar';


function Logged_Header() {
    const matchesIcon=useMediaQuery('(max-width: 400px)')
    const matchesLogOut=useMediaQuery('(min-width: 400px)')
    const navigate=useNavigate()
    const LogOut=()=>{
        navigate('/')
    }
    const indexPage=()=>{
        navigate('/app')
    }
    const [open, setOpen]=useState(false)

  return (
    <React.Fragment>
        <CssBaseline/>
        <AppBar color='default' className='AppBar'>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={()=>setOpen(true)}>
                    <MenuOutlinedIcon />
                </IconButton>
                <PetsRoundedIcon className='petsIcon'/>
                <Typography style={{flexGrow:1,fontWeight:'bold', cursor:'pointer', color:'#000'}} onClick={()=>indexPage()}>
                    FIDO
                </Typography>
                {matchesLogOut &&(
                    <Button variant='text' style={{textTransform:'none', borderRadius:'1.3rem', color:'#8C30F5', fontSize:'1rem', fontWeight:'bold'}} onClick={()=>LogOut()}>Cerrar sesión</Button>
                )}
                
                {matchesIcon && (
                    <IconButton>
                        <LogoutOutlinedIcon style={{color:'#8C30F5'}} onClick={()=>LogOut()} />
                    </IconButton>
                )}
            </Toolbar>  
        </AppBar>
        <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
            <Paper elevation={0} style={{width:'220px',backgroundColor: '#75E3EA'}}>
                <div className='divSlideBar'>
                <IconButton edge='start' color='inherit' onClick={()=>setOpen(false)} >
                        <MenuOutlinedIcon/>
                    </IconButton>
                    <Avatar style={{marginLeft:'7.3rem'}} alt='' src=''/>
                </div>
                
                <Divider/>
            </Paper>
            <ListaSlideBar/>
        </Drawer>
    </React.Fragment>
  )
}

export default Logged_Header
