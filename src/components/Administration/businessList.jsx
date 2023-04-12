import React, { useState } from "react";
import { Typography } from "@mui/material";
import Logged_Header from "../Header/second_header";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Button } from "reactstrap";
import Swal from "sweetalert2";

function BusinessList() {
  const [data, setData] = useState([
    {
      id: 1, // Agrega un id único para cada objeto de datos
      nombre: "Paw Grooming",
      fechaRegistro: "28/03/2023",
      status: "Activo",
    },
    {
      id: 2, // Agrega un id único para cada objeto de datos
      nombre: "Veterinaria Home",
      fechaRegistro: "15/03/2023",
      status: "Activo",
    },
    {
      id: 3, // Agrega un id único para cada objeto de datos
      nombre: "Hotel Canino",
      fechaRegistro: "16/03/2023",
      status: "Inactivo",
    },
  ]);

  const [dataAppointment, setDataAppointment] = useState([
    {
      id: 1, // Agrega un id único para cada objeto de datos
      nombre: "Diego Molina",
      lugar: "Paw Grooming",
      fecha: "28/03/2023",
    },
    {
      id: 2, // Agrega un id único para cada objeto de datos
      nombre: "Keylor Gómez",
      lugar: "Veterinaria Home",
      fecha: "15/03/2023",
    },
    {
      id: 3, // Agrega un id único para cada objeto de datos
      nombre: "Carlos Castro",
      lugar: "Pets Shop",
      fecha: "16/03/2023",
    },
  ]);

  const eliminarBusiness = (dato) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar a " + dato.nombre + "?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = [...data];
        const index = newData.findIndex((item) => item.nombre === dato.nombre);
        newData.splice(index, 1);
        setData(newData);
        Swal.fire("Eliminado!", "El negocio ha sido eliminado.", "success");
      }
    });
  };

  const eliminarAppointment = (dato) => {
    Swal.fire({
      title:
        "¿Estás seguro de eliminar la reserva en " +
        dato.lugar +" a nombre de " +dato.nombre +"?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = [...dataAppointment];
        const index = newData.findIndex((item) => item.lugar === dato.lugar);
        newData.splice(index, 1);
        setDataAppointment(newData);
        Swal.fire("Eliminado!", "La reserva ha sido eliminada.", "success");
      }
    });
  };

  const [query, setQuery] = useState("");
  const [queryAppointment, setQueryAppointment] = useState("");

  const keysBusiness = ["nombre", "status", "fechaRegistro"];
  const keysAppointment = ["nombre", "lugar", "fecha"];

  const searchBusiness = (info) => {
    return info.filter((item) =>
      keysBusiness.some((keysBusiness) =>
        item[keysBusiness].toLowerCase().includes(query)
      )
    );
  };

  const searchAppointment = (info) => {
    return info.filter((item) =>
      keysAppointment.some((keysAppointment) =>
        item[keysAppointment].toLowerCase().includes(queryAppointment)
      )
    );
  };

  return (
    <React.Fragment>
      <Logged_Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          Negocios FIDO
        </Typography>
      </div>
      <div>
        <div className="filtroBusqueda">
          <input
            type="text"
            name=""
            id=""
            placeholder="Buscar negocio"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <Container
          style={{ marginBottom: "2rem", marginTop: "2rem" }}
          className="ContainerTable"
        >
          <div className="contenedorTbl">
            <Table style={{ marginBottom: "1rem" }} className="tblData">
              <thead style={{ position: 'sticky', top: 0, zIndex: 1,backgroundColor:'#D2D2D2'}}>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha Registro</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {searchBusiness(data).map((dato, index) => (
                  <tr key={index}>
                    <td style={{ paddingTop: "15px" }}>{dato.nombre}</td>
                    <td style={{ paddingTop: "15px" }}>{dato.fechaRegistro}</td>
                    <td style={{ paddingTop: "15px" }}>{dato.status}</td>
                    <td style={{ paddingTop: "15px" }}>
                      <Button style={{ backgroundColor: "#8C30F5" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </Button>{" "}
                      <Button color="danger" onClick={() => eliminarBusiness(dato)}>
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
          </div>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          style={{
            fontSize: "1.5rem",
            height: "40px",
            fontWeight: "700",
            color: "#8C30F5",
            fontFamily: ["Source Sans Pro", "sans-serif"],
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Reservas Clientes
        </Typography>
      </div>
      <div>
        <div className="filtroBusqueda">
          <input
            type="text"
            name=""
            id=""
            placeholder="Buscar reserva"
            onChange={(e) => setQueryAppointment(e.target.value)}
          />
        </div>
        <Container
          style={{ marginBottom: "5rem", marginTop: "2rem"}}
          className="ContainerTable"
        >
          <div className="contenedorTbl">
            <Table style={{ marginBottom: "5rem"}} className="tblData">
            <thead  style={{ position: 'sticky', top: 0, zIndex: 1,backgroundColor:'#D2D2D2'}}>
              <tr>
                <th>Negocio</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {searchAppointment(dataAppointment).map((dato, index) => (
                <tr key={index}>
                  <td style={{ paddingTop: "15px" }}>{dato.lugar}</td>
                  <td style={{ paddingTop: "15px" }}>{dato.nombre}</td>
                  <td style={{ paddingTop: "15px" }}>{dato.fecha}</td>
                  <td style={{ paddingTop: "15px" }}>
                    <Button style={{ backgroundColor: "#8C30F5" }}>
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
                    <Button color="danger" onClick={() => eliminarAppointment(dato)}>
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
          </div>
          
        </Container>
        
      </div>

      <div className="FixedFooter">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default BusinessList;
