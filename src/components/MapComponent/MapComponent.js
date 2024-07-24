// components/MapComponent.js
"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

// You'll need to import your custom icon images
import dangerIcon from '../../../public/danger-icon.png'
import tigerIcon from '../../../public/tiger-icon.jpg'
import elephantIcon from '../../../public/elephant-icon.png'

const MapComponent = ({ threats, animalHotspots }) => {
  const mapCenter = [26.6445, 93.3525] // Set this to your park's center coordinates
  const zoomLevel = 11 // Adjust based on the size of your park

  const customIcons = {
    danger: new Icon({
      iconUrl: dangerIcon,
      iconSize: [25, 25]
    }),
    tiger: new Icon({
      iconUrl: tigerIcon,
      iconSize: [25, 25]
    }),
    elephant: new Icon({
      iconUrl: elephantIcon,
      iconSize: [25, 25]
    })
  }

  return (
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {threats.map((threat, index) => (
        <Marker key={`threat-${index}`} position={threat.position} icon={customIcons.danger}>
          <Popup>
            Threat detected: {threat.type} <br />
            Time: {threat.time}
          </Popup>
        </Marker>
      ))}

      {animalHotspots.map((hotspot, index) => (
        <Marker key={`hotspot-${index}`} position={hotspot.position} icon={customIcons[hotspot.animal]}>
          <Popup>
            {hotspot.animal} hotspot <br />
            Last seen: {hotspot.lastSeen}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent