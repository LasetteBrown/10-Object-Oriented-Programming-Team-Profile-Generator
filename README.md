# Programing Team Generator

## Description
        
This is a node command-line application that generates an html page that contains all the team member information that is input by the user. It runs in the terminal when the command 

```bash
node index.js
```

is run. Questions about the team appear one at a time and each answer is used to add information to the html file. Once the user has input all information about their team the html file is generated iside the dist folder. When opened in the browser the file displays each team member with their role, employee ID number and email, and some basic information about them based on their role. The team manager will include their office number. All Engineers will include their github user name, and all interns will include their school.

To see a demonstration of the application you can watch this video: ![Demonstration video](http://drive.google.com/file/d/1dZz8AamPHKvtyOIy9SrCImZEataxEAd3/view)

        
## Table of Contents
        
* [Badges](#badges)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
        
## Badges
        
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        
## Installation
        
running this application will require the user to first instal node management packages by running 

```bash
npm i
```
in the terminal. This will install the required programs which include inquirer and fs
        
## Usage
        
This application can be used to generate an html file. The file will contain the information collected from the user through a series of questions. The html file contains a link to a style.css sheet within the same folder as the html file. If you wish to create your own styling you may have to edit the html file of the accompanying css file.         
        
## License
        
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.
                
In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
                
For more information, please refer to [http://unlicense.org/](http://unlicense.org/)

## Contributing

This application was created for the full stack web development boot camp at the University of Denver. I do not intend to update it or maintain it and any attempts to contribute to this project will most likely be ignored.

## Tests
        
There are several tests included with this product. The tests folder included tests that can be run on each of the main object class files. in order to run the tests simply type 

```bash
npm run test
```

in the terminal and the test files will run.
        
## Questions

If you have any questions feel free to contact me. Reach out to me on github at[LasetteBrown](https://github.com/LasetteBrown) or email me at [lasette.brown@gmail.com](mailto:lasette.brown@gmail.com)



