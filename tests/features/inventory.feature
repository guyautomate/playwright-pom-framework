Feature: Inventory

@inventory

Scenario: Verify the cart icon and filter option
    Given user is on the inventory page
    When user clicks on cart icon
    Then user is navigated to cart page
    When user clicks on filter option
    Then user can see 4 filter options
    Then user clicks on 1 filter option
    Then user can see the contents of page sorted
    
Scenario: Verify the individuals items in inventory page
    Given user is on inventory page
    When user clicks on the single product view
    Then user is redirected to single product page
    When user clicks on "add to cart" button
    Then verify the cart icon number increases