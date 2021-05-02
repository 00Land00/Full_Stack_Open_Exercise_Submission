import React from 'react'

// f=form; na=name; nu=number; eh=event handler;
const PersonForm = ({feh, na, naeh, nu, nueh}) => {
  return (
    <form onSubmit={feh}>
      <div>name: <input value={na} onChange={naeh}/></div>
      <div>number: <input value={nu} onChange={nueh}/></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm