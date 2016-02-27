const _ = require("lodash");

// THIS CODE AINT WORKING - JUST A TEST

module.exports = {
  addNewCommitData(newCommitsArray) {
      return (dispatch, getState) => {
          const currentState = getState().commits.data;
          const newState = _.sortBy(currentState.concat(newCommitsArray), ["author", "date"]).slice(-100);

          dispatch({type: "ADD_NEW_COMMITS", data: newState});

      };
  }
};
