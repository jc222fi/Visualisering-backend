const githubService = require("../services/github-service");
const studentService = require("../services/student-service");

function process(commits) {
  return Promise.all(commits.map(commit => {
    return new Promise((resolve, reject) => {
      username = commit.email.split("@")[0];
      studentService.find_by_username(username)
                    .then(student => { resolve({ lng: student.lng,
                                                 lat: student.lat,
                                                 time: Date.parse(commit.date) })});
    });
  }))
}

module.exports = {

  dataSet() {
    return new Promise((resolve, reject) => {
      githubService.latestCommits("Visualisering", "Visualisering-frontend")
                  .then(process)
                  .then(resolve);
    });
  }

}
