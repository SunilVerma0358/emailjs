import React, { useContext } from "react";
import { OurContext } from "./context/MyContext";

const Roadmap = () => {
  const { color, setColor } = useContext(OurContext);
  function fontWight() {
    if (color === "sumit") {
      setColor("text-yellow-500");
    } else {
      setColor("sumit");
    }
  }
  return (
    <div>
      <h3 className={`${color === "sumit" ? "font-bold" : "font-normal"}`}>
        hello
      </h3>
      <button onClick={fontWight}>onclik</button>
    </div>
  );
};

export default Roadmap;
