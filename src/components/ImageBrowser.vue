<template>
    <div class="container">
        <div @click="onLeftArrowClick()" class="shift-left">
            <img src="../assets/left-arrow.png"/>
        </div>
        <div>
            <img 
                :src="images[startIndex]"
                :class="{ selected: selectedIndex === startIndex }"
                @click="onImageClick(startIndex)"
            />
        </div>
        <div>
            <img 
                :src="images[middleImageIndex]"
                :class="{ selected: selectedIndex === middleImageIndex }"
                @click="onImageClick(middleImageIndex)"
            />
        </div>
        <div>
            <img 
                :src="images[rightImageIndex]"
                :class="{ selected: selectedIndex === rightImageIndex }"
                @click="onImageClick(rightImageIndex)"
            />
        </div>
        <div @click="onRightArrowClick()" class="shift-right">
            <img src="../assets/right-arrow.png"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ImageBrowser',
  props: {
      images: Array,
  },
  methods: {
      onImageClick(index) {
          this.selectedIndex = index;
          this.$emit('click', { index });
      },
      onLeftArrowClick() {
          if (!this.startIndex) {
              this.startIndex = 4;
          } else {
            this.startIndex = (this.startIndex - 1) % 5;    
          }
      },
      onRightArrowClick() {
          this.startIndex = (this.startIndex + 1) % 5;
      },
  },
  data() {
      return {
          selectedIndex: 0,
          startIndex: 0,
      }
  },
  computed: {
      middleImageIndex() {
          return (this.startIndex + 1) % 5;
      },
      rightImageIndex() {
          return (this.startIndex + 2) % 5;
      },
  },
}
</script>

<style lang="scss" scoped>

.container {
    display: flex;

    div {
        height: 100px;
        width: 25%;
    }
}

img {
    max-width: 100%;
    max-height: 100%;

    cursor: pointer;

    &.selected {
        border: 3px solid black;
    }
}
</style>