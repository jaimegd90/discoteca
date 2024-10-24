import React from 'react';
import {APIProvider, ControlPosition, Map, MapControl, InfoWindow, Pin, AdvancedMarker, Marker} from '@vis.gl/react-google-maps';

export const Maps = () => (
  <APIProvider apiKey={'AIzaSyDZcvG0K60A02UrVHOxZGRcDSU3sO3N6-I'}>
   <Map zoom={15} center={{lat: 38.00151807482794, lng: -1.1452208693175083}} mapId={'8d7998ad1ce78b49'} style={{width: '53vw', height: '45vh'}}>
      <MapControl position={ControlPosition.TOP_RIGHT}>
      ...
      </MapControl>
      <InfoWindow position={{lat: 38.00151807482794, lng: -1.1452208693175083}}>
           ...
        </InfoWindow>
        <Marker position={{lat: 38.00151807482794, lng: -1.1452208693175083}}/>
        <AdvancedMarker position={{lat: 38.00151807482794, lng: -1.1452208693175083}}>
        <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
    </Map>
  </APIProvider>
);