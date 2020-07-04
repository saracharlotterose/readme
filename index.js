// const inquirer = require("inquirer")

const inquirer = require("inquirer");

main()

function main(){

    userinput()
    .then(answers =>  {
        const html = renderreadme(answers);
        console.log(html)



});

// inquirer

userinput().then(answers => console.log(answers));

function userinput(){

const questions =[
    {
        name:"title",
        type:"input",
        message:"Please enter the title of your README"
    },
    {
        name:"description",
        type:"input",
        message:"Please enter a description for your README"
    },
    {
        name:"contents",
        type:"input",
        message:"please enter a table of contents"
    },
    {
        name:"installation",
        type:"input",
        message:"Please enter a method of installation"

    },
    {
        name:"usage",
        type:"input",
        message:"Please specify usage"

    },
    {
        name:"license",
        type:"input",
        message:"Please enter license"

    },
    {
        name:"contributing",
        type:"input",
        message:"Please enter contributing members"

    },
    {
        name:"tests",
        type:"input",
        message:"Please enter tests"

    },
    {
        name:"questions",
        type:"input",
        message:"Please enter questions"

    },
    {
        name:"githuburl",
        type:"input",
        message:"Please enter github username"

    },
    {
        name:"email",
        type:"input",
        message:"Please enter email"

    }



];
 return inquirer.prompt(questions)

}























function renderreadme({title, description, contents, installation, usage,liscense,contributing,tests,questions}){
return `## **${title}**


## **Description**
${description}

## **Table** **of** **contents**
${contents}


## **Installation**
${installation}


## **Usage**
${usage}


## **Liscense**
${liscense}
## **Contributing**
${contributing}
## **Tests**
${tests}

## **Questions**
${questions}

`;
}}