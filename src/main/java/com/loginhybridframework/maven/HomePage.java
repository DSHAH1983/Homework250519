package com.loginhybridframework.maven;


import org.junit.Assert;
import org.openqa.selenium.By;

public class HomePage extends Utils
{
    com.loginhybridframework.maven.LoadProp loadprop = new com.loginhybridframework.maven.LoadProp();


    private By _homePage = By.xpath("//div[@class='topic-block-title']/h2");
    private By _logIn = By.cssSelector("[class='ico-login']");
    private By _assertOflogOutLink = By.xpath("//a[contains(text(),'Log out')]");




    public void verifyUserOnHomePage()
    {
        Utils.assertTextMessage("Welcome to our store",_homePage);

    }

    public void clickAllCategories(String link)
    {
        Utils.clickElementBy(By.linkText(link));
    }

    public void clickLogInLink()
    {
        Utils.clickElementBy(_logIn);
    }

    public void verifyLogOutLinkOnHomePage()
    {
        Utils.textGet(_assertOflogOutLink);
    }
}