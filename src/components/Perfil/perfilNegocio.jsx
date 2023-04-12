import React, { useState } from "react";
import { Typography, Avatar } from "@mui/material";
import Logged_Header from "../Header/second_header";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Container, Button } from "reactstrap";
import "./style.css";
import Swal from "sweetalert2";
import FormRegistroNegocio from "../FormRegistroNegocio/formRegistroNegocio";

function PerfilNegocio() {
  const [data, setData] = useState([
    {
      id: 1,
      imgPerfil: "",
      nombre: "Diego",
      apellidos: "Molina Trejos",
      email: "dmolinatrejos@gmail.com",
      telefono: "70757181",
    },
  ]);

  const eliminar = (dato) => {
    Swal.fire({
      title:
        "¿Estás seguro de eliminar a " +
        dato.nombre +
        " " +
        dato.apellidos +
        " como tu contacto de negocio?",
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
        const index = newData.findIndex((item) => item.id === dato.id);
        newData.splice(index, 1);
        setData(newData);
        Swal.fire(
          "Eliminado!",
          "El contacto de negocio ha sido eliminado.",
          "success"
        );
      }
    });
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
          Editar Negocio
        </Typography>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="formNegocio">
          <FormRegistroNegocio />
        </div>
      </div>

      <div className="contacto">
        <Typography
          component="h1"
          variant="h1"
          style={{
            fontSize: "1.5rem",
            height: "40px",
            fontWeight: "700",
            color: "#8C30F5",
            fontFamily: ["Source Sans Pro", "sans-serif"],
            marginTop: "3rem",
          }}
        >
          Contacto Negocio
        </Typography>

        <Container className="ContainerTable">
          <Table className="tblData">
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.map((dato, index) => (
                <tr key={index}>
                  <td style={{ paddingLeft: "20px" }}>
                    <Avatar
                      src={dato.imgPerfil}
                      sx={{ width: 33, height: 33 }}
                    />
                  </td>
                  <td style={{ paddingTop: "15px" }}>
                    {dato.nombre} {dato.apellidos}
                  </td>
                  <td style={{ paddingTop: "15px" }}>{dato.email}</td>
                  <td style={{ paddingTop: "15px" }}>{dato.telefono}</td>
                  <td>
                    <Button color="danger" onClick={() => eliminar(dato)}>
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
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default PerfilNegocio;
