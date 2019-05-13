import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
// import PropTypes from 'prop-types';
import constants from './../constants';
import { addTicket } from './../actions';
//addTicket() action is actually an async action because it takes a few moments to contact our cloud-based database using Firebase API methods.

const { c } = constants;

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    // snag the dispatch() method from props:
    const { dispatch } = props;
    //This will dispatch an 'ADD_TICKET' action, invoking this block of code in our reducer:
    dispatch(addTicket(_names.value, _location.value, _issue.value));
    _names.value= '';
    _location.value = '';
    _issue.value = '';
  }


  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

// NewTicketForm.propTypes = {
//   dispatch: PropTypes.func
// };

// NewTicketForm = connect()(NewTicketForm);
// NewTicketForm = connect()(NewTicketForm); redefines the entire NewTicketForm component as the return value of connect().
//giving the component more functionality

// export default NewTicketForm;

//COMBINED VERSION:
export default connect()(NewTicketForm);

