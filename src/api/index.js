import axios from 'axios';
import { getLocal } from '@/utils/cache';

const userInfo = axios.create({
  baseURL: '/top-singers-index/api/v1',
  headers: {
    Authorization: getLocal('token')
  }
});

export const judgeStatus = () => userInfo.get('user/status');

export const getWXconfig = () => axios.get('service/resources/signature', {
  params: {
    url: window.location.href.split('#')[0]
  }
});
