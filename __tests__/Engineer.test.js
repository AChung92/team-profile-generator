  
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jane');
});

test('set github account with constructor', () => {
    const testVal = 'GitHubAccount';
    const engine = new Engineer('Alex', 1, 'engineer@email.com', testVal);
    expect(engine.github).toBe(testVal);
})

test('get github account with getGithub() method', () => {
    const testVal = 'GitHubAccount';
    const engine = new Engineer('Alex', 1, 'engineer@email.com', testVal);
    expect(engine.getGitHub()).toBe(testVal);
});

// Test if the getRole() value is Engineer
test('getRole() return Engineer', () => {
    const testVal = 'Engineer';
    const engine = new Engineer('Alex', 1, 'engineer@email.com', 'GitHubAccount');
    expect(engine.getRole()).toBe(testVal);
});