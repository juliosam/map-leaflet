import React from 'react'

const FlyToButton = ({map, location}) => {
   const fly = () => map.flyTo(location.coords, 14);
  return <button className='btn' onClick={fly}>{location.name}</button>
}

export default FlyToButton
