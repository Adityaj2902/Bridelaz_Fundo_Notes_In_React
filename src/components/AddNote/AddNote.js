// import React, { useState } from 'react';
// import './AddNote.scss';
// import { storeNoteApiCall } from '../../utils/Api'; // Import the storeNoteApiCall function

// const Note = () => {
//   const [noteData, setNoteData] = useState({ title: '', description: '' });
//    // Replace with the actual token

//   const handleStoreNote = () => {
//     storeNoteApiCall(noteData)
//       .then(response => {
//         console.log('Note stored:', response);
//         // Handle the response as needed
//       })
//       .catch(error => {
//         console.error('Error storing note:', error);
//         // Handle the error as needed
//       });
//   };

//   return (
//     <div className="AddNote-note-container">
//       <input
//         type="text"
//         placeholder="Title"
//         className="AddNote-title-input"
//         value={noteData.title}
//         onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
//       />
//       <textarea
//         placeholder="Take a note..."
//         className="AddNote-note-input"
//         value={noteData.description}
//         onChange={(e) => setNoteData({ ...noteData, description: e.target.value })}
//       />
//       <div className="AddNote-action-buttons">
//         <button className="AddNote-icon-button">🔔</button>
//         <button className="AddNote-icon-button">👤</button>
//         <button className="AddNote-icon-button">🍪</button>
//         <button className="AddNote-icon-button">🖼️</button>
//         <button className="AddNote-icon-button">📄</button>
//         <button className="AddNote-icon-button">←</button>
//         <button className="AddNote-icon-button">↩️</button>
//       </div>
//       <button className="AddNote-close-button" onClick={handleStoreNote}>Close</button>
//     </div>
//   );
// };

// export default Note;

import React, { useState, useEffect  } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Collapse,
  Grid,
} from '@mui/material';
import {
  Notifications,
  PersonAdd,
  AddComment,
  Image,
  MoreVert,
  Undo,
  Redo,
  Close,
} from '@mui/icons-material';
import NoteCard from '../notecard/NoteCard';
import { fetchNotesApiCall } from '../../utils/Api';


const Note = () => {
  const [expanded, setExpanded] = useState(false);
  const [noteData, setNoteData] = useState({ title: '', description: '' });
  const [notes, setNotes] = useState([]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSaveNote = () => {
    if (noteData.title || noteData.description) {
      setNotes([...notes, noteData]);
      setNoteData({ title: '', description: '' });
      setExpanded(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchNotesApiCall(token)
        .then(response => {
          setNotes(response.data.notes);
        })
        .catch(error => {
          console.error('Error fetching notes:', error);
        });
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px', // Add space between the components
        padding: '16px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Box
        sx={{
          width: 600,
          border: '1px solid #e0e0e0',
          borderRadius: '15px',
          padding: '3px',
          backgroundColor: 'white',
        }}
      >
        <TextField
          label="Take A Note ....."
          variant="standard"
          fullWidth
          onClick={handleToggle}
          sx={{ marginBottom: '8px' }}
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
        <Collapse in={expanded}>
          <TextField
            multiline
            rows={4}
            placeholder="Description ...."
            variant="standard"
            fullWidth
            sx={{ marginBottom: '8px' }}
            value={noteData.description}
            onChange={(e) => setNoteData({ ...noteData, description: e.target.value })}
          />
          <Grid container justifyContent="space-around">
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <PersonAdd />
            </IconButton>
            <IconButton>
              <AddComment />
            </IconButton>
            <IconButton>
              <Image />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
            <IconButton>
              <Undo />
            </IconButton>
            <IconButton>
              <Redo />
            </IconButton>
            <IconButton onClick={handleSaveNote}>
              <Close />
            </IconButton>
          </Grid>
        </Collapse>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {notes.map((note, index) => (
          <NoteCard key={index} title={note.title} description={note.description} />
        ))}
      </Box>
    </Box>
  );
};

export default Note;