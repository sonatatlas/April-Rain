/*
 *
 **/
//#home.js
import {DOM, Element, Scroller} from '../lib';
import {model_a, model_noti} from '../model/card';
import { navigator } from './components';
import '../styles/stream.css';
import '../styles/pics.css';
import { router } from '.';

/* const */
const d = new DOM();
const e = new Element();
const s = new Scroller();

/* Init */
export default function stream(){
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@structure
  let page_stream = e.i('section', {'class': 'page page_stream'}).t(d.id('tachion'));

  //@navigator
  navigator('panel', 'Stream');

  //@stream-wrapper
  let safe_stream = e.i('div', {'class': 'safe safe_stream'}).t(page_stream);
  e.i('div', {}, {}, '#Page Stream').t(safe_stream);
  e.i('br').t(safe_stream);
  e.i('div', {}, {}, '"What is the most important thing I could be working be working on in the world right now? And if you are not working on that, why aren’t you?"').t(safe_stream);
  e.i('br').t(safe_stream)
  e.i('div', {}, {}, 'Aaron Swartz').t(safe_stream);
  //@deploy
  msgChecker(unread_stream, read_stream);
}
