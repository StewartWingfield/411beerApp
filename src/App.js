import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import BeerCard from "./BeerCard";

function App() {
  const [beers, setBeers] = useState([]);

  const fetchBeers = () => {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      /* console.log(res.data) */
      setBeers(res.data);
    });
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  console.log(beers);

  return (
    <div className="App">
      <header className="App-header">
        {beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </header>
    </div>
  );
}

export default App;
