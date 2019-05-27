$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Feature/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user  should see \u0027Please enter your email\u0027 if email field is blank",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 17,
      "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "1983dhar@gmail.com",
        "Monika12"
      ],
      "line": 18,
      "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "",
        "Monika12"
      ],
      "line": 19,
      "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "1983dhara@gmail.com",
        ""
      ],
      "line": 20,
      "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 21,
      "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;5"
    },
    {
      "cells": [
        "1983dhara@gmail.com",
        "Monika1"
      ],
      "line": 22,
      "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25096846830,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 603197670,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "duration": 1255867446,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"1983dhar@gmail.com\" and \"Monika12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user  should see \u0027Please enter your email\u0027 if email field is blank",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1983dhar@gmail.com",
      "offset": 13
    },
    {
      "val": "Monika12",
      "offset": 38
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 215757802,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "duration": 1215727424,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeErrorMessage()"
});
formatter.result({
  "duration": 136407189,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeePleaseEnterYourEmailIfEmailFieldIsBlank()"
});
formatter.result({
  "duration": 29147,
  "status": "passed"
});
formatter.after({
  "duration": 864037411,
  "status": "passed"
});
formatter.before({
  "duration": 11783998755,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 47272505,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "duration": 1381884217,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"\" and \"Monika12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user  should see \u0027Please enter your email\u0027 if email field is blank",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "Monika12",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 150126155,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "duration": 108446659,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeErrorMessage()"
});
formatter.result({
  "duration": 10083583138,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeePleaseEnterYourEmailIfEmailFieldIsBlank()"
});
formatter.result({
  "duration": 31610,
  "status": "passed"
});
formatter.after({
  "duration": 791709670,
  "status": "passed"
});
formatter.before({
  "duration": 6211686204,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 58327566,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "duration": 1312381717,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"1983dhara@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user  should see \u0027Please enter your email\u0027 if email field is blank",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1983dhara@gmail.com",
      "offset": 13
    },
    {
      "val": "",
      "offset": 39
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 174437517,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "duration": 1178952485,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeErrorMessage()"
});
formatter.result({
  "duration": 111051037,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeePleaseEnterYourEmailIfEmailFieldIsBlank()"
});
formatter.result({
  "duration": 30379,
  "status": "passed"
});
formatter.after({
  "duration": 754055794,
  "status": "passed"
});
formatter.before({
  "duration": 6680727190,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 58966344,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "duration": 1720731328,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user  should see \u0027Please enter your email\u0027 if email field is blank",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 118689698,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "duration": 92400010,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeErrorMessage()"
});
formatter.result({
  "duration": 10106946597,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeePleaseEnterYourEmailIfEmailFieldIsBlank()"
});
formatter.result({
  "duration": 24221,
  "status": "passed"
});
formatter.after({
  "duration": 1070650331,
  "status": "passed"
});
formatter.before({
  "duration": 6653747406,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 54149641,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "duration": 1333146955,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should not be able to login with invalid credentials",
  "description": "",
  "id": "login;user-should-not-be-able-to-login-with-invalid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user enters \"1983dhara@gmail.com\" and \"Monika1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should see error message",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user  should see \u0027Please enter your email\u0027 if email field is blank",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1983dhara@gmail.com",
      "offset": 13
    },
    {
      "val": "Monika1",
      "offset": 39
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 208934857,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "duration": 1146396524,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeErrorMessage()"
});
formatter.result({
  "duration": 119816593,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeePleaseEnterYourEmailIfEmailFieldIsBlank()"
});
formatter.result({
  "duration": 31611,
  "status": "passed"
});
formatter.after({
  "duration": 879331154,
  "status": "passed"
});
formatter.before({
  "duration": 8228668852,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 51802251,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogin()"
});
formatter.result({
  "duration": 1243788944,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "login;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user enters \u0027Email\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters \u0027Password\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user clicks on Log in button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user should see \u0027Logout\u0027 link on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userEntersEmail()"
});
formatter.result({
  "duration": 115192836,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersPassword()"
});
formatter.result({
  "duration": 82581044,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnLogInButton()"
});
formatter.result({
  "duration": 1563133185,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeLogoutLinkOnHomepage()"
});
formatter.result({
  "duration": 51414304,
  "status": "passed"
});
formatter.after({
  "duration": 780041283,
  "status": "passed"
});
});