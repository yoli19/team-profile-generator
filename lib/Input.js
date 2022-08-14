import inquirer from "inquirer";

import Manager from "./Manager.js";
import Engineer from "./Engineer.js";
import Intern from "./Intern.js";

class Input {
    constructor() {
        this.team = [];
        this.manager;
        this.engineer;
        this.intern;
    }

    initializeInput() {
        if (this.team.length === 0) {
            console.log('Enter info for the manager');
            inquirer.prompt({
                type: 'number',
                message: 'what is the managers office number? (required)',
                name: 'officeNum',
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('You need to enter a office number for the manager!');
                        return false;
                    }
                }
            })
                .then((officeNumb) => {
                    return this.employeeInput(officeNumb);
                })
        }
    }

    employeeInput(roleData) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your team member? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('You need to enter a team member name!');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                message: 'what is the team member id number? (required)',
                name: 'idNumber',
                validate: idNumberInput => {
                    if (Number.isInteger(idNumberInput)) {
                        return true;
                    } else {
                        console.log('You need to enter a valid team member id number!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of your team member? (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter a team member email!');
                        return false;
                    }
                }
            }
        ])
            .then((employeeData) => {
                console.log(this.team.length)
                if (this.team.length === 0) {
                    this.manager = new Manager(
                        employeeData.name,
                        employeeData.idNumber,
                        employeeData.email,
                        roleData.officeNum
                    );
                    this.team.push(this.manager);
                    console.log(this.team)

                    this.addTeamMember();
                }
                else {
                    this.addTeamMember();
                }
            })
    }

    addTeamMember() {
        inquirer.prompt({
            type: 'list',
            name: 'addMember',
            message: 'would you like to add an engineer or intern?',
            choices: ['add engineer', 'add intern', 'finish team']
        })
        .then((question) => {
            if (question.addMember === 'add engineer') {
                    
                inquirer.prompt({
                    type: 'input',
                    name: 'github',
                    message: 'What is the github of your engineer? (Required)',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('You need to enter an engineer github!');
                            return false;
                        }
                    }
                })
                .then((username) => {
                    this.employeeInput()
                    this.engineer = new Engineer(
                        employeeData.name,
                        employeeData.idNumber,
                        employeeData.email,
                        username.github
                    );
                    this.team.push(this.engineer);
                    console.log(this.team);
                });
            }
            else if (question.addMember === 'add intern') {
                
                inquirer.prompt({
                    type: 'input',
                    name: 'school',
                    message: 'What is the school of your intern? (Required)',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('You need to enter an intern school!');
                            return false;
                        }
                    }
                },
                this.employeeInput()
                )
                .then((schoolName) => {
                    this.intern = new Intern(
                        employeeData.name,
                        employeeData.idNumber,
                        employeeData.email,
                        schoolName.school
                    );
                    this.team.push(this.intern);
                    console.log(this.team);
                    
                });
            }
            else if (question.addMember === 'finish team') {
                console.log(this.team);
            }
        })
    }
}

export default Input;