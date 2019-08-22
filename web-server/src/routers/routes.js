const express = require("express");
const forcast = require("../utils/forcast");
const geocode = require("../utils/geocode");

const app = new express.Router();
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Samarth"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Samarth"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Samarth",
    message: "Atak gaye kidhar kya"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorName: "Not Found",
    errorMessage: "Help article not found ",
    name: "Samarth",
    title: "Error 404"
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    res.send("Error you must provide a search statemnet");
    return;
  }
});

app.get("/weather", async (req, res) => {
  if (!req.query.address)
    return res.send("You must provide an address to work");

  let locationData = await geocode(req.query.address);
  let weatherData = await forcast({
    longitude: locationData[0],
    latitude: locationData[1]
  });

  res.render("index.hbs", weatherData);
});

app.get("*", (req, res) => {
  res.render("404", {
    errorName: "Not Found",
    errorMessage: "Page not found",
    name: "Samarth",
    title: "Error 404"
  });
});

module.exports = app;
