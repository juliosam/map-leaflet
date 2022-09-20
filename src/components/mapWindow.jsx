import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Icon } from 'leaflet';
import { useState } from 'react';

///////////=============usar datos remotos
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const icon = new Icon({
  iconSize: [35, 35],
  iconUrl: '/user-marker.svg',
  iconAnchor: [17, 35]
})

const icon2 = new Icon({
  iconSize: [30,30],
  iconUrl: '/location-marker.svg',
  iconAnchor: [15, 30]
})


const MapWindow = ({info}) => {

const [center, setCenter] = useState({
  name: "Alsara",
  lat: 26.0311,
  lng: -98.2403
})

const centerCanada = () => {
  setCenter({
    name: "CanadaPark",
    lat: 45.4706,
    lng: -76.2051
  })
}

  return (
    <div className="map-window">
      <h3>HERE COMES THE MAP</h3>
      <MapContainer center={[center.lat, center.lng]} zoom={14} scrollWheelZoom={false} className="map-map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          // url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=tYaPvdtCg6TUDdiw2xtA'
        />
        <Marker position={[26.0311, -98.2403]} icon={icon}>
          <Popup>
            Alsara. <br /> Novedades y Accesorios
          </Popup>
        </Marker>
        <Marker position={[26.0568, -98.2872]} icon={icon2}>
          <Popup>
            Neurapi. <br /> Rafa School
          </Popup>
        </Marker>
        <Marker position={[26.0706, -98.3051]} icon={icon2} >
          <Popup>
            Casa <br /> Family
          </Popup>
        </Marker>
        <Marker position={[45.4706, -76.2051]} icon={icon2} >
          <Popup>
            Park. <br /> In Ottawa, Canada
          </Popup>
        </Marker>
        {info.map(user => { 
          return ( 
            <Marker position={[user.address.geo.lat, user.address.geo.lng]} icon={icon2} key={user.id}>
              <Popup>
                {user.address.city}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
      <button className='btn' onClick={() => {centerCanada()}}>Cabada Park</button>
      {/* {info.map(item=>{
        return <h1>{item.id}</h1>
      })} */}
    </div>
  )
}

export default MapWindow
