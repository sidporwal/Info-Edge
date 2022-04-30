import axios from "axios";

export const fetchCovidData = async () => {
  const url = "http://localhost:8080/api/covidData";
  try {
    const data = await axios.get(url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
