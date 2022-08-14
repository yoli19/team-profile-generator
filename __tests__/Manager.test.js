//const Manager = require('../lib/Manager.js');
import Manager from "../lib/Manager.js";

test('gets managers office number', () => {
    const testOffice = 10;
    const manager = new Manager('Jane', 1, 'jane@email.com', testOffice);

    expect(manager.getofficeNumber()).toBe(testOffice);
});

test('gets manager role', () => {
    const testRole = 'Manager';
    const manager = new Manager('Jane', 1, 'jane@email.com');

    expect(manager.getRole()).toBe(testRole);
});