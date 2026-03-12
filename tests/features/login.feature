Feature: Login

@login
Scenario: Successful login
    Given user is on the login page
    When user enters valid credentials
    Then user should land on inventory page

Scenario: Invalid login
    Given user is on the login page
    When user enters invalid credentials
    Then user should get the error message