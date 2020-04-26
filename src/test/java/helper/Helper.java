package helper;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import io.restassured.http.Method;
import io.restassured.response.Response;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


import static org.assertj.core.api.Assertions.assertThat;

public class Helper {

    /**
     * Declaring base url
     */
    public static String BaseUrl = "https://api.ratesapi.io/api/";

    /**
     * This method can will today -1 date in YYYY-MM-DD format
     */
    public static String yesterday() {

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        // Create a calendar object with today date. Calendar is in java.util pakage.
        Calendar calendar = Calendar.getInstance();

        // Move calendar to yesterday
        calendar.add(Calendar.DATE, -1);

        // Get current date of calendar which point to the yesterday now
        Date yesterday = calendar.getTime();

        return dateFormat.format(yesterday).toString();
    }

    /**
     * This method can will return data based on the api request
     * @param userApiMode
     */
    public static String get_expected_date(String userApiMode) throws ParseException {

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date dateobj = new Date();

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date userDate = sdf.parse(userApiMode);

        if(dateobj.compareTo(userDate)>0)
        {
            return userApiMode;

        }else{

            return yesterday();
        }
    }

    /**
     * Declaring variables for assertions
     */
    public enum responseParameter{
        base,
        rates,
        date
    }

    /**
     * This method can will return API response along with attribute tags with in the response body
     * @param apiResponse
     */
    public static ApiResponse get_reponse(Response apiResponse){
        if (apiResponse.getStatusCode() == 200) {
            JsonParser parser = new JsonParser();
            JsonObject jsonObject = parser.parse(apiResponse.getBody().asString()).getAsJsonObject();

            ApiResponse response = new ApiResponse();
            response.setBase(jsonObject.get(responseParameter.base.toString()).getAsString());
            response.setDate(jsonObject.get(responseParameter.date.toString()).getAsString());
            response.setRates(jsonObject.get(responseParameter.rates.toString()).getAsJsonObject());

            return response;
        }
        else {
            return null;
        }
    }
}
