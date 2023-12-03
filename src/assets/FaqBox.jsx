import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../styles/FaqBox.css"; // Import your CSS file for styles

function FaqBox({ title, content }) {
  const [isSwap, setIsSwap] = useState(true);

  const toggleDiv = () => {
    setIsSwap(!isSwap);
  };

  return (
    <div className='faqBox'>
      {isSwap ? (
        <div className='visible'>
          <h2 onClick={toggleDiv} >{title}</h2>
          <button onClick={toggleDiv}>
            <FontAwesomeIcon className="plus-icon" icon={faPlus} style={{ color: "#8247ff"}} />
          </button>
        </div>
      ) : (
        <div className='invisible'>
          <h2 onClick={toggleDiv} >{title}</h2>
          <button onClick={toggleDiv}>
            <FontAwesomeIcon className='mark-icon' icon={faTimes} style={{ color: "#8247ff" }} />
          </button>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default FaqBox;


// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
// import "../styles/FaqBox.css"; // Import your CSS file for styles

// function FaqBox({ title, content }) {
//   const [isSwap, setIsSwap] = useState(true);

//   const toggleDiv = () => {
//     setIsSwap(!isSwap);
//   };

//   return (
//     <div className='faqBox'>
//       <div className={isSwap ? 'visible' : 'invisible'} onClick={toggleDiv}>
//         <h2>{title}</h2>
//         <button>
//           <FontAwesomeIcon className={isSwap ? 'plus-icon' : 'mark-icon'} icon={isSwap ? faPlus : faTimes} style={{ color: "#8247ff"}} />
//         </button>
//         {!isSwap && <p>{content}</p>}
//       </div>
//     </div>
//   );
// }

// export default FaqBox;
