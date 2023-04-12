import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";
import "./style.css";

const validationSchema = Yup.object().shape({
  foto: Yup.mixed().required("La foto es requerida"),
  nombreNegocio: Yup.string().required("El nombre del negocio es requerido"),
  razonSocial: Yup.string().required("La razón social es requerida"),
  cedJuridica: Yup.string().required("La cédula jurídica es requerida"),
  whatsappNegocio: Yup.string()
    .required("El número de WhatsApp es requerido")
    .matches(/^\d{8,}$/g, "Número de teléfono inválido"),
  telefonoFijo: Yup.string().matches(
    /^\d{8,}$/g,
    "Número de teléfono inválido"
  ),
  dirección: Yup.string().required("La dirección es requerida"),
  descripciónInstalaciones: Yup.string().required(
    "La descripción de las instalaciones es requerida"
  ),
  certificado1: Yup.mixed().notRequired(),
  certificado2: Yup.mixed().notRequired(),
  encargado: Yup.string().required("El nombre del encargado es requerido"),
  estatus: Yup.string().required("El estatus es requerido"),
});

const initialValues = {
  foto: "",
  nombreNegocio: "",
  razonSocial: "",
  cedJuridica: "",
  whatsappNegocio: "",
  telefonoFijo: "",
  dirección: "",
  descripciónInstalaciones: "",
  certificado1: "",
  certificado2: "",
  encargado: "",
  estatus: "",
};

const FormRegistroNegocio = () => {
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
          <div className="Avatar">
            <label htmlFor="foto">Foto:</label>
            <CargarAvatar
              onImageChange={(resizedFile) => {
                setFieldValue("foto", resizedFile);
              }}
            />
          </div>

          <div className="form">
            <label htmlFor="nombreNegocio">Nombre del negocio:</label>
            <Field name="nombreNegocio" type="text" className="inputServicios" />
            <ErrorMessage
              name="nombreNegocio"
              className="error-message"
              component="div"
            />

            <label htmlFor="razonSocial">Razón social:</label>
            <Field name="razonSocial" type="text" className="inputServicios" />
            <ErrorMessage
              name="razonSocial"
              className="error-message"
              component="div"
            />

            <label htmlFor="cedJuridica">Cédula jurídica:</label>
            <Field name="cedJuridica" type="text" className="inputServicios" />
            <ErrorMessage
              name="cedJuridica"
              className="error-message"
              component="div"
            />

            <label htmlFor="whatsappNegocio">Número de WhatsApp:</label>
            <Field name="whatsappNegocio" type="text" className="inputServicios" />
            <ErrorMessage
              name="whatsappNegocio"
              className="error-message"
              component="div"
            />

            <label htmlFor="telefonoFijo">Teléfono fijo:</label>
            <Field name="telefonoFijo" type="text" className="inputServicios" />
            <ErrorMessage
              name="telefonoFijo"
              className="error-message"
              component="div"
            />

            <label htmlFor="direccion">Dirección</label>
            <Field name="direccion" type="text" className="inputServicios" />
            <ErrorMessage
              name="direccion"
              className="error-message"
              component="div"
            />

            <label htmlFor="descripcionInstalaciones">
              Descripción de Instalaciones
            </label>
            <Field
              name="descripcionInstalaciones"
              type="text"
              className="inputServicios"
            />
            <ErrorMessage
              name="descripcionInstalaciones"
              className="error-message"
              component="div"
            />

            {/* <label htmlFor="fotoInstalaciones1">Foto 1 de Instalaciones</label>
          <input
            className="fotoInstalaciones"
            name="fotoInstalaciones1"
            type="file"
            accept="image/*"
            onChange={(event) => {
              setFieldValue("fotoInstalaciones1", event.currentTarget.files[0]);
            }}
          /> */}

            <label htmlFor="certificado1">Certificado Patente Permiso</label>
            <input
              className="certificado"
              name="certificado1"
              type="file"
              onChange={(event) => {
                setFieldValue("certificado1", event.currentTarget.files[0]);
              }}
            />

            <label htmlFor="certificado2">Certificado Patente Permiso</label>
            <input
              className="certificado"
              name="certificado2"
              type="file"
              onChange={(event) => {
                setFieldValue("certificado2", event.currentTarget.files[0]);
              }}
            />

            <label htmlFor="encargado">Dirección</label>
            <Field name="encargado" type="text" className="inputServicios" />
            <ErrorMessage
              name="encargado"
              className="error-message"
              component="div"
            />

            <label htmlFor="estatus">Estatus</label>
            <Field name="estatus" type="text" className="inputServicios" />
            <ErrorMessage
              name="estatus"
              className="error-message"
              component="div"
            />
          </div>
        <button type="submit" className="btnRegistrar">
          REGISTRAR
        </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegistroNegocio;
