import { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Paper, Typography, Link, Grid, List, Badge, Menu, MenuItem } from '@mui/material';
import Image from 'mui-image';
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EmailIcon from "@mui/icons-material/Email";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import Content from '../Content/Content';
import StudentConfig from '../StudentConfiguration/studentConfig';
import Calendar from '../component/Calendar';

const drawerWidth = 240;


export default function Sidenav2() {

    const [menudata, setMenudata] = useState("");
    const [opened, setOpened] = useState(null);
    const open = Boolean(opened);
    const handleClick = (event) => {
      setOpened(event.currentTarget);
    };
    const handleClose = () => {
      setOpened(null);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ ml: `${drawerWidth}px` }}
      >
      <Toolbar sx={{bgcolor: 'white'}}>
      <Link href="/">
        <Image
          src="download.png"
          height="auto"
          width="200px"
          sx={{ marginLeft: "25px" }}
        />
      </Link>
      <Box
        sx={{
          marginLeft: "auto",
          display: "flex",
          gap: "30px",
          marginRight: "70px",
        }}
      >
        <Badge badgeContent={3} color="error">
          <NotificationsActiveIcon
            sx={{ color: "black", fontSize: "30px", cursor: "pointer" }}
          />
        </Badge>
        <Badge badgeContent={10} color="error">
          <EmailIcon
            sx={{ color: "black", fontSize: "30px", cursor: "pointer" }}
          />
        </Badge>
        <AccountBoxIcon
          onClick={handleClick}
          sx={{ color: "black", fontSize: "30px", cursor: "pointer" }}
        />
        <Menu
          opened={opened}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
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
      <Drawer
        sx={{
            
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop:'63px',
            bgcolor:'#d6adeb',
            color:'rgb(3, 0, 5)',
            zIndex: 0
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <Divider />
        <List>
          
            <ListItem disablePadding onClick={()=> setMenudata('Dashboard')} >
              <ListItemButton>
                <ListItemIcon>
                <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('ContentManagement')} >
              <ListItemButton>
                <ListItemIcon>
                <SchoolOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Contentent Management' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('StudentConfiguration')} >
              <ListItemButton>
                <ListItemIcon>
                <PersonOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Student Configuration' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('Team')} >
              <ListItemButton>
                <ListItemIcon>
                <PeopleOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Team' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('Contacts')} >
              <ListItemButton>
                <ListItemIcon>
                <ContactsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Contacts' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('Profile')} >
              <ListItemButton>
                <ListItemIcon>
                <ReceiptOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('FAQ')} >
              <ListItemButton>
                <ListItemIcon>
                <HelpOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='FAQ' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('Calendar')} >
              <ListItemButton>
                <ListItemIcon>
                <CalendarTodayOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Calendar' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('Reports')} >
              <ListItemButton>
                <ListItemIcon>
                <AssessmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Reports' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding onClick={()=> setMenudata('Log Out')} >
              <ListItemButton>
                <ListItemIcon>
                <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='LogOut' />
              </ListItemButton>
            </ListItem>
        
        </List>
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
      >
        <Toolbar />

        {menudata === "Dashboard" && <Dashboard/>}
        {menudata === "ContentManagement" && <Content/>}
        {menudata === "StudentConfiguration" && <StudentConfig/>}
        {menudata === "Team" && <Profile/>}
        {menudata === "Contacts" && <Profile/>}
        {menudata === "Profile" && <Profile/>}
        {menudata === "FAQ" && <Profile/>}
        {menudata === "Calendar" && <Calendar/>}
        {menudata === "Reports" && <Profile/>}
        {menudata === "LogOut" && <Profile/>}

      </Box>
    </Box>
  );
}