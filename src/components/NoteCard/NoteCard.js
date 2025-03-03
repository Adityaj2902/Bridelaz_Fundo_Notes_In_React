// fundoonotes/src/components/notecard/NoteCard.js
import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
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

const NoteCard = ({ title, description, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete();
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        width: '80%',
        border: '1px solid #e0e0e0',
        borderRadius: '15px',
        padding: '16px',
        backgroundColor: 'white',
        marginBottom: '10px',
      }}
    >
      <div className="user-info">
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </div>
      <div className="icons" style={{ marginTop: '22px' }}>
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
          <ArchiveIcon />
        </IconButton>
        <IconButton onClick={handleMenuOpen}>
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleDelete}>Delete Note</MenuItem>
        </Menu>
      </div>
    </Box>
  );
};

export default NoteCard;