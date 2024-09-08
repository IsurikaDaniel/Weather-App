const mapContainer = $("#map-container");
let countryP = $("#country");
let idP = $(".temp_c");
let temp_c = $("#temp_c");
let latP = $("#lan");
let lonP = $("#lon");
let nameP = $(".name");
let regionP = $("#region");
let urlP = $(".url");
let humidity = $("#humidity");
let tz_id = $("#tz_id");
let date = $("#date");
let urlp2 = $("#urlp2");
let url = $("#url");
let wind_kph = $("#wind_kph");
let img = document.getElementById("weatherIcon");
const apiKey = "8d47169d338f42d2af7130233240709 ";



//-------------------------------------------handleSearch----------------------------------------

function handleSearch() {
  const location = document.getElementById("location-input").value;
  fetchWeatherData(location);
}
document.getElementById("search-button").addEventListener("click", handleSearch);

function fetchWeatherData(location) {
  $.ajax({
    method: "GET",
    url: `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`,
    success: ({ location, current }) => {
        idP.text(current.temp_c.toLocaleString(undefined,{style:"unit",unit:"celsius"}));
        urlP.text(current.condition.text);
        urlp2.text(current.condition.text);
      nameP.text(location.name);
      date.text(current.last_updated);
      img.src = current.condition.icon;
      latP.text(location.lat);  
      lonP.text(location.lon);
      regionP.text(location.region);
      tz_id.text(location.tz_id);
      humidity.text(current.humidity);
      wind_kph.text(current.wind_kph + " km/h");
      temp_c.text(current.temp_c);
      countryP.text(location.country);
      url.text(current.condition.text);
     let locationName = location.name;
  
      marker.setLatLng([location.lat, location.lon]).update();
      map.setView([location.lat, location.lon]);
    }
  });
}


