import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={"home"} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
