package com.loginhybridframework.maven;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".", tags = "@login",
format = {"pretty","html:target/cucumber-options"})

public class RunTest
{

}
