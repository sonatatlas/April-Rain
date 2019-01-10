/* Components */
import { router } from '.';
import { DOM, Element } from '../lib';
import { model_card_head } from '../model/card';
import '../styles/components.css';
import '../styles/card.css';
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
function model_foot_generator(element, pic, text){}
function model_body_generator(element, pic, text){}
export function model(el) {
  /* model background */
  let wrapper = e.i('div', {
    'class': 'wrapper_model',
    'id': 'wrapper_model'
  }, {
    'touchend': () => el.element.removeChild(d.id('wrapper_model'))
  }).t(el);

  /* card */
  let card = e.i('div', {'class': 'card_model'}).t(wrapper);

  /* head */
  let head_wrapper = e.i('div', {'class': 'card_head_model'}).t(card);
  model_card_head(head_wrapper, 'noti-1', 'Healthier body!', '');
  e.i('div', {'class': 'br_black'}).t(card);

  /* body */
  // let body_wrapper = e.i('div', {'class': 'card_body_model'}).t(card);
  // e.i('div', {'class': ''}).t(body_wrapper);

  /* foot */
  // let foot = foot_generator('', 'health assistant').i(wrapper)
}
