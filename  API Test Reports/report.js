$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login/POST_Login_Test.feature");
formatter.feature({
  "line": 1,
  "name": "POST login test request and verify response of given API with Rest Assured",
  "description": "",
  "id": "post-login-test-request-and-verify-response-of-given-api-with-rest-assured",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 11,
  "name": "Successful login with given valid credentials",
  "description": "",
  "id": "post-login-test-request-and-verify-response-of-given-api-with-rest-assured;successful-login-with-given-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@ez"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "\"content-type\" information of the request headers is \"application/x-www-form-urlencoded\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "\"cache-control\" information of the request headers is \"no-cache\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid \"username\" parameter as \"ezgin\" request body",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Enter valid \"password\" parameter as \"123456\" request body",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Send POST request to \"/login.php\" path",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "\"**Successful Login**\" message should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "\"**Failed Login**\" message should not be visible",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "content-type",
      "offset": 1
    },
    {
      "val": "application/x-www-form-urlencoded",
      "offset": 54
    }
  ],
  "location": "LoginTestSteps.header_enterance_with_given_key_and_value(String,String)"
});
formatter.result({
  "duration": 704615500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cache-control",
      "offset": 1
    },
    {
      "val": "no-cache",
      "offset": 55
    }
  ],
  "location": "LoginTestSteps.header_enterance_with_given_key_and_value(String,String)"
});
formatter.result({
  "duration": 1482300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    },
    {
      "val": "ezgin",
      "offset": 37
    }
  ],
  "location": "LoginTestSteps.add_key_and_value_on_the_request_body(String,String)"
});
formatter.result({
  "duration": 25233200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 37
    }
  ],
  "location": "LoginTestSteps.add_key_and_value_on_the_request_body(String,String)"
});
formatter.result({
  "duration": 274000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/login.php",
      "offset": 22
    }
  ],
  "location": "LoginTestSteps.send_post_request_to_given_path(String)"
});
formatter.result({
  "duration": 1645223600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "**Successful Login**",
      "offset": 1
    }
  ],
  "location": "LoginTestSteps.login_status_control(String)"
});
formatter.result({
  "duration": 434112700,
  "error_message": "java.lang.AssertionError: expected same:\u003c**Successful Login**\u003e was not:\u003c\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotSame(Assert.java:828)\r\n\tat org.junit.Assert.assertSame(Assert.java:771)\r\n\tat org.junit.Assert.assertSame(Assert.java:782)\r\n\tat stepDefinitions.LoginTestSteps.login_status_control(LoginTestSteps.java:57)\r\n\tat ✽.Then \"**Successful Login**\" message should be visible(Login/POST_Login_Test.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "**Failed Login**",
      "offset": 1
    }
  ],
  "location": "LoginTestSteps.test(String)"
});
formatter.result({
  "status": "skipped"
});
});