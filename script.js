function getWeather() {
  const city = document.getElementById("city").value.trim();

  if (!city) {
    alert("Enter a city name");
    return;
  }

  fetch(`https://wttr.in/${city}?format=j1`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("temp").innerText =
        "Temperature: " + data.current_condition[0].temp_C + "°C";

      document.getElementById("desc").innerText =
        "Condition: " + data.current_condition[0].weatherDesc[0].value;

      document.getElementById("wind").innerText =
        "Wind: " + data.current_condition[0].windspeedKmph + " km/h";
    })
    .catch(() => {
      alert("Weather not found");
    });
}