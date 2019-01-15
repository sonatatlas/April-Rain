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
function model_wrapper_generator(el, data, model, order) {
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
  model_card_head(
    head_wrapper,
    `${model}_${data.tapp}_title_${order}`,
    data[model][`title_${order}`], '');
  e.i('div', {'class': 'br_black'}).t(card);
  let body_wrapper = e.i('div', {'class': 'card_body_model'}).t(card);
  e.i('div', {'class': 'card_br_black'}).t(card);
  let foot_wrapper = e.i('div', {'class': 'card_foot_model'}).t(card);
  e.i('div', {'class': 'card_grey_font'}, {}, 'from').t(foot_wrapper);
  e.i('div', {'class': `card_little_pic ${model}_${data.tapp}_foot_${order}`}).t(foot_wrapper);
  e.i('div', {'class': 'card_foot_right'}, {}, data[model][`foot_${order}`]).t(foot_wrapper);
  return body_wrapper;
}

function body_top_array(el, data, model, order) {
  let passing = data[model][`top_array_${order}`];
  let array = e.i('div', {'class': 'card_body_top_array'}).t(el)
  e.i('div', {'class': `card_little_pic ${model}_${data.tapp}_${order}`}).t(array);
  e.i('div', {}, {}, passing[0]).t(array);
  e.i('div', {'class': 'card_grey_font'}, {}, passing[1]).t(array);
}

function body_middle_pic(el, data, model, order) {
  e.i('div', {'class': `card_row_cover_pic ${model}_${data.tapp}_pic_${order}`}).t(el)
}

function creep_words(el, data, model, order) {
  let creep_words_wrapper = e.i('div', {'class': 'card_creep_words_wrapper'}).t(el);
  let words = data[model][`creep_words_${order}`];
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

function body_a(el, data, model, order) {
  body_top_array(el, data, model, order);
  body_middle_pic(el, data, model, order);
  creep_words(el, data, model, order);
}

function body_b(el, data, model, order) {
  body_top_array(el, data, model, order);
  creep_words(el, data, model, order);
  body_middle_pic(el, data, model, order);
}

export function card_model_a(el, data) {
  let body_wrapper = model_wrapper_generator(el, data, 'model_a', 'a');
  body_a(body_wrapper, data, 'model_a', 'a');
  e.i('div', {'class': 'card_br_black'}).t(body_wrapper);
  body_a(body_wrapper, data, 'model_a', 'b');
}

export function card_model_b(el, data, order) {
  let body_wrapper = model_wrapper_generator(el, data, 'model_b', order);
  let words = data.model_b[`fall_words_${order}`];
  body_b(body_wrapper, data, 'model_b', order);
  body_fall_words(body_wrapper, words[0], words[1]);
  body_fall_words(body_wrapper, words[2], words[3]);
  body_fall_words(body_wrapper, words[4]);
}

function pic_and_words(el, words) {
  let wrapper = e.i('div', {'class': 'pic_and_words_wrapper'}).t(el);
  e.i('div', {'class': 'card_middle_pic icon_2_2'}).t(wrapper);
  e.i('div', {'class': 'card_normal_font'}, {
  }, words).t(wrapper);
}

export function card_model_c(el, data, order) {
  let body_wrapper = model_wrapper_generator(el, data, 'model_c', order);
  let words = data.model_c[`fall_words_${order}`];
  body_top_array(body_wrapper, data, 'model_c', order);
  body_fall_words(body_wrapper, words[0], words[1]);
  body_fall_words(body_wrapper, words[2], words[3]);
  e.i('div', {'class': 'card_br_black'}).t(body_wrapper);
  pic_and_words(body_wrapper, data.model_c[`pic_and_words_${order}`][0]);
  pic_and_words(body_wrapper, data.model_c[`pic_and_words_${order}`][1]);
}
