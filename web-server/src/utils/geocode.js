const fetch = require("node-fetch");

address = "delhi";

const geocode = async address => {
  url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZGV4eHJvbG8iLCJhIjoiY2p3YnpoMG5jMG80OTRhczYyMWMxZGQzZSJ9.RY7XN_2VqLQOj0gcNvLvhA";

  let res = await fetch(url);
  let data = await res.json();

  return data.features[0].center;
};

module.exports = geocode;
