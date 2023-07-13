export const calendarName =  `QA Calendar${Math.floor(Math.random() * 1000)}`
Cypress.env('calendarName', calendarName())
return Cypress.env('calendarName')
