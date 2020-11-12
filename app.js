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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

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
        console.log(employees)
        writeHTML()
      }
    })
}

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
        console.log(employees)
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
