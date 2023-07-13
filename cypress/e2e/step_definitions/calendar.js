import {When,Then,} from "@badeball/cypress-cucumber-preprocessor"
import { calendarName } from "support/index.js"

Then('I click on the calendar tab', () => {
    cy.get('[data-testid="nav-menu-button-exchange-calendars"]').should('be.visible').click()
})

Then ('I expect the side bar to be visible', () => {
    cy.get('[data-testid="sidebar-menu"]').should('be.visible')
})

Then('I expect the calendar table to be visible', () => {
    cy.get('[data-testid="table-title"]').should('be.visible').contains('Calendars Management')
    cy.get('[data-testid="data-table"]').should('be.visible')
})

When('I click on the add calendar button', () => {
    cy.get('[data-testid="PlaylistAddIcon"]').should('be.visible').click()
})

Then('I expect the calendar form to be visible', () => {
    cy.get('[data-testid="modal-title"]').should('be.visible')
})

Then('I proceed on filling the form', () => {
    cy.get('#name').type(calendarName)
    cy.get('[id*="mui-component-select-Time"]').should('be.visible').click()
    cy.get('[data-testid="timeZone-select-option-+02:00"]').click()
    cy.get('#marketOpen').should('be.visible').click().type('09:00')
    cy.get('#marketClose').should('be.visible').click().type('17:00')
    cy.get('[data-testid="week-days-picker"]').should('be.visible')
    cy.get('[data-testid="entity-form"] [data-testid="week-days-picker-SUNDAY"]').should('be.visible').click()
    cy.get('[data-testid="entity-form"] [data-testid="week-days-picker-SATURDAY"]').should('be.visible').click()
    cy.get('[data-testid="entity-form"] [data-testid="PlaylistAddIcon"]').should('be.visible').click()
    cy.get('#date').should('be.visible').type('2021-09-01')
    cy.get('#closeTime').should('be.visible').click().type('13:00')
    cy.get('#holidayName').should('be.visible').type('QA Holiday')
})

When('I click on the save button', () => {
    cy.get('[data-testid="submit-btn"]').should('be.visible').click()
})
Then('I search for the calendar I just created', () => {
    cy.get('#table-search').should('be.visible').type(calendarName)
})

Then('I expect the calendar to be visible', () => {
    cy.get('[data-testid="data-table"]').should('be.visible').contains(calendarName)
})