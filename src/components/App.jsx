import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
// import NewTicketForm from './NewTicketForm';
import NewTicketControl from './NewTicketControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';
import Moment from 'moment';
import Admin from './Admin';
import Footer from './Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTicket: null
    };
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTime = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }
  
  updateTicketElapsedWaitTime() {
    // console.log('check');
    // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }


  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticketId});
  }

  render() {
    console.log(this.state.masterTicketList);
    // when we call render insted of component we are overriding the built-in render() method of this Route to return the JSX for our component and its prop
    return (
      <div>
        <style global jsx>{`
          font-family: helvetica;
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl />} /> 
          <Route path='/admin' render={(props)=><Admin ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket} 
            selectedTicket={this.state.selectedTicket}/>}/>
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

export default withRouter(connect(mapStateToProps)(App));


// componentWillMount() {
//   console.log('componentWillMount');
// }

// componentWillReceiveProps() {
//   console.log('componentWillReceiveProps');
// }

// shouldComponentUpdate() {
//   console.log('shouldComponentUpdate');
//   return true;
// }

// componentWillUpdate() {
//   console.log('componentWillUpdate');
// }

// componentDidUpdate() {
//   console.log('componentDidUpdate');
// }

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