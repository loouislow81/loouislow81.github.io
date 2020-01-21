function driftMessenger(){const e=window.driftt=window.drift=window.driftt||[];if(!e.init){if(e.invoked)return void(window.console&&console.error&&console.error("Drift snippet included twice."));e.invoked=!0,e.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],e.factory=function(n){return function(){const t=Array.prototype.slice.call(arguments);return t.unshift(n),e.push(t),e}},e.methods.forEach((function(n){e[n]=e.factory(n)})),e.load=function(e){const n=3e5*Math.ceil(new Date/3e5),t=document.createElement("script");t.type="text/javascript",t.async=!0,t.crossorigin="anonymous",t.src="https://js.driftt.com/include/"+n+"/"+e+".js";const o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)}}drift.SNIPPET_VERSION="0.3.1",drift.load("9ad3433dnnis")}function krunch(){}const log=function(e,n){console.log("krugurt:",e,n)};function injectDOM(e){const n=document.createDocumentFragment(),t=document.createElement("y");for(t.innerHTML=e;t.firstChild;)n.appendChild(t.firstChild);return n}function localeProcessor(e,n){const t=e;let o=n;function i(e,n){const t=document.getElementById(e);let o=locale.t(n);t.innerHTML=o}locale.use(XHRBackend).use(BrowserLanguageDetector).init({fallbackLang:"en",debug:!0,namespace:["special","common"],defaultNS:"special",backend:{loadPath:"assets/locale/{{lng}}/{{namespace}}.json",crossDomain:!0}},(function(e,n){i(t,o)})),locale.on("languageChanged",(function(){i(t,o)}))}function localeGenerator(e){for(let n=0;n<e.length;n++){let t=e[n];localeProcessor(t.id,t.data)}}function dmcaProtection(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("a.dmca-badge");if(e[0].getAttribute("href").indexOf("refurl")<0)for(var n=0;n<e.length;n++){var t=e[n];t.href=t.href+(-1===t.href.indexOf("?")?"?":"&")+"refurl="+document.location}}),!1)}function googleAnalytics(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-109094106-2")}function greeting(){}function progressbar(){}krunch.probeConnection=function(){const e=injectDOM('<y class="w-screen" id="ba194bb5a0b6e42d520d17a3b75f5962"></y><style>#ba194bb5a0b6e42d520d17a3b75f5962{color:#fff;font-size:0.8em;text-align:center;width:100%;top:0;left:0;z-index:999999;position:fixed;box-shadow: 0 0 3px #192127;}.is-online{background:transparent;padding:0}.is-online:after{visibility:visible;content:"";}.is-offline{background:#42505a;padding:0.2rem}.is-offline:after{visibility:visible;content:"No connection!"}</style>');document.body.insertBefore(e,document.body.childNodes[0]);try{window.addEventListener("DOMContentLoaded",(function(){function e(){window.document.getElementById("ba194bb5a0b6e42d520d17a3b75f5962").className=navigator.onLine?"is-online":"is-offline",log("(CONN) "+window.document.getElementById("ba194bb5a0b6e42d520d17a3b75f5962").className,"")}setInterval((function(){window.addEventListener("online",e),window.addEventListener("offline",e)}),500)}))}catch(e){log("(CONN)",e)}},serviceWorker.init(),krunch.addCache=function(e){serviceWorker.add(e),log("(SW) add cache",e)},krunch.removeCache=function(e){serviceWorker.remove(e),log("(SW) remove cache",e)},krunch.isCached=function(){serviceWorker.onCached((function(){log("(SW) (CACHED)")}))},krunch.isOnline=function(){serviceWorker.onOnline((function(){log("(SW) (ONLINE)")}))},krunch.lang=function(){fetch("assets/locale/id.json").then((function(e){return e.json()})).then((function(e){localeGenerator(e),log("(LANG) (id)",e)})).catch((function(e){log("(LANG) (ERR)",e)}))},krunch.langTrigger=function(e){locale.changeLanguage(e)},krunch.adaptiveImageLoader=function(){const e=document.getElementsByClassName("adaptive");Array.from(e).map(e=>{const n=new Image;n.src=e.dataset.src,n.onload=function(){e.classList.remove("adaptive"),"IMG"===e.nodeName?e.src=n.src:e.style.backgroundImage=`url(${n.src})`}})},krunch.networkSpeed=function(){log("(Network Type) "+navigator.connection.type),log("(Downlink) "+navigator.connection.downlink+" MBytes/s",""),log("(Round-Trip Time) "+navigator.connection.rtt+" miliseconds",""),log("(Downlink Max) "+navigator.connection.downlinkMax+" MBytes/s",""),navigator.connection.effectiveType,log("(DataSaver Mode) "+navigator.connection.saveData,"")},greeting.withTime=function(){const e=(new Date).getHours(),n=" Are you coming here to hire me?";if(e<12){const e="<strong>Good morning!</strong>"+n;snicker.onLoad(e,15e3)}else if(e<20){const e="<strong>Good evening!</strong>"+n;snicker.onLoad(e,15e3)}else{const e="<strong>Good night!</strong>"+n;snicker.onLoad(e,15e3)}};const reader={defaults:{color:"rgba(49, 130, 206, 1)",height:"3px",top:0,bottom:0,left:0,right:0,zIndex:9999,ontop:!0,ltr:!0,attach:!1,css:!1,round:!1,nobar:!1},start:function(e={}){let n;e.nobar||(n=document.createElement("y"),n.setAttribute("id","pageReadProgressBar"),document.body.appendChild(n),n.style.position="fixed",n.style.zIndex="99999",n.style.width="0%",e.ontop?n.style.bottom="0":n.style.top=reader.defaults.top,e.ltr?n.style.right="0":n.style.left=reader.defaults.left,e.height?n.style.height=e.height:n.style.height=reader.defaults.height,e.color?n.style.backgroundColor=e.color:n.style.backgroundColor=reader.defaults.color);let t=reader.defaults.attach,o=reader.defaults.round;o=e.round?e.round:2,e.attach&&(t=document.querySelector(e.attach)),document.addEventListener("scroll",(function(i){const r=document.body.scrollHeight,c=window.innerHeight,a=window.scrollY/(r-c)*100;e.nobar||(n.style.width=a.toFixed(o)+"%"),t&&(t.innerHTML=a.toFixed(o))}))}};function snicker(){}function snickerUI(e,n){const t=document.createElement("y");t.setAttribute("style","position:fixed; bottom:13%; left:3%; right:3%; width:fit-content; color:#fff; background-color:#25313a; padding:1em; font-size:0.8em; font-family:inherit; border-radius:3px; box-shadow: 0 0 4px #0a0e10; z-index:999;"),t.innerHTML=e,setTimeout((function(){t.parentNode.removeChild(t)}),n),document.body.appendChild(t)}function totalPosts(e,n){const t=document.getElementById(e),o=Object.keys(n).length;t.innerHTML=t.innerHTML+o}progressbar.pageRead=function(){document.addEventListener("DOMContentLoaded",(function(e){reader.start()}))},snicker.onClick=function(e,n,t){document.getElementById(e).onclick=function(){snickerUI(n,t)}},snicker.onLoad=function(e,n){snickerUI(e,n)};