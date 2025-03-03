import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Menu, Search} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';


const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  display: flex;
  justify-content: space-between;
`;

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
  flex-grow: 1;
`;

const ProfileContainer = styled('div')`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled('img')`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-left: 10px;
`;


const Navbar = ({ handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  const profilePicUrl = '../pics/vivek.jpg';

  return (
    <Header position="fixed">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>

          <IconButton
            onClick={handleDrawer}
            sx={{ marginRight: '20px', fontSize: '30px' }} 
            edge="start"
          >
            <Menu />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="logo" style={{ width: 27 }} />
              <Heading sx={{ fontSize: "22px" }}>Keep</Heading>
            </Box>
            <div style={{ display: 'flex', alignItems: 'center', borderRadius: '5px', backgroundColor: '#b6b8c1', padding: '1px 10px', maxWidth: '700px', width: "100%", marginLeft: "75px"}}> 
            <IconButton size='large' sx={{ fontSize: '30px' }}> 
                <Search />
              </IconButton>
              <input 
                placeholder="Search…"
              style={{background: "transparent", outline: "none", width: '100%'}}/>
            </div>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '30px' }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>

            <IconButton size='large' sx={{ fontSize: '30px' }}> 
               <RefreshOutlinedIcon/>
            </IconButton>
            <IconButton size='large' sx={{ fontSize: '30px' }}> 
            <ViewAgendaOutlinedIcon/>
            </IconButton>
            <IconButton size='large' sx={{ fontSize: '30px' }}> 
              <SettingsIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton size='large' sx={{ fontSize: '30px' }}> 
            <AppsIcon/>
            </IconButton>
            <ProfileContainer>
              <ProfileImage src={profilePicUrl} alt="Profile" />
            </ProfileContainer>
          </Box>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
