import './styles/main.css';
import {Element, Router} from './lib';

// Styles
window.document.body.style = `
  height: ${window.innerHeight}px;
`;

// main dom
let e = new Element()
let a = e.i('div', {'id': 'tachion'});
a.t(document.body);

// touch
document.addEventListener('touchmove', e => {
  e.preventDefault()
}, false)

// router
const r = new Router();
const popstate = () => {
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
