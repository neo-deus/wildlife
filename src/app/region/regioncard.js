// components/RegionCard.jsx
import React from 'react';

const RegionCard = ({ region }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-blue-500 text-white p-4">
        <h3 className="text-xl font-bold">{region.name}</h3>
        <p className="text-sm">ID: {region.id}</p>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Wildlife Detected</h4>
          <div className="flex flex-wrap gap-2">
            {region.wildlife.map((animal, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {animal}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-lg mb-2">Birds Detected</h4>
          <div className="flex flex-wrap gap-2">
            {region.birds.map((bird, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {bird}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-2">Recent Threats</h4>
          <ul className="list-disc list-inside">
            {region.threats.map((threat, index) => (
              <li key={index} className="text-sm text-gray-600">
                {threat.date}
                {/* {threat.type} - {new Date(threat.date).toLocaleDateString()} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegionCard;