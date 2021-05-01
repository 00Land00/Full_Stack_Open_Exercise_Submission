import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // define the event handlers of each button
  const setG = () => setGood(good + 1)
  const setN = () => setNeutral(neutral + 1)
  const setB = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" event_handler={setG} />
      <Button text="neutral" event_handler={setN} />
      <Button text="bad" event_handler={setB} />

      <h2>statistics</h2>
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  )
}

// component to display buttons and pass in their eventhandlers
const Button = ({text, event_handler}) => <button onClick={event_handler}>{text}</button>

// components to display the statistics
// xt={x} text; x={x} state;
const Statistics = ({g, n, b}) => {
  const sum = g+n+b
  const score = g-b
  const avg = score / sum
  const pos = (g / sum) * 100 + " %"
  if(sum === 0){
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <tr><Statistic text="good" value={g} /></tr>
        <tr><Statistic text="neutral" value={n} /></tr>
        <tr><Statistic text="bad" value={b} /></tr>
        <tr><Statistic text="all" value={sum} /></tr>
        <tr><Statistic text="average" value={avg} /></tr>
        <tr><Statistic text="negative" value={pos} /></tr>
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => (
  <>
  <td>{text}</td>
  <td>{value}</td>
  </>
)
export default App