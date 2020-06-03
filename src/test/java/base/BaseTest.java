package base;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class BaseTest {

    private static String mainUrl = "http://thedemosite.co.uk";

    protected static RequestSpecification request;
    protected static Response response;

    public void init(){

        RestAssured.baseURI = mainUrl;

    }
}
