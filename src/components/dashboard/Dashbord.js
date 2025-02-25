import Sidenav from "../navbar/Side-Navbar";
import Navbar from "../navbar/Navbar";
import Note from "../addnote/AddNote";
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingTop: '70px' }}>
      <Navbar />
      <div style={{ display: 'flex', width: '100%' }}>
        <Sidenav />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Note />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;