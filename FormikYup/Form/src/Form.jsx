import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string()
    .min(11, "Email must be at least 11 characters")
    .required("Email is required"),

  age: Yup.number()
    .typeError("Age must be a number")
    .min(5, "Minimum age is 5")
    .max(99, "Maximum age is 99")
    .required("Age is required"),

  address: Yup.string()
    .max(100, "Address must be less than 100 characters")
    .required("Address is required"),
});

function MyForm() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Fill The Form</h2>

      <Formik
        initialValues={{
          email: "",
          age: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form submitted successfully");
        }}
      >
        {() => (
          <Form>
            {/* Email */}
            <div>
              <label>Email:</label><br />
              <Field name="email" type="text" />
              <div style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <br />

            {/* Age */}
            <div>
              <label>Age:</label><br />
              <Field name="age" type="number" />
              <div style={{ color: "red" }}>
                <ErrorMessage name="age" />
              </div>
            </div>

            <br />

            {/* Address */}
            <div>
              <label>Address:</label><br />
              <Field name="address" as="textarea" />
              <div style={{ color: "red" }}>
                <ErrorMessage name="address" />
              </div>
            </div>

            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MyForm;