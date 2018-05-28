<template>
  <div class="voice-box">
    <button
      class="button"
      :style="{ backgroundImage: `url(${background})` }"
      @click="begin"
    >
    </button>
    <span class="time">{{duration}}''</span>
    <div v-if="!isRead" class="dot"></div>
    <audio
      ref="audio"
      :src="audioURL"
      preload="auto"
    >浏览器版本过低！</audio>
  </div>
</template>

<script>
import staticImage from '@/assets/result_dialog_box.png';
import dynamicImage from '@/assets/speech_gif.gif';

export default {
  name: 'VoiceBox',
  props: {
    audioURL: String,
    duration: Number // 秒
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
      this.$refs.audio.play();
      this.isRead = true;
      clearTimeout(this.timer);
      if (this.animate === true) {
        this.$refs.audio.pause();
        this.$refs.audio.currentTime = 0;
        this.animate = false; // 已开启的就关闭
        return;
      }
      this.animate = true;
      this.timer = setTimeout(() => {
        this.animate = false;
      }, this.duration * 1000);
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
