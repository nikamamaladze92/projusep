import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarRating
      maxRating={6}
      messages={["Terrible", "bad", "okay", "good", "amazing"]}
    />
    <StarRating maxRating={9} color="red" className="test" />
    {/* <App /> */}
  </StrictMode>,
);
