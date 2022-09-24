import React, { useState } from 'react'

const Search2 = ({info, map}) => {  //change

  const [textSearched, setTextSearched] = useState('');
  const [matches, setMatches] = useState([]);

  const textUpdate = e => {
    setTextSearched(e.target.value)
    filtered(e.target.value)
  }
    const filtered = (searchTerm) => {
      var searchResult = info.filter((user)=>{
        if(user.name.toString().toLowerCase().includes(searchTerm.toLowerCase())){
          return user
        }
      });
      setMatches(searchResult)
    }
  console.log(matches)

  const flyTo2 = (e) => {
    e.preventDefault()
    for(let i = 0; i < info.length; i++){
      if(textSearched === info[i].name.toString()){
        console.log(map);
        map.flyTo([info[i].address.geo.lat, info[i].address.geo.lng], 14);
      }
    }
  }
  

  return (
    <div className='search-section'>
      <form onSubmit={flyTo2}>
        <input onChange={textUpdate} value={textSearched} placeholder="Search for user's location"/>
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

export default Search2