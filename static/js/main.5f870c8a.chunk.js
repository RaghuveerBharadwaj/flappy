(this.webpackJsonpflappy=this.webpackJsonpflappy||[]).push([[0],[,,,,function(e,t,o){e.exports=o(12)},,,,,function(e,t,o){},function(e,t,o){},,function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),a=o(3),d=o.n(a),s=(o(9),o(10),o(1));var r=function(){return i.a.useEffect(()=>{let e,t,o,n,i,a,d=s.World,r=s.Engine,l=s.Render,c=s.Bodies,u=s.Body,m=s.Events;function y(){window.location.reload()}function p(e){32===e.keyCode&&W()}function h(e){W()}function w(e){e.preventDefault(),W()}let f,g=function(){this.x=200,this.y=200,this.w=30,this.static=!0,this.body=c.circle(this.x,this.y,this.w,this.static),this.body.restitution=.1};function E(){let t=i+10,o=T(20,a-80),n=T(80,160),s=a-20-o-n,r=o-n,l=s/2,u=a-r/2-20,m={top:c.rectangle(t,l,20,s,{isStatic:!0}),bottom:c.rectangle(t,u,20,r,{isStatic:!0})};L.push(m),d.add(e.world,[m.top,m.bottom])}function v(t){d.remove(e.world,[t.top,t.bottom]),L.shift()}function b(){!H&&R&&L.forEach((e,t)=>{e.top.position.x<-30&&(v(e),document.getElementById("myScore").play(),A+=1,B.innerText=A,E());let o={x:-6,y:0};u.translate(e.top,o),u.translate(e.bottom,o)})}g.prototype.addBird=function(){d.add(e.world,this.body)},g.prototype.removeBird=function(){d.remove(e.world,this.body)},g.prototype.setHit=function(){this.body.render.fillStyle="tomato",this.body.render.strokeStyle="red"},g.prototype.sad=function(){this.body.render.sprite.xScale=1,this.body.render.sprite.yScale=1};let B,k,x,S,I,L=[],A=0,R=!1,H=!1;function M(){f=new g,f.addBird()}function W(){if(document.getElementById("myAudio").play(),H||!R)return;let e=f.body,t=f.body.position;u.applyForce(e,t,{x:0,y:-.03})}function z(){R=!0,e.world.gravity.y=.7,x.style.display="none"}function C(){document.getElementById("sad").play(),H=!0,f.setHit(),f.sad(),I.style.display="block"}function P(){x.style.display="block",I.style.display="none",A=0,B.innerText=A,R=!1,H=!1,e.world.gravity.y=0,f.removeBird(),L.forEach(e=>{v(e)}),L=[],M(),E()}function T(e,t){return Math.floor(Math.random()*(t-e+1))+e}window.onload=(o=document.getElementById("main"),n=window.devicePixelRatio||1,i=window.innerWidth,a=window.innerHeight,e=r.create(),e.world.gravity.y=0,t=l.create({element:o,engine:e,options:{width:i,height:a,pixelRatio:n,background:"orange",hasBounds:!1,enabled:!1,wireframes:!1,showSleeping:!1,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}}),window.addEventListener("click",w,!1),window.addEventListener("touchstart",h,!1),window.addEventListener("keydown",p,!1),window.addEventListener("resize",y,!1),M(),E(),function(){let t=i/2,o=a-10,n=i,s=c.rectangle(t,o-a,n,20,{isStatic:!0}),r=c.rectangle(t,o,n,20,{isStatic:!0});d.add(e.world,[s,r])}(),B=document.getElementById("score"),B.innerText=A,k=document.getElementById("gui"),x=document.getElementById("start"),S=document.getElementById("reset"),I=document.getElementById("fail"),I.style.display="none",x.addEventListener("click",z,!1),S.addEventListener("click",P,!1),r.run(e),l.run(t),m.on(e,"tick",b),void m.on(e,"collisionStart",C))}),i.a.createElement("div",{id:"main"},i.a.createElement("div",{id:"gui"},i.a.createElement("audio",{id:"myAudio"},i.a.createElement("source",{src:"http://s1download-universal-soundbank.com/mp3/sounds/22372.mp3",type:"audio/mpeg"})),i.a.createElement("audio",{id:"sad"},i.a.createElement("source",{src:"http://shing.mobile9.com/download/media/702/angrybirds_oaw366ij.mp3",type:"audio/mpeg"})),i.a.createElement("audio",{id:"myScore"},i.a.createElement("source",{src:"http://plantsvszombies.clan.su/publfiles/downloads/soundspvz/points.mp3",type:"audio/mpeg"})),i.a.createElement("span",{id:"score"}),i.a.createElement("button",{id:"start"},"Start"),i.a.createElement("div",{id:"fail",style:{display:"none"}},i.a.createElement("h2",null,"GAME OVER"),i.a.createElement("button",{id:"reset"},"Restart"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(i.a.createElement(r,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}],[[4,1,2]]]);
//# sourceMappingURL=main.5f870c8a.chunk.js.map