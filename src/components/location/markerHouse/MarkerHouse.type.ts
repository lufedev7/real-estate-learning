import { type Map } from 'leaflet'

export interface MarkerHouseProps {
  selectMarker: (position: positionType, fn: fnType) => void
}

interface positionType {
  lat: number
  lng: number
}

type fnType = Map
