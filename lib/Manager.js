const Employee = require('../lib/Employee')

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    //properties
    super(name, id, email)
    this.officeNumber = officeNumber
    this.role = 'Manager'
  }
  //methods
  getOfficeNumber () {
    return this.officeNumber
  }
  getRole () {
    return this.role
  }
}

module.exports = Manager
