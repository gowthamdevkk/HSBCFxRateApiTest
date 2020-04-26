Feature: Latest Exchange Rates
  As a User
  I want to be able to covers different scenarios for Latest Foreign Exchange rates API
  So that I can make sure that the API is fit for purpose in the use of the exchange rate for financial reasons

  @Regression @Smoke
  Scenario: Validate API availability
    Given I have access to Foreign Exchange rates api
    When I append "latest" at the end of Exchange rates Base API
    Then I should see the HTTP response code as 200

  @Regression @Smoke
  Scenario: Validate invalid API response payload
    Given I have access to Foreign Exchange rates api
    When I append "latest" at the end of Exchange rates Base API
    Then I should see the "base" rate as "EUR"
    And I should see the default date as yesterday
    And I should see GBP as one of the exchange rate

  @Regression
  Scenario: Validate the default base rate is Euro
    Given I have access to Foreign Exchange rates api
    When I append "latest" at the end of Exchange rates Base API
    Then I should see the "base" rate as "EUR"

  Scenario Outline: Validate the default base rate can be changed to any other currencies
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with "base" as "<currency>"
    Then I should see the "base" rate as "<currency>"

    Examples:
      |currency  |
      |IDR       |
      |ZAR       |
      |TRY       |

  Scenario Outline: Validate specific currency rates
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with "symbols" as "<symbols>"
    Then I should see the exchange rate based on the <symbols>

    Examples:
      |symbols     |
      |USD,USD     |
      |USD,GBP     |
      |RON,DKK,INR |

  @Regression @Smoke
  Scenario Outline: Validate specific currency rate to a base rate
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with base "<currency>" and symbols "<symbols>"
    Then I should see the "base" rate as "<currency>"
    And I should see the exchange rate based on the <symbols>

    Examples:
      | currency | symbols |
      | USD      | GBP     |
      | INR      | AUD     |
      | USD      | USD     |

  Scenario: Validate invalid API response
    Given I have access to Foreign Exchange rates api
    When I append "lates" at the end of Exchange rates Base API
    Then I should see the HTTP response code as 400

  @Regression
  Scenario Outline: Validate invalid base rate and exchange currencies
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with base "<currency>" and symbols "<symbols>"
    Then I should see the HTTP response code as 400

    Examples:
      | currency | symbols |
      | USd      | GBP     |
      | inr      | AUD     |
      | INR      | AOD     |
      | INR,GBP  | AUD     |

  Scenario: Validate the base rate is Euro for blank base rate
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with "base" as ""
    Then I should see the "base" rate as "EUR"

  Scenario: Validate the base rate is Euro for blank symbol
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with "symbols" as ""
    Then I should see the "base" rate as "EUR"

  @Regression
  Scenario: Validate the default base rate for blank symbol with valid base rate
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with base "INR" and symbols ""
    Then I should see the "base" rate as "INR"

  @Regression
  Scenario: Validate the base rate is Euro for blank base rate and symbol
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with base "" and symbols ""
    Then I should see the "base" rate as "EUR"

  @Regression
  Scenario: Validate the base rate is Euro for blank base rate with valid symbol
    Given I have access to Foreign Exchange rates api
    When I pass the "latest" information to the FX api along with base "" and symbols "CAD"
    Then I should see the "base" rate as "EUR"