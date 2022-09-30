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

        <Marker position={
            item.coordenadas.split(", ").map(el => parseFloat(el))}
            icon={new Icon({
                iconUrl: item.img_url,
                popupAnchor: [-10, 0],
                shadowUrl: null,
                shadowSize: null,
                shadowAnchor: null,
                iconSize: [32, 32],
                className: 'leaflet-div-icon'
            })}
            eventHandlers={{    
                click: () => {
                    setOpen(true);
                },
                // make the icon bigger and show item.lugar on hover
                

                
                // make the icon temporary bigger when hover
                mouseover: (e) => {
                    e.target.setIcon(new Icon({
                        iconUrl: item.img_url,
                        popupAnchor: [-20, 0],
                        shadowUrl: null,
                        shadowSize: null,
                        shadowAnchor: null,
                        iconSize: [128, 128],
                        className: 'leaflet-div-icon'
                    }));
                },
                mouseout: (e) => {
                    e.target.setIcon(new Icon({
                        iconUrl: item.img_url,
                        popupAnchor: [-10, 0],
                        shadowUrl: null,
                        shadowSize: null,
                        shadowAnchor: null,
                        iconSize: [32, 32],
                        className: 'leaflet-div-icon'
                    }));
                }
                
            }}
        >

            <Lightbox
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                open={open}
                close={() => setOpen(false)}

                slides={[
                    { src: item.img_url, title: item.lugar, description: item.descripcion },
                ]}
                plugins={[Captions]}
                captions={{ descriptionTextAlign: 'center' }}
            />


        </Marker>
    )
}

