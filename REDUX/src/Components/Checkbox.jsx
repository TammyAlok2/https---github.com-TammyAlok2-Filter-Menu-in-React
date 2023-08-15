import { useState } from "react";
import "./styles.css";

const products = [
  {
    name: "mango up",
    rating: 5,
    category: "up",
    price: 140
  },
  {
    name: "mango rj",
    rating: 4,
    category: "rj",
    price: 100
  },
  {
    name: "mango hp",
    rating: 3,
    category: "mp",
    price: 110
  },
  {
    name: "mango mp",
    rating: 2,
    category: "mp",
    price: 120
  },
  {
    name: "mango sl",
    rating: 1,
    category: "mp",
    price: 130
  }
];

export default function App() {
  const [proddata, setproddata] = useState();
  const [stars, setStars] = useState();

  return (
    <div>
      <input
        type="checkbox"
        value="mp"
        onChange={(e) => setproddata(e.target.value)}
      />
      mp
      <input
        type="checkbox"
        value="up"
        onChange={(e) => setproddata(e.target.value)}
      />
      up
      <input
        type="checkbox"
        value="rj"
        onChange={(e) => setproddata(e.target.value)}
      />
      rj
      {products
        .filter((f) => f.category === proddata)
        .map((prod) => (
          <div className="card">
            <li>
              name: {prod.name}
              <br />
              rating: {prod.rating}
              <br />
              category : {prod.category}
              <br />
              price:{prod.price}
            </li>
          </div>
        ))}
    </div>
  );
}
