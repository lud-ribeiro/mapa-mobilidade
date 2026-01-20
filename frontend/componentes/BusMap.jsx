
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function ChangeView({ center }) {
  const map = useMap();
  if (center) map.setView(center, 14);
  return null;
}

export default function BusMap({ selectedLine }) {
  const center = selectedLine
    ? [selectedLine.lat, selectedLine.lng]
    : [-15.7942, -47.8822];

  return (
    <MapContainer center={center} zoom={12} style={{ height: "500px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {selectedLine?.stops.map((stop, index) => (
        <Marker key={index} position={[stop.lat, stop.lng]}>
          <Popup>{stop.name}</Popup>
        </Marker>
      ))}

      {selectedLine && (
        <>
          <Polyline
            positions={selectedLine.stops.map(s => [s.lat, s.lng])}
          />
          <ChangeView center={center} />
        </>
      )}
    </MapContainer>
  );
} 



