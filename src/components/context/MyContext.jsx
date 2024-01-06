import React, { createContext, useState } from "react";
export const OurContext = createContext();
const MyContext = (props) => {
  const [color, setColor] = useState("");
  return (
    <OurContext.Provider value={{ color, setColor }}>
      {props.children}
    </OurContext.Provider>
  );
};

export default MyContext;
