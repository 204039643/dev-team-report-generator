const Employee = require('../lib/Employee')

class Engineer extends Employee {
  constructor (name, id, email, github) {
    //properties
    super(name, id, email)
    this.github = github
    this.role = 'Engineer'
  }
  //methods
  getRole () {
    return 'Engineer'
  }
  getGithub () {
    return this.github
  }
}

module.exports = Engineer
