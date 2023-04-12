import React, { useState } from 'react';
import './style.css';
import { Card, CardActions, CardContent, Button, Typography, Avatar } from '@mui/material';
import Modal from '../Modal/modal'
import styled from 'styled-components';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";

function MascotaList() {
  const validationSchema = Yup.object().shape({
    foto: Yup.string().required("La foto es requerida"),
    especie: Yup.string().required("La especie es requerida"),
    nombre: Yup.string().required("El nombre es requerido"),
    raza: Yup.string().required("La raza es requerida"),
    peso: Yup.number()
      .required("El peso es requerido")
      .positive("El peso debe ser mayor que cero")
      .test("is-number", "El campo debe ser un número", (value) => {
        return !isNaN(value);
      })
      .test("is-decimal", "El campo debe tener máximo 2 decimales", (value) => {
        if (isNaN(value)) {
          return false;
        }
        const decimalCount = (value.toString().split(".")[1] || []).length;
        return decimalCount <= 2;
      }),
    sexo: Yup.string()
      .oneOf(["Macho", "Hembra"])
      .required("El sexo es requerido"),
    castrado: Yup.string()
      .oneOf(["Castrado", "No castrado"])
      .required("Este campo es requerido"),
    comportamiento: Yup.string(),
    veterinaria: Yup.string(),
    contactoEmergencia: Yup.string(),
  });
  
  
  const initialValues = {
    foto: "https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg",
    nombre: "",
    especie: "",
    raza: "",
    peso: "",
    sexo: "",
    castrado: "",
    comportamiento: "",
    veterinaria: "",
    contactoEmergencia: "",
  };
  
  const [estadoModal, setEstadoModal]=useState(false);
  const [cards, setCards] = useState([{
    foto:'https://i.pinimg.com/564x/fa/f6/89/faf6893660ada52c7f49c755fcbb9b93.jpg',
    nombre:'Tyson',
    especie:'Perro',
    raza:'dachshund',
    peso:'',
    sexo:'',
    castrado:'No',
    comportamiento:"",
    veterinaria:"",
    contactoEmergencia:'',
    duennoNombre:'Keylor',
    duennoApellidos:'Gómez Rodríguez',
    telefono:'70757181',
    duennoNombre2:'Keylor',
    duennoApellidos2:'Gómez Rodríguez',
    telefono2:'70757181',
    direccion:'Grecia, Alajuela'
}]); 

  return (
    <React.Fragment>
      <div style={{ width: '100%' }}>
        <Button
          variant='contained'
          style={{
            margin: '0.5rem 0 3rem 1.5rem',
            backgroundColor: '#F1E4FF',
            color: '#8C30F5',
            fontWeight: 600,
            textTransform: 'none',
          }} onClick={()=>setEstadoModal(!estadoModal)}
        >
          Añadir mascota
        </Button>
      </div>
      <div className='cardsFlexMascotas'>
        <div className='cardBoxMascota'>
                {cards.map((card) => (
                <Card
                    key={card.id}
                    style={{
                    borderRadius: '1.2rem',
                    marginRight: '0.5rem',
                    marginBottom: '3rem',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <CardContent style={{ padding: '0.6rem 0.7rem 0.2rem 0.7rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar src={card.foto} sx={{ width: 150, height: 150 }} />
                    </div>

                    <Typography style={{ marginTop: '0.7rem', fontSize: '0.9rem' }}>
                        <strong>Nombre: </strong>
                        {card.nombre}
                    </Typography>
                    <Typography style={{ marginTop: '0.7rem', fontSize: '0.9rem' }}>
                        {card.duennoNombre} {card.duennoApellidos}
                    </Typography>
                    <Typography style={{ marginTop: '0.7rem', fontSize: '0.9rem' }}>{card.telefono}</Typography>
                    </CardContent>
                    <CardActions>
                    <Button
                        size='small'
                        style={{ color: '#8C30F5', backgroundColor: '#F1E4FF', fontWeight: 600, borderRadius: '0.5rem' }} onClick={()=>setEstadoModal(!estadoModal)}
                    >
                        Detalles
                    </Button>
                    </CardActions>
                </Card>
                ))}
            </div>
      </div>
      <Modal style={{zIndex:100}}
      estado={estadoModal} 
      modifcarEstadoModal={setEstadoModal}>
        <Contenido>
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ setFieldValue }) => (
            
            <Form >
              <ContenidoIntermedio>
                <FotoPerfil>
                  <div class='photo'>
                    <label htmlFor="foto">Foto:</label>
                <CargarAvatar
                  onImageChange={(resizedFile) => {
                    setFieldValue("foto", resizedFile);
                  }}
                />
                  </div>
                
                <ErrorMessage name="foto" className="error-message" component="div" />
                </FotoPerfil>
                <Formulario>
                  <div className="formulario">
                  <label htmlFor="nombre">Nombre:</label>
                    <Field type="text" name="nombre" class='inputPrueba'   />
                    <ErrorMessage
                      name="nombre"
                      className="error-message"
                      component="div"
                    />
                    <label htmlFor="especie">Especie:</label>
                    <Field type="text" name="especie" class='inputPrueba' />
                    <ErrorMessage
                      name="especie"
                      className="error-message"
                      component="div"
                    />

                    <label htmlFor="raza">Raza:</label>
                    <Field type="text" name="raza" class='inputPrueba'/>
                    <ErrorMessage name="raza" className="error-message" component="div" />

                    <label htmlFor="peso">Peso:</label>
                    <Field type="number" name="peso" class='inputPrueba'/>
                    <ErrorMessage name="peso" className="error-message" component="div" />

                    <label htmlFor="sexo">Sexo:</label>
                    <Field as="select" name="sexo" class='inputPrueba'>
                      <option value="">Selecciona una opción</option>
                      <option value="Macho">Macho</option>
                      <option value="Hembra">Hembra</option>
                    </Field>
                    <ErrorMessage name="sexo" className="error-message" component="div" />

                    <label htmlFor="castrado">Castrado:</label>
                    <Field as="select" name="castrado" class='inputPrueba'>
                      <option value="">Selecciona una opción</option>
                      <option value="Castrado">Castrado</option>
                      <option value="No castrado">No castrado</option>
                    </Field>
                    <ErrorMessage
                      name="castrado"
                      className="error-message"
                      component="div"
                    />

                    <label htmlFor="comportamiento">Comportamiento:</label>
                    <Field type="text" name="comportamiento" class='inputPrueba'/>
                    <ErrorMessage
                      name="comportamiento"
                      className="error-message"
                      component="div"
                    />

                    <label htmlFor="veterinaria">Veterinaria:</label>
                    <Field type="text" name="veterinaria" class='inputPrueba'/>
                    <ErrorMessage
                      name="veterinaria"
                      className="error-message"
                      component="div"
                    />

                    <label htmlFor="contactoEmergencia">Contacto de emergencia:</label>
                    <Field type="text" name="contactoEmergencia"class='inputPrueba' />
                    <ErrorMessage
                      name="contactoEmergencia"
                      className="error-message"
                      component="div"
                    />
                  </div>
                </Formulario>
              </ContenidoIntermedio>
              <ContenidoIntermedio2>
                <button class='btnAccion' type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg></button>
                <button class='btnAccion'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
              </button>
                <button class='btnAccion'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                </button>
              </ContenidoIntermedio2>
            
          </Form>
        )}
        </Formik>
        </Contenido>
      </Modal>
      
    </React.Fragment>
  );
}

export default MascotaList;

const Contenido=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 465px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: center;
    width: 5%;
  }
`;
const ContenidoIntermedio=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  @media only screen and (max-width: 465px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
  };
  @media only screen and (max-width: 385px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
  };
  @media only screen and (max-width: 339px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: flex-start;
    margin-left: 22%
  };

`;
const ContenidoIntermedio2=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  @media only screen and (max-width: 465px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items: center;
  };
  @media only screen and (max-width: 339px) {
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: flex-start;
    margin-left: 0.1rem
  };
  
  @media only screen and (max-width: 278px) {
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items: flex-start;
  };
`;
const FotoPerfil=styled.div`
  display:flex; 
  justify-content:center;
  align-items: center;
  width: 50%;
  margin:0.2rem 0.5rem 0.2rem 0.5rem;
`;
const Formulario=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  width: 50%;
  margin:0.2rem 0.5rem 0.2rem 0.5rem;
`;