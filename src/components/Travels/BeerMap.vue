<template>
  <section class="hero">
      <div class="best-of-container">
        <Map 
          :allLocations="allLocations" 
          :selectedLocation="selectedLocation" 
          :goToLocation="goToLocation"
        ></Map>
      </div>
  </section>
  <div v-if="showLocationDetail" class="location-container">
    <div class="close-button">
      <b-icon
        pack="fas"
        icon="times-circle"
        size="is-medium"
        type="is-white"
        @click="showLocationDetail = false"
      ></b-icon>
    </div>
    <font-awesome-icon :icon="['fas', getFilterIcon(selectedLocation.typeId)]" class="location-icon" />
    <div class="location-details">
      <div class="location-title">{{ selectedLocation.name }}</div>
      <div class="location-description">
        <div>{{ selectedLocation.selected }}</div>
        <div>{{ selectedLocation.description }}</div>
        <a v-if="selectedLocation.website" :href="selectedLocation.website" target="_blank" class="location-website">Visit their website</a>
      </div>
    </div>  
    <!-- <div class="location-action">
      <div>     
        <div>Carly review here? some text about how I like it? what if I don't want to actually write a story about every single place</div> 
        <b-icon
          pack="fas"
          icon="star"
          size="is-medium"
          type="is-black"
        ></b-icon>
      </div>
    </div> -->
  </div>
  <!-- <BottomBar></BottomBar> -->
  <div class="bottom-bar">
      <div>      
          <b-icon
              pack="fas"
              icon="search"
              size="is-medium"
              type="is-white"
              class="filter-icon"
              @click="closeAllPopups(), showSearch = true"
          ></b-icon>
      </div>        
      <div>      
          <b-icon
              pack="fas"
              icon="filter"
              size="is-medium"
              type="is-white"
              class="filter-icon"
              @click="closeAllPopups(), showFilter = true"
          ></b-icon>
      </div>
      <div class="airbnb"></div>
  </div>
  <div v-if="showFilter" class="filter">
    <div class="close-button">
      <b-icon
        pack="fas"
        icon="times-circle"
        size="is-medium"
        type="is-white"
        @click="showFilter = false"
      ></b-icon>
    </div>
    <div class="filter-main">
      <div class="filter-title">Filters</div>
      <div class="filter-container">
        <div v-for="filter in filters" 
        :key="filter.typeId" 
        class="filter-option-square"
        @click="addRemoveFilter(filter.typeId)">
        {{filter.name}}
      </div>
      </div>
    </div>
    <div class="filter-main">
      <div class="filter-title">Filters</div>
      <div class="filter-container">
        <div v-for="filter in filters" 
        :key="filter.typeId" 
        class="filter-option-pill"
        @click="addRemoveFilter(filter.typeId)">
        {{filter.name}}
      </div>
      </div>
    </div>
    <div class="filter-bottom">
      <div class="cursor-pointer" @click="clearAllFilters">Clear All</div>
      <button class="button">Show</button>
    </div>
  </div>
  <div v-if="showSearch" class="search">
    <div class="close-button">
      <b-icon
        pack="fas"
        icon="times-circle"
        size="is-medium"
        type="is-white"
        @click="showSearch = false"
      ></b-icon>
    </div>
    <div class="search-bar">Search</div>
  </div>
</template>

<script>
import LocationContainer from './LocationContainer.vue';
import VisitedLocations from '../../assets/data/visited-locations';
import Map from './Map.vue';
import BottomBar from '../Nav/BottomBar.vue';

export default {
  components: {
    LocationContainer,
    Map,
    BottomBar
  },
  name: 'BeerMap',
  title: 'Carly Bergthold - Beer Map',
  data() {
      return {
          filters: [
            {
              typeId: 1,
              name: 'Restaurant',
              isActive: false
            }, 
            {
              typeId: 2,
              name: 'Bar',
              isActive: false
            },
            {              
              typeId: 3,
              name: 'National Park',
              isActive: false
            },
            {              
              typeId: 4,
              name: 'State Park',
              isActive: false
            }
          ],
          selectedLocation: {},
          allLocations: VisitedLocations,
          showLocationDetail: false,
          showFilter: false,
          showSearch: false
      };
  },
  methods: {
    addRemoveFilter(typeId) {
      const filter = this.getFilterByTypeId(typeId);
      filter.isActive = !filter.isActive;
    },
    goToLocation(location) {
      this.selectedLocation = location;
      this.closeAllPopups();
      this.showLocationDetail = true;
    },
    getFilterByTypeId(typeId) {
      return this.filters.find(f => f.typeId === typeId);
    },
    clearAllFilters() {
      this.filters.forEach(filter => filter.isActive = false);
    },
    getFilterIcon(typeId) {
      console.log(typeId)
      switch (typeId) {
        case 1:
          return 'utensils';
        case 2:
          return 'beer-mug-empty';
        case 3:
          return 'tree';
        case 4:
          return 'mountain';
      }
    },
    closeAllPopups() {
      this.showLocationDetail = false;
      this.showFilter = false;
      this.showSearch = false;
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
.best-of-container {
    border: 1px solid var(--green);
    display: flex;
    flex-flow: row nowrap;
    height: 90vh;
}
.best-of-location {
    padding: 1rem;
    position: relative;
    background-color: #fee3e3d4;
    margin: 0.8rem;
    border-radius: 6px;
    cursor: pointer;
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
.location-website {
  color: white !important;
  font-style: italic;
  margin-top: 1rem;
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

.chosen-filter {
  background-color: var(--orange);
  position: relative;
  color: white;
}

.location-container {
  position: fixed;
  bottom: 4rem;
  left: 1rem;
  right: 1rem;
  border-radius: 10px;
  height: 20rem;
  background-color: var(--primary-font-color);
  color: white;
  display: flex;
  flex-direction: column;
  z-index: 1400;
  padding-top: 3rem;
}

.close-button {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1700;
}

.location-icon {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 1700;
  height: 2rem;
}

.location-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
}

.location-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}   

.location-description {
  display: flex;
  flex-flow: column;
}

.location-action {
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1500;
}

.filter-icon {
  cursor: pointer;
}

.filter {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: lightblue;
  z-index: 1600;
  border-radius: 24px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 2rem;
}

.filter-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filter-title {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem;
}

.filter-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
}

.filter-option-square {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  background-color: var(--primary-font-color);
  color: white;
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  width: 46%;
}

.filter-option-pill {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  background-color: var(--primary-font-color);
  color: white;
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  width: 46%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-bottom {
  display: flex;
  justify-content: space-around;
  font-weight: 500;
}

.button {
  border-radius: 12px;
  color: var(--primary-font-color);
  background-color: white;
}

.search {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: #333;
  color: white;
  z-index: 1000;
  border-radius: 24px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
}

.search-bar {
  font-size: 1.5rem;
  font-weight: 500;
  background: white;
  border-radius: 12px;
  height: 3rem;
  width: 80%;
  color: black;
  padding: 12px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin: 4rem 0 1rem 0;
}

.airbnb {
  height: 20px;
  width: 35px;
  background-color:white;
  border-radius: 10px;
  border: 1px solid black;
}

@media screen and (max-width: 640px) {
  .hidden-in-desktop {
    display: none;
  }
}
</style>