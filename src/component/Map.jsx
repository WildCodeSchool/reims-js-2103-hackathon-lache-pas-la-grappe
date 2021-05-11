import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [49.25, 4.02]
        
function Map() {
    return(
        <MapContainer style ={{ width: '100vw', height: '90vh'}} center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )
}

export default Map;


