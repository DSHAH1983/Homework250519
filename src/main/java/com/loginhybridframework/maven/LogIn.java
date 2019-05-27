package com.loginhybridframework.maven;

import org.openqa.selenium.By;

public class LogIn extends Utils
{
    LoadProp loadProp = new LoadProp();

    private By _email = By.id("Email");
    private By _password = By.id("Password");
    private By _logInButton = By.cssSelector("[value='Log in']");
    private By _assertErrorMessage = By.cssSelector("[class='message-error validation-summary-errors']");
    private By _assertEmailError = By.cssSelector("[class='field-validation-error']");
    private By _errorMessageSecond = By.cssSelector("[class='message-error validation-summary-errors']>ul>li");



    public void userSouldNotBeAbleToLogIn(String email,String password) {
        Utils.enterText(_email, (email));
        Utils.enterText(_password, (password));
    }

    public void userEntersEmailToLogin() {
        Utils.enterText(_email, loadProp.getProperty("Email"));

    }

    public void userEntersPasswordToLogin()
    {
        Utils.enterText(_password, loadProp.getProperty("Password"));
    }

    public void clickLogInButton()
    {
        Utils.clickElementBy(_logInButton);
    }

    public String getTextFromErrorMessage(){
        String errorMessage = driver.findElement(_errorMessageSecond).getText();
       return errorMessage;
   }

    public void assertErrorMessages(){
        Boolean isPresent = driver.findElements(_errorMessageSecond).size()>0;
        if (isPresent) {
            if (getTextFromErrorMessage().equals("No customer account found")) {
                Utils.assertTextMessage("Login was unsuccessful. Please correct the errors and try again.\nNo customer account found", _assertErrorMessage);

            } else if (getTextFromErrorMessage().equals("The credentials provided are incorrect")) {
                Utils.assertTextMessage("Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect", _assertErrorMessage);
            }
        }
        else {
            Utils.assertTextMessage("Please enter your email",_assertEmailError);
        }

    }

}
