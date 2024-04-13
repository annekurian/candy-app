import React, { Fragment, useState } from "react";
import { Order } from "../types";
import "../App.css";

interface Props {
  orders: Order[];
}

const OrderList = ({ orders }: Props) => {
  const [orderCompleted, setOrderCompleted] = useState(false);
  return (
    <Fragment>
      <div className=" mt-2 rounded">
        <h2 className="text-start ms-3">
          <span className="purple">Order</span>
        </h2>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-around">
            <h5>Description</h5>
            <h5>Quantity</h5>
          </li>
          {orders.map((order) => (
            <li className=" list-group-item d-flex justify-content-around">
              <p className="text-secondary fs-5"> {order.name} </p>
              <div>{order.quantity}</div>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-end">
          <button
            className="btn bg-purple mt-3 me-3"
            onClick={() => setOrderCompleted(true)}
          >
            Place order
          </button>
        </div>
      </div>
      {orderCompleted && (
        <div className="mt-2 p-2">
          <h4 className="purple"> Your order has been placed successfully!!</h4>
        </div>
      )}
    </Fragment>
  );
};

export default OrderList;
