//const Employee = require("../lib/Employee");
import Employee from '../lib/Employee.js';

test('creates an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});

test('sets employee name', () => {
    const employee = new Employee('Jane');

    expect(employee.name).toBe('Jane');
});

test('sets employee id', () => {
    const testId = 1;
    const employee = new Employee('Jane', testId);

    expect(employee.id).toBe(testId);
});

test('sets employee email', () => {
    const testEmail = 'jane@email.com';
    const employee = new Employee('Jane', 1, testEmail);

    expect(employee.email).toBe(testEmail);
});

test('gets employee name', () => {
    const employee = new Employee('Jane');

    expect(employee.name).toBe('Jane');
});

test('gets employee id', () => {
    const testId = 1;
    const employee = new Employee('Jane', testId);

    expect(employee.getId()).toBe(testId);
});

test('gets employee email', () => {
    const testEmail = 'jane@email.com';
    const employee = new Employee('Jane', 1, testEmail);

    expect(employee.getEmail()).toBe(testEmail);
});

test('gets employee role', () => {
    const testRole = 'Employee';
    const employee = new Employee('Jane', 1, 'jane@email.com');

    expect(employee.getRole()).toBe(testRole);
});