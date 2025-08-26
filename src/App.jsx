import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(2);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter</h1>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrease} style={{ padding: '10px 20px' }}>-</button>
        <button onClick={reset} style={{ padding: '10px 20px' }}>Reset</button>
        <button onClick={increase} style={{ padding: '10px 20px' }}>+</button>
      </div>
    </div>
  );
}
