import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor"


Given('I use a Post method to obtain the auth token', () => {
    cy.getToken()
    
})
Then('I expect the status code to be successful', () => { 
    cy.get('@getToken').then((response) => {
        expect(response.status).to.equal(200);
      });
})

Then ('I expect the property token and expiration time to be present in the response body', () => {
    cy.getToken()
    cy.get('@getToken').then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('expiresIn');
        expect(response.body).to.have.property('token');
      });
})

Given ('I use a Post method with Invalid Credentials to obtain the auth token', () => {
    cy.getInvalidToken()
    cy.get('@getInvalidToken').then((response) => {
        expect(response.status).to.equal(403);
      });
})