import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";
import './style.css'

const validationSchema = Yup.object().shape({
  foto: Yup.mixed().required("La foto es requerida"),
  nombre: Yup.string().required("El nombre del servicio es requerido"),
  descripcion: Yup.string().required("La descripción del servicio es requerida"),
  precio: Yup.number().required("El precio del servicio es requerido"),
  tiempoEstimado: Yup.number().integer().min(1, "El tiempo estimado debe ser mayor a 0").required("El tiempo estimado es requerido")
});

const FormRegistroServicio = () => {
  return (
    <Formik
      initialValues={{
        foto: "",
        nombre: "",
        descripcion: "",
        precio: "",
        tiempoEstimado: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="Avatar">
            <label htmlFor="foto">Foto:</label>
            <CargarAvatar
              onImageChange={(resizedFile) => {
                setFieldValue("foto", resizedFile);
              }}
            />
            <ErrorMessage name="foto" className="error-message" component="div" />
          </div>
          <div className="form">
            <label htmlFor="nombre">Nombre del servicio:</label>
            <Field type="text" name="nombre" className='inputServicios'  />
            <ErrorMessage name="nombre" className="error-message" component="div" />
          
            <label htmlFor="descripcion">Descripción del servicio:</label>
            <Field type="text" name="descripcion" className='inputServicios' />
            <ErrorMessage name="descripcion" class="error-message" component="div" />
          
          
            <label htmlFor="precio">Precio:</label>
            <Field type="number" name="precio" className='inputServicios' />
            <ErrorMessage name="precio" className="error-message" component="div" />

            <label htmlFor="tiempoEstimado">Tiempo Estimado (minutos):</label>
            <Field type="number" name="tiempoEstimado" className='inputServicios' />
            <ErrorMessage name="tiempoEstimado" className="error-message" component="div" />

            <button type="submit" className="button">Crear</button>
          </div>
          
        </Form>
      )}
    </Formik>
  );
};

export default FormRegistroServicio;
