import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CargarAvatar from "../Avatar/avatar";
import "./style.css";

const validationSchema = Yup.object().shape({
  foto: Yup.mixed().required("Campo obligatorio"),
  nombreEmpresa: Yup.string().required("Campo obligatorio"),
  noticiaOPromocion: Yup.string().required("Campo obligatorio"),
  detalle: Yup.string().required("Campo obligatorio"),
});

const RegistroPromocionNoticias = () => {
  return (
    <Formik
      initialValues={{
        foto: "",
        nombreEmpresa: "",
        noticiaOPromocion: "",
        detalle: "",
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
            <ErrorMessage
              name="foto"
              className="error-message"
              component="div"
            />
          </div>
          <div className="form">
            <label htmlFor="nombreEmpresa">Nombre de la empresa:</label>
            <Field
              type="text"
              name="nombreEmpresa"
              className="inputServicios"
            />
            <ErrorMessage
              name="nombreEmpresa"
              className="error-message"
              component="div"
            />

            <label htmlFor="noticiaOPromocion">
              Descripción de Noticia o promoción:
            </label>
            <Field name="noticiaOPromocion" as="select" className="inputServicios">
              <option value="">Seleccione una opción</option>
              <option value="promocion">Promoción o servicio</option>
              <option value="noticia">Noticia</option>
            </Field>
            <ErrorMessage
              name="noticiaOPromocion"
              className="error-message"
              component="div"
            />

            <label htmlFor="detalle">Detalle y alcance o restricciones:</label>
            <Field type="text" name="detalle" className="inputServicios" />
            <ErrorMessage
              name="detalle"
              className="error-message"
              component="div"
            />

            <button type="submit" className="button">
              Crear
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistroPromocionNoticias;
