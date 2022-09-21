import React, { useState } from 'react'

const Search = () => {
  const [textSearched, setTextSearched] = useState('')

  const textUpdate = (e) => {
    setTextSearched(e.target.value)
    console.log(textSearched)
  }

  return (
    <form>
      <input onChange={e => textUpdate(e)} value={textSearched}/>
      <button>Go</button>
    </form>
  )
}

export default Search
