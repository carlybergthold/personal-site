<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/cam-and-carly.jpeg" class="us-image">
        <div class="mb-4" >More info coming soon!</div>
        <div class="tabs-container has-text-weight-bold has-text-white"
          :class="$mq.above(640) ? 'tabs-container-desktop' : 'tabs-container-mobile'">
          <div @click='selectTab(1)' class="pink-background tab">{{ $mq.above(640) ? 'FLORIDA' : 'FL' }}
          </div>
          <div @click='selectTab(2)' class="yellow-background tab">{{ $mq.above(640) ? 'LOUISIANA' : 'LA' }}
            <b-icon pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(3)' class="teal-background tab">{{ $mq.above(640) ? 'NEW MEXICO' : 'NM' }}</div>
          <div @click='selectTab(4)' class="orange-background tab">{{ $mq.above(640) ? 'ARIZONA' : 'AZ' }}</div>
        </div>
        <div class="m-4" :class="getBorderStyle()">
          <div v-if="activeTab == 1" class="has-text-left ml-2 mr-2">
            <div class="location-container">
              <div class="has-text-weight-bold has-text-centered">Panama City Beach</div>
              <div class="has-text-centered">January 1st - February 1st</div>
              <img src="@/assets/images/pcb/florida-condo.jpeg" class="blog-image">
              <div class="image-description">Our little condo a quarter mile from the beach</div>
            </div>
            <div class="dropdown strikethrough" @click="showPcbVignettes = !showPcbVignettes">
              Highlights
              <b-icon pack="fas" :key="showPcbVignettes" :icon="showPcbVignettes ? 'angle-up' : 'angle-down'" size="is-small"></b-icon>
            </div>
            <div v-if="showPcbVignettes">
              <div><b>Lunch break beach walks</b></div>
              <p>As long as it wasn't raining, freezing, or blustery (hello windburn!), we made the trek to the beach every work day after lunch. This early in the year, the water is too cold to get in, but you can join the retirees dotting the shore in shell hunting, staring into the roiling sea, and, of course, giving "The Nod and Wave" when you pass by.</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/pcb/beach-pier.jpeg" class="blog-image">
                  <div class="image-description">Public beach access gate 36. ifyky</div>
                </div>
                <div>
                  <img src="@/assets/images/pcb/cam-beach.jpeg" class="blog-image">
                  <div class="image-description">Cam protected against the winter weather</div>
                </div>
              </div>
              <div><b>Skittles Royale</b></div>
              <p>The aforementioned walk to the beach took us past a scrubby patch of grass where our cat friend lives in his very own little house. Friend is perhaps a strong term, as he never did let me touch him, but that didn't stop me from naming him Skittles Royale (S.R., or Senior, for short) and eagerly spying him out daily. Truly a neighborhood icon.</p>
              <div class="image-container">
                <div>

                <img src="@/assets/images/pcb/skittles-royale.jpeg" class="blog-image">
                <div class="image-description">The man himself</div>
                </div>
                <div>

                <img src="@/assets/images/pcb/skittles-royale-house.jpeg" class="blog-image">
                <div class="image-description">Senior's house</div>
                </div>
              </div>
              <div><b>State Parks</b></div>
              <p>We were both pleasantly surprised by the quality and quantity of state parks in the PCB area. We spent many weekends exploring them - me looking for alligators (no success, but we did see one snake), and Cameron hoping to steer me away from all reptiles. Topsail Preserve State Park was a highlight, but my favorite was Grayton Beach State Park, where you can hike to the beach, through sand dunes, or to a <a href="https://www.co.walton.fl.us/97/Coastal-Dune-Lakes" target="_blank">coastal dune lake.</a></p>
              <div class="image-container">
                <div>

                <img src="@/assets/images/pcb/grayton-dune.jpeg" class="blog-image">
                <div class="image-description">Cam by the sand dunes</div>
                </div>
                <div>

                <img src="@/assets/images/pcb/grayton-shells.jpeg" class="blog-image">
                <div class="image-description">Part of the path was made of shells!</div>
                </div>
              </div>
              <div><b>Oyster City Brewing</b></div>
              <p>You know we're always going to tour the best breweries when we travel! Oyster City is an award-winning brewery in nearby Apalachicola, and while we didn't quite make it all the way to the mothership, the local restaurants all loyally carry Oyster City beer, so we had plenty of
              sampling opportunities. My favorite is Mangrove, their mango pale ale, and Cam is partial to the Hooter Brown.
              </p>
              <div><i>Honorable Beer Mention: The Craft Bar</i></div>
              <p>For my Nashville homies, this place was basically Craft Brewed (RIP) with amazing food and loads of indoor space. If you ever go, make sure to stop by the liquor shop next door - we got to chat with a couple guys there about their favorite breweries in the area. Top notch service!
              </p>
            </div>
            <div v-if="showPcbThoughts">
              <p>Winter in Northern Florida is ripe for quietly modest exploration.</p>
              <p>The spring breakers are long gone, replaced by retired couples seeking respite from States far above us, the occasional weekend visitor, and long, meandering stretches of open space and time.</p>
              <p>Immersed in simple delights like befriending the neighborhood cat, lunch break strolls on the beach, and movie nights, we often ignore our surroundings in favor of rest and relaxation. But, on occasion, we go out.</p>
              <p>For me, walking down unfamiliar roads is a holy experience (prepare thyself, for the ocean bringeth out my existentialism). Wordsworth took deep pleasure in the simple act of walking:</p>
              <p>To muse, to creep, to halt at will, to gaze.</p>
              <p>This rings true in nature, as we pad down trails leading to pristine beaches, sand dunes, and coastal lakes, but it’s proved out perhaps even more on the sidewalks around our condo, ringed with a pedestrian milieu of surf shops, seafood restaurants, and kitschy attractions.</p>
              <p>Musings come easily in the off season.</p>
            </div>
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
          activeTab: 1,
          showPcbThoughts: false,
          showPcbVignettes: false,
          icon: 'angle-up'
      };
  },
  methods: {
    selectTab(i) {
      this.activeTab = i;
    },
    getBorderStyle() {
      if (this.activeTab === 1) {
        return 'pink-border'
      } else if (this.activeTab === 2) {
        return 'yellow-border'
      } else if (this.activeTab === 3) {
        return 'teal-border'
      } else {
        return 'orange-border'
      }
    },
    getIconWhenSomeRequirementIsMet() {
      const properties = {
        pack: 'fas',
        icon: this.showPcbVignettes ? 'angle-up' : 'angle-down'
      };

      console.log(properties.icon)

      return properties;
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
.pink-border {
  border: 1px solid var(--pink);
  border-radius: 10px;
}
.dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.4rem;
  font-weight: 600;
  margin: 1rem 0;
}
.light-pink-background {
  background-color: rgba(233, 79, 115, 0.525);
}
.image-container {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: center;
  text-align: center;
}
.blog-image {
  width: 20rem;
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
    border-top: 2px solid #dfdfdf;
    content:"";
    margin: 0 auto;
    position: absolute;
    top: 50%; left: 0; right: 0; bottom: 0;
    z-index: -1;
    width: 90%;
}
.location-container {
    display: flex;
    flex-flow: column;
    align-items: center;
}
</style>