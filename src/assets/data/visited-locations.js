const VisitedLocations = [
  {
    name: "Perfect Pig",
    description: "This coastal eatery is known for its Southern cuisine with a gourmet twist. Highlights include applewood-smoked bacon and Parmesan-crusted grouper, which attract breakfast, lunch, and dinner patrons alike. A casual yet upscale ambiance makes it a favorite along 30A.",
    latitude: 30.2747,
    longitude: -87.5944,
    typeId: 1,
    website: "https://www.theperfectpig.com"
  },
  {
    name: "Third Planet Brewing",
    description: "This brewery in Niceville, FL, offers craft beers inspired by the area's beautiful coastal landscapes. With a laid-back vibe, it's a great spot for sampling local brews in a welcoming atmosphere.",
    latitude: 30.3935,
    longitude: -86.4982,
    typeId: 2,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Lotus Cafe",
    description: "A hidden gem in Panama City Beach, Lotus Cafe offers health-conscious meals in a peaceful, tropical setting. The cafe is surrounded by a lush garden, making it a relaxing spot for fresh juices, vegan options, and healthy meals.",
    latitude: 30.1790,
    longitude: -85.8038,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Noma???",
    description: "Likely inspired by the famed New Orleans culinary scene, this potential spot captures the essence of NOLA cuisine with unique Creole dishes and a refined ambiance, reflecting a mix of global culinary influence.",
    latitude: 29.9511,
    longitude: -90.0715,
    typeId: 1,
    website: "No specific website found."
  },
  {
    name: "Addis",
    description: "This New Orleans spot offers authentic Ethiopian flavors with dishes like injera and doro wat. Known for rich, spiced dishes served in traditional Ethiopian style, Addis is a popular choice for those seeking unique flavors.",
    latitude: 29.9531,
    longitude: -90.0684,
    typeId: 1,
    website: "https://www.addisethiopianrestaurant.com"
  },
  {
    name: "Sukho Thai",
    description: "A popular spot in New Orleans, Sukho Thai offers authentic Thai dishes in a casual yet vibrant setting. Dishes are known for their balance of flavors and fresh ingredients, making it a local favorite.",
    latitude: 29.9657,
    longitude: -90.0537,
    typeId: 1,
    website: "https://www.sukhothainola.com"
  },
  {
    name: "Broken Mouth",
    description: "A small but beloved spot in Los Angeles, Broken Mouth serves up Hawaiian and Korean comfort food with a focus on local flavors and unique dishes. Known for delicious flavors and a cozy vibe.",
    latitude: 34.0451,
    longitude: -118.2475,
    typeId: 1,
    website: "https://www.brokenmouthla.com"
  },
  {
    name: "Paper Dosa",
    description: "Santa Fe's Paper Dosa offers traditional South Indian cuisine with a modern twist, specializing in crispy dosas, curries, and a variety of vegan options, all in a relaxed, stylish atmosphere.",
    latitude: 35.6762,
    longitude: -105.9414,
    typeId: 1,
    website: "https://www.paper-dosa.com"
  },
  {
    name: "El Comal",
    description: "This authentic Mexican spot in Santa Fe is known for traditional flavors and hearty dishes, from tacos and enchiladas to unique regional specialties.",
    latitude: 35.6663,
    longitude: -105.9750,
    typeId: 1,
    website: "https://www.elcomalsantafe.com"
  },
  {
    name: "Jambo Cafe",
    description: "A local favorite in Santa Fe, Jambo Cafe serves East African-Caribbean fusion dishes in a lively setting. Known for rich spices, flavors, and dishes like jerk chicken and coconut curry.",
    latitude: 35.6707,
    longitude: -105.9891,
    typeId: 1,
    website: "https://www.jambocafe.net"
  },
  {
    name: "Izanami",
    description: "Izanami offers Japanese-inspired dishes made with fresh, local ingredients in Santa Fe. The restaurant features an extensive sake menu and a serene setting with views of the surrounding landscape.",
    latitude: 35.7594,
    longitude: -105.8634,
    typeId: 1,
    website: "https://www.izanamisantafe.com"
  },
  {
    name: "Tune Up Cafe",
    description: "A cozy Santa Fe spot known for its eclectic menu, which includes American, Latin, and New Mexican dishes. It's popular for both brunch and dinner, with a welcoming, neighborhood vibe.",
    latitude: 35.6814,
    longitude: -105.9547,
    typeId: 1,
    website: "https://www.tuneupcafe.com"
  },
  {
    name: "Arizona Sake",
    description: "Located in Arizona, this small sake brewery specializes in handcrafted, authentic Japanese sake, using traditional brewing methods with locally sourced ingredients.",
    latitude: 34.2603,
    longitude: -110.0306,
    typeId: 2,
    website: "https://www.arizonasake.com"
  },
  {
    name: "Dark Sky",
    description: "A Flagstaff-based brewery, Dark Sky offers a wide range of craft beers, known for creative flavors and collaborations with other local breweries.",
    latitude: 35.1983,
    longitude: -111.6513,
    typeId: 2,
    website: "https://www.darkskybrewing.com"
  },
  {
    name: "Mole",
    description: "This possible Mexican restaurant in Phoenix could offer traditional Mexican dishes, focusing on regional flavors and a vibrant dining experience.",
    latitude: 33.4484,
    longitude: -112.0740,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Thai place in Phoenix",
    description: "An unnamed Thai restaurant in Phoenix, likely serving authentic Thai dishes with an emphasis on bold, fresh flavors and a variety of spice levels.",
    latitude: 33.4484,
    longitude: -112.0740,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Red House",
    description: "Unknown place in California",
    latitude: 33.6595,
    longitude: -117.9988,
    typeId: 1
  },
  {
    name: "Fish Guts",
    description: "Possibly a restaurant",
    latitude: 33.6595,
    longitude: -117.9988,
    typeId: 1
  },
  {
    name: "Brussels (San Clemente)",
    description: "Belgian restaurant in San Clemente",
    latitude: 33.4269,
    longitude: -117.6119,
    typeId: 1
  },
  {
    name: "Shank and Bone",
    description: "A trendy Vietnamese eatery in San Diego's North Park, Shank and Bone is celebrated for its fresh pho, flavorful banh mi, and contemporary decor. Diners appreciate its fusion approach and cozy ambiance.",
    latitude: 32.7489,
    longitude: -117.1541,
    typeId: 1,
    website: "https://shankandbone.com"
  },
  {
    name: "Little Thai Elephant",
    description: "This Portland favorite is a casual spot that packs bold Thai flavors. Their pad Thai and curry dishes get rave reviews for their authenticity and balanced flavors, often featuring a spice kick.",
    latitude: 45.5081,
    longitude: -122.6532,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Hat Yai",
    description: "Hat Yai serves Southern Thai street food with a focus on fried chicken and curry. Known for hearty flavors and a rustic atmosphere, it's a must-visit in Portland for lovers of authentic Thai cuisine.",
    latitude: 45.5587,
    longitude: -122.6755,
    typeId: 1,
    website: "https://www.hatyaipdx.com"
  },
  {
    name: "Kachka",
    description: "Portland's Kachka brings a unique take on Russian cuisine, featuring dishes like pelmeni and khachapuri in a cozy, vibrant setting. Known for its rich flavors, it's a top choice for adventurous eaters.",
    latitude: 45.5220,
    longitude: -122.6567,
    typeId: 1,
    website: "https://kachkapdx.com"
  },
  {
    name: "Duality Brewing?",
    description: "This Portland spot is believed to be an up-and-coming brewery with a variety of experimental brews, providing a local, laid-back atmosphere perfect for casual meetups and sampling craft beers.",
    latitude: 45.5231,
    longitude: -122.6765,
    typeId: 1,
    website: "No specific website found."
  },
  {
    name: "Kibrom's Ethiopian",
    description: "An Ethiopian gem in Boise, Kibrom's offers flavorful dishes like injera and tibs in a warm and inviting setting, ideal for newcomers to Ethiopian cuisine or those craving authentic flavors.",
    latitude: 43.6205,
    longitude: -116.1978,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Garibaldi's",
    description: "Boise's Garibaldi's provides hearty Mexican dishes in a traditional setting, popular for its large portions, authentic flavors, and friendly atmosphere that feels like a home away from home.",
    latitude: 43.6078,
    longitude: -116.2183,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "That One Pizza Place",
    description: "This unique Utah pizza spot is shrouded in mystery, but based on similar spots, it likely offers classic and inventive pizza flavors in a casual, family-friendly setting.",
    latitude: 40.7608,
    longitude: -111.8910,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Kaos Pizza",
    description: "Denver's Kaos Pizza stands out with its garden-like atmosphere and artisan wood-fired pizzas. With a range of creative toppings, it's a beloved spot for pizza aficionados.",
    latitude: 39.6921,
    longitude: -104.9800,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Bon Ami",
    description: "This Denver eatery remains a bit of a mystery, but based on similar listings, it may offer eclectic menu items in a casual, welcoming setting with a focus on fresh ingredients.",
    latitude: 39.7392,
    longitude: -104.9903,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Rye's Sandwiches",
    description: "Rye's serves gourmet sandwiches in a hip Denver setting, offering a variety of creative fillings with fresh ingredients, perfect for a casual, satisfying meal.",
    latitude: 39.7392,
    longitude: -104.9903,
    typeId: 1,
    website: "No website found; check Yelp for updates."
  },
  {
    name: "Stem??",
    description: "Possibly Stem Ciders, this Denver spot is known for its artisanal ciders made from fresh, local ingredients, drawing cider enthusiasts and craft lovers alike.",
    latitude: 39.7695,
    longitude: -105.0030,
    typeId: 2,
    website: "https://stemciders.com"
  },
  {
    name: "Root Down",
    description: "With a focus on locally-sourced ingredients and sustainability, Root Down in Denver offers globally-inspired cuisine in a stylish, vibrant setting, popular for its inventive menu and creative cocktails.",
    latitude: 39.7695,
    longitude: -105.0030,
    typeId: 1,
    website: "https://rootdowndenver.com"
  },
  {
    name: "Future Days",
    description: "Independent and brewer-owned, Future Days is a new craft brewery and taproom located in the Northern Liberties neighborhood of Philadelphia.",
    latitude: 39.9610,
    longitude: -75.1456,
    typeId: 2,
    website: "https://www.futuredaysbeer.com/"
  },
  {
    name: "Other Half",
    description: "Spacious taproom and brewery in Philadelphia’s Fishtown with fresh draft beers, yard games, and a large outdoor beer garden.",
    latitude: 39.9643,
    longitude: -75.1362,
    typeId: 2,
    website: "https://otherhalfbrewing.com/location/philadelphia/"
  },
  {
    name: "Triple Bottom",
    description: "Triple Bottom Brewing is a craft brewery with a social mission, celebrating community through delicious beer and creative collaboration.",
    latitude: 39.9618,
    longitude: -75.1540,
    typeId: 2,
    website: "https://triplebottombrewing.com/"
  },
  {
    name: "Mainstay",
    description: "Mainstay Independent delivers an authentic beer experience with a focus on quality and a dedication to craft brewing.",
    latitude: 39.9610,
    longitude: -75.1390,
    typeId: 2,
    website: "https://mainstaybrewing.com/"
  },
  {
    name: "Love City",
    description: "Love City Brewing is a Philly favorite featuring exposed brick, a spacious industrial feel, and a lineup of great beers since 2018.",
    latitude: 39.9573,
    longitude: -75.1547,
    typeId: 2,
    website: "https://lovecitybrewing.com/"
  },
  {
    name: "Urban Village",
    description: "Urban Village Brewing is a vibrant brewery and restaurant with rustic-modern indoor and outdoor seating and creative craft beers.",
    latitude: 39.9641,
    longitude: -75.1405,
    typeId: 2,
    website: "https://www.urbanvillagebrewing.com/"
  },
  {
    name: "Human Robot",
    description: "Human Robot blends traditional and modern beer styles, offering a diverse and innovative craft beer lineup in a relaxed setting.",
    latitude: 39.9796,
    longitude: -75.1442,
    typeId: 2,
    website: "https://www.humanrobotbeer.com/"
  },
  {
    name: "Bar Hygge",
    description: "Bar Hygge is a cozy neighborhood spot with in-house brews from Brewery Techne and a menu designed for communal enjoyment.",
    latitude: 39.9675,
    longitude: -75.1676,
    typeId: 2,
    website: "https://barhygge.com/"
  },
  {
    name: "Brickyard Hollow",
    description: "Brickyard Hollow is a brewery and restaurant in Portland, Maine, known for its craft beers and a menu that emphasizes local ingredients and flavors.",
    latitude: 43.6615,
    longitude: -70.2553,
    typeId: 2,
    website: "https://www.brickyardhollow.com/"
  },
  {
    name: "White Sands National Park",
    description: "A stunning landscape of rare white gypsum sand dunes in southern New Mexico, known for hiking, sledding, and unique desert scenery.",
    latitude: 32.7791,
    longitude: -106.1719,
    typeId: 3
  },
  {
    name: "Painted Desert",
    description: "A vast desert region in northern Arizona, famous for its colorful, stratified layers of sediment and unique geological formations.",
    latitude: 35.0657,
    longitude: -109.7878,
    typeId: 3
  },
  {
    name: "Bandelier National Monument",
    description: "Located near Los Alamos, New Mexico, Bandelier preserves ancient cliff dwellings and petroglyphs of the Ancestral Puebloans.",
    latitude: 35.7789,
    longitude: -106.3277,
    typeId: 3
  },
  {
    name: "Grand Canyon National Park",
    description: "One of the world's most iconic natural wonders, the Grand Canyon features dramatic vistas, hiking trails, and the Colorado River.",
    latitude: 36.1069,
    longitude: -112.1129,
    typeId: 3
  },
  {
    name: "Crater Lake National Park",
    description: "Located in southern Oregon, Crater Lake is known for its deep blue color and water clarity, formed in a collapsed volcano caldera.",
    latitude: 42.9446,
    longitude: -122.1090,
    typeId: 3
  },
  {
    name: "Topsail Hill Preserve State Park",
    description: "A Florida state park on the Gulf Coast, known for its white sand beaches, rare coastal dune lakes, and scenic hiking trails.",
    latitude: 30.3736,
    longitude: -86.2977,
    typeId: 4
  },
  {
    name: "Grayton Beach State Park",
    description: "A popular Florida state park featuring pristine beaches, coastal dune lakes, and a variety of outdoor activities.",
    latitude: 30.3310,
    longitude: -86.1616,
    typeId: 4
  },
  {
    name: "Taos State Park?",
    description: "Possible state park near Taos, New Mexico, known for its mountain scenery and outdoor recreation.",
    latitude: 36.4072,
    longitude: -105.5731,
    typeId: 4
  },
  {
    name: "Rio Grande State Park?",
    description: "Potential state park along the Rio Grande, offering river views and opportunities for hiking and wildlife viewing.",
    latitude: 35.1068,
    longitude: -106.6464,
    typeId: 4
  },
  {
    name: "Devisadero Peak",
    description: "A scenic peak near Taos, New Mexico, popular for hiking and panoramic views of the surrounding mountains.",
    latitude: 36.3822,
    longitude: -105.5458,
    typeId: 4
  },
  {
    name: "Mount Atalaya",
    description: "A prominent peak near Santa Fe, New Mexico, known for its challenging hiking trail and sweeping views.",
    latitude: 35.6467,
    longitude: -105.8889,
    typeId: 4
  },
  {
    name: "Glen Trails",
    description: "Likely refers to Glen Canyon or local trails, offering scenic hiking opportunities in the region.",
    latitude: 36.8762,
    longitude: -111.5103,
    typeId: 4
  },
  {
    name: "Sedona (all)",
    description: "The Sedona area in Arizona is renowned for its red rock formations, state parks, and extensive hiking trails.",
    latitude: 34.8697,
    longitude: -111.7609,
    typeId: 4
  },
  {
    name: "Torrey Pines State Natural Reserve",
    description: "A coastal state park in San Diego, California, known for its rare Torrey pine trees, rugged cliffs, and ocean views.",
    latitude: 32.9211,
    longitude: -117.2526,
    typeId: 4
  },
  //MAINE
  {
    name: "Louisville",
    description: "description",
    latitude: 0,
    longitude: 0,
    typeId: 0
  },
  //LOUISVILLE
  {
    name: "Awry",
    description: "description",
    latitude: 0,
    longitude: 0,
    typeId: 0
  }
  //the grales
  //gravely
  //atrium
  //reingiest (cincy)
  //milewide
];

export default VisitedLocations;