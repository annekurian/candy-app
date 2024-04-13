import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import CandyList from "./components/CandyList";
import OrderList from "./components/OrderList";
import { Candy, Order } from "./types";

function App() {
  const candyList: Candy[] = [
    { name: "Gummy bears", quantity: 0, visibility: false },
    { name: "Sour worms", quantity: 0, visibility: false },
    { name: "Chocs combo", quantity: 0, visibility: false },
    { name: "Macaroons", quantity: 0, visibility: false },
    { name: "Lollipop", quantity: 0, visibility: false },
    { name: "Ice-cream candy", quantity: 0, visibility: false },
    { name: "Cola candy", quantity: 0, visibility: false },
  ];

  const orderList: Order[] = [];
  const [orders, setOrders] = useState(orderList);
  const [candies, setCandies] = useState(candyList);

  const getSelectedItem = (candy: Candy) => {
    let currentSet: Candy[] = [...candies];
    const index = currentSet.indexOf(candy);
    candies[index] = candy;
    return candies[index];
  };

  const handleAddToCart = (candy: Candy) => {
    const selectedCandy = getSelectedItem(candy);
    selectedCandy.visibility = !selectedCandy.visibility;
    selectedCandy.quantity += 1;
    setCandies([...candies]);
  };

  const handleIncrement = (candy: Candy) => {
    const selectedCandy = getSelectedItem(candy);
    selectedCandy.quantity += 1;
    setCandies([...candies]);
  };

  const handleDecrement = (candy: Candy) => {
    const selectedCandy = getSelectedItem(candy);
    selectedCandy.quantity -= 1;
    if (!selectedCandy.quantity) {
      selectedCandy.visibility = !selectedCandy.visibility;
      setCandies([...candies]);
      return;
    }
    setCandies([...candies]);
  };

  const handleCheckout = () => {
    const candyList = [...candies];
    const orders = candyList
      .filter((candy) => candy.quantity > 0)
      .map((candy) => {
        return {
          name: candy.name,
          quantity: candy.quantity,
        };
      });
    setOrders(orders);
  };

  return (
    <>
      <h1>
        <span className="pink">Can</span>
        <span className="purple">dil</span>
        <span className="pink">ici</span>
        <span className="purple">ous</span>
      </h1>
      <CandyList
        candies={candies}
        onAddToCart={handleAddToCart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onCheckout={handleCheckout}
      />
      {orders.length !== 0 && <OrderList orders={orders} />}
    </>
  );
}

export default App;
