// import React from 'react';
// import { Box, Typography, IconButton } from '@mui/material';
// import {
//   Notifications,
//   Person,
//   Brush,
//   Image,
//   Download,
//   MoreVert,
// } from '@mui/icons-material';
// import './Notecard.scss'; // Import the CSS file for styling

// const UserCard = ({ title, description }) => {
//   return (
//     <Box
//       sx={{
//         width: 600,
//         border: '1px solid #e0e0e0',
//         borderRadius: '15px',
//         padding: '16px',
//         backgroundColor: 'white',
//         marginBottom: '1px',
//       }}
//     >
//       <div className="user-info">
//         <Typography variant="h6">{title}</Typography>
//         <Typography variant="body1">{description}</Typography>
//       </div>
//       <div className="icons">
//         <IconButton>
//           <Notifications />
//         </IconButton>
//         <IconButton>
//           <Person />
//         </IconButton>
//         <IconButton>
//           <Brush />
//         </IconButton>
//         <IconButton>
//           <Image />
//         </IconButton>
//         <IconButton>
//           <Download />
//         </IconButton>
//         <IconButton>
//           <MoreVert />
//         </IconButton>
//       </div>
//     </Box>
//   );
// };

// export default UserCard;


import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ArchiveIcon from '@mui/icons-material/Archive';
import {
  Notifications,
  Person,
  Brush,
  Image,
  Download,
  MoreVert,
} from '@mui/icons-material';
import './Notecard.scss'; // Import the CSS file for styling

const NoteCard = ({ title, description }) => {
  return (
    <Box
      sx={{
        width: '80%',
        border: '1px solid #e0e0e0',
        borderRadius: '15px',
        padding: '16px',
        backgroundColor: 'white',
        marginBottom: '16px',
      }}
    >
      <div className="user-info">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
      <div className="icons">
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Person />
        </IconButton>
        <IconButton>
          <Brush />
        </IconButton>
        <IconButton>
          <Image />
        </IconButton>
        <IconButton>
          <Download />
        </IconButton>
        <IconButton>
          <ArchiveIcon/>
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </Box>
  );
};

export default NoteCard;