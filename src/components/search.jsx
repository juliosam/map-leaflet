import React, { useState } from 'react'

const Search = ({locations}) => {

  const [textSearched, setTextSearched] = useState('');
  const [matches, setMatches] = useState([]);

  const textUpdate = e => {
    setTextSearched(e.target.value)
    filtered(e.target.value)
  }
    const filtered = (searchTerm) => {
      var searchResult = locations.filter((location)=>{
        if(location.name.toString().toLowerCase().includes(searchTerm.toLowerCase())){
          return location
        }
      });
      setMatches(searchResult)
    }
  console.log(matches)
  

  return (
    <div className='search-section'>
      <form>
        <input onChange={textUpdate} value={textSearched}/>
        <button>Go</button>
      </form>
      <ul className='search-matches'>
        {
          matches.map(match => {
            return(
              <li key={match.id} className='search-match'>
                <span>{match.name}</span>
              </li>
            ) 
          })
        }
      </ul>
    </div>
    
  )
}

export default Search
