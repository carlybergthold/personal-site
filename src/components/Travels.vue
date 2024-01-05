<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/cam-and-carly.jpeg" class="us-image">
        <div class="mb-4" >More info coming soon!</div>
        <div class="tabs-container has-text-weight-bold has-text-white"
          :class="$mq.above(640) ? 'tabs-container-desktop' : 'tabs-container-mobile'">
          <div @click='selectTab(1)' class="pink-background tab">{{ $mq.above(640) ? 'FLORIDA' : 'FL' }}
            <b-icon pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(2)' class="yellow-background tab">{{ $mq.above(640) ? 'LOUISIANA' : 'LA' }}</div>
          <div @click='selectTab(3)' class="teal-background tab">{{ $mq.above(640) ? 'NEW MEXICO' : 'NM' }}</div>
          <div @click='selectTab(4)' class="orange-background tab">{{ $mq.above(640) ? 'ARIZONA' : 'AZ' }}</div>
        </div>
        <div class="mt-4">
          <div v-if="activeTab == 1">
            <div class="has-text-weight-bold">Panama City Beach</div>
            <div>January 1st - February 1st</div>
          </div>
          <div v-if="activeTab == 2">
            <div class="has-text-weight-bold">New Orleans</div>
            <div>February 1st - March 2nd</div>
          </div>
          <div v-if="activeTab == 3">
            <div class="has-text-weight-bold">Santa Fe</div>
            <div>March 10th - April 13th</div>
          </div>
          <div v-if="activeTab == 4">
            <div class="has-text-weight-bold">Sedona</div>
            <div>April 16th - May 18th</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Travels',
  title: 'Carly Bergthold - Travels',
  data() {
      return {
          activeTab: 1
      };
  },
  methods: {
    selectTab(i) {
      this.activeTab = i;
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
.tabs-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 2rem;
}
.tabs-container-desktop {
  gap: 0.5rem;
  flex-flow: row wrap;
}
.tabs-container-mobile {
  width: 100%;
  background-color: lightblue;
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.tabs-container-desktop .tab {
  width: 22%;
}
.tabs-container-mobile .tab {
  width: 25%;
}
</style>