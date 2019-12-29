package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;

import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

import static io.restassured.RestAssured.given;
public class LoginTestSteps {

    public String url= "http://thedemosite.co.uk";
    private String path="/login.php";
    private RequestSpecification request;
    private Response response;



    @Given("^\"(.*?)\" information of the request headers is \"(.*?)\"$")
    public void header_enterance_with_given_key_and_value(String key, String value){
        RestAssured.baseURI  = url;
        request = given().header(key,value);
    }

    @When("^Send POST request to \"(.*?)\" path$")
    public void send_post_request_to_given_path(String path){
        response = request.post(path);
    }

    @Then("^The status code should view as 200")
    public void status_code_assertion(){
        int statusCode = response.getStatusCode();
        Assert.assertEquals(200, statusCode);
    }

    @When("^Enter valid \"(.*?)\" parameter as \"(.*?)\" request body$")
    public void add_key_and_value_on_the_request_body(String key, String value) {
       this.request = request.given().param(key, value);
    }
    
    @Then("^User should view response type as \"(.*?)\"$")
    public void view_the_response(String arg){
        String responseType =response.getContentType().toUpperCase();
        if(!responseType.contains(arg)){
            Assert.assertSame(arg, responseType);
        }
    }

    @Then("^\"(.*?)\" message should be visible$")
    public void login_status_control(String arg) {
      String msg = response.htmlPath().getString("html.body.table.tr.td.blockquote");

      if(!(msg.contains(arg))) {
          Assert.assertSame(arg, msg);
      }

    }
    @Then("^\"(.*?)\" message should not be visible$")
    public void test(String arg) {
        String msg = response.htmlPath().getString("html.body.table.tr.td.blockquote");
        if (!(msg.contains(arg))) {
            Assert.assertNotSame(arg, msg);
        }
    }






}
