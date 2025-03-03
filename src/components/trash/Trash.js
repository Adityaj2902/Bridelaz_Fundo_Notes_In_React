// fundoonotes/src/components/trash/Trash.js
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import NoteCard from '../notecard/NoteCard';
import { fetchNotesApiCall } from '../../utils/Api';
import Dashboard from '../dashboard/Dashbord';

const Trash = () => {
  const [trashNotes, setTrashNotes] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchNotesApiCall(token)
        .then(response => {
          const trashed = response.data.notes.filter(note => note.isTrash);
          setTrashNotes(trashed);
        })
        .catch(error => {
          console.error('Error fetching notes:', error);
        });
    }
  }, []);

  return (
    <Dashboard children={
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: 'white',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Trash
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            width: '100%',
            maxWidth: '1200px',
          }}
        >
          {trashNotes.length > 0 ? (
            trashNotes.map((note, index) => (
              <NoteCard key={index} title={note.title} description={note.description} />
            ))
          ) : (
            <Typography>No notes in trash</Typography>
          )}
        </Box>
      </Box>
    } />

  );
};

export default Trash;