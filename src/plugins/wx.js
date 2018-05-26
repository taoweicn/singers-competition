import wx from 'weixin-js-sdk';
import { getWXconfig } from '@/api';
import shareIcon from '@/assets/sharing_icon.png';

getWXconfig().then((res) => {
  console.log(res);
  wx.config({
    debug: true,
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
});

const wxShareConfig = {
  title: '测测哪位十佳歌手最合你的音乐品味', // 分享标题
  desc: '我最匹配的十大歌手', // 分享描述
  link: 'https://weixin.bingyan-tech.hustonline.net/top-singers-index/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  imgUrl: `https://weixin.bingyan-tech.hustonline.net/top-singers-index/${shareIcon}` // 分享图标
};

const wxShare = (config = wxShareConfig) => {
  wx.onMenuShareTimeline(config);
  wx.onMenuShareAppMessage(config);
  wx.onMenuShareQQ(config);
  wx.onMenuShareWeibo(config);
  wx.onMenuShareQZone(config);
};

export default wxShare;
