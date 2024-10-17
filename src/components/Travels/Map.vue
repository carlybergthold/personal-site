<template>
    <l-map
      :zoom="5"
      :center="[defaultCenterLat, defaultCenterLng]"
      style="height: 100%; width: 100%"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <l-marker
        v-for="(location, index) in allLocations"
        :key="index"
        :lat-lng="[location.latitude, location.longitude]"
        :icon="defaultIcon"
      >
        <l-popup>{{ location.name }}<br>{{ location.description }}</l-popup>
      </l-marker>
    </l-map>
  </template>
  
  <script>
    import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
    import "leaflet/dist/leaflet.css";
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });

    const flagIconUrl = "https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg";

    export default {
        props: {
            allLocations: {
                type: Array,
                required: true
            }
        },
        name: "MapComponent",
        components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
        },
        data() {
        return {
            defaultCenterLat: 34.0522,
            defaultCenterLng: -118.2437,
            defaultIcon: L.icon({
                iconUrl: flagIconUrl, 
                iconSize: [25, 41], 
                iconAnchor: [12, 41], 
                popupAnchor: [1, -34], 
                shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
                shadowSize: [41, 41],  
                shadowAnchor: [12, 41]
            })
        };
        },
        methods: {
            createFlagIcon(location) {
            return L.icon({
                iconUrl: iconUrl,
                iconSize: [25, 41], 
                iconAnchor: [12, 41], 
                popupAnchor: [1, -34], 
                shadowUrl: require('leaflet/dist/images/marker-shadow.png'), 
                shadowSize: [41, 41],  
                shadowAnchor: [12, 41] 
            });
            }
        }
    };
  </script>
  
  <style>
  .leaflet-container {
    height: 100%;
    width: 100%;
  }
  </style>
  