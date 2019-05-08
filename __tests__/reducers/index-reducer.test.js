import rootReducer from './../../src/reducers/index';
import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTicketList: {},
      selectedTicket: {}
    });
  });

  test('Shpuld contain ticketListReducer logic', () => {
    expect(store.getState().masterTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test('Should contain selectedTicketReducer logic', () => {
    expect(store.getState().selectedTicket).toEqual(selectedTicketReducer(undefined, { type: null }));
  });
});

// This reducers/index.js file is something called a module index.

// When a file is responsible for retrieving misc. pieces of logic from the other files in its directory, and importing it all in one big module, it's a module index.

// In this instance, index.js imports all other reducer code in src/reducers, and mashes it together in a big rootReducer for use in the rest of the application. So, it's a module index! And it's standard naming convention to name module indices index.js.

