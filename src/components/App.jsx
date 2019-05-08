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
import c from './../constants';


class App extends React.Component {

  componentDidMount() {
    this.waitTimeUpdateTime = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    6000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  // use each key in masterTicketList (called ticketId, in the context above) to locate its corresponding ticket and timeOpen timestamp property, then calculate a newFormattedWaitTime using Moment's fromNow() method. (Make sure Moment is still imported at the top of App.jsx):

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props;
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId];
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true);
      const action = {
        type: c.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      };
      dispatch(action);
    });
  }

  // handleChangingSelectedTicket(ticket){
  //   this.setState({selectedTicket: ticketId});
  // }

  render() {
    // when we call render insted of component we are overriding the built-in render() method of this Route to return the JSX for our component and its prop
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl />} /> 
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname} />}/>
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

// map Redux state to React props
const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App));

