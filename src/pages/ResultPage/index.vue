<template>
  <transition name="fade-in">
    <div class="result">
      <transition name="fade-out">
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
            <div id="radar"></div>
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
  </transition>
</template>

<script>
import VoiceBox from '@/components/VoiceBox';
import G2 from '@antv/g2';
import { View } from '@antv/data-set';

export default {
  name: 'ResultPage',
  components: { VoiceBox },
  data() {
    return {
      isLoading: true
    };
  },
  methods: {
    renderRadar() {
      const data = [
        { item: '闷骚', score: 2 },
        { item: '戏精', score: 3 },
        { item: '文艺', score: 3 },
        { item: '装逼', score: 2 },
        { item: '孤独', score: 1 }
      ];
      const dv = new View().source(data);
      const chart = new G2.Chart({
        container: 'radar',
        height: '136',
        forceFit: true,
        padding: 5
      });
      chart.source(dv, {
        score: {
          min: 0,
          max: 3,
          tickCount: 4
        }
      });
      chart.tooltip(true, {
        shared: false
      });
      chart.coord('polar', {
        radius: 0.8
      });
      chart.axis('item', {
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null,
            stroke: '#4f3e2f',
            lineWidth: 2
          },
          hideFirstLine: false
        },
        label: {
          offset: 5,
          textStyle: {
            fill: '#4f3e2f',
            fontSize: 11
          }
        }
      });
      chart.axis('score', {
        line: null,
        tickLine: null,
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null,
            stroke: '#4f3e2f',
            lineWidth: 2
          }
        },
        label: false
      });
      chart.legend('user', false);
      chart.line().position('item*score').color('rgba(248,185,92,0.8)').size(2);
      chart.area().position('item*score').color('rgba(255,218,165,0.8)');
      chart.render();
    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 0);
  },
  mounted() {
    this.renderRadar();
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
