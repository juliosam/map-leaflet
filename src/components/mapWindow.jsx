import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Icon } from 'leaflet';
import { useState} from 'react';
import FlyToButton from './flyToButton';
import Search from './search';
import Search2 from './search2';

///////////=============usar datos remotos
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const icon = new Icon({
  iconSize: [30, 30],
  iconUrl: '/user-marker.svg',
  iconAnchor: [15, 30]
})

const icon2 = new Icon({
  iconSize: [24,24],
  iconUrl: '/location-marker.svg',
  iconAnchor: [12, 24]
})

const locations = [
  {id: 1, name: "Chicago" , coords: [41.87293307198309, -87.6241992014007]},
  {id: 2, name: "New York" , coords: [40.74990123241385, -73.99125669275521]},
  {id: 3, name: "Baltimore" , coords: [39.286980852738864, -76.61063724122768]},
  {id: 4, name: "Las Vegas" , coords: [36.104513967513135, -115.17950901317117]},
  {id: 5, name: "Cancun" , coords: [21.13425337242669, -86.74584281344949]},
  {id: 6, name: "Mazatlan" , coords: [23.25557877887862, -106.45852682074252]},
  {id: 7, name: "Guadalajara" , coords: [20.703870624056464, -103.32770485383456]},
  {id: 8, name: "Austin" , coords: [30.267407516061283, -97.76828579010953]},
  {id: 9, name: "Monterrey" , coords: [25.72431724557821, -100.31410573393214]},
  {id: 10, name: "CDMX" , coords: [19.440687237838386, -99.20277849047537]},
  {id: 11, name: "Chihuahua" , coords: [28.705843398355437, -106.13502448941327]},
  {id: 12, name: "Guanajuato" , coords: [21.01862178572715, -101.25756650176406]},
  {id: 13, name: "Rio Grande" , coords: [23.71594422840233, -102.90808033103946]},
  {id: 14, name: "Poza Rica" , coords: [20.548216555360177, -97.45915332832692]},
  {id: 15, name: "Houston" , coords: [29.68531899090328, -95.41242027481584]},
  {id: 15, name: "South Padre Island" , coords: [26.090899209291972, -97.16508349460821]}
]


const MapWindow = ({info}) => {

  const [map, setMap] = useState(null)

  const center = {id: "center", name: "Alsara" , coords: [26.0311, -98.2403]}

  return (
    <div className="map-window">
      <h2>JULIO'S JOURNEY</h2>
      <Search locations={locations} map={map}/>
      <Search2 info={info} map={map}/>
      <MapContainer center={center.coords} zoom={4} scrollWheelZoom={false} className="map-map" ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[26.0311, -98.2403]} icon={icon}>
          <Popup>
            Alsara. <br /> Novedades y Accesorios
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
        {locations.map(location => { 
          return ( 
            <Marker position={location.coords} icon={icon2} key={location.id}>
              <Popup>
                {location.name}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
      {/* {
        locations.map(location => {
          return(
            <FlyToButton key={location.id} map={map} location={location}/>
          )
        })
      }
      <FlyToButton key={center.id} map={map} location={center}/> */}
    </div>
  )
}

export default MapWindow
