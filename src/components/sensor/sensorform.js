import React, { useState } from 'react';

const SensorForm = ({ onSave, onCancel }) => {
  const [sensorData, setSensorData] = useState({
    id: '',
    name: '',
    latitude: '',
    longitude: '',
    region_id: '',
    radius: '',
    deployment_date: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSensorData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(sensorData);
  };

  return (
    <div className="bg-pink-200 p-6 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sensor Details:</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="id" className="w-1/3">Sensor ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={sensorData.id}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="name" className="w-1/3">Sensor Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={sensorData.name}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="latitude" className="w-1/3">Latitude:</label>
          <input
            type="number"
            id="latitude"
            name="latitude"
            value={sensorData.latitude}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="longitude" className="w-1/3">Longitude:</label>
          <input
            type="number"
            id="longitude"
            name="longitude"
            value={sensorData.longitude}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="region_id" className="w-1/3">Region ID:</label>
          <input
            type="text"
            id="region_id"
            name="region_id"
            value={sensorData.region_id}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="radius" className="w-1/3">Radius:</label>
          <input
            type="number"
            id="radius"
            name="radius"
            value={sensorData.radius}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="deployment_date" className="w-1/3">Date of Deployment:</label>
          <input
            type="date"
            id="deployment_date"
            name="deployment_date"
            value={sensorData.deployment_date}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="status" className="w-1/3">Operational Status:</label>
          <select
            id="status"
            name="status"
            value={sensorData.status}
            onChange={handleChange}
            className="w-2/3 p-2 border border-gray-300 rounded"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            SAVE
          </button>
          <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SensorForm;