Feature: Login Page

Background: I navigate to the Exberry admin page
     Given I open Exberry admin page
    
Scenario: User can login with valid credentials
    When I enter the correct username "qacandidate@gmail.com"
    Then I enter the correct password "p#xazQI!Y%z^L34a#"
    And I click on the continue button
    Then I expect to be on the dashboard page
    And I expect the tabs to be visible

Scenario: User cannot login with invalid credentials
    When I enter the incorrect username "qacandidate@gmail.co"
    Then I enter the correct password "p#xazQI!Y%z^L34a#"
    And I click on the continue button
    Then I expect the error message to be visible