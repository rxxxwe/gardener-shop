import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="counter__btn" onClick={handleDecrement}>
        <img src="/minus.svg" alt="Minus" />
      </button>
      <span className="counter__value">{count}</span>
      <button className="counter__btn" onClick={handleIncrement}>
        <img src="/plus.svg" alt="Plus" />
      </button>
    </div>
  );
}

export default Counter;
