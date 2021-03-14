import React from 'react'
import {
  GoogleMap,
  useLoadScript,
  Circle,
  Marker,
} from '@react-google-maps/api'
import mapStyles from '../styles/mapStyles'

/* Google map component using npm package react-google-maps-api & adding custom styling */

//Setting up responsive rules
let mapWidth = window.innerWidth > 980 ? '45vw' : '100vw'
mapWidth = window.innerWidth < 768 && window.innerWidth > 475 ? '40vw' : mapWidth

//Map height and width
const containerStyle = {
  width: mapWidth,
  height: '100vh',
}

//Map options
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  //zoomControl: true,
}

//Options for the circle on map
const circleOptions = {
  strokeColor: '#FFF',
  strokeOpacity: 0.2,
  strokeWeight: 0,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 150,
  zIndex: 1,
}

//Getting lat and long from acf and setting up the map with coordinates
const GoogleMaps = ({ lat, lng }) => {
  //const libraries = "places";

  const center = { lat, lng }

  //Fetching apikey from .env-file
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //libraries: ["places"],
  })

  if (loadError) return 'Error Loading maps'
  if (!isLoaded) return 'Loading Maps'

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={14}
        center={center}
        options={options}
      >
        <Circle center={center} options={circleOptions} />
        <Marker position={center} />
      </GoogleMap>
    </div>
  )
}

export default React.memo(GoogleMaps)
