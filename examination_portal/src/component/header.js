import React from "react";
import { Box, AppBar, Toolbar, Tabs, Tab, Button, Link, CssBaseline, Badge, Menu, MenuItem } from "@mui/material";
import Image from 'mui-image';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';



export function Heading() {
    return(
        <>
        <AppBar sx={{background:'#fcfffd'}}>
            <Toolbar>
                <Link href="/">
                <Image src="download.png" width='200px' height='auto'/>
                </Link>
                <Tabs sx={{marginLeft:'auto'}}>
                    <Link href='/Home' underline="hover" color="inherit">
                         <Tab label='Home' value='0' sx={{color:'#230233', fontWeight:'800'}}/>
                    </Link>
                    <Link href='/AboutUs' underline="hover" color='inherit'><Tab label='About Us' sx={{color:'#230233', fontWeight:'800'}} /></Link>
                    <Link href='/News' underline="hover" color='inherit'><Tab label='News' sx={{color:'#230233', fontWeight:'800'}} /></Link>
                    <Link href='/ContactUs' underline="hover" color='inherit'><Tab label='Contact Us' sx={{color:'#230233', fontWeight:'800'}} /></Link>
                    
                    
                    
                    
                </Tabs>
                <Link href='/signup' underline="hover" color='inherit'>
                    <Button variant="contained" sx={{backgroundColor:'#cb93e6', marginRight:'5px'}}>Sign Up</Button>
                </Link>
                <Link href='/signIn' underline="hover" color='inherit'>
                    <Button variant="contained" sx={{backgroundColor:"#cb93e6"}}>Sign In</Button>
                </Link>
                     
                
            </Toolbar>
            
        </AppBar>
    </>
    )
    
}
    

export function Heading2() {

    const [opened, setOpened] = React.useState(null);
    const open = Boolean(opened);
    const handleClick = (event) => {
      setOpened(event.currentTarget);
    };
    const handleClose = () => {
      setOpened(null);
    };

    return(
        <div>
            <CssBaseline/>
            <AppBar sx={{bgcolor:'white'}}>
                <Toolbar>
                <Link href="/">
                    <Image src="download.png" height='auto' width='200px' sx={{marginLeft:'25px'}} />
                    </Link>
                    <Box sx={{marginLeft:'auto', display:'flex', gap:'30px', marginRight:'70px'}}>
                    <Badge badgeContent={3} color="error">
                    <NotificationsActiveIcon sx={{color:'black', fontSize:'30px', cursor:'pointer'}}/>
                    </Badge>
                    <Badge badgeContent={10} color="error">
                    <EmailIcon sx={{color:'black', fontSize:'30px', cursor:'pointer'}} />
                    </Badge>
                    <AccountBoxIcon onClick={handleClick} sx={{color:'black', fontSize:'30px', cursor:'pointer'}}/>
                    <Menu
        
                        
                        opened={opened}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                    >   
                        <Link href="/AboutUs">
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Link>
                        
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}