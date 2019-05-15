import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import TicketDetail from './TicketDetail';
import constants from './../constants';

const { c } = constants;


// import Moment from 'moment';

function Ticket(props){
  
  // <div>
  //   <style jsx>{`
  //     div {
  //       background-color: yellow;
  //     }
  //   `}</style>
  // </div>

  // This function will retrieve the dispatch() method connect() provides, construct a SELECT_TICKET action containing the ticket's ID, then dispatch that action, which will invoke the 'SELECT_TICKET' block of code in our selectedTicketReducer logic.
  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }


  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      //We'll call this method in Ticket's existing onClick event instead of the onTicketSelection prop:
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  } 
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
