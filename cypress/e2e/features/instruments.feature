Feature: Instruments Page

Scenario: As an user create a calendar
    Given I open Exberry admin page
    When I enter the correct username "qacandidate@gmail.com"
    Then I enter the correct password "p#xazQI!Y%z^L34a#"
    And I click on the continue button
    Then I expect to be on the dashboard page
    And I expect the tabs to be visible
    And I click on the instruments tab
    Then I expect the side bar to be visible
    And I expect the instruments table to be visible
    When I click on the add instruments button
    Then I expect the instruments form fields to be visible
    And I proceed on filling the instruments form
    When I check the active checkbox
    Then I click on the next button