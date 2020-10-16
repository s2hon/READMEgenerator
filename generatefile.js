function generatefile (response) {
    return `
# ${response.name} ![maintained](https://img.shields.io/maintenance/${response.statusM}/${response.statusYear})
    ${response.description}

## Table of contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Test](#test)
    - [Contributors](#contributors)
    - [License](#license)
    - [Questions](#questions)

### Version 
    ${response.version}

## Features
    ${response.features}

## Installation
    ${response.install}

##Usage
    ${response.usage}

## Tests
    ${response.test}

## Languages
    ${response.languages}

## API Reference
    ${response.apiRef}

## Tech/framework used
    ${response.used}

## Motivation
    ${response.motivation}

## Contributors
    (${response.comment} === "Yes"` ? `This project exists thanks to all the people who contributed.
    ` : `""
    ${response.contributor}

## Credits
    ${response.credit}

## Deployed Project
    ${response.deployed}

## Questions
    ![GitHub followers](https://img.shields.io/github/followers/${response.github}?label=click%20to%20connect&style=social)(https://github.com/${response.github})
    ${response.email}

## License
    ${response.license} © ${response.userName} 

`}

    module.exports = generatefile