import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Icon } from 'leaflet';
import { useState} from 'react';
import FlyToButton from './flyToButton';

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

  const [map, setMap] = useState(null)

  const [center, setCenter] = useState({
    name: "Alsara",
    lat: 26.0311,
    lng: -98.2403
  })

  const locations = {
    chicago: {name: "Chicago" , coords: [41.87293307198309, -87.6241992014007]},
    newyork: {name: "New York" , coords: [40.74990123241385, -73.99125669275521]},
    baltimore: {name: "Baltimore" , coords: [39.286980852738864, -76.61063724122768]},
    lasvegas: {name: "Las Vegas" , coords: [36.104513967513135, -115.17950901317117]},
    cancun: {name: "Cancun" , coords: [21.13425337242669, -86.74584281344949]},
    mazatlan: {name: "Mazatlan" , coords: [23.25557877887862, -106.45852682074252]},
    guadalajara: {name: "Guadalajara" , coords: [20.703870624056464, -103.32770485383456]}
  }


console.log(center)

  return (
    <div className="map-window">
      <h3>HERE COMES THE MAP</h3>
      <MapContainer center={[center.lat, center.lng]} zoom={14} scrollWheelZoom={false} className="map-map" ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[26.0311, -98.2403]} icon={icon}>
          <Popup>
            Alsara. <br /> Novedades y Accesorios
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
      <FlyToButton map={map} locations={locations.chicago}/>
      <FlyToButton map={map} locations={locations.newyork}/>
      <FlyToButton map={map} locations={locations.baltimore}/>
      <FlyToButton map={map} locations={locations.lasvegas}/>
      <FlyToButton map={map} locations={locations.cancun}/>
      <FlyToButton map={map} locations={locations.guadalajara}/>
      <FlyToButton map={map} locations={locations.mazatlan}/>
    </div>
  )
}

export default MapWindow
