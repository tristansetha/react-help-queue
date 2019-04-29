import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import PropTypes from 'prop-types';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);

  }

  // handleClick() {
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }



  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewTicketForm onNewTicketCreation={this.props.onNewTicketCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketControl;