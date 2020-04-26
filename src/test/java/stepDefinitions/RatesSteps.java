package stepDefinitions;
import cucumber.api.java.en.And;
import helper.ApiResponse;
import helper.Helper;
import com.google.gson.JsonObject;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import java.text.ParseException;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static org.assertj.core.api.Assertions.*;

public class RatesSteps {

	/**
	 * Declaring Variables
	 */
	RestAssured baseObj;
	RequestSpecification requestSpec;
	Response response;
	JsonObject rates;
	String UserApiMode;
	static ApiResponse apiResponse;

	@Given("^I have access to Foreign Exchange rates api$")
	public void iHaveAccessToForeignExchangeRatesApi() throws Throwable {
		baseObj.baseURI = new Helper().BaseUrl;
		requestSpec = baseObj.given();
	}

	@When("I append {string} at the end of Exchange rates Base API")
	public void iAppendAtTheEndOfExchangeRatesBaseAPI(String apiMode) {
		UserApiMode = apiMode;
		response = requestSpec.request(Method.GET, apiMode);
		apiResponse = Helper.get_reponse(response);
	}

	@Then("^I should see the HTTP response code as (.*)$")
	public void I_should_see_the_HTTP_response_code_as(int responseCode) throws Throwable {
		assertThat(responseCode).isEqualTo(response.getStatusCode());
	}

	@Then("I should see the {string} and exchange rate as {double}")
	public void iShouldSeeTheAndExchangeRateAs(String currency, Double exchangeRate) {
		assertThat(apiResponse.getRates().get(currency).toString()).isEqualTo(String.valueOf(exchangeRate));
	}

	@Then("I should see the date as (.*) in the response")
	public void iShouldSeeTheDateAsInTheResponse(String dateParameter) {
		assertThat(apiResponse.getDate()).isEqualTo(dateParameter);
	}

	@When("I pass the {string} information to the FX api along with {string} as {string}")
	public void iPassTheInformationToTheFXApiAlongWithAs(String apiMode, String apiTag, String apiValue) {
		requestSpec.param(apiTag, apiValue);
		response = requestSpec.request(Method.GET, apiMode);
		apiResponse = Helper.get_reponse(response);
	}

	@Then("I should see valid date in the response")
	public void iShouldSeeValidDateInTheResponse()throws ParseException {
		String expectedDateResponse = Helper.get_expected_date(UserApiMode);
		iShouldSeeTheDateAsInTheResponse(expectedDateResponse);// Reusing the same function to avoid redundancy
	}

	@When("I pass the {string} information to the FX api along with base {string} and symbols {string}")
	public void iPassTheInformationToTheFXApiAlongWithBaseAndSymbols(String apiMode, String baseParameter, String symbolParameter) {
		requestSpec.param("base", baseParameter);
		requestSpec.param("symbols", symbolParameter);
		response = requestSpec.request(Method.GET, apiMode);
		apiResponse = Helper.get_reponse(response);
	}

	@Then("I should see the default date as yesterday")
	public void iShouldSeeTheDefaultDateAsYesterday() {
		iShouldSeeTheDateAsInTheResponse(Helper.yesterday());// Reusing the same function to avoid redundancy
	}

	@Then("I should see the {string} rate as {string}")
	public void iShouldSeeTheBaseRateAs(String apiTag, String apiValue) {
		assertThat(apiValue).isEqualTo(apiResponse.getBase());
	}

	@Then("I should see the exchange rate based on the (.*)")
	@And("I should see (.*) as one of the exchange rate")
	public void IShouldSeeTheExchangeRateBasedOnThe(String symbolParameter) {
		rates = apiResponse.getRates();
		String[] arrSplit = symbolParameter.split(",");
		for (int i=0; i < arrSplit.length; i++)
		{
			assertThat(rates.has(arrSplit[i])).isTrue();
		}
	}
}