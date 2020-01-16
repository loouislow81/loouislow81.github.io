! function() {
  const t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void(window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
      t.factory = function(e) {
        return function() {
          const n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }, t.methods.forEach(function(e) {
        t[e] = t.factory(e);
      }), t.load = function(t) {
        const e = 3e5,
          n = Math.ceil(new Date() / e) * e,
          o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        const i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      };
  }
}();

drift.SNIPPET_VERSION = '0.3.1';

drift.load('9ad3433dnnis');

// Utility function
function krunch() {};


/*
  Developer options
  @methodOf log('','');
  @enable with `console.log(msg, req);`
  @disable with `console.log();`
*/
const log = function(msg, req){
  // console.log('krugurt:', msg, req);
  console.log();
};


/*
  Connection Detector
*/
/*
  DOM Decorate Injector for krunch.probeConnection()
  @param {htmlstring}
*/
function injectDOM(htmlStr) {
  const frag = document.createDocumentFragment(),
    temp = document.createElement('y');
  temp.innerHTML = htmlStr;
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild);
  }
  return frag;
};


/*
  Check Connection with display message
  @param {null}
*/
krunch.probeConnection = function() {

  const element = injectDOM('<y class="w-screen" id="ba194bb5a0b6e42d520d17a3b75f5962"></y><style>#ba194bb5a0b6e42d520d17a3b75f5962{color:#fff;font-size:0.8em;text-align:center;width:100%;top:0;left:0;z-index:999999;position:fixed;}.is-online{background:transparent;padding:0}.is-online:after{visibility:visible;content:"";}.is-offline{background:#F44336;padding:0.15rem}.is-offline:after{visibility:visible;content:"No connection!";}</style>');
  document.body.insertBefore(element, document.body.childNodes[0]);

  try {
    window.addEventListener('load', function() {
      function checkStatus() {
        // display status
        window.document.getElementById('ba194bb5a0b6e42d520d17a3b75f5962')
          .className = navigator.onLine ? 'is-online' : 'is-offline';
        log('(CONN) is ' + window.document.getElementById('ba194bb5a0b6e42d520d17a3b75f5962').className);
      }
      setInterval(function() {
        // check connection
        window.addEventListener('online', checkStatus);
        window.addEventListener('offline', checkStatus);
      }, 1000)
    });
  }
  catch (error) {
    log('(CONN)', error);
  }

};


/*
  Enable service worker
*/
/*
  @methodOf serviceWorker
  @param {object=} options
  @param {string} options.url relative url to `krugurt+sw.min.js`
  @param {boolean=false} options.forceReload	reload the page if the registration of ServiceWorker was failed
*/
serviceWorker.init();


/*
  Add `request` to the cache
  @param {string[]|Request[]|string|Request} request
*/
krunch.addCache = function(req) {
  serviceWorker.add(req);
  log('(SW) add cache', req);
};


/*
  Remove `request` from the cache
  @param {string[]|Request[]|string|Request} request
*/
krunch.removeCache = function(req) {
  serviceWorker.remove(req);
  log('(SW) remove cache', req);
};


/*
  Executed immediately
  @methodOf serviceWorker
  @param {function} callback
  @returns {function} dispose
*/
krunch.isCached = function() {
  serviceWorker.onCached(function() {
    log('(SW) (CACHED)');
  });
};


/*
  Executed immediately
  @methodOf serviceWorker
  @param {function} callback
  @returns {function} dispose
*/
krunch.isOnline = function() {
  serviceWorker.onOnline(function() {
    log('(SW) (ONLINE)');
  });
};


function greeting() {};

greeting.withTime = function() {

  const time = new Date().getHours();
  const msg = " Are you come here to hire me?";

  if (time < 10) { // morning

    const yelling = '<strong>Good morning!</strong>' + msg;
    snicker.onLoad(yelling, 15000);

  }
  else if (time < 18) { // evening

    const yelling = '<strong>Good evening!</strong>' + msg;
    snicker.onLoad(yelling, 15000);

  }
  else { // night

    const yelling = '<strong>Good night!</strong>' + msg;
    snicker.onLoad(yelling, 15000);

  }

};

const reader = {

  "defaults": {
    "color": "rgba(49, 130, 206, 1)",
    "height": "3px",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "zIndex": 9999,
    "ontop": true, // bottom or top
    "ltr": true, // left to right
    "attach": false, // element to use value
    "css": false, // js style or css
    "round": false, // decimal numbers
    "nobar": false // use only values
  },
  "start": function(configs = {}) {
    let progressJSelem;
    if (!configs.nobar) {
      //create element
      progressJSelem = document.createElement("y");
      //use css instead of js style
      progressJSelem.setAttribute('id', 'pageReadProgressBar');
      //append to body
      document.body.appendChild(progressJSelem);
      //styles
      progressJSelem.style.position = 'fixed';
      progressJSelem.style.zIndex = '99999';
      progressJSelem.style.width = '0%';

      //configurable options
      //top or bottom
      configs.ontop ? progressJSelem.style.bottom = '0' : progressJSelem.style.top = reader.defaults.top;
      //ltr or rtl
      configs.ltr ? progressJSelem.style.right = '0' : progressJSelem.style.left = reader.defaults.left;
      //height
      configs.height ? progressJSelem.style.height = configs.height : progressJSelem.style.height = reader.defaults.height;
      //color
      configs.color ? progressJSelem.style.backgroundColor = configs.color : progressJSelem.style.backgroundColor = reader.defaults.color;
    }
    let attachElem = reader.defaults.attach;
    let roundto = reader.defaults.round;
    //round to
    configs.round ? roundto = configs.round : roundto = 2;
    //attach
    configs.attach ? attachElem = document.querySelector(configs.attach) : false;
    //scroll event
    document.addEventListener('scroll', function(e) {
      const maxHeight = document.body.scrollHeight;
      const sizeHeight = window.innerHeight;
      const scrolls = window.scrollY;
      const percentage = (scrolls / (maxHeight - sizeHeight)) * 100;
      if (!configs.nobar) {
        progressJSelem.style.width = percentage.toFixed(roundto) + "%";
      }
      if (attachElem) {
        attachElem.innerHTML = percentage.toFixed(roundto);
      }
    });

  }
}


function snicker() {};

/*
  Snicker UI Decorator
  @param {data}
  @param {duration}
*/
function snickerUI(data, duration) {
  const element = document.createElement("y");
  const css ="position:fixed; bottom:13%; left:3%; right:3%; width:fit-content; color:#fff; background-color:#25313a; padding:1em; font-size:0.8em; font-family:inherit; border-radius:3px; box-shadow: 0 0 4px #0a0e10; z-index:999;";
  element.setAttribute("style", css);
  element.innerHTML = data;
  setTimeout(function() {
    element.parentNode.removeChild(element);
  }, duration);
  document.body.appendChild(element);
};


/*
  (onclick) Popup Message Box Manipulation
  @param {id}
  @param {data}
  @param {duration}
*/
snicker.onClick = function(id, data, duration) {
  const evt = document.getElementById(id);
  evt.onclick = function() {
    snickerUI(data, duration);
  };
};


/*
  (onload) Popup Message Box Manipulation
  @param {data}
  @param {duration}
*/
snicker.onLoad = function(data, duration) {
  snickerUI(data, duration);
};

/*
  Get Total Posts from JSON data
  @param {id}
  @param {data}
*/
function totalPosts(id, data) {
  const showTotalItems = document.getElementById(id);
  const getTotalItems = Object.keys(data).length;
  showTotalItems.innerHTML = showTotalItems.innerHTML + getTotalItems;
};

/*
  Twitter Post Updater with Timer
*/
window.twttr = (function(d, s, id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function(f) { t._e.push(f) } });
}(document, "script", "twitter-wjs"));

twttr.ready(function(twttr) {
  twttr.widgets.load();
  setInterval(function() {
    twttr.widgets.load();
  }, 1000);
});
