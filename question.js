const maintainedChoice = [yes, no, worse];


const userQues = [
    {name: "name",
    type: "input",
    message: "Project title"
    },
    {name: "description",
    type: "input",
    message: "Short blurb about your project",
    },
    {name: "version",
    type: "input",
    message: "Project version (enter empty value to skip)",
    },
    {name: "motivation",
    type: "input",
    message: "Short description of motivation behind your project",
    },
    {name: "statusM",
    type: "checkbox",
    message: "Project maintained",
    choices:maintainedChoice
    },
    {name: "website",
    type: "confirm",
    message: "Is the website up(y) or down(n)?",
    },
    {name: "style",
    type: "input",
    message: "Code style",
    },
    {name: "used",
    type: "input",
    message: "List all the types of tech/bootstrap the project was built with-separate with commas"
    },
    {name: "authors",
    type: "input",
    message: "List all the authors of this project-separate with commas" 
    },
    {name: "license",
    type: "input",
    message: "license name" 
    },
    {name: "install",
    type:"input",
    message:"Command or instructions for usage"
    },
    {name: "test",
    type:"input",
    message:"Command or instructions for testing"
    },
    {name: "documentation",
    type:"input",
    message:"Project documentation url"
    },
    {name: "deployed",
    type:"input",
    message:"Deployed project url"
    }]

    
    module.exports = userQues