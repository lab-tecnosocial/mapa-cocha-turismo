import { MapContainer, TileLayer, AttributionControl } from 'react-leaflet'
import data from '../data/cocha-turismo.json'
import MiMarker from './MiMarker'


export default function Mapa() {

    return (
        <MapContainer center={[-17.394, -66.161]} zoom={8} attributionControl={false} className="map-container"
        >
            <TileLayer
                attribution='Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://api.mapbox.com/styles/v1/labtecnosocial/cl8krm9hk001l14qqolhzj557/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGFidGVjbm9zb2NpYWwiLCJhIjoiY2ttaHJ2N2FwMGE4NjJ5cXVneHN2cWRzYiJ9.MT3xcDnYAz2m1LvjBHRQwQ"
                
            />
            {data.map((item, index) => (
                <MiMarker key={index} item={item} />
            ))}
            <AttributionControl position="bottomleft" prefix={false} className="atribucion" />

        </MapContainer>
    )
}
