import c from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};

// Here we just return the ticketId included with the action, thereby resetting the reducer's state slice to this ID. And our test should now pass!

