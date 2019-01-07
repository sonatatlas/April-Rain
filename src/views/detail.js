/*
 *
 **/
//#home.js
import {DOM, Element} from '../lib';
import {model_b, model_c, model_d, model_e, model_f} from './model';
import '../styles/detail.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

/* Init */
d.id('tachion').innerHTML = '';

/* DOM */
//@structure
let page_detail = e.i('section', {'class': 'page page_detail'}).t(d.id('tachion'));
let safe_detail = e.i('div', {'class': 'safe safe_detail'}).t(page_detail);

//@navigator
let navigator = e.i('div', {'class': 'navigator'}).t(safe_detail);
e.i('div', {'class': 'left left_navigator'}, {
  'click': () => {
    window.location.hash = '#panel';
    require('./panel');
  }
}).t(navigator);

//@card_a
let card_a_wrapper = e.i('div', {'class': 'card_a_wrapper'}).t(safe_detail);
let card_a = e.i('div', {'class': 'card_a'}).t(card_a_wrapper);
model_b(card_a_wrapper, 'icon_1_1', 'Healthier body', '3 health indicator improved');
e.i('div', {'class': 'br'}).t(card_a_wrapper);
model_c(card_a_wrapper, 'icon_1_2', 'Healthier body', '3 health indicator improved');
model_c(card_a_wrapper, 'icon_1_3', 'Healthier body', '3 health indicator improved');
model_c(card_a_wrapper, 'icon_1_4', 'Healthier body', '3 health indicator improved');

model_d(safe_detail, 'icon_1_5', 'Contract auditiing & signing', 'verify & auditing & s');
model_e(safe_detail, 'icon_1_5', 'Contract auditiing & signing', 'verify & auditing & signed');

let model_f_wrapper = e.i('div', {'class': 'msg_wrapper_d'}).t(safe_detail)
model_f(model_f_wrapper, 'icon_3_1', 'Received 1st payment', '$10 will received more upcoming weeks');
e.i('div', {'class': 'br_black'}).t(model_f_wrapper);
model_f(model_f_wrapper, 'icon_3_2', 'Discount coupon received', 'clicked to see detail');
