import React from 'react'
import Logged_Header from '../Header/second_header'
import Footer from '../Footer'
import FormReservaServicio from '../FormReservaServicio/formReservaServicio2'

function ReservationPage() {
  return (
    <React.Fragment>
        <Logged_Header/>
        <FormReservaServicio/>
        <Footer/>
    </React.Fragment>
  )
}

export default ReservationPage
