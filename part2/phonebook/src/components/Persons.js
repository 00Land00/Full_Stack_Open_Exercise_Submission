import React from 'react'

// mp=matched people
const Persons = ({mp, deh}) => {
  if(mp.length === 0) {
    return null
  }

  const matchedPeople = mp.map(person => {
    return (
      <div key={person.name}>
        {person.name} {person.number} <button onClick={() => deh(person)}>delete</button>
      </div>
    )
  })

  return (
    <>
      {matchedPeople}
    </>
  )
}

export default Persons