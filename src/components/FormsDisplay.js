import React from "react";

const FormsDisplay = (props) => {
  const {
    formsDisplay,
    city,
    country,
    lat,
    long,
    handleChange,
    posCurrentSubmit,
    posForecastSubmit,
    cityCurrentSubmit,
    cityForecastSubmit,
    coordsCurrentSubmit,
    coordsForecastSubmit,
  } = props;
  return (
    <div className="forms" style={{ display: formsDisplay }}>
      <div className="forms-title">EveryWeather</div>
      <div className="forms-desc">Get weather data for any place!</div>
      <div className="position-form">
        <form>
          <label>For your current position</label>
          <div className="submit-buttons">
            <button
              onClick={posCurrentSubmit}
              className="current-weather-button"
            >
              Get <b>current weather</b>
            </button>
            <button
              onClick={posForecastSubmit}
              className="forecast-weather-button"
            >
              Get <b>seven day forecast</b>{" "}
            </button>
          </div>
        </form>
      </div>
      <h1 className="or">OR</h1>
      <div className="city-form">
        <form>
          <label>Search by the name of a place:</label>
          <div className="city-country-inputs">
              <input
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
                placeholder="City"
                required
              />
              <input
                type="text"
                list="country"
                value={country}
                name="country"
                onChange={handleChange}
                placeholder="Country*"
              />
              <datalist id="country">
                <option value="">Country*</option>
                <option>Australia</option>
                <option>Brazil</option>
                <option>China</option>
                <option>France</option>
                <option>Germany</option>
                <option>Japan</option>
                <option>Poland</option>
                <option>Russia</option>
                <option>Spain</option>
                <option>United Kingdom</option>
                <option>United States</option>
              </datalist>
          </div>
          <p>
            *You may specify a country to help narrow the results, though it's
            not required.
          </p>
          <div className="submit-buttons">
            <button
              onClick={cityCurrentSubmit}
              className="current-weather-button"
            >
              Get current weather
            </button>
            <button
              onClick={cityForecastSubmit}
              className="forecast-weather-button"
            >
              Get seven day forecast
            </button>
          </div>
        </form>
      </div>
      <h1 className="or">OR</h1>

      <div className="lat-long-form">
        <form>
          <label>Enter latitude:</label>
          <input
            type="number"
            step="0.001"
            name="lat"
            value={lat}
            onChange={handleChange}
            required
          />
          <label>Enter longitude:</label>
          <input
            type="number"
            step="0.001"
            name="long"
            value={long}
            onChange={handleChange}
            required
          />
          <div className="submit-buttons">
            <button
              onClick={coordsCurrentSubmit}
              className="current-weather-button"
            >
              Get current weather
            </button>
            <button
              onClick={coordsForecastSubmit}
              className="forecast-weather-button"
            >
              Get seven day forecast
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormsDisplay;