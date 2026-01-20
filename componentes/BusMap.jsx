import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, 14, { duration: 1.5 });
  }, [center, map]);
  return null;
}

export default function BusMap({ selectedLine }) {
  const defaultCenter = [-15.7942, -47.8822];
  const center = selectedLine ? [selectedLine.lat, selectedLine.lng] : defaultCenter;

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={defaultCenter} 
        zoom={12} 
        style={{ height: "100%", width: "100%" }}
        zoomControl={false} // Desativado para um visual mais limpo
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ChangeView center={center} />

        {selectedLine?.stops?.map((stop, index) => (
          <Marker key={index} position={[stop.lat, stop.lng]}>
            <Popup>
              <div className="font-bold">{stop.name}</div>
              <div className="text-xs text-gray-500">Parada de ônibus</div>
            </Popup>
          </Marker>
        ))}

        {selectedLine && (
          <Polyline 
            positions={selectedLine.stops.map(s => [s.lat, s.lng])} 
            pathOptions={{ color: "#2563EB", weight: 5, opacity: 0.7 }}
          />
        )}
      </MapContainer>
    </div>
  );
}


