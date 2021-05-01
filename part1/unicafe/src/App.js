import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // save names for the whole webapp into the fb object (fb = feedback)
  const fb = {
    title: "give feedback",
    s_title: "statistics",
    g: "good",
    n: "neutral",
    b: "bad",
  }

  // define the event handlers of each button
  const setG = () => setGood(good + 1)
  const setN = () => setNeutral(neutral + 1)
  const setB = () => setBad(bad + 1)

  return (
    <div>
      <Title title={fb.title} />
      <Buttons gt={fb.g} geh={setG} nt={fb.n} neh={setN} bt={fb.b} beh={setB} />
      <Stat_Header s_title={fb.s_title} />
      <Statistics gt={fb.g} g={good} nt={fb.n} n={neutral} bt={fb.b} b={bad} />
    </div>
  )
}

// component to display header
const Title = ({title}) => <h1><strong>{title}</strong></h1>

// component to display buttons and pass in their eventhandlers
// xt={x} text; xeh={x} event handler;
const Buttons = ({gt, geh, nt, neh, bt, beh}) => {
  return (
    <>
    <Button text={gt} event_handler={geh} />
    <Button text={nt} event_handler={neh} />
    <Button text={bt} event_handler={beh} />
    </>
  )
}
const Button = ({text, event_handler}) => <button onClick={event_handler}>{text}</button>

// component to display secondary header
const Stat_Header = ({s_title}) => <h2><strong>{s_title}</strong></h2>

// components to display the statistics
// xt={x} text; x={x} state;
const Statistics = ({gt, g, nt, n, bt, b}) => {
  return (
    <>
    <p>{gt} {g}</p>
    <p>{nt} {n}</p>
    <p>{bt} {b}</p>
    </>
  )
}

export default App