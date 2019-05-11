import c from './../constants';

//ticket-list-reducer.js will contain an empty function that takes state and action as arguments, just like the reducers from our karaoke project:
export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type) {
  case 'ADD_TICKET':
    newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;
  // Because this reducer is responsible for our list of tickets it must return the whole list; even though we're only updating one property on one ticket.
  case c.UPDATE_TIME:
  //onstruct a copy of the ticket we're updating that also includes an up-to-date formattedWaitTime:
    const newTicket = Object.assign({}, state[id], {formattedWaitTime});
    // use Object.assign() again to reconstruct the entire state object to include the newTicket entry we just compiled:
    newState = Object.assign({}, state, {
      [id]: newTicket
    });
    return newState;
  default:
    return state;
  }
};