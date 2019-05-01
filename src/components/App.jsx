import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
// import NewTicketForm from './NewTicketForm';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Moment from 'moment';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTime = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
      60000
    );
  }

  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  
  updateTicketElapsedWaitTime() {
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) => 
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterTicketList: newMasterTicketList})
  }


  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
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

// componentDidMount() {
//   this.waitTimeUpdateTime = setInterval(() =>
//     this.updateTicketElapsedWaitTime(),
//     5000
//   );
// }

// Here we've instructed React to create a setInterval() timer named waitTimeUpdateTimer when our App component first mounts. 
// This is what will run code to update elapsed wait times for each ticket in regular intervals. 
// Specifically, it will run a method called updateTicketElapsedWaitTime() every five seconds.

// updateTicketElapsedWaitTime() {
//   console.log("check");
//   let newMasterTicketList = this.state.masterTicketList.slice();
//   newMasterTicketList.forEach((ticket) => 
//     ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
//   );
//   this.setState({masterTicketList: newMasterTicketList})
// }

// We add a formattedWaitTime value to each ticket in this copy. We set it equivalent to the Moment.js-formatted elapsed wait time. (ie: "A minute ago" or "five minutes ago")
// A common way of displaying time is handled by moment#fromNow. This is sometimes called timeago or relative time.

// componentWillUnmount(){
//   clearInterval(this.waitTimeUpdateTimer);
// }

// We need to also include componentWillUnmount() to "clean up" after the timers created in componentWillMount(). 
// This prevents "old" timers from running in the background and slowing our app. We can halt our waitTimeUpdateTimer timer like this