import React,{useState} from 'react'
import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Container, Input, IconButton} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar() {
    
    const [selectedDateTime, setSelectedDateTime] = useState();
    const [salidaDateTime, setSalidaDateTime] = useState();
    const [place, setPlace] = useState("");
    const [cantMascotas, setCantMascotas] = useState();

    const handleDateTimeArrive = (date) => {
        setSelectedDateTime(date);
    };
    const handleDateTimeDepart = (date) => {
        setSalidaDateTime(date);
    };

    const handleClick=()=>{
        console.log(selectedDateTime);
        console.log(salidaDateTime);
        console.log(place);
        console.log(cantMascotas);
    }

  return (
    <React.Fragment>
        <Container maxWidth='xs' elevation={1} className='buscadorContainer' >
            <div className='divBucador'>
                <h2 className='encabezados'>Destino</h2>
                <Input placeholder="¿Dónde?" className='input'value={place} onChange={(event)=>setPlace(event.target.value)}></Input>
            </div>
            <div className='divBucador'>
                <h2 className='encabezados'>Llegada</h2>
                <DatePicker
                placeholderText='¿Cuándo?'
                mode="single"
                onChange={handleDateTimeArrive}
                onselected={setSelectedDateTime}
                selected={selectedDateTime}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd/MM/yy"
                className="date-picker"
                popperClassName='popperPicker'
                popperPlacement='bottom'
                />
            </div>
            <div className='divBucador'>
                <h2 className='encabezados'>Salida</h2>
                <DatePicker
                placeholderText='¿Cuándo?'
                mode="single"
                onChange={handleDateTimeDepart}
                onselected={setSalidaDateTime}
                selected={salidaDateTime}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="dd/MM/yy"
                className="date-picker"
                popperClassName='popperPicker'
                popperPlacement='bottom-end'
                />
            </div>
            <div className='divBucador2'>
                <h2 className='encabezados'>Mascota</h2>
                <Input placeholder="¿Cuántos?" className='input' type='number' min="0" max="5" value={cantMascotas}
            onChange={(event) => setCantMascotas(event.target.value)}></Input>
            </div>
            <div className='divBoton'>
                <IconButton edge="start" className='icon' onClick={handleClick}>
                    <SearchRoundedIcon/>
                </IconButton>
            </div>
        </Container>
    </React.Fragment>
  )
}

export default SearchBar
