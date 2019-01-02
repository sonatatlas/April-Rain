//#home.js
import {DOM, Element} from '../lib';
import '../styles/home.css';

/* const */
const e = new Element();
const d = new DOM();

/* methods */
const text = (t, c) => e.i('text', {'class': `${c}`}, {}, t);
const welcome = e => {
  window.location.hash = '#welcome';
  require('./welcome');
}
  
/* DOM */
//@structure
let page_home = e.i('section', {'class': 'page page_home'}).t(d.id('tachion'));
let safe_home = e.i('div', {'class': 'safe'}).t(page_home);

//@content_top
let content_top =  e.i('div', {'class': 'content_top_home'}).t(safe_home);
text('FUTURE OS', 'font_bold_home').t(content_top);
text('DEMO', 'font_bold_home').t(content_top);
text('EXP', 'font_bold_home').t(content_top);

//@content_body
let logo_wrapper = e.i('div', {'class': 'logo_wrapper_home'}).t(safe_home);
let logo_tachion = e.i('div', {
  'class': 'logo_tachion logo_home'
}, {'click': welcome}).t(logo_wrapper);
let wrapper_bottom = e.i('div', {'class': 'wrapper_bottom'}).t(logo_wrapper);
text('iOS for the blockchain era', 'font_regular_home').t(wrapper_bottom);
