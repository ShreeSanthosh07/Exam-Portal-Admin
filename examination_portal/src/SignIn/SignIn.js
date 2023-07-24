import React from 'react'
import { Heading } from '../component/header';
import { Paper, Typography, Grid, Button, Link } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { TextField } from 'formik-mui';
import Footer from '../component/footer';

const initialValues = {
  email: '',
  password: '',
}

const validationSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().min(8,'Too Short').required("required"),
});

const handleFormSubmit = (e, value) => {
  e.preventDefault();
  console.log(value);
}


function SignIn() {
  return (
    <div>
      <Heading />
        <Paper elevation={20} sx={{padding:'30px 30px', width:'400px', height:'100%', margin:'20px auto', marginTop:'100px'}}>
            <Grid xs={12} align='center'>
                <Typography variant='h4' align='center'>Sign In</Typography>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
                  {({ values, handleSubmit, handleChange })=>(
                    <Form onSubmit={handleSubmit}>
                      <Field component={TextField} type='email' onChange={handleChange} value={values.email} name='email' label='Enter your Email Id' id='outlined-basic' margin='normal' fullWidth required helperText={<ErrorMessage name="email" />}/><br/>
                      <Field component={TextField} type='password' onChange={handleChange} value={values.password} name='password' label='Enter your Password' id='outlined-basic' margin='normal' required fullWidth helperText={<ErrorMessage name="password" />} /><br />
                      <Button variant='contained' sx={{margin:'20px', backgroundColor:'#cb93e6'}} type='submit'>Login</Button><br/>
                    </Form>
                  )}
                </Formik>
                
                <Typography variant='p'>Don't have an account? </Typography>
                <Link href='/signup'>
                <Typography variant='p'>Sign Up</Typography>
                </Link>
                
            </Grid>
        </Paper>
        <Footer />
    </div>
  )
}

export default SignIn;
