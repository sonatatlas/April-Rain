import {DOM, Element} from '../lib';
import '../styles/pics.css';
import '../styles/welcome.css';

// const
const e = new Element();
const d = new DOM();

// functions
const text = (t, c) => e.i('text', {'class': `${c}`}, {}, t);
const enter = e => window.location.hash = '#panel';

// DOM
export default function welcome() {
  // init
  d.id('tachion').innerHTML = '';
  //@structure
  let page_welcome = e.i('section', {'class': 'page page_welcome'}).t(d.id('tachion'));
  let safe_welcome = e.i('div', {'class': 'safe'}).t(page_welcome);
  //@content_top
  let content_top =  e.i('div', {'class': 'content_top_welcome'}).t(safe_welcome);
  text('Welcome back', 'font_bold_welcome').t(content_top);
  text('to the future!', 'font_bold_welcome').t(content_top);

  //@content_body
  let logo_wrapper = e.i('div', {'class': 'logo_wrapper_welcome'}).t(safe_welcome);
  let wrapper_modal = e.i('div').t(logo_wrapper);
  let wrapper_modal_a = e.i('div').t(wrapper_modal);
  text('Press to sync data', 'middle bold').t(wrapper_modal_a);
  let wrapper_modal_b = e.i('div').t(wrapper_modal);
  text("Keep it safe, keep it yours", 'middle bold').t(wrapper_modal_b);
  let logo_finger = e.i('div', {'class': 'logo_finger logo_welcome'}, {
    click: enter
  }).t(logo_wrapper);
}
