import {Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor"

Given('I open Exberry admin page', () => { 
    cy.visit('/')
});

Then('I enter the correct username {string}', (username) => { 
    cy.get('#username').clear().type(username)
})

Then('I enter the correct password {string}', (password) => {
    cy.get('#password').clear().type(password)
})

Then('I click on the continue button', () => {
    cy.get('[data-action-button-primary="true"]').should('be.visible').click()
})

Then('I expect to be on the dashboard page', () => { 
    cy.get('[data-testid="current-exchange-label"]').should('be.visible').contains('QA Testing Task')
})

Then('I expect the tabs to be visible', () => {
    cy.get('[data-testid="nav-menu-button-exchange-calendars"]').should('be.visible')
    cy.get('[data-testid="nav-menu-button-exchange-instruments"]').should('be.visible')
    cy.get('[data-testid="nav-menu-button-exchange-mps"]').should('be.visible')
    cy.get('[data-testid="nav-menu-button-exchange-reports"]').should('be.visible')
    cy.get('[data-testid="nav-menu-button-exchange-market-watch"]').should('be.visible')
})

When('I enter the incorrect username {string}', (usernameInvalid) => {
    cy.get('#username').clear().type(usernameInvalid)
})


Then('I expect the error message to be visible',() => { 
    cy.get('[data-error-code="wrong-email-credentials"]').should('be.visible')
})