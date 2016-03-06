// const _ = require("lodash");

module.exports = {
  addLatestCommits(commits) {
    return {type: "ADD_COMMITS", commits};
  }
};
