import React from "react";
import { Heading2 } from "../component/header";
import Sidenav from "../component/SideBar";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function Content() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Heading2 />
      <Box sx={{ marginTop: "65px" }}>
        <Sidenav />
      </Box>

      <Box sx={{ width: "84%", marginLeft: "243px", marginTop: "0" }}>
        <Grid container sx={{ height: "100%", width: "100%" }}>
          <Grid
            item
            xs={12}
            sx={{ bgcolor: "#cd48e0", padding: "50px", paddingLeft: "100px" }}
          >
            <Typography
              variant="h4"
              sx={{ paddingBottom: "25px", fontSize: "bold" }}
            >
              Welcome to our Courses
            </Typography>
            <Typography variant="p" sx={{ fontWeight: "bold" }}>
              Unlimited access to world-class courses, hands-on projects
              materials, and job-ready programming courses
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ padding: "20px" }}>
            <Typography variant="p">Academy</Typography>
            <Typography variant="p"> {`>`} Courses </Typography>
          </Grid>
          <Grid item xs={12} sx={{ padding: "20px" }}>
            <TextField
              label="Search for a course"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    Enter a keyword...
                  </InputAdornment>
                ),
              }}
            />
            <AddCircleOutlineOutlinedIcon
              sx={{ marginLeft: "20px", marginTop: "15px", cursor: "pointer" }}
              onClick={handleClickOpen}
            />
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add Course</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="status"
                  label="Status"
                  select
                  fullWidth
                  variant="standard"
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </TextField>
                <TextField
                  autoFocus
                  margin="dense"
                  id="empscore"
                  label="Employability Score"
                  select
                  fullWidth
                  variant="standard"
                >
                  <MenuItem value="YES">YES</MenuItem>
                  <MenuItem value="NO">NO</MenuItem>
                </TextField>
                <TextField
                  autoFocus
                  margin="dense"
                  id="language"
                  label="Language"
                  select
                  fullWidth
                  variant="standard"
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Tamil">Tamil</MenuItem>
                </TextField>
                <TextField
                  autoFocus
                  margin="dense"
                  id="institution"
                  label="Institution"
                  select
                  fullWidth
                  variant="standard"
                >
                  <MenuItem value="YES">YES</MenuItem>
                  <MenuItem value="NO">NO</MenuItem>
                </TextField>
                <TextField
                  autoFocus
                  margin="dense"
                  id="coursename"
                  label="Course Name"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Course Code"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Course Description"
                  type="text"
                  multiline
                  rows={4}
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#b02cf2", color: "white" }}
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Product Company Model Tests"
                titleTypographyProps={{ variant: "p" }}
                sx={{ textAlign: "center", bgcolor: "#e7a4f5" }}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://assets.entrepreneur.com/content/3x2/2000/20160210172912-branding-logos-companies-businesses-identity.jpeg?format=pjeg&auto=webp"
              />
              <CardContent sx={{ fontSize: "bold", textAlign: "center" }}>
                <Typography variant="p">Product Company Model Tests</Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingBottom: "10px",
                }}
              >
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Open
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Edit
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="C++ Technical Programming Course"
                titleTypographyProps={{ variant: "p" }}
                sx={{ textAlign: "center", bgcolor: "#e7a4f5" }}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://www.educative.io/v2api/editorpage/4872441600933888/image/5292920040062976"
              />
              <CardContent sx={{ fontSize: "bold", textAlign: "center" }}>
                <Typography variant="p">Product Company Model Tests</Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingBottom: "10px",
                }}
              >
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Open
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Edit
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Finance Course"
                titleTypographyProps={{ variant: "p" }}
                sx={{ textAlign: "center", bgcolor: "#e7a4f5" }}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg"
              />
              <CardContent sx={{ fontSize: "bold", textAlign: "center" }}>
                <Typography variant="p">Product Company Model Tests</Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingBottom: "10px",
                }}
              >
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Open
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Edit
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Assessment_Test_2023"
                titleTypographyProps={{ variant: "p" }}
                sx={{ textAlign: "center", bgcolor: "#e7a4f5" }}
              />

              <CardContent
                sx={{
                  fontSize: "bold",
                  textAlign: "center",
                  minHeight: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">Assessment Test</Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingBottom: "10px",
                }}
              >
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Open
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Edit
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="PSG_CAS_CDC_1st_Year_UG_Science"
                titleTypographyProps={{ variant: "p" }}
                sx={{ textAlign: "center", bgcolor: "#e7a4f5" }}
              />

              <CardContent
                sx={{
                  fontSize: "bold",
                  textAlign: "center",
                  minHeight: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">
                  PSG_CAS_CDC_1st_Year_UG_Science
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingBottom: "10px",
                }}
              >
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Open
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Edit
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={4} sx={{ padding: "20px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="junesaniy to Online Learning"
                titleTypographyProps={{ variant: "p" }}
                sx={{ textAlign: "center", bgcolor: "#e7a4f5" }}
              />

              <CardContent
                sx={{
                  fontSize: "bold",
                  textAlign: "center",
                  minHeight: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="p">
                  In this workshop we will explore what the experience of online
                  learning is
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                  paddingBottom: "10px",
                }}
              >
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Open
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#b02cf2" }}>
                  Edit
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Content;
