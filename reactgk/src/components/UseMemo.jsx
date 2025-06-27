import React, { useState, useMemo } from "react";

function UseMemoComponent() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(() => {
    console.log("***********");
    return add * 10;
  }, [add]);

  return (
    <div>
      <p>Multiply: {multiplication}</p>
      <h2>useMemo Example</h2>

      <p>Add: {add}</p>
      <button onClick={() => setAdd(add + 1)}>ADD</button>

      <p>Minus: {minus}</p>
      <button onClick={() => setMinus(minus - 1)}>MINUS</button>
    </div>
  );
}

export default UseMemoComponent;
