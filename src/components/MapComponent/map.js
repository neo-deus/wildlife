// pages/map.js
import dynamic from 'next/dynamic'
import Layout from '../components/Layout'

// We use dynamic import for the MapComponent because Leaflet requires window object
const MapComponent = dynamic(() => import('../components/MapComponent'), { ssr: false })

export default function MapPage() {
  // This data would typically come from your API
  const threats = [
    { position: [24.6445, 94.7525], type: 'Gunshot', time: '2024-07-23 14:30' }
  ]

  const animalHotspots = [
    { position: [26.6445, 93.3525], animal: 'tiger', lastSeen: '2024-07-23 12:00' },
    { position: [23.6445, 90.3525], animal: 'elephant', lastSeen: '2024-07-23 13:15' }
  ]

  return (
    <Layout>
      <h1>Conservation Area Map</h1>
      <MapComponent threats={threats} animalHotspots={animalHotspots} />
    </Layout>
  )
}