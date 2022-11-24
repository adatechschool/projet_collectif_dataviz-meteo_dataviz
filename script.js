fetch(api())
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }) 
  .then((data) => {
    console.log(data);
    document.getElementById("ville").innerHTML = data.city.name.toUpperCase();
    document.getElementById("meteo").innerHTML = JSON.stringify(data.forecast[0].temp2m) + "°";
  })
  .catch((error) => alert("Erreur : " + error));

function runClock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var timeValue = hours;

  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  document.getElementById("heure").innerHTML = timeValue;
}
runClock();
setInterval(runClock, 1000);
