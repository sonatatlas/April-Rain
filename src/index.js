import './styles/main.css';
import {Element, Router, Scroller} from './lib';
import { router } from './views';

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
    router[hash[0].slice(1)]();
    //hash[0].match(/\?/)?
    // r.route(hash[0].slice(1, hash[0].indexOf('?'))):
    // r.route(hash[0].slice(1));
  } else {
    router.home();
    // r.route('home');
  }
}

popstate();
window.addEventListener('popstate', popstate);
