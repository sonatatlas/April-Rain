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

function body_a(el) {
  body_top_array(el);
  body_middle_pic(el);
  creep_words(el);
}

export function model(el) {
  let body_wrapper = model_wrapper_generator(el);
  body_a(body_wrapper);
  e.i('div', {'class': 'card_br_black'}).t(body_wrapper);
  body_a(body_wrapper);
}
