/*
 *
 **/
//#home.js
import {DOM, Element} from '../lib';
import '../styles/panel.css';
import '../styles/pics.css';
import { router } from '.';

/* const */
const d = new DOM();
const e = new Element();

/* Init */
export default function panel(){
  d.id('tachion').innerHTML = '';

  /* DOM */
  //@structure
  let page_panel = e.i('section', {'class': 'page page_panel'}).t(d.id('tachion'));
  let safe_panel = e.i('div', {'class': 'safe_panel'}).t(page_panel);

  //@app-wrapper
  let wrapper_app_panel = e.i('div', {'class': 'wrapper_app_panel'}).t(safe_panel);
  let wrapper_app_panel_safe = e.i('div', {'class': 'wrapper_app_panel_safe'}).t(wrapper_app_panel);
  let apps = ['space', 'groups', 'store', 'work', 'wallet', 'investment'];
  for (let i in apps) {
    let app = e.i('div', {'class': `app ${apps[i]}`, 'id': `${apps[i]}`}, {
      'passive': () => {
        d.id(apps[i]).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
      }, 'touchend': () => {
        d.id(apps[i]).style.backgroundColor = '#fff';
        router.tapp();
        window.location.hash = '#tapp';
      }
    }).t(wrapper_app_panel_safe);
    e.i('text', {'class': 'text_app'}, {}, `${apps[i]}`).t(app);
  }

  //@tab-bar
  let tab_bar = e.i('div', {'class': 'tab_bar'}).t(page_panel);
  let tab_bar_safe = e.i('div', {'class': 'tab_bar_safe'}).t(tab_bar);
  let trends = e.i('div', {'class': 'button trends', 'id': 'trends'}, {
    'touchstart': () => {
      d.id('trends').className = 'button trends_tap';
    }, 'touchend': () => {
      d.id('trends').className = 'button trends';
      window.location.hash = '#notifications';
      router.notifications();
    }
  }).t(tab_bar_safe);
  e.i('text', {'class': 'text_tab_bar text_tab_bar_trends'}, {}, `Notificaitions`).t(trends);
}
