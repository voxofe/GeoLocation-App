import React from "react";
import { useEffect} from "react";
// import {render} from "react-dom";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from "react-leaflet-heatmap-layer";
import 'leaflet/dist/leaflet.css';
import arrayfy from '../scripts/heatMapArray'
// import { addressPoints } from './randomHeatmapData.js';

function UserMap(props){
   const position = [39.0742, 21.8243];

   // console.log("UserMap component")
   // console.log(props.heatmapData)
   const addressPoints = arrayfy(props.heatmapData)
   return(
      <div>
         <Map 
            center={position}
            zoom={7}
            style={{ height: 430, width: "100%", marginTop: 5}}
            
         >
            <HeatmapLayer
               fitBoundsOnLoad
               fitBoundsOnUpdate
               points={addressPoints}
               longitudeExtractor={m => m[1]}
               latitudeExtractor={m => m[0]}
               intensityExtractor={m => parseFloat(m[2])} 
            />
            <TileLayer
               attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
         </Map>
      </div>
   );
}


export default UserMap;