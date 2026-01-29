import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";

// Corrige ícones padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MoveMap({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1]) {
      map.flyTo(center, 16, { duration: 1.2 });
    }
  }, [center, map]);
  return null;
}

function MapEvents({ setClickedMarkers }) {
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    // Ao clicar manualmente no mapa, adicionamos um novo ponto à lista
    setClickedMarkers(prev => [...prev, { lat, lng, name: "Ponto selecionado manual" }]);
  });
  return null;
}

export default function BusMap({ selectedLine, selectedStop }) {
  const defaultCenter = [-15.7942, -47.8822];
  const [clickedMarkers, setClickedMarkers] = useState([]);

  // Normalização das paradas da linha (Pontos Azuis fixos)
  const stopsValidos = selectedLine?.stops?.length
    ? selectedLine.stops.map(s => ({
        lat: Number(s.lat ?? s.latitude),
        lng: Number(s.lng ?? s.longitude),
        name: s.name ?? s.nome ?? "Parada"
      })).filter(s => !isNaN(s.lat) && !isNaN(s.lng))
    : [];

  // 🔥 AJUSTE: Efeito que reage ao botão da lista lateral
  useEffect(() => {
    if (selectedStop) {
      const lat = Number(selectedStop.lat ?? selectedStop.latitude);
      const lng = Number(selectedStop.lng ?? selectedStop.longitude);

      if (!isNaN(lat) && !isNaN(lng)) {
        // Se você quiser que o mapa mostre APENAS a parada clicada no botão:
        setClickedMarkers([{ 
          lat, 
          lng, 
          name: selectedStop.name ?? selectedStop.nome,
          isFromButton: true 
        }]);
      }
    }
  }, [selectedStop]);

  // Define o centro do mapa (Prioriza a parada selecionada pelo botão)
  const activeCenter = selectedStop 
    ? [Number(selectedStop.lat ?? selectedStop.latitude), Number(selectedStop.lng ?? selectedStop.longitude)]
    : null;

  return (
    <MapContainer center={defaultCenter} zoom={12} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MapEvents setClickedMarkers={setClickedMarkers} />
      
      {/* Move o mapa sempre que o activeCenter mudar via botão */}
      {activeCenter && <MoveMap center={activeCenter} />}

      {/* 🔵 Renderiza paradas fixas da linha (Azuis) */}
      {stopsValidos.map((stop, i) => (
        <Marker key={`stop-${i}`} position={[stop.lat, stop.lng]}>
          <Popup><strong>Parada:</strong><br/>{stop.name}</Popup>
        </Marker>
      ))}

      {/* 🟡 Renderiza marcadores de clique ou do botão (Amarelos/Verdes) */}
      {clickedMarkers.map((pos, i) => (
        <Marker key={`click-${i}`} position={[pos.lat, pos.lng]}>
          <Popup>
            {pos.isFromButton ? <strong>📍 Selecionada na Lista</strong> : <strong>Ponto Marcado</strong>}
            <br/>{pos.name}
          </Popup>
        </Marker>
      ))}

      {/* 🔴 Linha da rota */}
      {stopsValidos.length > 1 && (
        <Polyline positions={stopsValidos.map(s => [s.lat, s.lng])} color="red" weight={4} opacity={0.7} />
      )}
    </MapContainer>
  );
}