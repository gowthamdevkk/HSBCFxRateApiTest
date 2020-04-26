package helper;

import com.google.gson.JsonObject;

/**
 * This is an encapsulated class withholds attribute tags with in the response body
 */

public class ApiResponse {

    /**
     * Declaring Variables
     */
    private String Date;
    private String Base;
    private JsonObject Rates;

    public void setDate(String date){this.Date=date;}
    public void setBase(String base){this.Base=base;}
    public void setRates(JsonObject rate){this.Rates=rate;}

    public String getDate(){return this.Date;}
    public String getBase(){return this.Base;}
    public JsonObject getRates(){return this.Rates;}

}
