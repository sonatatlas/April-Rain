/* model.js */
import {DOM, Element} from '../lib';
import { router } from '../views';
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
      router.detail();
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

/* model_card */
export function model_card_head(element, pic, title, sub) {
  // content
  let msg = e.i('div', {'class': 'msg_notifications', 'id': title}).t(element);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications'}).t(msg);
  e.i('div', {'class': `left_msg_pic ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // icon
  e.i('div', {'class': 'right_arrow_msg_2 arrow', 'id': 'double_arrow'}, {
    'touchend': () => {
      element.element
        .parentNode.parentNode.parentNode
        .removeChild(d.id('wrapper_model'))
    }
  }).t(msg);
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
      router.detail();
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
export function model_b(element, pic, title, sub, cb) {
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
  e.i('div', {'class': 'right_arrow_msg right_white'}, {
    'touchend': () => {cb?cb():''}
  }).t(msg);
}

/* model c */
export function model_c(element, pic, title, sub) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_c'}, {
    'touchstart': () => {}, 'touchend': () => {}
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
export function model_d(element, pic, title, sub1, sub2, cb, cb2) {
  /* wrapper */
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_d', 'id': 'slide_controller'}, {
    'touchstart': () => {}, 'touchend': () => {
      if (cb2 != undefined) { cb2(); }
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
  }, {
    'touchend': (e) => {
      if(e && e.stopPropagation){ e.stopPropagation();}
      // d.id('judge_circle').className = "right_arrow_msg_d icon_2_2x";
      // d.id('judge_circle').style='pointer-events: none;';
      d.id('judge_circle').parentNode.removeChild(d.id('judge_circle'));
      setTimeout(() => {
        if (cb != undefined) { cb(); }
      }, 300);
    }
  }).t(msg);
  e.i('text', {'style': 'font-size: 1.8em; color: white'}).p('OK').t(judge_circle);
}

/* model e */
export function model_e(element, pic, title, sub, cb, cb2, flag) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_e', 'id': title}, {
    'touchend': () => cb?cb():''
  }).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_d'}).t(msg_wrapper);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  e.i('text', {'class': 'right_title_msg_e'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // icon
  let judge_circle = e.i('text', {
    'id': `judge_circle_e_${title}`,
    'class': 'right_arrow_msg_e icon_2_2'
  }).t(msg);
  // animate
  e.i('text', {'style': 'font-size: 1.8em; color: white'}).p('OK').t(judge_circle);
  
  if (flag) {
    e.i('div', {'class': 'white_space_detail'}, {}, '&nbsp;').t(d.id('slide_area_detail'));
    d.id('slide_area_detail').scrollTo({ left: 600, behavior: 'smooth'});
  }
  
  setTimeout(() => {    
    if (cb2 != undefined ) { cb2() }
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
