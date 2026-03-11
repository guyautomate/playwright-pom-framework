Feature: Login

Scenario: Successful login
Given user is on the login page
When user enters valid credentials
And clicks login
Then user should land on inventory page