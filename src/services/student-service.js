const _ = require("lodash");
const students = require("../../datasets/students");

module.exports = {
  students() {
    return new Promise((resolve, reject) => {
      resolve(students);
    });
  },

  find_by_username(username) {

    return new Promise((resolve, reject) => {
      resolve(_.find(students, o => o.username === username));
    });
  }

}
