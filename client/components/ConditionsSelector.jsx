// import React, { useState } from 'react';

// const ConditionsSelector = () => {
//   const [ isListOpen, setIsListOpen ] = useState(false);
//   const [ selection, setSelection ] = useState([]);

//   const toggle = () => setIsListOpen(!isListOpen);

//   const clickHandler = (clicked) => {

//   };

//   return (
//     <div className="dd-wrapper">
//       <div
//         className="dd-header"
//         tabIndex={0}
//         role="button"
//         onKeyPress={()  => toggle()}
//         onClick={() => toggle()}
//       >
//       <div className="dd-header-title">
//           <p>Notify me when the waves become at least:</p>
//         </div>
//       </div>
//       {isListOpen && (
//         <ul>

//         </ul>
//       )}
//       <div className="dd-list">
//         <li>
//           <button type="button" onClick={() => clickHandler(clicked)}>
//             POOR to FAIR
//           </button>
//         </li>
//       </div>
//     </div>
//   )
// }

// // const [ conditions, setConditions ] = useState(
// const conditions = [
//   { id: 4, name: 'POOR to FAIR' },
//   { id: 5, name: 'FAIR' },
//   { id: 6, name: 'FAIR to GOOD' },
//   { id: 7, name: 'GOOD' },
//   { id: 8, name: 'VERY GOOD' },
//   { id: 9, name: 'GOOD to EPIC' },
//   { id: 10, name: 'EPIC' }
// ];

// export default ConditionsSelector;