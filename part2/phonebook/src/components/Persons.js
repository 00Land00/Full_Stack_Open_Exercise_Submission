import React from 'react'

// mp=matched people
const Persons = ({mp}) => {
  if(mp === undefined) {
    return null
  }
  return <div>{mp.map(person => <div key={person.name}>{person.name} {person.number}</div>)}</div>
}

export default Persons