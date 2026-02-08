import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>`this movie was rated {movieRating} stars`</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating
      maxRating={6}
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating maxRating={9} color="red" className="test" defaultRating={5} />
    <Test />
    {/* <App /> */}
  </StrictMode>,
);
