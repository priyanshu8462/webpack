import _ from "lodash";
import "./style.css";
import image from "./photo.jpg";
import Data from "./data.xml";
function Component(){
   const element = document.createElement('h1');

   element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
   element.classList.add('heading');
   const myImage = new Image();
   element.appendChild(myImage)
   console.log(Data);
   return element;
}

document.body.appendChild(Component());