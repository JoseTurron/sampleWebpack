import {
    sum
} from "./sum";
import style from "./css/index.scss"
console.log("Hello World");
console.log(sum(2, 4));

let heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);

heading.innerHTML = `101 + 5 = ${sumValue}`;

import Icon from "./assets/img/proba.png"

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);