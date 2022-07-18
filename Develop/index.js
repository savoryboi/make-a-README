// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of the project?'
    },
    {
        type: 'input',
        name: 'about',
        message: 'write a description of the project:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'installation process for this application:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'to be used for:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license info?',
        choices: ['OPEN SOURCE', 'UNLICENSED']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'collaborator githubs:'
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'email for questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const { title, about, install, usage, license, credits, email } = answers;
    
if(license === 'OPEN SOURCE'){
    var badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    var licenseChoice = `
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
SOFTWARE.`
    } else {
        var licenseChoice = 'UNLICENSED.'
        var badge = '';
    } ;

    fs.writeFile('README.md',

`# ${title}

## Table of Contents
[Description](#description)  
[Install Info](#install)  
[Usage](#usage)  
[License](#license)  
[Credits](#credits)  
[Contact](#contact)  
${badge}

## Description
${about}

## Install
${install}

## Usage
${usage}

## Licensing
${licenseChoice}
## Credits
${credits}
## Contact
${email}  
[GitHub](https://github.com/savoryboi)

`, (err) => {
            if(err)
                console.log(err);
            else {
                console.log('file written successfully')
            }
        });

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then(answers => {

            writeToFile(answers);

        })
}

// Function call to initialize app
init();
