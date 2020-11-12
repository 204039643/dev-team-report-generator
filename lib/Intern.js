const Employee = require('../lib/Employee')

class Intern extends Employee {
  constructor (name, id, email, school) {
    //properties
    super(name, id, email)
    this.school = school
    this.role = 'Intern'
  }
  //methods
  getRole () {
    return this.role
  }
  getSchool () {
    return this.school
  }
}

module.exports = Intern
