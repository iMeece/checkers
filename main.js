(()=>{"use strict";const e=(()=>{const e=document.getElementById("board");let t=[];const a=()=>{for(let a=0;a<8;a++)for(let i=0;i<8;i++){const r=document.createElement("div");r.classList.add("tile"),(a+i)%2==1&&r.classList.add("tile-black"),r.id="tile-id-"+(8*a+i),e.appendChild(r),t.push(r)}};return a(),{resetBoard:()=>{e.replaceChildren(),t=[],a()},addPiece:(e,a)=>{(e=>{t[e].replaceChildren()})(e.getPosition()),t[a].appendChild(e.getPiece())},getTiles:()=>t}})(),t=(e,t)=>{const a=e,i="white"===e?1:-1,r=document.createElement("div");r.classList.add("piece-"+e),r.setAttribute("draggable","true");let n=t;return{getPiece:()=>r,getPosition:()=>n,setPosition:e=>{n=e},getAvailablePos:()=>{let e,t,a=[];return n%8!=0&&(e=n+7*i,a.push(e)),[7,15,23,31,39,47,55,63].includes(n)||(t=n+9*i,a.push(t)),a},getColor:()=>a}};function a(e){(function(e,t,a){let i;t<0?i=d[Math.abs(t)-1].getAvailablePos():t>0&&(i=n[Math.abs(t)-1].getAvailablePos());let r=!1;return i.forEach((e=>{a==="tile-id-"+e&&(r=!0)})),r})(0,e.dataTransfer.getData("text/plain"),e.target.id)&&void 0===e.target.children[0]&&console.log("true")}function i(e,t){let a=1,i=2;"Two"===t&&(a=62,i=-i);for(let t=0;t<3;t++){for(let r=0;r<4;r++)e[4*t+r].setPosition(a),a+=i;0===t&&(a-=i/2),1===t&&(a+=i/2)}}function r(e,a){for(let i=0;i<12;i++){const r=t(a,i);e.push(r)}}let n=[],d=[];r(n,"white"),i(n,"One"),r(d,"black"),i(d,"Two"),n.forEach((t=>{e.addPiece(t,t.getPosition())})),d.forEach((t=>{e.addPiece(t,t.getPosition())})),n.forEach(((e,t)=>{e.getPiece().addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",t+1)}))})),d.forEach(((e,t)=>{e.getPiece().addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",-t-1)}))})),e.getTiles().forEach((e=>{e.addEventListener("dragenter",(()=>{})),e.addEventListener("dragover",(e=>{e.preventDefault()})),e.addEventListener("dragleave",(e=>{e.preventDefault()})),e.addEventListener("drop",a)}))})();