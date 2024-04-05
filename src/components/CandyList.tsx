import "../App.css";
import Counter from "./counter";
import { useState } from "react";

type Candy = { name: string; quantity: number; visibility: boolean };

const candyList: Candy[] = [
  { name: "Gummy bears", quantity: 0, visibility: false },
  { name: "Sour worms", quantity: 0, visibility: false },
  { name: "Chocs combo", quantity: 0, visibility: false },
  { name: "Macaroons", quantity: 0, visibility: false },
  { name: "Lollipop", quantity: 0, visibility: false },
  { name: "Ice-cream candy", quantity: 0, visibility: false },
  { name: "Cola candy", quantity: 0, visibility: false },
];

const CandyList = () => {
  const [candies, setCandies] = useState(candyList);

  const getSelectedItem = (candy: Candy): [Candy[], Candy] => {
    let currentSet: Candy[] = [...candyList];
    let currentIndex = currentSet.findIndex((c) => c.name === candy.name);
    return [currentSet, currentSet[currentIndex]];
  };

  const handleClick = (candy: Candy) => {
    const [currentSet, selectedItem] = getSelectedItem(candy);
    selectedItem.visibility = !selectedItem.visibility;
    selectedItem.quantity += 1;
    setCandies([...currentSet]);
  };

  const handleIncrement = (candy: Candy) => {
    const [currentSet, selectedItem] = getSelectedItem(candy);
    selectedItem.quantity += 1;
    setCandies([...currentSet]);
  };

  const handleDecrement = (candy: Candy) => {
    const [currentSet, selectedItem] = getSelectedItem(candy);
    selectedItem.quantity -= 1;
    if (!selectedItem.quantity) {
      selectedItem.visibility = !selectedItem.visibility;
      setCandies([...currentSet]);
      return;
    }
    setCandies([...currentSet]);
  };

  return (
    <div className="col-12">
      <ul className="list-group">
        {candies.map((candy) => (
          <li className="list-group-item text-start" key={candy.name}>
            <div className="d-flex justify-content-between">
              <h5 className="d-flex align-items-center">{candy.name}</h5>
              {!candy.visibility && (
                <button
                  className="btn bg-purple"
                  onClick={() => handleClick(candy)}
                >
                  Add to cart
                </button>
              )}
              {candy.visibility && (
                <Counter
                  candy={candy}
                  onIncrement={() => handleIncrement(candy)}
                  onDecrement={() => handleDecrement(candy)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandyList;
