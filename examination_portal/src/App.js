import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import signUp from './signup/index.js';
import { lazy } from "react";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import News from "./News/News";
import SignIn from "./SignIn/SignIn";
import ThankYou from "./component/ThankYou";
import Dashboard from "./Dashboard/Dashboard.js";
import Content from "./Content/Content";
import StudentConfig from "./StudentConfiguration/studentConfig";
import PersistentDrawerLeft from "./DrawerMui/Drawer";
import Calendar from "./component/Calendar";
import Profile from "./Profile/Profile";
import Sidenav2 from "./DrawerMui/Drawer";


let SignUp = lazy(() => import("./signup/SignUp.js"));
let Landings = lazy(() => import("./Landing/landing.js"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landings />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/Thanks" element={<ThankYou />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/Home" element={<Dashboard />} />
          <Route exact path="/content" element={<Content />} />
          <Route exact path="/student" element={<StudentConfig/>} />
          <Route exact path="/calendar" element={<Calendar/>} />
          <Route exact path="/profile" element={<Sidenav2/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
