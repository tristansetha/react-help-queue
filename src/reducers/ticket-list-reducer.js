
//ticket-list-reducer.js will contain an empty function that takes state and action as arguments, just like the reducers from our karaoke project:
export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TICKET':
    const { names, location, issue, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};