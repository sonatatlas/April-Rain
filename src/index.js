import './styles/main.css';
import './styles/pics.css';
import {Element, Router, Scroller} from './lib';
import { router } from './views';
import data from './views/data.json';

// service-worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

// Styles
window.document.body.style = `
  height: ${window.innerHeight}px;
`;

// Dom
let e = new Element()
e.i('div', {'id': 'tachion'}).t(document.body);

// Touch
let s = new Scroller()
//s.disableScroller();

router.home();

// TODO - SPA Router
// const r = new Router();
const popstate = () => {
  // Disable PC Browser
  if(window.innerWidth > window.innerHeight) {
    document.body.innerHTML = `Please visit our site via mobile :)`;
    return;
  }
  
  // navigator;
  let hash = window.location.hash.match(/#.*/);
  if(hash){
    if (hash[0].match(/\?/)) {
      let page_data = data[hash[0].slice(hash[0].indexOf('=')).slice(1)];
      router[hash[0].slice(1, hash[0].indexOf('?'))](page_data);
    } else {
      router[hash[0].slice(1)]();
    }
  } else {
    router['home']
  }
}

popstate();
window.addEventListener('popstate', popstate);
