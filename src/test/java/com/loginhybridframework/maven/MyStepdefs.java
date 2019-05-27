package com.loginhybridframework.maven;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    HomePage homePage = new HomePage();
    LogIn logIn = new LogIn();

    @Given("^user is on homepage$")
    public void userIsOnHomepage() {
        homePage.verifyUserOnHomePage();
    }



    @When("^user clicks on login$")
    public void userClicksOnLogin()

    {
        homePage.clickLogInLink();
    }

    @And("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEntersAnd(String email, String password)
    {
        logIn.userSouldNotBeAbleToLogIn(email,password);
    }

    @And("^user clicks on Log in button$")
    public void userClicksOnLogInButton()
    {
        logIn.clickLogInButton();

    }

    @Then("^user should see error message$")
    public void userShouldSeeErrorMessage() {
        logIn.assertErrorMessages();
    }

    @Then("^user should see 'Logout' link on homepage$")
    public void userShouldSeeLogoutLinkOnHomepage()
    {
        homePage.verifyLogOutLinkOnHomePage();
    }

    @And("^user enters 'Email'$")
    public void userEntersEmail()
    {
        logIn.userEntersEmailToLogin();
    }

    @And("^user enters 'Password'$")
    public void userEntersPassword()
    {
        logIn.userEntersPasswordToLogin();
    }

    @And("^user  should see 'Please enter your email' if email field is blank$")
    public void userShouldSeePleaseEnterYourEmailIfEmailFieldIsBlank()
    {
    //    logIn.assertErrorMessages();
    }
}

