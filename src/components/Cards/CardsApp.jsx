import React from 'react'
import CardList from '../Cards/CardList'
import { listHotels, listPromos,listGrooming, listEntrenamiento, listVeterinaria } from '../../assets/card-list'
import './style.css'


function CardsApp() {
  return (
    <React.Fragment>
        <div style={{backgroundColor:'#75E3EA'}} className='PrincipalContainer'>
            <h2 style={{fontSize:'1.3rem', margin:'1rem', fontWeight:'bold'}}>Ofertas y Noticias</h2>
            <CardList list={listPromos}/>
        </div>
        <div  className='PrincipalContainer' style={{backgroundColor:'#fff'}}>
            <h2 style={{fontSize:'1.3rem', margin:'1rem', fontWeight:'bold'}}>Hoteles</h2>
            <CardList list={listHotels}/>
        </div>
        <div  className='PrincipalContainer' style={{backgroundColor:'#FFC278'}}>
            <h2 style={{fontSize:'1.3rem', margin:'1rem', fontWeight:'bold'}}>Entrenamiento</h2>
            <CardList list={listEntrenamiento}/>
        </div>
        <div  className='PrincipalContainer' style={{backgroundColor:'#fff'}}>
        <h2 style={{fontSize:'1.3rem', margin:'1rem', fontWeight:'bold'}}>Grooming</h2>
            <CardList list={listGrooming}/>
        </div>
        <div  className='PrincipalContainer' style={{backgroundColor:'#F08080'}}>
            <h2 style={{fontSize:'1.3rem', margin:'1rem', fontWeight:'bold'}}>Veterinaria</h2>
            <CardList list={listVeterinaria}/>
        </div>
    </React.Fragment>
    
  )
}

export default CardsApp
