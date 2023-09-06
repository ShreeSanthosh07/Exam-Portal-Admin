import React from "react";

import { Heading2 } from "../component/header";
import {
  Box,
  Grid,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import {
  MyResponsiveBar,
  MyResponsiveLine,
  MyResponsivePie,
} from "../component/Chart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Sidenav from "../component/SideBar";

function Dashboard() {
  return (
    <Box sx={{ p:'20px 0 20px 30px' }}>

     
        <Typography variant="h5">Hi, welcome back</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Paper
              elevation={15}
              sx={{
                bgcolor: "#f7e1f7",
                height: "200px",
                width: "300px",
                mt: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AssignmentIcon />
              <br />
              <CircularProgress variant="determinate" value={100} />
              <Typography variant="h4" align="center">
                350/500
              </Typography>
              <Typography variant="p">Exams Completed</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={15}
              sx={{
                bgcolor: "#f7e1f7",
                height: "200px",
                width: "300px",
                mt: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AssignmentIcon />
              <Typography variant="h4" align="center">
                500
              </Typography>
              <Typography variant="p">Exams Conducted</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              elevation={15}
              sx={{
                bgcolor: "#f7e1f7",
                height: "200px",
                width: "300px",
                mt: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AssignmentIcon />
              <Typography variant="h4" align="center">
                500
              </Typography>
              <Typography variant="p">Exams Conducted</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={4} sx={{ width: "100%" }}>
            <Grid item xs={12} sx={{ height: "500px" }}>
              <MyResponsiveBar />
            </Grid>
            <Grid item xs={6} sx={{ height: "500px" }}>
              <MyResponsivePie />
            </Grid>
            <Grid item xs={6} sx={{ height: "500px" }}>
              <MyResponsiveLine />
            </Grid>
          </Grid>
        </Box>
      </Box>
  
  );
}

export default Dashboard;
