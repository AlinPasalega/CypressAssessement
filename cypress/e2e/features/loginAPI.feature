Feature: Login via API Authentication

Scenario: Obtain Auth Token
    Given I use a Post method to obtain the auth token
    Then I expect the status code to be successful
    And I expect the property token and expiration time to be present in the response body

Scenario: Obtain Auth Token with invalid credentials
    Given I use a Post method with Invalid Credentials to obtain the auth token