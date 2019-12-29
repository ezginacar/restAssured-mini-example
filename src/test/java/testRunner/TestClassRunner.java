package testRunner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "features",
        glue = "stepDefinitions",
        tags = {"@ez"},
        plugin = {"pretty", "html: API Test Reports"}

)
public class TestClassRunner {
}
