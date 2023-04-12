import React,{useState} from 'react'
import './style.css'
import Logged_Header from '../Header/second_header'
import Footer from '../Footer'
import { Typography } from '@mui/material'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Button } from "reactstrap";
import Swal from 'sweetalert2';

function ReservasNegocio() {
    const [data, setData] = useState([
        {
          id: 1,  // Agrega un id único para cada objeto de datos
          duenno: "Diego Molina",
          servicio: "Baño y corte",
          fecha: "29/03/2023",
          hora: "09:30"
        },
        {
          id: 2,  // Agrega un id único para cada objeto de datos
          duenno: "Keylor Gómez",
          servicio: "Baño",
          fecha: "05/04/2023",
          hora: "14:30"
        }
      ]);
      const eliminar= (dato) => {
        Swal.fire({
          title: "¿Estás seguro de eliminar la reservación de "+dato.duenno+"?",
          text: "¡No podrás revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Eliminar!',
          cancelButtonText:'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            const newData = [...data];
            const index = newData.findIndex((item) => item.duenno === dato.duenno);
            newData.splice(index, 1);
            setData(newData);
            Swal.fire(
              'Eliminado!',
              'La reserva ha sido eliminada.',
              'success'
            )
          }
        })
      };

      const [query,setQuery]=useState("");

  const keys=["duenno", "servicio", "fecha"];


  const search=(info)=>{
    return info.filter(item=>
      keys.some(key=>item[key].toLowerCase().includes(query)));
  }


  return (
    
    <React.Fragment>
        <Logged_Header/>
        <div 
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Typography
          component="h1"
          variant="h1"
          style={{
            fontSize: "1.5rem",
            height: "40px",
            fontWeight: "700",
            color: "#8C30F5",
            fontFamily: ["Source Sans Pro", "sans-serif"],
            marginTop: "6rem",
            marginBottom: "1rem",
          }}
        >
          Reservaciones
        </Typography>
        </div>
        <div className="Reservation">
            <div className="filtroBusqueda">
                <input type="text" name="" id="" placeholder="Buscar" onChange={e=>setQuery(e.target.value)}/>
            </div>
        </div>
        <Container style={{ marginBottom: "5rem", marginTop: "2rem" }}
          className="ContainerTable">
        <Table style={{ marginBottom: "5rem" }} className="tblData">
          <thead>
            <tr>
                <th>Dueño</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {search(data).map((dato, index) => (
            <tr key={index}>
            <td style={{ paddingTop: "15px" }}>{dato.duenno}</td>
            <td style={{ paddingTop: "15px" }}>{dato.servicio}</td>
            <td style={{ paddingTop: "15px" }}>{dato.fecha}</td>
            <td style={{ paddingTop: "15px" }}>{dato.hora}</td>
            <td>
            <Button style={{backgroundColor:'#8C30F5'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </Button>{" "}
                <Button color="danger"  onClick={()=>eliminar(dato)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                  </svg>
                </Button>
            </td>
        </tr>

          ))}
            
          </tbody>
        </Table>
        </Container>
        <div className="FixedFooter">
        <Footer />
        </div>
    </React.Fragment>
  )
}

export default ReservasNegocio
