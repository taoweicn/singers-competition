import springImg from './questions/picture/question_long_spring.png';
import summerImg from './questions/picture/question_long_summer.png';
import autumnImg from './questions/picture/question_long_autumn.png';
import winterImg from './questions/picture/question_long_winter.png';
import audio5 from './questions/audio/5.mp3';
import audio6 from './questions/audio/6.mp3';
import audio7 from './questions/audio/7.mp3';
import audio8 from './questions/audio/8.mp3';

const questions = [
  {
    question: '你最向往下列哪一个场景',
    options: [
      {
        text: 'A.春天呼吸着刚下过雨的新鲜空气',
        imgSrc: springImg
      }, {
        text: 'B.夏天吹着小风扇吃着冰镇西瓜',
        imgSrc: summerImg
      }, {
        text: 'C.秋高气爽走在铺满落叶的街道',
        imgSrc: autumnImg
      }, {
        text: 'D.冬天慵懒的躲在温暖的被窝里',
        imgSrc: winterImg
      }
    ]
  }, {
    question: '你在ktv唱歌的姿势一般是',
    options: [
      {
        text: 'A.规矩地坐在沙发唱'
      }, {
        text: 'B.忘我地站着闭眼唱'
      }, {
        text: 'C.在凳子上捧着话筒深情唱'
      }, {
        text: 'D.只听别人唱'
      }
    ]
  }, {
    question: '考试即将开始，为了放松心情你会选择听什么样的音乐？',
    options: [
      {
        text: 'A.总是固定的那几首歌'
      }, {
        text: 'B.安静的纯/轻音乐'
      }, {
        text: 'C.劲爆的摇滚/电音'
      }, {
        text: 'D.复古的蓝调/爵士乐'
      }
    ]
  }, {
    question: '深夜的华科，有人放声高歌扰民，你会__',
    options: [
      {
        text: 'A.戴上耳机，心中默默吐槽'
      }, {
        text: 'B.立即采取相关行动制止'
      }, {
        text: 'C.和TA一起对唱'
      }, {
        text: 'D.这么过分一定发QQ空间/朋友圈'
      }
    ]
  }, {
    question: '听到这首歌\n会想象自己身处什么场景中',
    questionAudio: audio5,
    options: [
      {
        text: 'A.梧桐絮飘飞的操场'
      }, {
        text: 'B.西小门外嘈杂的鲁磨路'
      }, {
        text: 'C.深夜清冷的绝望坡'
      }, {
        text: 'D.寒风凌列的东九楼顶'
      }
    ]
  }, {
    question: '听到这首歌你第一个想到的人是谁？',
    questionAudio: audio6,
    options: [
      {
        text: 'A.那个你不敢上前接触的ta'
      }, {
        text: 'B.那个你挽留不住的ta'
      }, {
        text: 'C.现在在你身边的ta'
      }, {
        text: 'D.时常在你梦里出现的ta'
      }
    ]
  }, {
    question: '听到这首歌会觉得自己沉浸在__中',
    questionAudio: audio7,
    options: [
      {
        text: 'A.校车即将开动的欣慰'
      }, {
        text: 'B.菘停韵贺的愉悦'
      }, {
        text: 'C.吃到南三门鸡蛋灌饼的幸福'
      }, {
        text: 'D.十佳歌手大赛现场的兴奋'
      }
    ]
  }, {
    question: '这首歌你听了多久就不想听了',
    questionAudio: audio8,
    options: [
      {
        text: 'A.一点开就不想听了'
      }, {
        text: 'B.听了一半'
      }, {
        text: 'C.听了完整的一遍'
      }, {
        text: 'D.我要单曲循环献给自己'
      }
    ]
  }
];

export default questions;
