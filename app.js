const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const employees = []

const render = require('./lib/htmlRenderer')

//start user input by providing an employee type
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'Please select employee type to add below:',
        choices: ["Manager", "Engineer", "Intern"]
      }
    ])
    .then(response => {
      if (response.employeeType === 'Manager') {
        promptManager()
      } else if (response.employeeType === 'Engineer') {
        promptEngineer()
      } else {
        promptIntern()
      }
    })
}

//prompt for manager inputs
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is employees name?'
      },
      {
        type: 'number',
        name: 'id',
        message: 'What is the employees ID #?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the employees officeNumber?'
      },
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Add another employee?'
      }
    ])
    .then(response => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      )
      employees.push(manager)
      if (response.addAnother === true) {
        promptUser()
      } else {
        console.log(employees)
        writeHTML()
      }
    })
}

//prompt for engineer inputs
const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is employees name?'
      },
      {
        type: 'number',
        name: 'id',
        message: 'What is the employees ID #?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the employees gitHub profile?'
      },
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Add another employee?'
      }
    ])
    .then(response => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      )
      employees.push(engineer)
      if (response.addAnother === true) {
        promptUser()
      } else {
        writeHTML()
      }
    })
}

//prompt for intern inputs
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is employees name?'
      },
      {
        type: 'number',
        name: 'id',
        message: 'What is the employees ID #?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the employees email address?'
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school did the employee attend?'
      },
      {
        type: 'confirm',
        name: 'addAnother',
        message: 'Add another employee?'
      }
    ])
    .then(response => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      )
      employees.push(intern)
      if (response.addAnother === true) {
        promptUser()
      } else {
        writeHTML()
      }
    })
}

promptUser()

//Write new employees object to team.html file
function writeHTML () {
  fs.writeFile(outputPath, render(employees), null, function (err) {
    if (err) {
      return console.log(err)
    } else {
      console.log('Successfully wrote the team!')
    }
  })
}
