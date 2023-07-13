Feature: Market Participants

  Scenario: As an user add an MP
    Given I open Exberry admin page
    When I enter the correct username "qacandidate@gmail.com"
    Then I enter the correct password "p#xazQI!Y%z^L34a#"
    And I click on the continue button
    Then I expect to be on the dashboard page
    And I expect the tabs to be visible
    When I click on the Market Participants add button
    Then I expect the MP modal to be visible
    And I proceed on filling the MP form
    When I click on the save button
    Then I expect the MP to be added