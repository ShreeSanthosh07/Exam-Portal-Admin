import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "@mui/material";
import { useState } from "react";


function Sidenav() {

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };  
  
  
  return (
    <div style={({ height: "100vh" }, { display: "flex" }, { position:'fixed' })}>
      <Sidebar collapsed={collapsed} handleCollapsedChange={handleCollapsedChange} style={{ height: "100vh", background:'#f700ff', marginTop:'65px' }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={handleCollapsedChange}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link href="/home" underline="always" />} style={({fontWeight:'bold'})} >Dashboard</MenuItem>
          <SubMenu label='Question Paper' style={({fontWeight:'bold'})} icon={<FeedOutlinedIcon/>}>
            <MenuItem>Previous Year</MenuItem>
          </SubMenu>
          <MenuItem icon={<PeopleOutlinedIcon />} style={({fontWeight:'bold'})}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />} style={({fontWeight:'bold'})}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />} style={({fontWeight:'bold'})}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />} style={({fontWeight:'bold'})}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />} style={({fontWeight:'bold'})}>Calendar</MenuItem>
          <MenuItem icon={<AssessmentOutlinedIcon />} style={({fontWeight:'bold'})}>Reports</MenuItem>
          <MenuItem icon={<LogoutOutlinedIcon/>} style={({fontWeight:'bold'})}>Log Out</MenuItem>
        </Menu>
      </Sidebar>       
    </div>
  );
}

export default Sidenav;