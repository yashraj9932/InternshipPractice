import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";
const Count = () => {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click this</button>
    </div>
  );
};

export default Count;
