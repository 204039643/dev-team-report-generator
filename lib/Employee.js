// TODO: Write code to define and export the Employee class

class Employee {
  //properties
  constructor () {
    this.name = 'Alice';
    this.id = 100;
    this.email = 'test@test.com';
    this.role = 'Employee';
  }
  //method
  getName () {
    return this.name;
  }
  getId () {
    return this.id;
  }
  getEmail () {
    return this.email;
  }
  getRole () {
      return this.role;
  }
}

module.exports = Employee
