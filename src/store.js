import { legacy_createStore as createStore } from 'redux';

const initialState = {
  isDarkModeEnabled: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        isDarkModeEnabled: !state.isDarkModeEnabled,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
