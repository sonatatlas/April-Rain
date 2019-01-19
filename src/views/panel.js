//#home.js
import {DOM, Element} from '../lib';
import '../styles/panel.css';
import '../styles/pics.css';
import data from './data.json';

/* const */
const d = new DOM();
const e = new Element();

/* Init */
export default function panel(){
  d.id('tachion').innerHTML = '';
  localStorage.setItem('finger_press', true);
  
  /* DOM */
  //@structure
  let page_panel = e.i('section', {'class': 'page page_panel'}).t(d.id('tachion'));
  let safe_panel = e.i('div', {'class': 'safe_panel'}).t(page_panel);

  //@app-wrapper
  let wrapper_app_panel = e.i('div', {'class': 'wrapper_app_panel'}).t(safe_panel);
  let wrapper_app_panel_safe = e.i('div', {'class': 'wrapper_app_panel_safe'}).t(wrapper_app_panel);
  let apps = ['space', 'social', 'store', 'work', 'wallet', 'about'];
  for (let i in apps) {
    let app = e.i('div', {'class': `app ${apps[i]}`, 'id': `${apps[i]}`}, {
      'touchstart': () => {
        d.id(apps[i]).style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
      },
      'touchend': () => {
        d.id(apps[i]).style.backgroundColor = '#fff';
        if(apps[i] === 'about') {
          window.location.hash = '#stream';
        } else {
          window.location.hash = `#tapp?tapp=${apps[i]}`;
        }
      }
    }).t(wrapper_app_panel_safe);
    let title = apps[i].charAt(0).toUpperCase().toString() + apps[i].slice(1);
    if (title == "Space"){
      title = "My Life"
    }
    e.i('text', {'class': 'text_app large bold'}, {}, title).t(app);
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
    }
  }).t(tab_bar_safe);
  e.i('text', {'class': 'large bold white'}, {}, `Notificaitions`).t(trends);
}
