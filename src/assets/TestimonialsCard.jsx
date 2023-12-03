import React from 'react';
import "../styles/TestimonialsCards.css"

function TestimonialsCard({ message, imageURL, name, profile }) {
    return (
        <div className='testmonial-card'>
            <p>"{message}"</p>
            <div className='profile'>
                <img src={imageURL}></img>
                <div className='profile-info'>
                    <h3>{name}</h3>
                    <h4>{profile}</h4>
                </div>

            </div>
        </div>
    )
}

export default TestimonialsCard