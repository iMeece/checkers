(()=>{"use strict";const e=(()=>{const e=document.getElementById("board");let t=[];const i=()=>{for(let i=0;i<8;i++)for(let n=0;n<8;n++){const s=document.createElement("div");s.classList.add("tile"),(i+n)%2==1&&s.classList.add("tile-black"),s.id="tile-id-"+(8*i+n),e.appendChild(s),t.push(s)}},n=e=>{t[e].replaceChildren()};return i(),{resetBoard:()=>{e.replaceChildren(),t=[],i()},addPiece:(e,i)=>{n(e.getPosition()),t[i].appendChild(e.getPiece())},removePiece:n,getTiles:()=>t}})(),t=(e,t)=>{const i=e,n="white"===e?1:-1;let s=!1;const l=document.createElement("div");l.classList.add("piece-"+e),l.setAttribute("draggable","true");let a=t;const o=(e,t,s)=>{let l,o=t[s];return 0===s?[1,9,17,25,33,41,49,57].includes(a)||(o+=7*n,"black"===i&&(o-=2)):1===s?[6,14,22,30,38,46,54,62].includes(a)||(o+=9*n,"black"===i&&(o+=2)):2===s?[1,9,17,25,33,41,49,57].includes(a)||(o+=7*-n,"white"===i&&(o-=2)):3===s&&([6,14,22,30,38,46,54,62].includes(a)||(o+=9*-n,"white"===i&&(o+=2))),l=document.getElementById("tile-id-"+o),void 0!==l.children[0]?e.push(t[s]):e.push(o),e};return{getPiece:()=>l,getPosition:()=>a,setPosition:e=>{a=parseInt(e)},getAvailablePos:e=>{let t=[],l=null,r=null,c=null,d=null;return a%8!=0&&(l=a+7*n,"black"===i&&(l-=2)),[7,15,23,31,39,47,55,63].includes(a)||(r=a+9*n,"black"===i&&(r+=2)),s&&(a%8!=0&&(c=a+7*-n,"white"===i&&(c-=2)),[7,15,23,31,39,47,55,63].includes(a)||(d=a+9*-n,"white"===i&&(d+=2))),t.push(l),t.push(r),t.push(c),t.push(d),t=((e,t)=>{let n=[];for(let s=0;s<e.length;s++)if(null!==e[s]){const l=t[e[s]].id,a=document.getElementById(l),r="white"===i?"black":"white";void 0!==a.children[0]&&a.children[0].classList.contains("piece-"+r)?n=o(n,e,s):n.push(e[s])}return n})(t,e),t},getColor:()=>i,getShift:()=>n,upgrade:()=>{s=!0},isKing:()=>s}};function i(e){e.upgrade()}function n(e,t){if("black"===t){if([0,1,2,3,4,5,6,7].includes(e.getPosition()))return!0}else if("white"===t&&[56,57,58,59,60,61,62,63].includes(e.getPosition()))return!0;return!1}function s(e,t,i,n){let s=e.getShift();if("up"===n){"white"===e.getColor()&&(s=-s);const n=t+14*s;return i===t+14*s-4||i===n}if("down"===n){"black"===e.getColor()&&(s=-s);const n=t+(14*s+4);return i===t+14*s||i===n}}function l(t,i){const n=t.getPosition();if(i>n&&s(t,i,n,"up")){const t=i-(i-n)/2;e.removePiece(t)}if(i<n&&s(t,i,n,"down")){const t=i-(i-n)/2;e.removePiece(t)}}function a(t){const s=t.dataTransfer.getData("text/plain"),a=t.target.id,o=s<0?"black":"white";if(function(t,i,n){let s=[];i<0?s=d[Math.abs(i)-1].getAvailablePos(e.getTiles()):i>0&&(s=c[Math.abs(i)-1].getAvailablePos(e.getTiles()));let l=!1;return s.forEach((e=>{n==="tile-id-"+e&&(l=!0)})),l}(0,s,a)){let r;if(void 0===t.target.children[0]){const t=a.split("-");if("black"===o){const a=d[Math.abs(s)-1];e.addPiece(a,t[2]),r=a.getPosition(),a.setPosition(t[2]),l(a,r),n(a,o)&&i(a)}else if("white"===o){const a=c[Math.abs(s)-1];e.addPiece(a,t[2]),r=a.getPosition(),a.setPosition(t[2]),l(a,r),n(a,o)&&i(a)}}}}function o(e,t){let i=1,n=2;"Two"===t&&(i=62,n=-n);for(let t=0;t<3;t++){for(let s=0;s<4;s++)e[4*t+s].setPosition(i),i+=n;0===t&&(i-=n/2),1===t&&(i+=n/2)}}function r(e,i){for(let n=0;n<12;n++){const s=t(i,n);e.push(s)}}let c=[],d=[];r(c,"white"),o(c,"One"),r(d,"black"),o(d,"Two"),c.forEach((t=>{e.addPiece(t,t.getPosition())})),d.forEach((t=>{e.addPiece(t,t.getPosition())})),c.forEach(((e,t)=>{e.getPiece().addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",t+1)}))})),d.forEach(((e,t)=>{e.getPiece().addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",-t-1)}))})),e.getTiles().forEach((e=>{e.addEventListener("dragenter",(()=>{})),e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("dragleave",(e=>{e.preventDefault()})),e.addEventListener("drop",a)}))})();