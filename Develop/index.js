//Included packages neccessary for this project
const fs = require("fs");
const inquirer = require("inquirer");

//  Added the markup needed for the generate readme function. Also added the inquirer prompt with the specific user questions

const generateReadme = ({
  title,
  description,
  installation,
  usage,
  credit,
  license,
  tests,
  github,
  email
}) =>
  `# ${title}:

  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
## DESCRIPTION:

${description}

## TABLE OF CONTENTS:

[installation](#installation) <br/>
[usage](#usageinstructions)<br/>
[credits](#credits)<br/>
[license](#licenses)<br/>
[badges](#badges)<br/>
[tests](#tests)<br/>
[contributions](#contribute)<br/>
[questions](#questions)<br/>

## INSTALLATION:

${installation}

## USAGE/INSTRUCTIONS:

${usage}

## CREDITS:

I'd like to thank ${credit} for helping me with this project.

## LICENSES:

${license}
"[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

## BADGES:
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />

## TESTS:

${tests}

## CONTRIBUTE:

You can connect with me via gihub- ${github}

## QUESTIONS:

You can contact me via email - ${email}

`;

inquirer
  .prompt([
    {
      type: "input",
      message: "What Is the title for this project?",
      name: "title",
    },
    {
      type: "input",
      message: "Provide a short description of this project:",
      name: "description",
    },
    {
      type: "input",
      message: "List the table of contents:",
      name: "contents",
    },
    {
      type: "input",
      message: "How do you install the application?",
      name: "installation",
    },
    {
      type: "input",
      message: "List the instructions for usage:",
      name: "usage",
    },
    {
      type: "input",
      message: "Do you need to credit any sites or users?",
      name: "credit",
    },
    {
      type: "input",
      message: "What License did you use:",
      name: "license",
    },
    {
      type: "input",
      message: "Do you have any tests?",
      name: "tests",
    },
    {
      type: "input",
      message: "How can one contribute? github?",
      name: "github",
    },
    {
      type: "input",
      message: "How can one reach you for questions? Email?",
      name: "email",
    },
  ])
  .then((answers) => {
    const readmeMarkup = generateReadme(answers);

    fs.writeFile("README.md", readmeMarkup, (err) =>
      err ? console.log(err) : console.log("Successfully created readme file!")
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
