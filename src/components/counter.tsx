interface Props {
  candy: { name: string; quantity: number };
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter = ({ candy, onIncrement, onDecrement }: Props) => {
  const counter = 0;
  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-secondary btn-sm" onClick={onIncrement}>
          +
        </button>
        <span className="badge text-dark">{candy.quantity}</span>
        <button className="btn btn-secondary btn-sm" onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

//   getBadgeClasses() {
//     let classes = "badge m-2 ";
//     classes +=
//       this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
//     return classes;
//   }

//   formatCount() {
//     const { value: count } = this.props.counter;
//     return count === 0 ? "Zero" : count;
//   }
// }
