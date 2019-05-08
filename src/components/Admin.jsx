import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux'; //1

function Admin(props){
  let optionalSelectedTicketContent = null;
  //rootReducer creates a selectedTicket slice automatically, it will always exist. It will just be an empty object or a ticket ID. Instead of checking for null, we'll check if it's length is greater than zero:
  if (props.selectedTicket > 0){
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]} />;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList 
        ticketList={props.ticketList} 
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTicket: PropTypes.string
};

//We'll map Admin's existing ticketList prop to masterTicketList Redux state:
const mapStateToProps = state => { //2
  return {
    selectedTicket: state.selectedTicket,
    //independent component that can provide for itself. We'll map Admin's existing ticketList prop to masterTicketList Redux state.
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin); //3