import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}


// function displayTimeOpen(timeOpen) {
//   return timeOpen.from(new Moment(), true);
// }

// now handles in app.js

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;

// function Ticket(props){
//   var ticketStyles = {
//     backgroundColor: '#ecf0f1',
//     fontFamily: 'sans-serif',
//     paddingTop: '50px'
//   };
//   return (
//     <div style={ticketStyles}>
//       <h3>{props.location} - {props.names}</h3>
//       <p><em>{props.issue}</em></p>
//       <hr/>
//     </div>
//   );
// }