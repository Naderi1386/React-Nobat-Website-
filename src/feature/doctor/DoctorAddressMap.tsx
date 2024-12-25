import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
interface DoctorAddressMapPropType {
  x: number;
  y: number;
}
const DoctorAddressMap = ({ x, y }: DoctorAddressMapPropType) => {
  const position = [x,y];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full absolute inset-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  );
};

export default DoctorAddressMap;
