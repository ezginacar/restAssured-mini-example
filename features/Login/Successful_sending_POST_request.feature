Feature: POST login test request and verify response of given API with Rest Assured
@test
  Scenario: Successfull POST request and verify response
    Given "content-type" information of the request headers is "application/x-www-form-urlencoded"
    And "cache-control" information of the request headers is "no-cache"
    When Send POST request to "/login.php" path
    Then The status code should view as 200
    And User should view response type as "HTML"

