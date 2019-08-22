const fetch = require("node-fetch");
const forcast = async ({ latitude, longitude }) => {
  const url =
    "https://api.darksky.net/forecast/4c48d24fe1e731b495e91b7dd17db941/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  let data = await fetch(url);
  let jsonres = await data.json();
  return jsonres;
};

module.exports = forcast;
