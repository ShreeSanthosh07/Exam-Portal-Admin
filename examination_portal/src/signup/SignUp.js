import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Paper, Grid, TextField, Button } from '@mui/material';
import { Heading } from '../component/header';
import Footer from '../component/footer';

const paperStyle = { padding: '30px 20px', width: '1000px', margin: '150px auto', height: '500px auto', borderRadius: '10px' };
const container = { margin: 'none', padding: 'none' };
const errorStyle = { color:'red', margin: '0', textAlign: 'left', border:'red', marginLeft: '10px' };

function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

      const onSubmit = (value) => {
        console.log(value);
      };      

  return (
    <div style={container}>
    <Heading />
    {/* <CssBaseline/> */}
    <Paper elevation={20} style={paperStyle}>
      <Grid container spacing={1.5} >
        <Grid item xs={6} md={6} sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1568861368385-3534aca5cf41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <Grid item xs={6} md={6} align='center'>
          <Typography variant='h4' align='center'>SIGN UP</Typography>
          <Grid >
           
             
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField {...register("firstName",{required: true})} type="text" id='outlined-basic' size='small' label='FirstName' margin='normal' name="firstName" fullWidth /><br />
                  {errors.firstName &&  <p style={errorStyle}>required</p>}
                  <TextField {...register("lastName",{required: true})} type="text" id='outlined-basic' size='small' label='LastName' margin='normal' name="lastName" fullWidth /><br />
                  {errors.lastName && <p style={errorStyle}>required</p>}
                  <TextField {...register("organisationName",{required: true})} type="text" id='outlined-basic' size='small' label='Organisation Name' margin='normal' name="organisationName" fullWidth /><br />
                  {errors.organisationName && <p style={errorStyle}>required</p>}
                  <TextField {...register("domain",{required: true})} type="text" id='outlined-basic' size='small' label='Domain' margin='normal' name="domain" fullWidth /><br />
                  {errors.domain && <p style={errorStyle}>required</p>}
                  <TextField {...register("department",{required: true})} type="text" id='outlined-basic' size='small' label='Department' margin='normal' name="department" fullWidth /><br />
                  {errors.department && <p style={errorStyle}>required</p>}
                  <TextField {...register("position",{required: true})} type="text" id='outlined-basic' size='small' label='Position' margin='normal' name="position" fullWidth /><br />
                  {errors.position && <p style={errorStyle}>required</p>}
                  <TextField {...register("purpose",{required: true})} type="text" id='outlined-basic' size='small' label='Purpose' margin='normal' name="purpose" fullWidth /><br />
                  {errors.purpose && <p style={errorStyle}>required</p>}
                  <TextField {...register("emailid", {required: true})} type="email" id='outlined-basic' size='small' label='EmailId' margin='normal' name="emailid" fullWidth /><br />
                  {errors.emailid && <p style={errorStyle}>required</p>}
                  <TextField {...register("phone",{required: 'required', minLength:{value:10, message: 'hello'}})} type="number" id='outlined-basic' size='small' label='Phone Number' margin='normal' name="phone" fullWidth /><br />
                  {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                  
                    <Button variant='contained' type='submit' sx={{ margin: '20px', backgroundColor: '#cb93e6' }}>SUBMIT</Button>
                

                </form>
             

          </Grid>
        </Grid>

      </Grid>
    </Paper>
    <Footer />
  </div>


  )
}

export default SignUp;
