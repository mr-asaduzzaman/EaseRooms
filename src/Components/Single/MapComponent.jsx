import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons not showing correctly in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
    const hotelPosition = [24.2515, 89.9198]; // Replace with the hotel's actual coordinates (latitude, longitude)

    return (
        <div className="map-container" style={{ height: '400px', width: '80%', margin: 'auto', padding:'5px', backgroundColor:'black', borderRadius: '5px', marginBottom: '20px'}}>
            <MapContainer
                center={hotelPosition}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={hotelPosition}>
                    <Popup>
                        Our Hotel Location <br /> Visit us!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
