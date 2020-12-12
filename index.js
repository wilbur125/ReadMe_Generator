const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      }, 
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
      }, 
      { 
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
      },
      {
        type: 'input', 
        name: 'contributing',
        message: 'Please provide contribution guidelines.'
      },
      {
        type: 'input', 
        name: 'tests',
        message: 'Please provide test instructions.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license.',
        choices: ['MIT', 'APACHE-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL', 'MPL-2.0', 'None']
      }, 
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type:'input',
        name: "email",
        message: "Please enter your email address."
      }
  ])
};

function generateREADME(answers) {
  return `
  # ${answers.title}

  ## Description

  ${answers.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  Run the following commands to install the necessary dependencies:

  ${answers.installation}

  ## Usage

  ${answers.usage}


  ## License

  ${answers.license}

  ## Contributing

  ${answers.contributing}

  ## Tests

  ${answers.tests}

  ## Questions

  If you have any questions, please feel free to reach out to me via email at ${answers.email}

  To view more of my work, please visit my GitHub at www.github.com/${answers.github}
  `
};

promptUser()
  .then(function(answers) {
    const readme = generateREADME(answers);
    return writeFileAsync("README.md", readme);
  })
  .then(function() {
    console.log("Success! Check out your README file.");
  })
  .catch(function(err) {
    console.log(err);
  });
  