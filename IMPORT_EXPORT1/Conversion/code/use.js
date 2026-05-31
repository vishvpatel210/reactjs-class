// import { convert } from "./convert.js";

import cm from "./cm.js";
import feet from "./feet.js";
import miles from "./miles.js";

var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var btn = document.querySelector(".btn");
var cm1 = document.querySelector(".dis-cm");
var feet1 = document.querySelector(".dis-feet");
var miles1 = document.querySelector(".dis-miles");

cm1.style.display = "none";
feet1.style.display = "none";
miles1.style.display = "none";

btn.addEventListener("click", () => {
  let a = Number(input1.value);
  // convert(a);
  if (input2.value === "cm") {
    cm1.textContent = `cm: ${cm(input1.value)}`;
    feet1.textContent = `feet: NA`;
    miles1.textContent = `miles: NA`;
  } else if (input2.value === "feet") {
    cm1.textContent = `cm: NA`;
    feet1.textContent = `feet: ${feet(input1.value)}`;
    miles1.textContent = `miles: NA`;
  } else if (input2.value === "miles") {
    cm1.textContent = `cm: NA`;
    feet1.textContent = `feet: NA`;
    miles1.textContent = `miles: ${miles(input1.value)}`;
  } else {
    alert("enter correct value");
  }

  cm1.style.display = "block";
  feet1.style.display = "block";
  miles1.style.display = "block";
});
