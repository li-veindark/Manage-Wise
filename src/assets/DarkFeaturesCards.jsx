import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/DarkFlashcards.css";

function DarkFeaturesCards(props) {
  const { faicon, title, content } = props; // Destructuring props to access individual values

  return (
    <div className='darkCards'>
        <FontAwesomeIcon className='dark-icons' icon={faicon} style={{ color: "#ffffff" }} />
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default DarkFeaturesCards;
