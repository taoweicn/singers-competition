<template>
  <transition name="fade-in">
    <div class="result">
      <transition name="fade-out">
        <div v-if="isLoading && !isShowInput" class="loading">
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
      <transition name="fade-out">
        <div v-if="isShowInput" class="input-container">
          <div class="modal">
            <img src="../../assets/write_your_name.png" alt="write_your_name">
            <input v-model="username" type="text">
          </div>
          <button class="confirm-button" @click="confirm"></button>
        </div>
      </transition>
      <main v-show="!isShowInput" class="main">
        <section class="background">
          <header class="header"></header>
          <div class="flag"></div>
          <div class="banner">
            <img :src="avatar" alt="avatar" class="avatar">
            <div class="text">
              <h1 class="username">
                {{username}}
              </h1>
              <h2 class="title">
                独一无二的音乐品味鉴定书
              </h2>
            </div>
          </div>
          <div class="report">
            <p class="words">
              {{singer.text}}
            </p>
            <div id="radar"></div>
          </div>
          <div class="speaker">
            <img class="left" src="../../assets/result_user.png" alt="user">
            <VoiceBox :audioURL="singer.audio" :duration="singer.duration" />
          </div>
          <p class="prompt">
            （想看看是哪位十佳歌手为自己献唱？点击‘分享给好友’查看歌手信息！）
          </p>
        </section>
        <section class="buttons">
          <a href="https://music.163.com/independ/vote/59005" @click="vote">
            <button>为TA打call</button>
          </a>
          <button @click="share">分享给好友</button>
        </section>
      </main>
      <footer class="copyright">
        Powered by Bingyan Studio
      </footer>
      <div class="float-layer" v-if="isShowSharePicture" @click="isShowMask = false">
        <div class="mask" v-if="isShowMask">
          <div class="arrow"></div>
          <div class="save-it"></div>
        </div>
        <img :src="sharePictureURL" alt="share" class="share-img">
      </div>
    </div>
  </transition>
</template>

<script>
import VoiceBox from '@/components/VoiceBox';
import G2 from '@antv/g2';
import { View } from '@antv/data-set';
import { getLocal } from '@/utils/cache';
import sharePicture from '@/assets/share_demo.png';
import defaultAvatar from '@/assets/sharing_icon.png';
import singer from '../../../data/singers';

export default {
  name: 'ResultPage',
  components: { VoiceBox },
  data() {
    return {
      isLoading: true,
      sharePictureURL: '',
      isShowSharePicture: false,
      isShowMask: true,
      isShowInput: false,
      singer,
      username: '',
      avatar: defaultAvatar
    };
  },
  computed: {
    isWeiXin() {
      return /micromessenger/i.test(navigator.userAgent);
    }
  },
  methods: {
    share() {
      this.isShowSharePicture = true;
      window._czc.push([ '_trackEvent', '分享按钮', '分享给好友' ]) // eslint-disable-line
    },
    vote() {
      window._czc.push([ '_trackEvent', '投票按钮', '为ta打call' ]) // eslint-disable-line
    },
    confirm() {
      if (!this.username) return;
      this.isShowInput = false;
      this.renderRadarMap();
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
    renderRadarMap() {
      const data = [
        { item: '闷骚', score: Math.floor(Math.random() * 3) + 1 },
        { item: '戏精', score: Math.floor(Math.random() * 3) + 1 },
        { item: '文艺', score: Math.floor(Math.random() * 3) + 1 },
        { item: '装逼', score: Math.floor(Math.random() * 3) + 1 },
        { item: '孤独', score: Math.floor(Math.random() * 3) + 1 }
      ];
      // 随机一个是满的
      data[Math.floor(Math.random() * 5)].score = 3;
      const dv = new View().source(data);
      dv.transform({
        type: 'fold',
        fields: ['score'], // 展开字段集
        key: 'score',
        value: 'score' // value字段
      });
      const chart = new G2.Chart({
        container: 'radar',
        height: '136',
        forceFit: true,
        padding: [5, 18]
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
      // 给动画留下缓冲时间
      setTimeout(() => {
        this.renderSharePicture(
          this.username,
          this.singer.text,
          this.avatar,
          chart.toDataURL(),
          this.singer.picture
        );
      }, 1000);
    },
    renderSharePicture(username, resultText, avatarURL, radarMapDataURL, singersURL) {
      if (typeof username !== 'string') return;
      const background = new Image();
      background.src = sharePicture;
      const canvas = document.createElement('canvas');
      const content = canvas.getContext('2d');
      background.onload = () => {
        canvas.width = background.width;
        canvas.height = background.height;
        content.drawImage(background, 0, 0); // 绘制背景图片
        content.fillStyle = '#fff';
        content.font = '32px PingFang-SC-Bold';
        content.fillText(username, 165, 375); // 绘制用户名
        content.fillStyle = '#4f3e2f';
        content.font = '28px/1.4 PingFang-SC-Bold';
        this.wrapText(content, resultText, 88, 480, 285, 39); // 绘制结果文字
        this.drawImage(content, avatarURL, 60, 344, 83, 83); // 绘制用户头像
        this.drawImage(content, radarMapDataURL, 380, 500, 330, 250); // 绘制雷达图
        this.drawImage(content, singersURL, 132, 899, 371, 205); // 绘制歌手图片
        setTimeout(() => {
          this.sharePictureURL = canvas.toDataURL();
        }, 1000);
      };
    },
    drawImage(content, url, x, y, width, height) {
      const image = new Image(width, height);
      image.src = url;
      image.crossOrigin = 'Anonymous';
      image.onload = () => {
        content.drawImage(image, x, y, width, height);
      };
    },
    wrapText(context, text, x, y, maxWidth, lineHeight) {
      const words = text.split(' ');
      let line = '';
      let test;
      let metrics;

      for (let i = 0; i < words.length; i += 1) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] !== test) {
          words.splice(i + 1, 0, words[i].substr(test.length));
          words[i] = test;
        }
        test = `${line}${words[i]} `;
        metrics = context.measureText(test);
        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = `${words[i]} `;
          y += lineHeight; // eslint-disable-line no-param-reassign
        } else {
          line = test;
        }
      }
      context.fillText(line, x, y);
    }
  },
  created() {
    if (!this.isWeiXin) {
      this.isShowInput = true;
    }
  },
  mounted() {
    if (this.isWeiXin) {
      this.username = getLocal('nickname');
      this.avatar = getLocal('headimgurl');
      this.renderRadarMap();
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>
