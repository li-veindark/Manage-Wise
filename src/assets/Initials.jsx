import React from 'react';
import "../styles/Initials.css"; // Import your CSS file for styles

function Initials({ value, content }) {
  return (
    <div className="initials" style={{ width: `${value}%` }}>
      <p>{content}</p>
    </div>
  );
}

export default Initials;
