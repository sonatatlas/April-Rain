/*
 *
 **/
//#home.js
import '../styles/tapp.css';
import '../styles/pics.css';
import '../styles/notifications.css';
import {DOM, Element} from '../lib';
import { navigator } from './components';

/* const */
const d = new DOM();
const e = new Element();

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

/* Function */
function msgChecker(unread, read, data) {
    if(window.sessionStorage.getItem(data.tapp)) {
      model_a(data.tapp, data.noti, data.sub).t(read);
    } else {
      let noti = model_noti().t(unread);
      let noti_list = model_a(data.tapp, data.noti, data.sub);
      noti_list.element.className = 'msg_wrapper_right';
      noti_list.t(noti);
    }
}

/* Init */
export default function tapp(data){
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@structure
  let page_tapp = e.i('section', {'class': 'page page_tapp'}).t(d.id('tachion'));
  let safe_tapp = e.i('div', {'class': 'safe safe_tapp'}).t(page_tapp);

  //@navigator
  navigator('panel')//data.tapp.charAt(0).toUpperCase() + data.tapp.slice(1));

  //@notifications-wrapper
  let safe_notifications = e.i('div', { 'class': 'safe_notifications_tapp'}).t(safe_tapp);
  let unread_notifications = e.i('div', {'class': 'unread_notifications'}).t(safe_notifications);
  let read_notifications = e.i('div', {'class': 'read_notifications'}).t(safe_notifications);

  //@deploy
  msgChecker(unread_notifications, read_notifications, data);
  
  //@breaker
  let breaker = e.i('div', {'class': 'breaker_tapp'}, {},
    data.explain).t(safe_tapp);

  //@app-wrapper
  let wrapper_app_tapp = e.i('div', {'class': 'wrapper_app_tapp'}).t(safe_tapp);
  let wrapper_app_tapp_safe = e.i('div', {'class': 'wrapper_app_tapp_safe'}).t(wrapper_app_tapp);
  let apps = data.services;
  let pics = [`service_${data.tapp}_1`, `service_${data.tapp}_2`, `service_${data.tapp}_3`, `service_${data.tapp}_4`];
  for (let i in apps) {
    let app = e.i('div', {'class': `tapp ${apps[i]}`, 'id': `${apps[i]}`}, {
      'touchstart': () => {
        d.id(apps[i]).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
      }, 'touchend': () => {
        // window.location.hash = '#stream';
        d.id(apps[i]).style.backgroundColor = '#f9fefe';
      }
    }).t(wrapper_app_tapp_safe);
    let wrapper_icon = e.i('div', {'class': 'wrapper_icon_tapp'}).t(app);
    e.i('div', {'class': `left_msg_pic ${pics[i]}`}).t(wrapper_icon);
    e.i('div', {'class': 'text_tapp'}, {}, `${apps[i]} Assistant`).t(app);
  }
}
