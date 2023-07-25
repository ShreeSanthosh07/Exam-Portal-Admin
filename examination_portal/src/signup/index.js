import { React } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { lazy } from 'react';
import Paper from "@mui/material/Paper";
import { Heading } from "../component/header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

import Footer from "../component/footer";

// import { CssBaseline } from '@mui/material';

// let heloo = lazy(()=>import('../component/textField.js'));

const paperStyle = {
  padding: "30px 20px",
  width: "1000px",
  margin: "150px auto",
  height: "500px auto",
  borderRadius: "10px",
};
const container = { margin: "none", padding: "none" };

const initialValues = {
  firstName: "",
  lastName: "",
  organisationName: "",
  domain: "",
  department: "",
  position: "",
  purpose: "",
  emailid: "",
  phone: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("requires"),
  lastName: Yup.string().required("requires"),
  organisationName: Yup.string().required("requires"),
  domain: Yup.string().required("requires"),
  department: Yup.string().required("requires"),
  position: Yup.string().required("requires"),
  purpose: Yup.string().required("requires"),
  emailid: Yup.string().email("invalid email").required("requires"),
  phone: Yup.string()
    .min(10, "Enter a 10 digit mobile number")
    .max(10, "Mobile number must contain only 10 digits")
    .required("requires"),
});

const handleFormSubmit = (value) => {
  console.log(value);
};

function SignUp() {
  return (
    <div style={container}>
      <Heading />
      {/* <CssBaseline/> */}
      <Paper elevation={20} style={paperStyle}>
        <Grid container spacing={1.5}>
          <Grid
            item
            xs={6}
            md={6}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1568861368385-3534aca5cf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={6} md={6} align="center">
            <Typography variant="h4" align="center">
              SIGN UP
            </Typography>
            <Grid>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
              >
                {({ handleChange, values, handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="FirstName"
                      margin="normal"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="firstName" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="LastName"
                      margin="normal"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="lastName" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="Organisation Name"
                      margin="normal"
                      name="organisationName"
                      value={values.organisationName}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="organisationName" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="Domain"
                      margin="normal"
                      name="domain"
                      value={values.domain}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="domain" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="Department"
                      margin="normal"
                      name="department"
                      value={values.department}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="department" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="Position"
                      margin="normal"
                      name="position"
                      value={values.positon}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="position" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="text"
                      id="outlined-basic"
                      size="small"
                      label="Purpose"
                      margin="normal"
                      name="purpose"
                      value={values.purpose}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="purpose" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="email"
                      id="outlined-basic"
                      size="small"
                      label="EmailId"
                      margin="normal"
                      name="emailid"
                      value={values.emailid}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="emailid" />}
                      fullWidth
                    />
                    <br />
                    <Field
                      component={TextField}
                      type="number"
                      id="outlined-basic"
                      size="small"
                      label="Phone Number"
                      margin="normal"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      helperText={<ErrorMessage name="phone" />}
                      fullWidth
                    />
                    <br />

                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ margin: "20px", backgroundColor: "#cb93e6" }}
                    >
                      SUBMIT
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Footer />
    </div>
  );
}

export default SignUp;
