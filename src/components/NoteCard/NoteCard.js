import React from 'react';
import './Notecard.scss'; // Import the CSS file for styling

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h4>Aditya</h4>
        <p>Jaiswal</p>
      </div>
      <div className="icons">
        <i className="bell icon"></i>
        <i className="user icon"></i>
        <i className="paintbrush icon"></i>
        <i className="image icon"></i>
        <i className="download icon"></i>
        <i className="ellipsis vertical icon"></i>
      </div>
    </div>
  );
};

export default UserCard;