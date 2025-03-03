import React from "react";
import Sidenav from "../navbar/Side-Navbar";
import Navbar from "../navbar/Navbar";
import { Outlet } from 'react-router-dom';

const Dashboard = ({children}) => {
   const [open, setOpen] = React.useState(false);
  
    const handleDrawer = () => {
      setOpen((prevState) => !prevState);
    };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingTop: '70px' }}>
      <Navbar handleDrawer={handleDrawer}/>
      <div style={{ display: 'flex', width: '100%' }}>
        <Sidenav open={open}/>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {children}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;