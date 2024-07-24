// pages/RegionPage.jsx
"use client"
import React, { useState } from 'react';
import RegionCard from './regioncard';
import RegionDetailModal from './regiondetail';

const RegionPage = () => {
  const [regions, setRegions] = useState([
    {
      id: 'R001',
      name: 'Northern Forest',
      wildlife: ['Tiger', 'Elephant', 'Deer'],
      birds: ['Eagle', 'Hornbill', 'Peacock'],
      threats: [
        { type: 'Poaching attempt', date: '2024-07-15' },
        { type: 'Illegal logging', date: '2024-07-10' },
      ],
      wildlifePopulation: [
        { species: 'Tiger', count: 23 },
        { species: 'Elephant', count: 47 },
        { species: 'Deer', count: 158 },
      ],
      birdPopulation: [
        { species: 'Eagle', count: 12 },
        { species: 'Hornbill', count: 34 },
        { species: 'Peacock', count: 56 },
      ],
      threatHistory: [
        { type: 'Poaching attempt', date: '2024-07-15', status: 'Resolved' },
        { type: 'Illegal logging', date: '2024-07-10', status: 'Ongoing' },
        { type: 'Forest fire', date: '2024-06-30', status: 'Resolved' },
      ],
    },
    // Add more regions with detailed data
  ]);

  const [selectedRegion, setSelectedRegion] = useState(null);

  const openModal = (region) => {
    setSelectedRegion(region);
  };

  const closeModal = () => {
    setSelectedRegion(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Conservation Regions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <div key={region.id} onClick={() => openModal(region)} className="cursor-pointer">
            <RegionCard region={region} />
          </div>
        ))}
      </div>
      {selectedRegion && <RegionDetailModal region={selectedRegion} onClose={closeModal} />}
    </div>
  );
};

export default RegionPage;