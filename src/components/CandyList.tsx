import "../App.css";
import Counter from "./counter";
import { Candy, Order } from "../types";

interface Props {
  candies: Candy[];
  onAddToCart: (candy: Candy) => void;
  onIncrement: (candy: Candy) => void;
  onDecrement: (candy: Candy) => void;
  onCheckout: () => void;
}

const CandyList = ({
  candies,
  onAddToCart,
  onIncrement,
  onDecrement,
  onCheckout,
}: Props) => {
  return (
    <div className=" mt-2 rounded">
      <div className="row main-container">
        <div className="col-12">
          <h2 className="text-start ms-3">
            <span className="purple">Candies</span>
          </h2>
          <ul className="list-group">
            {candies.map((candy) => (
              <li className="list-group-item text-start" key={candy.name}>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center text-primary-emphasis fs-5">
                    {candy.name}
                  </span>
                  {!candy.visibility && (
                    <button
                      className="btn bg-purple"
                      onClick={() => onAddToCart(candy)}
                    >
                      Add to cart
                    </button>
                  )}
                  {candy.visibility && (
                    <Counter
                      candy={candy}
                      onIncrement={() => onIncrement(candy)}
                      onDecrement={() => onDecrement(candy)}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-end">
            <button
              className="btn bg-purple mt-3 me-3"
              onClick={() => onCheckout()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandyList;
