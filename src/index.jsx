import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(ticketListReducer);

let unsubscribe = store.subscribe(() => 
console.log(store.getState)
);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
        <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */

// var heading = React.createElement('h1', {}, 'Help, Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
// var app = React.createElement('div', {}, heading);

// ReactDOM.render(
// app, //what to render
// document.getElementById('react-app-root') //where to render
// );



