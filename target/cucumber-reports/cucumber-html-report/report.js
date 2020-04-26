$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/dateFXRates.feature");
formatter.feature({
  "name": "Date Exchange Rates",
  "description": "  As a User\n  I want to be able to covers different scenarios with specific Dates on Exchange Rates API\n  So that I can make sure that the API is fit for purpose in the use of the exchange rate for financial reasons",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the default date",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"latest\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the default date as yesterday",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheDefaultDateAsYesterday()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c\"2020-04-2[5]\"\u003e but was:\u003c\"2020-04-2[4]\"\u003e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat stepDefinitions.RatesSteps.iShouldSeeTheDateAsInTheResponse(RatesSteps.java:53)\n\tat stepDefinitions.RatesSteps.iShouldSeeTheDefaultDateAsYesterday(RatesSteps.java:79)\n\tat ✽.I should see the default date as yesterday(src/test/resources/features/dateFXRates.feature:10)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate historic exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"\u003cdate\u003e\" information to the FX api along with \"symbols\" as \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the \"\u003csymbols\u003e\" and exchange rate as \u003cexchangeRate\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "date",
        "symbols",
        "exchangeRate"
      ]
    },
    {
      "cells": [
        "2010-01-12",
        "USD",
        "1.4481"
      ]
    },
    {
      "cells": [
        "2000-01-01",
        "SIT",
        "198.9055"
      ]
    },
    {
      "cells": [
        "1999-01-04",
        "KRW",
        "1398.59"
      ]
    },
    {
      "cells": [
        "2020-01-04",
        "PHP",
        "56.983"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate historic exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"symbols\" as \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"USD\" and exchange rate as 1.4481",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheAndExchangeRateAs(String,Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate historic exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2000-01-01\" information to the FX api along with \"symbols\" as \"SIT\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"SIT\" and exchange rate as 198.9055",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheAndExchangeRateAs(String,Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate historic exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"1999-01-04\" information to the FX api along with \"symbols\" as \"KRW\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"KRW\" and exchange rate as 1398.59",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheAndExchangeRateAs(String,Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate historic exchange rates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2020-01-04\" information to the FX api along with \"symbols\" as \"PHP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"PHP\" and exchange rate as 56.983",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheAndExchangeRateAs(String,Double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate future and valid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I append \"\u003cdate\u003e\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.step({
  "name": "I should see valid date in the response",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "date"
      ]
    },
    {
      "cells": [
        "2010-01-12"
      ]
    },
    {
      "cells": [
        "2050-01-12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate future and valid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"2010-01-12\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see valid date in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeValidDateInTheResponse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate future and valid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"2050-01-12\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see valid date in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeValidDateInTheResponse()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c\"2020-04-2[5]\"\u003e but was:\u003c\"2020-04-2[4]\"\u003e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat stepDefinitions.RatesSteps.iShouldSeeTheDateAsInTheResponse(RatesSteps.java:53)\n\tat stepDefinitions.RatesSteps.iShouldSeeValidDateInTheResponse(RatesSteps.java:66)\n\tat ✽.I should see valid date in the response(src/test/resources/features/dateFXRates.feature:29)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I append \"\u003cdate\u003e\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "date"
      ]
    },
    {
      "cells": [
        "1999-01-03"
      ]
    },
    {
      "cells": [
        "2020-01-"
      ]
    },
    {
      "cells": [
        "2020-13-12"
      ]
    },
    {
      "cells": [
        "2018-12-32"
      ]
    },
    {
      "cells": [
        "20-12-12"
      ]
    },
    {
      "cells": [
        "19990101"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"1999-01-03\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"2020-01-\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"2020-13-12\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"2018-12-32\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"20-12-12\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the past and invalid dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"19990101\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the default base rate can be changed to any other currency",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"base\" as \"\u003ccurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the \"base\" rate as \"\u003ccurrency\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see the date as 2010-01-12 in the response",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency"
      ]
    },
    {
      "cells": [
        "IDR"
      ]
    },
    {
      "cells": [
        "ZAR"
      ]
    },
    {
      "cells": [
        "TRY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the default base rate can be changed to any other currency",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"base\" as \"IDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"IDR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the date as 2010-01-12 in the response",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheDateAsInTheResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the default base rate can be changed to any other currency",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"base\" as \"ZAR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"ZAR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the date as 2010-01-12 in the response",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheDateAsInTheResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the default base rate can be changed to any other currency",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"base\" as \"TRY\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"TRY\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the date as 2010-01-12 in the response",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheDateAsInTheResponse(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"2020-04-25\" information to the FX api along with \"symbols\" as \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the exchange rate based on the \u003csymbols\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "symbols"
      ]
    },
    {
      "cells": [
        "USD,USD"
      ]
    },
    {
      "cells": [
        "USD,GBP"
      ]
    },
    {
      "cells": [
        "RON,DKK,INR"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2020-04-25\" information to the FX api along with \"symbols\" as \"USD,USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the USD,USD",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2020-04-25\" information to the FX api along with \"symbols\" as \"USD,GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the USD,GBP",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2020-04-25\" information to the FX api along with \"symbols\" as \"RON,DKK,INR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the RON,DKK,INR",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate specific exchange rates by setting the symbols \u0026 base parameter with specific date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"2019-01-12\" information to the FX api along with base \"\u003ccurrency\u003e\" and symbols \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the \"base\" rate as \"\u003ccurrency\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see the exchange rate based on the \u003csymbols\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency",
        "symbols"
      ]
    },
    {
      "cells": [
        "IDR",
        "IDR"
      ]
    },
    {
      "cells": [
        "CAD",
        "RON,DKK"
      ]
    },
    {
      "cells": [
        "USD",
        "GBP"
      ]
    },
    {
      "cells": [
        "INR",
        "AUD"
      ]
    },
    {
      "cells": [
        "USD",
        "USD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate specific exchange rates by setting the symbols \u0026 base parameter with specific date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2019-01-12\" information to the FX api along with base \"IDR\" and symbols \"IDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"IDR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the IDR",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific exchange rates by setting the symbols \u0026 base parameter with specific date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2019-01-12\" information to the FX api along with base \"CAD\" and symbols \"RON,DKK\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"CAD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the RON,DKK",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific exchange rates by setting the symbols \u0026 base parameter with specific date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2019-01-12\" information to the FX api along with base \"USD\" and symbols \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"USD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the GBP",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific exchange rates by setting the symbols \u0026 base parameter with specific date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2019-01-12\" information to the FX api along with base \"INR\" and symbols \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"INR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the AUD",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific exchange rates by setting the symbols \u0026 base parameter with specific date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2019-01-12\" information to the FX api along with base \"USD\" and symbols \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"USD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the USD",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"\u003ccurrency\u003e\" and symbols \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency",
        "symbols"
      ]
    },
    {
      "cells": [
        "USd",
        "GBP"
      ]
    },
    {
      "cells": [
        "inr",
        "AUD"
      ]
    },
    {
      "cells": [
        "INR",
        "AOD"
      ]
    },
    {
      "cells": [
        "INR,GBP",
        "AUD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"USd\" and symbols \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"inr\" and symbols \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"INR\" and symbols \"AOD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"INR,GBP\" and symbols \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank base rate",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"base\" as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank symbol",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with \"symbols\" as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the default base rate for blank symbol with valid base rate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"INR\" and symbols \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"INR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank base rate and symbol",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"\" and symbols \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank base rate with valid symbol",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"2010-01-12\" information to the FX api along with base \"\" and symbols \"CAD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/latestFXRates.feature");
formatter.feature({
  "name": "Latest Exchange Rates",
  "description": "  As a User\n  I want to be able to covers different scenarios for Latest Foreign Exchange rates API\n  So that I can make sure that the API is fit for purpose in the use of the exchange rate for financial reasons",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate API availability",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"latest\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid API response payload",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"latest\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the default date as yesterday",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheDefaultDateAsYesterday()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c\"2020-04-2[5]\"\u003e but was:\u003c\"2020-04-2[4]\"\u003e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat stepDefinitions.RatesSteps.iShouldSeeTheDateAsInTheResponse(RatesSteps.java:53)\n\tat stepDefinitions.RatesSteps.iShouldSeeTheDefaultDateAsYesterday(RatesSteps.java:79)\n\tat ✽.I should see the default date as yesterday(src/test/resources/features/latestFXRates.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see GBP as one of the exchange rate",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate the default base rate is Euro",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"latest\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the default base rate can be changed to any other currencies",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"base\" as \"\u003ccurrency\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the \"base\" rate as \"\u003ccurrency\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency"
      ]
    },
    {
      "cells": [
        "IDR"
      ]
    },
    {
      "cells": [
        "ZAR"
      ]
    },
    {
      "cells": [
        "TRY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the default base rate can be changed to any other currencies",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"base\" as \"IDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"IDR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the default base rate can be changed to any other currencies",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"base\" as \"ZAR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"ZAR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the default base rate can be changed to any other currencies",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"base\" as \"TRY\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"TRY\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"symbols\" as \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the exchange rate based on the \u003csymbols\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "symbols"
      ]
    },
    {
      "cells": [
        "USD,USD"
      ]
    },
    {
      "cells": [
        "USD,GBP"
      ]
    },
    {
      "cells": [
        "RON,DKK,INR"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"symbols\" as \"USD,USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the USD,USD",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"symbols\" as \"USD,GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the USD,GBP",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific currency rates",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"symbols\" as \"RON,DKK,INR\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the RON,DKK,INR",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate specific currency rate to a base rate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"\u003ccurrency\u003e\" and symbols \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the \"base\" rate as \"\u003ccurrency\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see the exchange rate based on the \u003csymbols\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency",
        "symbols"
      ]
    },
    {
      "cells": [
        "USD",
        "GBP"
      ]
    },
    {
      "cells": [
        "INR",
        "AUD"
      ]
    },
    {
      "cells": [
        "USD",
        "USD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate specific currency rate to a base rate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"USD\" and symbols \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"USD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the GBP",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific currency rate to a base rate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"INR\" and symbols \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"INR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the AUD",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate specific currency rate to a base rate",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"USD\" and symbols \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"USD\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the exchange rate based on the USD",
  "keyword": "And "
});
formatter.match({
  "location": "RatesSteps.IShouldSeeTheExchangeRateBasedOnThe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid API response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I append \"lates\" at the end of Exchange rates Base API",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iAppendAtTheEndOfExchangeRatesBaseAPI(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"\u003ccurrency\u003e\" and symbols \"\u003csymbols\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "currency",
        "symbols"
      ]
    },
    {
      "cells": [
        "USd",
        "GBP"
      ]
    },
    {
      "cells": [
        "inr",
        "AUD"
      ]
    },
    {
      "cells": [
        "INR",
        "AOD"
      ]
    },
    {
      "cells": [
        "INR,GBP",
        "AUD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"USd\" and symbols \"GBP\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"inr\" and symbols \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"INR\" and symbols \"AOD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid base rate and exchange currencies",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"INR,GBP\" and symbols \"AUD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the HTTP response code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.I_should_see_the_HTTP_response_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank base rate",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"base\" as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank symbol",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with \"symbols\" as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithAs(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the default base rate for blank symbol with valid base rate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"INR\" and symbols \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"INR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank base rate and symbol",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"\" and symbols \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the base rate is Euro for blank base rate with valid symbol",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I have access to Foreign Exchange rates api",
  "keyword": "Given "
});
formatter.match({
  "location": "RatesSteps.iHaveAccessToForeignExchangeRatesApi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the \"latest\" information to the FX api along with base \"\" and symbols \"CAD\"",
  "keyword": "When "
});
formatter.match({
  "location": "RatesSteps.iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the \"base\" rate as \"EUR\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RatesSteps.iShouldSeeTheBaseRateAs(String,String)"
});
formatter.result({
  "status": "passed"
});
});