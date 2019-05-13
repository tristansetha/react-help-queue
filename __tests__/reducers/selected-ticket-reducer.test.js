import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import constants from './../../src/constants';

const { c } = constants;


describe("selectedTicketReducer", () => {
  test('Should return default state if no action type is recognized', () => {
      expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });

  test('Should record which ticket has been selected by user', () => {
    expect(selectedTicketReducer({}, { type: c.SELECT_TICKET, ticketId: 1 })).toEqual(1);
  })
});

// Now that we have two reducers we'll need to combine them into a rootReducer to provide to our Redux store, just like we learned in this weekend's homework.