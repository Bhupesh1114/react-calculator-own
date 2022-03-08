import React, { useState } from "react";
import { mathematicalOperators ,numbers} from "./components/Calculator-buttons-value";
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("");

  const input = (data) => {
    setInputValue(oldItem => {
      return oldItem + data;
    })
  }

  const clear = () => {
    setInputValue("");
  }

  const deleteFromEnd = () => {
    setInputValue(inputValue => {
      return inputValue.slice(0,inputValue.length -1)
    })
  }

  const result = () => {
    let evaluation = eval(inputValue);
    setInputValue(evaluation.toString());
  }
  return (
    <div className="App">
        <h1>Calculator</h1>
      <div className="App-inner">
      <div>
      <input type="text" value={inputValue} placeholder="0"/>
        </div>

        <div className="upperButtons">
        <div className="mathOperators">
        {mathematicalOperators.map((item,index) => {
        return <button onClick={() => input(item)} key={index}>{item}</button>
        })}
        </div>
       <div className="delButton"><button onClick={deleteFromEnd}>Del</button></div>
        </div>
     
        <div className="lowerButtons">
          {numbers.map((item, index) => {
            return <button onClick={() => input(item)} key={index}>{item}</button>
          })}
      </div>
      
        <div className="twoButtons">
          <button onClick={clear}>Clear</button>
          <button onClick={result}>=</button>
        </div>
      </div>
     
    </div>
  );
}

export default App;
