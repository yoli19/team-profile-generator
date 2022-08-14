//const Employee = require('./Employee');
import Employee from "./Employee.js";

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)

        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getRole() {return this.role}

    getofficeNumber() {return this.officeNumber}
}

export default Manager