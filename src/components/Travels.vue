<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/images/cam-and-carly.jpeg" class="us-image">
        <div class="tabs-container has-text-weight-bold has-text-white"
          :class="$mq.above(640) ? 'tabs-container-desktop' : 'tabs-container-mobile'">
          <div @click='selectTab(1)' class="pink-background tab">{{ $mq.above(640) ? 'FLORIDA' : 'FL' }}
            <b-icon v-if="activeTab == 1" pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(2)' class="yellow-background tab">{{ $mq.above(640) ? 'LOUISIANA' : 'LA' }}
            <b-icon v-if="activeTab == 2" pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(3)' class="teal-background tab">{{ $mq.above(640) ? 'NEW MEXICO' : 'NM' }}
            <b-icon v-if="activeTab == 3" pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(4)' class="orange-background tab">{{ $mq.above(640) ? 'ARIZONA' : 'AZ' }}
            <b-icon v-if="activeTab == 4" pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(5)' class="green-background tab">{{ $mq.above(640) ? 'CALIFORNIA' : 'CA' }}
            <b-icon v-if="activeTab == 5" pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
          <div @click='selectTab(6)' class="pink-background tab">{{ $mq.above(640) ? 'OREGON' : 'OR' }}
            <b-icon v-if="activeTab == 6" pack="fas" icon="angle-double-left" size="is-small"></b-icon>
          </div>
        </div>
        <div class="m-4" :class="getBorderStyle()">
          <div v-if="activeTab == 1" class="has-text-left ml-2 mr-2">
            <div class="location-container">
              <div class="has-text-weight-bold has-text-centered">Panama City Beach</div>
              <div class="has-text-centered">January 1st - February 1st</div>
              <img src="@/assets/images/pcb/florida-condo.jpeg" class="vertical-blog-image">
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
                  <img src="@/assets/images/pcb/beach-pier.jpeg" class="vertical-blog-image">
                  <div class="image-description">Public beach access gate 36. ifyky</div>
                </div>
                <div>
                  <img src="@/assets/images/pcb/cam-beach.jpeg" class="vertical-blog-image">
                  <div class="image-description">Cam protected against the winter weather</div>
                </div>
              </div>
              <div><b>Skittles Royale</b></div>
              <p>The aforementioned walk to the beach took us past a scrubby patch of grass where our cat friend lives in his very own little house. Friend is perhaps a strong term, as he never did let me touch him, but that didn't stop me from naming him Skittles Royale (S.R., or Senior, for short) and eagerly spying him out daily. Truly a neighborhood icon.</p>
              <div class="image-container">
                <div>

                <img src="@/assets/images/pcb/skittles-royale.jpeg" class="vertical-blog-image">
                <div class="image-description">The man himself</div>
                </div>
                <div>

                <img src="@/assets/images/pcb/skittles-royale-house.jpeg" class="vertical-blog-image">
                <div class="image-description">Senior's house</div>
                </div>
              </div>
              <div><b>State Parks</b></div>
              <p>We were both pleasantly surprised by the quality and quantity of state parks in the PCB area. We spent many weekends exploring them - me looking for alligators (no success, but we did see one snake), and Cameron hoping to steer me away from all reptiles. Topsail Preserve State Park was a highlight, but my favorite was Grayton Beach State Park, where you can hike to the beach, through sand dunes, or to a <a href="https://www.co.walton.fl.us/97/Coastal-Dune-Lakes" target="_blank">coastal dune lake.</a></p>
              <div class="image-container">
                <div>

                <img src="@/assets/images/pcb/grayton-dune.jpeg" class="vertical-blog-image">
                <div class="image-description">Cam by the sand dunes</div>
                </div>
                <div>

                <img src="@/assets/images/pcb/grayton-shells.jpeg" class="vertical-blog-image">
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
              <p>This rings true in nature, as we pad down trails leading to pristine beaches, sand dunes, and coastal lakes, but it's proved out perhaps even more on the sidewalks around our condo, ringed with a pedestrian milieu of surf shops, seafood restaurants, and kitschy attractions.</p>
              <p>Musings come easily in the off season.</p>
            </div>
          </div>
          <div v-if="activeTab == 2" class="has-text-left ml-2 mr-2">
            <div class="location-container">
              <div class="has-text-weight-bold has-text-centered">New Orleans</div>
              <div class="has-text-centered">February 1st - March 2nd</div>
              <img src="@/assets/images/nola/airbnb.jpeg" class="vertical-blog-image">
              <div class="image-description">We stayed on the top floor of this townhouse</div>
            </div>
            <div class="dropdown strikethrough" @click="showNolaVignettes = !showNolaVignettes">
              Highlights
              <b-icon pack="fas" :key="showNolaVignettes" :icon="showNolaVignettes ? 'angle-up' : 'angle-down'" size="is-small"></b-icon>
            </div>
            <div v-if="showNolaVignettes">
              <div><b>Mardi Gras</b></div>
              <p>Mardi Gras is much more than just Fat Tuesday! This city partied for a solid two+ weeks, and we got in on as much as possible. I do not typically like parades. I could (and did!) watch Mardi Gras parades daily, for hours. Just grab a street beer, watch the festivities, and vibe. An unofficial slogan/song of Mardi Gras is “Do whatcha wanna,” and we complied. As if all this wasn't fun enough, our friends Brittany and Tyler came down for the weekend, which really put Mardi Gras over the top!</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/nola/mardi-gras-c-and-c.jpeg" class="vertical-blog-image">
                  <div class="image-description">Getting into the Carnival spirit</div>
                </div>
                <div>
                  <img src="@/assets/images/nola/mardi-gras-toilet.jpeg" class="vertical-blog-image">
                  <div class="image-description">Hoping for toilet "drops" at the Krewe of Tucks parade</div>
                </div>
                <div>
                  <img src="@/assets/images/nola/mardi-gras-mess.jpeg" class="vertical-blog-image">
                  <div class="image-description">I don't envy the city cleaners</div>
                </div>
                <div>
                  <img src="@/assets/images/nola/mardi-gras-us-four.jpeg" class="vertical-blog-image">
                  <div class="image-description">Britt and Tyler</div>
                </div>
              </div>
              <div><b>Swamp tour</b></div>
              <p>Ever since watching the <a href="https://archer.fandom.com/wiki/Airboat" target="_blank">swamp episode</a> of Archer, I've wanted to ride in an airboat, and luckily, our experience didn't involve falling into the water or getting attacked by an alligator. Alligators are more active during warmer months, but we saw several (including a dead, bloated one - RIP Popeye). Even if we hadn't, the trip would have been worth it - the bayou is magical and full of plants, birds, and natural beauty. Our airboat captain also had some sick driving skills!</p>
              <div class="image-container">
                <div>
                <img src="@/assets/images/nola/swamp-birds.jpeg" class="vertical-blog-image">
                <div class="image-description">Birds of the bayou</div>
                </div>
                <div>
                <img src="@/assets/images/nola/swamp-cam.jpeg" class="vertical-blog-image">
                <div class="image-description">Cam and a lil' gator</div>
                </div>
              </div>
              <div><b>Abita Brewery + Mystery House</b></div>
              <p>Since we braved the Lake Pontchartrain Causeway, the longest continuous overwater bridge in the world, to drop by Abita Brewing company, we rounded out the trip by visiting the <a href="https://abitamysteryhouse.com/" target="_blank">Abita Mystery House</a>. You can enter through an old gas station and gaze upon hundreds of thousands of art pieces (trinkets? trash? UFOs???) made by artist John Preble. It truly must be seen to be believed.</p>
              <div class="image-container">
                <div>
                <img src="@/assets/images/nola/abita-house.jpeg" class="vertical-blog-image">
                <div class="image-description">Our new friend</div>
                </div>
                <div>

                <img src="@/assets/images/nola/abita-house-2.jpeg" class="vertical-blog-image">
                <div class="image-description">Should I decorate my office like this?</div>
                </div>
              </div>
              <div><i>Honorable Mention: LA</i></div>
              <p>Cameron had a work event in LA one weekend, so obviously I tagged along. Highlights include the view from Griffith Observatory before I was soaked by a rain storm (I thought those didn't exist in SoCal?), my first Korean spa experience, and my face hurting from laughing so much at a Tig Notaro comedy show where Ellen Degeneres was the surprise opener. I can't leave out my lunch from <a href="https://www.eatbrokenmouth.com/" target="_blank">Broken Mouth</a>, the #1 rated restaurant on Yelp - I could honestly eat this Korean Hawaiaan comfort food daily (the spam musubi is to die for!).</p>
              <div class="image-container">
                <div>
                <img src="@/assets/images/nola/griffith-observatory.jpeg" class="vertical-blog-image">
                <div class="image-description">Hollywood sign before the storm</div>
                </div>
              </div>
              <div><i>Honorable Mention 2: Video games</i></div>
              <p>A mystery illness knocked us both out for nearly two weeks, so I had to give an honorable mention to our newly acquired Steam Deck. As an absolute video game newbie, I used my down time to graduate from only being able to look at the ground/sky to being able to run around and shoot bad guys. Until they shoot me. Or I fall off a mountain.</p>
              <p>Favorite games so far: Binding of Isaac: Rebirth, Borderlands 3, Unravel Two</p>
            </div>
          </div>
          <div v-if="activeTab == 3" class="has-text-left ml-2 mr-2">
              <div class="location-container">
                <div class="has-text-weight-bold has-text-centered">Santa Fe</div>
                <div class="has-text-centered">March 10th - April 13th</div>
                <img src="@/assets/images/santafe/airbnb.jpeg" class="horizontal-blog-image">
                <div class="image-description">Our little adobe house near the Railyard</div>
              </div>
            <div class="dropdown strikethrough" @click="showSFVignettes = !showSFVignettes">
              Highlights
              <b-icon pack="fas" :key="showSFVignettes" :icon="showSFVignettes ? 'angle-up' : 'angle-down'" size="is-small"></b-icon>
            </div>
            <div v-if="showSFVignettes">
              <div><b>Hiking</b></div>
              <p>My number one goal in Santa Fe was to be on a mountain as much as possible, and we more than accomplished that! There are excellent trails right in Santa Fe as well as easy day trips.</p>
              <p>At Bandelier National Monument, you can climb ladders to visit the ancient homes of Ancestral Puebloans, which are carved into the rockface. Some of the taller ladders are honestly terrifying, but I had to climb them after seeing some 7-year-olds coming down.</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/santafe/bandelier-ladder.jpeg" class="vertical-blog-image">
                  <div class="image-description">A cave at Bandelier National Monument</div>
                </div>
                <div>
                  <img src="@/assets/images/santafe/dale-ball-hike.jpeg" class="vertical-blog-image">
                  <div class="image-description">Dale Ball trails, Santa Fe</div>
                </div>
              </div>
              <p>Another fun one for lovers of heights is the Rio Grande Gorge near Taos, where I was convinced the wind would push me into the river. The gorge is just a few minutes away from the <a href="https://earthship.com/visit/" target="_blank">Earthship community</a>, too, which are very interesting to visit. Earthships are built out of recycled materials like tires, cans, and bottles. Some grow their own food, treat their own sewage, and collect power from the sun and wind. Taos is an adorable little town, and we had a great time walking the main square, visiting Taos Mesa Brewery, and getting a short hike in at Devisadero Peak.</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/santafe/gorge.jpeg" class="horizontal-blog-image">
                  <div class="image-description">Rio Grande Gorge, Taos</div>
                </div>
                <div>
                  <img src="@/assets/images/santafe/upper-bandelier-me.jpeg" class="horizontal-blog-image">
                  <div class="image-description">Frijoles Canyon Rim Trail, Los Alamos</div>
                </div>
              </div>
              <p>My favorite hike in Santa Fe proper was Mount Atalaya. While the trek is only 7 miles, it's <i>steep</i> (my Apple watch clocked an elevation gain of over 2000 feet). We took a wrong turn at some point and ended up scaling the snowy side of the mountain before realizing the actual path was just up the hill. We made it to the summit unscathed and grateful for amazing views (I recently got Lasik and discovered mountain views are even better when you can see more than blobs).</p>
              <div><b>Food</b></div>
              <p>I have to say, I was not expecting the food in Santa Fe to be so insanely good. The star of the show is <s>the chili pepper</s> New Mexican food, which is full of spice and flavor and cheese and corn (we really enjoyed Tune Up Cafe and El Comal). We also had amazing meals at Jambo Cafe (African), Paper Dosa (Indian), and Izanami (Japanese).</p>
              <div class="image-container">
                <div>
                <img src="@/assets/images/santafe/izanami.jpeg" class="horizontal-blog-image">
                <div class="image-description">Izanami's "tatami" room</div>
                </div>
                <div>
                <img src="@/assets/images/santafe/enchiladas.jpeg" class="vertical-blog-image">
                <div class="image-description">A few of the 1 million enchiladas I consumed in NM</div>
                </div>
              </div>
              <div><b>Ojo Santa Fe</b></div>
              <p>Northern New Mexico is known for its hot springs, so obviously we had to partake. The grounds at Ojo were gorgeous! We went on a cold, windy day, so we were scuttling from pool to pool as fast as our flip flops could carry us, but it was amazing being nice and toasty in the water as snow flurries fell in the afternoon.</p>
              <div><b>Datil</b></div>
              <p>One weekend we went to see some of my relatives in Datil, NM. They have a huge plot of land in the middle of nowhere, complete with herds of elk, antelope, and the occasional coyote. Us city slickers got a crash course on identifying scat, which I have used on every hike since.</p>
              <div class="image-container">
                <div>
                <img src="@/assets/images/santafe/hike-thru-history.jpeg" class="vertical-blog-image">
                <div class="image-description">Aunt Nancy and I by petroglyphs in Reserve, NM</div>
                </div>
              </div>
              <div><b>Meow Wolf</b></div>
              <p>An enigma. All I can say is, if you ever find yourself in Santa Fe, this is a must see!</p>
            </div>
          </div>
          <div v-if="activeTab == 4" class="has-text-left ml-2 mr-2">
              <div class="location-container">
                <div class="has-text-weight-bold has-text-centered">Sedona</div>
                <div>April 16th - May 18th</div>
                <!-- <img src="@/assets/images/nola/airbnb.jpeg" class="vertical-blog-image">
                <div class="image-description">Our little adobe house near the Railyard</div> -->
              </div>
             <div class="dropdown strikethrough" @click="showSedonaVignettes = !showSedonaVignettes">
              Guest Post: Cameron
              <b-icon pack="fas" :key="showSedonaVignettes" :icon="showSedonaVignettes ? 'angle-up' : 'angle-down'" size="is-small"></b-icon>
            </div>
            <div v-if="showSedonaVignettes">
              <p>The majesty of Arizona's terrain becomes apparent all at once. From the Americana bygone of Route 66, our entry into the state started with a visit to the Meteor Crater, an impact zone burrowed into an otherwise placid desert landscape. Marching up stairs and through exhibits touting its magnificence, you arrive at the rim, windswept and wide. A vast bowl stares up from the earth. Your eyes quickly betray you - I mean, yeah it's cool, but it's just a hole in the ground, right?</p>
              <p>Not so, dear traveler. As deep as a 60-story building and as wide as 20 football fields, this blip in the earth could comfortably sit around 2 million fans for what would undoubtedly be the greatest game ever played. The enormity begs for comparison, but none seem suitable. As you drive away, the brain struggles to accommodate what it saw.</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/sedona/vortex.jpeg" class="vertical-blog-image">
                  <div class="image-description">The vortex at Bell Rock</div>
                </div>
                <div>
                  <img src="@/assets/images/sedona/soldiers-pass.jpeg" class="vertical-blog-image">
                  <div class="image-description">Soldier's Pass cave</div>
                </div>
              </div>
              <p>Our freshly piqued brains, then, could scarcely grasp the clay-hued cacophony that awaited. A winding mountain pass from the north or unremarkable roadways from the south deposit you into terra cotta topography unlike anything else. Etched through the eons as if erupting from the earth, Sedona's buttes, plateaus, slabs, and tableaus stand as if wonder and awe were captured in mineral form. Attracting those interested in the mystical - sacred pools! crystals! energy vortices! - as well as the magnificent and mountainous, the arid red slopes bring you closer to nature and more in tune with yourself. Hours spent hiking and running and sitting and staring filled us with an appreciation for how much the outside world changes you and shapes you, day by day and choice by choice.</p>
              <p>Daily walks are interspersed with a standard occurrence: eyes straying too far upward are met with an uncontrollable arrest of the feet and an unconscious loosening of the lips. WOW.
How grateful and lucky we felt to bask in the sun and the splendor.</p>
              <p>And then, more. A visiting duo - Caleb and Allyson, you rock! - spurred a Pink Jeep excursion (will we trade in the Fit for a full offroad? time will tell…) and a chance to visit one of the world's marvels. Signs on the path of descent at the Grand Canyon show a scorched and stumbling man clinging to life, warning all but the most steel-legged to beware - 5000m down is bad enough, but back up? Pack a weekend bag. Elk wandered by and paused at the water fountains, hoping to quench their thirst in human style. Families huffed and puffed their way down and up from the aptly named Ooh Aah Point, determined to find a spot that will allow their minds to absorb and comprehend the miles of sprawling chasms below. We can only gaze, and wonder, and ponder, and hope.</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/sedona/devils-bridge.jpeg" class="vertical-blog-image">
                  <div class="image-description">Devil's Bridge</div>
                </div>
                <div>
                  <img src="@/assets/images/sedona/gc-c-and-a.jpeg" class="vertical-blog-image">
                  <div class="image-description">Caleb and Allyson at the Grand Canyon</div>
                </div>
              </div>
              <p>As we headed south for the last time, our eyes traced the red rims and they faded into the rearview mirror. We'll visit again, one day. The red clay is still stuck to our shoes and seeped into our souls.</p>
            </div>
            <div class="dropdown strikethrough" @click="showJoshuaTree = !showJoshuaTree">
              Bonus: Joshua Tree
              <b-icon pack="fas" :key="showJoshuaTree" :icon="showJoshuaTree ? 'angle-up' : 'angle-down'" size="is-small"></b-icon>
            </div>
            <div v-if="showJoshuaTree">
              <p>We detoured to 29 Palms, CA on our way from Sedona to San Diego, where we stayed in a breathtaking AirBnB reached only by a painfully bumpy dirt road. Worth it! We hung out, stared at the stars from the hot tub, and hit up Joshua Tree National Park. There Cameron declared he "didn't know he loved climbing on big rocks so much," while I (Carly) absolutely did know this, but didn't rub it in too much.</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/sedona/joshua-tree-chula.jpeg" class="vertical-blog-image">
                  <div class="image-description">Joshua Tree Cholla Garden</div>
                </div>
                <div>
                  <img src="@/assets/images/sedona/joshua-tree-rocks.jpeg" class="vertical-blog-image">
                  <div class="image-description">Joshua Tree boulders</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeTab == 5" class="has-text-left ml-2 mr-2">
              <div class="location-container">
                <div class="has-text-weight-bold has-text-centered">San Diego</div>
                <div>May 21st - June 20th</div>
                <!-- <img src="@/assets/images/nola/airbnb.jpeg" class="vertical-blog-image">
                <div class="image-description">Our little adobe house near the Railyard</div> -->
              </div>
              <div class="dropdown strikethrough" @click="showSanDiegoVignettes = !showSanDiegoVignettes">
              Highlights
              <b-icon pack="fas" :key="showSanDiegoVignettes" :icon="showSanDiegoVignettes ? 'angle-up' : 'angle-down'" size="is-small"></b-icon>
            </div>
            <div v-if="showSanDiegoVignettes">
              <p>There's a saying in Sedona that goes, “God made the whole world, but he lives in Sedona.” If that's true, then he absolutely has a vacation home in San Diego!</p>
              <p>Our little apartment, nestled just above Balboa Park,  was surrounded by wide sidewalks with bright pink and purple flowers. We could (and did!) easily walk or bike to restaurants, breweries, and museums - soaking up as much of the SoCal weather as possible. </p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/sandiego/balboa-park.jpeg" class="vertical-blog-image">
                  <div class="image-description">Balboa Park</div>
                </div>
                <div>
                  <img src="@/assets/images/sandiego/catalina.jpeg" class="vertical-blog-image">
                  <div class="image-description">The view from Coronado Island</div>
                </div>
                <div>
                  <img src="@/assets/images/sandiego/torrey-pines.jpeg" class="vertical-blog-image">
                  <div class="image-description">Torrey Pines State Park</div>
                </div>
              </div>
              <p>We forsook our new home briefly to spend Memorial Day weekend in San Clemente, a sleepy beach town just north of San Diego. Although a bit chilly for swimming, we watched the surfers from the pier and basked in the late May sunshine from the safety of the shore.</p>
              <p>Don't fret though, my Melvillian friends, because our feet didn't stay on the sand forever! We ventured out on a whale watching tour from Dana Point, where amid the copious schools of dolphins, we saw three fin whales diving and spouting (and a solid quarter of our brethren grew seasick from the choppy water).</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/sandiego/san-clemente.jpeg" class="vertical-blog-image">
                  <div class="image-description">Surfers in San Clemente</div>
                </div>
                <div>
                  <img src="@/assets/images/sandiego/whale-sea-lions.jpeg" class="vertical-blog-image">
                  <div class="image-description">Sea Lions near Dana Point</div>
                </div>
              </div>
              <p>Back in San Diego, we spent our time hiking, sea kayaking, and listening to the sea lions bark. We made it to some concerts, comedy shows, and even a Padres game with a dramatic win after being tied in the bottom of the ninth. You couldn't keep us away from the beach, either, although the June Gloom kept us from actually getting in the ocean for the most part.</p>
               <div class="image-container">
              <div>
                  <img src="@/assets/images/sandiego/kayak-guide.jpeg" class="horizontal-blog-image">
                  <div class="image-description">Kayaking in La Jolla</div>
                </div>
                <div>
                  <img src="@/assets/images/sandiego/kayak-us.jpeg" class="horizontal-blog-image">
                  <div class="image-description">Kayaking in La Jolla</div>
                </div>
              </div>
              <p>The one time we did go in was after donning wetsuits for a surfing lesson - and we used so much physical exertion that I didn't feel the chill! I have infinite respect for surfers now after trying my hand at it. Merely wrangling my surfboard through the ornery waves tired me out - but it was worth it for the few waves I was able to catch and ride all the way in. We were absolutely exhausted afterward, but some sun and beer fixed us right up.</p>
              <p>In the eternal words of Ron Burgundy: stay classy, San Diego. We'll be back!</p>
              <div class="image-container">
                <div>
                  <img src="@/assets/images/sandiego/friendship-garden-cat.jpeg" class="vertical-blog-image">
                  <div class="image-description">Cat friend in the Japanese Friendship Garden - Balboa Park</div>
                </div>
                <div>
                  <img src="@/assets/images/sandiego/neighbor-cat.jpeg" class="vertical-blog-image">
                  <div class="image-description">Cat friend in neighbor's window</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeTab == 6" class="has-text-left ml-2 mr-2">
              <div class="location-container">
                <div class="has-text-weight-bold has-text-centered">Eugene</div>
                <div>July 8th - Aug 10th</div>
                <!-- <img src="@/assets/images/nola/airbnb.jpeg" class="vertical-blog-image">
                <div class="image-description">Our little adobe house near the Railyard</div> -->
              </div>
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
          activeTab: 5,
          showPcbThoughts: false,
          showPcbVignettes: false,
          showNolaVignettes: false,
          showSFVignettes: false,
          showSedonaVignettes: false,
          showJoshuaTree: false,
          showSanDiegoVignettes: true,
          showEugeneVignettes: false
      };
  },
  methods: {
    selectTab(i) {
      this.activeTab = i;
    },
    getBorderStyle() {
      if (this.activeTab === 1 || this.activeTab === 6) {
        return 'pink-border'
      } else if (this.activeTab === 2) {
        return 'yellow-border'
      } else if (this.activeTab === 3) {
        return 'teal-border'
      } else if (this.activeTab === 4) {
        return 'orange-border'
      } else if (this.activeTab === 5) {
        return 'green-border'
      }
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
  margin: 1rem 0;
}
.tabs-container-desktop {
  gap: 0.5rem;
  flex-flow: row wrap;
}
.tabs-container-mobile {
  width: 100%;
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem 1rem;
}
.pink-border {
  border: 1px solid var(--pink);
  border-radius: 10px;
}
.yellow-border {
  border: 1px solid var(--yellow);
  border-radius: 10px;
}
.teal-border {
  border: 1px solid var(--teal);
  border-radius: 10px;
}
.orange-border {
  border: 1px solid var(--orange);
  border-radius: 10px;
}
.green-border {
  border: 1px solid var(--green);
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