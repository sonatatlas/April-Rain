import './styles/main.css';
import {Element, Router} from './lib';

// Styles
window.document.body.style = `
  height: ${window.innerHeight}px;
`;

// Dom
let e = new Element()
e.i('div', {'id': 'tachion'}).t(document.body);


// Touch
window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchstart", preventMotion, false);

function preventMotion(event) {
  window.scrollTo(0, 0);
  // event.preventDefault();
  event.stopPropagation();
}

// TODO - SPA Router
const r = new Router();
const popstate = () => {
  // Disable PC Browser
  if(window.innerWidth > window.innerHeight) {
    document.body.innerHTML = `Please visit our site via mobile :)`;
    return;
  }

  // navigator;
  let hash = window.location.hash.match(/#.*/);
  if(hash){
    hash[0].match(/\?/)?
      r.route(hash[0].slice(1, hash[0].indexOf('?'))):
      r.route(hash[0].slice(1));
  }else{
    r.route('home');
  }
}

popstate();
window.addEventListener('popstate', popstate);
