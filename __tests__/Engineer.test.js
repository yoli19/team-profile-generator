const Engineer = require('../lib/Engineer.js');

test('creates github for engineer', () => {
    const testGitHub = 'github';
    const engineer = new Engineer('Jane', 1, 'jane@email.com', testGitHub);

    expect(engineer.github).toBe(testGitHub);
});

test('gets engineers github', () => {
    const testGitHub = 'github';
    const engineer = new Engineer('Jane', 1, 'jane@email.com', testGitHub);

    expect(engineer.getGithub()).toBe(testGitHub);
});

test('gets engineer role', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('Jane', 1, 'jane@email.com');

    expect(engineer.getRole()).toBe(testRole);
});