import React, { useContext } from "react";
import { OurContext } from "./context/MyContext";
const OurProjext = () => {
  const { color, setColor } = useContext(OurContext);
  return (
    <div>
      <h1 className={`${color === "sunil" ? "bg-yellow-500" : "bg-blue-500"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        temporibus animi blanditiis praesentium, nostrum veritatis repellendus?
        Nihil expedita rerum iste exercitationem cumque et quam nesciunt,
        dolores ipsum voluptas ad animi.
      </h1>

      <button
        className="bg-green-500"
        onClick={() => {
          setColor("sunil");
        }}
      >
        Color Show
      </button>
    </div>
  );
};

export default OurProjext;
