import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';

function Ticket(props){
  // <div>
  //   <style jsx>{`
  //     div {
  //       background-color: yellow;
  //     }
  //   `}</style>
  // </div>
  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );0
  } 
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
