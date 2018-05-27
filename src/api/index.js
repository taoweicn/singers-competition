import axios from 'axios';
import { getLocal } from '@/utils/cache';

let headers = {};

if (getLocal('token')) {
  headers = {
    Authorization: getLocal('token')
  };
}

const userInfo = axios.create({
  baseURL: 'api/v1',
  headers
});

export const judgeStatus = () => userInfo.get('/user/status');

export const getWXconfig = () => axios.get('/service/resources/signature', {
  params: {
    url: window.location.href.split('#')[0]
  }
});
