import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';
import Moment from 'Moment';

firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

//We declare a tickets constants that references a node in our database called tickets. But we don't manually create this node in the database. Firebase will automatically create a database node if it receives a request to add data to one that doesn't already exist.

export function addTicket(_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    issue: _issue,
    timeOpen: new Date().getTime()
  });
}

function receiveTicket(ticketFromFirebase) {
  return {
    type: c.RECIEVE_TICKET,
    ticket: ticketFromFirebase
  };
}


export function watchFirebaseTicketsRef() {
  return function(dispatch) {

    tickets.on('child_added', data => {
      const newTicket = Object.assign(
        {},
        data.val(),
        {
          id : data.getKey(),
          formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
        }
      );
      dispatch(receiveTicket(newTicket))
    });
  }
}

// addTicket
// Here we're push()-ing a ticket object literal to the tickets ref. As explained in the Saving Data article of Firebase Documentation, calling push() on a reference is the recommended way to add new data to a node.

// Manually saving a UUID id property has become obsolete too. Firebase automatically creates unique IDs for each entry. So it's redundant to assign a secondary UUID ID. We'll later refactor our app to use only Firebase-assigned IDs throughout.

// Listening to firebase data: watchFirebaseTicketsRef()
// We pass dispatch() from the first function into the function it returns so we can later dispatch an action to create a Redux ticket entry.
// We call tickets.on().
// tickets is the Firebase node we're listening for changes in.
// on() is from the Firebase API, as described in its documentation it listens for the specified event type and executes a callback when that event occurs.
// The 'child_added' argument is a read event. It depicts the event type we're listening for. In this case, we're listening for any children (that is,new tickets) added to the tickets node. (Check out the Read Event Documentation for read event options.)
// When the event occurs, the callback in on() runs. We're just logging the Firebase data returned by the event here for now.
// cont....
// Create a copy of data.val() (the new ticket entry returned by the Firebase listener) in the callback with Object.assign().
// Add an id property, defined as data.getKey(). getKey() is a Firebase API method that returns a record's Firebase-assigned ID.
// Retrieve timeOpen from the listener's response and use Moment to calculate a new formattedWaitTime property for the object.
// Log the newTicket in the console.
