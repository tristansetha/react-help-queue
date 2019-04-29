import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
// import NewTicketForm from './NewTicketForm';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />  
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

// var masterTicketList = [
//   {
//     names: 'Thato and Haley',
//     location: '3A',
//     issue: 'Firebase won\'t save record. Halp.'
//   },
//   {
//     names: 'Sleater and Kinney',
//     location: '4B',
//     issue: 'Fox image not displaying on page, can only see duck?'
//   },
//   {
//     names: 'Imani & Jacob',
//     location: '9F',
//     issue: 'Donkey picture not displaying on hover in Zoology app. :('
//   }
// ];