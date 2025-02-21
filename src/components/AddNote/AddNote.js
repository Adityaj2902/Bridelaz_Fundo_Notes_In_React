import React, { useState } from 'react';
import './AddNote.scss';
import { storeNoteApiCall } from '../../utils/Api'; // Import the storeNoteApiCall function

const Note = () => {
  const [noteData, setNoteData] = useState({ title: '', description: '' });
   // Replace with the actual token

  const handleStoreNote = () => {
    storeNoteApiCall(noteData)
      .then(response => {
        console.log('Note stored:', response);
        // Handle the response as needed
      })
      .catch(error => {
        console.error('Error storing note:', error);
        // Handle the error as needed
      });
  };

  return (
    <div className="AddNote-note-container">
      <input
        type="text"
        placeholder="Title"
        className="AddNote-title-input"
        value={noteData.title}
        onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
      />
      <textarea
        placeholder="Take a note..."
        className="AddNote-note-input"
        value={noteData.description}
        onChange={(e) => setNoteData({ ...noteData, description: e.target.value })}
      />
      <div className="AddNote-action-buttons">
        <button className="AddNote-icon-button">🔔</button>
        <button className="AddNote-icon-button">👤</button>
        <button className="AddNote-icon-button">🍪</button>
        <button className="AddNote-icon-button">🖼️</button>
        <button className="AddNote-icon-button">📄</button>
        <button className="AddNote-icon-button">←</button>
        <button className="AddNote-icon-button">↩️</button>
      </div>
      <button className="AddNote-close-button" onClick={handleStoreNote}>Close</button>
    </div>
  );
};

export default Note;