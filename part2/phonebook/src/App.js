import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  // event handler for the form
  const submitName = (event) => {
    const nameExist = persons.find(p => p.name === newName)
    if(nameExist !== undefined){
      window.alert(`${newName} was already added to the phonebook`)
      return
    }
    event.preventDefault()
    const person = {
      name: newName
    }
    setPersons(persons.concat(person))
    setNewName('')
  }
  // event handler for the input
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App