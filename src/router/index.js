import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage';
import QuizPage from '@/pages/QuizPage';
import ResultPage from '@/pages/ResultPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/quiz',
      name: 'QuizPage',
      component: QuizPage
    },
    {
      path: '/result',
      name: 'ResultPage',
      component: ResultPage
    }
  ]
});
