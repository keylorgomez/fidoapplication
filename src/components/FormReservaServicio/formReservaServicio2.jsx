import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Typography } from "@mui/material";
import * as Yup from "yup";
import SearchBar from "../SearchBar/index.jsx";
import "./style.css";

const validationSchema = Yup.object().shape({
  nombreNegocio: Yup.string().required("Campo requerido"),
});

const FormReservaServicio = () => {
  return (
    <Formik
      initialValues={{
        nombreNegocio: "",
        registros: [{ mascota: "", servicio: "", comentario: "" }],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      }) => (
        <Form>
          <div className="ReservationTitle">
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
              Formulario Reserva
            </Typography>
          </div>

          <SearchBar />

          <div className="PrincipalContainerReserv1">
            <div className="form-section">
              <label htmlFor="nombreNegocio">Nombre del negocio:</label>
              <Field name="nombreNegocio" type="text" />
              {errors.nombreNegocio && touched.nombreNegocio && (
                <div className="error-message">{errors.nombreNegocio}</div>
              )}
            </div>
          </div>
          <div className="PrincipalContainerReserv2">
            <FieldArray name="registros">
              {({ push, remove }) => (
                <div className="form-section">
                  <table className="tblServices">
                    <thead>
                      <tr>
                        <th>Mascota</th>
                        <th>Servicios</th>
                        <th>Comentario</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.registros.map((registro, index) => (
                        <tr key={index}>
                          <td>
                            <Field
                              name={`registros.${index}.mascota`}
                              as="select"
                            >
                              <option value="">Seleccionar</option>
                              <option value="Nayla">Nayla</option>
                              <option value="Odie">Odie</option>
                              <option value="Ziggy">Ziggy</option>
                            </Field>
                          </td>
                          <td>
                            <div>
                              <label>
                                <Field
                                  type="checkbox"
                                  name={`registros.${index}.servicio`}
                                  value="hospedaje"
                                />
                                Hospedaje
                              </label>
                            </div>

                            <div>
                              <label>
                                <Field
                                  type="checkbox"
                                  name={`registros.${index}.servicio`}
                                  value="corte"
                                />
                                Corte
                              </label>
                            </div>

                            <div>
                              <label>
                                <Field
                                  type="checkbox"
                                  name={`registros.${index}.servicio`}
                                  value="baño"
                                />
                                Baño
                              </label>
                            </div>

                            <div>
                              <label>
                                <Field
                                  type="checkbox"
                                  name={`registros.${index}.servicio`}
                                  value="corte con baño"
                                />
                                Corte con baño
                              </label>
                            </div>
                          </td>
                          <td>
                            <Field
                              className="txtComentario"
                              as="textarea"
                              name={`registros.${index}.comentario`}
                            />
                          </td>
                          <td>
                            {index !== 0 && (
                              <button
                                className="btnDelete" color="danger"
                                type="button"
                                onClick={() => remove(index)}
                              >
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
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="btnAdd">
                    <button
                      type="button"
                      onClick={() =>
                        push({ mascota: "", servicio: "", comentario: "" })
                      }
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              )}
            </FieldArray>
          </div>

          <div className="botonesServ">
            <button type="reset" onClick={handleReset}>
              Borrar
            </button>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormReservaServicio;
