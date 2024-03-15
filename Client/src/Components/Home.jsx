import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branch, setBranch] = useState("");
  const amount = 49;
  const checkoutHandler = async (e) => {
    e.preventDefault();

    try {
      const dataResponse = await axios.post(
        "http://localhost:5000/api/checkout"
      );
      const keyResponse = await axios.get("http://localhost:5000/api/getkey");
      const options = {
        key: keyResponse.data.key,
        amount: 4900,
        currency: "INR",
        name: "Malla Reddy University",
        description: "-- Test Transaction -- ",
        image: "",
        order_id: dataResponse.data.id,
        callback_url: "http://localhost:5000/api/paymentVerification",
        prefill: {
          name: name,
          email: email,
          contact: phoneNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#000000",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          width: "700px",
          height: "400px",
          backgroundColor: "",
        }}
      >
        <form onSubmit={checkoutHandler}>
          <div className="">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Branch"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingPassword">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
              <label htmlFor="floatingPassword">Branch</label>
            </div>
            <div className="form-floating">
              <input
                type="Number"
                className="form-control"
                id="floatingPassword"
                placeholder="Branch"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="floatingPassword">Phone Number</label>
            </div>
            <div>
              <p className="mt-4">
                Ammount to Pay : <span>{amount}</span>
              </p>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
