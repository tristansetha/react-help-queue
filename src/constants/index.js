import * as types from './ActionTypes';
import firebaseConfig from './firebaseConfig';

export default {
  firebaseConfig: firebaseConfig,
  c: types
};
//Now that this module index exports multiple sets of constants, all files importing constants from this location will now receive an object containing both firebaseConfig and action type constants. So, files importing constants must now destructure the import to access the two individual sets of constants.

