let form = document.querySelector("form");
let search = document.querySelector("input");
let paras = document.getElementsByTagName("p");
console.log(paras);

document.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  paras[0].textContent = "Loading...";

  fetch("/weather?address=" + location).then(reponse => {
    reponse.json().then(data => {
      console.log(data);

      if (data.error) {
        paras[0].textContent = data.error;
        for (let i = 0; i < paras.length - 1; i++) paras[i].textContent = null;
        return;
      }

      paras[0].textContent = "Location - " + data.location;
      paras[1].textContent = "Summary - " + data.summary;
      paras[2].textContent = "Rain % - " + data.rainChance;
      paras[3].textContent = "Average Temp - " + data.avgTemp;
      paras[4].textContent = "Min Temp - " + data.minTemp;
      paras[5].textContent = "Max Temp - " + data.maxTemp;

      // paras[1].textContent = "Max Temp - " + data.maxTemp + "C";
    });
  });
});
