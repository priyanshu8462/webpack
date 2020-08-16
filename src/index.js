import _ from "lodash";
function Component(){
   const element = document.createElement('h1');

   element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
   return element;
}

document.body.appendChild(Component());