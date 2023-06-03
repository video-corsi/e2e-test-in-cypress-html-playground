import { add } from '../../src/main';

it('display the message', function () {
  cy.visit('http://127.0.0.1:5173/')
  cy.contains('Hello')
})

it('sum 2 numbers', function () {
  expect(add(2, 3)).to.equal(5)
})
