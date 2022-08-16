import { getSupportedInputTypes } from '@angular/cdk/platform';

describe('My First Test', () => {
  // just a test
  const types = getSupportedInputTypes();
  console.log(types);
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome');
  });
});
