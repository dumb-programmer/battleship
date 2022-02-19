(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,".content {\n    display: flex;\n    justify-content: center;\n}\n\n.box, .selected-box {\n    height: 40px;\n    width: 40px;\n    border: 1px solid black;\n    cursor: pointer;\n}\n\n.black {\n    background-color: black;\n}\n\n.red {\n    background-color: red;\n    cursor: not-allowed;\n}\n\n.selected-box {\n    cursor: no-drop;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 2px solid black;\n}\n\n.gameboards {\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 20px;\n}\n\n#computerboard>.box:hover {\n    background-color: rgb(243, 128, 128);\n}\n\n#playerboard>.box {\n    cursor: auto;\n}\n\n.hit, .miss {\n    cursor: not-allowed;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: blue;\n}\n\n.hit, .miss {\n    cursor: not-allowed;\n}",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],c=0;c<e.length;c++){var i=e[c],l=r.base?i[0]+r.base:i[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=n(u),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var i=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),c=n(565),i=n.n(c),l=n(216),d=n.n(l),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=i(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const f=class{constructor(e){this.length=e,this.ship=[];for(let e=0;e<this.length;e++)this.ship.push("");this.sunk=!1}hit(e){this.sunk||(this.ship[e]="*",this.isSunk())}isSunk(){return this.ship.every((e=>"*"==e))&&(this.sunk=!0),this.sunk}size(){return this.length}},b=function(e,t){let n=["Carrier","Battleship","Destroyer","Submarine","Patrol Boat"],r=0;return{render:function(){!function(){const e=document.createElement("div"),t=document.createElement("div");for(let e=0;e<10;e++)for(let n=0;n<10;n++){const r=document.createElement("div");r.classList.add("box"),r.setAttribute("row",e),r.setAttribute("column",n),t.appendChild(r)}t.classList.add("gameboard"),e.classList.add("content"),e.appendChild(t),document.body.appendChild(e);const o=document.createElement("p");o.textContent="Place your ";const a=document.createElement("b");a.setAttribute("id","ship-name"),a.textContent=n[r],o.appendChild(a),document.body.appendChild(o);const s=document.createElement("button");s.textContent="Start Game",s.setAttribute("disabled",""),s.setAttribute("id","start-game-btn"),document.body.appendChild(s);const c=document.createElement("select");c.name="axis";const i=document.createElement("option");i.textContent="X",i.value="x";const l=document.createElement("option");l.textContent="Y",l.value="y",c.appendChild(i),c.appendChild(l);const d=document.createElement("label");d.textContent="Axis : ",d.style.marginLeft="10px",d.appendChild(c),document.body.appendChild(d)}(),function(){const o=document.querySelectorAll(".box");let a=function(){let e=new Array(10).fill(0).map((()=>new Array(10).fill(0)));for(let t=0;t<10;t++)for(let n=0;n<10;n++)e[t][n]=document.querySelector(`div[row="${t}"][column="${n}"]`);return e}(),s=5;function c(){this.classList.add("black");const e=document.querySelector("select").value;let t=+this.getAttribute("row"),n=+this.getAttribute("column");if("x"==e){let e=n+s;for(let r=n;r<e;r++)a[t][e-1]?"selected-box"==a[t][r].classList[1]?a[t][n].classList.add("red"):a[t][r].classList.add("black"):a[t][n].classList.add("red")}else{let e=t+s;for(let r=t;r<e;r++)a[e-1]?"selected-box"==a[r][n].classList[1]?a[t][n].classList.add("red"):a[r][n].classList.add("black"):a[t][n].classList.add("red")}}function i(){document.querySelectorAll(".box").forEach((e=>{e.classList.remove("black"),e.classList.remove("red")}))}function l(){const a=document.querySelectorAll('div[class="box black"]');if(a.forEach((e=>{a.length==s&&(e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",i),e.classList.add("selected-box"),e.classList.remove("box"))})),a.length==s){const d=document.querySelector("#ship-name");r++,d.textContent=n[r];const u=document.querySelector("select").value;if(e.place(new f(s),u,+a[0].getAttribute("row"),+a[0].getAttribute("column")),s--,0==s){const e=document.querySelector("p");document.body.removeChild(e);const n=document.querySelector("label");document.body.removeChild(n),o.forEach((e=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",i),e.removeEventListener("click",l),e.style.cursor="auto"}));const r=document.querySelector("#start-game-btn");r.removeAttribute("disabled"),r.addEventListener("click",(()=>{document.body.innerHTML="",t.render()}))}}}o.forEach((e=>{e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",i),e.addEventListener("click",l)}))}()}}},v=n.p+"fdceb6d4d9f21218d88b93e7f76efe8b.mp3",g=n.p+"9b3f82b92015350e25ab27303ddb1146.mp3",y=function(){let e=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]],t={};return{place:function(n,r,o,a){const s=n.size(),c=function(e){let t="";switch(e){case 5:t="s5";break;case 4:t="s4";break;case 3:t="s3";break;case 2:t="s2";break;case 1:t="s1"}return t}(s);if("x"===r){const r=a+s-1;if(!(r<e.length))return-1;{t[c]=n;let s=0;for(let t=a;t<=r;t++){if("s"==e[o][t].charAt(0))return-1;e[o][t]=c+"_"+s,s++}}}else{const r=o+s-1;if(!(r<e.length))return-1;{t[c]=n;let s=0;for(let t=o;t<=r;t++){if("s"==e[t][a].charAt(0))return-1;e[t][a]=c+"_"+s,s++}}}return 0},receiveAttack:function(n,r){const o=e[n][r],[a,s]=o.split("_");return e[n][r].startsWith("s")?(e[n][r]="*",t[a].hit(s),"hit"):(e[n][r]="!","miss")},getBoard:function(){return e},allSunk:function(){let e=[];for(let n in t)e.push(t[n].sunk);return e.every((e=>e))}}},x=function(){let e=[];function t(){return Math.round(9*Math.random())}function n(t,n){let r=!0;for(let o=0;o<e.length;o++)if([t,n]==e[o]){r=!1;break}return r}return{attack:function(r){let{row:o,col:a}=function(){let e=t(),r=t(),o=n(e,r);for(;!o;)e=t(),r=t(),o=n(e,r);return{row:e,col:r}}();return e.push([o,a]),r.receiveAttack(o,a)}}};!function(){const e=new class{constructor(){this.player=new class{constructor(e){this.name=e}attack(e,t,n){e.receiveAttack(t,n)}getName(){return this.name}}("Test"),this.playerGameBoard=y(),this.computer=new x,this.computerGameBoard=new class{constructor(){this.gameBoard=y(),this.init()}init(){let e=5;for(;e>0;){let t=Math.round(Math.random())?"x":"y",n=Math.round(9*Math.random()),r=Math.round(9*Math.random()),o=this.gameBoard.place(new f(e),t,n,r);for(;0!=o;){let n=Math.round(9*Math.random()),r=Math.round(9*Math.random());o=this.gameBoard.place(new f(e),t,n,r)}e--}}getBoard(){return this.gameBoard}},this.winner=""}win(){let e=this.playerGameBoard.allSunk(),t=this.computerGameBoard.getBoard().allSunk();return e?(this.winner="Computer",1):t?(this.winner=this.player.getName(),1):0}getWinner(){return this.winner}getPlayerBoard(){return this.playerGameBoard}getComputerBoard(){return this.computerGameBoard}};new class{constructor(e){this.game=e}render(){let e=function(e){function t(){let t=e.getPlayerBoard().getBoard();const n=document.querySelector("#playerboard");for(let e=0;e<t.length;e++)for(let r=0;r<t.length;r++){const o=document.createElement("div");o.classList.add("box"),o.setAttribute("row",e),o.setAttribute("column",r),"s"==t[e][r].charAt(0)?o.classList.add("black"):"*"==t[e][r]?o.classList.add("hit"):"!"==t[e][r]&&o.classList.add("miss"),n.appendChild(o)}}function n(){let t=e.getComputerBoard().getBoard().getBoard();const n=document.querySelector("#computerboard");for(let e=0;e<t.length;e++)for(let r=0;r<t.length;r++){const o=document.createElement("div");o.classList.add("box"),o.setAttribute("row",e),o.setAttribute("column",r),"s"==t[e][r].charAt(0)?o.classList.add("black"):"*"==t[e][r]?o.classList.add("hit"):"!"==t[e][r]&&o.classList.add("miss"),n.appendChild(o)}}function r(e){const t=document.createElement("audio");t.style.display="none",t.src="hit"==e?v:g,t.play()}function o(){r(e.computer.attack(e.getPlayerBoard())),document.querySelector("#playerboard").innerHTML="",t()}function a(t){let c=+t.target.getAttribute("row"),i=+t.target.getAttribute("column");r(e.getComputerBoard().getBoard().receiveAttack(c,i)),e.win()?function(){document.body.innerHTML="";const t=document.createElement("h1");t.innerText=`Game Over! ${e.getWinner()} won`,document.body.appendChild(t)}():(setTimeout(o,100),t.target.removeEventListener("click",a),document.querySelector("#computerboard").innerHTML="",n(),s())}function s(){document.querySelectorAll("#computerboard>.box").forEach((e=>{"hit"!=e.classList[1]&&"miss"!=e.classList[1]&&e.addEventListener("click",a)}))}return{render:function(){const e=document.createElement("div");console.log(e),e.classList.add("gameboard"),e.setAttribute("id","playerboard");const r=document.createElement("div");r.classList.add("gameboard"),r.setAttribute("id","computerboard");const o=document.createElement("div");o.classList.add("gameboards"),o.appendChild(e),o.appendChild(r),document.body.appendChild(o),t(),n(),s()}}}(this.game);b(this.game.getPlayerBoard(),e).render()}}(e).render()}()})()})();