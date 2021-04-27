<template>
  <div id="app">
    <div v-if="images.length">
      <ImageView 
        @mouseover="showCaption = true"
        @mouseleave="showCaption = false"
        :url="images[selectedIndex].url"
      />
      <div>
        <div 
          v-if="showCaption"
          :class="{ 'slide-up' : showCaption }"
        >
          {{ images[selectedIndex].author }}
        </div>
      </div>
      <div class="image-browser-container">
        <ImageBrowser
          @click="selectedIndex = $event.index"
          :images="images.map((image) => image.url)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageView from './components/ImageView.vue'
import ImageBrowser from './components/ImageBrowser'

export default {
  name: 'App',
  components: {
    ImageView,
    ImageBrowser,
  },
  data() {
    return {
      showCaption: false,
      selectedIndex: 2,
    };
  },
  computed: mapState(['images']),
}
</script>

<style>
#app {
  text-align: center;
}

@keyframes slide-up {
    from {
        padding-top: 100px;
        opacity: .25;
        line-height: 80px;
    }
    to {
        padding-top: 0;
        opacity: 1;
        line-height: 25px;
    }
}

.slide-up {
    animation: slide-up 1.5s;
}

.image-browser-container {
  width: 100%;
  position: fixed;
  bottom: 20px;
}

</style>
