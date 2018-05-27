import wx from 'weixin-js-sdk';
import { getWXconfig } from '@/api';
import shareIcon from '@/assets/sharing_icon.png';

export const wxInit = async () => {
  try {
    const res = await getWXconfig();
    wx.config({
      debug: false,
      ...res.data,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'previewImage'
      ]
    });
    wx.ready(() => {
      console.log('wx ready');
    });
    wx.error(() => {
      console.log('wx error');
    });
  } catch (e) {
    console.log(e);
  }
};


const wxShareConfig = {
  title: '测测哪位十佳歌手最合你的音乐品味', // 分享标题
  desc: '我最匹配的十大歌手', // 分享描述
  link: encodeURIComponent(window.location.href.split('#')[0]), // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl: encodeURIComponent(window.location.href.split('#')[0]) + shareIcon // 分享图标
};

export const wxShare = (config = wxShareConfig) => {
  wx.onMenuShareTimeline(config);
  wx.onMenuShareAppMessage(config);
  wx.onMenuShareQQ(config);
  wx.onMenuShareWeibo(config);
  wx.onMenuShareQZone(config);
};
