(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1OJ9":function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return u});const u=()=>{const l=window.TapticEngine;l&&l.selection()},e=()=>{const l=window.TapticEngine;l&&l.gestureSelectionStart()},i=()=>{const l=window.TapticEngine;l&&l.gestureSelectionChanged()},o=()=>{const l=window.TapticEngine;l&&l.gestureSelectionEnd()}},"3QqI":function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return e});class u{constructor(l,n){this.x=l,this.y=n}}const e=(l,n,t,u,e)=>{const a=o(l.y,n.y,t.y,u.y,e);return i(l.x,n.x,t.x,u.x,a[0])},i=(l,n,t,u,e)=>e*(3*n*Math.pow(e-1,2)+e*(-3*t*e+3*t+u*e))-l*Math.pow(e-1,3),o=(l,n,t,u,e)=>a((u-=e)-3*(t-=e)+3*(n-=e)-(l-=e),3*t-6*n+3*l,3*n-3*l,l).filter(l=>l>=0&&l<=1),a=(l,n,t,u)=>{if(0===l)return((l,n,t)=>{const e=n*n-4*l*u;return e<0?[]:[(-n+Math.sqrt(e))/(2*l),(-n-Math.sqrt(e))/(2*l)]})(n,t);const e=(3*(t/=l)-(n/=l)*n)/3,i=(2*n*n*n-9*n*t+27*(u/=l))/27;if(0===e)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-e),-Math.sqrt(-e)];const o=Math.pow(i/2,2)+Math.pow(e/3,3);if(0===o)return[Math.pow(i/2,.5)-n/3];if(o>0)return[Math.pow(-i/2+Math.sqrt(o),1/3)-Math.pow(i/2+Math.sqrt(o),1/3)-n/3];const a=Math.sqrt(Math.pow(-e/3,3)),r=Math.acos(-i/(2*Math.sqrt(Math.pow(-e/3,3)))),s=2*Math.pow(a,1/3);return[s*Math.cos(r/3)-n/3,s*Math.cos((r+2*Math.PI)/3)-n/3,s*Math.cos((r+4*Math.PI)/3)-n/3]}},"9Xoc":function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return r}),t.d(n,"c",function(){return a}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return h}),t.d(n,"f",function(){return i}),t.d(n,"g",function(){return e}),t.d(n,"h",function(){return b}),t.d(n,"i",function(){return s}),t.d(n,"j",function(){return c}),t.d(n,"k",function(){return o});const u=l=>{"requestIdleCallback"in window?window.requestIdleCallback(l):setTimeout(l,32)},e=l=>!!l.shadowRoot&&!!l.attachShadow,i=l=>{const n=l.closest("ion-item");return n?n.querySelector("ion-label"):null},o=(l,n,t,u,i)=>{if(l||e(n)){let l=n.querySelector("input.aux-input");l||((l=n.ownerDocument.createElement("input")).type="hidden",l.classList.add("aux-input"),n.appendChild(l)),l.disabled=i,l.name=t,l.value=u||""}},a=(l,n,t)=>Math.max(l,Math.min(n,t)),r=(l,n)=>{if(!l){const l="ASSERT: "+n;throw console.error(l),new Error(l)}},s=l=>l.timeStamp||Date.now(),c=l=>{if(l){const n=l.changedTouches;if(n&&n.length>0){const l=n[0];return{x:l.clientX,y:l.clientY}}if(void 0!==l.pageX)return{x:l.pageX,y:l.pageY}}return{x:0,y:0}},b=l=>{const n="rtl"===document.dir;switch(l){case"start":return n;case"end":return!n;default:throw new Error(`"${l}" is not a valid value for [side]. Use "start" or "end" instead.`)}},d=(l,n)=>{const t=l._original||l;return{_original:l,emit:h(t.emit.bind(t),n)}},h=(l,n=0)=>{let t;return(...u)=>{clearTimeout(t),t=setTimeout(l,n,...u)}}},GZS0:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("mrSG"),i=t("dKRk"),o=t("ZZ/e");class a{constructor(l,n,t){this.apiJai=l,this.modalController=n,this.alertController=t}ngOnInit(){}dismiss(){this.modalController.dismiss()}doCheck(l){const n=new Date;this.apiJai.setCheck(this.id,this.nome,n.toLocaleDateString(),n.toLocaleTimeString(),l).then(n=>{this.presentAlert(l)})}presentAlert(l){return e.b(this,void 0,void 0,function*(){const n=yield this.alertController.create({header:"Check-"+l,message:"Check-"+l+" efetuado",buttons:["OK"]});yield n.present()})}}class r{constructor(l,n){this.apiJai=l,this.modalController=n,this.trabalhos=[],this.avaliadores=[],this.avaliadoresFiltered=[],this.avaliacoes=[],this.checks=[]}ngOnInit(){this.updateLists()}updateLists(){this.apiJai.getTrabalhos().then(l=>{this.apiJai.getAvaliacoes().then(n=>{this.apiJai.getCheck().then(t=>{this.trabalhos=l,this.avaliacoes=n,this.checks=t,l.map(l=>{-1===this.avaliadores.findIndex(n=>n.id===l[1])&&this.avaliadores.push({id:l[1],nome:l[0]})}),this.avaliadoresFiltered=this.avaliadores})})})}getItems(l){const n=l.target.value.toLowerCase();this.avaliadoresFiltered=this.avaliadores.filter(l=>l.nome.toLowerCase().includes(n))}presentAvaliador(l){return e.b(this,void 0,void 0,function*(){const n=this.trabalhos.filter(n=>n[1]===l.id);for(const u of n)this.avaliacoes.findIndex(l=>l[0]===u[2])>-1?u.push("3"):this.checks.findIndex(n=>n[0]===l.id&&n[2]===u[7])>-1?u.push("2"):u.push("1");const t=yield this.modalController.create({component:a,componentProps:{id:l.id,nome:l.nome,trabalhos:n}});return yield t.present()})}}class s{}var c=t("pMnS"),b=t("oBZk"),d=t("s7LF"),h=t("SVse"),p=u.ob({encapsulation:0,styles:[[""]],data:{}});function f(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.presentAvaliador(l.context.$implicit)&&u),u},b.F,b.k)),u.pb(1,49152,null,0,o.F,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,2,"ion-label",[],null,null,null,b.G,b.l)),u.pb(3,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(l()(),u.Gb(4,0,[" "," "]))],null,function(l,n){l(n,4,0,n.context.$implicit.nome)})}function m(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,6,"ion-header",[],null,null,null,b.D,b.i)),u.pb(1,49152,null,0,o.z,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,b.P,b.u)),u.pb(3,49152,null,0,o.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.qb(4,0,null,0,2,"ion-title",[],null,null,null,b.O,b.t)),u.pb(5,49152,null,0,o.xb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Avaliadores"])),(l()(),u.qb(7,0,null,null,9,"ion-content",[["class","ion-padding"]],null,null,null,b.C,b.h)),u.pb(8,49152,null,0,o.s,[u.h,u.k,u.x],null,null),(l()(),u.qb(9,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Cb(l,12)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Cb(l,12)._handleInputEvent(t.target)&&e),"ionInput"===n&&(e=!1!==i.getItems(t)&&e),e},b.I,b.n)),u.Db(5120,null,d.b,function(l){return[l]},[o.Ib]),u.pb(11,49152,null,0,o.hb,[u.h,u.k,u.x],null,null),u.pb(12,16384,null,0,o.Ib,[u.k],null,null),(l()(),u.qb(13,0,null,0,3,"ion-list",[],null,null,null,b.H,b.m)),u.pb(14,49152,null,0,o.M,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,f)),u.pb(16,278528,null,0,h.h,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,16,0,t.avaliadoresFiltered)},null)}function g(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"app-avaliador",[],null,null,null,m,p)),u.pb(1,114688,null,0,r,[i.a,o.Db],null,null)],function(l,n){l(n,1,0)},null)}var v=u.mb("app-avaliador",r,g,{},{},[]),k=u.ob({encapsulation:0,styles:[[""]],data:{}});function x(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"p",[["style","color: #32CD32;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Avaliado"]))],null,null)}function C(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"p",[["style","color: #FF0000;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["N\xe3o Avaliado"]))],null,null)}function q(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"p",[["style","color: #FFA500;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Em Andamento"]))],null,null)}function y(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,17,"ion-item",[],null,null,null,b.F,b.k)),u.pb(1,49152,null,0,o.F,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,15,"ion-label",[],null,null,null,b.G,b.l)),u.pb(3,49152,null,0,o.L,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Gb(5,null,["",""])),(l()(),u.qb(6,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),u.Gb(7,null,["",""])),(l()(),u.qb(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(9,null,["Data: "," - ",""])),(l()(),u.qb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(11,null,["Local: "," ",""])),(l()(),u.fb(16777216,null,0,1,null,x)),u.pb(13,16384,null,0,h.i,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,C)),u.pb(15,16384,null,0,h.i,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,q)),u.pb(17,16384,null,0,h.i,[u.L,u.I],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,13,0,"3"===n.context.$implicit[14]),l(n,15,0,"1"===n.context.$implicit[14]),l(n,17,0,"2"===n.context.$implicit[14])},function(l,n){l(n,5,0,n.context.$implicit[3]),l(n,7,0,n.context.$implicit[4]),l(n,9,0,n.context.$implicit[7],n.context.$implicit[8]),l(n,11,0,n.context.$implicit[9],n.context.$implicit[10])})}function w(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,12,"ion-header",[],null,null,null,b.D,b.i)),u.pb(1,49152,null,0,o.z,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,b.P,b.u)),u.pb(3,49152,null,0,o.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.qb(4,0,null,0,2,"ion-title",[],null,null,null,b.O,b.t)),u.pb(5,49152,null,0,o.xb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(6,0,["",""])),(l()(),u.qb(7,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,b.x,b.c)),u.pb(8,49152,null,0,o.j,[u.h,u.k,u.x],null,null),(l()(),u.qb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.dismiss()&&u),u},b.w,b.b)),u.pb(10,49152,null,0,o.i,[u.h,u.k,u.x],null,null),(l()(),u.qb(11,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,b.E,b.j)),u.pb(12,49152,null,0,o.A,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(13,0,null,null,14,"ion-content",[["class","ion-padding"]],null,null,null,b.C,b.h)),u.pb(14,49152,null,0,o.s,[u.h,u.k,u.x],null,null),(l()(),u.qb(15,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),u.qb(16,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.doCheck("in")&&u),u},b.w,b.b)),u.pb(17,49152,null,0,o.i,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Check-in"])),(l()(),u.qb(19,0,null,null,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.doCheck("out")&&u),u},b.w,b.b)),u.pb(20,49152,null,0,o.i,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Check-out"])),(l()(),u.qb(22,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Trabalhos:"])),(l()(),u.qb(24,0,null,0,3,"ion-list",[],null,null,null,b.H,b.m)),u.pb(25,49152,null,0,o.M,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,y)),u.pb(27,278528,null,0,h.h,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,12,0,"close"),l(n,27,0,t.trabalhos)},function(l,n){l(n,6,0,n.component.nome)})}function A(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"app-avaliador-modal",[],null,null,null,w,k)),u.pb(1,114688,null,0,a,[i.a,o.Db,o.a],null,null)],function(l,n){l(n,1,0)},null)}var M=u.mb("app-avaliador-modal",a,A,{id:"id",nome:"nome",trabalhos:"trabalhos"},{},[]),F=t("iInd");t.d(n,"AvaliadorPageModuleNgFactory",function(){return I});var I=u.nb(s,[],function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[c.a,v,M]],[3,u.j],u.v]),u.Ab(4608,h.k,h.j,[u.s,[2,h.q]]),u.Ab(4608,d.g,d.g,[]),u.Ab(4608,o.b,o.b,[u.x,u.g]),u.Ab(4608,o.Db,o.Db,[o.b,u.j,u.p]),u.Ab(4608,o.Gb,o.Gb,[o.b,u.j,u.p]),u.Ab(1073742336,h.b,h.b,[]),u.Ab(1073742336,d.f,d.f,[]),u.Ab(1073742336,d.a,d.a,[]),u.Ab(1073742336,o.Bb,o.Bb,[]),u.Ab(1073742336,F.n,F.n,[[2,F.s],[2,F.m]]),u.Ab(1073742336,s,s,[]),u.Ab(1024,F.k,function(){return[[{path:"",component:r}]]},[])])})},YWFk:function(l,n,t){"use strict";t.d(n,"a",function(){return u});const u=l=>{try{if("string"!=typeof l||""===l)return l;const t=document.createDocumentFragment(),u=document.createElement("div");t.appendChild(u),u.innerHTML=l,a.forEach(l=>{const n=t.querySelectorAll(l);for(let u=n.length-1;u>=0;u--){const l=n[u];l.parentNode?l.parentNode.removeChild(l):t.removeChild(l);const o=i(l);for(let n=0;n<o.length;n++)e(o[n])}});const o=i(t);for(let l=0;l<o.length;l++)e(o[l]);const r=document.createElement("div");r.appendChild(t);const s=r.querySelector("div");return null!==s?s.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},e=l=>{if(l.nodeType&&1!==l.nodeType)return;for(let t=l.attributes.length-1;t>=0;t--){const n=l.attributes[t],u=n.name;if(!o.includes(u.toLowerCase())){l.removeAttribute(u);continue}const e=n.value;null!=e&&e.toLowerCase().includes("javascript:")&&l.removeAttribute(u)}const n=i(l);for(let t=0;t<n.length;t++)e(n[t])},i=l=>null!=l.children?l.children:l.childNodes,o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},ckTY:function(l,n,t){"use strict";t.d(n,"a",function(){return k}),t.d(n,"b",function(){return g}),t.d(n,"c",function(){return x}),t.d(n,"d",function(){return i});var u=t("S6Yj"),e=t("igpV");const i=l=>new Promise((n,t)=>{Object(u.n)(()=>{o(l),a(l).then(t=>{t.animation&&t.animation.destroy(),r(l),n(t)},n=>{r(l),t(n)})})}),o=l=>{const n=l.enteringEl,t=l.leavingEl;C(n,t,l.direction),l.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),x(n,!1),t&&x(t,!1)},a=async l=>{const n=await s(l);return n?c(n,l):b(l)},r=l=>{const n=l.leavingEl;l.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},s=async l=>{if(l.leavingEl&&l.animated&&0!==l.duration)return l.animationBuilder?l.animationBuilder:"ios"===l.mode?(await(()=>t.e(96).then(t.bind(null,"Nsvw")))()).iosTransitionAnimation:(await(()=>t.e(97).then(t.bind(null,"nPxl")))()).mdTransitionAnimation},c=async(l,n)=>{let u;await d(n,!0);try{const e=await t.e(6).then(t.bind(null,"vK52"));u=await e.create(l,n.baseEl,n)}catch(i){u=l(n.baseEl,n)}f(n.enteringEl,n.leavingEl);const e=await p(u,n);return u.hasCompleted=e,n.progressCallback&&n.progressCallback(void 0),u.hasCompleted&&m(n.enteringEl,n.leavingEl),{hasCompleted:u.hasCompleted,animation:u}},b=async l=>{const n=l.enteringEl,t=l.leavingEl;return await d(l,!1),f(n,t),m(n,t),{hasCompleted:!0}},d=async(l,n)=>{const t=(void 0!==l.deepWait?l.deepWait:n)?[k(l.enteringEl),k(l.leavingEl)]:[v(l.enteringEl),v(l.leavingEl)];await Promise.all(t),await h(l.viewIsReady,l.enteringEl)},h=async(l,n)=>{l&&await l(n)},p=(l,n)=>{const t=n.progressCallback,u=new Promise(n=>l.onFinish(n));return t?(l.progressStart(!0),t(l)):l.play(),u},f=(l,n)=>{g(n,e.c),g(l,e.a)},m=(l,n)=>{g(l,e.b),g(n,e.d)},g=(l,n)=>{if(l){const t=new CustomEvent(n,{bubbles:!1,cancelable:!1});l.dispatchEvent(t)}},v=l=>l&&l.componentOnReady?l.componentOnReady():Promise.resolve(),k=async l=>{const n=l;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(k))}},x=(l,n)=>{n?(l.setAttribute("aria-hidden","true"),l.classList.add("ion-page-hidden")):(l.hidden=!1,l.removeAttribute("aria-hidden"),l.classList.remove("ion-page-hidden"))},C=(l,n,t)=>{void 0!==l&&(l.style.zIndex="back"===t?"99":"101"),void 0!==n&&(n.style.zIndex="100")}},pyhm:function(l,n,t){"use strict";t.d(n,"a",function(){return e}),t.d(n,"b",function(){return i}),t.d(n,"c",function(){return u}),t.d(n,"d",function(){return a});const u=(l,n)=>null!==n.closest(l),e=l=>"string"==typeof l&&l.length>0?{"ion-color":!0,[`ion-color-${l}`]:!0}:void 0,i=l=>{const n={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(l).forEach(l=>n[l]=!0),n},o=/^[a-z][a-z0-9+\-.]*:/,a=async(l,n,t)=>{if(null!=l&&"#"!==l[0]&&!o.test(l)){const u=document.querySelector("ion-router");if(u)return null!=n&&n.preventDefault(),u.push(l,t)}return!1}},tkfp:function(l,n,t){"use strict";t.d(n,"a",function(){return u}),t.d(n,"b",function(){return e});const u=async(l,n,t,u,e)=>{if(l)return l.attachViewToDom(n,t,e,u);if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof t?n.ownerDocument&&n.ownerDocument.createElement(t):t;return u&&u.forEach(l=>i.classList.add(l)),e&&Object.assign(i,e),n.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},e=(l,n)=>{if(n){if(l)return l.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},wmzg:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("dKRk");class i{constructor(l){this.apiJai=l,this.avaliadores=[],this.dates=[],this.locations=[],this.trabalhos=[],this.trabalhosFiltered=[]}ngOnInit(){this.updateDays()}updateDays(){this.apiJai.getDays().then(l=>{console.log(l),l&&(this.dates=l,this.dateModel=this.dates[0],this.updateTrabalhos())},l=>{console.log(l)})}updateTrabalhos(){this.apiJai.getValuesByDay(this.dateModel).then(l=>{this.locations=l.map(l=>l[9]).filter((l,n,t)=>t.indexOf(l)===n).sort(),this.trabalhos=l,this.filterTrabalhos()})}filterTrabalhos(){this.trabalhosFiltered=[...this.trabalhos],this.locationModel&&(this.trabalhosFiltered=this.trabalhosFiltered.filter(l=>l[9]===this.locationModel)),this.updateAvaliadores()}clearFilter(){this.locationModel=null,this.trabalhosFiltered=[...this.trabalhos]}updateAvaliadores(){this.apiJai.getCheck().then(l=>{l=l.filter(l=>l[2]===this.dateModel);const n=this.trabalhosFiltered.filter(n=>-1===l.findIndex(l=>l[0]===n[1])).map(l=>l[0]).filter((l,n,t)=>t.indexOf(l)===n);this.avaliadores=this.shuffleArray(n)})}shuffleArray(l){for(let n=l.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[l[n],l[t]]=[l[t],l[n]]}return l}}class o{}var a=t("pMnS"),r=t("oBZk"),s=t("ZZ/e"),c=t("s7LF"),b=t("SVse"),d=u.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,r.J,r.p)),u.pb(1,49152,null,0,s.lb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Gb(2,0,["",""]))],function(l,n){l(n,1,0,u.ub(1,"",n.context.$implicit,""))},function(l,n){l(n,2,0,n.context.$implicit)})}function p(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,2,"ion-select-option",[],null,null,null,r.J,r.p)),u.pb(1,49152,null,0,s.lb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.Gb(2,0,["",""]))],function(l,n){l(n,1,0,u.ub(1,"",n.context.$implicit,""))},function(l,n){l(n,2,0,n.context.$implicit)})}function f(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,2,"ion-item",[],null,null,null,r.F,r.k)),u.pb(1,49152,null,0,s.F,[u.h,u.k,u.x],null,null),(l()(),u.Gb(2,0,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function m(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,6,"ion-header",[],null,null,null,r.D,r.i)),u.pb(1,49152,null,0,s.z,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,r.P,r.u)),u.pb(3,49152,null,0,s.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.qb(4,0,null,0,2,"ion-title",[],null,null,null,r.O,r.t)),u.pb(5,49152,null,0,s.xb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Avaliadores Ausentes"])),(l()(),u.qb(7,0,null,null,40,"ion-content",[],null,null,null,r.C,r.h)),u.pb(8,49152,null,0,s.s,[u.h,u.k,u.x],null,null),(l()(),u.qb(9,0,null,0,33,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),u.qb(10,0,null,null,29,"ion-list",[],null,null,null,r.H,r.m)),u.pb(11,49152,null,0,s.M,[u.h,u.k,u.x],null,null),(l()(),u.qb(12,0,null,0,13,"ion-item",[],null,null,null,r.F,r.k)),u.pb(13,49152,null,0,s.F,[u.h,u.k,u.x],null,null),(l()(),u.qb(14,0,null,0,2,"ion-label",[],null,null,null,r.G,r.l)),u.pb(15,49152,null,0,s.L,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Data"])),(l()(),u.qb(17,0,null,0,8,"ion-select",[["placeholder","Selecione uma data"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Cb(l,18)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Cb(l,18)._handleChangeEvent(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.dateModel=t)&&e),"ionChange"===n&&(e=!1!==i.updateTrabalhos()&&e),e},r.K,r.o)),u.pb(18,16384,null,0,s.Hb,[u.k],null,null),u.Db(1024,null,c.b,function(l){return[l]},[s.Hb]),u.pb(20,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,c.c,null,[c.e]),u.pb(22,16384,null,0,c.d,[[4,c.c]],null,null),u.pb(23,49152,null,0,s.kb,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),(l()(),u.fb(16777216,null,0,1,null,h)),u.pb(25,278528,null,0,b.h,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.qb(26,0,null,0,13,"ion-item",[],null,null,null,r.F,r.k)),u.pb(27,49152,null,0,s.F,[u.h,u.k,u.x],null,null),(l()(),u.qb(28,0,null,0,2,"ion-label",[],null,null,null,r.G,r.l)),u.pb(29,49152,null,0,s.L,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Local"])),(l()(),u.qb(31,0,null,0,8,"ion-select",[["placeholder","Selecione um local"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Cb(l,32)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Cb(l,32)._handleChangeEvent(t.target)&&e),"ngModelChange"===n&&(e=!1!==(i.locationModel=t)&&e),"ionChange"===n&&(e=!1!==i.filterTrabalhos()&&e),e},r.K,r.o)),u.pb(32,16384,null,0,s.Hb,[u.k],null,null),u.Db(1024,null,c.b,function(l){return[l]},[s.Hb]),u.pb(34,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,c.c,null,[c.e]),u.pb(36,16384,null,0,c.d,[[4,c.c]],null,null),u.pb(37,49152,null,0,s.kb,[u.h,u.k,u.x],{placeholder:[0,"placeholder"]},null),(l()(),u.fb(16777216,null,0,1,null,p)),u.pb(39,278528,null,0,b.h,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.qb(40,0,null,null,2,"ion-button",[["color","primary"],["expand","block"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.clearFilter()&&u),u},r.w,r.b)),u.pb(41,49152,null,0,s.i,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.Gb(-1,0,["Limpar filtro"])),(l()(),u.qb(43,0,null,0,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),u.qb(44,0,null,null,3,"ion-list",[],null,null,null,r.H,r.m)),u.pb(45,49152,null,0,s.M,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,f)),u.pb(47,278528,null,0,b.h,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,20,0,t.dateModel),l(n,23,0,"Selecione uma data"),l(n,25,0,t.dates),l(n,34,0,t.locationModel),l(n,37,0,"Selecione um local"),l(n,39,0,t.locations),l(n,41,0,"primary","block"),l(n,47,0,t.avaliadores)},function(l,n){l(n,17,0,u.Cb(n,22).ngClassUntouched,u.Cb(n,22).ngClassTouched,u.Cb(n,22).ngClassPristine,u.Cb(n,22).ngClassDirty,u.Cb(n,22).ngClassValid,u.Cb(n,22).ngClassInvalid,u.Cb(n,22).ngClassPending),l(n,31,0,u.Cb(n,36).ngClassUntouched,u.Cb(n,36).ngClassTouched,u.Cb(n,36).ngClassPristine,u.Cb(n,36).ngClassDirty,u.Cb(n,36).ngClassValid,u.Cb(n,36).ngClassInvalid,u.Cb(n,36).ngClassPending)})}function g(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"app-avaliadores-ausentes",[],null,null,null,m,d)),u.pb(1,114688,null,0,i,[e.a],null,null)],function(l,n){l(n,1,0)},null)}var v=u.mb("app-avaliadores-ausentes",i,g,{},{},[]),k=t("iInd");t.d(n,"AvaliadoresAusentesPageModuleNgFactory",function(){return x});var x=u.nb(o,[],function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[a.a,v]],[3,u.j],u.v]),u.Ab(4608,b.k,b.j,[u.s,[2,b.q]]),u.Ab(4608,c.g,c.g,[]),u.Ab(4608,s.b,s.b,[u.x,u.g]),u.Ab(4608,s.Db,s.Db,[s.b,u.j,u.p]),u.Ab(4608,s.Gb,s.Gb,[s.b,u.j,u.p]),u.Ab(1073742336,b.b,b.b,[]),u.Ab(1073742336,c.f,c.f,[]),u.Ab(1073742336,c.a,c.a,[]),u.Ab(1073742336,s.Bb,s.Bb,[]),u.Ab(1073742336,k.n,k.n,[[2,k.s],[2,k.m]]),u.Ab(1073742336,o,o,[]),u.Ab(1024,k.k,function(){return[[{path:"",component:i}]]},[])])})},xtjw:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J"),e=t("dKRk");class i{constructor(l){this.apiJai=l}ngOnInit(){this.updateTrabalhos()}updateTrabalhos(){this.apiJai.getTrabalhos().then(l=>{this.trabalhos=l,this.trabalhosFiltered=l})}getItems(l){const n=l.target.value.toLowerCase();this.trabalhosFiltered=this.trabalhos.filter(l=>{const t=String(l[2]),u=l[4];return t.includes(n)||u.toLowerCase().includes(n)})}}class o{}var a=t("pMnS"),r=t("oBZk"),s=t("ZZ/e"),c=t("s7LF"),b=t("SVse"),d=u.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,13,"ion-item",[],null,null,null,r.F,r.k)),u.pb(1,49152,null,0,s.F,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,11,"ion-label",[],null,null,null,r.G,r.l)),u.pb(3,49152,null,0,s.L,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Gb(5,null,["",""])),(l()(),u.qb(6,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),u.Gb(7,null,["",""])),(l()(),u.qb(8,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(9,null,["Avaliador: ",""])),(l()(),u.qb(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(11,null,["Data: "," - ",""])),(l()(),u.qb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Gb(13,null,["Local: "," ",""]))],null,function(l,n){l(n,5,0,n.context.$implicit[3]),l(n,7,0,n.context.$implicit[4]),l(n,9,0,n.context.$implicit[0]),l(n,11,0,n.context.$implicit[7],n.context.$implicit[8]),l(n,13,0,n.context.$implicit[9],n.context.$implicit[10])})}function p(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,6,"ion-header",[],null,null,null,r.D,r.i)),u.pb(1,49152,null,0,s.z,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,4,"ion-toolbar",[["color","primary"]],null,null,null,r.P,r.u)),u.pb(3,49152,null,0,s.zb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.qb(4,0,null,0,2,"ion-title",[],null,null,null,r.O,r.t)),u.pb(5,49152,null,0,s.xb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Trabalhos"])),(l()(),u.qb(7,0,null,null,9,"ion-content",[["class","ion-padding"]],null,null,null,r.C,r.h)),u.pb(8,49152,null,0,s.s,[u.h,u.k,u.x],null,null),(l()(),u.qb(9,0,null,0,3,"ion-searchbar",[],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==u.Cb(l,12)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Cb(l,12)._handleInputEvent(t.target)&&e),"ionInput"===n&&(e=!1!==i.getItems(t)&&e),e},r.I,r.n)),u.Db(5120,null,c.b,function(l){return[l]},[s.Ib]),u.pb(11,49152,null,0,s.hb,[u.h,u.k,u.x],null,null),u.pb(12,16384,null,0,s.Ib,[u.k],null,null),(l()(),u.qb(13,0,null,0,3,"ion-list",[],null,null,null,r.H,r.m)),u.pb(14,49152,null,0,s.M,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,h)),u.pb(16,278528,null,0,b.h,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,16,0,t.trabalhosFiltered)},null)}function f(l){return u.Hb(0,[(l()(),u.qb(0,0,null,null,1,"app-trabalho",[],null,null,null,p,d)),u.pb(1,114688,null,0,i,[e.a],null,null)],function(l,n){l(n,1,0)},null)}var m=u.mb("app-trabalho",i,f,{},{},[]),g=t("iInd");t.d(n,"TrabalhoPageModuleNgFactory",function(){return v});var v=u.nb(o,[],function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[a.a,m]],[3,u.j],u.v]),u.Ab(4608,b.k,b.j,[u.s,[2,b.q]]),u.Ab(4608,c.g,c.g,[]),u.Ab(4608,s.b,s.b,[u.x,u.g]),u.Ab(4608,s.Db,s.Db,[s.b,u.j,u.p]),u.Ab(4608,s.Gb,s.Gb,[s.b,u.j,u.p]),u.Ab(1073742336,b.b,b.b,[]),u.Ab(1073742336,c.f,c.f,[]),u.Ab(1073742336,c.a,c.a,[]),u.Ab(1073742336,s.Bb,s.Bb,[]),u.Ab(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),u.Ab(1073742336,o,o,[]),u.Ab(1024,g.k,function(){return[[{path:"",component:i}]]},[])])})}}]);