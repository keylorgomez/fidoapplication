import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";
import "./style.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  identification: Yup.string().required(),
  nombre1: Yup.string().required(),
  apellido1: Yup.string().required(),
  whatsapp: Yup.string().required(),
  direccion: Yup.string().required(),
  profesion: Yup.string().required(),
  anioInicioProfesion: Yup.number().integer().required(),
  certificado1: Yup.mixed(),
  certificado2: Yup.mixed(),
  certificado3: Yup.mixed(),
});

const initialValues = {
  foto: null,
  email: "",
  password: "",
  identification: "",
  nombre1: "",
  nombre2: "",
  apellido1: "",
  apellido2: "",
  whatsapp: "",
  telefonoFijo: "",
  nombreOtroContactoMascota: "",
  apellidoOtroContactoMascota: "",
  telefonoOtroContactoMascota: "",
  correoOtroContactoMascota: "",
  direccion: "",
  profesion: "",
  anioInicioProfesion: "",
  certificado1: null,
  certificado2: null,
  certificado3: null,
};

const ModificarPerfilPersona = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        // lógica para enviar los datos al backend o base de datos
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="ContenedorGeneral">
            <div className="ContenedorInterno">
              <div className="Avatar">
                <label htmlFor="foto">Foto:</label>
                <CargarAvatar
                  onImageChange={(resizedFile) => {
                    setFieldValue("foto", resizedFile);
                  }}
                />
              </div>
              <div className="formModicarUsuario">
                <label htmlFor="email">Correo electrónico:</label>
                <Field name="email" type="email" className="inputModificar" />
                <ErrorMessage
                  name="email"
                  className="error-message"
                  component="div"
                />

                <label htmlFor="password">Contraseña:</label>
                <Field
                  name="password"
                  type="password"
                  className="inputModificar"
                />
                <ErrorMessage
                  name="password"
                  className="error-message"
                  component="div"
                />

                <label htmlFor="identification">Identificación:</label>
                <Field name="identification" className="inputModificar" />
                <ErrorMessage
                  name="identification"
                  className="error-message"
                  component="div"
                />

                <label htmlFor="nombre1">Primer Nombre:</label>
                <Field name="nombre1" className="inputModificar" />
                <ErrorMessage
                  name="nombre1"
                  className="error-message"
                  component="div"
                />

                <label htmlFor="nombre2">Segundo Nombre:</label>
                <Field name="nombre2" className="inputModificar" />

                <label htmlFor="apellido1">Primer Apellido:</label>
                <Field name="apellido1" className="inputModificar" />
                <ErrorMessage
                  name="apellido1"
                  className="error-message"
                  component="div"
                />

                <label htmlFor="apellido2">Segundo Apellido:</label>
                <Field name="apellido2" className="inputModificar" />

                <label htmlFor="whatsapp">WhatsApp:</label>
                <Field name="whatsapp" className="inputModificar" />
                <ErrorMessage
                  name="whatsapp"
                  className="error-message"
                  component="div"
                />

                <label htmlFor="telefonoFijo">Teléfono Fijo:</label>
                <Field name="telefonoFijo" className="inputModificar" />
              </div>
            </div>
            <div className="ContenedorInterno">
              <div className="formModicarUsuario">
                <label htmlFor="nombreOtroContactoMascota">
                  Nombre otro contacto de mascota:
                </label>
                <Field
                  name="nombreOtroContactoMascota"
                  className="inputModificar"
                />
                <label htmlFor="apellidoOtroContactoMascota">
                  Apellido otro contacto de mascota:
                </label>
                <Field
                  name="apellidoOtroContactoMascota"
                  className="inputModificar"
                />

                <label htmlFor="telefonoOtroContactoMascota">
                  Teléfono otro contacto de mascota:
                </label>
                <Field
                  name="telefonoOtroContactoMascota"
                  className="inputModificar"
                />

                <label htmlFor="correoOtroContactoMascota">
                  Correo otro contacto de mascota:
                </label>
                <Field
                  name="correoOtroContactoMascota"
                  className="inputModificar"
                />

                <label htmlFor="direccion">Dirección:</label>
                <Field name="direccion" className="inputModificar" />

                <label htmlFor="profesion">Profesión:</label>
                <Field name="profesion" className="inputModificar" />

                <label htmlFor="anioInicioProfesion">
                  Año inicio profesión:
                </label>
                <Field
                  name="anioInicioProfesion"
                  type="number"
                  className="inputModificar"
                />

                <label htmlFor="certificado1">Certificado 1:</label>
                <input
                  className="Certificados"
                  name="certificado1"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("certificado1", event.currentTarget.files[0]);
                  }}
                />

                <label htmlFor="certificado2">Certificado 2:</label>
                <input
                  className="Certificados"
                  name="certificado2"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("certificado2", event.currentTarget.files[0]);
                  }}
                />

                <label htmlFor="certificado3">Certificado 3:</label>
                <input
                  className="Certificados"
                  name="certificado3"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("certificado3", event.currentTarget.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="botonModificar">
            <button type="submit" className="button">
              Modificar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModificarPerfilPersona;
