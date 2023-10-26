import "./BeerCard.css";
import { useState } from "react";

function BeerCard(props) {
  const { beer } = props;
  console.log(beer);

  const [tf, settf] = useState(false);

  const handleSwitch = () => {
    settf(!tf);
  };

  console.log(tf);
  return (
    <div>
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt={beer.name} />
      <button onClick={handleSwitch}>{tf ? "Liked" : "Not Liked"}</button>
    </div>
  );
}

export default BeerCard;
