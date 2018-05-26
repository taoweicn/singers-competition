import axios from 'axios';

const userInfo = axios.create({
  baseURL: '/top-singers-index/api/v1'
});

export const judgeStatus = () => userInfo.get('user/status');

export const getWXconfig = () => axios.get('/service/resources/signature', {
  params: {
    url: window.location.href.split('#')[0]
  }
});
