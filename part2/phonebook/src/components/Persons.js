import React from 'react'

// mp=matched people
const Persons = ({mp}) => <div>{mp.map(person => <div key={person.name}>{person.name} {person.number}</div>)}</div>

export default Persons