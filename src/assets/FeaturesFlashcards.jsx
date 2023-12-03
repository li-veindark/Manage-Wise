import React from 'react';
import "../styles/FlashCard.css";

function FeaturesFlashcards({ title, content, imageUrl}) {
  return (
    <div className='flashcard'>
        {imageUrl && <img src={imageUrl} alt="Card" />}
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default FeaturesFlashcards;
