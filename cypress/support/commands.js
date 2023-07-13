Cypress.Commands.add('getToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://admin-api-shared.staging.exberry-uat.io/api/auth/token',
      body: {
        email: 'qacandidate@gmail.com',
        password: 'p#xazQI!Y%z^L34a#'
      }
    }).as('getToken');
  });
  
  Cypress.Commands.add('getInvalidToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://admin-api-shared.staging.exberry-uat.io/api/auth/token',
      body: {
        email: 'qacandidate@gmail.co',
        password: 'p#xazQI!Y%z^L34a#'
      }
    }).as('getInvalidToken');
  });