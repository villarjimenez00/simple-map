import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { LatLngTuple } from 'leaflet'

const defaultLatLng: LatLngTuple = [40.3914663, -3.6631075]

const zoom: number = 18

const MyMap: React.FC = () => {
  return (
    <Map id="mapId" center={defaultLatLng} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
    </Map>
  )
}

export default MyMap
