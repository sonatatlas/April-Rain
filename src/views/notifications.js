/*
 *
 **/
//#home.js
import {DOM, Element, Scroller} from '../lib';
import {  } from '../model/card';
import '../styles/notifications.css';
import '../styles/pics.css';
import { router } from '.';
import data from './data.json';

function model_a(tapp, noti, sub) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper'}, {
    'touchstart': () => {
      d.id(tapp).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
    }, 'touchend': () => {
      d.id(tapp).style.backgroundColor = '#fff';
      window.sessionStorage.setItem(tapp, true);
      window.location.hash = `#detail?tapp=${tapp}`;
    }
  });
  // content
  let msg = e.i('div', {'class': 'msg_notifications', 'id': tapp}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications'}).t(msg);
  e.i('div', {'class': `left_msg_pic noti_${tapp}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg'}).p(noti).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // icon
  e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
  return msg_wrapper;
}

function model_noti() {
  let unread_wrapper = e.i('div', {'class': 'unread_wrapper'});
  let unread_dot = e.i('div', {'class': 'unread_dot'}).t(unread_wrapper);
  return unread_wrapper;
}

/* const */
const d = new DOM();
const e = new Element();

/* Function */
function msgChecker(unread, read) {
  for (let i in data) {
    if(i === 'about'){ break; }
    let flag = data[i];
    if(window.sessionStorage.getItem(flag.tapp)) {
      model_a(flag.tapp, flag.noti, flag.sub).t(read);
    } else {
      let noti = model_noti().t(unread);
      let noti_list = model_a(flag.tapp, flag.noti, flag.sub);
      noti_list.element.className = 'msg_wrapper_right';
      noti_list.t(noti);
    }
  }
}

/* Init */
export default function notifications(){
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@structure
  let page_notifications = e.i('section', {'class': 'page page_notifications'}).t(d.id('tachion'));

  //@navigator
  let navigator = e.i('div', {'class': 'navigator'}).t(page_notifications);
  e.i('div', {'class': 'left left_navigator'}, {
    'touchend': () => {
      window.location.hash = '#panel';
      router.panel();
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

  //@deploy
  msgChecker(unread_notifications, read_notifications);
}
