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


  let tabVille = [
  {
    ville: "Lyon",
    code: "69123"
  },
  {
    ville: "Strasbourg",
    code: "67482"
  },
  {
    ville: "Rouen",
    code: "76540"
  },
  {
    ville: "Marseille",
    code: "13055"
  }
]

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



