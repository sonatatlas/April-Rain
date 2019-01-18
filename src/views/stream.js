/*
 *
 **/
//#home.js
import {DOM, Element, Scroller} from '../lib';
import { navigator } from './components';
import '../styles/stream.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();
const s = new Scroller();

/* Init */
export default function stream(){
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@structure
  let page_stream = e.i('section', {'class': 'page page_stream scroll_y'}).t(d.id('tachion'));

  //@navigatornn
  navigator('panel', '');

  //@stream-wrapperxo
  let safe_stream = e.i('div', {'class': 'safe safe_stream'}).t(page_stream);
  e.i('div', {'class': 'large bold mb-2'}, {}, "This is not only a demo, it's our future").t(safe_stream);
  e.i('div', {}, {}, "Virtual assistants will represent us and fulfill our personalized needs in the future.").t(safe_stream);
  e.i('div', {'class': 'pic_stream about_pic_a'}).t(safe_stream);
  e.i('div', {}, {}, 'To achieve that, an infrastructure that safely entrusts personal data usage among a wide variety of services is needed.').t(safe_stream);
  e.i('div', {'class': 'pic_stream about_pic_b'}).t(safe_stream);
  e.i('div', {}, {}, 'TACHION amis to be that infrastructure by designing a blockchain architecture that combines trusted data flow and diversified services.').t(safe_stream);
  e.i('div', {'class': 'pic_stream about_pic_c'}).t(safe_stream);
  e.i('div', {}, {}, 'Trust and collaboration can be forged in an ecosystem utilize TACHION, where personal virtual assistants can thrive.').t(safe_stream);
}
