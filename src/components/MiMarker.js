import { Marker, Popup, CircleMarker } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";




export default function MiMarker({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <Marker 
        position={item.coordenadas.split(", ").map(el => parseFloat(el))} 
        icon={new Icon({
            iconUrl: item.img_url,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })}
        >
            <Popup>
                <img src={item.img_url} width="300px" alt={item.lugar}onClick={() => setOpen(true)} />
                <p>{item.lugar}</p>
                    <Lightbox
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                        open={open}
                        close={() => setOpen(false)}
                        
                        slides={[
                            {src: item.img_url, description: item.descripcion},
                        ]}
                        plugins={[Captions]}
                        captions = {{descriptionTextAlign: 'center'}}
                    />

            </Popup>
        </Marker>
    )
}

