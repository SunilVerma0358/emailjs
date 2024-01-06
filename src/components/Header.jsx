import React, { useContext } from "react";
import { OurContext } from "./context/MyContext";
const Header = () => {
  const { color, setColor } = useContext(OurContext);
  return (
    <div>
      <h1
        className={`${color === "xyz" ? "text-yellow-500" : "text-blue-500"}`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ex velit
        ab provident, aliquam quo inventore officiis cumque suscipit officia,
        placeat, soluta deserunt in ad consequuntur expedita sapiente error
        dolor?
      </h1>
      <button className="bg-green-500" onClick={() => setColor("xyz")}>
        clickme
      </button>
    </div>
  );
};

export default Header;
