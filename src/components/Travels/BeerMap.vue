<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
        <div class="best-of-container">
          <div class="best-of-locations">
            <div class="map-search-container">
              <div class="map-icon search-icon">              
                <font-awesome-icon icon="magnifying-glass" />
              </div>
              <div>Search</div>
            </div>
            <div class="map-filter-container">
              <div class="filter-title">Filters</div>
              <div class="filter" :class="getFilterClass(1)" @click="addRemoveFilter(1)">Restaurant</div>
              <div class="filter" :class="getFilterClass(2)" @click="addRemoveFilter(2)">Bar</div>
            </div>
            <div v-for="location in filteredLocations" :key="location.name" class="best-of-location" @click="goToLocation(location)">
              <font-awesome-icon :icon="['fas', location.type === 1 ? 'utensils' : 'beer-mug-empty']"  class="location-icon" />
              <div class="small-left-aligned-text">{{location.type === 1 ? 'Restaurant' : 'Brewery'}}</div>
              <div class="best-of-title">{{location.name}}</div>
              <div class="small-left-aligned-text">{{location.description}}</div>
            </div>
          </div>
          <Map 
            :allLocations="allLocations" 
            :selectedLocation="selectedLocation" 
            :goToLocation="goToLocation"
          ></Map>
        </div>
    </div>
  </section>
</template>

<script>
import LocationContainer from './LocationContainer.vue';
import VisitedLocations from '../../assets/data/visited-locations';
import Map from './Map.vue'

export default {
  components: {
    LocationContainer,
    Map
  },
  name: 'BeerMap',
  title: 'Carly Bergthold - Beer Map',
  data() {
      return {
          filters: [],
          selectedLocation: {},
          allLocations: VisitedLocations
      };
  },
  methods: {
    addRemoveFilter(filterType) {
      const index = this.filters.indexOf(filterType);
      if (index > -1) {
        this.filters.splice(index, 1);
      } else {
        this.filters.push(filterType);
      }
    },
    getFilterClass(filterType) {
      return this.filters.includes(filterType) ? 'chosen-filter' : '';
    },
    goToLocation(location) {
      this.selectedLocation = location;
    }
  },
  computed: {
    filteredLocations() {
      return this.filters.length === 0
        ? this.allLocations
        : this.allLocations.filter(x => this.filters.includes(x.type));
    }
  }
}
</script>

<style scoped>
.headline {
  font-size: 2.5rem;
}
p {
  margin: 1rem 0 !important;
}
.us-image {
  width: 20rem;
  border-radius: 10px;
}
.current-state {
  display: flex;
  justify-content: center;
}
.dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.4rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
}
.image-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.vertical-blog-image {
  width: 20rem;
  border-radius: 10px;
}
.horizontal-blog-image {
  width: 25rem !important;
  border-radius: 10px;
}
.image-description {
  font-size: 0.8rem;
  font-weight: 600;
  font-style: italic;
}
.strikethrough {
    position: relative;
    z-index: 1;
}
.strikethrough::before {
    border-top: 1px solid var(--primary-font-color);
    content:"";
    margin: 0 auto;
    position: absolute;
    top: 50%; left: 0; right: 0; bottom: 0;
    z-index: -1;
    width: 90%;
}
.best-of-container {
    border: 1px solid var(--green);
    display: flex;
    flex-flow: row nowrap;
    height: 36rem;
    margin-bottom: 4rem;
}
.best-of-location {
    padding: 1rem;
    position: relative;
    background-color: #fee3e3d4;
    margin: 0.8rem;
    border-radius: 6px;
    cursor: pointer;
}
.best-of-locations {
  width: 45%;
  overflow: auto;
}
.best-of-title {
  padding: 2rem;
}
.small-left-aligned-text {
  font-weight: 600;
  font-size: 12px;
  color: var(--dark-pink);
  text-align: left;
}
.map-icon {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2px;
}
.location-icon {
  float: right;
}
.search-icon {
  float: left;
  margin-right: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.map-search-container {
  background-color: #fee3e3d4;
  border-radius: 6px;
  margin: 0.8rem;
  padding: 0.4rem;
  text-align: left;
}
.map-filter-container {
  display: flex;
  flex-flow: row wrap;
  gap: 0.4rem;
  margin: 0.8rem;
  align-items: center;
}
.filter-title {
  border: 1px solid var(--primary-font-color);
  border-radius: 16px;
  padding: 0.4rem 1.4rem;
}
.filter {
  background-color: #fee3e3d4;
  border-radius: 16px;
  padding: 0.4rem 1.4rem;
  cursor: pointer;
}
.chosen-filter {
  background-color: var(--orange);
  position: relative;
  color: white;
}
@media screen and (max-width: 640px) {
  .hidden-in-desktop {
    display: none;
  }
}
</style>