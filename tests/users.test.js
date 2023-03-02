// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');
const users = require('../data');

// Make a test to verify if the method getUser(id) works correctly
test('get user by id', () => {
  const user = getUser(3);
  expect(user).toEqual(users[2]);
});

// Verify any data of the resulting object you want
test('get all users', () => {
  const allUsers = getUsers();
  expect(allUsers).toEqual(users);
});




// READ documentation