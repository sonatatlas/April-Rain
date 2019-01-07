/* model.js */
import {DOM, Element} from '../lib';
import '../styles/model.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

export function model_a(element, pic, title, sub) {
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper'}, {
    'touchstart': () => {
      d.id(title).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
    }, 'touchend': () => {
      d.id(title).style.backgroundColor = '#fff';
      window.location.hash = '#detail';
      require('./detail');
    }
  }).t(element);
  let msg = e.i('div', {'class': 'msg_notifications', 'id': title}).t(msg_wrapper);
  let left_msg = e.i('div', {'class': 'left_msg_notifications'}).t(msg);
  e.i('div', {'class': `left_msg_pic ${pic}`}).t(left_msg);
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  let right_title_msg = e.i('text', {'class': 'right_title_msg'}).p(title).t(right_msg);
  let right_sub_msg = e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  let right_arrow = e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
}

export function model_b(element, pic, title, sub) {
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_bx'}).t(element);
  let msg = e.i('div', {'class': 'msg_notifications', 'id': title}).t(msg_wrapper);
  let left_msg = e.i('div', {'class': 'left_msg_notifications_b'}).t(msg);
  e.i('div', {'class': `left_msg_pic_b ${pic}`}).t(left_msg);
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  let right_title_msg = e.i('text', {'class': 'right_title_msg_b'}).p(title).t(right_msg);
  let right_sub_msg = e.i('text', {'class': 'right_sub_msg_b'}).p(sub).t(right_msg);
  let right_arrow = e.i('div', {'class': 'right_arrow_msg right_white'}).t(msg);
}

export function model_c(element, pic, title, sub) {
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_c'}, {
    'touchstart': () => {
    }, 'touchend': () => {
    }
  }).t(element);
  let msg = e.i('div', {'class': 'msg_notifications_c', 'id': title}).t(msg_wrapper);
  let left_msg = e.i('div', {'class': 'left_msg_notifications_c'}).t(msg);
  e.i('div', {'class': `left_msg_pic_c ${pic}`}).t(left_msg);
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  let right_title_msg = e.i('text', {'class': 'right_title_msg_b'}).p(title).t(right_msg);
  let right_sub_msg = e.i('text', {'class': 'right_sub_msg_b'}).p(sub).t(right_msg);
}

export function model_d(element, pic, title, sub) {
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_d'}, {
    'touchstart': () => {
      d.id(title).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
    }, 'touchend': () => {
      d.id(title).style.backgroundColor = '#fff';
      window.location.hash = '#detail';
      require('./detail');
    }
  }).t(element);
  e.i('div', {'class': 'big_title_msg_d'}, {}, 'Sale data to public health institution')
    .t(msg_wrapper);  
  let msg = e.i('div', {'class': 'msg_notifications_d', 'id': title}).t(msg_wrapper);
  let left_msg = e.i('div', {'class': 'left_msg_notifications_c'}).t(msg);
  e.i('div', {'class': `left_msg_pic_d ${pic}`}).t(left_msg);
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  let right_sub_msg = e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);  
  let right_arrow = e.i('div', {'class': 'right_arrow_msg_d icon_2_2'}).t(msg);
}

export function model_e(element, pic, title, sub) {
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_d'}).t(element);
  let msg = e.i('div', {'class': 'msg_notifications_d', 'id': title}).t(msg_wrapper);
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  let right_title_msg = e.i('text', {'class': 'right_title_msg_e'}).p(title).t(right_msg);
  let right_sub_msg = e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  let right_arrow = e.i('div', {'class': 'right_arrow_msg_d icon_2_2'}).t(msg);
}

export function model_f(element, pic, title, sub) {
  let msg_wrapper = e.i('div').t(element);
  let msg = e.i('div', {'class': 'msg_notifications_f', 'id': title}).t(msg_wrapper);
  let left_msg = e.i('div', {'class': 'left_msg_notifications_b'}).t(msg);
  e.i('div', {'class': `left_msg_pic_f ${pic}`}).t(left_msg);
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  let right_title_msg = e.i('text', {'class': 'right_title_msg_e'}).p(title).t(right_msg);
  let right_sub_msg = e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  let right_arrow = e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
}
