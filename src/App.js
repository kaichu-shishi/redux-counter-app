import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';



function App() {
  //状態にアクセスするためのhooks
  const count = useSelector((state) => state.counter.value);
  //ActionをStoreに通知するためのhooks
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      {/* 値が更新される度に状態変数を変えていく */}
      
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <input onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}/>
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>追加</button>
    </div>
  );
}

export default App;
