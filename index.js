import Input from './lib/Input.js';
import { writeFile, copyFile } from './utils/generateHTML.js';
import generateHTML from './src/page-template.js'

new Input().initializeInput()
    // .then(teamData => {
    //     return generateHTML(teamData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML);
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
