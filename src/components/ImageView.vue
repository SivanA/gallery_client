<template>
    <div>
        <img 
            :src="url"
            @mouseover="onMouseOver"
            @mouseleave="onMouseLeave"
        />
    </div>
</template>

<script>
export default {
  name: 'ImageView',
  props: {
      url: String,
  },
  methods: {
      onMouseOver() {
          this.$emit('mouseover');
      },
      onMouseLeave() {
          this.$emit('mouseleave');
      },
  },
}
</script>

<style scoped>
img {
    max-width: 100%;
    max-height: 100%;
}
</style>