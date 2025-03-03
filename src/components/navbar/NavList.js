// fundoonotes/src/components/navbar/NavList.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {
  const navList = [
    { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/dashboard/addnote' },
    { id: 2, name: 'Archives', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Delete />, route: '/dashboard/trash'},
  ];

  return (
    <List sx={{}}>
      {navList.map((list) => (
        <ListItem button key={list.id} component={Link} to={list.route}>
          <ListItemIcon style={{ alignItems: 'center' }}>
            {list.icon}
          </ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;