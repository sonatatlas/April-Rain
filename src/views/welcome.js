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
  let wrapper_model = e.i('div', {'class': 'wrapper_model_welcome'}).t(logo_wrapper);
  text('Press to sync data', 'medium bold').t(wrapper_model);
  text("Keep it safe, keep it yours", 'medium bold').t(wrapper_model);

  //@progressbar
  e.i('div', {
    'class': 'small grey changing_text',
    'id': 'changing_text'
  }).t(wrapper_model);
  e.i('div', {'class': 'progress_bar', 'id': 'progress_bar'}).t(wrapper_model);

  //@logo_figner
  //FINGER_DOM
  let logo_press = false;
  let logo_finger = e.i('div', {'class': 'logo_finger logo_welcome'}, {
    touchstart: () => {
      if(!logo_press){
        logo_press = true;
        d.id('progress_bar').className = 'progress_bar injecting';
        d.id('changing_text').innerHTML = 'Sync health data...';

        setTimeout(() => {
          d.id('changing_text').innerHTML = 'behavioral data...';
        }, 500)
        
        setTimeout(() => {
          d.id('changing_text').innerHTML = 'emotional data...';
        }, 1000)

        setTimeout(() => {
          d.id('changing_text').innerHTML = 'Complete!';
        }, 1300)

        setTimeout(() => {
            window.location.hash = '#panel';
        }, 1500)
      }      
    }, touchend: () => {

    }
  }).t(logo_wrapper);  
}

