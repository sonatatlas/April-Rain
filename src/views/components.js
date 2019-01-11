/* Components */
import { router } from '.';
import { DOM, Element } from '../lib';
import { model_card_head } from './card';
import '../styles/components.css';
import '../styles/card.css';
import '../styles/pics.css';
import '../styles/notifications.css';

/* const */
const d = new DOM();
const e = new Element();

/* navigator */
export function navigator(path, text) {
  let navigator = e.i('div', {'class': 'navigator'}).t(d.id('tachion'));
  e.i('div', {'class': 'left left_navigator'}, {
    'touchend': () => {
      window.location.hash = `#${path}`;
      router[path]();
    }
  }).t(navigator);
  e.i('div', {'class': 'label_navigator'}, {}, text).t(navigator);
}

/* model */
//@head & body
//=return body_wrapper
function model_wrapper_generator(el) {
  //background
  let wrapper = e.i('div', {
    'class': 'wrapper_model',
    'id': 'wrapper_model'
  }, {
    //'touchend': () => el.element.removeChild(d.id('wrapper_model'))
  }).t(el);
  //card
  let card = e.i('div', {'class': 'card_model'}).t(wrapper);
  //head
  let head_wrapper = e.i('div', {'class': 'card_head_model'}).t(card);
  model_card_head(head_wrapper, 'noti-1', 'Healthier body!', '');
  e.i('div', {'class': 'br_black'}).t(card);
  let body_wrapper = e.i('div', {'class': 'card_body_model'}).t(card);
  e.i('div', {'class': 'card_br_black'}).t(card);
  let foot_wrapper = e.i('div', {'class': 'card_foot_model'}).t(card);
  e.i('div', {'class': 'card_grey_font'}, {}, 'from').t(foot_wrapper);
  e.i('div', {'class': 'card_little_pic foot_health'}).t(foot_wrapper);
  e.i('div', {'class': 'card_foot_right'}, {}, 'health assitant').t(foot_wrapper);
  return body_wrapper;
}

function body_top_array(el) {
  let array = e.i('div', {'class': 'card_body_top_array'}).t(el)
  e.i('div', {'class': 'card_little_pic foot_health'}).t(array);
  e.i('div', {}, {}, 'health assitant').t(array);
  e.i('div', {'class': 'card_grey_font'}, {}, `-10% this month`).t(array);
}

function body_middle_pic(el) {
  e.i('div', {'class': 'card_row_cover_pic chart'}).t(el)
}

function creep_words(el) {
  let words = [
    '_Lower BMI', 
    'relate to',
    '_More work out time', 
    '_Less calories intake'
  ];
  let creep_words_wrapper = e.i('div', {'class': 'card_creep_words_wrapper'}).t(el);
  for (let i in words) {
    if(words[i][0] == '_'){
      e.i('div', {'class': 'card_creep_words'}, {}, words[i].slice(1)).t(creep_words_wrapper);
    } else {
      e.i('div', {'class': 'card_normal_words'}, {}, words[i]).t(creep_words_wrapper);
    }
  }
}

function body_fall_words(el, word1, word2) {
  let line_wrapper = e.i('div', {'class': 'card_fall_words_wrapper'}).t(el);
  e.i('div', {'class': 'card_normal_words'}, {}, word1).t(line_wrapper);
  e.i('div', {'class': 'card_grey_font'}, {}, word2).t(line_wrapper);
}

function body_a(el) {
  body_top_array(el);
  body_middle_pic(el);
  creep_words(el);
}

function body_b(el) {
  body_top_array(el);
  creep_words(el);
  body_middle_pic(el);
}

export function card_model_a(el) {
  let body_wrapper = model_wrapper_generator(el);
  body_a(body_wrapper);
  e.i('div', {'class': 'card_br_black'}).t(body_wrapper);
  body_a(body_wrapper);
}

export function card_model_b(el) {
  let body_wrapper = model_wrapper_generator(el);
  body_b(body_wrapper);
  body_fall_words(body_wrapper, 'Data type', 'anonymous');
  body_fall_words(body_wrapper, 'Pay frequency', 'weekly');
  body_fall_words(body_wrapper, 'Physical check-up discount coupon');
}

function pic_and_words(el) {
  let wrapper = e.i('div', {'class': 'pic_and_words_wrapper'}).t(el);
  e.i('div', {'class': 'card_middle_pic icon_2_2'}).t(wrapper);
  e.i('div', {'class': 'card_normal_font'}, {
  }, 'Service registered on this flow').t(wrapper);
}

export function card_model_c(el) {
  let body_wrapper = model_wrapper_generator(el);
  body_top_array(body_wrapper);
  body_fall_words(body_wrapper, 'Pay frequency', 'weekly');
  body_fall_words(body_wrapper, 'Physical check-up discount coupon');
  e.i('div', {'class': 'card_br_black'}).t(body_wrapper);
  pic_and_words(body_wrapper);
  pic_and_words(body_wrapper);
}
