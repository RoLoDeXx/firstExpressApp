const request = require("request");

const forcast = (coordinates, callback) => {
  let lat = coordinates[0],
    long = coordinates[1];

  const url =
    "https://api.darksky.net/forecast/4c48d24fe1e731b495e91b7dd17db941/" +
    lat +
    "," +
    long +
    "?units=si";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) return callback("Unable to connect to the internet", undefined);
    else if (body.error)
      return callback("Undefined latitude or longitude", undefined);
    else callback(undefined, body);
  });
};

module.exports = forcast;
