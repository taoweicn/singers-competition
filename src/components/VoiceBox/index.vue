<template>
  <div class="voice-box">
    <button
      class="button"
      :style="{ backgroundImage: `url(${background})` }"
      @click="begin"
    >
    </button>
    <span class="time">{{Math.round(time)}}''</span>
    <div v-if="!isRead" class="dot"></div>
    <audio
      ref="audio"
      :src="audioURL"
    >浏览器版本过低！</audio>
  </div>
</template>

<script>
import staticImage from '@/assets/result_dialog_box.png';
import dynamicImage from '@/assets/speech_gif.gif';

export default {
  name: 'VoiceBox',
  props: {
    audioURL: String
  },
  data() {
    return {
      animate: false,
      isRead: false,
      time: 0 // 秒
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
      }, this.time * 1000);
    }
  },
  mounted() {
    const audio = new Audio();
    audio.src = this.audioURL;
    audio.onloadeddata = () => {
      this.time = this.$refs.audio.duration;
    };
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
