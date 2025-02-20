// src/Note.js

import React from 'react';
import './AddNote.scss';

const Note = () => {
  return (
    <div className="note-container">
      <input type="text" placeholder="Title" className="title-input" />
      <textarea placeholder="Take a note..." className="note-input" />
      <div className="action-buttons">
        <button className="icon-button">🔔</button>
        <button className="icon-button">👤</button>
        <button className="icon-button">🍪</button>
        <button className="icon-button">🖼️</button>
        <button className="icon-button">📄</button>
        <button className="icon-button">←</button>
        <button className="icon-button">↩️</button>
      </div>
      <button className="close-button">Close</button>
    </div>
  );
};

export default Note;