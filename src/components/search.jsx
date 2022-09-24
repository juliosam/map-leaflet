import React, { useState } from 'react'

const Search = ({locations, map}) => {

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

  const flyTo2 = (e) => {
    e.preventDefault()
    for(let i = 0; i < locations.length; i++){
      if(textSearched === locations[i].name.toString()){
        console.log(map);
        map.flyTo(locations[i].coords, 14);
      }
    }
  }
  

  return (
    <div className='search-section'>
      <form onSubmit={flyTo2}>
        <input onChange={textUpdate} value={textSearched} placeholder="Search a Julio's place"/>
        <button>Go</button>
      </form>
      <ul className='search-matches'>
        {
          matches.map(match => {
            return(
              <li key={match.id} className='search-match' onClick={()=>{
                setTextSearched(match.name);
                setMatches([]);
                }}>
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
