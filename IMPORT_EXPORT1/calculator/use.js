import {calc} from "./calc.js";
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var btn = document.querySelector(".btn");


btn.addEventListener("click",()=>{
    var a = Number(input1.value);
    var b = Number(input2.value);
    calc(a,b);
});