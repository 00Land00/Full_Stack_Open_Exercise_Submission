import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // state for storing data passed by user input (these ones are dummy data for testing purposes)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  // state for storing changes in the name input field
  const [ newName, setNewName ] = useState('')
  // state for storing changes in the phone number input field
  const [ newNumber, setNewNumber ] = useState('')
  // state for storing changes in the search field
  const [ newST, setNewST ] = useState('')    // ST = Search Term
  // state for storing tailored data passed by user input (based on the search term)
  const [ matchedPeople, setMatchedPeople ] = useState(persons)

  // event handler for the form
  const submitInfo = (event) => {
    event.preventDefault()

    // ensure that the name does not exist
    const nameExist = persons.find(p => p.name === newName)
    if(nameExist !== undefined){
      window.alert(`${newName} was already added to the phonebook`)
      return
    }
    // do nothing if name or phone number fields are empty (what kind of phonebook just has a phone number or just a name?)
    if(newName === '' || newNumber === ''){
      return
    }

    // construct new data entry
    const person = {
      name: newName, number: newNumber
    }
    // update state
    setPersons(persons.concat(person))
    // reset state
    setNewName('')
    setNewNumber('')

    // respond to change in state
    const matching = persons.concat(person).filter(p => p.name.toUpperCase().includes(newST.toUpperCase()))
    setMatchedPeople(matching)
  }

  // event handler for the name input
  const handleNameChange = (event) => setNewName(event.target.value)
  // event handler for the number input
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  // event handler for the ST input
  const handleSTChange = (event) => {
    const matching = persons.filter(person => person.name.toUpperCase().includes(event.target.value.toUpperCase()))
    setNewST(event.target.value)
    setMatchedPeople(matching)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter st={newST} steh={handleSTChange}/>
      <h3>add a new phone number</h3>
      <PersonForm feh={submitInfo} na={newName} naeh={handleNameChange} nu={newNumber} nueh={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons mp={matchedPeople} />
    </div>
  ) 
}

export default App