// import React from 'react';
// import { Box, Paper, Typography, Link, Grid } from '@mui/material';
// import { Heading2 } from '../component/header';
// import Sidenav from '../component/SideBar';

// const style = {borderRadius: '50%', padding: '10px 20px'};

// function Profile() {
//   return (
//     <div>
//         <div>
//             <Heading2 />
//             <Sidenav />
//         </div>
//         <Box sx={{margin:'100px'}}>
//       <Paper elevation={16} sx={{margin: '20px 10px'}}>
//         <Grid container >
//             <Grid item xs={6}>
//             <img src='https://media.licdn.com/dms/image/C4D03AQEoib-YA8eDTg/profile-displayphoto-shrink_400_400/0/1628687347918?e=1698278400&v=beta&t=-MYLgDGDhWZMU58DIoOXq-f_AEypvt2FDSod1MS0w5U' alt='User' width='200' height='200' style={style} />
//             </Grid>
//             <Grid item xs={6} sx={{paddingTop:'40px'}}>
//             <Typography variant='h3'>John Doe</Typography>
//             <Link href='ryan@rockettheme.com'>ryan@rockettheme.com</Link>
//             { '- Administrator' }
//             </Grid>
//         </Grid>
//       </Paper>
//       </Box>
//     </div>
//   )
// }

// export default Profile;

import React, { useState } from "react";
import PermanentDrawerLeft from "../DrawerMui/Drawer";
import Dropzone from "react-dropzone";
import {
  Box,
  Paper,
  Typography,
  Link,
  Grid,
  Toolbar,
  TextField,
  Divider,
} from "@mui/material";
import Rating from "@mui/material/Rating";

const style = { borderRadius: "50%", padding: "10px 20px" };

function Profile() {

  const [value, setValue] = useState(null);

  return (
    <Box sx={{ p: '20px 30px 20px 30px' }}>
      {/* <Box>
        <PermanentDrawerLeft />
      </Box> */}
      
        <Paper elevation={16} >
          {/* <Grid container>
            <Grid item xs={4}> */}
          <Box sx={{ display: "flex" }}>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQEoib-YA8eDTg/profile-displayphoto-shrink_400_400/0/1628687347918?e=1698278400&v=beta&t=-MYLgDGDhWZMU58DIoOXq-f_AEypvt2FDSod1MS0w5U"
              alt="User"
              width="300"
              height="250"
              style={style}
            />
            {/* </Grid>
            </Grid> */}
            <Box
              sx={{
                marginLeft: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography variant="h3">John Doe</Typography>
              <Link href="https://www.google.com/gmail/about/">
                johndoe@gmail.com
              </Link>
              {"- Administrator"}
              <Box display='flex'>
              <Typography variant="p">Rating - </Typography>
              <Rating
                // sx={{ position: 'absolute' }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              </Box>

              <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <Box
                      {...getRootProps()}
                      p="1rem"
                      sx={{
                        "&:hover": { cursor: "pointer" },
                        border: "2px dashed #333",
                        padding: "3px 7px",
                      }}
                    >
                      <input {...getInputProps()} />

                      <p>Add Picture Here</p>
                    </Box>
                  </section>
                )}
              </Dropzone>
            </Box>
          </Box>
          <Divider />

          <Typography variant="h5" sx={{ padding: "30px 0 20px 20px" }}>
            Account
          </Typography>
          <Grid container sx={{ padding: "20px" }} spacing={3}>
            <Grid item xs={6}>
              <TextField type="text" fullWidth label="FirstName" />
            </Grid>
            <Grid item xs={6}>
              <TextField type="text" fullWidth label="LastName" />
            </Grid>
            <Grid item xs={6}>
              <TextField type="text" fullWidth label="Email Id" />
            </Grid>
            <Grid item xs={6}>
              <TextField type="password" fullWidth label="Password" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                fullWidth
                label="Title"
                value="Adminstrator"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField type="text" fullWidth label="Language" />
            </Grid>
          </Grid>
        </Paper>
     
    </Box>
  );
}

export default Profile;

{
  /* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Paper elevation={16} sx={{margin: '20px 10px'}}>
        <Grid container >
            <Grid item xs={6}>
            <img src='https://media.licdn.com/dms/image/C4D03AQEoib-YA8eDTg/profile-displayphoto-shrink_400_400/0/1628687347918?e=1698278400&v=beta&t=-MYLgDGDhWZMU58DIoOXq-f_AEypvt2FDSod1MS0w5U' alt='User' width='200' height='200' style={style} />
            </Grid>
            <Grid item xs={6} sx={{paddingTop:'40px'}}>
            <Typography variant='h3'>John Doe</Typography>
            <Link href='ryan@rockettheme.com'>ryan@rockettheme.com</Link>
            { '- Administrator' }
            </Grid>
        </Grid>
      </Paper>
      </Box> */
}
