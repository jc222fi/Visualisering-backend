const _ = require("lodash");

// THIS CODE AINT WORKING - JUST A TEST

module.exports = {
  // addNewCommitData(newCommitsArray) {
  //   const currentState = getState().commits.data;
  //   const newState = _.sortBy(currentState.concat(newCommitsArray), ["author", "date"]).slice(-100);

  //   return ({type: "ADD_NEW_COMMITS", data: newState});

      
  // },
  addLatestCommits(commits) {
    return {type: "ADD_COMMITS", commits};
  }
};
