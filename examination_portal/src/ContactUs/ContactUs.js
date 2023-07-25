import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { lazy } from 'react';
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import { Heading } from "../component/header";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";
// import { CssBaseline } from '@mui/material';

// let heloo = lazy(()=>import('../component/textField.js'));
const paperStyle = {
  padding: "30px 20px",
  width: "500px",
  margin: "200px auto",
  height: "500px auto",
  borderRadius: "10px",
};
const container = { margin: "none", padding: "none" };
const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
  message: Yup.string().required("required"),
});

function ContactUs() {
  return (
    <>
      <Heading />
      <div style={container}>
        {/* <CssBaseline/> */}
        <Paper elevation={20} style={paperStyle}>
          <Grid container spacing={1.5}>
            <Grid
              item
              xs={6}
              md={6}
              sx={{
                backgroundImage:
                  "url(https://media.istockphoto.com/id/1365544413/video/contact-us-concept.jpg?s=640x640&k=20&c=a6o5RVk_pVTjL_YXzFQYSa76PahdhH7OLCLdv3iel_I=)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid item xs={6} md={6} align="center">
              <Typography variant="h4" align="center">
                CONTACT US
              </Typography>
              <Grid>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {({ values, handleChange, resetForm }) => (
                    <Form>
                      <Field
                        component={TextField}
                        id="outlined-basic"
                        name="name"
                        onChange={handleChange}
                        size="small"
                        label="Enter your name"
                        margin="normal"
                        fullwidth
                      />
                      <br />
                      <Field
                        component={TextField}
                        id="outlined-basic"
                        name="email"
                        onChange={handleChange}
                        size="small"
                        label="Enter your email"
                        margin="normal"
                        fullwidth
                      />
                      <br />
                      <Field
                        component={TextField}
                        id="outlined-basic"
                        name="message"
                        size="small"
                        onChange={handleChange}
                        label="Enter your Message"
                        margin="normal"
                        fullwidth
                      />
                      <br />
                      <Link href="/Thanks">
                        <Button
                          variant="contained"
                          onClick={() => {
                            resetForm();
                          }}
                          sx={{ margin: "20px", backgroundColor: "#cb93e6" }}
                        >
                          SEND
                        </Button>
                      </Link>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}

export default ContactUs;
