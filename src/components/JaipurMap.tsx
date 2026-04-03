import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const locations = [
  { name: "Paladin HQ - Murlipura", lat: 26.9620, lng: 75.7700 },
  { name: "Paladin Office - Vaishali Nagar", lat: 26.9124, lng: 75.7400 },
  { name: "Paladin Office - Mansarovar", lat: 26.8633, lng: 75.7621 },
  { name: "Paladin Outpost - Jhotwara", lat: 26.9450, lng: 75.7350 },
  { name: "Paladin Base - Sodala", lat: 26.9210, lng: 75.7690 },
  { name: "Paladin Station - Vidyadhar Nagar", lat: 26.9530, lng: 75.7850 },
  { name: "Paladin Point - Civil Lines", lat: 26.9100, lng: 75.7900 },
];

const CENTER: [number, number] = [26.935, 75.770];

const MapResizer = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 200);
  }, [map]);
  return null;
};

const JaipurMap = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
      <MapContainer
        center={CENTER}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <MapResizer />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.name} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.name}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default JaipurMap;
