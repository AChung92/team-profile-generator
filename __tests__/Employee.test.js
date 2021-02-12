const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Alex');
});

test('set id with constructor', () => {
    const testVal = 100;
    const employ = new Employee('Bob', testVal);
    expect(employ.id).toBe(testVal);
});

test('set email with constructor', () => {
    const testVal = 'employee@email.com';
    const employ = new Employee('Bob', 1, testVal);
    expect(employ.email).toBe(testVal);
});

// Test if the getRole() value is Employee
test('getRole() return Employee', () => {
    const testVal = 'Employee';
    const employ = new Employee('Alex', 1, 'employee@email.com');
    expect(employ.getRole()).toBe(testVal);
});