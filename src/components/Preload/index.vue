<template>
  <div class="loading-mask" v-if="show">
    <img class="gif" src="../../assets/loading_gif.gif" alt="loading">
    <img class="loading" src="../../assets/loading.png" alt="loading">
  </div>
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
      this.images.forEach((imgURL) => {
        const imgObj = new Image();
        imgObj.addEventListener('load', this.loaded);
        imgObj.addEventListener('error', this.loaded);
        imgObj.src = imgURL;
      });
      this.audios.forEach((audioURL) => {
        const audioObj = new Audio();
        audioObj.addEventListener('canplay', this.loaded);
        audioObj.src = audioURL;
      });
    },
    // 加载完成后执行的回调
    loaded() {
      this.loadedCount += 1;
      if (this.loadedCount >= this.images.length + this.audios.length) {
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
