import { useEffect } from "react";
import "./App.css";
import { fetchCovidData } from "./utils";

function App() {
  useEffect(() => {
    fetchCovidData();
  }, []);
  return (
    <div className="App">
      <p>Siddhartha</p>
    </div>
  );
}

export default App;
