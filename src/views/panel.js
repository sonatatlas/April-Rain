/*
+ Panel
   + App
+ Tabbar
   + Buttons
*/
//#home.js
import {DOM, Element} from '../lib';
import '../styles/panel.css';

/* const */
const e = new Element();
const d = new DOM();

/* Init */
d.id('tachion').innerHTML = '';

//TODO
/* Model */
//@App
//@Button

/* DOM */
//@structure
let page_panel = e.i('section', {'class': 'page page_panel'}).t(d.id('tachion'));
let safe_panel = e.i('div', {'class': 'safe safe_panel'}).t(page_panel);

//@app-wrapper
let wrapper_app_panel = e.i('div', {'class': 'wrapper_app_panel'}).t(safe_panel);
let wrapper_app_panel_safe = e.i('div', {'class': 'wrapper_app_panel_safe'}).t(wrapper_app_panel);
e.i('div', {'class': 'app'}).t(wrapper_app_panel_safe);
e.i('div', {'class': 'app'}).t(wrapper_app_panel_safe);
e.i('div', {'class': 'app'}).t(wrapper_app_panel_safe);
e.i('div', {'class': 'app'}).t(wrapper_app_panel_safe);
e.i('div', {'class': 'app'}).t(wrapper_app_panel_safe);
e.i('div', {'class': 'app'}).t(wrapper_app_panel_safe);

//@tab-bar
let tab_bar = e.i('div', {'class': 'tab_bar'}).t(page_panel);
let tab_bar_safe = e.i('div', {'class': 'tab_bar_safe'}).t(tab_bar);
e.i('div', {'class': 'button'}).t(tab_bar_safe);
e.i('div', {'class': 'button'}).t(tab_bar_safe);
