// components/MapComponent.js
"use client"
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import L from 'leaflet';

// You'll need to import your custom icon images
import dangerIcon from '../../../public/danger-icon.png'
import tigerIcon from '../../../public/tiger-icon.jpg'
import elephantIcon from '../../../public/elephant-icon.png'

const MapComponent = ({ threats, animalHotspots }) => {
  const mapCenter = [26.6445, 93.3525] // Set this to your park's center coordinates
  const zoomLevel = 12 // Adjust based on the size of your park

  useEffect(() => {
    // This is to handle the default icon issue
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/leaflet/marker-icon-2x.png',
      iconUrl: '/leaflet/marker-icon.png',
      shadowUrl: '/leaflet/marker-shadow.png',
    });
  }, []);

  const customIcons = {
    danger: new L.Icon({
      iconUrl: '/danger-icon.png',
      iconSize: [25, 25],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    }),
    tiger: new L.Icon({
      iconUrl: '/tiger-icon.jpg',
      iconSize: [25, 25],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    }),
    elephant: new L.Icon({
      iconUrl: '/elephant-icon.png',
      iconSize: [25, 25],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    })
  }

  return (
    <MapContainer center={mapCenter} zoom={zoomLevel} style={{ height: '630px', width: '100%' }}>
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