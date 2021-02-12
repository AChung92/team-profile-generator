const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Lisa');
});

test('set office number with constructor', () => {
    const testVal = 100;
    const e = new Manager('John', 1, 'manager@email.com', testVal);
    expect(e.officeNumber).toBe(testVal);
});

test('get office number with getOfficeNumber() method', () => {
    const testVal = 100;
    const e = new Manager('John', 1, 'manager@email.com', testVal);
    expect(e.getOfficeNumber()).toBe(testVal);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testVal = 'Manager';
    const e = new Manager('John', 1, 'manager@email.com', 100);
    expect(e.getRole()).toBe(testVal);
});