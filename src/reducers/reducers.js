import { combineReducers } from 'redux'

function updateSearchCriteria(state, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_CRITERIA':
      console.log(`changing criteria to ${action.query}`);
      return {
        ...state,
        query: action.query
      }
    default:
      return {}
  }
};

module.exports = combineReducers({updateSearchCriteria});
