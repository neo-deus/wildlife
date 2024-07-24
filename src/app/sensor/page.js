// pages/SensorDetailsPage.jsx
"use client"
import React, { useState } from 'react';
import SensorTile from './sensortile';
import SensorForm from '@/components/sensor/sensorform';

const SensorDetailsPage = () => {
  const [sensors, setSensors] = useState([
    // Sample data, replace with actual data fetching logic
    { id: 'EMT2-001', name: 'Echo Meter Touch 2', latitude: 66.735, longitude: 69.556, status: 'Active' },
    { id: 'EMT2-002', name: 'Echo Meter Touch 2', latitude: 66.740, longitude: 69.560, status: 'Inactive' },
    // Add more sample sensors as needed
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddSensor = () => {
    setShowForm(true);
  };

  const handleSaveSensor = (newSensor) => {
    setSensors([...sensors, newSensor]);
    setShowForm(false);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sensor Details</h1>
        <button
          onClick={handleAddSensor}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Sensor
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-10 mx-auto border w-[600px] shadow-lg rounded-md bg-white">
            <SensorForm onSave={handleSaveSensor} onCancel={handleCancelForm} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sensors.map(sensor => (
          <SensorTile key={sensor.id} sensor={sensor} />
        ))}
      </div>
    </div>
  );
};

export default SensorDetailsPage;