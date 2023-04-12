import React,{useState} from 'react'
import './style.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper"
import {Card, CardActions, CardContent, Button, Typography} from '@mui/material'
import Modal from '../Modal/modal'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'



function Cards({card}) {
  const [estadoModal, setEstadoModal]=useState(false);
  const navigate=useNavigate()
    const ReservPage=()=>{
        navigate('/reservar-servicio')
    }

  return (
    <React.Fragment>
      <div className='cardBox'>
        <Card style={{borderRadius:'1.2rem', marginRight:'0.5rem',marginBottom:'1rem', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)'}} >
          <CardContent style={{padding:'0.6rem 0.7rem 0.2rem 0.7rem'}}>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                loop={false}
                mousewheel={true}
                cssMode={true}
                pagination
                navigation={true}
                modules={[Pagination,Navigation]}
                className='swiperContainer'>
                  { card.imgSrc.map((src,i)=>(
                <SwiperSlide key={i}>
                    <img src={src} className='cardImg' />
                </SwiperSlide>
                ))}
            </Swiper>
            <Typography  style={{marginTop:'0.7rem', fontWeight:700}} >   
              {card.title}
            </Typography>
            <Typography  component="p">
            {card.descripcion}
            </Typography>
            <Typography color="textSecondary">
            ₡{card.price}
            </Typography> 
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:'#8C30F5', backgroundColor:'#F1E4FF', fontWeight:600, borderRadius:'0.5rem'}} onClick={()=>setEstadoModal(!estadoModal)}>Información</Button>
          </CardActions>
        </Card>
        
      </div>
      <Modal style={{zIndex:100}}
      estado={estadoModal} 
      modifcarEstadoModal={setEstadoModal}
      >
        <Contenido>
          <div className='Imgs'>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                loop={false}
                mousewheel={true}
                cssMode={true}
                pagination
                navigation={true}
                modules={[Pagination,Navigation]}
                className='swiperContainer2'>
                  { card.imgSrc.map((src,i)=>(
                <SwiperSlide key={i}>
                    <img src={src} className='cardImg2' />
                </SwiperSlide>
                ))}
            </Swiper>
          </div>
          
          <Informacion>
            <h1>{card.title}</h1>
            <p>{card.descripcion}</p>
            <p>Precio: ₡{card.price}</p>
            <Boton onClick={()=>ReservPage()}>Reservar</Boton>
          </Informacion>
        </Contenido>
        
        
      </Modal>
    </React.Fragment>
      
  )
}

export default Cards

const Contenido=styled.div`
  display: flex;
  justify-content:flex-start;
  align-items: center;
  width: 95%;
  @media only screen and (max-width: 465px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: center;
  }
`;

const Informacion = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
  padding: 0 1rem 0 0;
  margin: 0 1rem 1.5rem 1rem;
  @media only screen and (max-width: 465px) {
    padding: 0 2rem 0 0;
    margin: 0 0 0 0.5rem;
  }
	h1 {
		font-size: 1.3rem;
		font-weight: 600;
		margin-bottom: 2px;
    margin-top:8px
    @media only screen and (max-width: 850px) {
      font-size: 1.3rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 465px) {
      font-size: 1.3rem;
      margin-top:3px
      margin-bottom: 1px;
    }@media only screen and (max-width: 345px) {
      font-size: 1rem;
      margin-top:3px
      margin-bottom: 1px;
    }
	}
	p {
		font-size: 1rem;
		margin-bottom: 5px;
    @media only screen and (max-width: 465px) {
      margin-bottom: 1px;
      margin-top:3px
    }
	}
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #8C30F5;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 550;
	transition: .3s ease all;
  margin-top:4.5rem;
	&:hover {
		background: #B381EC;
	}
  @media only screen and (max-width: 465px) {
    margin-top:1rem;

  }
`;