import React from "react";
import { Heading2 } from "../component/header";
import Sidenav from "../component/SideBar";
import { Grid, Typography, Box, TextField, Button, CssBaseline } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersistentDrawerLeft from "../DrawerMui/Drawer";

function StudentConfig() {
  return (
  
      
     
      <Box sx={{pb:'20px'}}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ bgcolor: "#cd48e0", padding: "50px", paddingLeft: "100px" }}
          >
            <Typography
              variant="h4"
              sx={{ paddingBottom: "20px", fontSize: "bold" }}
            >
              Welcome to our Courses
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ padding: "20px" }}>
            <Typography variant="h6">Clear Student Test Report</Typography>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", paddingLeft: "25px" }}
          >
            <Grid
              item
              xs={12}
              sm={2}
              lg={2}
              sx={{ paddingTop: "20px", paddingLeft: "20px" }}
            >
              <TextField label="Email" margin="dense" />
            </Grid>
            <Grid item xs={12} sm={3} lg={3} sx={{ paddingTop: "20px" }}>
              <TextField label="Course" margin="dense" fullWidth select />
            </Grid>
            <Grid item xs={12} sm={3} lg={3} sx={{ paddingTop: "20px" }}>
              <TextField label="Subject Type" margin="dense" fullWidth select />
            </Grid>
            <Grid item xs={12} sm={2} lg={2} sx={{ paddingTop: "20px" }}>
              <TextField label="Test" margin="dense" fullWidth select />
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              lg={2}
              sx={{
                paddingTop: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", bgcolor: "#b02cf2" }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Add New Student</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="First Name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Email" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Mobile Number" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="date"
                fullWidth
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">DOB</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField select label="Name of the Institution" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField label="Campus Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField label="Department Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField label="Degree Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField label="Year of Passing" type="number" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField label="Section" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField label="Roll No" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Courses" select fullWidth />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ borderRadius: "20px", bgcolor: "#b02cf2" }}
              >
                Add Student
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
   
  );
}

export default StudentConfig;
