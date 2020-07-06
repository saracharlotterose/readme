// const inquirer = require("inquirer")

const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
main();

function main() {
  userinput().then((answers) => {
    const html = renderreadme(answers);
    console.log(html);
    writeFile(html)
  });

  // inquirer

  // userinput().then(answers => console.log(answers));

  function userinput() {
    const questions = [
      {
        name: "title",
        type: "input",
        message: "Please enter the title of your README",
      },
      {
        name: "description",
        type: "input",
        message: "Please enter a description for your README",
      },
      
      {
        name: "installation",
        type: "input",
        message: "Please enter a method of installation",
      },
      {
        name: "usage",
        type: "input",
        message: "Please specify usage",
      },
      {
        name: "license",
        type: "list",
        message: "Please enter license",
        choices: ["ISC", "MIT"],
      },
      {
        name: "contributing",
        type: "input",
        message: "Please enter contributing members",
      },
      {
        name: "tests",
        type: "input",
        message: "Please enter tests",
      },
      {
        name: "questions",
        type: "input",
        message: "Please enter questions",
      },
      {
        name: "githuburl",
        type: "input",
        message: "Please enter github username",
      },
      {
        name: "email",
        type: "input",
        message: "Please enter email",
      },
    ];
    return inquirer.prompt(questions);
  }

  function renderreadme({
    title,
    description,
    contents,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions,
    githuburl,
    email,
  }) {

let badge;

switch(license){
    case "ISC":
    badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
break;
    case "MIT":
        badge = "https://img.shields.io/badge/License-MIT-yellow.svg"


        break;
}


    return `## **${title}**

![Badge](${badge})
## **Description**
${description}

## **Table** **of** **contents**

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## **Installation**
To install necessary dependencies, run the following command:
\`\`\`
npm i
\`\`\`
## **Usage**
${usage}


## **License**
${license}
## **Contributing**
${contributing}
## **Tests**
${tests}

## **Questions**
${questions}
## *Github*
https://github.com/${githuburl}
## *Email*
${email}

`;
  }
}


function writeFile(data) {
  fs.writeFileSync("./test.md", data);
  console.log("after the file write");
}
