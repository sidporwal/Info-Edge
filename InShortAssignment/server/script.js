const express = require("express");
const scrapCovidData = require("./utils/scrapCovidData");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/covidData", async (req, res) => {
  try {
    const covidData = await scrapCovidData();
    res.send(covidData);
  } catch (error) {
    res.status(404).send({ message: "No data available" });
  }
});

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening to port ${port}..`));
