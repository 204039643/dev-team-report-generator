// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
  constructor () {
    //properties
    this.officeNumber = 100
    this.role = 'Manager';
  }
  //methods
  getRole () {
      return this.role;
  }
  getOfficeNumber () {
      return this.officeNumber;
  }

}

module.exports = Manager
