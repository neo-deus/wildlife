"use client"
import dynamic from 'next/dynamic'
// import Layout from '../components/Layout'

const MapComponent = dynamic(() => import('@/components/MapComponent/MapComponent'), { ssr: false });

export default function MapPage() {
  // This data would typically come from your API
  const threats = [
    { position: [26.6445, 93.5525], type: 'Gunshot', time: '2024-07-23 14:30' }
  ]

  const animalHotspots = [
    { position: [26.6445, 93.3525], animal: 'tiger', lastSeen: '2024-07-23 12:00' },
    { position: [26.6845, 93.3525], animal: 'elephant', lastSeen: '2024-07-23 13:15' }
  ]

  return (
    <div>
      <h1>Conservation Area Map</h1>
      <MapComponent threats={threats} animalHotspots={animalHotspots} />
    </div>
  )
}