import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);