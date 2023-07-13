Feature: Calendar Page

Scenario: As an user create a calendar
    Given I open Exberry admin page
    When I enter the correct username "qacandidate@gmail.com"
    Then I enter the correct password "p#xazQI!Y%z^L34a#"
    And I click on the continue button
    Then I expect to be on the dashboard page
    And I expect the tabs to be visible
    And I click on the calendar tab
    Then I expect the side bar to be visible
    And I expect the calendar table to be visible
    When I click on the add calendar button
    Then I expect the calendar form to be visible
    And I proceed on filling the form
    When I click on the save button
    Then I search for the calendar I just created
    And I expect the calendar to be visible