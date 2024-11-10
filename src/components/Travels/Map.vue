<template>
  <l-map
    :zoom="zoom"
    :center="[currentCenterLat, currentCenterLng]"
    style="height: 100%; width: 100%"
    ref="map"
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
      <l-popup>
        <div class="location-popup-container">
          <div class="location-popup-title">{{ location.name }}</div>
          <div class="location-popup-description">
            <div>{{ location.description }}</div>
            <div><a :href="location.website" target="_blank">{{ location.website }}</a></div>
          </div>
        </div>
      </l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
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
    },
    centerLat: {
      type: Number,
      required: true
    },
    centerLng: {
      type: Number,
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
      defaultIcon: L.icon({
        iconUrl: flagIconUrl, 
        iconSize: [25, 41], 
        iconAnchor: [12, 41], 
        popupAnchor: [1, -34], 
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        shadowSize: [41, 41],  
        shadowAnchor: [12, 41]
      }),
      currentCenterLat: this.centerLat,
      currentCenterLng: this.centerLng,
      zoom: 5
    };
  },
  watch: {
    centerLat(newLat) {
      console.log(newLat)
      this.currentCenterLat = newLat;
      this.recenterMap();
    },
    centerLng(newLng) {
      this.currentCenterLng = newLng;
      this.recenterMap();
    }
  },
  methods: {
    async recenterMap() {
      this.zoom = 12;
      if (this.$refs.map && this.$refs.map.mapObject) {
        this.$refs.map.mapObject.setView(
          [this.currentCenterLat, this.currentCenterLng],
          this.$refs.map.mapObject.getZoom()
        );
      }
    }
  }
};
</script>

<style>
.leaflet-container {
  height: 100%;
  width: 100%;
}
.leaflet-popup-content {
  width: 14rem;
  min-height: 8rem;
  font-size: 1rem;
}
.location-popup-container {
  padding: 1rem;
}
.location-popup-title {
  color: var(--teal);
  font-weight: 600;
}
.location-popup-description {
  margin-top: 0.4rem;
}
</style>
