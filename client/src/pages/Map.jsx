import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, Marker, Overlay } from "pigeon-maps"


export default function Home() {
    const [center, setCenter] = useState([40.277635, -74.005053])
    const [zoom, setZoom] = useState(18)
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    return (
        
 
    <Map 
      height={300}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
      <Overlay anchor={[40.277635, -74.005053]} >
        <p>Room 1</p>
      </Overlay>
      <Overlay anchor={[40.277762, -74.005109]} >
      <p>Room 2</p>
      </Overlay>
      <Overlay anchor={[40.277856, -74.005173]} >
      <p>Room 3</p>
      </Overlay>
      <Overlay anchor={[40.277991, -74.005162]} >
       <p>Room 4</p>
      </Overlay>
    </Map>

        
    )
}

