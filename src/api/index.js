import axios from 'axios';

const userInfo = axios.create({
  baseURL: '/api/v1'
});

export const judgeStatus = () => userInfo.get('user/status');

export const getWXconfig = () => axios.get('https://weixin.bingyan-tech.hustonline.net/service/resources/signature', {
  params: {
    url: window.location.href.split('#')[0]
  }
});
