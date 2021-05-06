import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import Entries from './services/Entries'

const verifyEntry = (persons, newName, newNumber) => {
  // ensure that the name does not exist
  const nameExist = persons.find(p => p.name === newName)
  if(nameExist !== undefined){
    window.alert(`${newName} was already added to the phonebook`)
    return false
  }
  // do nothing if name or phone number fields are empty (what kind of phonebook just has a phone number or just a name?)
  if(newName === '' || newNumber === ''){
    window.alert('the name or phone number input field was not filled out')
    return false
  }

  return true
}

const App = () => {
  // effect hook 
  useEffect(() => {
    Entries
      .getAll()
      .then(response => setPersons(response))
  }, [])

  // state for storing data passed by user input (these ones are dummy data for testing purposes)
  const [persons, setPersons] = useState([])
  // event handler for the form
  const submitInfo = (event) => {
    event.preventDefault()

    // verify for incomplete form and duplicate entries
    if(!verifyEntry(persons, newName, newNumber)){
      return
    }

    // construct new data entry
    const person = {
      name: newName, number: newNumber
    }
    Entries
      .createEntry(person)
      .then(returnedPerson => {
        // update state
        setPersons(persons.concat(returnedPerson))
        // reset state
        setNewName('')
        setNewNumber('')
      })
  }
  const handleDeleteEntry = (person) => {
    if(window.confirm(`are you sure you want to delete ${person.name} from the phonebook?`)) {
      Entries
        .deleteEntry(person.id)
        .then(response => setPersons(persons.filter(p => p.id !== person.id)))
    }
  }

  // state for storing changes in the name and phone number input field and their event handler
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  // state for storing changes in the search term field and its event handler
  const [ newST, setST ] = useState('')    
  const handleSTChange = (event) => setST(event.target.value)

  //const matchedPeople = (persons !== undefined) ? persons.filter(person => person.name.toUpperCase().includes(newST.toUpperCase())) : undefined
  const matchedPeople = persons.filter(person => person.name.toUpperCase().includes(newST.toUpperCase())) 
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter st={newST} steh={handleSTChange}/>
      <h3>add a new phone number</h3>
      <PersonForm feh={submitInfo} na={newName} naeh={handleNameChange} nu={newNumber} nueh={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons mp={matchedPeople} deh={handleDeleteEntry} />
    </div>
  ) 
}

export default App