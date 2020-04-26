Feature: Date Exchange Rates
  As a User
  I want to be able to covers different scenarios with specific Dates on Exchange Rates API
  So that I can make sure that the API is fit for purpose in the use of the exchange rate for financial reasons

  @Regression @Smoke
  Scenario: Validate the default date
    Given I have access to Foreign Exchange rates api
    When I append "latest" at the end of Exchange rates Base API
    Then I should see the default date as yesterday

  @Regression @Smoke
  Scenario Outline: Validate historic exchange rates
    Given I have access to Foreign Exchange rates api
    When I pass the "<date>" information to the FX api along with "symbols" as "<symbols>"
    Then I should see the "<symbols>" and exchange rate as <exchangeRate>

    Examples:
      |date        |symbols | exchangeRate |
      |2010-01-12  |USD     | 1.4481       |
      |2000-01-01  |SIT     | 198.9055     |
      |1999-01-04  |KRW     | 1398.59      |
      |2020-01-04  |PHP     | 56.983       |

  @Regression @Smoke
  Scenario Outline: Validate future and valid dates
    Given I have access to Foreign Exchange rates api
    When I append "<date>" at the end of Exchange rates Base API
    Then I should see valid date in the response

    Examples:
      |date        |
      |2010-01-12  |
      |2050-01-12  |

  @Regression
  Scenario Outline: Validate the past and invalid dates
    Given I have access to Foreign Exchange rates api
    When I append "<date>" at the end of Exchange rates Base API
    Then I should see the HTTP response code as 400

    Examples:
      |date        |
      |1999-01-03  |
      |2020-01-    |
      |2020-13-12  |
      |2018-12-32  |
      |20-12-12    |
      |19990101    |

  Scenario Outline: Validate the default base rate can be changed to any other currency
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with "base" as "<currency>"
    Then I should see the "base" rate as "<currency>"
    And I should see the date as 2010-01-12 in the response

    Examples:
      |currency  |
      |IDR       |
      |ZAR       |
      |TRY       |

  Scenario Outline: Validate specific currency rates
    Given I have access to Foreign Exchange rates api
    When I pass the "2020-04-25" information to the FX api along with "symbols" as "<symbols>"
    Then I should see the exchange rate based on the <symbols>

    Examples:
      |symbols     |
      |USD,USD     |
      |USD,GBP     |
      |RON,DKK,INR |

  @Regression @Smoke
  Scenario Outline: Validate specific exchange rates by setting the symbols & base parameter with specific date
    Given I have access to Foreign Exchange rates api
    When I pass the "2019-01-12" information to the FX api along with base "<currency>" and symbols "<symbols>"
    Then I should see the "base" rate as "<currency>"
    And I should see the exchange rate based on the <symbols>

    Examples:
      | currency | symbols |
      | IDR      | IDR     |
      | CAD      | RON,DKK |
      | USD      | GBP     |
      | INR      | AUD     |
      | USD      | USD     |

  @Regression
  Scenario Outline: Validate invalid base rate and exchange currencies
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with base "<currency>" and symbols "<symbols>"
    Then I should see the HTTP response code as 400

    Examples:
      | currency | symbols |
      | USd      | GBP     |
      | inr      | AUD     |
      | INR      | AOD     |
      | INR,GBP  | AUD     |

  Scenario: Validate the base rate is Euro for blank base rate
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with "base" as ""
    Then I should see the "base" rate as "EUR"

  Scenario: Validate the base rate is Euro for blank symbol
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with "symbols" as ""
    Then I should see the "base" rate as "EUR"

  @Regression
  Scenario: Validate the default base rate for blank symbol with valid base rate
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with base "INR" and symbols ""
    Then I should see the "base" rate as "INR"

  @Regression
  Scenario: Validate the base rate is Euro for blank base rate and symbol
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with base "" and symbols ""
    Then I should see the "base" rate as "EUR"

  @Regression
  Scenario: Validate the base rate is Euro for blank base rate with valid symbol
    Given I have access to Foreign Exchange rates api
    When I pass the "2010-01-12" information to the FX api along with base "" and symbols "CAD"
    Then I should see the "base" rate as "EUR"