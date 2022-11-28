function fetchApi(codeInsee) {
  fetch(api(codeInsee))
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }) 
  .then((data) => {
    console.log(data);
    document.getElementById("meteo").innerHTML = JSON.stringify(data.forecast[0].temp2m) + "°";
  })
  .catch((error) => alert("Erreur : " + error));
}

let tabVille = [
  {
    ville: "PARIS",
    code: "75056"
  },
  {
    ville: "LYON",
    code: "69123"
  },
  {
    ville: "STRASBOURG",
    code: "67482"
  },
  {
    ville: "ROUEN",
    code: "76540"
  },
  {
    ville: "MARSEILLE",
    code: "13055"
  }, 
  {
    ville: "AJACCIO",
    code: "2A004"
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


let index = 0;
let container = document.getElementById("container-ville");
let p = document.createElement("p");
p.id = "ville";
p.innerHTML = tabVille[index].ville;
container.appendChild(p);

fetchApi(tabVille[index].code);

function changeSlide(sens) {
  index = index + sens;

  if(index < 0) {
    index = tabVille.length - 1
  }
  if(index > tabVille.length -1) {
    index = 0
  }

  fetchApi(tabVille[index].code) 
  p.innerHTML = tabVille[index].ville;
  container.appendChild(p)
}

runClock();
setInterval(runClock, 1000);



