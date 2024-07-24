// components/SensorTile.jsx
const SensorTile = ({ sensor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{sensor.name}</h3>
      <p className="text-sm text-gray-600">ID: {sensor.id}</p>
      <p className="text-sm text-gray-600">Lat: {sensor.latitude}</p>
      <p className="text-sm text-gray-600">Lon: {sensor.longitude}</p>
      <p className="text-sm text-gray-600">Status: 
        <span className={`ml-1 ${sensor.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
          {sensor.status}
        </span>
      </p>
    </div>
  );
};

export default SensorTile;