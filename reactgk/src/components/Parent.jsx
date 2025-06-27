import React, { createContext } from "react";
import ChildA from "./ChildA";
// creating the context
const data = createContext();
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function Parent() {
  const name = "Krishna";
  const age = 22;
  const location = "Namakkal";
  const pincode = 637409;

  return (
    <div>
      {/* providing data */}
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data2.Provider value={location}>
            <data3.Provider value={pincode}>
              <ChildA />
            </data3.Provider>
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default Parent;
export { data, data1, data2, data3 }; //exporting data
