const data = {
"consolidated_weather": [
{
"id": 4719202380283904,
"weather_state_name": "Showers",
"weather_state_abbr": "s",
"wind_direction_compass": "NE",
"created": "2017-04-17T17:22:05.326570Z",
"applicable_date": "2017-04-17",
"min_temp": 5.812857142857142,
"max_temp": 12.89857142857143,
"the_temp": 11.263333333333334,
"wind_speed": 6.572541600634011,
"wind_direction": 35.94772561583079,
"air_pressure": 1026.1950000000002,
"humidity": 63,
"visibility": 10.9914350194862,
"predictability": 73
},
{
"id": 4765921692352512,
"weather_state_name": "Light Cloud",
"weather_state_abbr": "lc",
"wind_direction_compass": "NNE",
"created": "2017-04-17T17:22:04.938980Z",
"applicable_date": "2017-04-18",
"min_temp": 3.7742857142857145,
"max_temp": 12.498571428571427,
"the_temp": 10.093333333333334,
"wind_speed": 10.045576133245845,
"wind_direction": 28.714237613717174,
"air_pressure": 1034.45,
"humidity": 54,
"visibility": 14.257672691481746,
"predictability": 70
},
{
"id": 6190510804828160,
"weather_state_name": "Light Cloud",
"weather_state_abbr": "lc",
"wind_direction_compass": "ENE",
"created": "2017-04-17T17:22:05.133500Z",
"applicable_date": "2017-04-19",
"min_temp": 2.9385714285714286,
"max_temp": 12.688571428571427,
"the_temp": 10.046666666666667,
"wind_speed": 5.26224778475077,
"wind_direction": 70.9254337104169,
"air_pressure": 1041.13,
"humidity": 52,
"visibility": 11.899258331344946,
"predictability": 70
},
{
"id": 5794921868951552,
"weather_state_name": "Heavy Cloud",
"weather_state_abbr": "hc",
"wind_direction_compass": "SW",
"created": "2017-04-17T17:22:04.535460Z",
"applicable_date": "2017-04-20",
"min_temp": 5.3028571428571425,
"max_temp": 15.48,
"the_temp": 12.863333333333335,
"wind_speed": 5.535434654133006,
"wind_direction": 232.38593230552718,
"air_pressure": 1038.975,
"humidity": 66,
"visibility": 12.332354052334367,
"predictability": 71
},
{
"id": 6006328111661056,
"weather_state_name": "Heavy Cloud",
"weather_state_abbr": "hc",
"wind_direction_compass": "WNW",
"created": "2017-04-17T17:22:06.840050Z",
"applicable_date": "2017-04-21",
"min_temp": 6.925714285714286,
"max_temp": 16.864285714285717,
"the_temp": 14.016666666666666,
"wind_speed": 7.2155086463169384,
"wind_direction": 289.05686541323996,
"air_pressure": 1033.0349999999999,
"humidity": 68,
"visibility": 12.076970492324822,
"predictability": 71
},
{
"id": 6224180664074240,
"weather_state_name": "Heavy Cloud",
"weather_state_abbr": "hc",
"wind_direction_compass": "N",
"created": "2017-04-17T17:22:08.030590Z",
"applicable_date": "2017-04-22",
"min_temp": 5.971666666666667,
"max_temp": 13.025,
"the_temp": 11.309999999999999,
"wind_speed": 8.53638908772767,
"wind_direction": 350.1675944142999,
"air_pressure": 1028.1,
"humidity": 64,
"visibility": 9.997862483098704,
"predictability": 71
}
],
"time": "2017-04-17T20:00:09.804710+01:00",
"sun_rise": "2017-04-17T06:00:21.340807+01:00",
"sun_set": "2017-04-17T20:00:49.373286+01:00",
"timezone_name": "LMT",
"parent": {
"title": "England",
"location_type": "Region / State / Province",
"woeid": 24554868,
"latt_long": "52.883560,-1.974060"
},
"sources": [
{
"title": "BBC",
"slug": "bbc",
"url": "http://www.bbc.co.uk/weather/",
"crawl_rate": 180
},
{
"title": "Forecast.io",
"slug": "forecast-io",
"url": "http://forecast.io/",
"crawl_rate": 480
},
{
"title": "HAMweather",
"slug": "hamweather",
"url": "http://www.hamweather.com/",
"crawl_rate": 360
},
{
"title": "Met Office",
"slug": "met-office",
"url": "http://www.metoffice.gov.uk/",
"crawl_rate": 180
},
{
"title": "OpenWeatherMap",
"slug": "openweathermap",
"url": "http://openweathermap.org/",
"crawl_rate": 360
},
{
"title": "Weather Underground",
"slug": "wunderground",
"url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
"crawl_rate": 720
},
{
"title": "World Weather Online",
"slug": "world-weather-online",
"url": "http://www.worldweatheronline.com/",
"crawl_rate": 360
},
{
"title": "Yahoo",
"slug": "yahoo",
"url": "http://weather.yahoo.com/",
"crawl_rate": 180
}
],
"title": "London",
"location_type": "City",
"woeid": 44418,
"latt_long": "51.506321,-0.12714",
"timezone": "Europe/London"
};
setTimeout(() => {
    setData(data);
}, 1000)
