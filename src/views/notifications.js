/*
 *
 **/
//#home.js
import {DOM, Element} from '../lib';
import {model_a} from './model';
import '../styles/notifications.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

/* Init */
d.id('tachion').innerHTML = '';

/* DOM */
//@structure
let page_notifications = e.i('section', {'class': 'page page_notifications'}).t(d.id('tachion'));
let safe_notifications = e.i('div', {'class': 'safe safe_notifications'}).t(page_notifications);

//@navigator
let navigator = e.i('div', {'class': 'navigator'}).t(safe_notifications);
e.i('div', {'class': 'left left_navigator'}, {
  'click': () => {
    window.location.hash = '#panel';
    require('./panel');
  }
}).t(navigator);
e.i('div', {'class': 'label_navigator'}, {}, 'Notifications').t(navigator)

//@notifications-wrapper
let notifications_wrapper = e.i('div', {'class': 'notifications_wrapper'}).t(safe_notifications);
model_a(notifications_wrapper, 'noti-1', 'Healthier body', '3 health inidicator improved');
model_a(notifications_wrapper, 'noti-2', 'Productivity increased!', 'sub');
model_a(notifications_wrapper, 'noti-3', 'Need more rest', 'sub');
model_a(notifications_wrapper, 'noti-4', 'Comments', 'sub');
model_a(notifications_wrapper, 'noti-5', 'Statistics', 'sub');
