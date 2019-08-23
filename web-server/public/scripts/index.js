let searchBar = document.getElementById("searchBar");

document.getElementById("searchButton").addEventListener("click", e => {
  e.preventDefault();
  if (searchBar.value !== "") location.href = "/weather/" + searchBar.value;
});
