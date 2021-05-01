import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  // generate random index from 0 to len
  const randomIndex = (len) => Math.floor(Math.random() * len)

  // generate the states based on anecdotes list
  const [votes, setVote] = useState(anecdotes.map(value => 0))
  const [selected, setSelected] = useState(randomIndex(anecdotes.length))

  // event handler for cast_vote button
  const castVote = (index) => {
    const temp = [...votes]
    temp[index] += 1
    setVote(temp)
  }
  // event handler for next_anecdote button
  const nextAnecdote = () => setSelected(randomIndex(anecdotes.length))

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={() => castVote(selected)}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
    </div>
  )
}

export default App