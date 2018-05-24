<template>
  <div class="result">
    <transition name="fade">
      <div v-if="isLoading" class="loading">
        <div class="animation">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
        <p class="text">
          正在生成你的音乐品味鉴定书
        </p>
        <footer class="copyright">
          Powered by Bingyan Studio
        </footer>
      </div>
    </transition>
    <main class="main">
      <section class="background">
        <header class="header"></header>
        <div class="flag"></div>
        <div class="banner">
          <img src="https://avatars2.githubusercontent.com/u/25795549?s=400&u=faeb356a76c70c8c929fc88b3a5396fb761d60ee&v=4" alt="avatar" class="avatar">
          <div class="text">
            <h1 class="username">
              这里是用户名字
            </h1>
            <h2 class="title">
              独一无二的音乐品味鉴定书
            </h2>
          </div>
        </div>
        <div class="report">
          <p class="words">
            一共十种结果，随机随缘，一共十种结果，随机随缘，一共十种结果，随机随缘，一十种结果，随机随缘，一共十种结果，随机随缘，一共十种结果，随机随缘。
          </p>
          <div class="image">
            <img src="../../assets/result_pentagon.png" alt="pentagon">
          </div>
        </div>
        <div class="speaker">
          <img class="left" src="../../assets/result_user.png" alt="user">
          <VoiceBox :time="5000" />
        </div>
        <p class="prompt">
          （想看看是哪位十佳歌手为自己献唱？点击‘为TA打call’了解更多歌手信息！）
        </p>
      </section>
      <section class="buttons">
        <button>为TA打call</button>
        <button>分享给好友</button>
      </section>
    </main>
    <footer class="copyright">
      Powered by Bingyan Studio
    </footer>
  </div>
</template>

<script>
import VoiceBox from '@/components/VoiceBox';

export default {
  name: 'ResultPage',
  components: { VoiceBox },
  data() {
    return {
      isLoading: true
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
