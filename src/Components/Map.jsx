

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// Initial position
const initialPosition = [23.777176, 90.399452];

const LocateUserButton = ({ onLocate }) => {
  const map = useMap();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
          onLocate([latitude, longitude]); // Pass the new position to parent
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000,  // Ensure it appears above the map
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Get My Location
    </button>
  );
};

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState(initialPosition);

  return (
    <div className='relative p-5'>
      <div className='text-center space-y-5 p-3 md:mb-5'>
        <h3 className='text-1xl text-orange-600'>Map</h3>
        <h2 className='font-bold text-3xl'>Our Location</h2>
      </div>
      <MapContainer className='h-72 w-full z-0 relative' center={markerPosition} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition}>
          <Popup>
            {markerPosition === initialPosition ? 'Attention Network' : 'You are here'}
          </Popup>
        </Marker>
        <LocateUserButton onLocate={setMarkerPosition} />
      </MapContainer>
    </div>
  );
};

export default Map;
