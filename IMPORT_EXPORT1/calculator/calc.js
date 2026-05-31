import add from "./add.js";
import sub from "./sub.js";
import mul from "./mul.js";
import div from "./div.js"


export function calc(a,b){
    console.log(add(a,b));
    console.log(sub(a,b));
    console.log(mul(a,b));
    console.log(div(a,b));
}