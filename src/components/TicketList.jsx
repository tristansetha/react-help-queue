import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  console.log(props.ticketList);
  return(
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket =props.ticketList[ticketId]; 
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          ticketId={ticketId}
          onTicketSelection={props.onTicketSelection}/>;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

//We don't include isRequired because this prop is technically optional.

export default TicketList;

// In order to loop through masterTicketList's new structure, we call Object.keys(props.ticketList).map(). 
// This cycles through all first-level keys in the masterTicketList object; which are the unique IDs of each ticket entry.
// Within the loop the line var ticket = props.ticketList[ticketId]; isolates the ticket object corresponding to the current key. 
// We then pass this ticket's details to the Ticket component under the relevant props.


// {Object.keys(props.ticketList).map(function(ticketId) {
//   var ticket =props.ticketList[ticketId]; 
//   return <Ticket names={ticket.names}
//   location={ticket.location}
//   issue={ticket.issue}
//   formattedWaitTime={ticket.formattedWaitTime}
//   currentRouterPath={props.currentRouterPath}
//   key={ticket.id}
//   onTicketSelection={props.onTicketSelection}/>;