import React from 'react'

const FlyToButton = ({map, locations}) => {

   const fly = () => map.flyTo(locations.coords, 10)

  return <button className='btn' onClick={fly}>{locations.name}</button>
}

export default FlyToButton
