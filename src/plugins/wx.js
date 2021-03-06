import wx from 'weixin-js-sdk';
import { getWXconfig } from '@/api';
import shareIcon from '@/assets/sharing_icon.png';

export default async () => {
  try {
    const res = await getWXconfig();
    wx.config({
      debug: false,
      appId: res.data.appId,
      timestamp: res.data.timestamp,
      nonceStr: res.data.nonce_str,
      signature: res.data.signature,
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
      const wxShareConfig = {
        title: '最合我音乐品味的十佳歌手原来是ta！快来一起测测吧！', // 分享标题
        desc: '通过独一无二的感知测试，生成你的音乐品味鉴定书。', // 分享描述
        link: 'https://weixin.bingyan-tech.hustonline.net/top-singers-index/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: `https://weixin.bingyan-tech.hustonline.net${shareIcon}` // 分享图标
      };
      wx.onMenuShareTimeline(wxShareConfig);
      wx.onMenuShareAppMessage(wxShareConfig);
      wx.onMenuShareQQ(wxShareConfig);
      wx.onMenuShareWeibo(wxShareConfig);
      wx.onMenuShareQZone(wxShareConfig);
    });
    wx.error(() => {
      console.log('wx error');
    });
  } catch (e) {
    console.log(e);
  }
};
