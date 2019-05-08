import selectedTicketReducer from './selected-ticket-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

//we'll create a rootReducer by passing both child reducers into combineReducers(), then export the result:

const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;