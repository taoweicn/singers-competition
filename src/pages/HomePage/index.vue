<template>
  <transition name="slide" mode="out-in">
    <div class="home">
      <Preload
        :images="resources.images"
      />
      <VoiceButton
        class="button"
        :mute="mute"
        :isShowText="true"
        @switchMute="switchMute"
      />
      <img class="cover" src="../../assets/home_cassette.png" alt="cover">
      <div class="word-container">
        <img class="word" src="../../assets/home_font.png" alt="cover">
      </div>
      <router-link to="/quiz" @click.native="track">
        <button class="begin-button"></button>
      </router-link>
      <footer class="copyright">
        Powered by Bingyan Studio
      </footer>
    </div>
  </transition>
</template>

<script>
import VoiceButton from '@/components/VoiceButton';
import Preload from '@/components/Preload';
import { getLocal, setLocal } from '@/utils/cache';
import { judgeStatus } from '@/api';
import resources from './preload_resources';

export default {
  name: 'HomePage',
  components: { VoiceButton, Preload },
  data() {
    return {
      mute: getLocal('mute') == null ? true : getLocal('mute'),
      resources
    };
  },
  computed: {
    isWeiXin() {
      return /micromessenger/i.test(navigator.userAgent);
    }
  },
  methods: {
    switchMute() {
      this.mute = !this.mute;
      setLocal('mute', this.mute);
    },
    track() {
      window._czc.push([ '_trackEvent', '答题按钮', '开始答题' ]) // eslint-disable-line
    }
  },
  created() {
    if (!this.isWeiXin) return;
    const token = window.location.search.split('=')[1];
    if (token) {
      setLocal('token', token);
    }
    judgeStatus().then((res) => {
      if (!res.data.status) {
        window.location.href = res.data.data.redirect_uri;
      }
    });
  },
  mounted() {
    const imgs = document.getElementsByTagName('img');
    Array.prototype.forEach.call(imgs, (img) => {
      img.addEventListener('click', e => e.preventDefault());
    });
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
