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
      <Title title="give feedback" />
      <Button text="good" event_handler={setG} />
      <Button text="neutral" event_handler={setN} />
      <Button text="bad" event_handler={setB} />

      <Stat_Header s_title="statistics" />
      <Statistics g={good} n={neutral} b={bad} />
    </div>
  )
}

// component to display header
const Title = ({title}) => <h1><strong>{title}</strong></h1>

// component to display buttons and pass in their eventhandlers
const Button = ({text, event_handler}) => <button onClick={event_handler}>{text}</button>

// component to display secondary header
const Stat_Header = ({s_title}) => <h2><strong>{s_title}</strong></h2>

// components to display the statistics
// xt={x} text; x={x} state;
const Statistics = ({g, n, b}) => {
  const sum = g+n+b
  const score = g-b
  const avg = score / sum
  const pos = g / sum
  return (
    <>
    <p>good {g}</p>
    <p>neutral {n}</p>
    <p>bad {b}</p>
    <p>all {sum}</p>
    <p>average {avg}</p>
    <p>positive {pos} %</p>
    </>
  )
}

export default App