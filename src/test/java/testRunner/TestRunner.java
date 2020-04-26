package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features="src//test//resources//features",
		glue= "stepDefinitions",
		monochrome = true,
		plugin = {
				"pretty",
				"pretty:target/cucumber-reports/cucumber-pretty.txt",
				"json:target/cucumber-reports/CucumberTestReport.json",
				"html:target/cucumber-reports/cucumber-html-report",
				"usage:target/cucumber-reports/cucumber-usage.json",
				"junit:target/cucumber-reports/cucumber-results.xml",
				"rerun:target/cucumber-reports/rerun.txt"
		})
public class TestRunner {

}
