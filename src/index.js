import _ from "lodash";
import print from './print';
function Component(){
   const element = document.createElement('h1');
   const btn = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
   btn.innerHTML = "check console";

   btn.onclick = print;

   element.appendChild(btn);
   return element;
}

document.body.appendChild(Component());