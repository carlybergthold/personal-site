const LocationContainer = {
  props: ['title', 'dates', 'imageFile', 'imageDescription'],
  template: `
    <div class="location-container">
        <div class="has-text-weight-bold has-text-centered">{{title}}</div>
        <div class="has-text-centered">{{dates}}</div>
        <img src="@/assets/images/pcb/florida-condo.jpeg" class="vertical-blog-image">
        <div class="image-description">{{imageDescription}}</div>
    </div>
  `
}

export default LocationContainer;