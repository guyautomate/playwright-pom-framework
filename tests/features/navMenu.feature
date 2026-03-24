Feature: Navigation Menu

@navigationMenu

Scenario: Verify all the side navigation items in the page
    Given user is on the inventory page
    When user clicks on hamburger menu
    Then user see the Menu items and cross button
    Then user can navigate to the multiple pages