<template>
  <transition name="slide">
    <div class="result">
      <section class="background">
        <img class="header" src="../../assets/result_pattern.png" alt="header">
        <img class="flag" src="../../assets/result_flag.png" alt="flag">
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
        <div class="report-container">
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
            <img class="right" src="../../assets/result_speak.png" alt="speaker">
          </div>
          <p class="prompt">
            （想看看是哪位十佳歌手为自己献唱？点击‘为TA打call’了解更多歌手信息！）
          </p>
        </div>
      </section>
      <section class="buttons">
        <button>为TA打call</button>
        <button>分享给好友</button>
      </section>
      <footer class="copyright">
        <img class="logo" src="../../assets/result_logo.png" alt="bingyan">
        Powered by Bingyan Studio
      </footer>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ResultPage'
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
