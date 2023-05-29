import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  }

  const result = weight / (height / 100) ** 2;

  return (
    <div class="container">
      <h1>BMI Calculator</h1>
      <p><label>Height in CM: </label><input disabled={showMessage} type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} /></p>
      <p><label>Weight in KG: </label><input disabled={showMessage} type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} /></p>
      <button disabled={showMessage} onClick={handleClick}>Calculate</button>
      {showMessage && <div id="results">{result.toFixed(2)}</div>}
      <div id="weight-guide">
        <h3>BMI Weight Guide</h3>
        <p>Under Weight = Less than 18.6</p>
        <p>Normal Range = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
      </div>
    </div>
  )
}

export default App
