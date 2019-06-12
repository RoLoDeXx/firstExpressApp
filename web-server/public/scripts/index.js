let form = document.querySelector("form");
let search = document.querySelector("input");
let paraOne = document.getElementById("firstPara");
let paraTwo = document.getElementById("secondPara");

document.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  paraOne.textContent = "Loading...";

  fetch("/weather?address=" + location).then(reponse => {
    reponse.json().then(data => {
      if (data.error) {
        paraOne.textContent = data.error;
        paraTwo.textContent = null;
        return;
      }

      paraOne.textContent = data.location;
      paraTwo.textContent = data.forcast;
    });
  });
});
