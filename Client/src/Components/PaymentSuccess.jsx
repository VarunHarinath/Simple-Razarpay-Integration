import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <div>
      <div className="d-flex justify-content-center"></div>
      <div>
        <p className="text-primary fs-4 my-5">Payment Sucessfull</p>
        <p>Refernce Number: {referenceNum}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
