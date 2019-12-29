Feature: unsuccessful login with given unvalif values

  Scenario: Successful login with given valid credentials
    Given "content-type" information of the request headers is "application/x-www-form-urlencoded"
    And "cache-control" information of the request headers is "no-cache"
    When Enter valid "username" parameter as "e343zgin" request body
    And Enter valid "password" parameter as "12334553456" request body
    And Send POST request to "/login.php" path
    Then "**Failed Login**" message should be visible
    And "**Successful Login**" message should not be visible