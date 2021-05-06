import React from 'react'

const DisplayNewEntry = ({message}) => {
  if(message === null) {
    return null
  }

  return (
    <div className="newEntry">
      {message}
    </div>
  )
}

export default NewEntryDisplay