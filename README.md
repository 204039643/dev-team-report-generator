# Dev-team-report-generator

![license badge](https://img.shields.io/badge/license-MIT-brightgreen)

Node.js app invoked using CLI and then presents a team org. chart using dynamically generated HTML.

Link to demo video: (https://drive.google.com/file/d/19zXqtOdkL1E_6GM3frmmHWfZStOyqjrR/view)

![app screenshot](../my-dev-team-generator-screenshot1.png)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#test)
- [Questions](#questions)
    
## Installation
    
1. Fork my repo in Github and clone to your local machine: https://github.com/204039643/dev-team-report-generator
2. Initialize npm using 'npm init' command.
3. Install both Jest, Inquirer, and Path modules using the command 'npm install inquirer jest path'.
    
## Usage
    
1. Run app using 'node app.js' command in CLI. Ensure you are in the proper directory containing the app.js file.
2. Select role to add (Manager, Engineer, Intern).
3. Answer questions regarding role.
4. If you need to add more roles, select 'y' at the confirm prompt for additional team members.
5. Repeat steps 4 - 6 for each team member to add.
6. When complete, updated version of 'team.html' will be generated in the output folder.
7. Open 'team.html' in your default browser to view.
    
## License
    
MIT
    
Copyright (c) [2020] Justin Sykes
    
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
    
## Contributions
    
- Font Awesome
- NPM modules: fs, inquirer, path, Jest
     
## Tests
    
Uses Jest npm module for unit testing. See 'test' folder for unit test files. Use 'NPM run test' to execute full test suite.
    
## Questions?
Please reach out to me at either of the following:
    GitHub username: 204039643
    Email: atlsykes1@att.net
    
    
---This README was generated using nice-readme-generator :-) ---