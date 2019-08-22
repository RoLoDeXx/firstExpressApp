const request = require("request");
const fetch = require("node-fetch");

address = "delhi";

const geocode = async address => {
  url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZGV4eHJvbG8iLCJhIjoiY2p3YnpoMG5jMG80OTRhczYyMWMxZGQzZSJ9.RY7XN_2VqLQOj0gcNvLvhA";

  let res = await fetch(url).then(res => {});
  let data = await res.json();
  return data;
  // request({ url: url, json: true }, (error, { body }) => {
  //   if (error) callback("Unable to connect to the internet", undefined);
  //   else if (body.features.length === 0)
  //     callback("unable to find location", undefined);
  //   else {
  //     callback(undefined, {
  //       latitude: body.features[0].center[1],
  //       longitude: body.features[0].center[0],
  //       location: body.features[0].place_name
  //     });
  //   }
  // });
};

module.exports = geocode;
