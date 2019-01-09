/*
 *
 **/
//#home.js
import {DOM, Element, Scroller} from '../lib';
import {model_a, model_noti} from '../model/card';
import '../styles/notifications.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();
const s = new Scroller();

const list = [
  ['Healthier body', 'noti-1', '3 health inidicator improved'],
  ['Productivity increased!', 'noti-2', 'sub'],
  ['Need more rest', 'noti-3', 'sub'],
  ['Comments', 'noti-4', 'sub'],
  ['Statistics', 'noti-5', 'sub']
];

/* Init */
d.id('tachion').innerHTML = '';

/* Function */
function msgChecker(unread, read) {
  for (let i in list) {
    let flag = list[i];
    if(window.sessionStorage.getItem(flag[0])) {
      model_a(read, flag[1], flag[0], flag[2]);
    } else {
      model_noti(flag[0], unread, flag[1], flag[0], flag[2]);
    }
  }
}

/* DOM */
//@structure
let page_notifications = e.i('section', {'class': 'page page_notifications'}).t(d.id('tachion'));

//@navigator
let navigator = e.i('div', {'class': 'navigator'}).t(page_notifications);
e.i('div', {'class': 'left left_navigator'}, {
  'touchstart': () => {
    window.location.hash = '#panel';
    require('./panel');
    window.location.reload();
  }
}).t(navigator);
e.i('div', {'class': 'label_navigator'}, {}, 'Notifications').t(navigator);

//@notifications-wrapper
let safe_notifications = e.i('div', {
  'id': 'safe_notifications',
  'class': 'safe safe_notifications'
}).t(page_notifications);
let unread_notifications = e.i('div', {'class': 'unread_notifications'}).t(safe_notifications);
let read_notifications = e.i('div', {'class': 'read_notifications'}).t(safe_notifications);

s.touchScroll('safe_notifications');

//@deploy
msgChecker(unread_notifications, read_notifications);
