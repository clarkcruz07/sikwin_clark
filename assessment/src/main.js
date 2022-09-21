import Vue from 'vue'
import App from './App.vue'

import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
Vue.config.productionTip = false

//Slick slider
Vue.use(Slick);
new Vue({
  render: h => h(App),
  components: { Slick },

  
  methods: {
      next() {
          this.$refs.slick.next();
      },

      prev() {
          this.$refs.slick.prev();
      },

      reInit() {
          // Helpful if you have to deal with v-for to update dynamic lists
          this.$nextTick(() => {
              this.$refs.slick.reSlick();
          });
      },

      // Events listeners
      handleAfterChange(event, slick, currentSlide) {
          console.log('handleAfterChange', event, slick, currentSlide);
      },
      handleBeforeChange(event, slick, currentSlide, nextSlide) {
          console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
      },
      handleBreakpoint(event, slick, breakpoint) {
          console.log('handleBreakpoint', event, slick, breakpoint);
      },
      handleDestroy(event, slick) {
          console.log('handleDestroy', event, slick);
      },
      handleEdge(event, slick, direction) {
          console.log('handleEdge', event, slick, direction);
      },
      handleInit(event, slick) {
          console.log('handleInit', event, slick);
      },
      handleReInit(event, slick) {
          console.log('handleReInit', event, slick);
      },
      handleSetPosition(event, slick) {
          console.log('handleSetPosition', event, slick);
      },
      handleSwipe(event, slick, direction) {
          console.log('handleSwipe', event, slick, direction);
      },
      handleLazyLoaded(event, slick, image, imageSource) {
          console.log('handleLazyLoaded', event, slick, image, imageSource);
      },
      handleLazyLoadError(event, slick, image, imageSource) {
          console.log('handleLazeLoadError', event, slick, image, imageSource);
      },
  },
}).$mount('#app')
