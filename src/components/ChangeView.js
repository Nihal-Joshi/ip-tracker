import { useMap } from 'react-leaflet';

export default function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}
