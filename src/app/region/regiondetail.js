// components/RegionDetailModal.jsx
import React from 'react';

const RegionDetailModal = ({ region, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
          <button onClick={onClose} className="text-black close-modal">&times;</button>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-2">Wildlife Population</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {region.wildlifePopulation.map((animal, index) => (
              <div key={index} className="bg-green-100 p-2 rounded">
                <p className="font-medium">{animal.species}</p>
                <p className="text-sm">Count: {animal.count}</p>
              </div>
            ))}
          </div>
          <h4 className="font-semibold text-lg mb-2">Bird Population</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {region.birdPopulation.map((bird, index) => (
              <div key={index} className="bg-yellow-100 p-2 rounded">
                <p className="font-medium">{bird.species}</p>
                <p className="text-sm">Count: {bird.count}</p>
              </div>
            ))}
          </div>
          <h4 className="font-semibold text-lg mb-2">Threat History</h4>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {region.threatHistory.map((threat, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{threat.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(threat.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      threat.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {threat.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegionDetailModal;