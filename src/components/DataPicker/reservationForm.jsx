import React from "react";
import { Formik, Form, Field } from "formik";
import DateTimePicker from "react-datetime-picker";
import "./ReservationForm.css";

const ReservationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    date: new Date(),
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />

          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />

          <label htmlFor="date">Date and Time:</label>
          <div className="date-time-picker">
            <DateTimePicker
              name="date"
              value={values.date}
              onChange={(date) => setFieldValue("date", date)}
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
