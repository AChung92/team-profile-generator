const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Mia');
});

test('set school with constructor', () => {
    const testVal = 'U of T';
    const int = new Intern('Joe', 1, 'intern@email.com', testVal);
    expect(int.school).toBe(testVal);
});

test('get school with getSchool() method', () => {
    const testVal = 'U of T';
    const int = new Intern('Joe', 1, 'intern@email.com', testVal);
    expect(int.getSchool()).toBe(testVal);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testVal = 'Intern';
    const int = new Intern('Joe', 1, 'intern@email.com', 'U of T');
    expect(int.getRole()).toBe(testVal);
});