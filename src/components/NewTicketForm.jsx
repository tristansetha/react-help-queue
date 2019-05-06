import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    // snag the dispatch() method from props:
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    };
    //This will dispatch an 'ADD_TICKET' action, invoking this block of code in our reducer:
    dispatch(action);
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

// NewTicketForm = connect()(NewTicketForm);
// NewTicketForm = connect()(NewTicketForm); redefines the entire NewTicketForm component as the return value of connect().
//giving the component more functionality

// export default NewTicketForm;

//COMBINED VERSION:
export default connect()(NewTicketForm);

