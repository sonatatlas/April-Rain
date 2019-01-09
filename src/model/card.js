/* model.js */
import {DOM, Element} from '../lib';
import '../styles/card.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

/* model for notifications */
export function model_noti(id, element, pic, title, sub) {
  // wrapper
  let unread_wrapper = e.i('div', {'class': 'unread_wrapper'}).t(element);
  let unread_dot = e.i('div', {'class': 'unread_dot'}).t(unread_wrapper);
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_right'}, {
    'touchstart': () => {
      d.id(title).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
    }, 'touchend': () => {
      window.sessionStorage.setItem(id, true);
      d.id(title).style.backgroundColor = '#fff';
      window.location.hash = '#detail';
      require('../views/detail');
    }
  }).t(unread_wrapper);
  // content
  let msg = e.i('div', {'class': 'msg_notifications', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications'}).t(msg);
  e.i('div', {'class': `left_msg_pic ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
}

/* model a */
export function model_a(element, pic, title, sub) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper'}, {
    'touchstart': () => {
      d.id(title).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
    }, 'touchend': () => {
      d.id(title).style.backgroundColor = '#fff';
      window.location.hash = '#detail';
      require('../views/detail');
    }
  }).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications'}).t(msg);
  e.i('div', {'class': `left_msg_pic ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // icon
  e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
}

/* model b */
export function model_b(element, pic, title, sub) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_b'}).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_b', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_b'}).t(msg);
  e.i('div', {'class': `left_msg_pic_b ${pic}`}).t(left_msg);
  // riight
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg_b'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg_b'}).p(sub).t(right_msg);
  e.i('div', {'class': 'right_arrow_msg right_white'}).t(msg);
}

/* model c */
export function model_c(element, pic, title, sub) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_c'}, {
    'touchstart': () => {
    }, 'touchend': () => {
    }
  }).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_c', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_c'}).t(msg);
  e.i('div', {'class': `left_msg_pic_c ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  e.i('text', {'class': 'right_title_msg_b'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg_b'}).p(sub).t(right_msg);
}

/* model d */
export function model_d(element, pic, title, sub1, sub2, cb) {
  /* wrapper */
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_d'}, {
    'touchstart': () => {}, 'touchend': () => {
      d.id('judge_circle').className = "right_arrow_msg_d icon_2_2";
    }
  }).t(element);
  e.i('div', {'class': 'big_title_msg_d'}, {},
    'Sale data to public health institution').t(msg_wrapper);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_d', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_c'}).t(msg);
  e.i('div', {'class': `left_msg_pic_d ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  e.i('text', {'class': 'right_sub_msg'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub1).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub2).t(right_msg);
  let judge_circle = e.i('text', {
    'id': 'judge_circle', 'class': 'right_arrow_msg_d_filled'
  }).t(msg);
  e.i('text', {'style': 'font-size: 1.8em; color: white'}).p('OK').t(judge_circle);
  return setTimeout(() => {
    d.id('judge_circle').className = "right_arrow_msg_d icon_2_2";
    if (cb != undefined ) { cb() }
  }, 1000);
}

/* model e */
export function model_e(element, pic, title, sub, cb, flag) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_e', 'id': title}).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_d'}).t(msg_wrapper);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  e.i('text', {'class': 'right_title_msg_e'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // icon
  let judge_circle = e.i('text', {
    'id': `judge_circle_e_${title}`,
    'class': 'right_arrow_msg_e_filled'
  }).t(msg);

  // animate
  e.i('text', {'style': 'font-size: 1.8em; color: white'}).p('OK').t(judge_circle);
  flag?d.id('slide_area_detail').scrollTo({ left: 1000, behavior: 'smooth'}):'';
  setTimeout(() => {
    d.id(`judge_circle_e_${title}`).className = "right_arrow_msg_e icon_2_2";
    if (cb != undefined ) { cb() }
  }, 1000)
}

/* model f */
export function model_f(element, pic, title, sub) {
  // content
  let msg = e.i('div', {'class': 'msg_notifications_f', 'id': title}).t(element);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_b'}).t(msg);
  e.i('div', {'class': `left_msg_pic_f ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg_e'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
}
