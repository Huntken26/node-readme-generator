//Included packages neccessary for this project
const fs = require("fs");
const inquirer = require("inquirer");

//  Added the markup needed for the generate readme function. Also added the inquirer prompt with the specific user questions

const generateReadme = ({
  title,
  description,
  contents,
  installation,
  usage,
  credit,
  license,
  badges,
  features,
  contact,
}) =>
  `# ${title}:

## DESCRIPTION:

${description}

## TABLE OF CONTENTS:

${contents}

## INSTALLATION:

${installation}

## USAGE/INSTRUCTIONS:

${usage}

## CREDITS:

${credit}

## LICENSES:

${license}

## BADGES:

${badges}

## FEATURES:

${features}

## HOW TO CONTRIBUTE:

${contact}

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
      message: "Do you have any badges?",
      name: "badges",
    },
    {
      type: "input",
      message: "Does your project have any special features?",
      name: "features",
    },
    {
      type: "input",
      message: "How can one contribute to your project?",
      name: "contact",
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
