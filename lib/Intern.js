// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor (name, id, email, school) {
    //properties
    super(name, id, email)
    this.school = 'UCLA';
    this.role='Intern';
  }
  //methods
  getRole () {
      return this.role;
  }
  getSchool () {
      return this.school;
  }

}

module.exports = Intern