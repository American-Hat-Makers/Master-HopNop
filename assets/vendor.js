(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable */

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-csstransitions-flexbox-placeholder-svg-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) {
  function r(e, t) {
    return _typeof(e) === t;
  }

  function s() {
    var e, t, n, s, o, i, a;

    for (var l in w) {
      if (w.hasOwnProperty(l)) {
        if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) {
          e.push(t.options.aliases[n].toLowerCase());
        }

        for (s = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) {
          i = e[o], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), S.push((s ? "" : "no-") + a.join("-"));
        }
      }
    }
  }

  function o(e) {
    var t = _.className,
        n = Modernizr._config.classPrefix || "";

    if (b && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }

    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), b ? _.className.baseVal = t : _.className = t);
  }

  function i() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : b ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t);
  }

  function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }

  function f() {
    var e = t.body;
    return e || (e = i(b ? "svg" : "body"), e.fake = !0), e;
  }

  function u(e, n, r, s) {
    var o,
        a,
        l,
        u,
        d = "modernizr",
        p = i("div"),
        c = f();
    if (parseInt(r, 10)) for (; r--;) {
      l = i("div"), l.id = s ? s[r] : d + (r + 1), p.appendChild(l);
    }
    return o = i("style"), o.type = "text/css", o.id = "s" + d, (c.fake ? c : p).appendChild(o), c.appendChild(p), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", u = _.style.overflow, _.style.overflow = "hidden", _.appendChild(c)), a = n(p, e), c.fake ? (c.parentNode.removeChild(c), _.style.overflow = u, _.offsetHeight) : p.parentNode.removeChild(p), !!a;
  }

  function d(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }

  function p(e, t, n) {
    var s;

    for (var o in e) {
      if (e[o] in t) return n === !1 ? e[o] : (s = t[e[o]], r(s, "function") ? d(s, n || t) : s);
    }

    return !1;
  }

  function c(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function m(t, n, r) {
    var s;

    if ("getComputedStyle" in e) {
      s = getComputedStyle.call(e, t, n);
      var o = e.console;
      if (null !== s) r && (s = s.getPropertyValue(r));else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else s = !n && t.currentStyle && t.currentStyle[r];

    return s;
  }

  function h(t, r) {
    var s = t.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; s--;) {
        if (e.CSS.supports(c(t[s]), r)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var o = []; s--;) {
        o.push("(" + c(t[s]) + ":" + r + ")");
      }

      return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == m(e, null, "position");
      });
    }

    return n;
  }

  function v(e, t, s, o) {
    function f() {
      d && (delete A.style, delete A.modElem);
    }

    if (o = r(o, "undefined") ? !1 : o, !r(s, "undefined")) {
      var u = h(e, s);
      if (!r(u, "undefined")) return u;
    }

    for (var d, p, c, m, v, g = ["modernizr", "tspan", "samp"]; !A.style && g.length;) {
      d = !0, A.modElem = i(g.shift()), A.style = A.modElem.style;
    }

    for (c = e.length, p = 0; c > p; p++) {
      if (m = e[p], v = A.style[m], a(m, "-") && (m = l(m)), A.style[m] !== n) {
        if (o || r(s, "undefined")) return f(), "pfx" == t ? m : !0;

        try {
          A.style[m] = s;
        } catch (y) {}

        if (A.style[m] != v) return f(), "pfx" == t ? m : !0;
      }
    }

    return f(), !1;
  }

  function g(e, t, n, s, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + N.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined") ? v(a, t, s, o) : (a = (e + " " + z.join(i + " ") + i).split(" "), p(a, t, n));
  }

  function y(e, t, r) {
    return g(e, n, n, t, r);
  }

  var S = [],
      w = [],
      x = {
    _version: "3.5.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e]);
      }, 0);
    },
    addTest: function addTest(e, t, n) {
      w.push({
        name: e,
        fn: t,
        options: n
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      w.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = x, Modernizr = new Modernizr(), Modernizr.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var C = x._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  x._prefixes = C;

  var _ = t.documentElement,
      b = "svg" === _.nodeName.toLowerCase(),
      T = "Moz O ms Webkit",
      z = x._config.usePrefixes ? T.toLowerCase().split(" ") : [];

  x._domPrefixes = z;
  var P = "CSS" in e && "supports" in e.CSS,
      E = ("supportsCSS" in e);
  Modernizr.addTest("supports", P || E), Modernizr.addTest("placeholder", "placeholder" in i("input") && "placeholder" in i("textarea"));
  var N = x._config.usePrefixes ? T.split(" ") : [];
  x._cssomPrefixes = N;
  var j = x.testStyles = u;
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
      var r = ["@media (", C.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      j(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  });
  var k = {
    elem: i("modernizr")
  };

  Modernizr._q.push(function () {
    delete k.elem;
  });

  var A = {
    style: k.elem.style
  };

  Modernizr._q.unshift(function () {
    delete A.style;
  });

  x.testProp = function (e, t, r) {
    return v([e], n, t, r);
  };

  x.testAllProps = g, x.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && y("transform", "scale(1)", !0);
  }), Modernizr.addTest("csstransforms3d", function () {
    var e = !!y("perspective", "1px", !0),
        t = Modernizr._config.usePrefixes;

    if (e && (!t || "webkitPerspective" in _.style)) {
      var n,
          r = "#modernizr{width:0;height:0}";
      Modernizr.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", j(r + n, function (t) {
        e = 7 === t.offsetWidth && 18 === t.offsetHeight;
      });
    }

    return e;
  }), Modernizr.addTest("csstransitions", y("transition", "all", !0)), s(), o(S), delete x.addTest, delete x.addAsyncTest;

  for (var q = 0; q < Modernizr._q.length; q++) {
    Modernizr._q[q]();
  }

  e.Modernizr = Modernizr;
}(window, document);
/* eslint-enable */

},{}]},{},[1]);
