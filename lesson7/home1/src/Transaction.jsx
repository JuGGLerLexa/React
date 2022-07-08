import React from "react";
import moment from "moment";

const data = moment().format("DD MMM");

const Transaction = ({ from, to, amount, rate, time }) => {
  const times = new Date(time);

  const options = {
    hour: "numeric",
    minute: "numeric",
  };

  const getTime = new Intl.DateTimeFormat("en-GB", options).format(times);
  const getAmount = new Intl.NumberFormat("en-GB", options).format(amount);

  return (
    <ul className="transactions">
      <li className="transaction">
        <span className="transaction__date">10 Jan</span>
        <span className="transaction__time">19:08</span>
        <span className="transaction__assets">USD → EUR</span>
        <span className="transaction__rate">0.8</span>
        <span className="transaction__amount">1,200</span>
      </li>
      ...
      <li className="transaction">
        <span className="transaction__date">10 Jan</span>
        <span className="transaction__time">19:01</span>
        <span className="transaction__assets">EUR → USD</span>
        <span className="transaction__rate">1.1</span>
        <span className="transaction__amount">100</span>
      </li>
    </ul>
  );
};

export default Transaction;
