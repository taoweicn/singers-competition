<template>
  <div class="voice-box">
    <button
      class="button"
      :style="{ backgroundImage: `url(${background})` }"
      @click="begin"
    >
    </button>
    <span class="time">{{Math.round(time / 1000)}}''</span>
    <div v-if="!isRead" class="dot"></div>
  </div>
</template>

<script>
import staticImage from '@/assets/result_dialog_box.png';
import dynamicImage from '@/assets/speech_gif.gif';

export default {
  name: 'VoiceBox',
  props: {
    time: Number
  },
  data() {
    return {
      animate: false,
      isRead: false
    };
  },
  computed: {
    background() {
      return this.animate ? dynamicImage : staticImage;
    }
  },
  methods: {
    begin() {
      this.isRead = true;
      clearTimeout(this.timer);
      if (this.animate === true) {
        this.animate = false; // 已开启的就关闭
        return;
      }
      this.animate = true;
      this.timer = setTimeout(() => {
        this.animate = false;
      }, this.time);
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
