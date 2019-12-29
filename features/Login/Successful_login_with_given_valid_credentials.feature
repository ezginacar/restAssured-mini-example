Feature: As a user, I'd like to log in with given valid credentials .So I can skip the following steps


  Scenario: Successful login with given valid credentials
    Given "content-type" information of the request headers is "application/x-www-form-urlencoded"
    And "cache-control" information of the request headers is "no-cache"
    When Enter valid "username" parameter as "ezgin" request body
    And Enter valid "password" parameter as "123456" request body
    And Send POST request to "/login.php" path
    Then "**Successful Login**" message should be visible
    And "**Failed Login**" message should not be visible



