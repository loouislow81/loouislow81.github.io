! function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void(window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
      t.factory = function(e) {
        return function() {
          var n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }, t.methods.forEach(function(e) {
        t[e] = t.factory(e);
      }), t.load = function(t) {
        var e = 3e5,
          n = Math.ceil(new Date() / e) * e,
          o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      };
  }
}();

drift.SNIPPET_VERSION = '0.3.1';

drift.load('9ad3433dnnis');

// Utility function
function Util() {};

/*
	class manipulation functions
*/
Util.hasClass = function(el, className) {
  if (el.classList) return el.classList.contains(className);
  else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function(el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.add(classList[0]);
  else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
  if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
  var classList = className.split(' ');
  if (el.classList) el.classList.remove(classList[0]);
  else if (Util.hasClass(el, classList[0])) {
    var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
  if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
  if (bool) Util.addClass(el, className);
  else Util.removeClass(el, className);
};

Util.setAttributes = function(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

/*
  DOM manipulation
*/
Util.getChildrenByClassName = function(el, className) {
  var children = el.children,
    childrenByClass = [];
  for (var i = 0; i < el.children.length; i++) {
    if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
  }
  return childrenByClass;
};

Util.is = function(elem, selector) {
  if (selector.nodeType) {
    return elem === selector;
  }

  var qa = (typeof(selector) === 'string' ? document.querySelectorAll(selector) : selector),
    length = qa.length,
    returnArr = [];

  while (length--) {
    if (qa[length] === elem) {
      return true;
    }
  }

  return false;
};

/*
	Animate height of an element
*/
Util.setHeight = function(start, to, element, duration, cb) {
  var change = to - start,
    currentTime = null;

  var animateHeight = function(timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    var val = parseInt((progress / duration) * change + start);
    element.style.height = val + "px";
    if (progress < duration) {
      window.requestAnimationFrame(animateHeight);
    }
    else {
      cb();
    }
  };

  //set the height of the element before starting animation -> fix bug on Safari
  element.style.height = start + "px";
  window.requestAnimationFrame(animateHeight);
};

/*
	Smooth Scroll
*/

Util.scrollTo = function(final, duration, cb) {
  var start = window.scrollY || document.documentElement.scrollTop,
    currentTime = null;

  var animateScroll = function(timestamp) {
    if (!currentTime) currentTime = timestamp;
    var progress = timestamp - currentTime;
    if (progress > duration) progress = duration;
    var val = Math.easeInOutQuad(progress, start, final - start, duration);
    window.scrollTo(0, val);
    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    }
    else {
      cb && cb();
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/*
  Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function(element) {
  if (!element) element = document.getElementsByTagName("body")[0];
  element.focus();
  if (document.activeElement !== element) {
    element.setAttribute('tabindex', '-1');
    element.focus();
  }
};

/*
  Misc
*/

Util.getIndexInArray = function(array, el) {
  return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function(property, value) {
  if ('CSS' in window) {
    return CSS.supports(property, value);
  }
  else {
    var jsProperty = property.replace(/-([a-z])/g, function(g) { return g[1].toUpperCase(); });
    return jsProperty in document.body.style;
  }
};

// merge a set of user options into plugin defaults
// https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
Util.extend = function() {
  // Variables
  var extended = {};
  var deep = false;
  var i = 0;
  var length = arguments.length;

  // Check if a deep merge
  if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
    deep = arguments[0];
    i++;
  }

  // Merge the object into the extended object
  var merge = function(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        }
        else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each object and conduct a merge
  for (; i < length; i++) {
    var obj = arguments[i];
    merge(obj);
  }

  return extended;
};

// Check if Reduced Motion is enabled
Util.osHasReducedMotion = function() {
  if (!window.matchMedia) return false;
  var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (matchMediaObj) return matchMediaObj.matches;
  return false; // return false if not supported
};

/*
	Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

//Custom Event() constructor
if (typeof window.CustomEvent !== "function") {

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/*
	Animation curves
*/
Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};


/* JS Utility Classes */
(function() {
  // make focus ring visible only for keyboard navigation (i.e., tab key)
  var focusTab = document.getElementsByClassName('js-tab-focus');
  if (focusTab.length > 0) {
    function detectClick() {
      resetFocusTabs(false);
      window.addEventListener('keydown', detectTab);
      window.removeEventListener('mousedown', detectClick);
    };

    function detectTab(event) {
      if (event.keyCode !== 9) return;
      resetFocusTabs(true);
      window.removeEventListener('keydown', detectTab);
      window.addEventListener('mousedown', detectClick);
    };

    function resetFocusTabs(bool) {
      var outlineStyle = bool ? '' : 'none';
      for (var i = 0; i < focusTab.length; i++) {
        focusTab[i].style.setProperty('outline', outlineStyle);
      }
    };
    window.addEventListener('mousedown', detectClick);
  }
}());


/*
  Import and Load JS Once
*/
Util.loadJsOnce = function() {
  var scriptArray = []; // array of urls (closure)
  // function to defer loading of script
  return function(url, callback) {
    // the array doesn't have such url
    if (scriptArray.indexOf(url) === -1) {
      var script = document.createElement('script');
      script.src = url;
      var head = document.getElementsByTagName('head')[0],
        done = false;
      script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
          done = true;
          if (typeof callback === 'function') {
            callback();
          }
          script.onload = script.onreadystatechange = null;
          head.removeChild(script);
          scriptArray.push(url);
        }
      };
      head.appendChild(script);
    }
  };
}();

// loop helper for Util.loadJsOnce
function importjs(urls){
  for (var i = 0; i < urls.length; i++) {
    Util.loadJsOnce(urls[i]);
  }
}
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
    // console.log("update twitter timeline");
  }, 1000);
});