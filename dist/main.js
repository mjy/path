!function(n){var e={};function i(t){if(e[t])return e[t].exports;var u=e[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,i),u.l=!0,u.exports}i.m=n,i.c=e,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)i.d(t,u,function(e){return n[e]}.bind(null,u));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i(i.s=0)}([function(n,e,i){const t=i(1).Stages,u=Object.keys(t),r=u.length;var s,o,c,m=0;function a(n){o.innerHTML=u[n],c.innerHTML=function(n){let e=t[u[n]];return e[Math.floor(Math.random()*e.length)]}(n)}window.onload=()=>{s=document.querySelector("#randomButton"),o=document.querySelector("#title"),c=document.querySelector("#level-item"),s.addEventListener("click",()=>{m<r?(a(m),m++):"Reset"==s.innerHTML?(s.innerHTML="Next level",a(m=0)):(o.innerHTML="Stage",c.innerHTML="",s.innerHTML="Reset")})}},function(n,e){n.exports={Grails:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in conse   quat ipsum venenatis."],Stages:{"Level 1":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 2":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 3":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 4":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 5":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 6":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 7":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 8":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 9":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."],"Level 10":["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tincidunt dui. Ut rutrum nunc enim, in consequat ipsum venenatis."]}}}]);