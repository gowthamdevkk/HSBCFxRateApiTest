# HSBCFxRatesApiTest
This project is built with BDD standards using Cucumber and Rest Assured to test the exchange rates API functionality.

## Exception: 
Although the tests meet the acceptance criteria, where the rates were displayed based on D-1. 

There is a **missed requirement** on the impact to exchange rates on weekend and bank holidays, but on weekends and bank holidays it will be last working day (Friday) or Day-2 on a Sunday and Day-3 on a Monday. 
There is a possibility for having more scenarios, when the bank holiday is on a Friday or a Monday and the behaviours will need be analysed and detailed in the acceptance criteria. 

## Therefore, these exchange rate features are not recommended to be validated on a *Sunday or Monday*.

[Foreign currency exchange rates API](https://ratesapi.io/documentation/) with currency conversion was used to build 2 features based on acceptance criteria as 
- dateFXRates.feature
- latestFXRates.feature

## Test Execution (55 Tests):
### Ensure the Java Complier for the RestAssuredFrameword is set to 8 or above

Please use TestRunner to execute all the tests from features files along with various test execution report formats in "target" folder

### 3 date validation tests would fail when ran on a Sunday or Monday and this is expected behaviour based on current user story and acceptance criteria



## Out of Scope: 
- Exchange rates on **weekend and bank holidays**

