import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import PaymentSuccess from "./Components/PaymentSuccess";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
