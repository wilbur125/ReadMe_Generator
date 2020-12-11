const inquirer = require('inquirer');

inquirer
  .prompt([
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
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
      },
      {
        type: 'input', 
        name: 'test',
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
      }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });