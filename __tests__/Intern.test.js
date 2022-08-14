//const Intern = require('../lib/Intern.js');
import Intern from "../lib/Intern.js";

test('creates school for intern', () => {
    const testSchool = 'university';
    const intern = new Intern('Jane', 1, 'jane@email.com', testSchool);

    expect(intern.school).toBe(testSchool);
});

test('gets interns school', () => {
    const testSchool = 'university';
    const intern = new Intern('Jane', 1, 'jane@email.com', testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

test('gets intern role', () => {
    const testRole = 'Intern';
    const intern = new Intern('Jane', 1, 'jane@email.com');

    expect(intern.getRole()).toBe(testRole);
});