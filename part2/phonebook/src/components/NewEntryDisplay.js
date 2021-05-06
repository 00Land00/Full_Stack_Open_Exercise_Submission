import React from 'react'

const NewEntryDisplay = ({message}) => {
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