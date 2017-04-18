const weatherMap = {
  sn: 'wi-forecast-io-snow',
  sl: 'wi-forecast-io-sleet',
  h: 'wi-forecast-io-hail',
  t: 'wi-forecast-io-thunderstorm',
  hr: 'wi-forecast-io-rain',
  lr: 'wi-forecast-io-rain',
  s: 'wi-forecast-io-rain',
  hc: 'wi-forecast-io-cloudy',
  lc: 'wi-forecast-io-cloudy',
  c: 'wi-forecast-io-clear-day'
};

function setData(data) {
  function getTemp(value) {
    const val = Number(value).toFixed(0);
    if (value > 0) {
      return '+' + val;
    } else {
      return '-' + val;
    }
  }


  document.getElementsByClassName('info')[0].innerHTML = data.title;
  let daysHtml = '';
  for (let i = 0; i < data.consolidated_weather.length; i++) {
    const item = data.consolidated_weather[i];
    if (i === 0) {
      document.getElementsByClassName('temp0')[0].innerHTML = getTemp(item.the_temp);
      document.getElementById('icon').classList.add(weatherMap[item.weather_state_abbr]);
      document.getElementById('humidity').innerHTML = item.humidity;
      document.getElementById('wind').innerHTML = item.wind_speed.toFixed(0);
    } else {
      if (i === 5) {
        break;
      }

      daysHtml += `
        <div class="col-xs-3">
          <p id="today">${item.applicable_date}</p>
          <p id="icon1"><i class="wi ${weatherMap[item.weather_state_abbr]}"></i></p>
          <p class="temp1">${getTemp(item.min_temp)}°C / ${getTemp(item.max_temp)}°C</p>
        </div>
      `;
    }
  }
  document.getElementById('days').innerHTML = daysHtml;

  document.getElementsByClassName('spin')[0].classList.add('hidden');
  document.getElementsByClassName('weather-body')[0].classList.remove('hidden');
}
