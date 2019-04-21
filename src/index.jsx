import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
// var heading = React.createElement('h1', {}, 'Help, Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
// var app = React.createElement('div', {}, heading);

// ReactDOM.render(
// app, //what to render
// document.getElementById('react-app-root') //where to render
// );



