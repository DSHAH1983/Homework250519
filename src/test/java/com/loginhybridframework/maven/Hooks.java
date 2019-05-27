package com.loginhybridframework.maven;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends Utils
{
    BrowserSelector browserSelector = new BrowserSelector();


    @Before
    public void setUpBrowser()
    {
        browserSelector.setUpBrowser();
        driver.get("https://demo.nopcommerce.com/");
    }

    @After
    public void closeBrowser(Scenario scenario)
    {
      if(scenario.isFailed())
      {
          Utils.screenShotCucumber(scenario);
      }

      driver.quit();
    }
}
