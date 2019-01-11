/*
 *
 **/
//#home.js
import {DOM, Element} from '../lib';
import '../styles/tapp.css';
import '../styles/pics.css';
import '../styles/notifications.css';
import { navigator } from './components';
import { model_noti, model_a } from '../model/card';
import { router } from '.';

/* const */
const d = new DOM();
const e = new Element();
const list = [
  ['Healthier body', 'noti-1', '3 health inidicator improved'],
  ['Productivity increased!', 'noti-2', 'sub'],
];

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

/* Init */
export default function tapp(){
  d.id('tachion').innerHTML = '';

  /* DOM */    
  //@structure
  let page_tapp = e.i('section', {'class': 'page page_tapp'}).t(d.id('tachion'));
  let safe_tapp = e.i('div', {'class': 'safe safe_tapp'}).t(page_tapp);

  //@navigator
  navigator('panel', 'My Space');

  //@notifications-wrapper
  let safe_notifications = e.i('div', { 'class': 'safe_notifications_tapp'}).t(safe_tapp);
  let unread_notifications = e.i('div', {'class': 'unread_notifications'}).t(safe_notifications);
  let read_notifications = e.i('div', {'class': 'read_notifications'}).t(safe_notifications);

  //@deploy
  msgChecker(unread_notifications, read_notifications);

  //@breaker
  let breaker = e.i('div', {'class': 'breaker_tapp'}, {},
  'Assistants for your daily life').t(safe_tapp);
  
  //@app-wrapper
  let wrapper_app_tapp = e.i('div', {'class': 'wrapper_app_tapp'}).t(safe_tapp);
  let wrapper_app_tapp_safe = e.i('div', {'class': 'wrapper_app_tapp_safe'}).t(wrapper_app_tapp);
  let apps = ['Health', 'Time', 'Routines', 'Devices'];
  let pics = ['noti-1', 'noti-2', 'noti-3', 'noti-4'];
  for (let i in apps) {
    let app = e.i('div', {'class': `tapp ${apps[i]}`, 'id': `${apps[i]}`}, {
      'touchstart': () => {
        d.id(apps[i]).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
      }, 'touchend': () => {
        window.location.hash = '#stream';
        router.stream();
        d.id(apps[i]).style.backgroundColor = '#fff';
      }
    }).t(wrapper_app_tapp_safe);
    let wrapper_icon = e.i('div', {'class': 'wrapper_icon_tapp'}).t(app);
    e.i('div', {'class': `left_msg_pic ${pics[i]}`}).t(wrapper_icon);
    e.i('div', {'class': 'text_tapp'}, {}, `${apps[i]} Asst`).t(app);
  }
}
