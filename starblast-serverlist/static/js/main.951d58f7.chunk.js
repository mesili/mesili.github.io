(this["webpackJsonpstarblast-serverlist"]=this["webpackJsonpstarblast-serverlist"]||[]).push([[0],{16:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),l=n(1),i=n(3),s=n(15),u=function(e){var t=e.id,n=e.name,c=e.time,o=e.mode,l=e.mod_id,i=(e.address,e.players),u=e.criminal_activity,m=Object(r.useState)(c),f=Object(s.a)(m,2),d=f[0],v=f[1];Object(r.useEffect)((function(){var e=setInterval((function(){return v(d+1)}),1e3);return function(){return clearInterval(e)}}),[d]);var E=Math.floor(d/60),b=d-60*E,h=[255,255-20*u,255-20*u],p={color:"rgb(".concat(h[0],", ").concat(h[1]<0?0:h[1],", ").concat(h[2]<0?0:h[2],")")};return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("a",{href:"https://starblast.io/#".concat(t),target:"_blank",rel:"noopener noreferrer"},t)),a.a.createElement("td",null,a.a.createElement("a",{href:"https://starblast.io/#".concat(t),target:"_blank",rel:"noopener noreferrer"},n)),a.a.createElement("td",null,l?"mod: ".concat(l):o),a.a.createElement("td",null,i),a.a.createElement("td",null,E.toString().padStart(2,"0"),":",b.toString().padStart(2,"0")),a.a.createElement("td",{style:p},u))},m=(n(26),function(e){var t=e.name,n=e.systems,r=void 0===n?{}:n,c=Object(l.c)((function(e){return e.servers})).modes;return a.a.createElement("section",{className:"location"},a.a.createElement("h3",null,t),a.a.createElement("table",{className:"box"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("td",null,"id"),a.a.createElement("td",null,"Name"),a.a.createElement("td",null,"Mode"),a.a.createElement("td",null,"Players"),a.a.createElement("td",null,"Elasped time"),a.a.createElement("td",null,"Criminality"))),a.a.createElement("tbody",null,Object.keys(r).filter((function(e){var t=r[e].mod_id||r[e].mode;return void 0===c[t]||!0===c[t]})).sort((function(e,t){return parseInt(r[t].players)-parseInt(r[e].players)})).map((function(e,t){return a.a.createElement(u,Object.assign({key:t},r[e]))})))))}),f=n(4),d=function(e,t){return function(n){return n({type:e,payload:t})}},v="servers/set",E="servers/filterRegions",b="servers/filterModes",h={set:function(e){return d(v,e)},region:function(e){return d(E,e)},mode:function(e){return d(b,e)}},p={locations:[],regions:{america:!0,europe:!0,brazil:!0,asia:!0},modes:{team:!0,survival:!0,deathmatch:!0,invasion:!0}},j=function(e){var t=e.name,n=e.value,r=e.action,c=Object(l.b)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{id:t,type:"checkbox",name:"filters[]",onChange:function(){return function(e,t){return c(h[r]({name:e,value:t}))}(t,!n)},checked:n}),a.a.createElement("label",{htmlFor:t},t))},y=function(e){var t=e.action,n=e.items;Object(l.c)((function(e){return e.servers})).regions;return a.a.createElement("div",{className:"box"},a.a.createElement("div",{id:"locations-filters"},a.a.createElement("h3",null,"Locations Filters"),Object.keys(n).sort().map((function(e,r){return a.a.createElement(j,{key:r,name:e,value:n[e],action:t})}))))},O=function(e){var t=e.action,n=e.items;return a.a.createElement("div",{className:"box"},a.a.createElement("div",{id:"modes-filters"},a.a.createElement("h3",null,"Modes Filters"),Object.keys(n).sort().map((function(e,r){return a.a.createElement(j,{key:r,name:e,value:n[e],action:t})}))))},g=function(){var e=Object(l.c)((function(e){return e.servers})),t=e.regions,n=e.modes;return a.a.createElement("div",{id:"home-filters"},a.a.createElement(y,{action:"region",items:t}),a.a.createElement(O,{action:"mode",items:n}))},k=n(9),w=n.n(k),x=n(13),I=function(){var e=Object(x.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://starblast.io/simstatus.json",e.next=3,fetch("https://starblast.io/simstatus.json").then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t={};return e.forEach((function(e){var n=e.location.toLowerCase();t[n]||(t[n]=[]),t[n]=t[n].concat(e.systems)})),t},_=(n(28),function(){var e=Object(l.b)();Object(r.useEffect)((function(){var t=function(){return I().then(S).then((function(t){return e(h.set(t))}))};t();var n=setInterval((function(){return t()}),2e4);return function(){return clearInterval(n)}}),[e]);var t=Object(l.c)((function(e){return e.servers})),n=t.locations,c=t.regions;return a.a.createElement("section",{id:"Home"},a.a.createElement(g,null),a.a.createElement("h2",null,"Locations"),Object.keys(n).sort().filter((function(e){return void 0===c[e]||!0===c[e]})).map((function(e,t){return a.a.createElement(m,{key:t,name:e,systems:Object(i.a)({},n[e])})})))}),M=n(2),N=n(14),F=Object(M.c)({servers:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0,r=n.type,a=n.payload,c=(e={},Object(f.a)(e,v,(function(){var e=t.modes;return Object.keys(a).forEach((function(t){(a[t]||[]).forEach((function(t){var n=t.mod_id||t.mode;void 0===e[n]&&(e[n]=!0)}))})),Object(i.a)({},t,{locations:a,modes:e})})),Object(f.a)(e,E,(function(){var e=t.regions;return e[a.name]=a.value,Object(i.a)({},t,{regions:e})})),Object(f.a)(e,b,(function(){var e=t.modes;return e[a.name]=a.value,Object(i.a)({},t,{modes:e})})),e);return c[r]?c[r]():t}}),C=M.d,L=[N.a],B=(n(30),n(31),function(){return a.a.createElement(l.a,{store:(e={},Object(M.e)(F,e,C(M.a.apply(void 0,L))))},a.a.createElement(_,null));var e});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.951d58f7.chunk.js.map