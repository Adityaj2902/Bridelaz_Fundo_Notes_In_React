import React, { useState, useEffect } from 'react';
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
  Dashboard,
} from '@mui/icons-material';
import NoteCard from '../notecard/NoteCard';
import { fetchNotesApiCall, saveNoteApiCall, moveToTrashApiCall } from '../../utils/Api';
import DashboardComponent from '../dashboard/Dashbord';

const Note = () => {
  const [expanded, setExpanded] = useState(false);
  const [noteData, setNoteData] = useState({ title: '', description: '' });
  const [notes, setNotes] = useState([]);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSaveNote = () => {
    if (noteData.title || noteData.description) {
      const token = localStorage.getItem('token');
      if (token) {
        saveNoteApiCall(token, noteData)
          .then(response => {
            setNotes([...notes, response.data.note]);
            setNoteData({ title: '', description: '' });
            setExpanded(false);
          })
          .catch(error => {
            console.error('Error saving note:', error);
          });
      }
    }
  };
  const handleDeleteNote = (id) => {
    const token = localStorage.getItem('token');
    if (token) {
      moveToTrashApiCall(token, id)
        .then(() => {
          setNotes(notes.filter(note => note._id !== id));
        })
        .catch(error => {
          console.error('Error updating note:', error);
        });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchNotesApiCall(token)
        .then(response => {
          const activeNotes = response.data.notes.filter(note => !note.isTrash);
          setNotes(activeNotes);
        })
        .catch(error => {
          console.error('Error fetching notes:', error);
        });
    }
  }, []);

  console.log('notes:', notes);

  return (
    <DashboardComponent>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px', // Add space between the components
          padding: '16px',
          backgroundColor: 'white',
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
            <NoteCard key={index} title={note.title} description={note.description} onDelete={() => handleDeleteNote(note._id)} />
          ))}
        </Box>
      </Box>
    </DashboardComponent>
  );
};

export default Note;