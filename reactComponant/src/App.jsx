import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let countedValue = 0;
  function increaseValue(){
    if (count === 10) {
      alert("Value can't be grater than 10");
    } else {
      setCount((countedValue) => countedValue+1 );
    }
  }
  function decreaseValue(){
    if (count === 0) {
      alert("Value can't be less than 0");
    }else{
      setCount((countedValue) => countedValue-1 );
    }
  }

  return (
    <>
      <h1>First React Project</h1>
      <h3>The counter value is: {count}</h3>
      <div className='button-group'>
        <button className='actionButton' onClick={increaseValue}>Increase (+)</button>
        <button className='actionButton' onClick={decreaseValue}>Decrease (-)</button>
      </div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
