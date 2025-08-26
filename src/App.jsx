import {useState} from "react";
import "./App.css"
function App(){
  const[count,setCount]=useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  return{
    count: count,
    increaseCount: increaseCount
  }
}
function App(){
  const{count,setCount}=useCounter();
  return(
    <div>
      <button onClick={increaseCount}>increase{count}</button>
    </div>
  )
}
