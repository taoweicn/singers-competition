<template>
  <transition name="fade">
    <div class="loading-mask" v-if="show">
      <img class="gif" src="../../assets/loading_gif.gif" alt="loading">
      <img class="loading" src="../../assets/loading.png" alt="loading">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PreloadImage',
  props: {
    images: Array,
    audios: Array
  },
  data() {
    return {
      loadedCount: 0,
      show: true
    };
  },
  methods: {
    // 无序加载图片
    unorderedPreload() {
      if (this.images) {
        this.images.forEach((imgURL) => {
          const imgObj = new Image();
          imgObj.addEventListener('load', this.loaded);
          imgObj.addEventListener('error', this.loaded);
          imgObj.src = imgURL;
        });
      }
      if (this.audios) {
        this.audios.forEach((audioURL) => {
          const audioObj = new Audio();
          audioObj.addEventListener('canplay', this.loaded);
          audioObj.src = audioURL;
        });
      }
    },
    // 加载完成后执行的回调
    loaded() {
      this.loadedCount += 1;
      let count = 0;
      if (this.images) {
        count += this.images.length;
      }
      if (this.audios) {
        count += this.audios.length;
      }
      if (this.loadedCount >= count) {
        this.show = false;
      }
    }
  },
  created() {
    this.unorderedPreload();
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
