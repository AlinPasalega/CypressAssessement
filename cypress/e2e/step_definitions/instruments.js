import {When,Then,} from "@badeball/cypress-cucumber-preprocessor"
import { calendarName } from "support/index.js"

Then('I click on the instruments tab', () => {
    cy.get('[data-testid="nav-menu-button-exchange-instruments"]').should('be.visible').click()
})

Then('I expect the instruments table to be visible', () =>{
    cy.get('[data-testid="table-title"]').should('be.visible').contains('Instruments Management')
    cy.get('[data-testid="data-table"]').should('be.visible')
})

When('I click on the add instruments button', () => {
    cy.get('[data-testid="PlaylistAddIcon"]').should('be.visible').click()
})

Then('I expect the instruments form fields to be visible', () => {
    cy.get('#symbol').should('be.visible')
    cy.get('#quoteCurrency').should('be.visible')
    cy.get('[data-testid="description-input"]').should('be.visible')
    cy.get('#calendarId').should('be.visible')
})
Then('I proceed on filling the instruments form', () => {
    cy.get('#symbol').should('be.visible').type('QA')
    cy.get('#quoteCurrency').should('be.visible').type('QA')
    cy.get('[data-testid="description-input"]').should('be.visible').type('QA')
    cy.get('#calendarId').should('be.visible').click().type(calendarName)
})

When('I check the active checkbox', () => {
    cy.get('#activityStatus').check({force: true})
})

Then ('I click on the next button', () => {
    cy.get('[data-testid="main-settings-form"] [data-testid="instrument-form-next-btn"]').should('be.visible').click()
})