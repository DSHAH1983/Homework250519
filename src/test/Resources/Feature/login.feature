
@login
Feature: Login


  Background:
    Given user is on homepage
    When user clicks on login

  Scenario Outline: User should not be able to login with invalid credentials

    And user enters "<email>" and "<password>"
    And user clicks on Log in button
    Then user should see error message
    And user  should see 'Please enter your email' if email field is blank
    Examples:
      | email             |password |
      |1983dhar@gmail.com |Monika12 |
      |                    |Monika12 |
      |1983dhara@gmail.com|         |
      |                   |         |
      |1983dhara@gmail.com| Monika1 |

  Scenario: User should be able to login with valid credentials

    And user enters 'Email'
    And user enters 'Password'
    And user clicks on Log in button
    Then user should see 'Logout' link on homepage

