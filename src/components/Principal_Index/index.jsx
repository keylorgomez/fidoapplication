import React from 'react'
import Footer from '../Footer'
import Inicial_Header from '../Header/inicial_header'
import AppServices from '../AppServices'
import CardsApp from '../Cards/CardsApp'
import SearchBar from '../SearchBar'


function Principal_Index() {
  return (
    <React.Fragment>
      <Inicial_Header/>
      <AppServices/>
      <SearchBar/>
      <CardsApp/>
      <Footer/>
    </React.Fragment>
    
  )
}

export default Principal_Index
