function nA(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const l = Object.getOwnPropertyDescriptor(r, i);
          l &&
            Object.defineProperty(
              e,
              i,
              l.get ? l : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerpolicy && (l.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
var Eu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Fg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ef = { exports: {} },
  tf = {},
  T = { exports: {} },
  Ne = {};
var ks = Symbol.for("react.element"),
  rA = Symbol.for("react.portal"),
  iA = Symbol.for("react.fragment"),
  oA = Symbol.for("react.strict_mode"),
  lA = Symbol.for("react.profiler"),
  uA = Symbol.for("react.provider"),
  sA = Symbol.for("react.context"),
  aA = Symbol.for("react.forward_ref"),
  cA = Symbol.for("react.suspense"),
  fA = Symbol.for("react.memo"),
  dA = Symbol.for("react.lazy"),
  i1 = Symbol.iterator;
function pA(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (i1 && e[i1]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Jw = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  eS = Object.assign,
  tS = {};
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tS),
    (this.updater = n || Jw);
}
Jl.prototype.isReactComponent = {};
Jl.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jl.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function nS() {}
nS.prototype = Jl.prototype;
function zg(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = tS),
    (this.updater = n || Jw);
}
var $g = (zg.prototype = new nS());
$g.constructor = zg;
eS($g, Jl.prototype);
$g.isPureReactComponent = !0;
var o1 = Array.isArray,
  rS = Object.prototype.hasOwnProperty,
  Bg = { current: null },
  iS = { key: !0, ref: !0, __self: !0, __source: !0 };
function oS(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      rS.call(t, r) && !iS.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var f = Array(a), d = 0; d < a; d++) f[d] = arguments[d + 2];
    i.children = f;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ks,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Bg.current,
  };
}
function hA(e, t) {
  return {
    $$typeof: ks,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ug(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ks;
}
function gA(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var l1 = /\/+/g;
function fp(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gA("" + e.key)
    : t.toString(36);
}
function Ga(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ks:
          case rA:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + fp(s, 0) : r),
      o1(i)
        ? ((n = ""),
          e != null && (n = e.replace(l1, "$&/") + "/"),
          Ga(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          (Ug(i) &&
            (i = hA(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(l1, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), o1(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var f = r + fp(l, a);
      s += Ga(l, t, n, f, i);
    }
  else if (((f = pA(e)), typeof f == "function"))
    for (e = f.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (f = r + fp(l, a++)), (s += Ga(l, t, n, f, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ca(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ga(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function mA(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fn = { current: null },
  Ka = { transition: null },
  vA = {
    ReactCurrentDispatcher: fn,
    ReactCurrentBatchConfig: Ka,
    ReactCurrentOwner: Bg,
  };
Ne.Children = {
  map: Ca,
  forEach: function (e, t, n) {
    Ca(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ca(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ca(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ug(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Ne.Component = Jl;
Ne.Fragment = iA;
Ne.Profiler = lA;
Ne.PureComponent = zg;
Ne.StrictMode = oA;
Ne.Suspense = cA;
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vA;
Ne.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = eS({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = Bg.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (f in t)
      rS.call(t, f) &&
        !iS.hasOwnProperty(f) &&
        (r[f] = t[f] === void 0 && a !== void 0 ? a[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    a = Array(f);
    for (var d = 0; d < f; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: ks, type: e.type, key: i, ref: l, props: r, _owner: s };
};
Ne.createContext = function (e) {
  return (
    (e = {
      $$typeof: sA,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uA, _context: e }),
    (e.Consumer = e)
  );
};
Ne.createElement = oS;
Ne.createFactory = function (e) {
  var t = oS.bind(null, e);
  return (t.type = e), t;
};
Ne.createRef = function () {
  return { current: null };
};
Ne.forwardRef = function (e) {
  return { $$typeof: aA, render: e };
};
Ne.isValidElement = Ug;
Ne.lazy = function (e) {
  return { $$typeof: dA, _payload: { _status: -1, _result: e }, _init: mA };
};
Ne.memo = function (e, t) {
  return { $$typeof: fA, type: e, compare: t === void 0 ? null : t };
};
Ne.startTransition = function (e) {
  var t = Ka.transition;
  Ka.transition = {};
  try {
    e();
  } finally {
    Ka.transition = t;
  }
};
Ne.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Ne.useCallback = function (e, t) {
  return fn.current.useCallback(e, t);
};
Ne.useContext = function (e) {
  return fn.current.useContext(e);
};
Ne.useDebugValue = function () {};
Ne.useDeferredValue = function (e) {
  return fn.current.useDeferredValue(e);
};
Ne.useEffect = function (e, t) {
  return fn.current.useEffect(e, t);
};
Ne.useId = function () {
  return fn.current.useId();
};
Ne.useImperativeHandle = function (e, t, n) {
  return fn.current.useImperativeHandle(e, t, n);
};
Ne.useInsertionEffect = function (e, t) {
  return fn.current.useInsertionEffect(e, t);
};
Ne.useLayoutEffect = function (e, t) {
  return fn.current.useLayoutEffect(e, t);
};
Ne.useMemo = function (e, t) {
  return fn.current.useMemo(e, t);
};
Ne.useReducer = function (e, t, n) {
  return fn.current.useReducer(e, t, n);
};
Ne.useRef = function (e) {
  return fn.current.useRef(e);
};
Ne.useState = function (e) {
  return fn.current.useState(e);
};
Ne.useSyncExternalStore = function (e, t, n) {
  return fn.current.useSyncExternalStore(e, t, n);
};
Ne.useTransition = function () {
  return fn.current.useTransition();
};
Ne.version = "18.2.0";
(function (e) {
  e.exports = Ne;
})(T);
const be = Fg(T.exports),
  lS = nA({ __proto__: null, default: be }, [T.exports]);
var yA = T.exports,
  xA = Symbol.for("react.element"),
  wA = Symbol.for("react.fragment"),
  SA = Object.prototype.hasOwnProperty,
  EA = yA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  CA = { key: !0, ref: !0, __self: !0, __source: !0 };
function uS(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) SA.call(t, r) && !CA.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: xA,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: EA.current,
  };
}
tf.Fragment = wA;
tf.jsx = uS;
tf.jsxs = uS;
(function (e) {
  e.exports = tf;
})(ef);
const bn = ef.exports.Fragment,
  V = ef.exports.jsx,
  we = ef.exports.jsxs;
var Vo = { exports: {} },
  jn = {},
  sS = { exports: {} },
  aS = {};
(function (e) {
  function t(U, J) {
    var ee = U.length;
    U.push(J);
    e: for (; 0 < ee; ) {
      var b = (ee - 1) >>> 1,
        O = U[b];
      if (0 < i(O, J)) (U[b] = J), (U[ee] = O), (ee = b);
      else break e;
    }
  }
  function n(U) {
    return U.length === 0 ? null : U[0];
  }
  function r(U) {
    if (U.length === 0) return null;
    var J = U[0],
      ee = U.pop();
    if (ee !== J) {
      U[0] = ee;
      e: for (var b = 0, O = U.length, fe = O >>> 1; b < fe; ) {
        var ve = 2 * (b + 1) - 1,
          Ae = U[ve],
          de = ve + 1,
          Oe = U[de];
        if (0 > i(Ae, ee))
          de < O && 0 > i(Oe, Ae)
            ? ((U[b] = Oe), (U[de] = ee), (b = de))
            : ((U[b] = Ae), (U[ve] = ee), (b = ve));
        else if (de < O && 0 > i(Oe, ee)) (U[b] = Oe), (U[de] = ee), (b = de);
        else break e;
      }
    }
    return J;
  }
  function i(U, J) {
    var ee = U.sortIndex - J.sortIndex;
    return ee !== 0 ? ee : U.id - J.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var f = [],
    d = [],
    h = 1,
    g = null,
    y = 3,
    m = !1,
    w = !1,
    E = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    S = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(U) {
    for (var J = n(d); J !== null; ) {
      if (J.callback === null) r(d);
      else if (J.startTime <= U)
        r(d), (J.sortIndex = J.expirationTime), t(f, J);
      else break;
      J = n(d);
    }
  }
  function P(U) {
    if (((E = !1), _(U), !w))
      if (n(f) !== null) (w = !0), oe(D);
      else {
        var J = n(d);
        J !== null && ue(P, J.startTime - U);
      }
  }
  function D(U, J) {
    (w = !1), E && ((E = !1), v(z), (z = -1)), (m = !0);
    var ee = y;
    try {
      for (
        _(J), g = n(f);
        g !== null && (!(g.expirationTime > J) || (U && !B()));

      ) {
        var b = g.callback;
        if (typeof b == "function") {
          (g.callback = null), (y = g.priorityLevel);
          var O = b(g.expirationTime <= J);
          (J = e.unstable_now()),
            typeof O == "function" ? (g.callback = O) : g === n(f) && r(f),
            _(J);
        } else r(f);
        g = n(f);
      }
      if (g !== null) var fe = !0;
      else {
        var ve = n(d);
        ve !== null && ue(P, ve.startTime - J), (fe = !1);
      }
      return fe;
    } finally {
      (g = null), (y = ee), (m = !1);
    }
  }
  var R = !1,
    F = null,
    z = -1,
    q = 5,
    K = -1;
  function B() {
    return !(e.unstable_now() - K < q);
  }
  function X() {
    if (F !== null) {
      var U = e.unstable_now();
      K = U;
      var J = !0;
      try {
        J = F(!0, U);
      } finally {
        J ? $() : ((R = !1), (F = null));
      }
    } else R = !1;
  }
  var $;
  if (typeof S == "function")
    $ = function () {
      S(X);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      ie = H.port2;
    (H.port1.onmessage = X),
      ($ = function () {
        ie.postMessage(null);
      });
  } else
    $ = function () {
      A(X, 0);
    };
  function oe(U) {
    (F = U), R || ((R = !0), $());
  }
  function ue(U, J) {
    z = A(function () {
      U(e.unstable_now());
    }, J);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (U) {
      U.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || m || ((w = !0), oe(D));
    }),
    (e.unstable_forceFrameRate = function (U) {
      0 > U || 125 < U
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (q = 0 < U ? Math.floor(1e3 / U) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(f);
    }),
    (e.unstable_next = function (U) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = y;
      }
      var ee = y;
      y = J;
      try {
        return U();
      } finally {
        y = ee;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (U, J) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var ee = y;
      y = U;
      try {
        return J();
      } finally {
        y = ee;
      }
    }),
    (e.unstable_scheduleCallback = function (U, J, ee) {
      var b = e.unstable_now();
      switch (
        (typeof ee == "object" && ee !== null
          ? ((ee = ee.delay),
            (ee = typeof ee == "number" && 0 < ee ? b + ee : b))
          : (ee = b),
        U)
      ) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return (
        (O = ee + O),
        (U = {
          id: h++,
          callback: J,
          priorityLevel: U,
          startTime: ee,
          expirationTime: O,
          sortIndex: -1,
        }),
        ee > b
          ? ((U.sortIndex = ee),
            t(d, U),
            n(f) === null &&
              U === n(d) &&
              (E ? (v(z), (z = -1)) : (E = !0), ue(P, ee - b)))
          : ((U.sortIndex = O), t(f, U), w || m || ((w = !0), oe(D))),
        U
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (U) {
      var J = y;
      return function () {
        var ee = y;
        y = J;
        try {
          return U.apply(this, arguments);
        } finally {
          y = ee;
        }
      };
    });
})(aS);
(function (e) {
  e.exports = aS;
})(sS);
var cS = T.exports,
  Bn = sS.exports;
function te(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fS = new Set(),
  ns = {};
function qo(e, t) {
  Hl(e, t), Hl(e + "Capture", t);
}
function Hl(e, t) {
  for (ns[e] = t, e = 0; e < t.length; e++) fS.add(t[e]);
}
var fi = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  mh = Object.prototype.hasOwnProperty,
  kA =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  u1 = {},
  s1 = {};
function _A(e) {
  return mh.call(s1, e)
    ? !0
    : mh.call(u1, e)
    ? !1
    : kA.test(e)
    ? (s1[e] = !0)
    : ((u1[e] = !0), !1);
}
function bA(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function OA(e, t, n, r) {
  if (t === null || typeof t > "u" || bA(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function dn(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var Wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Wt[e] = new dn(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Wt[t] = new dn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Wt[e] = new dn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Wt[e] = new dn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Wt[e] = new dn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Wt[e] = new dn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Wt[e] = new dn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Wt[e] = new dn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Wt[e] = new dn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hg = /[\-:]([a-z])/g;
function jg(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hg, jg);
    Wt[t] = new dn(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hg, jg);
    Wt[t] = new dn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hg, jg);
  Wt[t] = new dn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Wt[e] = new dn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Wt.xlinkHref = new dn(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Wt[e] = new dn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wg(e, t, n, r) {
  var i = Wt.hasOwnProperty(t) ? Wt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (OA(t, n, i, r) && (n = null),
    r || i === null
      ? _A(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mi = cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ka = Symbol.for("react.element"),
  vl = Symbol.for("react.portal"),
  yl = Symbol.for("react.fragment"),
  Vg = Symbol.for("react.strict_mode"),
  vh = Symbol.for("react.profiler"),
  dS = Symbol.for("react.provider"),
  pS = Symbol.for("react.context"),
  qg = Symbol.for("react.forward_ref"),
  yh = Symbol.for("react.suspense"),
  xh = Symbol.for("react.suspense_list"),
  Gg = Symbol.for("react.memo"),
  Di = Symbol.for("react.lazy"),
  hS = Symbol.for("react.offscreen"),
  a1 = Symbol.iterator;
function Cu(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (a1 && e[a1]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vt = Object.assign,
  dp;
function Du(e) {
  if (dp === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      dp = (t && t[1]) || "";
    }
  return (
    `
` +
    dp +
    e
  );
}
var pp = !1;
function hp(e, t) {
  if (!e || pp) return "";
  pp = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var f =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    f.includes("<anonymous>") &&
                    (f = f.replace("<anonymous>", e.displayName)),
                  f
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (pp = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Du(e) : "";
}
function IA(e) {
  switch (e.tag) {
    case 5:
      return Du(e.type);
    case 16:
      return Du("Lazy");
    case 13:
      return Du("Suspense");
    case 19:
      return Du("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = hp(e.type, !1)), e;
    case 11:
      return (e = hp(e.type.render, !1)), e;
    case 1:
      return (e = hp(e.type, !0)), e;
    default:
      return "";
  }
}
function wh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case yl:
      return "Fragment";
    case vl:
      return "Portal";
    case vh:
      return "Profiler";
    case Vg:
      return "StrictMode";
    case yh:
      return "Suspense";
    case xh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pS:
        return (e.displayName || "Context") + ".Consumer";
      case dS:
        return (e._context.displayName || "Context") + ".Provider";
      case qg:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gg:
        return (
          (t = e.displayName || null), t !== null ? t : wh(e.type) || "Memo"
        );
      case Di:
        (t = e._payload), (e = e._init);
        try {
          return wh(e(t));
        } catch {}
    }
  return null;
}
function TA(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wh(t);
    case 8:
      return t === Vg ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function eo(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gS(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function RA(e) {
  var t = gS(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _a(e) {
  e._valueTracker || (e._valueTracker = RA(e));
}
function mS(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gS(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fc(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Sh(e, t) {
  var n = t.checked;
  return vt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function c1(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = eo(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vS(e, t) {
  (t = t.checked), t != null && Wg(e, "checked", t, !1);
}
function Eh(e, t) {
  vS(e, t);
  var n = eo(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ch(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ch(e, t.type, eo(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function f1(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ch(e, t, n) {
  (t !== "number" || fc(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lu = Array.isArray;
function Rl(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + eo(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function kh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(te(91));
  return vt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function d1(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(te(92));
      if (Lu(n)) {
        if (1 < n.length) throw Error(te(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: eo(n) };
}
function yS(e, t) {
  var n = eo(t.value),
    r = eo(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function p1(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xS(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _h(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? xS(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ba,
  wS = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ba = ba || document.createElement("div"),
          ba.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ba.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bu = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  PA = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bu).forEach(function (e) {
  PA.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bu[t] = Bu[e]);
  });
});
function SS(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bu.hasOwnProperty(e) && Bu[e])
    ? ("" + t).trim()
    : t + "px";
}
function ES(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = SS(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var AA = vt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function bh(e, t) {
  if (t) {
    if (AA[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(te(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(te(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(te(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(te(62));
  }
}
function Oh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ih = null;
function Kg(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Th = null,
  Pl = null,
  Al = null;
function h1(e) {
  if ((e = Os(e))) {
    if (typeof Th != "function") throw Error(te(280));
    var t = e.stateNode;
    t && ((t = uf(t)), Th(e.stateNode, e.type, t));
  }
}
function CS(e) {
  Pl ? (Al ? Al.push(e) : (Al = [e])) : (Pl = e);
}
function kS() {
  if (Pl) {
    var e = Pl,
      t = Al;
    if (((Al = Pl = null), h1(e), t)) for (e = 0; e < t.length; e++) h1(t[e]);
  }
}
function _S(e, t) {
  return e(t);
}
function bS() {}
var gp = !1;
function OS(e, t, n) {
  if (gp) return e(t, n);
  gp = !0;
  try {
    return _S(e, t, n);
  } finally {
    (gp = !1), (Pl !== null || Al !== null) && (bS(), kS());
  }
}
function is(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = uf(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(te(231, t, typeof n));
  return n;
}
var Rh = !1;
if (fi)
  try {
    var ku = {};
    Object.defineProperty(ku, "passive", {
      get: function () {
        Rh = !0;
      },
    }),
      window.addEventListener("test", ku, ku),
      window.removeEventListener("test", ku, ku);
  } catch {
    Rh = !1;
  }
function DA(e, t, n, r, i, l, s, a, f) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Uu = !1,
  dc = null,
  pc = !1,
  Ph = null,
  LA = {
    onError: function (e) {
      (Uu = !0), (dc = e);
    },
  };
function MA(e, t, n, r, i, l, s, a, f) {
  (Uu = !1), (dc = null), DA.apply(LA, arguments);
}
function NA(e, t, n, r, i, l, s, a, f) {
  if ((MA.apply(this, arguments), Uu)) {
    if (Uu) {
      var d = dc;
      (Uu = !1), (dc = null);
    } else throw Error(te(198));
    pc || ((pc = !0), (Ph = d));
  }
}
function Go(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function IS(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function g1(e) {
  if (Go(e) !== e) throw Error(te(188));
}
function FA(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Go(e)), t === null)) throw Error(te(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return g1(i), e;
        if (l === r) return g1(i), t;
        l = l.sibling;
      }
      throw Error(te(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(te(189));
      }
    }
    if (n.alternate !== r) throw Error(te(190));
  }
  if (n.tag !== 3) throw Error(te(188));
  return n.stateNode.current === n ? e : t;
}
function TS(e) {
  return (e = FA(e)), e !== null ? RS(e) : null;
}
function RS(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = RS(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var PS = Bn.unstable_scheduleCallback,
  m1 = Bn.unstable_cancelCallback,
  zA = Bn.unstable_shouldYield,
  $A = Bn.unstable_requestPaint,
  kt = Bn.unstable_now,
  BA = Bn.unstable_getCurrentPriorityLevel,
  Qg = Bn.unstable_ImmediatePriority,
  AS = Bn.unstable_UserBlockingPriority,
  hc = Bn.unstable_NormalPriority,
  UA = Bn.unstable_LowPriority,
  DS = Bn.unstable_IdlePriority,
  nf = null,
  Hr = null;
function HA(e) {
  if (Hr && typeof Hr.onCommitFiberRoot == "function")
    try {
      Hr.onCommitFiberRoot(nf, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ir = Math.clz32 ? Math.clz32 : VA,
  jA = Math.log,
  WA = Math.LN2;
function VA(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jA(e) / WA) | 0)) | 0;
}
var Oa = 64,
  Ia = 4194304;
function Mu(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function gc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Mu(a)) : ((l &= s), l !== 0 && (r = Mu(l)));
  } else (s = n & ~i), s !== 0 ? (r = Mu(s)) : l !== 0 && (r = Mu(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & i) === 0 &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ir(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function qA(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function GA(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Ir(l),
      a = 1 << s,
      f = i[s];
    f === -1
      ? ((a & n) === 0 || (a & r) !== 0) && (i[s] = qA(a, t))
      : f <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Ah(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function LS() {
  var e = Oa;
  return (Oa <<= 1), (Oa & 4194240) === 0 && (Oa = 64), e;
}
function mp(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _s(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ir(t)),
    (e[t] = n);
}
function KA(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ir(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Yg(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ir(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Qe = 0;
function MS(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var NS,
  Xg,
  FS,
  zS,
  $S,
  Dh = !1,
  Ta = [],
  Ui = null,
  Hi = null,
  ji = null,
  os = new Map(),
  ls = new Map(),
  Mi = [],
  QA =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function v1(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ui = null;
      break;
    case "dragenter":
    case "dragleave":
      Hi = null;
      break;
    case "mouseover":
    case "mouseout":
      ji = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ls.delete(t.pointerId);
  }
}
function _u(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Os(t)), t !== null && Xg(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function YA(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ui = _u(Ui, e, t, n, r, i)), !0;
    case "dragenter":
      return (Hi = _u(Hi, e, t, n, r, i)), !0;
    case "mouseover":
      return (ji = _u(ji, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return os.set(l, _u(os.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), ls.set(l, _u(ls.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function BS(e) {
  var t = Oo(e.target);
  if (t !== null) {
    var n = Go(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = IS(n)), t !== null)) {
          (e.blockedOn = t),
            $S(e.priority, function () {
              FS(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Lh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ih = r), n.target.dispatchEvent(r), (Ih = null);
    } else return (t = Os(n)), t !== null && Xg(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function y1(e, t, n) {
  Qa(e) && n.delete(t);
}
function XA() {
  (Dh = !1),
    Ui !== null && Qa(Ui) && (Ui = null),
    Hi !== null && Qa(Hi) && (Hi = null),
    ji !== null && Qa(ji) && (ji = null),
    os.forEach(y1),
    ls.forEach(y1);
}
function bu(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Dh ||
      ((Dh = !0),
      Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority, XA)));
}
function us(e) {
  function t(i) {
    return bu(i, e);
  }
  if (0 < Ta.length) {
    bu(Ta[0], e);
    for (var n = 1; n < Ta.length; n++) {
      var r = Ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ui !== null && bu(Ui, e),
      Hi !== null && bu(Hi, e),
      ji !== null && bu(ji, e),
      os.forEach(t),
      ls.forEach(t),
      n = 0;
    n < Mi.length;
    n++
  )
    (r = Mi[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Mi.length && ((n = Mi[0]), n.blockedOn === null); )
    BS(n), n.blockedOn === null && Mi.shift();
}
var Dl = mi.ReactCurrentBatchConfig,
  mc = !0;
function ZA(e, t, n, r) {
  var i = Qe,
    l = Dl.transition;
  Dl.transition = null;
  try {
    (Qe = 1), Zg(e, t, n, r);
  } finally {
    (Qe = i), (Dl.transition = l);
  }
}
function JA(e, t, n, r) {
  var i = Qe,
    l = Dl.transition;
  Dl.transition = null;
  try {
    (Qe = 4), Zg(e, t, n, r);
  } finally {
    (Qe = i), (Dl.transition = l);
  }
}
function Zg(e, t, n, r) {
  if (mc) {
    var i = Lh(e, t, n, r);
    if (i === null) bp(e, t, r, vc, n), v1(e, r);
    else if (YA(i, e, t, n, r)) r.stopPropagation();
    else if ((v1(e, r), t & 4 && -1 < QA.indexOf(e))) {
      for (; i !== null; ) {
        var l = Os(i);
        if (
          (l !== null && NS(l),
          (l = Lh(e, t, n, r)),
          l === null && bp(e, t, r, vc, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else bp(e, t, r, null, n);
  }
}
var vc = null;
function Lh(e, t, n, r) {
  if (((vc = null), (e = Kg(r)), (e = Oo(e)), e !== null))
    if (((t = Go(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = IS(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vc = e), null;
}
function US(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (BA()) {
        case Qg:
          return 1;
        case AS:
          return 4;
        case hc:
        case UA:
          return 16;
        case DS:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $i = null,
  Jg = null,
  Ya = null;
function HS() {
  if (Ya) return Ya;
  var e,
    t = Jg,
    n = t.length,
    r,
    i = "value" in $i ? $i.value : $i.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Ya = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Xa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ra() {
  return !0;
}
function x1() {
  return !1;
}
function Wn(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ra
        : x1),
      (this.isPropagationStopped = x1),
      this
    );
  }
  return (
    vt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ra));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ra));
      },
      persist: function () {},
      isPersistent: Ra,
    }),
    t
  );
}
var eu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  em = Wn(eu),
  bs = vt({}, eu, { view: 0, detail: 0 }),
  eD = Wn(bs),
  vp,
  yp,
  Ou,
  rf = vt({}, bs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tm,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ou &&
            (Ou && e.type === "mousemove"
              ? ((vp = e.screenX - Ou.screenX), (yp = e.screenY - Ou.screenY))
              : (yp = vp = 0),
            (Ou = e)),
          vp);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : yp;
    },
  }),
  w1 = Wn(rf),
  tD = vt({}, rf, { dataTransfer: 0 }),
  nD = Wn(tD),
  rD = vt({}, bs, { relatedTarget: 0 }),
  xp = Wn(rD),
  iD = vt({}, eu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oD = Wn(iD),
  lD = vt({}, eu, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uD = Wn(lD),
  sD = vt({}, eu, { data: 0 }),
  S1 = Wn(sD),
  aD = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  cD = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fD = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dD(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fD[e]) ? !!t[e] : !1;
}
function tm() {
  return dD;
}
var pD = vt({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = aD[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? cD[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tm,
    charCode: function (e) {
      return e.type === "keypress" ? Xa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  hD = Wn(pD),
  gD = vt({}, rf, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  E1 = Wn(gD),
  mD = vt({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tm,
  }),
  vD = Wn(mD),
  yD = vt({}, eu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xD = Wn(yD),
  wD = vt({}, rf, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  SD = Wn(wD),
  ED = [9, 13, 27, 32],
  nm = fi && "CompositionEvent" in window,
  Hu = null;
fi && "documentMode" in document && (Hu = document.documentMode);
var CD = fi && "TextEvent" in window && !Hu,
  jS = fi && (!nm || (Hu && 8 < Hu && 11 >= Hu)),
  C1 = String.fromCharCode(32),
  k1 = !1;
function WS(e, t) {
  switch (e) {
    case "keyup":
      return ED.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function VS(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xl = !1;
function kD(e, t) {
  switch (e) {
    case "compositionend":
      return VS(t);
    case "keypress":
      return t.which !== 32 ? null : ((k1 = !0), C1);
    case "textInput":
      return (e = t.data), e === C1 && k1 ? null : e;
    default:
      return null;
  }
}
function _D(e, t) {
  if (xl)
    return e === "compositionend" || (!nm && WS(e, t))
      ? ((e = HS()), (Ya = Jg = $i = null), (xl = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jS && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var bD = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function _1(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!bD[e.type] : t === "textarea";
}
function qS(e, t, n, r) {
  CS(r),
    (t = yc(t, "onChange")),
    0 < t.length &&
      ((n = new em("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ju = null,
  ss = null;
function OD(e) {
  rE(e, 0);
}
function of(e) {
  var t = El(e);
  if (mS(t)) return e;
}
function ID(e, t) {
  if (e === "change") return t;
}
var GS = !1;
if (fi) {
  var wp;
  if (fi) {
    var Sp = "oninput" in document;
    if (!Sp) {
      var b1 = document.createElement("div");
      b1.setAttribute("oninput", "return;"),
        (Sp = typeof b1.oninput == "function");
    }
    wp = Sp;
  } else wp = !1;
  GS = wp && (!document.documentMode || 9 < document.documentMode);
}
function O1() {
  ju && (ju.detachEvent("onpropertychange", KS), (ss = ju = null));
}
function KS(e) {
  if (e.propertyName === "value" && of(ss)) {
    var t = [];
    qS(t, ss, e, Kg(e)), OS(OD, t);
  }
}
function TD(e, t, n) {
  e === "focusin"
    ? (O1(), (ju = t), (ss = n), ju.attachEvent("onpropertychange", KS))
    : e === "focusout" && O1();
}
function RD(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return of(ss);
}
function PD(e, t) {
  if (e === "click") return of(t);
}
function AD(e, t) {
  if (e === "input" || e === "change") return of(t);
}
function DD(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rr = typeof Object.is == "function" ? Object.is : DD;
function as(e, t) {
  if (Rr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!mh.call(t, i) || !Rr(e[i], t[i])) return !1;
  }
  return !0;
}
function I1(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function T1(e, t) {
  var n = I1(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = I1(n);
  }
}
function QS(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? QS(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function YS() {
  for (var e = window, t = fc(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fc(e.document);
  }
  return t;
}
function rm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function LD(e) {
  var t = YS(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    QS(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = T1(n, l));
        var s = T1(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var MD = fi && "documentMode" in document && 11 >= document.documentMode,
  wl = null,
  Mh = null,
  Wu = null,
  Nh = !1;
function R1(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Nh ||
    wl == null ||
    wl !== fc(r) ||
    ((r = wl),
    "selectionStart" in r && rm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Wu && as(Wu, r)) ||
      ((Wu = r),
      (r = yc(Mh, "onSelect")),
      0 < r.length &&
        ((t = new em("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wl))));
}
function Pa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Sl = {
    animationend: Pa("Animation", "AnimationEnd"),
    animationiteration: Pa("Animation", "AnimationIteration"),
    animationstart: Pa("Animation", "AnimationStart"),
    transitionend: Pa("Transition", "TransitionEnd"),
  },
  Ep = {},
  XS = {};
fi &&
  ((XS = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sl.animationend.animation,
    delete Sl.animationiteration.animation,
    delete Sl.animationstart.animation),
  "TransitionEvent" in window || delete Sl.transitionend.transition);
function lf(e) {
  if (Ep[e]) return Ep[e];
  if (!Sl[e]) return e;
  var t = Sl[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in XS) return (Ep[e] = t[n]);
  return e;
}
var ZS = lf("animationend"),
  JS = lf("animationiteration"),
  eE = lf("animationstart"),
  tE = lf("transitionend"),
  nE = new Map(),
  P1 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function lo(e, t) {
  nE.set(e, t), qo(t, [e]);
}
for (var Cp = 0; Cp < P1.length; Cp++) {
  var kp = P1[Cp],
    ND = kp.toLowerCase(),
    FD = kp[0].toUpperCase() + kp.slice(1);
  lo(ND, "on" + FD);
}
lo(ZS, "onAnimationEnd");
lo(JS, "onAnimationIteration");
lo(eE, "onAnimationStart");
lo("dblclick", "onDoubleClick");
lo("focusin", "onFocus");
lo("focusout", "onBlur");
lo(tE, "onTransitionEnd");
Hl("onMouseEnter", ["mouseout", "mouseover"]);
Hl("onMouseLeave", ["mouseout", "mouseover"]);
Hl("onPointerEnter", ["pointerout", "pointerover"]);
Hl("onPointerLeave", ["pointerout", "pointerover"]);
qo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nu =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zD = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nu));
function A1(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), NA(r, t, void 0, e), (e.currentTarget = null);
}
function rE(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            f = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), f !== l && i.isPropagationStopped())) break e;
          A1(i, a, d), (l = f);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (f = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            f !== l && i.isPropagationStopped())
          )
            break e;
          A1(i, a, d), (l = f);
        }
    }
  }
  if (pc) throw ((e = Ph), (pc = !1), (Ph = null), e);
}
function rt(e, t) {
  var n = t[Uh];
  n === void 0 && (n = t[Uh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (iE(t, e, 2, !1), n.add(r));
}
function _p(e, t, n) {
  var r = 0;
  t && (r |= 4), iE(n, e, r, t);
}
var Aa = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[Aa]) {
    (e[Aa] = !0),
      fS.forEach(function (n) {
        n !== "selectionchange" && (zD.has(n) || _p(n, !1, e), _p(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Aa] || ((t[Aa] = !0), _p("selectionchange", !1, t));
  }
}
function iE(e, t, n, r) {
  switch (US(t)) {
    case 1:
      var i = ZA;
      break;
    case 4:
      i = JA;
      break;
    default:
      i = Zg;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Rh ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function bp(e, t, n, r, i) {
  var l = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var f = s.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = s.stateNode.containerInfo),
              f === i || (f.nodeType === 8 && f.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Oo(a)), s === null)) return;
          if (((f = s.tag), f === 5 || f === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  OS(function () {
    var d = l,
      h = Kg(n),
      g = [];
    e: {
      var y = nE.get(e);
      if (y !== void 0) {
        var m = em,
          w = e;
        switch (e) {
          case "keypress":
            if (Xa(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = hD;
            break;
          case "focusin":
            (w = "focus"), (m = xp);
            break;
          case "focusout":
            (w = "blur"), (m = xp);
            break;
          case "beforeblur":
          case "afterblur":
            m = xp;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = w1;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = nD;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = vD;
            break;
          case ZS:
          case JS:
          case eE:
            m = oD;
            break;
          case tE:
            m = xD;
            break;
          case "scroll":
            m = eD;
            break;
          case "wheel":
            m = SD;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = uD;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = E1;
        }
        var E = (t & 4) !== 0,
          A = !E && e === "scroll",
          v = E ? (y !== null ? y + "Capture" : null) : y;
        E = [];
        for (var S = d, _; S !== null; ) {
          _ = S;
          var P = _.stateNode;
          if (
            (_.tag === 5 &&
              P !== null &&
              ((_ = P),
              v !== null && ((P = is(S, v)), P != null && E.push(fs(S, P, _)))),
            A)
          )
            break;
          S = S.return;
        }
        0 < E.length &&
          ((y = new m(y, w, null, n, h)), g.push({ event: y, listeners: E }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Ih &&
            (w = n.relatedTarget || n.fromElement) &&
            (Oo(w) || w[di]))
        )
          break e;
        if (
          (m || y) &&
          ((y =
            h.window === h
              ? h
              : (y = h.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          m
            ? ((w = n.relatedTarget || n.toElement),
              (m = d),
              (w = w ? Oo(w) : null),
              w !== null &&
                ((A = Go(w)), w !== A || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((m = null), (w = d)),
          m !== w)
        ) {
          if (
            ((E = w1),
            (P = "onMouseLeave"),
            (v = "onMouseEnter"),
            (S = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = E1),
              (P = "onPointerLeave"),
              (v = "onPointerEnter"),
              (S = "pointer")),
            (A = m == null ? y : El(m)),
            (_ = w == null ? y : El(w)),
            (y = new E(P, S + "leave", m, n, h)),
            (y.target = A),
            (y.relatedTarget = _),
            (P = null),
            Oo(h) === d &&
              ((E = new E(v, S + "enter", w, n, h)),
              (E.target = _),
              (E.relatedTarget = A),
              (P = E)),
            (A = P),
            m && w)
          )
            t: {
              for (E = m, v = w, S = 0, _ = E; _; _ = fl(_)) S++;
              for (_ = 0, P = v; P; P = fl(P)) _++;
              for (; 0 < S - _; ) (E = fl(E)), S--;
              for (; 0 < _ - S; ) (v = fl(v)), _--;
              for (; S--; ) {
                if (E === v || (v !== null && E === v.alternate)) break t;
                (E = fl(E)), (v = fl(v));
              }
              E = null;
            }
          else E = null;
          m !== null && D1(g, y, m, E, !1),
            w !== null && A !== null && D1(g, A, w, E, !0);
        }
      }
      e: {
        if (
          ((y = d ? El(d) : window),
          (m = y.nodeName && y.nodeName.toLowerCase()),
          m === "select" || (m === "input" && y.type === "file"))
        )
          var D = ID;
        else if (_1(y))
          if (GS) D = AD;
          else {
            D = RD;
            var R = TD;
          }
        else
          (m = y.nodeName) &&
            m.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (D = PD);
        if (D && (D = D(e, d))) {
          qS(g, D, n, h);
          break e;
        }
        R && R(e, y, d),
          e === "focusout" &&
            (R = y._wrapperState) &&
            R.controlled &&
            y.type === "number" &&
            Ch(y, "number", y.value);
      }
      switch (((R = d ? El(d) : window), e)) {
        case "focusin":
          (_1(R) || R.contentEditable === "true") &&
            ((wl = R), (Mh = d), (Wu = null));
          break;
        case "focusout":
          Wu = Mh = wl = null;
          break;
        case "mousedown":
          Nh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Nh = !1), R1(g, n, h);
          break;
        case "selectionchange":
          if (MD) break;
        case "keydown":
        case "keyup":
          R1(g, n, h);
      }
      var F;
      if (nm)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        xl
          ? WS(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (jS &&
          n.locale !== "ko" &&
          (xl || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && xl && (F = HS())
            : (($i = h),
              (Jg = "value" in $i ? $i.value : $i.textContent),
              (xl = !0))),
        (R = yc(d, z)),
        0 < R.length &&
          ((z = new S1(z, e, null, n, h)),
          g.push({ event: z, listeners: R }),
          F ? (z.data = F) : ((F = VS(n)), F !== null && (z.data = F)))),
        (F = CD ? kD(e, n) : _D(e, n)) &&
          ((d = yc(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new S1("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: d }),
            (h.data = F)));
    }
    rE(g, t);
  });
}
function fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = is(e, n)),
      l != null && r.unshift(fs(e, l, i)),
      (l = is(e, t)),
      l != null && r.push(fs(e, l, i))),
      (e = e.return);
  }
  return r;
}
function fl(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function D1(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      f = a.alternate,
      d = a.stateNode;
    if (f !== null && f === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      i
        ? ((f = is(n, l)), f != null && s.unshift(fs(n, f, a)))
        : i || ((f = is(n, l)), f != null && s.push(fs(n, f, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var $D = /\r\n?/g,
  BD = /\u0000|\uFFFD/g;
function L1(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $D,
      `
`
    )
    .replace(BD, "");
}
function Da(e, t, n) {
  if (((t = L1(t)), L1(e) !== t && n)) throw Error(te(425));
}
function xc() {}
var Fh = null,
  zh = null;
function $h(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bh = typeof setTimeout == "function" ? setTimeout : void 0,
  UD = typeof clearTimeout == "function" ? clearTimeout : void 0,
  M1 = typeof Promise == "function" ? Promise : void 0,
  HD =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof M1 < "u"
      ? function (e) {
          return M1.resolve(null).then(e).catch(jD);
        }
      : Bh;
function jD(e) {
  setTimeout(function () {
    throw e;
  });
}
function Op(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), us(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  us(t);
}
function Wi(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function N1(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tu = Math.random().toString(36).slice(2),
  $r = "__reactFiber$" + tu,
  ds = "__reactProps$" + tu,
  di = "__reactContainer$" + tu,
  Uh = "__reactEvents$" + tu,
  WD = "__reactListeners$" + tu,
  VD = "__reactHandles$" + tu;
function Oo(e) {
  var t = e[$r];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[di] || n[$r])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = N1(e); e !== null; ) {
          if ((n = e[$r])) return n;
          e = N1(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Os(e) {
  return (
    (e = e[$r] || e[di]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function El(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(te(33));
}
function uf(e) {
  return e[ds] || null;
}
var Hh = [],
  Cl = -1;
function uo(e) {
  return { current: e };
}
function lt(e) {
  0 > Cl || ((e.current = Hh[Cl]), (Hh[Cl] = null), Cl--);
}
function tt(e, t) {
  Cl++, (Hh[Cl] = e.current), (e.current = t);
}
var to = {},
  tn = uo(to),
  Cn = uo(!1),
  Mo = to;
function jl(e, t) {
  var n = e.type.contextTypes;
  if (!n) return to;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function kn(e) {
  return (e = e.childContextTypes), e != null;
}
function wc() {
  lt(Cn), lt(tn);
}
function F1(e, t, n) {
  if (tn.current !== to) throw Error(te(168));
  tt(tn, t), tt(Cn, n);
}
function oE(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(te(108, TA(e) || "Unknown", i));
  return vt({}, n, r);
}
function Sc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || to),
    (Mo = tn.current),
    tt(tn, e),
    tt(Cn, Cn.current),
    !0
  );
}
function z1(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(te(169));
  n
    ? ((e = oE(e, t, Mo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      lt(Cn),
      lt(tn),
      tt(tn, e))
    : lt(Cn),
    tt(Cn, n);
}
var li = null,
  sf = !1,
  Ip = !1;
function lE(e) {
  li === null ? (li = [e]) : li.push(e);
}
function qD(e) {
  (sf = !0), lE(e);
}
function so() {
  if (!Ip && li !== null) {
    Ip = !0;
    var e = 0,
      t = Qe;
    try {
      var n = li;
      for (Qe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (li = null), (sf = !1);
    } catch (i) {
      throw (li !== null && (li = li.slice(e + 1)), PS(Qg, so), i);
    } finally {
      (Qe = t), (Ip = !1);
    }
  }
  return null;
}
var kl = [],
  _l = 0,
  Ec = null,
  Cc = 0,
  ir = [],
  or = 0,
  No = null,
  ui = 1,
  si = "";
function So(e, t) {
  (kl[_l++] = Cc), (kl[_l++] = Ec), (Ec = e), (Cc = t);
}
function uE(e, t, n) {
  (ir[or++] = ui), (ir[or++] = si), (ir[or++] = No), (No = e);
  var r = ui;
  e = si;
  var i = 32 - Ir(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ir(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ui = (1 << (32 - Ir(t) + i)) | (n << i) | r),
      (si = l + e);
  } else (ui = (1 << l) | (n << i) | r), (si = e);
}
function im(e) {
  e.return !== null && (So(e, 1), uE(e, 1, 0));
}
function om(e) {
  for (; e === Ec; )
    (Ec = kl[--_l]), (kl[_l] = null), (Cc = kl[--_l]), (kl[_l] = null);
  for (; e === No; )
    (No = ir[--or]),
      (ir[or] = null),
      (si = ir[--or]),
      (ir[or] = null),
      (ui = ir[--or]),
      (ir[or] = null);
}
var zn = null,
  Nn = null,
  ft = !1,
  br = null;
function sE(e, t) {
  var n = sr(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $1(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (zn = e), (Nn = Wi(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (zn = e), (Nn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = No !== null ? { id: ui, overflow: si } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = sr(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (zn = e),
            (Nn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function jh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wh(e) {
  if (ft) {
    var t = Nn;
    if (t) {
      var n = t;
      if (!$1(e, t)) {
        if (jh(e)) throw Error(te(418));
        t = Wi(n.nextSibling);
        var r = zn;
        t && $1(e, t)
          ? sE(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ft = !1), (zn = e));
      }
    } else {
      if (jh(e)) throw Error(te(418));
      (e.flags = (e.flags & -4097) | 2), (ft = !1), (zn = e);
    }
  }
}
function B1(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  zn = e;
}
function La(e) {
  if (e !== zn) return !1;
  if (!ft) return B1(e), (ft = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$h(e.type, e.memoizedProps))),
    t && (t = Nn))
  ) {
    if (jh(e)) throw (aE(), Error(te(418)));
    for (; t; ) sE(e, t), (t = Wi(t.nextSibling));
  }
  if ((B1(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(te(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Nn = Wi(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Nn = null;
    }
  } else Nn = zn ? Wi(e.stateNode.nextSibling) : null;
  return !0;
}
function aE() {
  for (var e = Nn; e; ) e = Wi(e.nextSibling);
}
function Wl() {
  (Nn = zn = null), (ft = !1);
}
function lm(e) {
  br === null ? (br = [e]) : br.push(e);
}
var GD = mi.ReactCurrentBatchConfig;
function kr(e, t) {
  if (e && e.defaultProps) {
    (t = vt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var kc = uo(null),
  _c = null,
  bl = null,
  um = null;
function sm() {
  um = bl = _c = null;
}
function am(e) {
  var t = kc.current;
  lt(kc), (e._currentValue = t);
}
function Vh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ll(e, t) {
  (_c = e),
    (um = bl = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Sn = !0), (e.firstContext = null));
}
function dr(e) {
  var t = e._currentValue;
  if (um !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bl === null)) {
      if (_c === null) throw Error(te(308));
      (bl = e), (_c.dependencies = { lanes: 0, firstContext: e });
    } else bl = bl.next = e;
  return t;
}
var Io = null;
function cm(e) {
  Io === null ? (Io = [e]) : Io.push(e);
}
function cE(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), cm(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    pi(e, r)
  );
}
function pi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Li = !1;
function fm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fE(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ci(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vi(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (Be & 2) !== 0)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      pi(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), cm(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pi(e, n)
  );
}
function Za(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yg(e, n);
  }
}
function U1(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function bc(e, t, n, r) {
  var i = e.updateQueue;
  Li = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var f = a,
      d = f.next;
    (f.next = null), s === null ? (l = d) : (s.next = d), (s = f);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== s &&
        (a === null ? (h.firstBaseUpdate = d) : (a.next = d),
        (h.lastBaseUpdate = f)));
  }
  if (l !== null) {
    var g = i.baseState;
    (s = 0), (h = d = f = null), (a = l);
    do {
      var y = a.lane,
        m = a.eventTime;
      if ((r & y) === y) {
        h !== null &&
          (h = h.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            E = a;
          switch (((y = t), (m = n), E.tag)) {
            case 1:
              if (((w = E.payload), typeof w == "function")) {
                g = w.call(m, g, y);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = E.payload),
                (y = typeof w == "function" ? w.call(m, g, y) : w),
                y == null)
              )
                break e;
              g = vt({}, g, y);
              break e;
            case 2:
              Li = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = i.effects),
          y === null ? (i.effects = [a]) : y.push(a));
      } else
        (m = {
          eventTime: m,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((d = h = m), (f = g)) : (h = h.next = m),
          (s |= y);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (y = a),
          (a = y.next),
          (y.next = null),
          (i.lastBaseUpdate = y),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (f = g),
      (i.baseState = f),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (zo |= s), (e.lanes = s), (e.memoizedState = g);
  }
}
function H1(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(te(191, i));
        i.call(r);
      }
    }
}
var dE = new cS.Component().refs;
function qh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : vt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var af = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Go(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = cn(),
      i = Gi(e),
      l = ci(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Vi(e, l, i)),
      t !== null && (Tr(t, e, i, r), Za(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = cn(),
      i = Gi(e),
      l = ci(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Vi(e, l, i)),
      t !== null && (Tr(t, e, i, r), Za(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = cn(),
      r = Gi(e),
      i = ci(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Vi(e, i, r)),
      t !== null && (Tr(t, e, r, n), Za(t, e, r));
  },
};
function j1(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !as(n, r) || !as(i, l)
      : !0
  );
}
function pE(e, t, n) {
  var r = !1,
    i = to,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = dr(l))
      : ((i = kn(t) ? Mo : tn.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? jl(e, i) : to)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = af),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function W1(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && af.enqueueReplaceState(t, t.state, null);
}
function Gh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = dE), fm(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = dr(l))
    : ((l = kn(t) ? Mo : tn.current), (i.context = jl(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (qh(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && af.enqueueReplaceState(i, i.state, null),
      bc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Iu(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(te(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(te(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === dE && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(te(284));
    if (!n._owner) throw Error(te(290, e));
  }
  return e;
}
function Ma(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      te(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function V1(e) {
  var t = e._init;
  return t(e._payload);
}
function hE(e) {
  function t(v, S) {
    if (e) {
      var _ = v.deletions;
      _ === null ? ((v.deletions = [S]), (v.flags |= 16)) : _.push(S);
    }
  }
  function n(v, S) {
    if (!e) return null;
    for (; S !== null; ) t(v, S), (S = S.sibling);
    return null;
  }
  function r(v, S) {
    for (v = new Map(); S !== null; )
      S.key !== null ? v.set(S.key, S) : v.set(S.index, S), (S = S.sibling);
    return v;
  }
  function i(v, S) {
    return (v = Ki(v, S)), (v.index = 0), (v.sibling = null), v;
  }
  function l(v, S, _) {
    return (
      (v.index = _),
      e
        ? ((_ = v.alternate),
          _ !== null
            ? ((_ = _.index), _ < S ? ((v.flags |= 2), S) : _)
            : ((v.flags |= 2), S))
        : ((v.flags |= 1048576), S)
    );
  }
  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, S, _, P) {
    return S === null || S.tag !== 6
      ? ((S = Mp(_, v.mode, P)), (S.return = v), S)
      : ((S = i(S, _)), (S.return = v), S);
  }
  function f(v, S, _, P) {
    var D = _.type;
    return D === yl
      ? h(v, S, _.props.children, P, _.key)
      : S !== null &&
        (S.elementType === D ||
          (typeof D == "object" &&
            D !== null &&
            D.$$typeof === Di &&
            V1(D) === S.type))
      ? ((P = i(S, _.props)), (P.ref = Iu(v, S, _)), (P.return = v), P)
      : ((P = ic(_.type, _.key, _.props, null, v.mode, P)),
        (P.ref = Iu(v, S, _)),
        (P.return = v),
        P);
  }
  function d(v, S, _, P) {
    return S === null ||
      S.tag !== 4 ||
      S.stateNode.containerInfo !== _.containerInfo ||
      S.stateNode.implementation !== _.implementation
      ? ((S = Np(_, v.mode, P)), (S.return = v), S)
      : ((S = i(S, _.children || [])), (S.return = v), S);
  }
  function h(v, S, _, P, D) {
    return S === null || S.tag !== 7
      ? ((S = Ao(_, v.mode, P, D)), (S.return = v), S)
      : ((S = i(S, _)), (S.return = v), S);
  }
  function g(v, S, _) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (S = Mp("" + S, v.mode, _)), (S.return = v), S;
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ka:
          return (
            (_ = ic(S.type, S.key, S.props, null, v.mode, _)),
            (_.ref = Iu(v, null, S)),
            (_.return = v),
            _
          );
        case vl:
          return (S = Np(S, v.mode, _)), (S.return = v), S;
        case Di:
          var P = S._init;
          return g(v, P(S._payload), _);
      }
      if (Lu(S) || Cu(S))
        return (S = Ao(S, v.mode, _, null)), (S.return = v), S;
      Ma(v, S);
    }
    return null;
  }
  function y(v, S, _, P) {
    var D = S !== null ? S.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return D !== null ? null : a(v, S, "" + _, P);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ka:
          return _.key === D ? f(v, S, _, P) : null;
        case vl:
          return _.key === D ? d(v, S, _, P) : null;
        case Di:
          return (D = _._init), y(v, S, D(_._payload), P);
      }
      if (Lu(_) || Cu(_)) return D !== null ? null : h(v, S, _, P, null);
      Ma(v, _);
    }
    return null;
  }
  function m(v, S, _, P, D) {
    if ((typeof P == "string" && P !== "") || typeof P == "number")
      return (v = v.get(_) || null), a(S, v, "" + P, D);
    if (typeof P == "object" && P !== null) {
      switch (P.$$typeof) {
        case ka:
          return (v = v.get(P.key === null ? _ : P.key) || null), f(S, v, P, D);
        case vl:
          return (v = v.get(P.key === null ? _ : P.key) || null), d(S, v, P, D);
        case Di:
          var R = P._init;
          return m(v, S, _, R(P._payload), D);
      }
      if (Lu(P) || Cu(P)) return (v = v.get(_) || null), h(S, v, P, D, null);
      Ma(S, P);
    }
    return null;
  }
  function w(v, S, _, P) {
    for (
      var D = null, R = null, F = S, z = (S = 0), q = null;
      F !== null && z < _.length;
      z++
    ) {
      F.index > z ? ((q = F), (F = null)) : (q = F.sibling);
      var K = y(v, F, _[z], P);
      if (K === null) {
        F === null && (F = q);
        break;
      }
      e && F && K.alternate === null && t(v, F),
        (S = l(K, S, z)),
        R === null ? (D = K) : (R.sibling = K),
        (R = K),
        (F = q);
    }
    if (z === _.length) return n(v, F), ft && So(v, z), D;
    if (F === null) {
      for (; z < _.length; z++)
        (F = g(v, _[z], P)),
          F !== null &&
            ((S = l(F, S, z)), R === null ? (D = F) : (R.sibling = F), (R = F));
      return ft && So(v, z), D;
    }
    for (F = r(v, F); z < _.length; z++)
      (q = m(F, v, z, _[z], P)),
        q !== null &&
          (e && q.alternate !== null && F.delete(q.key === null ? z : q.key),
          (S = l(q, S, z)),
          R === null ? (D = q) : (R.sibling = q),
          (R = q));
    return (
      e &&
        F.forEach(function (B) {
          return t(v, B);
        }),
      ft && So(v, z),
      D
    );
  }
  function E(v, S, _, P) {
    var D = Cu(_);
    if (typeof D != "function") throw Error(te(150));
    if (((_ = D.call(_)), _ == null)) throw Error(te(151));
    for (
      var R = (D = null), F = S, z = (S = 0), q = null, K = _.next();
      F !== null && !K.done;
      z++, K = _.next()
    ) {
      F.index > z ? ((q = F), (F = null)) : (q = F.sibling);
      var B = y(v, F, K.value, P);
      if (B === null) {
        F === null && (F = q);
        break;
      }
      e && F && B.alternate === null && t(v, F),
        (S = l(B, S, z)),
        R === null ? (D = B) : (R.sibling = B),
        (R = B),
        (F = q);
    }
    if (K.done) return n(v, F), ft && So(v, z), D;
    if (F === null) {
      for (; !K.done; z++, K = _.next())
        (K = g(v, K.value, P)),
          K !== null &&
            ((S = l(K, S, z)), R === null ? (D = K) : (R.sibling = K), (R = K));
      return ft && So(v, z), D;
    }
    for (F = r(v, F); !K.done; z++, K = _.next())
      (K = m(F, v, z, K.value, P)),
        K !== null &&
          (e && K.alternate !== null && F.delete(K.key === null ? z : K.key),
          (S = l(K, S, z)),
          R === null ? (D = K) : (R.sibling = K),
          (R = K));
    return (
      e &&
        F.forEach(function (X) {
          return t(v, X);
        }),
      ft && So(v, z),
      D
    );
  }
  function A(v, S, _, P) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === yl &&
        _.key === null &&
        (_ = _.props.children),
      typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case ka:
          e: {
            for (var D = _.key, R = S; R !== null; ) {
              if (R.key === D) {
                if (((D = _.type), D === yl)) {
                  if (R.tag === 7) {
                    n(v, R.sibling),
                      (S = i(R, _.props.children)),
                      (S.return = v),
                      (v = S);
                    break e;
                  }
                } else if (
                  R.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === Di &&
                    V1(D) === R.type)
                ) {
                  n(v, R.sibling),
                    (S = i(R, _.props)),
                    (S.ref = Iu(v, R, _)),
                    (S.return = v),
                    (v = S);
                  break e;
                }
                n(v, R);
                break;
              } else t(v, R);
              R = R.sibling;
            }
            _.type === yl
              ? ((S = Ao(_.props.children, v.mode, P, _.key)),
                (S.return = v),
                (v = S))
              : ((P = ic(_.type, _.key, _.props, null, v.mode, P)),
                (P.ref = Iu(v, S, _)),
                (P.return = v),
                (v = P));
          }
          return s(v);
        case vl:
          e: {
            for (R = _.key; S !== null; ) {
              if (S.key === R)
                if (
                  S.tag === 4 &&
                  S.stateNode.containerInfo === _.containerInfo &&
                  S.stateNode.implementation === _.implementation
                ) {
                  n(v, S.sibling),
                    (S = i(S, _.children || [])),
                    (S.return = v),
                    (v = S);
                  break e;
                } else {
                  n(v, S);
                  break;
                }
              else t(v, S);
              S = S.sibling;
            }
            (S = Np(_, v.mode, P)), (S.return = v), (v = S);
          }
          return s(v);
        case Di:
          return (R = _._init), A(v, S, R(_._payload), P);
      }
      if (Lu(_)) return w(v, S, _, P);
      if (Cu(_)) return E(v, S, _, P);
      Ma(v, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        S !== null && S.tag === 6
          ? (n(v, S.sibling), (S = i(S, _)), (S.return = v), (v = S))
          : (n(v, S), (S = Mp(_, v.mode, P)), (S.return = v), (v = S)),
        s(v))
      : n(v, S);
  }
  return A;
}
var Vl = hE(!0),
  gE = hE(!1),
  Is = {},
  jr = uo(Is),
  ps = uo(Is),
  hs = uo(Is);
function To(e) {
  if (e === Is) throw Error(te(174));
  return e;
}
function dm(e, t) {
  switch ((tt(hs, t), tt(ps, e), tt(jr, Is), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _h(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _h(t, e));
  }
  lt(jr), tt(jr, t);
}
function ql() {
  lt(jr), lt(ps), lt(hs);
}
function mE(e) {
  To(hs.current);
  var t = To(jr.current),
    n = _h(t, e.type);
  t !== n && (tt(ps, e), tt(jr, n));
}
function pm(e) {
  ps.current === e && (lt(jr), lt(ps));
}
var ht = uo(0);
function Oc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Tp = [];
function hm() {
  for (var e = 0; e < Tp.length; e++)
    Tp[e]._workInProgressVersionPrimary = null;
  Tp.length = 0;
}
var Ja = mi.ReactCurrentDispatcher,
  Rp = mi.ReactCurrentBatchConfig,
  Fo = 0,
  mt = null,
  Rt = null,
  Mt = null,
  Ic = !1,
  Vu = !1,
  gs = 0,
  KD = 0;
function Qt() {
  throw Error(te(321));
}
function gm(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rr(e[n], t[n])) return !1;
  return !0;
}
function mm(e, t, n, r, i, l) {
  if (
    ((Fo = l),
    (mt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ja.current = e === null || e.memoizedState === null ? ZD : JD),
    (e = n(r, i)),
    Vu)
  ) {
    l = 0;
    do {
      if (((Vu = !1), (gs = 0), 25 <= l)) throw Error(te(301));
      (l += 1),
        (Mt = Rt = null),
        (t.updateQueue = null),
        (Ja.current = eL),
        (e = n(r, i));
    } while (Vu);
  }
  if (
    ((Ja.current = Tc),
    (t = Rt !== null && Rt.next !== null),
    (Fo = 0),
    (Mt = Rt = mt = null),
    (Ic = !1),
    t)
  )
    throw Error(te(300));
  return e;
}
function vm() {
  var e = gs !== 0;
  return (gs = 0), e;
}
function Fr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Mt === null ? (mt.memoizedState = Mt = e) : (Mt = Mt.next = e), Mt;
}
function pr() {
  if (Rt === null) {
    var e = mt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Rt.next;
  var t = Mt === null ? mt.memoizedState : Mt.next;
  if (t !== null) (Mt = t), (Rt = e);
  else {
    if (e === null) throw Error(te(310));
    (Rt = e),
      (e = {
        memoizedState: Rt.memoizedState,
        baseState: Rt.baseState,
        baseQueue: Rt.baseQueue,
        queue: Rt.queue,
        next: null,
      }),
      Mt === null ? (mt.memoizedState = Mt = e) : (Mt = Mt.next = e);
  }
  return Mt;
}
function ms(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pp(e) {
  var t = pr(),
    n = t.queue;
  if (n === null) throw Error(te(311));
  n.lastRenderedReducer = e;
  var r = Rt,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      f = null,
      d = l;
    do {
      var h = d.lane;
      if ((Fo & h) === h)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var g = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        f === null ? ((a = f = g), (s = r)) : (f = f.next = g),
          (mt.lanes |= h),
          (zo |= h);
      }
      d = d.next;
    } while (d !== null && d !== l);
    f === null ? (s = r) : (f.next = a),
      Rr(r, t.memoizedState) || (Sn = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = f),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (mt.lanes |= l), (zo |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ap(e) {
  var t = pr(),
    n = t.queue;
  if (n === null) throw Error(te(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Rr(l, t.memoizedState) || (Sn = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function vE() {}
function yE(e, t) {
  var n = mt,
    r = pr(),
    i = t(),
    l = !Rr(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (Sn = !0)),
    (r = r.queue),
    ym(SE.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Mt !== null && Mt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vs(9, wE.bind(null, n, r, i, t), void 0, null),
      Nt === null)
    )
      throw Error(te(349));
    (Fo & 30) !== 0 || xE(n, t, i);
  }
  return i;
}
function xE(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = mt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (mt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wE(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), EE(t) && CE(e);
}
function SE(e, t, n) {
  return n(function () {
    EE(t) && CE(e);
  });
}
function EE(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rr(e, n);
  } catch {
    return !0;
  }
}
function CE(e) {
  var t = pi(e, 1);
  t !== null && Tr(t, e, 1, -1);
}
function q1(e) {
  var t = Fr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ms,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = XD.bind(null, mt, e)),
    [t.memoizedState, e]
  );
}
function vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = mt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (mt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function kE() {
  return pr().memoizedState;
}
function ec(e, t, n, r) {
  var i = Fr();
  (mt.flags |= e),
    (i.memoizedState = vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function cf(e, t, n, r) {
  var i = pr();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Rt !== null) {
    var s = Rt.memoizedState;
    if (((l = s.destroy), r !== null && gm(r, s.deps))) {
      i.memoizedState = vs(t, n, l, r);
      return;
    }
  }
  (mt.flags |= e), (i.memoizedState = vs(1 | t, n, l, r));
}
function G1(e, t) {
  return ec(8390656, 8, e, t);
}
function ym(e, t) {
  return cf(2048, 8, e, t);
}
function _E(e, t) {
  return cf(4, 2, e, t);
}
function bE(e, t) {
  return cf(4, 4, e, t);
}
function OE(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function IE(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cf(4, 4, OE.bind(null, t, e), n)
  );
}
function xm() {}
function TE(e, t) {
  var n = pr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gm(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function RE(e, t) {
  var n = pr();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gm(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function PE(e, t, n) {
  return (Fo & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (Sn = !0)), (e.memoizedState = n))
    : (Rr(n, t) || ((n = LS()), (mt.lanes |= n), (zo |= n), (e.baseState = !0)),
      t);
}
function QD(e, t) {
  var n = Qe;
  (Qe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Rp.transition;
  Rp.transition = {};
  try {
    e(!1), t();
  } finally {
    (Qe = n), (Rp.transition = r);
  }
}
function AE() {
  return pr().memoizedState;
}
function YD(e, t, n) {
  var r = Gi(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    DE(e))
  )
    LE(t, n);
  else if (((n = cE(e, t, n, r)), n !== null)) {
    var i = cn();
    Tr(n, e, r, i), ME(n, t, r);
  }
}
function XD(e, t, n) {
  var r = Gi(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (DE(e)) LE(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Rr(a, s))) {
          var f = t.interleaved;
          f === null
            ? ((i.next = i), cm(t))
            : ((i.next = f.next), (f.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = cE(e, t, i, r)),
      n !== null && ((i = cn()), Tr(n, e, r, i), ME(n, t, r));
  }
}
function DE(e) {
  var t = e.alternate;
  return e === mt || (t !== null && t === mt);
}
function LE(e, t) {
  Vu = Ic = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ME(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yg(e, n);
  }
}
var Tc = {
    readContext: dr,
    useCallback: Qt,
    useContext: Qt,
    useEffect: Qt,
    useImperativeHandle: Qt,
    useInsertionEffect: Qt,
    useLayoutEffect: Qt,
    useMemo: Qt,
    useReducer: Qt,
    useRef: Qt,
    useState: Qt,
    useDebugValue: Qt,
    useDeferredValue: Qt,
    useTransition: Qt,
    useMutableSource: Qt,
    useSyncExternalStore: Qt,
    useId: Qt,
    unstable_isNewReconciler: !1,
  },
  ZD = {
    readContext: dr,
    useCallback: function (e, t) {
      return (Fr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dr,
    useEffect: G1,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ec(4194308, 4, OE.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ec(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ec(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = YD.bind(null, mt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: q1,
    useDebugValue: xm,
    useDeferredValue: function (e) {
      return (Fr().memoizedState = e);
    },
    useTransition: function () {
      var e = q1(!1),
        t = e[0];
      return (e = QD.bind(null, e[1])), (Fr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = mt,
        i = Fr();
      if (ft) {
        if (n === void 0) throw Error(te(407));
        n = n();
      } else {
        if (((n = t()), Nt === null)) throw Error(te(349));
        (Fo & 30) !== 0 || xE(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        G1(SE.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        vs(9, wE.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fr(),
        t = Nt.identifierPrefix;
      if (ft) {
        var n = si,
          r = ui;
        (n = (r & ~(1 << (32 - Ir(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = KD++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  JD = {
    readContext: dr,
    useCallback: TE,
    useContext: dr,
    useEffect: ym,
    useImperativeHandle: IE,
    useInsertionEffect: _E,
    useLayoutEffect: bE,
    useMemo: RE,
    useReducer: Pp,
    useRef: kE,
    useState: function () {
      return Pp(ms);
    },
    useDebugValue: xm,
    useDeferredValue: function (e) {
      var t = pr();
      return PE(t, Rt.memoizedState, e);
    },
    useTransition: function () {
      var e = Pp(ms)[0],
        t = pr().memoizedState;
      return [e, t];
    },
    useMutableSource: vE,
    useSyncExternalStore: yE,
    useId: AE,
    unstable_isNewReconciler: !1,
  },
  eL = {
    readContext: dr,
    useCallback: TE,
    useContext: dr,
    useEffect: ym,
    useImperativeHandle: IE,
    useInsertionEffect: _E,
    useLayoutEffect: bE,
    useMemo: RE,
    useReducer: Ap,
    useRef: kE,
    useState: function () {
      return Ap(ms);
    },
    useDebugValue: xm,
    useDeferredValue: function (e) {
      var t = pr();
      return Rt === null ? (t.memoizedState = e) : PE(t, Rt.memoizedState, e);
    },
    useTransition: function () {
      var e = Ap(ms)[0],
        t = pr().memoizedState;
      return [e, t];
    },
    useMutableSource: vE,
    useSyncExternalStore: yE,
    useId: AE,
    unstable_isNewReconciler: !1,
  };
function Gl(e, t) {
  try {
    var n = "",
      r = t;
    do (n += IA(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Dp(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Kh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tL = typeof WeakMap == "function" ? WeakMap : Map;
function NE(e, t, n) {
  (n = ci(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pc || ((Pc = !0), (ig = r)), Kh(e, t);
    }),
    n
  );
}
function FE(e, t, n) {
  (n = ci(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Kh(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Kh(e, t),
          typeof r != "function" &&
            (qi === null ? (qi = new Set([this])) : qi.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function K1(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tL();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = gL.bind(null, e, t, n)), t.then(e, e));
}
function Q1(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Y1(e, t, n, r, i) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ci(-1, 1)), (t.tag = 2), Vi(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = i), e);
}
var nL = mi.ReactCurrentOwner,
  Sn = !1;
function sn(e, t, n, r) {
  t.child = e === null ? gE(t, null, n, r) : Vl(t, e.child, n, r);
}
function X1(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Ll(t, i),
    (r = mm(e, t, n, r, l, i)),
    (n = vm()),
    e !== null && !Sn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        hi(e, t, i))
      : (ft && n && im(t), (t.flags |= 1), sn(e, t, r, i), t.child)
  );
}
function Z1(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Om(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), zE(e, t, l, r, i))
      : ((e = ic(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), (e.lanes & i) === 0)) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : as), n(s, r) && e.ref === t.ref)
    )
      return hi(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ki(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zE(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (as(l, r) && e.ref === t.ref)
      if (((Sn = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        (e.flags & 131072) !== 0 && (Sn = !0);
      else return (t.lanes = e.lanes), hi(e, t, i);
  }
  return Qh(e, t, n, r, i);
}
function $E(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        tt(Il, Ln),
        (Ln |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          tt(Il, Ln),
          (Ln |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        tt(Il, Ln),
        (Ln |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      tt(Il, Ln),
      (Ln |= r);
  return sn(e, t, i, n), t.child;
}
function BE(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qh(e, t, n, r, i) {
  var l = kn(n) ? Mo : tn.current;
  return (
    (l = jl(t, l)),
    Ll(t, i),
    (n = mm(e, t, n, r, l, i)),
    (r = vm()),
    e !== null && !Sn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        hi(e, t, i))
      : (ft && r && im(t), (t.flags |= 1), sn(e, t, n, i), t.child)
  );
}
function J1(e, t, n, r, i) {
  if (kn(n)) {
    var l = !0;
    Sc(t);
  } else l = !1;
  if ((Ll(t, i), t.stateNode === null))
    tc(e, t), pE(t, n, r), Gh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var f = s.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = dr(d))
      : ((d = kn(n) ? Mo : tn.current), (d = jl(t, d)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || f !== d) && W1(t, s, r, d)),
      (Li = !1);
    var y = t.memoizedState;
    (s.state = y),
      bc(t, r, s, i),
      (f = t.memoizedState),
      a !== r || y !== f || Cn.current || Li
        ? (typeof h == "function" && (qh(t, n, h, r), (f = t.memoizedState)),
          (a = Li || j1(t, n, a, r, y, f, d))
            ? (g ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = f)),
          (s.props = r),
          (s.state = f),
          (s.context = d),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      fE(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : kr(t.type, a)),
      (s.props = d),
      (g = t.pendingProps),
      (y = s.context),
      (f = n.contextType),
      typeof f == "object" && f !== null
        ? (f = dr(f))
        : ((f = kn(n) ? Mo : tn.current), (f = jl(t, f)));
    var m = n.getDerivedStateFromProps;
    (h =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== g || y !== f) && W1(t, s, r, f)),
      (Li = !1),
      (y = t.memoizedState),
      (s.state = y),
      bc(t, r, s, i);
    var w = t.memoizedState;
    a !== g || y !== w || Cn.current || Li
      ? (typeof m == "function" && (qh(t, n, m, r), (w = t.memoizedState)),
        (d = Li || j1(t, n, d, r, y, w, f) || !1)
          ? (h ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, f),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, f)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = f),
        (r = d))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Yh(e, t, n, r, l, i);
}
function Yh(e, t, n, r, i, l) {
  BE(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && z1(t, n, !1), hi(e, t, l);
  (r = t.stateNode), (nL.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Vl(t, e.child, null, l)), (t.child = Vl(t, null, a, l)))
      : sn(e, t, a, l),
    (t.memoizedState = r.state),
    i && z1(t, n, !0),
    t.child
  );
}
function UE(e) {
  var t = e.stateNode;
  t.pendingContext
    ? F1(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && F1(e, t.context, !1),
    dm(e, t.containerInfo);
}
function ex(e, t, n, r, i) {
  return Wl(), lm(i), (t.flags |= 256), sn(e, t, n, r), t.child;
}
var Xh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function HE(e, t, n) {
  var r = t.pendingProps,
    i = ht.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    tt(ht, i & 1),
    e === null)
  )
    return (
      Wh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              (r & 1) === 0 && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = pf(s, r, 0, null)),
              (e = Ao(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Zh(n)),
              (t.memoizedState = Xh),
              e)
            : wm(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return rL(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var f = { mode: "hidden", children: r.children };
    return (
      (s & 1) === 0 && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = f),
          (t.deletions = null))
        : ((r = Ki(i, f)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Ki(a, l)) : ((l = Ao(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Zh(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xh),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Ki(l, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wm(e, t) {
  return (
    (t = pf({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Na(e, t, n, r) {
  return (
    r !== null && lm(r),
    Vl(t, e.child, null, n),
    (e = wm(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rL(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Dp(Error(te(422)))), Na(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = pf({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Ao(l, i, s, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        (t.mode & 1) !== 0 && Vl(t, e.child, null, s),
        (t.child.memoizedState = Zh(s)),
        (t.memoizedState = Xh),
        l);
  if ((t.mode & 1) === 0) return Na(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a), (l = Error(te(419))), (r = Dp(l, r, void 0)), Na(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), Sn || a)) {
    if (((r = Nt), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = (i & (r.suspendedLanes | s)) !== 0 ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), pi(e, i), Tr(r, e, i, -1));
    }
    return bm(), (r = Dp(Error(te(421)))), Na(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mL.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Nn = Wi(i.nextSibling)),
      (zn = t),
      (ft = !0),
      (br = null),
      e !== null &&
        ((ir[or++] = ui),
        (ir[or++] = si),
        (ir[or++] = No),
        (ui = e.id),
        (si = e.overflow),
        (No = t)),
      (t = wm(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tx(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vh(e.return, t, n);
}
function Lp(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function jE(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((sn(e, t, r.children, n), (r = ht.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tx(e, n, t);
        else if (e.tag === 19) tx(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((tt(ht, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Oc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Lp(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Oc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Lp(t, !0, n, null, l);
        break;
      case "together":
        Lp(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tc(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function hi(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zo |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(te(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ki(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ki(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function iL(e, t, n) {
  switch (t.tag) {
    case 3:
      UE(t), Wl();
      break;
    case 5:
      mE(t);
      break;
    case 1:
      kn(t.type) && Sc(t);
      break;
    case 4:
      dm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      tt(kc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (tt(ht, ht.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? HE(e, t, n)
          : (tt(ht, ht.current & 1),
            (e = hi(e, t, n)),
            e !== null ? e.sibling : null);
      tt(ht, ht.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return jE(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        tt(ht, ht.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $E(e, t, n);
  }
  return hi(e, t, n);
}
var WE, Jh, VE, qE;
WE = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Jh = function () {};
VE = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), To(jr.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Sh(e, i)), (r = Sh(e, r)), (l = []);
        break;
      case "select":
        (i = vt({}, i, { value: void 0 })),
          (r = vt({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = kh(e, i)), (r = kh(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xc);
    }
    bh(n, r);
    var s;
    n = null;
    for (d in i)
      if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var a = i[d];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (ns.hasOwnProperty(d)
              ? l || (l = [])
              : (l = l || []).push(d, null));
    for (d in r) {
      var f = r[d];
      if (
        ((a = i?.[d]),
        r.hasOwnProperty(d) && f !== a && (f != null || a != null))
      )
        if (d === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (f && f.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in f)
              f.hasOwnProperty(s) &&
                a[s] !== f[s] &&
                (n || (n = {}), (n[s] = f[s]));
          } else n || (l || (l = []), l.push(d, n)), (n = f);
        else
          d === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0),
              (a = a ? a.__html : void 0),
              f != null && a !== f && (l = l || []).push(d, f))
            : d === "children"
            ? (typeof f != "string" && typeof f != "number") ||
              (l = l || []).push(d, "" + f)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (ns.hasOwnProperty(d)
                ? (f != null && d === "onScroll" && rt("scroll", e),
                  l || a === f || (l = []))
                : (l = l || []).push(d, f));
    }
    n && (l = l || []).push("style", n);
    var d = l;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
qE = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tu(e, t) {
  if (!ft)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Yt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function oL(e, t, n) {
  var r = t.pendingProps;
  switch ((om(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Yt(t), null;
    case 1:
      return kn(t.type) && wc(), Yt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ql(),
        lt(Cn),
        lt(tn),
        hm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (La(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), br !== null && (ug(br), (br = null)))),
        Jh(e, t),
        Yt(t),
        null
      );
    case 5:
      pm(t);
      var i = To(hs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        VE(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(te(166));
          return Yt(t), null;
        }
        if (((e = To(jr.current)), La(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[$r] = t), (r[ds] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              rt("cancel", r), rt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              rt("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Nu.length; i++) rt(Nu[i], r);
              break;
            case "source":
              rt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              rt("error", r), rt("load", r);
              break;
            case "details":
              rt("toggle", r);
              break;
            case "input":
              c1(r, l), rt("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                rt("invalid", r);
              break;
            case "textarea":
              d1(r, l), rt("invalid", r);
          }
          bh(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Da(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      Da(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ns.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  rt("scroll", r);
            }
          switch (n) {
            case "input":
              _a(r), f1(r, l, !0);
              break;
            case "textarea":
              _a(r), p1(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = xc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = xS(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[$r] = t),
            (e[ds] = r),
            WE(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Oh(n, r)), n)) {
              case "dialog":
                rt("cancel", e), rt("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                rt("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Nu.length; i++) rt(Nu[i], e);
                i = r;
                break;
              case "source":
                rt("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                rt("error", e), rt("load", e), (i = r);
                break;
              case "details":
                rt("toggle", e), (i = r);
                break;
              case "input":
                c1(e, r), (i = Sh(e, r)), rt("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = vt({}, r, { value: void 0 })),
                  rt("invalid", e);
                break;
              case "textarea":
                d1(e, r), (i = kh(e, r)), rt("invalid", e);
                break;
              default:
                i = r;
            }
            bh(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var f = a[l];
                l === "style"
                  ? ES(e, f)
                  : l === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && wS(e, f))
                  : l === "children"
                  ? typeof f == "string"
                    ? (n !== "textarea" || f !== "") && rs(e, f)
                    : typeof f == "number" && rs(e, "" + f)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ns.hasOwnProperty(l)
                      ? f != null && l === "onScroll" && rt("scroll", e)
                      : f != null && Wg(e, l, f, s));
              }
            switch (n) {
              case "input":
                _a(e), f1(e, r, !1);
                break;
              case "textarea":
                _a(e), p1(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + eo(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Rl(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Rl(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = xc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Yt(t), null;
    case 6:
      if (e && t.stateNode != null) qE(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(te(166));
        if (((n = To(hs.current)), To(jr.current), La(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$r] = t),
            (l = r.nodeValue !== n) && ((e = zn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Da(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Da(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$r] = t),
            (t.stateNode = r);
      }
      return Yt(t), null;
    case 13:
      if (
        (lt(ht),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ft && Nn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          aE(), Wl(), (t.flags |= 98560), (l = !1);
        else if (((l = La(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(te(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(te(317));
            l[$r] = t;
          } else
            Wl(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          Yt(t), (l = !1);
        } else br !== null && (ug(br), (br = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (ht.current & 1) !== 0
                ? Pt === 0 && (Pt = 3)
                : bm())),
          t.updateQueue !== null && (t.flags |= 4),
          Yt(t),
          null);
    case 4:
      return (
        ql(), Jh(e, t), e === null && cs(t.stateNode.containerInfo), Yt(t), null
      );
    case 10:
      return am(t.type._context), Yt(t), null;
    case 17:
      return kn(t.type) && wc(), Yt(t), null;
    case 19:
      if ((lt(ht), (l = t.memoizedState), l === null)) return Yt(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) Tu(l, !1);
        else {
          if (Pt !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = Oc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Tu(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return tt(ht, (ht.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            kt() > Kl &&
            ((t.flags |= 128), (r = !0), Tu(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Oc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tu(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !ft)
            )
              return Yt(t), null;
          } else
            2 * kt() - l.renderingStartTime > Kl &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tu(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = kt()),
          (t.sibling = null),
          (n = ht.current),
          tt(ht, r ? (n & 1) | 2 : n & 1),
          t)
        : (Yt(t), null);
    case 22:
    case 23:
      return (
        _m(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (Ln & 1073741824) !== 0 &&
            (Yt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Yt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(te(156, t.tag));
}
function lL(e, t) {
  switch ((om(t), t.tag)) {
    case 1:
      return (
        kn(t.type) && wc(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ql(),
        lt(Cn),
        lt(tn),
        hm(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return pm(t), null;
    case 13:
      if (
        (lt(ht), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(te(340));
        Wl();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return lt(ht), null;
    case 4:
      return ql(), null;
    case 10:
      return am(t.type._context), null;
    case 22:
    case 23:
      return _m(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fa = !1,
  Jt = !1,
  uL = typeof WeakSet == "function" ? WeakSet : Set,
  ae = null;
function Ol(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        wt(e, t, r);
      }
    else n.current = null;
}
function eg(e, t, n) {
  try {
    n();
  } catch (r) {
    wt(e, t, r);
  }
}
var nx = !1;
function sL(e, t) {
  if (((Fh = mc), (e = YS()), rm(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            f = -1,
            d = 0,
            h = 0,
            g = e,
            y = null;
          t: for (;;) {
            for (
              var m;
              g !== n || (i !== 0 && g.nodeType !== 3) || (a = s + i),
                g !== l || (r !== 0 && g.nodeType !== 3) || (f = s + r),
                g.nodeType === 3 && (s += g.nodeValue.length),
                (m = g.firstChild) !== null;

            )
              (y = g), (g = m);
            for (;;) {
              if (g === e) break t;
              if (
                (y === n && ++d === i && (a = s),
                y === l && ++h === r && (f = s),
                (m = g.nextSibling) !== null)
              )
                break;
              (g = y), (y = g.parentNode);
            }
            g = m;
          }
          n = a === -1 || f === -1 ? null : { start: a, end: f };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    zh = { focusedElem: e, selectionRange: n }, mc = !1, ae = t;
    ae !== null;

  )
    if (((t = ae), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ae = e);
    else
      for (; ae !== null; ) {
        t = ae;
        try {
          var w = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var E = w.memoizedProps,
                    A = w.memoizedState,
                    v = t.stateNode,
                    S = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : kr(t.type, E),
                      A
                    );
                  v.__reactInternalSnapshotBeforeUpdate = S;
                }
                break;
              case 3:
                var _ = t.stateNode.containerInfo;
                _.nodeType === 1
                  ? (_.textContent = "")
                  : _.nodeType === 9 &&
                    _.documentElement &&
                    _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(te(163));
            }
        } catch (P) {
          wt(t, t.return, P);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ae = e);
          break;
        }
        ae = t.return;
      }
  return (w = nx), (nx = !1), w;
}
function qu(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && eg(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ff(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function tg(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function GE(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), GE(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$r], delete t[ds], delete t[Uh], delete t[WD], delete t[VD])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function KE(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rx(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || KE(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ng(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ng(e, t, n), e = e.sibling; e !== null; ) ng(e, t, n), (e = e.sibling);
}
function rg(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rg(e, t, n), e = e.sibling; e !== null; ) rg(e, t, n), (e = e.sibling);
}
var Ut = null,
  _r = !1;
function Ri(e, t, n) {
  for (n = n.child; n !== null; ) QE(e, t, n), (n = n.sibling);
}
function QE(e, t, n) {
  if (Hr && typeof Hr.onCommitFiberUnmount == "function")
    try {
      Hr.onCommitFiberUnmount(nf, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Jt || Ol(n, t);
    case 6:
      var r = Ut,
        i = _r;
      (Ut = null),
        Ri(e, t, n),
        (Ut = r),
        (_r = i),
        Ut !== null &&
          (_r
            ? ((e = Ut),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ut.removeChild(n.stateNode));
      break;
    case 18:
      Ut !== null &&
        (_r
          ? ((e = Ut),
            (n = n.stateNode),
            e.nodeType === 8
              ? Op(e.parentNode, n)
              : e.nodeType === 1 && Op(e, n),
            us(e))
          : Op(Ut, n.stateNode));
      break;
    case 4:
      (r = Ut),
        (i = _r),
        (Ut = n.stateNode.containerInfo),
        (_r = !0),
        Ri(e, t, n),
        (Ut = r),
        (_r = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Jt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && eg(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Ri(e, t, n);
      break;
    case 1:
      if (
        !Jt &&
        (Ol(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          wt(n, t, a);
        }
      Ri(e, t, n);
      break;
    case 21:
      Ri(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Jt = (r = Jt) || n.memoizedState !== null), Ri(e, t, n), (Jt = r))
        : Ri(e, t, n);
      break;
    default:
      Ri(e, t, n);
  }
}
function ix(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uL()),
      t.forEach(function (r) {
        var i = vL.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Cr(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ut = a.stateNode), (_r = !1);
              break e;
            case 3:
              (Ut = a.stateNode.containerInfo), (_r = !0);
              break e;
            case 4:
              (Ut = a.stateNode.containerInfo), (_r = !0);
              break e;
          }
          a = a.return;
        }
        if (Ut === null) throw Error(te(160));
        QE(l, s, i), (Ut = null), (_r = !1);
        var f = i.alternate;
        f !== null && (f.return = null), (i.return = null);
      } catch (d) {
        wt(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) YE(t, e), (t = t.sibling);
}
function YE(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Cr(t, e), Nr(e), r & 4)) {
        try {
          qu(3, e, e.return), ff(3, e);
        } catch (E) {
          wt(e, e.return, E);
        }
        try {
          qu(5, e, e.return);
        } catch (E) {
          wt(e, e.return, E);
        }
      }
      break;
    case 1:
      Cr(t, e), Nr(e), r & 512 && n !== null && Ol(n, n.return);
      break;
    case 5:
      if (
        (Cr(t, e),
        Nr(e),
        r & 512 && n !== null && Ol(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          rs(i, "");
        } catch (E) {
          wt(e, e.return, E);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          f = e.updateQueue;
        if (((e.updateQueue = null), f !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && vS(i, l),
              Oh(a, s);
            var d = Oh(a, l);
            for (s = 0; s < f.length; s += 2) {
              var h = f[s],
                g = f[s + 1];
              h === "style"
                ? ES(i, g)
                : h === "dangerouslySetInnerHTML"
                ? wS(i, g)
                : h === "children"
                ? rs(i, g)
                : Wg(i, h, g, d);
            }
            switch (a) {
              case "input":
                Eh(i, l);
                break;
              case "textarea":
                yS(i, l);
                break;
              case "select":
                var y = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var m = l.value;
                m != null
                  ? Rl(i, !!l.multiple, m, !1)
                  : y !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Rl(i, !!l.multiple, l.defaultValue, !0)
                      : Rl(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[ds] = l;
          } catch (E) {
            wt(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Cr(t, e), Nr(e), r & 4)) {
        if (e.stateNode === null) throw Error(te(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (E) {
          wt(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Cr(t, e), Nr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          us(t.containerInfo);
        } catch (E) {
          wt(e, e.return, E);
        }
      break;
    case 4:
      Cr(t, e), Nr(e);
      break;
    case 13:
      Cr(t, e),
        Nr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Cm = kt())),
        r & 4 && ix(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Jt = (d = Jt) || h), Cr(t, e), (Jt = d)) : Cr(t, e),
        Nr(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && (e.mode & 1) !== 0)
        )
          for (ae = e, h = e.child; h !== null; ) {
            for (g = ae = h; ae !== null; ) {
              switch (((y = ae), (m = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qu(4, y, y.return);
                  break;
                case 1:
                  Ol(y, y.return);
                  var w = y.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = y), (n = y.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (E) {
                      wt(r, n, E);
                    }
                  }
                  break;
                case 5:
                  Ol(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    lx(g);
                    continue;
                  }
              }
              m !== null ? ((m.return = y), (ae = m)) : lx(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                (i = g.stateNode),
                  d
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = g.stateNode),
                      (f = g.memoizedProps.style),
                      (s =
                        f != null && f.hasOwnProperty("display")
                          ? f.display
                          : null),
                      (a.style.display = SS("display", s)));
              } catch (E) {
                wt(e, e.return, E);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = d ? "" : g.memoizedProps;
              } catch (E) {
                wt(e, e.return, E);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            h === g && (h = null), (g = g.return);
          }
          h === g && (h = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Cr(t, e), Nr(e), r & 4 && ix(e);
      break;
    case 21:
      break;
    default:
      Cr(t, e), Nr(e);
  }
}
function Nr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (KE(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(te(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (rs(i, ""), (r.flags &= -33));
          var l = rx(e);
          rg(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = rx(e);
          ng(e, a, s);
          break;
        default:
          throw Error(te(161));
      }
    } catch (f) {
      wt(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function aL(e, t, n) {
  (ae = e), XE(e);
}
function XE(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ae !== null; ) {
    var i = ae,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Fa;
      if (!s) {
        var a = i.alternate,
          f = (a !== null && a.memoizedState !== null) || Jt;
        a = Fa;
        var d = Jt;
        if (((Fa = s), (Jt = f) && !d))
          for (ae = i; ae !== null; )
            (s = ae),
              (f = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ux(i)
                : f !== null
                ? ((f.return = s), (ae = f))
                : ux(i);
        for (; l !== null; ) (ae = l), XE(l), (l = l.sibling);
        (ae = i), (Fa = a), (Jt = d);
      }
      ox(e);
    } else
      (i.subtreeFlags & 8772) !== 0 && l !== null
        ? ((l.return = i), (ae = l))
        : ox(e);
  }
}
function ox(e) {
  for (; ae !== null; ) {
    var t = ae;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Jt || ff(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Jt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : kr(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && H1(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                H1(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && n.focus();
                    break;
                  case "img":
                    f.src && (n.src = f.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
                    g !== null && us(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(te(163));
          }
        Jt || (t.flags & 512 && tg(t));
      } catch (y) {
        wt(t, t.return, y);
      }
    }
    if (t === e) {
      ae = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ae = n);
      break;
    }
    ae = t.return;
  }
}
function lx(e) {
  for (; ae !== null; ) {
    var t = ae;
    if (t === e) {
      ae = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ae = n);
      break;
    }
    ae = t.return;
  }
}
function ux(e) {
  for (; ae !== null; ) {
    var t = ae;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ff(4, t);
          } catch (f) {
            wt(t, n, f);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (f) {
              wt(t, i, f);
            }
          }
          var l = t.return;
          try {
            tg(t);
          } catch (f) {
            wt(t, l, f);
          }
          break;
        case 5:
          var s = t.return;
          try {
            tg(t);
          } catch (f) {
            wt(t, s, f);
          }
      }
    } catch (f) {
      wt(t, t.return, f);
    }
    if (t === e) {
      ae = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (ae = a);
      break;
    }
    ae = t.return;
  }
}
var cL = Math.ceil,
  Rc = mi.ReactCurrentDispatcher,
  Sm = mi.ReactCurrentOwner,
  ar = mi.ReactCurrentBatchConfig,
  Be = 0,
  Nt = null,
  Ot = null,
  jt = 0,
  Ln = 0,
  Il = uo(0),
  Pt = 0,
  ys = null,
  zo = 0,
  df = 0,
  Em = 0,
  Gu = null,
  xn = null,
  Cm = 0,
  Kl = 1 / 0,
  ii = null,
  Pc = !1,
  ig = null,
  qi = null,
  za = !1,
  Bi = null,
  Ac = 0,
  Ku = 0,
  og = null,
  nc = -1,
  rc = 0;
function cn() {
  return (Be & 6) !== 0 ? kt() : nc !== -1 ? nc : (nc = kt());
}
function Gi(e) {
  return (e.mode & 1) === 0
    ? 1
    : (Be & 2) !== 0 && jt !== 0
    ? jt & -jt
    : GD.transition !== null
    ? (rc === 0 && (rc = LS()), rc)
    : ((e = Qe),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : US(e.type))),
      e);
}
function Tr(e, t, n, r) {
  if (50 < Ku) throw ((Ku = 0), (og = null), Error(te(185)));
  _s(e, n, r),
    ((Be & 2) === 0 || e !== Nt) &&
      (e === Nt && ((Be & 2) === 0 && (df |= n), Pt === 4 && Ni(e, jt)),
      _n(e, r),
      n === 1 &&
        Be === 0 &&
        (t.mode & 1) === 0 &&
        ((Kl = kt() + 500), sf && so()));
}
function _n(e, t) {
  var n = e.callbackNode;
  GA(e, t);
  var r = gc(e, e === Nt ? jt : 0);
  if (r === 0)
    n !== null && m1(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && m1(n), t === 1))
      e.tag === 0 ? qD(sx.bind(null, e)) : lE(sx.bind(null, e)),
        HD(function () {
          (Be & 6) === 0 && so();
        }),
        (n = null);
    else {
      switch (MS(r)) {
        case 1:
          n = Qg;
          break;
        case 4:
          n = AS;
          break;
        case 16:
          n = hc;
          break;
        case 536870912:
          n = DS;
          break;
        default:
          n = hc;
      }
      n = oC(n, ZE.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ZE(e, t) {
  if (((nc = -1), (rc = 0), (Be & 6) !== 0)) throw Error(te(327));
  var n = e.callbackNode;
  if (Ml() && e.callbackNode !== n) return null;
  var r = gc(e, e === Nt ? jt : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Dc(e, r);
  else {
    t = r;
    var i = Be;
    Be |= 2;
    var l = eC();
    (Nt !== e || jt !== t) && ((ii = null), (Kl = kt() + 500), Po(e, t));
    do
      try {
        pL();
        break;
      } catch (a) {
        JE(e, a);
      }
    while (1);
    sm(),
      (Rc.current = l),
      (Be = i),
      Ot !== null ? (t = 0) : ((Nt = null), (jt = 0), (t = Pt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ah(e)), i !== 0 && ((r = i), (t = lg(e, i)))), t === 1)
    )
      throw ((n = ys), Po(e, 0), Ni(e, r), _n(e, kt()), n);
    if (t === 6) Ni(e, r);
    else {
      if (
        ((i = e.current.alternate),
        (r & 30) === 0 &&
          !fL(i) &&
          ((t = Dc(e, r)),
          t === 2 && ((l = Ah(e)), l !== 0 && ((r = l), (t = lg(e, l)))),
          t === 1))
      )
        throw ((n = ys), Po(e, 0), Ni(e, r), _n(e, kt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(te(345));
        case 2:
          Eo(e, xn, ii);
          break;
        case 3:
          if (
            (Ni(e, r), (r & 130023424) === r && ((t = Cm + 500 - kt()), 10 < t))
          ) {
            if (gc(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              cn(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bh(Eo.bind(null, e, xn, ii), t);
            break;
          }
          Eo(e, xn, ii);
          break;
        case 4:
          if ((Ni(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ir(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = kt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * cL(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bh(Eo.bind(null, e, xn, ii), r);
            break;
          }
          Eo(e, xn, ii);
          break;
        case 5:
          Eo(e, xn, ii);
          break;
        default:
          throw Error(te(329));
      }
    }
  }
  return _n(e, kt()), e.callbackNode === n ? ZE.bind(null, e) : null;
}
function lg(e, t) {
  var n = Gu;
  return (
    e.current.memoizedState.isDehydrated && (Po(e, t).flags |= 256),
    (e = Dc(e, t)),
    e !== 2 && ((t = xn), (xn = n), t !== null && ug(t)),
    e
  );
}
function ug(e) {
  xn === null ? (xn = e) : xn.push.apply(xn, e);
}
function fL(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Rr(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ni(e, t) {
  for (
    t &= ~Em,
      t &= ~df,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ir(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sx(e) {
  if ((Be & 6) !== 0) throw Error(te(327));
  Ml();
  var t = gc(e, 0);
  if ((t & 1) === 0) return _n(e, kt()), null;
  var n = Dc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ah(e);
    r !== 0 && ((t = r), (n = lg(e, r)));
  }
  if (n === 1) throw ((n = ys), Po(e, 0), Ni(e, t), _n(e, kt()), n);
  if (n === 6) throw Error(te(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Eo(e, xn, ii),
    _n(e, kt()),
    null
  );
}
function km(e, t) {
  var n = Be;
  Be |= 1;
  try {
    return e(t);
  } finally {
    (Be = n), Be === 0 && ((Kl = kt() + 500), sf && so());
  }
}
function $o(e) {
  Bi !== null && Bi.tag === 0 && (Be & 6) === 0 && Ml();
  var t = Be;
  Be |= 1;
  var n = ar.transition,
    r = Qe;
  try {
    if (((ar.transition = null), (Qe = 1), e)) return e();
  } finally {
    (Qe = r), (ar.transition = n), (Be = t), (Be & 6) === 0 && so();
  }
}
function _m() {
  (Ln = Il.current), lt(Il);
}
function Po(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), UD(n)), Ot !== null))
    for (n = Ot.return; n !== null; ) {
      var r = n;
      switch ((om(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wc();
          break;
        case 3:
          ql(), lt(Cn), lt(tn), hm();
          break;
        case 5:
          pm(r);
          break;
        case 4:
          ql();
          break;
        case 13:
          lt(ht);
          break;
        case 19:
          lt(ht);
          break;
        case 10:
          am(r.type._context);
          break;
        case 22:
        case 23:
          _m();
      }
      n = n.return;
    }
  if (
    ((Nt = e),
    (Ot = e = Ki(e.current, null)),
    (jt = Ln = t),
    (Pt = 0),
    (ys = null),
    (Em = df = zo = 0),
    (xn = Gu = null),
    Io !== null)
  ) {
    for (t = 0; t < Io.length; t++)
      if (((n = Io[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Io = null;
  }
  return e;
}
function JE(e, t) {
  do {
    var n = Ot;
    try {
      if ((sm(), (Ja.current = Tc), Ic)) {
        for (var r = mt.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ic = !1;
      }
      if (
        ((Fo = 0),
        (Mt = Rt = mt = null),
        (Vu = !1),
        (gs = 0),
        (Sm.current = null),
        n === null || n.return === null)
      ) {
        (Pt = 1), (ys = t), (Ot = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          f = t;
        if (
          ((t = jt),
          (a.flags |= 32768),
          f !== null && typeof f == "object" && typeof f.then == "function")
        ) {
          var d = f,
            h = a,
            g = h.tag;
          if ((h.mode & 1) === 0 && (g === 0 || g === 11 || g === 15)) {
            var y = h.alternate;
            y
              ? ((h.updateQueue = y.updateQueue),
                (h.memoizedState = y.memoizedState),
                (h.lanes = y.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var m = Q1(s);
          if (m !== null) {
            (m.flags &= -257),
              Y1(m, s, a, l, t),
              m.mode & 1 && K1(l, d, t),
              (t = m),
              (f = d);
            var w = t.updateQueue;
            if (w === null) {
              var E = new Set();
              E.add(f), (t.updateQueue = E);
            } else w.add(f);
            break e;
          } else {
            if ((t & 1) === 0) {
              K1(l, d, t), bm();
              break e;
            }
            f = Error(te(426));
          }
        } else if (ft && a.mode & 1) {
          var A = Q1(s);
          if (A !== null) {
            (A.flags & 65536) === 0 && (A.flags |= 256),
              Y1(A, s, a, l, t),
              lm(Gl(f, a));
            break e;
          }
        }
        (l = f = Gl(f, a)),
          Pt !== 4 && (Pt = 2),
          Gu === null ? (Gu = [l]) : Gu.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var v = NE(l, f, t);
              U1(l, v);
              break e;
            case 1:
              a = f;
              var S = l.type,
                _ = l.stateNode;
              if (
                (l.flags & 128) === 0 &&
                (typeof S.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (qi === null || !qi.has(_))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var P = FE(l, a, t);
                U1(l, P);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      nC(n);
    } catch (D) {
      (t = D), Ot === n && n !== null && (Ot = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function eC() {
  var e = Rc.current;
  return (Rc.current = Tc), e === null ? Tc : e;
}
function bm() {
  (Pt === 0 || Pt === 3 || Pt === 2) && (Pt = 4),
    Nt === null ||
      ((zo & 268435455) === 0 && (df & 268435455) === 0) ||
      Ni(Nt, jt);
}
function Dc(e, t) {
  var n = Be;
  Be |= 2;
  var r = eC();
  (Nt !== e || jt !== t) && ((ii = null), Po(e, t));
  do
    try {
      dL();
      break;
    } catch (i) {
      JE(e, i);
    }
  while (1);
  if ((sm(), (Be = n), (Rc.current = r), Ot !== null)) throw Error(te(261));
  return (Nt = null), (jt = 0), Pt;
}
function dL() {
  for (; Ot !== null; ) tC(Ot);
}
function pL() {
  for (; Ot !== null && !zA(); ) tC(Ot);
}
function tC(e) {
  var t = iC(e.alternate, e, Ln);
  (e.memoizedProps = e.pendingProps),
    t === null ? nC(e) : (Ot = t),
    (Sm.current = null);
}
function nC(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = oL(n, t, Ln)), n !== null)) {
        Ot = n;
        return;
      }
    } else {
      if (((n = lL(n, t)), n !== null)) {
        (n.flags &= 32767), (Ot = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pt = 6), (Ot = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Ot = t;
      return;
    }
    Ot = t = e;
  } while (t !== null);
  Pt === 0 && (Pt = 5);
}
function Eo(e, t, n) {
  var r = Qe,
    i = ar.transition;
  try {
    (ar.transition = null), (Qe = 1), hL(e, t, n, r);
  } finally {
    (ar.transition = i), (Qe = r);
  }
  return null;
}
function hL(e, t, n, r) {
  do Ml();
  while (Bi !== null);
  if ((Be & 6) !== 0) throw Error(te(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(te(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (KA(e, l),
    e === Nt && ((Ot = Nt = null), (jt = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      za ||
      ((za = !0),
      oC(hc, function () {
        return Ml(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || l)
  ) {
    (l = ar.transition), (ar.transition = null);
    var s = Qe;
    Qe = 1;
    var a = Be;
    (Be |= 4),
      (Sm.current = null),
      sL(e, n),
      YE(n, e),
      LD(zh),
      (mc = !!Fh),
      (zh = Fh = null),
      (e.current = n),
      aL(n),
      $A(),
      (Be = a),
      (Qe = s),
      (ar.transition = l);
  } else e.current = n;
  if (
    (za && ((za = !1), (Bi = e), (Ac = i)),
    (l = e.pendingLanes),
    l === 0 && (qi = null),
    HA(n.stateNode),
    _n(e, kt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Pc) throw ((Pc = !1), (e = ig), (ig = null), e);
  return (
    (Ac & 1) !== 0 && e.tag !== 0 && Ml(),
    (l = e.pendingLanes),
    (l & 1) !== 0 ? (e === og ? Ku++ : ((Ku = 0), (og = e))) : (Ku = 0),
    so(),
    null
  );
}
function Ml() {
  if (Bi !== null) {
    var e = MS(Ac),
      t = ar.transition,
      n = Qe;
    try {
      if (((ar.transition = null), (Qe = 16 > e ? 16 : e), Bi === null))
        var r = !1;
      else {
        if (((e = Bi), (Bi = null), (Ac = 0), (Be & 6) !== 0))
          throw Error(te(331));
        var i = Be;
        for (Be |= 4, ae = e.current; ae !== null; ) {
          var l = ae,
            s = l.child;
          if ((ae.flags & 16) !== 0) {
            var a = l.deletions;
            if (a !== null) {
              for (var f = 0; f < a.length; f++) {
                var d = a[f];
                for (ae = d; ae !== null; ) {
                  var h = ae;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qu(8, h, l);
                  }
                  var g = h.child;
                  if (g !== null) (g.return = h), (ae = g);
                  else
                    for (; ae !== null; ) {
                      h = ae;
                      var y = h.sibling,
                        m = h.return;
                      if ((GE(h), h === d)) {
                        ae = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = m), (ae = y);
                        break;
                      }
                      ae = m;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var E = w.child;
                if (E !== null) {
                  w.child = null;
                  do {
                    var A = E.sibling;
                    (E.sibling = null), (E = A);
                  } while (E !== null);
                }
              }
              ae = l;
            }
          }
          if ((l.subtreeFlags & 2064) !== 0 && s !== null)
            (s.return = l), (ae = s);
          else
            e: for (; ae !== null; ) {
              if (((l = ae), (l.flags & 2048) !== 0))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qu(9, l, l.return);
                }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (ae = v);
                break e;
              }
              ae = l.return;
            }
        }
        var S = e.current;
        for (ae = S; ae !== null; ) {
          s = ae;
          var _ = s.child;
          if ((s.subtreeFlags & 2064) !== 0 && _ !== null)
            (_.return = s), (ae = _);
          else
            e: for (s = S; ae !== null; ) {
              if (((a = ae), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ff(9, a);
                  }
                } catch (D) {
                  wt(a, a.return, D);
                }
              if (a === s) {
                ae = null;
                break e;
              }
              var P = a.sibling;
              if (P !== null) {
                (P.return = a.return), (ae = P);
                break e;
              }
              ae = a.return;
            }
        }
        if (
          ((Be = i), so(), Hr && typeof Hr.onPostCommitFiberRoot == "function")
        )
          try {
            Hr.onPostCommitFiberRoot(nf, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Qe = n), (ar.transition = t);
    }
  }
  return !1;
}
function ax(e, t, n) {
  (t = Gl(n, t)),
    (t = NE(e, t, 1)),
    (e = Vi(e, t, 1)),
    (t = cn()),
    e !== null && (_s(e, 1, t), _n(e, t));
}
function wt(e, t, n) {
  if (e.tag === 3) ax(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ax(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qi === null || !qi.has(r)))
        ) {
          (e = Gl(n, e)),
            (e = FE(t, e, 1)),
            (t = Vi(t, e, 1)),
            (e = cn()),
            t !== null && (_s(t, 1, e), _n(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function gL(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = cn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Nt === e &&
      (jt & n) === n &&
      (Pt === 4 || (Pt === 3 && (jt & 130023424) === jt && 500 > kt() - Cm)
        ? Po(e, 0)
        : (Em |= n)),
    _n(e, t);
}
function rC(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Ia), (Ia <<= 1), (Ia & 130023424) === 0 && (Ia = 4194304)));
  var n = cn();
  (e = pi(e, t)), e !== null && (_s(e, t, n), _n(e, n));
}
function mL(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), rC(e, n);
}
function vL(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(te(314));
  }
  r !== null && r.delete(t), rC(e, n);
}
var iC;
iC = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Cn.current) Sn = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (Sn = !1), iL(e, t, n);
      Sn = (e.flags & 131072) !== 0;
    }
  else (Sn = !1), ft && (t.flags & 1048576) !== 0 && uE(t, Cc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      tc(e, t), (e = t.pendingProps);
      var i = jl(t, tn.current);
      Ll(t, n), (i = mm(null, t, r, e, i, n));
      var l = vm();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            kn(r) ? ((l = !0), Sc(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fm(t),
            (i.updater = af),
            (t.stateNode = i),
            (i._reactInternals = t),
            Gh(t, r, e, n),
            (t = Yh(null, t, r, !0, l, n)))
          : ((t.tag = 0), ft && l && im(t), sn(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (tc(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = xL(r)),
          (e = kr(r, e)),
          i)
        ) {
          case 0:
            t = Qh(null, t, r, e, n);
            break e;
          case 1:
            t = J1(null, t, r, e, n);
            break e;
          case 11:
            t = X1(null, t, r, e, n);
            break e;
          case 14:
            t = Z1(null, t, r, kr(r.type, e), n);
            break e;
        }
        throw Error(te(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kr(r, i)),
        Qh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kr(r, i)),
        J1(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((UE(t), e === null)) throw Error(te(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          fE(e, t),
          bc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Gl(Error(te(423)), t)), (t = ex(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Gl(Error(te(424)), t)), (t = ex(e, t, r, n, i));
            break e;
          } else
            for (
              Nn = Wi(t.stateNode.containerInfo.firstChild),
                zn = t,
                ft = !0,
                br = null,
                n = gE(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Wl(), r === i)) {
            t = hi(e, t, n);
            break e;
          }
          sn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mE(t),
        e === null && Wh(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        $h(r, i) ? (s = null) : l !== null && $h(r, l) && (t.flags |= 32),
        BE(e, t),
        sn(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Wh(t), null;
    case 13:
      return HE(e, t, n);
    case 4:
      return (
        dm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vl(t, null, r, n)) : sn(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kr(r, i)),
        X1(e, t, r, i, n)
      );
    case 7:
      return sn(e, t, t.pendingProps, n), t.child;
    case 8:
      return sn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return sn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          tt(kc, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Rr(l.value, s)) {
            if (l.children === i.children && !Cn.current) {
              t = hi(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var f = a.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (l.tag === 1) {
                      (f = ci(-1, n & -n)), (f.tag = 2);
                      var d = l.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null
                          ? (f.next = f)
                          : ((f.next = h.next), (h.next = f)),
                          (d.pending = f);
                      }
                    }
                    (l.lanes |= n),
                      (f = l.alternate),
                      f !== null && (f.lanes |= n),
                      Vh(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  f = f.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(te(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Vh(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        sn(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ll(t, n),
        (i = dr(i)),
        (r = r(i)),
        (t.flags |= 1),
        sn(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = kr(r, t.pendingProps)),
        (i = kr(r.type, i)),
        Z1(e, t, r, i, n)
      );
    case 15:
      return zE(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : kr(r, i)),
        tc(e, t),
        (t.tag = 1),
        kn(r) ? ((e = !0), Sc(t)) : (e = !1),
        Ll(t, n),
        pE(t, r, i),
        Gh(t, r, i, n),
        Yh(null, t, r, !0, e, n)
      );
    case 19:
      return jE(e, t, n);
    case 22:
      return $E(e, t, n);
  }
  throw Error(te(156, t.tag));
};
function oC(e, t) {
  return PS(e, t);
}
function yL(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function sr(e, t, n, r) {
  return new yL(e, t, n, r);
}
function Om(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xL(e) {
  if (typeof e == "function") return Om(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qg)) return 11;
    if (e === Gg) return 14;
  }
  return 2;
}
function Ki(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = sr(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ic(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) Om(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case yl:
        return Ao(n.children, i, l, t);
      case Vg:
        (s = 8), (i |= 8);
        break;
      case vh:
        return (
          (e = sr(12, n, t, i | 2)), (e.elementType = vh), (e.lanes = l), e
        );
      case yh:
        return (e = sr(13, n, t, i)), (e.elementType = yh), (e.lanes = l), e;
      case xh:
        return (e = sr(19, n, t, i)), (e.elementType = xh), (e.lanes = l), e;
      case hS:
        return pf(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dS:
              s = 10;
              break e;
            case pS:
              s = 9;
              break e;
            case qg:
              s = 11;
              break e;
            case Gg:
              s = 14;
              break e;
            case Di:
              (s = 16), (r = null);
              break e;
          }
        throw Error(te(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = sr(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ao(e, t, n, r) {
  return (e = sr(7, e, r, t)), (e.lanes = n), e;
}
function pf(e, t, n, r) {
  return (
    (e = sr(22, e, r, t)),
    (e.elementType = hS),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Mp(e, t, n) {
  return (e = sr(6, e, null, t)), (e.lanes = n), e;
}
function Np(e, t, n) {
  return (
    (t = sr(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wL(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = mp(0)),
    (this.expirationTimes = mp(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mp(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Im(e, t, n, r, i, l, s, a, f) {
  return (
    (e = new wL(e, t, n, a, f)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = sr(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fm(l),
    e
  );
}
function SL(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: vl,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lC(e) {
  if (!e) return to;
  e = e._reactInternals;
  e: {
    if (Go(e) !== e || e.tag !== 1) throw Error(te(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (kn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(te(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (kn(n)) return oE(e, n, t);
  }
  return t;
}
function uC(e, t, n, r, i, l, s, a, f) {
  return (
    (e = Im(n, r, !0, e, i, l, s, a, f)),
    (e.context = lC(null)),
    (n = e.current),
    (r = cn()),
    (i = Gi(n)),
    (l = ci(r, i)),
    (l.callback = t ?? null),
    Vi(n, l, i),
    (e.current.lanes = i),
    _s(e, i, r),
    _n(e, r),
    e
  );
}
function hf(e, t, n, r) {
  var i = t.current,
    l = cn(),
    s = Gi(i);
  return (
    (n = lC(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ci(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vi(i, t, s)),
    e !== null && (Tr(e, i, s, l), Za(e, i, s)),
    s
  );
}
function Lc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cx(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tm(e, t) {
  cx(e, t), (e = e.alternate) && cx(e, t);
}
function EL() {
  return null;
}
var sC =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Rm(e) {
  this._internalRoot = e;
}
gf.prototype.render = Rm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(te(409));
  hf(e, t, null, null);
};
gf.prototype.unmount = Rm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $o(function () {
      hf(null, e, null, null);
    }),
      (t[di] = null);
  }
};
function gf(e) {
  this._internalRoot = e;
}
gf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zS();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mi.length && t !== 0 && t < Mi[n].priority; n++);
    Mi.splice(n, 0, e), n === 0 && BS(e);
  }
};
function Pm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function mf(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fx() {}
function CL(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var d = Lc(s);
        l.call(d);
      };
    }
    var s = uC(t, r, e, 0, null, !1, !1, "", fx);
    return (
      (e._reactRootContainer = s),
      (e[di] = s.current),
      cs(e.nodeType === 8 ? e.parentNode : e),
      $o(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var d = Lc(f);
      a.call(d);
    };
  }
  var f = Im(e, 0, !1, null, null, !1, !1, "", fx);
  return (
    (e._reactRootContainer = f),
    (e[di] = f.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    $o(function () {
      hf(t, f, n, r);
    }),
    f
  );
}
function vf(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var f = Lc(s);
        a.call(f);
      };
    }
    hf(t, s, e, i);
  } else s = CL(n, t, e, i, r);
  return Lc(s);
}
NS = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mu(t.pendingLanes);
        n !== 0 &&
          (Yg(t, n | 1),
          _n(t, kt()),
          (Be & 6) === 0 && ((Kl = kt() + 500), so()));
      }
      break;
    case 13:
      $o(function () {
        var r = pi(e, 1);
        if (r !== null) {
          var i = cn();
          Tr(r, e, 1, i);
        }
      }),
        Tm(e, 1);
  }
};
Xg = function (e) {
  if (e.tag === 13) {
    var t = pi(e, 134217728);
    if (t !== null) {
      var n = cn();
      Tr(t, e, 134217728, n);
    }
    Tm(e, 134217728);
  }
};
FS = function (e) {
  if (e.tag === 13) {
    var t = Gi(e),
      n = pi(e, t);
    if (n !== null) {
      var r = cn();
      Tr(n, e, t, r);
    }
    Tm(e, t);
  }
};
zS = function () {
  return Qe;
};
$S = function (e, t) {
  var n = Qe;
  try {
    return (Qe = e), t();
  } finally {
    Qe = n;
  }
};
Th = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Eh(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = uf(r);
            if (!i) throw Error(te(90));
            mS(r), Eh(r, i);
          }
        }
      }
      break;
    case "textarea":
      yS(e, n);
      break;
    case "select":
      (t = n.value), t != null && Rl(e, !!n.multiple, t, !1);
  }
};
_S = km;
bS = $o;
var kL = { usingClientEntryPoint: !1, Events: [Os, El, uf, CS, kS, km] },
  Ru = {
    findFiberByHostInstance: Oo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _L = {
    bundleType: Ru.bundleType,
    version: Ru.version,
    rendererPackageName: Ru.rendererPackageName,
    rendererConfig: Ru.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mi.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = TS(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ru.findFiberByHostInstance || EL,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$a.isDisabled && $a.supportsFiber)
    try {
      (nf = $a.inject(_L)), (Hr = $a);
    } catch {}
}
jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kL;
jn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pm(t)) throw Error(te(200));
  return SL(e, t, null, n);
};
jn.createRoot = function (e, t) {
  if (!Pm(e)) throw Error(te(299));
  var n = !1,
    r = "",
    i = sC;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Im(e, 1, !1, null, null, n, !1, r, i)),
    (e[di] = t.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    new Rm(t)
  );
};
jn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(te(188))
      : ((e = Object.keys(e).join(",")), Error(te(268, e)));
  return (e = TS(t)), (e = e === null ? null : e.stateNode), e;
};
jn.flushSync = function (e) {
  return $o(e);
};
jn.hydrate = function (e, t, n) {
  if (!mf(t)) throw Error(te(200));
  return vf(null, e, t, !0, n);
};
jn.hydrateRoot = function (e, t, n) {
  if (!Pm(e)) throw Error(te(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = sC;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = uC(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[di] = t.current),
    cs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new gf(t);
};
jn.render = function (e, t, n) {
  if (!mf(t)) throw Error(te(200));
  return vf(null, e, t, !1, n);
};
jn.unmountComponentAtNode = function (e) {
  if (!mf(e)) throw Error(te(40));
  return e._reactRootContainer
    ? ($o(function () {
        vf(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[di] = null);
        });
      }),
      !0)
    : !1;
};
jn.unstable_batchedUpdates = km;
jn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!mf(n)) throw Error(te(200));
  if (e == null || e._reactInternals === void 0) throw Error(te(38));
  return vf(e, t, n, !1, r);
};
jn.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = jn);
})(Vo);
const Ba = Fg(Vo.exports);
var aC,
  dx = Vo.exports;
(aC = dx.createRoot), dx.hydrateRoot;
var cC = { exports: {} },
  fC = {};
var Ql = T.exports;
function bL(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var OL = typeof Object.is == "function" ? Object.is : bL,
  IL = Ql.useState,
  TL = Ql.useEffect,
  RL = Ql.useLayoutEffect,
  PL = Ql.useDebugValue;
function AL(e, t) {
  var n = t(),
    r = IL({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    l = r[1];
  return (
    RL(
      function () {
        (i.value = n), (i.getSnapshot = t), Fp(i) && l({ inst: i });
      },
      [e, n, t]
    ),
    TL(
      function () {
        return (
          Fp(i) && l({ inst: i }),
          e(function () {
            Fp(i) && l({ inst: i });
          })
        );
      },
      [e]
    ),
    PL(n),
    n
  );
}
function Fp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !OL(e, n);
  } catch {
    return !0;
  }
}
function DL(e, t) {
  return t();
}
var LL =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? DL
    : AL;
fC.useSyncExternalStore =
  Ql.useSyncExternalStore !== void 0 ? Ql.useSyncExternalStore : LL;
(function (e) {
  e.exports = fC;
})(cC);
var dC = { exports: {} },
  pC = {};
var yf = T.exports,
  ML = cC.exports;
function NL(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var FL = typeof Object.is == "function" ? Object.is : NL,
  zL = ML.useSyncExternalStore,
  $L = yf.useRef,
  BL = yf.useEffect,
  UL = yf.useMemo,
  HL = yf.useDebugValue;
pC.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var l = $L(null);
  if (l.current === null) {
    var s = { hasValue: !1, value: null };
    l.current = s;
  } else s = l.current;
  l = UL(
    function () {
      function f(m) {
        if (!d) {
          if (((d = !0), (h = m), (m = r(m)), i !== void 0 && s.hasValue)) {
            var w = s.value;
            if (i(w, m)) return (g = w);
          }
          return (g = m);
        }
        if (((w = g), FL(h, m))) return w;
        var E = r(m);
        return i !== void 0 && i(w, E) ? w : ((h = m), (g = E));
      }
      var d = !1,
        h,
        g,
        y = n === void 0 ? null : n;
      return [
        function () {
          return f(t());
        },
        y === null
          ? void 0
          : function () {
              return f(y());
            },
      ];
    },
    [t, n, r, i]
  );
  var a = zL(e, l[0], l[1]);
  return (
    BL(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    HL(a),
    a
  );
};
(function (e) {
  e.exports = pC;
})(dC);
function jL(e) {
  e();
}
let hC = jL;
const WL = (e) => (hC = e),
  VL = () => hC,
  no = T.exports.createContext(null);
function gC() {
  return T.exports.useContext(no);
}
const qL = () => {
  throw new Error("uSES not initialized!");
};
let mC = qL;
const GL = (e) => {
    mC = e;
  },
  KL = (e, t) => e === t;
function QL(e = no) {
  const t = e === no ? gC : () => T.exports.useContext(e);
  return function (r, i = KL) {
    const { store: l, subscription: s, getServerState: a } = t(),
      f = mC(s.addNestedSub, l.getState, a || l.getState, r, i);
    return T.exports.useDebugValue(f), f;
  };
}
const YL = QL();
function Mc() {
  return (
    (Mc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mc.apply(this, arguments)
  );
}
function Am(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var vC = { exports: {} },
  Ye = {};
var Ft = typeof Symbol == "function" && Symbol.for,
  Dm = Ft ? Symbol.for("react.element") : 60103,
  Lm = Ft ? Symbol.for("react.portal") : 60106,
  xf = Ft ? Symbol.for("react.fragment") : 60107,
  wf = Ft ? Symbol.for("react.strict_mode") : 60108,
  Sf = Ft ? Symbol.for("react.profiler") : 60114,
  Ef = Ft ? Symbol.for("react.provider") : 60109,
  Cf = Ft ? Symbol.for("react.context") : 60110,
  Mm = Ft ? Symbol.for("react.async_mode") : 60111,
  kf = Ft ? Symbol.for("react.concurrent_mode") : 60111,
  _f = Ft ? Symbol.for("react.forward_ref") : 60112,
  bf = Ft ? Symbol.for("react.suspense") : 60113,
  XL = Ft ? Symbol.for("react.suspense_list") : 60120,
  Of = Ft ? Symbol.for("react.memo") : 60115,
  If = Ft ? Symbol.for("react.lazy") : 60116,
  ZL = Ft ? Symbol.for("react.block") : 60121,
  JL = Ft ? Symbol.for("react.fundamental") : 60117,
  eM = Ft ? Symbol.for("react.responder") : 60118,
  tM = Ft ? Symbol.for("react.scope") : 60119;
function Vn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Dm:
        switch (((e = e.type), e)) {
          case Mm:
          case kf:
          case xf:
          case Sf:
          case wf:
          case bf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Cf:
              case _f:
              case If:
              case Of:
              case Ef:
                return e;
              default:
                return t;
            }
        }
      case Lm:
        return t;
    }
  }
}
function yC(e) {
  return Vn(e) === kf;
}
Ye.AsyncMode = Mm;
Ye.ConcurrentMode = kf;
Ye.ContextConsumer = Cf;
Ye.ContextProvider = Ef;
Ye.Element = Dm;
Ye.ForwardRef = _f;
Ye.Fragment = xf;
Ye.Lazy = If;
Ye.Memo = Of;
Ye.Portal = Lm;
Ye.Profiler = Sf;
Ye.StrictMode = wf;
Ye.Suspense = bf;
Ye.isAsyncMode = function (e) {
  return yC(e) || Vn(e) === Mm;
};
Ye.isConcurrentMode = yC;
Ye.isContextConsumer = function (e) {
  return Vn(e) === Cf;
};
Ye.isContextProvider = function (e) {
  return Vn(e) === Ef;
};
Ye.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dm;
};
Ye.isForwardRef = function (e) {
  return Vn(e) === _f;
};
Ye.isFragment = function (e) {
  return Vn(e) === xf;
};
Ye.isLazy = function (e) {
  return Vn(e) === If;
};
Ye.isMemo = function (e) {
  return Vn(e) === Of;
};
Ye.isPortal = function (e) {
  return Vn(e) === Lm;
};
Ye.isProfiler = function (e) {
  return Vn(e) === Sf;
};
Ye.isStrictMode = function (e) {
  return Vn(e) === wf;
};
Ye.isSuspense = function (e) {
  return Vn(e) === bf;
};
Ye.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xf ||
    e === kf ||
    e === Sf ||
    e === wf ||
    e === bf ||
    e === XL ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === If ||
        e.$$typeof === Of ||
        e.$$typeof === Ef ||
        e.$$typeof === Cf ||
        e.$$typeof === _f ||
        e.$$typeof === JL ||
        e.$$typeof === eM ||
        e.$$typeof === tM ||
        e.$$typeof === ZL))
  );
};
Ye.typeOf = Vn;
(function (e) {
  e.exports = Ye;
})(vC);
var xC = vC.exports,
  nM = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  rM = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  wC = {};
wC[xC.ForwardRef] = nM;
wC[xC.Memo] = rM;
var SC = { exports: {} },
  Xe = {};
var Nm = Symbol.for("react.element"),
  Fm = Symbol.for("react.portal"),
  Tf = Symbol.for("react.fragment"),
  Rf = Symbol.for("react.strict_mode"),
  Pf = Symbol.for("react.profiler"),
  Af = Symbol.for("react.provider"),
  Df = Symbol.for("react.context"),
  iM = Symbol.for("react.server_context"),
  Lf = Symbol.for("react.forward_ref"),
  Mf = Symbol.for("react.suspense"),
  Nf = Symbol.for("react.suspense_list"),
  Ff = Symbol.for("react.memo"),
  zf = Symbol.for("react.lazy"),
  oM = Symbol.for("react.offscreen"),
  EC;
EC = Symbol.for("react.module.reference");
function hr(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Nm:
        switch (((e = e.type), e)) {
          case Tf:
          case Pf:
          case Rf:
          case Mf:
          case Nf:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case iM:
              case Df:
              case Lf:
              case zf:
              case Ff:
              case Af:
                return e;
              default:
                return t;
            }
        }
      case Fm:
        return t;
    }
  }
}
Xe.ContextConsumer = Df;
Xe.ContextProvider = Af;
Xe.Element = Nm;
Xe.ForwardRef = Lf;
Xe.Fragment = Tf;
Xe.Lazy = zf;
Xe.Memo = Ff;
Xe.Portal = Fm;
Xe.Profiler = Pf;
Xe.StrictMode = Rf;
Xe.Suspense = Mf;
Xe.SuspenseList = Nf;
Xe.isAsyncMode = function () {
  return !1;
};
Xe.isConcurrentMode = function () {
  return !1;
};
Xe.isContextConsumer = function (e) {
  return hr(e) === Df;
};
Xe.isContextProvider = function (e) {
  return hr(e) === Af;
};
Xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nm;
};
Xe.isForwardRef = function (e) {
  return hr(e) === Lf;
};
Xe.isFragment = function (e) {
  return hr(e) === Tf;
};
Xe.isLazy = function (e) {
  return hr(e) === zf;
};
Xe.isMemo = function (e) {
  return hr(e) === Ff;
};
Xe.isPortal = function (e) {
  return hr(e) === Fm;
};
Xe.isProfiler = function (e) {
  return hr(e) === Pf;
};
Xe.isStrictMode = function (e) {
  return hr(e) === Rf;
};
Xe.isSuspense = function (e) {
  return hr(e) === Mf;
};
Xe.isSuspenseList = function (e) {
  return hr(e) === Nf;
};
Xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Tf ||
    e === Pf ||
    e === Rf ||
    e === Mf ||
    e === Nf ||
    e === oM ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === zf ||
        e.$$typeof === Ff ||
        e.$$typeof === Af ||
        e.$$typeof === Df ||
        e.$$typeof === Lf ||
        e.$$typeof === EC ||
        e.getModuleId !== void 0))
  );
};
Xe.typeOf = hr;
(function (e) {
  e.exports = Xe;
})(SC);
const lM = Fg(SC.exports);
function uM() {
  const e = VL();
  let t = null,
    n = null;
  return {
    clear() {
      (t = null), (n = null);
    },
    notify() {
      e(() => {
        let r = t;
        for (; r; ) r.callback(), (r = r.next);
      });
    },
    get() {
      let r = [],
        i = t;
      for (; i; ) r.push(i), (i = i.next);
      return r;
    },
    subscribe(r) {
      let i = !0,
        l = (n = { callback: r, next: null, prev: n });
      return (
        l.prev ? (l.prev.next = l) : (t = l),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            l.next ? (l.next.prev = l.prev) : (n = l.prev),
            l.prev ? (l.prev.next = l.next) : (t = l.next));
        }
      );
    },
  };
}
const px = { notify() {}, get: () => [] };
function sM(e, t) {
  let n,
    r = px;
  function i(g) {
    return f(), r.subscribe(g);
  }
  function l() {
    r.notify();
  }
  function s() {
    h.onStateChange && h.onStateChange();
  }
  function a() {
    return Boolean(n);
  }
  function f() {
    n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = uM()));
  }
  function d() {
    n && (n(), (n = void 0), r.clear(), (r = px));
  }
  const h = {
    addNestedSub: i,
    notifyNestedSubs: l,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: f,
    tryUnsubscribe: d,
    getListeners: () => r,
  };
  return h;
}
const aM =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  cM = aM ? T.exports.useLayoutEffect : T.exports.useEffect;
function fM({ store: e, context: t, children: n, serverState: r }) {
  const i = T.exports.useMemo(() => {
      const a = sM(e);
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
      };
    }, [e, r]),
    l = T.exports.useMemo(() => e.getState(), [e]);
  cM(() => {
    const { subscription: a } = i;
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      l !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0);
      }
    );
  }, [i, l]);
  const s = t || no;
  return be.createElement(s.Provider, { value: i }, n);
}
function CC(e = no) {
  const t = e === no ? gC : () => T.exports.useContext(e);
  return function () {
    const { store: r } = t();
    return r;
  };
}
const dM = CC();
function pM(e = no) {
  const t = e === no ? dM : CC(e);
  return function () {
    return t().dispatch;
  };
}
const hM = pM();
GL(dC.exports.useSyncExternalStoreWithSelector);
WL(Vo.exports.unstable_batchedUpdates);
const kC = T.exports.createContext({ dragDropManager: void 0 });
function xs(e) {
  return (
    (xs =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xs(e)
  );
}
function gM(e, t) {
  if (xs(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (xs(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mM(e) {
  var t = gM(e, "string");
  return xs(t) === "symbol" ? t : String(t);
}
function vM(e, t, n) {
  return (
    (t = mM(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function hx(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function gx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hx(Object(n), !0).forEach(function (r) {
          vM(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hx(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Xt(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var mx = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  zp = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Nc = {
    INIT: "@@redux/INIT" + zp(),
    REPLACE: "@@redux/REPLACE" + zp(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + zp();
    },
  };
function yM(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function zm(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Xt(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(Xt(1));
    return n(zm)(e, t);
  }
  if (typeof e != "function") throw new Error(Xt(2));
  var i = e,
    l = t,
    s = [],
    a = s,
    f = !1;
  function d() {
    a === s && (a = s.slice());
  }
  function h() {
    if (f) throw new Error(Xt(3));
    return l;
  }
  function g(E) {
    if (typeof E != "function") throw new Error(Xt(4));
    if (f) throw new Error(Xt(5));
    var A = !0;
    return (
      d(),
      a.push(E),
      function () {
        if (!!A) {
          if (f) throw new Error(Xt(6));
          (A = !1), d();
          var S = a.indexOf(E);
          a.splice(S, 1), (s = null);
        }
      }
    );
  }
  function y(E) {
    if (!yM(E)) throw new Error(Xt(7));
    if (typeof E.type > "u") throw new Error(Xt(8));
    if (f) throw new Error(Xt(9));
    try {
      (f = !0), (l = i(l, E));
    } finally {
      f = !1;
    }
    for (var A = (s = a), v = 0; v < A.length; v++) {
      var S = A[v];
      S();
    }
    return E;
  }
  function m(E) {
    if (typeof E != "function") throw new Error(Xt(10));
    (i = E), y({ type: Nc.REPLACE });
  }
  function w() {
    var E,
      A = g;
    return (
      (E = {
        subscribe: function (S) {
          if (typeof S != "object" || S === null) throw new Error(Xt(11));
          function _() {
            S.next && S.next(h());
          }
          _();
          var P = A(_);
          return { unsubscribe: P };
        },
      }),
      (E[mx] = function () {
        return this;
      }),
      E
    );
  }
  return (
    y({ type: Nc.INIT }),
    (r = { dispatch: y, subscribe: g, getState: h, replaceReducer: m }),
    (r[mx] = w),
    r
  );
}
function xM(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: Nc.INIT });
    if (typeof r > "u") throw new Error(Xt(12));
    if (typeof n(void 0, { type: Nc.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(Xt(13));
  });
}
function wM(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r];
    typeof e[i] == "function" && (n[i] = e[i]);
  }
  var l = Object.keys(n),
    s;
  try {
    xM(n);
  } catch (a) {
    s = a;
  }
  return function (f, d) {
    if ((f === void 0 && (f = {}), s)) throw s;
    for (var h = !1, g = {}, y = 0; y < l.length; y++) {
      var m = l[y],
        w = n[m],
        E = f[m],
        A = w(E, d);
      if (typeof A > "u") throw (d && d.type, new Error(Xt(14)));
      (g[m] = A), (h = h || A !== E);
    }
    return (h = h || l.length !== Object.keys(f).length), h ? g : f;
  };
}
function Fc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.length === 0
    ? function (r) {
        return r;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (r, i) {
        return function () {
          return r(i.apply(void 0, arguments));
        };
      });
}
function SM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return function () {
      var i = r.apply(void 0, arguments),
        l = function () {
          throw new Error(Xt(15));
        },
        s = {
          getState: i.getState,
          dispatch: function () {
            return l.apply(void 0, arguments);
          },
        },
        a = t.map(function (f) {
          return f(s);
        });
      return (
        (l = Fc.apply(void 0, a)(i.dispatch)),
        gx(gx({}, i), {}, { dispatch: l })
      );
    };
  };
}
function _e(e, t, ...n) {
  if (EM() && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    let r;
    if (t === void 0)
      r = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      let i = 0;
      (r = new Error(
        t.replace(/%s/g, function () {
          return n[i++];
        })
      )),
        (r.name = "Invariant Violation");
    }
    throw ((r.framesToPop = 1), r);
  }
}
function EM() {
  return typeof process < "u" && {}.NODE_ENV === "production";
}
function CM(e, t, n) {
  return t.split(".").reduce((r, i) => (r && r[i] ? r[i] : n || null), e);
}
function kM(e, t) {
  return e.filter((n) => n !== t);
}
function _C(e) {
  return typeof e == "object";
}
function _M(e, t) {
  const n = new Map(),
    r = (l) => {
      n.set(l, n.has(l) ? n.get(l) + 1 : 1);
    };
  e.forEach(r), t.forEach(r);
  const i = [];
  return (
    n.forEach((l, s) => {
      l === 1 && i.push(s);
    }),
    i
  );
}
function bM(e, t) {
  return e.filter((n) => t.indexOf(n) > -1);
}
const $m = "dnd-core/INIT_COORDS",
  $f = "dnd-core/BEGIN_DRAG",
  Bm = "dnd-core/PUBLISH_DRAG_SOURCE",
  Bf = "dnd-core/HOVER",
  Uf = "dnd-core/DROP",
  Hf = "dnd-core/END_DRAG";
function vx(e, t) {
  return {
    type: $m,
    payload: { sourceClientOffset: t || null, clientOffset: e || null },
  };
}
const OM = {
  type: $m,
  payload: { clientOffset: null, sourceClientOffset: null },
};
function IM(e) {
  return function (n = [], r = { publishSource: !0 }) {
    const {
        publishSource: i = !0,
        clientOffset: l,
        getSourceClientOffset: s,
      } = r,
      a = e.getMonitor(),
      f = e.getRegistry();
    e.dispatch(vx(l)), TM(n, a, f);
    const d = AM(n, a);
    if (d == null) {
      e.dispatch(OM);
      return;
    }
    let h = null;
    if (l) {
      if (!s) throw new Error("getSourceClientOffset must be defined");
      RM(s), (h = s(d));
    }
    e.dispatch(vx(l, h));
    const y = f.getSource(d).beginDrag(a, d);
    if (y == null) return;
    PM(y), f.pinSource(d);
    const m = f.getSourceType(d);
    return {
      type: $f,
      payload: {
        itemType: m,
        item: y,
        sourceId: d,
        clientOffset: l || null,
        sourceClientOffset: h || null,
        isSourcePublic: !!i,
      },
    };
  };
}
function TM(e, t, n) {
  _e(!t.isDragging(), "Cannot call beginDrag while dragging."),
    e.forEach(function (r) {
      _e(n.getSource(r), "Expected sourceIds to be registered.");
    });
}
function RM(e) {
  _e(
    typeof e == "function",
    "When clientOffset is provided, getSourceClientOffset must be a function."
  );
}
function PM(e) {
  _e(_C(e), "Item must be an object.");
}
function AM(e, t) {
  let n = null;
  for (let r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break;
    }
  return n;
}
function DM(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function LM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        DM(e, i, n[i]);
      });
  }
  return e;
}
function MM(e) {
  return function (n = {}) {
    const r = e.getMonitor(),
      i = e.getRegistry();
    NM(r),
      $M(r).forEach((s, a) => {
        const f = FM(s, a, i, r),
          d = { type: Uf, payload: { dropResult: LM({}, n, f) } };
        e.dispatch(d);
      });
  };
}
function NM(e) {
  _e(e.isDragging(), "Cannot call drop while not dragging."),
    _e(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function FM(e, t, n, r) {
  const i = n.getTarget(e);
  let l = i ? i.drop(r, e) : void 0;
  return zM(l), typeof l > "u" && (l = t === 0 ? {} : r.getDropResult()), l;
}
function zM(e) {
  _e(
    typeof e > "u" || _C(e),
    "Drop result must either be an object or undefined."
  );
}
function $M(e) {
  const t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function BM(e) {
  return function () {
    const n = e.getMonitor(),
      r = e.getRegistry();
    UM(n);
    const i = n.getSourceId();
    return (
      i != null && (r.getSource(i, !0).endDrag(n, i), r.unpinSource()),
      { type: Hf }
    );
  };
}
function UM(e) {
  _e(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function sg(e, t) {
  return t === null
    ? e === null
    : Array.isArray(e)
    ? e.some((n) => n === t)
    : e === t;
}
function HM(e) {
  return function (n, { clientOffset: r } = {}) {
    jM(n);
    const i = n.slice(0),
      l = e.getMonitor(),
      s = e.getRegistry(),
      a = l.getItemType();
    return (
      VM(i, s, a),
      WM(i, l, s),
      qM(i, l, s),
      { type: Bf, payload: { targetIds: i, clientOffset: r || null } }
    );
  };
}
function jM(e) {
  _e(Array.isArray(e), "Expected targetIds to be an array.");
}
function WM(e, t, n) {
  _e(t.isDragging(), "Cannot call hover while not dragging."),
    _e(!t.didDrop(), "Cannot call hover after drop.");
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    _e(
      e.lastIndexOf(i) === r,
      "Expected targetIds to be unique in the passed array."
    );
    const l = n.getTarget(i);
    _e(l, "Expected targetIds to be registered.");
  }
}
function VM(e, t, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r],
      l = t.getTargetType(i);
    sg(l, n) || e.splice(r, 1);
  }
}
function qM(e, t, n) {
  e.forEach(function (r) {
    n.getTarget(r).hover(t, r);
  });
}
function GM(e) {
  return function () {
    if (e.getMonitor().isDragging()) return { type: Bm };
  };
}
function KM(e) {
  return {
    beginDrag: IM(e),
    publishDragSource: GM(e),
    hover: HM(e),
    drop: MM(e),
    endDrag: BM(e),
  };
}
class QM {
  receiveBackend(t) {
    this.backend = t;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const t = this,
      { dispatch: n } = this.store;
    function r(l) {
      return (...s) => {
        const a = l.apply(t, s);
        typeof a < "u" && n(a);
      };
    }
    const i = KM(this);
    return Object.keys(i).reduce((l, s) => {
      const a = i[s];
      return (l[s] = r(a)), l;
    }, {});
  }
  dispatch(t) {
    this.store.dispatch(t);
  }
  constructor(t, n) {
    (this.isSetUp = !1),
      (this.handleRefCountChange = () => {
        const r = this.store.getState().refCount > 0;
        this.backend &&
          (r && !this.isSetUp
            ? (this.backend.setup(), (this.isSetUp = !0))
            : !r &&
              this.isSetUp &&
              (this.backend.teardown(), (this.isSetUp = !1)));
      }),
      (this.store = t),
      (this.monitor = n),
      t.subscribe(this.handleRefCountChange);
  }
}
function YM(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function bC(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function XM(e) {
  const {
    clientOffset: t,
    initialClientOffset: n,
    initialSourceClientOffset: r,
  } = e;
  return !t || !n || !r ? null : bC(YM(t, r), n);
}
function ZM(e) {
  const { clientOffset: t, initialClientOffset: n } = e;
  return !t || !n ? null : bC(t, n);
}
const Qu = [],
  Um = [];
Qu.__IS_NONE__ = !0;
Um.__IS_ALL__ = !0;
function JM(e, t) {
  return e === Qu ? !1 : e === Um || typeof t > "u" ? !0 : bM(t, e).length > 0;
}
class eN {
  subscribeToStateChange(t, n = {}) {
    const { handlerIds: r } = n;
    _e(typeof t == "function", "listener must be a function."),
      _e(
        typeof r > "u" || Array.isArray(r),
        "handlerIds, when specified, must be an array of strings."
      );
    let i = this.store.getState().stateId;
    const l = () => {
      const s = this.store.getState(),
        a = s.stateId;
      try {
        a === i || (a === i + 1 && !JM(s.dirtyHandlerIds, r)) || t();
      } finally {
        i = a;
      }
    };
    return this.store.subscribe(l);
  }
  subscribeToOffsetChange(t) {
    _e(typeof t == "function", "listener must be a function.");
    let n = this.store.getState().dragOffset;
    const r = () => {
      const i = this.store.getState().dragOffset;
      i !== n && ((n = i), t());
    };
    return this.store.subscribe(r);
  }
  canDragSource(t) {
    if (!t) return !1;
    const n = this.registry.getSource(t);
    return (
      _e(n, `Expected to find a valid source. sourceId=${t}`),
      this.isDragging() ? !1 : n.canDrag(this, t)
    );
  }
  canDropOnTarget(t) {
    if (!t) return !1;
    const n = this.registry.getTarget(t);
    if (
      (_e(n, `Expected to find a valid target. targetId=${t}`),
      !this.isDragging() || this.didDrop())
    )
      return !1;
    const r = this.registry.getTargetType(t),
      i = this.getItemType();
    return sg(r, i) && n.canDrop(this, t);
  }
  isDragging() {
    return Boolean(this.getItemType());
  }
  isDraggingSource(t) {
    if (!t) return !1;
    const n = this.registry.getSource(t, !0);
    if (
      (_e(n, `Expected to find a valid source. sourceId=${t}`),
      !this.isDragging() || !this.isSourcePublic())
    )
      return !1;
    const r = this.registry.getSourceType(t),
      i = this.getItemType();
    return r !== i ? !1 : n.isDragging(this, t);
  }
  isOverTarget(t, n = { shallow: !1 }) {
    if (!t) return !1;
    const { shallow: r } = n;
    if (!this.isDragging()) return !1;
    const i = this.registry.getTargetType(t),
      l = this.getItemType();
    if (l && !sg(i, l)) return !1;
    const s = this.getTargetIds();
    if (!s.length) return !1;
    const a = s.indexOf(t);
    return r ? a === s.length - 1 : a > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return Boolean(this.store.getState().dragOperation.isSourcePublic);
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return XM(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return ZM(this.store.getState().dragOffset);
  }
  constructor(t, n) {
    (this.store = t), (this.registry = n);
  }
}
const yx = typeof global < "u" ? global : self,
  OC = yx.MutationObserver || yx.WebKitMutationObserver;
function IC(e) {
  return function () {
    const n = setTimeout(i, 0),
      r = setInterval(i, 50);
    function i() {
      clearTimeout(n), clearInterval(r), e();
    }
  };
}
function tN(e) {
  let t = 1;
  const n = new OC(e),
    r = document.createTextNode("");
  return (
    n.observe(r, { characterData: !0 }),
    function () {
      (t = -t), (r.data = t);
    }
  );
}
const nN = typeof OC == "function" ? tN : IC;
class rN {
  enqueueTask(t) {
    const { queue: n, requestFlush: r } = this;
    n.length || (r(), (this.flushing = !0)), (n[n.length] = t);
  }
  constructor() {
    (this.queue = []),
      (this.pendingErrors = []),
      (this.flushing = !1),
      (this.index = 0),
      (this.capacity = 1024),
      (this.flush = () => {
        const { queue: t } = this;
        for (; this.index < t.length; ) {
          const n = this.index;
          if ((this.index++, t[n].call(), this.index > this.capacity)) {
            for (let r = 0, i = t.length - this.index; r < i; r++)
              t[r] = t[r + this.index];
            (t.length -= this.index), (this.index = 0);
          }
        }
        (t.length = 0), (this.index = 0), (this.flushing = !1);
      }),
      (this.registerPendingError = (t) => {
        this.pendingErrors.push(t), this.requestErrorThrow();
      }),
      (this.requestFlush = nN(this.flush)),
      (this.requestErrorThrow = IC(() => {
        if (this.pendingErrors.length) throw this.pendingErrors.shift();
      }));
  }
}
class iN {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      (this.task = null), this.release(this);
    }
  }
  constructor(t, n) {
    (this.onError = t), (this.release = n), (this.task = null);
  }
}
class oN {
  create(t) {
    const n = this.freeTasks,
      r = n.length ? n.pop() : new iN(this.onError, (i) => (n[n.length] = i));
    return (r.task = t), r;
  }
  constructor(t) {
    (this.onError = t), (this.freeTasks = []);
  }
}
const TC = new rN(),
  lN = new oN(TC.registerPendingError);
function uN(e) {
  TC.enqueueTask(lN.create(e));
}
const Hm = "dnd-core/ADD_SOURCE",
  jm = "dnd-core/ADD_TARGET",
  Wm = "dnd-core/REMOVE_SOURCE",
  jf = "dnd-core/REMOVE_TARGET";
function sN(e) {
  return { type: Hm, payload: { sourceId: e } };
}
function aN(e) {
  return { type: jm, payload: { targetId: e } };
}
function cN(e) {
  return { type: Wm, payload: { sourceId: e } };
}
function fN(e) {
  return { type: jf, payload: { targetId: e } };
}
function dN(e) {
  _e(typeof e.canDrag == "function", "Expected canDrag to be a function."),
    _e(
      typeof e.beginDrag == "function",
      "Expected beginDrag to be a function."
    ),
    _e(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function pN(e) {
  _e(typeof e.canDrop == "function", "Expected canDrop to be a function."),
    _e(typeof e.hover == "function", "Expected hover to be a function."),
    _e(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function ag(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach((n) => ag(n, !1));
    return;
  }
  _e(
    typeof e == "string" || typeof e == "symbol",
    t
      ? "Type can only be a string, a symbol, or an array of either."
      : "Type can only be a string or a symbol."
  );
}
var lr;
(function (e) {
  (e.SOURCE = "SOURCE"), (e.TARGET = "TARGET");
})(lr || (lr = {}));
let hN = 0;
function gN() {
  return hN++;
}
function mN(e) {
  const t = gN().toString();
  switch (e) {
    case lr.SOURCE:
      return `S${t}`;
    case lr.TARGET:
      return `T${t}`;
    default:
      throw new Error(`Unknown Handler Role: ${e}`);
  }
}
function xx(e) {
  switch (e[0]) {
    case "S":
      return lr.SOURCE;
    case "T":
      return lr.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${e}`);
  }
}
function wx(e, t) {
  const n = e.entries();
  let r = !1;
  do {
    const {
      done: i,
      value: [, l],
    } = n.next();
    if (l === t) return !0;
    r = !!i;
  } while (!r);
  return !1;
}
class vN {
  addSource(t, n) {
    ag(t), dN(n);
    const r = this.addHandler(lr.SOURCE, t, n);
    return this.store.dispatch(sN(r)), r;
  }
  addTarget(t, n) {
    ag(t, !0), pN(n);
    const r = this.addHandler(lr.TARGET, t, n);
    return this.store.dispatch(aN(r)), r;
  }
  containsHandler(t) {
    return wx(this.dragSources, t) || wx(this.dropTargets, t);
  }
  getSource(t, n = !1) {
    return (
      _e(this.isSourceId(t), "Expected a valid source ID."),
      n && t === this.pinnedSourceId
        ? this.pinnedSource
        : this.dragSources.get(t)
    );
  }
  getTarget(t) {
    return (
      _e(this.isTargetId(t), "Expected a valid target ID."),
      this.dropTargets.get(t)
    );
  }
  getSourceType(t) {
    return (
      _e(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t)
    );
  }
  getTargetType(t) {
    return (
      _e(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t)
    );
  }
  isSourceId(t) {
    return xx(t) === lr.SOURCE;
  }
  isTargetId(t) {
    return xx(t) === lr.TARGET;
  }
  removeSource(t) {
    _e(this.getSource(t), "Expected an existing source."),
      this.store.dispatch(cN(t)),
      uN(() => {
        this.dragSources.delete(t), this.types.delete(t);
      });
  }
  removeTarget(t) {
    _e(this.getTarget(t), "Expected an existing target."),
      this.store.dispatch(fN(t)),
      this.dropTargets.delete(t),
      this.types.delete(t);
  }
  pinSource(t) {
    const n = this.getSource(t);
    _e(n, "Expected an existing source."),
      (this.pinnedSourceId = t),
      (this.pinnedSource = n);
  }
  unpinSource() {
    _e(this.pinnedSource, "No source is pinned at the time."),
      (this.pinnedSourceId = null),
      (this.pinnedSource = null);
  }
  addHandler(t, n, r) {
    const i = mN(t);
    return (
      this.types.set(i, n),
      t === lr.SOURCE
        ? this.dragSources.set(i, r)
        : t === lr.TARGET && this.dropTargets.set(i, r),
      i
    );
  }
  constructor(t) {
    (this.types = new Map()),
      (this.dragSources = new Map()),
      (this.dropTargets = new Map()),
      (this.pinnedSourceId = null),
      (this.pinnedSource = null),
      (this.store = t);
  }
}
const yN = (e, t) => e === t;
function xN(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function wN(e, t, n = yN) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
  return !0;
}
function SN(e = Qu, t) {
  switch (t.type) {
    case Bf:
      break;
    case Hm:
    case jm:
    case jf:
    case Wm:
      return Qu;
    case $f:
    case Bm:
    case Hf:
    case Uf:
    default:
      return Um;
  }
  const { targetIds: n = [], prevTargetIds: r = [] } = t.payload,
    i = _M(n, r);
  if (!(i.length > 0 || !wN(n, r))) return Qu;
  const s = r[r.length - 1],
    a = n[n.length - 1];
  return s !== a && (s && i.push(s), a && i.push(a)), i;
}
function EN(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function CN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        EN(e, i, n[i]);
      });
  }
  return e;
}
const Sx = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null,
};
function kN(e = Sx, t) {
  const { payload: n } = t;
  switch (t.type) {
    case $m:
    case $f:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset,
      };
    case Bf:
      return xN(e.clientOffset, n.clientOffset)
        ? e
        : CN({}, e, { clientOffset: n.clientOffset });
    case Hf:
    case Uf:
      return Sx;
    default:
      return e;
  }
}
function _N(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        _N(e, i, n[i]);
      });
  }
  return e;
}
const bN = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null,
};
function ON(e = bN, t) {
  const { payload: n } = t;
  switch (t.type) {
    case $f:
      return dl({}, e, {
        itemType: n.itemType,
        item: n.item,
        sourceId: n.sourceId,
        isSourcePublic: n.isSourcePublic,
        dropResult: null,
        didDrop: !1,
      });
    case Bm:
      return dl({}, e, { isSourcePublic: !0 });
    case Bf:
      return dl({}, e, { targetIds: n.targetIds });
    case jf:
      return e.targetIds.indexOf(n.targetId) === -1
        ? e
        : dl({}, e, { targetIds: kM(e.targetIds, n.targetId) });
    case Uf:
      return dl({}, e, {
        dropResult: n.dropResult,
        didDrop: !0,
        targetIds: [],
      });
    case Hf:
      return dl({}, e, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: [],
      });
    default:
      return e;
  }
}
function IN(e = 0, t) {
  switch (t.type) {
    case Hm:
    case jm:
      return e + 1;
    case Wm:
    case jf:
      return e - 1;
    default:
      return e;
  }
}
function TN(e = 0) {
  return e + 1;
}
function RN(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function PN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        })
      )),
      r.forEach(function (i) {
        RN(e, i, n[i]);
      });
  }
  return e;
}
function AN(e = {}, t) {
  return {
    dirtyHandlerIds: SN(e.dirtyHandlerIds, {
      type: t.type,
      payload: PN({}, t.payload, {
        prevTargetIds: CM(e, "dragOperation.targetIds", []),
      }),
    }),
    dragOffset: kN(e.dragOffset, t),
    refCount: IN(e.refCount, t),
    dragOperation: ON(e.dragOperation, t),
    stateId: TN(e.stateId),
  };
}
function DN(e, t = void 0, n = {}, r = !1) {
  const i = LN(r),
    l = new eN(i, new vN(i)),
    s = new QM(i, l),
    a = e(s, t, n);
  return s.receiveBackend(a), s;
}
function LN(e) {
  const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return zm(AN, e && t && t({ name: "dnd-core", instanceId: "dnd-core" }));
}
function MN(e, t) {
  if (e == null) return {};
  var n = NN(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      (r = l[i]),
        !(t.indexOf(r) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function NN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    l;
  for (l = 0; l < r.length; l++)
    (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
let Ex = 0;
const oc = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var FN = T.exports.memo(function (t) {
  var { children: n } = t,
    r = MN(t, ["children"]);
  const [i, l] = zN(r);
  return (
    T.exports.useEffect(() => {
      if (l) {
        const s = RC();
        return (
          ++Ex,
          () => {
            --Ex === 0 && (s[oc] = null);
          }
        );
      }
    }, []),
    V(kC.Provider, { value: i, children: n })
  );
});
function zN(e) {
  if ("manager" in e) return [{ dragDropManager: e.manager }, !1];
  const t = $N(e.backend, e.context, e.options, e.debugMode),
    n = !e.context;
  return [t, n];
}
function $N(e, t = RC(), n, r) {
  const i = t;
  return i[oc] || (i[oc] = { dragDropManager: DN(e, t, n, r) }), i[oc];
}
function RC() {
  return typeof global < "u" ? global : window;
}
var BN = function e(t, n) {
  if (t === n) return !0;
  if (t && n && typeof t == "object" && typeof n == "object") {
    if (t.constructor !== n.constructor) return !1;
    var r, i, l;
    if (Array.isArray(t)) {
      if (((r = t.length), r != n.length)) return !1;
      for (i = r; i-- !== 0; ) if (!e(t[i], n[i])) return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === n.source && t.flags === n.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === n.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === n.toString();
    if (((l = Object.keys(t)), (r = l.length), r !== Object.keys(n).length))
      return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, l[i])) return !1;
    for (i = r; i-- !== 0; ) {
      var s = l[i];
      if (!e(t[s], n[s])) return !1;
    }
    return !0;
  }
  return t !== t && n !== n;
};
const Bo =
  typeof window < "u" ? T.exports.useLayoutEffect : T.exports.useEffect;
function PC(e, t, n) {
  const [r, i] = T.exports.useState(() => t(e)),
    l = T.exports.useCallback(() => {
      const s = t(e);
      BN(r, s) || (i(s), n && n());
    }, [r, e, n]);
  return Bo(l), [r, l];
}
function UN(e, t, n) {
  const [r, i] = PC(e, t, n);
  return (
    Bo(
      function () {
        const s = e.getHandlerId();
        if (s != null) return e.subscribeToStateChange(i, { handlerIds: [s] });
      },
      [e, i]
    ),
    r
  );
}
function AC(e, t, n) {
  return UN(t, e || (() => ({})), () => n.reconnect());
}
function DC(e, t) {
  const n = [...(t || [])];
  return (
    t == null && typeof e != "function" && n.push(e),
    T.exports.useMemo(() => (typeof e == "function" ? e() : e), n)
  );
}
function HN(e) {
  return T.exports.useMemo(() => e.hooks.dragSource(), [e]);
}
function jN(e) {
  return T.exports.useMemo(() => e.hooks.dragPreview(), [e]);
}
let $p = !1,
  Bp = !1;
class WN {
  receiveHandlerId(t) {
    this.sourceId = t;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    _e(
      !$p,
      "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
    );
    try {
      return ($p = !0), this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      $p = !1;
    }
  }
  isDragging() {
    if (!this.sourceId) return !1;
    _e(
      !Bp,
      "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
    );
    try {
      return (Bp = !0), this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      Bp = !1;
    }
  }
  subscribeToStateChange(t, n) {
    return this.internalMonitor.subscribeToStateChange(t, n);
  }
  isDraggingSource(t) {
    return this.internalMonitor.isDraggingSource(t);
  }
  isOverTarget(t, n) {
    return this.internalMonitor.isOverTarget(t, n);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(t) {
    return this.internalMonitor.subscribeToOffsetChange(t);
  }
  canDragSource(t) {
    return this.internalMonitor.canDragSource(t);
  }
  canDropOnTarget(t) {
    return this.internalMonitor.canDropOnTarget(t);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(t) {
    (this.sourceId = null), (this.internalMonitor = t.getMonitor());
  }
}
let Up = !1;
class VN {
  receiveHandlerId(t) {
    this.targetId = t;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(t, n) {
    return this.internalMonitor.subscribeToStateChange(t, n);
  }
  canDrop() {
    if (!this.targetId) return !1;
    _e(
      !Up,
      "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
    );
    try {
      return (Up = !0), this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Up = !1;
    }
  }
  isOver(t) {
    return this.targetId
      ? this.internalMonitor.isOverTarget(this.targetId, t)
      : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(t) {
    (this.targetId = null), (this.internalMonitor = t.getMonitor());
  }
}
function qN(e, t, n) {
  const r = n.getRegistry(),
    i = r.addTarget(e, t);
  return [i, () => r.removeTarget(i)];
}
function GN(e, t, n) {
  const r = n.getRegistry(),
    i = r.addSource(e, t);
  return [i, () => r.removeSource(i)];
}
function cg(e, t, n, r) {
  let i = n ? n.call(r, e, t) : void 0;
  if (i !== void 0) return !!i;
  if (e === t) return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
  const l = Object.keys(e),
    s = Object.keys(t);
  if (l.length !== s.length) return !1;
  const a = Object.prototype.hasOwnProperty.bind(t);
  for (let f = 0; f < l.length; f++) {
    const d = l[f];
    if (!a(d)) return !1;
    const h = e[d],
      g = t[d];
    if (
      ((i = n ? n.call(r, h, g, d) : void 0),
      i === !1 || (i === void 0 && h !== g))
    )
      return !1;
  }
  return !0;
}
function fg(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function KN(e) {
  if (typeof e.type == "string") return;
  const t = e.type.displayName || e.type.name || "the component";
  throw new Error(
    `Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`
  );
}
function QN(e) {
  return (t = null, n = null) => {
    if (!T.exports.isValidElement(t)) {
      const l = t;
      return e(l, n), l;
    }
    const r = t;
    return KN(r), YN(r, n ? (l) => e(l, n) : e);
  };
}
function LC(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      const r = e[n];
      if (n.endsWith("Ref")) t[n] = e[n];
      else {
        const i = QN(r);
        t[n] = () => i;
      }
    }),
    t
  );
}
function Cx(e, t) {
  typeof e == "function" ? e(t) : (e.current = t);
}
function YN(e, t) {
  const n = e.ref;
  return (
    _e(
      typeof n != "string",
      "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"
    ),
    n
      ? T.exports.cloneElement(e, {
          ref: (r) => {
            Cx(n, r), Cx(t, r);
          },
        })
      : T.exports.cloneElement(e, { ref: t })
  );
}
class XN {
  receiveHandlerId(t) {
    this.handlerId !== t && ((this.handlerId = t), this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(t) {
    this.dragSourceOptionsInternal = t;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(t) {
    this.dragPreviewOptionsInternal = t;
  }
  reconnect() {
    const t = this.reconnectDragSource();
    this.reconnectDragPreview(t);
  }
  reconnectDragSource() {
    const t = this.dragSource,
      n =
        this.didHandlerIdChange() ||
        this.didConnectedDragSourceChange() ||
        this.didDragSourceOptionsChange();
    return (
      n && this.disconnectDragSource(),
      this.handlerId
        ? t
          ? (n &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDragSource = t),
              (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
              (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                this.handlerId,
                t,
                this.dragSourceOptions
              ))),
            n)
          : ((this.lastConnectedDragSource = t), n)
        : n
    );
  }
  reconnectDragPreview(t = !1) {
    const n = this.dragPreview,
      r =
        t ||
        this.didHandlerIdChange() ||
        this.didConnectedDragPreviewChange() ||
        this.didDragPreviewOptionsChange();
    if ((r && this.disconnectDragPreview(), !!this.handlerId)) {
      if (!n) {
        this.lastConnectedDragPreview = n;
        return;
      }
      r &&
        ((this.lastConnectedHandlerId = this.handlerId),
        (this.lastConnectedDragPreview = n),
        (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
        (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
          this.handlerId,
          n,
          this.dragPreviewOptions
        )));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !cg(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !cg(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe &&
      (this.dragSourceUnsubscribe(), (this.dragSourceUnsubscribe = void 0));
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe &&
      (this.dragPreviewUnsubscribe(),
      (this.dragPreviewUnsubscribe = void 0),
      (this.dragPreviewNode = null),
      (this.dragPreviewRef = null));
  }
  get dragSource() {
    return (
      this.dragSourceNode || (this.dragSourceRef && this.dragSourceRef.current)
    );
  }
  get dragPreview() {
    return (
      this.dragPreviewNode ||
      (this.dragPreviewRef && this.dragPreviewRef.current)
    );
  }
  clearDragSource() {
    (this.dragSourceNode = null), (this.dragSourceRef = null);
  }
  clearDragPreview() {
    (this.dragPreviewNode = null), (this.dragPreviewRef = null);
  }
  constructor(t) {
    (this.hooks = LC({
      dragSource: (n, r) => {
        this.clearDragSource(),
          (this.dragSourceOptions = r || null),
          fg(n) ? (this.dragSourceRef = n) : (this.dragSourceNode = n),
          this.reconnectDragSource();
      },
      dragPreview: (n, r) => {
        this.clearDragPreview(),
          (this.dragPreviewOptions = r || null),
          fg(n) ? (this.dragPreviewRef = n) : (this.dragPreviewNode = n),
          this.reconnectDragPreview();
      },
    })),
      (this.handlerId = null),
      (this.dragSourceRef = null),
      (this.dragSourceOptionsInternal = null),
      (this.dragPreviewRef = null),
      (this.dragPreviewOptionsInternal = null),
      (this.lastConnectedHandlerId = null),
      (this.lastConnectedDragSource = null),
      (this.lastConnectedDragSourceOptions = null),
      (this.lastConnectedDragPreview = null),
      (this.lastConnectedDragPreviewOptions = null),
      (this.backend = t);
  }
}
class ZN {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const t =
      this.didHandlerIdChange() ||
      this.didDropTargetChange() ||
      this.didOptionsChange();
    t && this.disconnectDropTarget();
    const n = this.dropTarget;
    if (!!this.handlerId) {
      if (!n) {
        this.lastConnectedDropTarget = n;
        return;
      }
      t &&
        ((this.lastConnectedHandlerId = this.handlerId),
        (this.lastConnectedDropTarget = n),
        (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
        (this.unsubscribeDropTarget = this.backend.connectDropTarget(
          this.handlerId,
          n,
          this.dropTargetOptions
        )));
    }
  }
  receiveHandlerId(t) {
    t !== this.handlerId && ((this.handlerId = t), this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(t) {
    this.dropTargetOptionsInternal = t;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !cg(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget &&
      (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
  }
  get dropTarget() {
    return (
      this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current)
    );
  }
  clearDropTarget() {
    (this.dropTargetRef = null), (this.dropTargetNode = null);
  }
  constructor(t) {
    (this.hooks = LC({
      dropTarget: (n, r) => {
        this.clearDropTarget(),
          (this.dropTargetOptions = r),
          fg(n) ? (this.dropTargetRef = n) : (this.dropTargetNode = n),
          this.reconnect();
      },
    })),
      (this.handlerId = null),
      (this.dropTargetRef = null),
      (this.dropTargetOptionsInternal = null),
      (this.lastConnectedHandlerId = null),
      (this.lastConnectedDropTarget = null),
      (this.lastConnectedDropTargetOptions = null),
      (this.backend = t);
  }
}
function vi() {
  const { dragDropManager: e } = T.exports.useContext(kC);
  return _e(e != null, "Expected drag drop context"), e;
}
function JN(e, t) {
  const n = vi(),
    r = T.exports.useMemo(() => new XN(n.getBackend()), [n]);
  return (
    Bo(
      () => (
        (r.dragSourceOptions = e || null),
        r.reconnect(),
        () => r.disconnectDragSource()
      ),
      [r, e]
    ),
    Bo(
      () => (
        (r.dragPreviewOptions = t || null),
        r.reconnect(),
        () => r.disconnectDragPreview()
      ),
      [r, t]
    ),
    r
  );
}
function eF() {
  const e = vi();
  return T.exports.useMemo(() => new WN(e), [e]);
}
class tF {
  beginDrag() {
    const t = this.spec,
      n = this.monitor;
    let r = null;
    return (
      typeof t.item == "object"
        ? (r = t.item)
        : typeof t.item == "function"
        ? (r = t.item(n))
        : (r = {}),
      r ?? null
    );
  }
  canDrag() {
    const t = this.spec,
      n = this.monitor;
    return typeof t.canDrag == "boolean"
      ? t.canDrag
      : typeof t.canDrag == "function"
      ? t.canDrag(n)
      : !0;
  }
  isDragging(t, n) {
    const r = this.spec,
      i = this.monitor,
      { isDragging: l } = r;
    return l ? l(i) : n === t.getSourceId();
  }
  endDrag() {
    const t = this.spec,
      n = this.monitor,
      r = this.connector,
      { end: i } = t;
    i && i(n.getItem(), n), r.reconnect();
  }
  constructor(t, n, r) {
    (this.spec = t), (this.monitor = n), (this.connector = r);
  }
}
function nF(e, t, n) {
  const r = T.exports.useMemo(() => new tF(e, t, n), [t, n]);
  return (
    T.exports.useEffect(() => {
      r.spec = e;
    }, [e]),
    r
  );
}
function rF(e) {
  return T.exports.useMemo(() => {
    const t = e.type;
    return _e(t != null, "spec.type must be defined"), t;
  }, [e]);
}
function iF(e, t, n) {
  const r = vi(),
    i = nF(e, t, n),
    l = rF(e);
  Bo(
    function () {
      if (l != null) {
        const [a, f] = GN(l, i, r);
        return t.receiveHandlerId(a), n.receiveHandlerId(a), f;
      }
    },
    [r, t, n, i, l]
  );
}
function oF(e, t) {
  const n = DC(e, t);
  _e(
    !n.begin,
    "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"
  );
  const r = eF(),
    i = JN(n.options, n.previewOptions);
  return iF(n, r, i), [AC(n.collect, r, i), HN(i), jN(i)];
}
function lF(e) {
  const n = vi().getMonitor(),
    [r, i] = PC(n, e);
  return (
    T.exports.useEffect(() => n.subscribeToOffsetChange(i)),
    T.exports.useEffect(() => n.subscribeToStateChange(i)),
    r
  );
}
function uF(e) {
  return T.exports.useMemo(() => e.hooks.dropTarget(), [e]);
}
function sF(e) {
  const t = vi(),
    n = T.exports.useMemo(() => new ZN(t.getBackend()), [t]);
  return (
    Bo(
      () => (
        (n.dropTargetOptions = e || null),
        n.reconnect(),
        () => n.disconnectDropTarget()
      ),
      [e]
    ),
    n
  );
}
function aF() {
  const e = vi();
  return T.exports.useMemo(() => new VN(e), [e]);
}
function cF(e) {
  const { accept: t } = e;
  return T.exports.useMemo(
    () => (
      _e(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t]
    ),
    [t]
  );
}
class fF {
  canDrop() {
    const t = this.spec,
      n = this.monitor;
    return t.canDrop ? t.canDrop(n.getItem(), n) : !0;
  }
  hover() {
    const t = this.spec,
      n = this.monitor;
    t.hover && t.hover(n.getItem(), n);
  }
  drop() {
    const t = this.spec,
      n = this.monitor;
    if (t.drop) return t.drop(n.getItem(), n);
  }
  constructor(t, n) {
    (this.spec = t), (this.monitor = n);
  }
}
function dF(e, t) {
  const n = T.exports.useMemo(() => new fF(e, t), [t]);
  return (
    T.exports.useEffect(() => {
      n.spec = e;
    }, [e]),
    n
  );
}
function pF(e, t, n) {
  const r = vi(),
    i = dF(e, t),
    l = cF(e);
  Bo(
    function () {
      const [a, f] = qN(l, i, r);
      return t.receiveHandlerId(a), n.receiveHandlerId(a), f;
    },
    [r, t, i, n, l.map((s) => s.toString()).join("|")]
  );
}
function dg(e, t) {
  const n = DC(e, t),
    r = aF(),
    i = sF(n.options);
  return pF(n, r, i), [AC(n.collect, r, i), uF(i)];
}
var Qi;
(function (e) {
  (e.mouse = "mouse"), (e.touch = "touch"), (e.keyboard = "keyboard");
})(Qi || (Qi = {}));
class hF {
  get delay() {
    var t;
    return (t = this.args.delay) !== null && t !== void 0 ? t : 0;
  }
  get scrollAngleRanges() {
    return this.args.scrollAngleRanges;
  }
  get getDropTargetElementsAtPoint() {
    return this.args.getDropTargetElementsAtPoint;
  }
  get ignoreContextMenu() {
    var t;
    return (t = this.args.ignoreContextMenu) !== null && t !== void 0 ? t : !1;
  }
  get enableHoverOutsideTarget() {
    var t;
    return (t = this.args.enableHoverOutsideTarget) !== null && t !== void 0
      ? t
      : !1;
  }
  get enableKeyboardEvents() {
    var t;
    return (t = this.args.enableKeyboardEvents) !== null && t !== void 0
      ? t
      : !1;
  }
  get enableMouseEvents() {
    var t;
    return (t = this.args.enableMouseEvents) !== null && t !== void 0 ? t : !1;
  }
  get enableTouchEvents() {
    var t;
    return (t = this.args.enableTouchEvents) !== null && t !== void 0 ? t : !0;
  }
  get touchSlop() {
    return this.args.touchSlop || 0;
  }
  get delayTouchStart() {
    var t, n, r, i;
    return (i =
      (r =
        (t = this.args) === null || t === void 0
          ? void 0
          : t.delayTouchStart) !== null && r !== void 0
        ? r
        : (n = this.args) === null || n === void 0
        ? void 0
        : n.delay) !== null && i !== void 0
      ? i
      : 0;
  }
  get delayMouseStart() {
    var t, n, r, i;
    return (i =
      (r =
        (t = this.args) === null || t === void 0
          ? void 0
          : t.delayMouseStart) !== null && r !== void 0
        ? r
        : (n = this.args) === null || n === void 0
        ? void 0
        : n.delay) !== null && i !== void 0
      ? i
      : 0;
  }
  get window() {
    if (this.context && this.context.window) return this.context.window;
    if (typeof window < "u") return window;
  }
  get document() {
    var t;
    if (!((t = this.context) === null || t === void 0) && t.document)
      return this.context.document;
    if (this.window) return this.window.document;
  }
  get rootElement() {
    var t;
    return (
      ((t = this.args) === null || t === void 0 ? void 0 : t.rootElement) ||
      this.document
    );
  }
  constructor(t, n) {
    (this.args = t), (this.context = n);
  }
}
function gF(e, t, n, r) {
  return Math.sqrt(Math.pow(Math.abs(n - e), 2) + Math.pow(Math.abs(r - t), 2));
}
function mF(e, t, n, r, i) {
  if (!i) return !1;
  const l = (Math.atan2(r - t, n - e) * 180) / Math.PI + 180;
  for (let s = 0; s < i.length; ++s) {
    const a = i[s];
    if (a && (a.start == null || l >= a.start) && (a.end == null || l <= a.end))
      return !0;
  }
  return !1;
}
const vF = { Left: 1, Right: 2, Center: 4 },
  yF = { Left: 0, Center: 1, Right: 2 };
function Hp(e) {
  return e.button === void 0 || e.button === yF.Left;
}
function xF(e) {
  return e.buttons === void 0 || (e.buttons & vF.Left) === 0;
}
function MC(e) {
  return !!e.targetTouches;
}
const wF = 1;
function SF(e) {
  const t = e.nodeType === wF ? e : e.parentElement;
  if (!t) return;
  const { top: n, left: r } = t.getBoundingClientRect();
  return { x: r, y: n };
}
function EF(e, t) {
  if (e.targetTouches.length === 1) return zc(e.targetTouches[0]);
  if (t && e.touches.length === 1 && e.touches[0].target === t.target)
    return zc(e.touches[0]);
}
function zc(e, t) {
  return MC(e) ? EF(e, t) : { x: e.clientX, y: e.clientY };
}
const kx = (() => {
    let e = !1;
    try {
      addEventListener(
        "test",
        () => {},
        Object.defineProperty({}, "passive", {
          get() {
            return (e = !0), !0;
          },
        })
      );
    } catch {}
    return e;
  })(),
  Pu = {
    [Qi.mouse]: {
      start: "mousedown",
      move: "mousemove",
      end: "mouseup",
      contextmenu: "contextmenu",
    },
    [Qi.touch]: { start: "touchstart", move: "touchmove", end: "touchend" },
    [Qi.keyboard]: { keydown: "keydown" },
  };
class Yu {
  profile() {
    var t;
    return {
      sourceNodes: this.sourceNodes.size,
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      targetNodes: this.targetNodes.size,
      dragOverTargetIds:
        ((t = this.dragOverTargetIds) === null || t === void 0
          ? void 0
          : t.length) || 0,
    };
  }
  get document() {
    return this.options.document;
  }
  setup() {
    const t = this.options.rootElement;
    !t ||
      (_e(!Yu.isSetUp, "Cannot have two Touch backends at the same time."),
      (Yu.isSetUp = !0),
      this.addEventListener(t, "start", this.getTopMoveStartHandler()),
      this.addEventListener(t, "start", this.handleTopMoveStartCapture, !0),
      this.addEventListener(t, "move", this.handleTopMove),
      this.addEventListener(t, "move", this.handleTopMoveCapture, !0),
      this.addEventListener(t, "end", this.handleTopMoveEndCapture, !0),
      this.options.enableMouseEvents &&
        !this.options.ignoreContextMenu &&
        this.addEventListener(t, "contextmenu", this.handleTopMoveEndCapture),
      this.options.enableKeyboardEvents &&
        this.addEventListener(t, "keydown", this.handleCancelOnEscape, !0));
  }
  teardown() {
    const t = this.options.rootElement;
    !t ||
      ((Yu.isSetUp = !1),
      (this._mouseClientOffset = {}),
      this.removeEventListener(t, "start", this.handleTopMoveStartCapture, !0),
      this.removeEventListener(t, "start", this.handleTopMoveStart),
      this.removeEventListener(t, "move", this.handleTopMoveCapture, !0),
      this.removeEventListener(t, "move", this.handleTopMove),
      this.removeEventListener(t, "end", this.handleTopMoveEndCapture, !0),
      this.options.enableMouseEvents &&
        !this.options.ignoreContextMenu &&
        this.removeEventListener(
          t,
          "contextmenu",
          this.handleTopMoveEndCapture
        ),
      this.options.enableKeyboardEvents &&
        this.removeEventListener(t, "keydown", this.handleCancelOnEscape, !0),
      this.uninstallSourceNodeRemovalObserver());
  }
  addEventListener(t, n, r, i = !1) {
    const l = kx ? { capture: i, passive: !1 } : i;
    this.listenerTypes.forEach(function (s) {
      const a = Pu[s][n];
      a && t.addEventListener(a, r, l);
    });
  }
  removeEventListener(t, n, r, i = !1) {
    const l = kx ? { capture: i, passive: !1 } : i;
    this.listenerTypes.forEach(function (s) {
      const a = Pu[s][n];
      a && t.removeEventListener(a, r, l);
    });
  }
  connectDragSource(t, n) {
    const r = this.handleMoveStart.bind(this, t);
    return (
      this.sourceNodes.set(t, n),
      this.addEventListener(n, "start", r),
      () => {
        this.sourceNodes.delete(t), this.removeEventListener(n, "start", r);
      }
    );
  }
  connectDragPreview(t, n, r) {
    return (
      this.sourcePreviewNodeOptions.set(t, r),
      this.sourcePreviewNodes.set(t, n),
      () => {
        this.sourcePreviewNodes.delete(t),
          this.sourcePreviewNodeOptions.delete(t);
      }
    );
  }
  connectDropTarget(t, n) {
    const r = this.options.rootElement;
    if (!this.document || !r) return () => {};
    const i = (l) => {
      if (!this.document || !r || !this.monitor.isDragging()) return;
      let s;
      switch (l.type) {
        case Pu.mouse.move:
          s = { x: l.clientX, y: l.clientY };
          break;
        case Pu.touch.move:
          var a, f;
          s = {
            x:
              ((a = l.touches[0]) === null || a === void 0
                ? void 0
                : a.clientX) || 0,
            y:
              ((f = l.touches[0]) === null || f === void 0
                ? void 0
                : f.clientY) || 0,
          };
          break;
      }
      const d = s != null ? this.document.elementFromPoint(s.x, s.y) : void 0,
        h = d && n.contains(d);
      if (d === n || h) return this.handleMove(l, t);
    };
    return (
      this.addEventListener(this.document.body, "move", i),
      this.targetNodes.set(t, n),
      () => {
        this.document &&
          (this.targetNodes.delete(t),
          this.removeEventListener(this.document.body, "move", i));
      }
    );
  }
  getTopMoveStartHandler() {
    return !this.options.delayTouchStart && !this.options.delayMouseStart
      ? this.handleTopMoveStart
      : this.handleTopMoveStartDelay;
  }
  installSourceNodeRemovalObserver(t) {
    this.uninstallSourceNodeRemovalObserver(),
      (this.draggedSourceNode = t),
      (this.draggedSourceNodeRemovalObserver = new MutationObserver(() => {
        t &&
          !t.parentElement &&
          (this.resurrectSourceNode(),
          this.uninstallSourceNodeRemovalObserver());
      })),
      !(!t || !t.parentElement) &&
        this.draggedSourceNodeRemovalObserver.observe(t.parentElement, {
          childList: !0,
        });
  }
  resurrectSourceNode() {
    this.document &&
      this.draggedSourceNode &&
      ((this.draggedSourceNode.style.display = "none"),
      this.draggedSourceNode.removeAttribute("data-reactid"),
      this.document.body.appendChild(this.draggedSourceNode));
  }
  uninstallSourceNodeRemovalObserver() {
    this.draggedSourceNodeRemovalObserver &&
      this.draggedSourceNodeRemovalObserver.disconnect(),
      (this.draggedSourceNodeRemovalObserver = void 0),
      (this.draggedSourceNode = void 0);
  }
  constructor(t, n, r) {
    (this.getSourceClientOffset = (i) => {
      const l = this.sourceNodes.get(i);
      return l && SF(l);
    }),
      (this.handleTopMoveStartCapture = (i) => {
        !Hp(i) || (this.moveStartSourceIds = []);
      }),
      (this.handleMoveStart = (i) => {
        Array.isArray(this.moveStartSourceIds) &&
          this.moveStartSourceIds.unshift(i);
      }),
      (this.handleTopMoveStart = (i) => {
        if (!Hp(i)) return;
        const l = zc(i);
        l &&
          (MC(i) && (this.lastTargetTouchFallback = i.targetTouches[0]),
          (this._mouseClientOffset = l)),
          (this.waitingForDelay = !1);
      }),
      (this.handleTopMoveStartDelay = (i) => {
        if (!Hp(i)) return;
        const l =
          i.type === Pu.touch.start
            ? this.options.delayTouchStart
            : this.options.delayMouseStart;
        (this.timeout = setTimeout(this.handleTopMoveStart.bind(this, i), l)),
          (this.waitingForDelay = !0);
      }),
      (this.handleTopMoveCapture = () => {
        this.dragOverTargetIds = [];
      }),
      (this.handleMove = (i, l) => {
        this.dragOverTargetIds && this.dragOverTargetIds.unshift(l);
      }),
      (this.handleTopMove = (i) => {
        if (
          (this.timeout && clearTimeout(this.timeout),
          !this.document || this.waitingForDelay)
        )
          return;
        const { moveStartSourceIds: l, dragOverTargetIds: s } = this,
          a = this.options.enableHoverOutsideTarget,
          f = zc(i, this.lastTargetTouchFallback);
        if (!f) return;
        if (
          this._isScrolling ||
          (!this.monitor.isDragging() &&
            mF(
              this._mouseClientOffset.x || 0,
              this._mouseClientOffset.y || 0,
              f.x,
              f.y,
              this.options.scrollAngleRanges
            ))
        ) {
          this._isScrolling = !0;
          return;
        }
        if (
          (!this.monitor.isDragging() &&
            this._mouseClientOffset.hasOwnProperty("x") &&
            l &&
            gF(
              this._mouseClientOffset.x || 0,
              this._mouseClientOffset.y || 0,
              f.x,
              f.y
            ) > (this.options.touchSlop ? this.options.touchSlop : 0) &&
            ((this.moveStartSourceIds = void 0),
            this.actions.beginDrag(l, {
              clientOffset: this._mouseClientOffset,
              getSourceClientOffset: this.getSourceClientOffset,
              publishSource: !1,
            })),
          !this.monitor.isDragging())
        )
          return;
        const d = this.sourceNodes.get(this.monitor.getSourceId());
        this.installSourceNodeRemovalObserver(d),
          this.actions.publishDragSource(),
          i.cancelable && i.preventDefault();
        const h = (s || [])
            .map((w) => this.targetNodes.get(w))
            .filter((w) => !!w),
          g = this.options.getDropTargetElementsAtPoint
            ? this.options.getDropTargetElementsAtPoint(f.x, f.y, h)
            : this.document.elementsFromPoint(f.x, f.y),
          y = [];
        for (const w in g) {
          if (!g.hasOwnProperty(w)) continue;
          let E = g[w];
          for (E != null && y.push(E); E; )
            (E = E.parentElement), E && y.indexOf(E) === -1 && y.push(E);
        }
        const m = y
          .filter((w) => h.indexOf(w) > -1)
          .map((w) => this._getDropTargetId(w))
          .filter((w) => !!w)
          .filter((w, E, A) => A.indexOf(w) === E);
        if (a)
          for (const w in this.targetNodes) {
            const E = this.targetNodes.get(w);
            if (d && E && E.contains(d) && m.indexOf(w) === -1) {
              m.unshift(w);
              break;
            }
          }
        m.reverse(), this.actions.hover(m, { clientOffset: f });
      }),
      (this._getDropTargetId = (i) => {
        const l = this.targetNodes.keys();
        let s = l.next();
        for (; s.done === !1; ) {
          const a = s.value;
          if (i === this.targetNodes.get(a)) return a;
          s = l.next();
        }
      }),
      (this.handleTopMoveEndCapture = (i) => {
        if (
          ((this._isScrolling = !1),
          (this.lastTargetTouchFallback = void 0),
          !!xF(i))
        ) {
          if (!this.monitor.isDragging() || this.monitor.didDrop()) {
            this.moveStartSourceIds = void 0;
            return;
          }
          i.cancelable && i.preventDefault(),
            (this._mouseClientOffset = {}),
            this.uninstallSourceNodeRemovalObserver(),
            this.actions.drop(),
            this.actions.endDrag();
        }
      }),
      (this.handleCancelOnEscape = (i) => {
        i.key === "Escape" &&
          this.monitor.isDragging() &&
          ((this._mouseClientOffset = {}),
          this.uninstallSourceNodeRemovalObserver(),
          this.actions.endDrag());
      }),
      (this.options = new hF(r, n)),
      (this.actions = t.getActions()),
      (this.monitor = t.getMonitor()),
      (this.sourceNodes = new Map()),
      (this.sourcePreviewNodes = new Map()),
      (this.sourcePreviewNodeOptions = new Map()),
      (this.targetNodes = new Map()),
      (this.listenerTypes = []),
      (this._mouseClientOffset = {}),
      (this._isScrolling = !1),
      this.options.enableMouseEvents && this.listenerTypes.push(Qi.mouse),
      this.options.enableTouchEvents && this.listenerTypes.push(Qi.touch),
      this.options.enableKeyboardEvents && this.listenerTypes.push(Qi.keyboard);
  }
}
const CF = function (t, n = {}, r = {}) {
  return new Yu(t, n, r);
};
function Or(e) {
  for (
    var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (n.length
        ? " " +
          n
            .map(function (i) {
              return "'" + i + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function ro(e) {
  return !!e && !!e[at];
}
function gi(e) {
  var t;
  return (
    !!e &&
    ((function (n) {
      if (!n || typeof n != "object") return !1;
      var r = Object.getPrototypeOf(n);
      if (r === null) return !0;
      var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
      return (
        i === Object ||
        (typeof i == "function" && Function.toString.call(i) === PF)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Px] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[Px]) ||
      Vm(e) ||
      qm(e))
  );
}
function Uo(e, t, n) {
  n === void 0 && (n = !1),
    nu(e) === 0
      ? (n ? Object.keys : Fl)(e).forEach(function (r) {
          (n && typeof r == "symbol") || t(r, e[r], e);
        })
      : e.forEach(function (r, i) {
          return t(i, r, e);
        });
}
function nu(e) {
  var t = e[at];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Vm(e)
    ? 2
    : qm(e)
    ? 3
    : 0;
}
function Nl(e, t) {
  return nu(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function kF(e, t) {
  return nu(e) === 2 ? e.get(t) : e[t];
}
function NC(e, t, n) {
  var r = nu(e);
  r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function FC(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Vm(e) {
  return TF && e instanceof Map;
}
function qm(e) {
  return RF && e instanceof Set;
}
function Co(e) {
  return e.o || e.t;
}
function Gm(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = $C(e);
  delete t[at];
  for (var n = Fl(t), r = 0; r < n.length; r++) {
    var i = n[r],
      l = t[i];
    l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
      (l.get || l.set) &&
        (t[i] = {
          configurable: !0,
          writable: !0,
          enumerable: l.enumerable,
          value: e[i],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Km(e, t) {
  return (
    t === void 0 && (t = !1),
    Qm(e) ||
      ro(e) ||
      !gi(e) ||
      (nu(e) > 1 && (e.set = e.add = e.clear = e.delete = _F),
      Object.freeze(e),
      t &&
        Uo(
          e,
          function (n, r) {
            return Km(r, !0);
          },
          !0
        )),
    e
  );
}
function _F() {
  Or(2);
}
function Qm(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Wr(e) {
  var t = vg[e];
  return t || Or(18, e), t;
}
function bF(e, t) {
  vg[e] || (vg[e] = t);
}
function pg() {
  return ws;
}
function jp(e, t) {
  t && (Wr("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function $c(e) {
  hg(e), e.p.forEach(OF), (e.p = null);
}
function hg(e) {
  e === ws && (ws = e.l);
}
function _x(e) {
  return (ws = { p: [], l: ws, h: e, m: !0, _: 0 });
}
function OF(e) {
  var t = e[at];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function Wp(e, t) {
  t._ = t.p.length;
  var n = t.p[0],
    r = e !== void 0 && e !== n;
  return (
    t.h.g || Wr("ES5").S(t, e, r),
    r
      ? (n[at].P && ($c(t), Or(4)),
        gi(e) && ((e = Bc(t, e)), t.l || Uc(t, e)),
        t.u && Wr("Patches").M(n[at].t, e, t.u, t.s))
      : (e = Bc(t, n, [])),
    $c(t),
    t.u && t.v(t.u, t.s),
    e !== zC ? e : void 0
  );
}
function Bc(e, t, n) {
  if (Qm(t)) return t;
  var r = t[at];
  if (!r)
    return (
      Uo(
        t,
        function (l, s) {
          return bx(e, r, t, l, s, n);
        },
        !0
      ),
      t
    );
  if (r.A !== e) return t;
  if (!r.P) return Uc(e, r.t, !0), r.t;
  if (!r.I) {
    (r.I = !0), r.A._--;
    var i = r.i === 4 || r.i === 5 ? (r.o = Gm(r.k)) : r.o;
    Uo(r.i === 3 ? new Set(i) : i, function (l, s) {
      return bx(e, r, i, l, s, n);
    }),
      Uc(e, i, !1),
      n && e.u && Wr("Patches").R(r, n, e.u, e.s);
  }
  return r.o;
}
function bx(e, t, n, r, i, l) {
  if (ro(i)) {
    var s = Bc(e, i, l && t && t.i !== 3 && !Nl(t.D, r) ? l.concat(r) : void 0);
    if ((NC(n, r, s), !ro(s))) return;
    e.m = !1;
  }
  if (gi(i) && !Qm(i)) {
    if (!e.h.F && e._ < 1) return;
    Bc(e, i), (t && t.A.l) || Uc(e, i);
  }
}
function Uc(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && Km(t, n);
}
function Vp(e, t) {
  var n = e[at];
  return (n ? Co(n) : e)[t];
}
function Ox(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var r = Object.getOwnPropertyDescriptor(n, t);
      if (r) return r;
      n = Object.getPrototypeOf(n);
    }
}
function Fi(e) {
  e.P || ((e.P = !0), e.l && Fi(e.l));
}
function qp(e) {
  e.o || (e.o = Gm(e.t));
}
function gg(e, t, n) {
  var r = Vm(t)
    ? Wr("MapSet").N(t, n)
    : qm(t)
    ? Wr("MapSet").T(t, n)
    : e.g
    ? (function (i, l) {
        var s = Array.isArray(i),
          a = {
            i: s ? 1 : 0,
            A: l ? l.A : pg(),
            P: !1,
            I: !1,
            D: {},
            l,
            t: i,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          f = a,
          d = Ss;
        s && ((f = [a]), (d = Fu));
        var h = Proxy.revocable(f, d),
          g = h.revoke,
          y = h.proxy;
        return (a.k = y), (a.j = g), y;
      })(t, n)
    : Wr("ES5").J(t, n);
  return (n ? n.A : pg()).p.push(r), r;
}
function mg(e) {
  return (
    ro(e) || Or(22, e),
    (function t(n) {
      if (!gi(n)) return n;
      var r,
        i = n[at],
        l = nu(n);
      if (i) {
        if (!i.P && (i.i < 4 || !Wr("ES5").K(i))) return i.t;
        (i.I = !0), (r = Ix(n, l)), (i.I = !1);
      } else r = Ix(n, l);
      return (
        Uo(r, function (s, a) {
          (i && kF(i.t, s) === a) || NC(r, s, t(a));
        }),
        l === 3 ? new Set(r) : r
      );
    })(e)
  );
}
function Ix(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Gm(e);
}
function IF() {
  function e(l, s) {
    var a = i[l];
    return (
      a
        ? (a.enumerable = s)
        : (i[l] = a =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var f = this[at];
                return Ss.get(f, l);
              },
              set: function (f) {
                var d = this[at];
                Ss.set(d, l, f);
              },
            }),
      a
    );
  }
  function t(l) {
    for (var s = l.length - 1; s >= 0; s--) {
      var a = l[s][at];
      if (!a.P)
        switch (a.i) {
          case 5:
            r(a) && Fi(a);
            break;
          case 4:
            n(a) && Fi(a);
        }
    }
  }
  function n(l) {
    for (var s = l.t, a = l.k, f = Fl(a), d = f.length - 1; d >= 0; d--) {
      var h = f[d];
      if (h !== at) {
        var g = s[h];
        if (g === void 0 && !Nl(s, h)) return !0;
        var y = a[h],
          m = y && y[at];
        if (m ? m.t !== g : !FC(y, g)) return !0;
      }
    }
    var w = !!s[at];
    return f.length !== Fl(s).length + (w ? 0 : 1);
  }
  function r(l) {
    var s = l.k;
    if (s.length !== l.t.length) return !0;
    var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
    if (a && !a.get) return !0;
    for (var f = 0; f < s.length; f++) if (!s.hasOwnProperty(f)) return !0;
    return !1;
  }
  var i = {};
  bF("ES5", {
    J: function (l, s) {
      var a = Array.isArray(l),
        f = (function (h, g) {
          if (h) {
            for (var y = Array(g.length), m = 0; m < g.length; m++)
              Object.defineProperty(y, "" + m, e(m, !0));
            return y;
          }
          var w = $C(g);
          delete w[at];
          for (var E = Fl(w), A = 0; A < E.length; A++) {
            var v = E[A];
            w[v] = e(v, h || !!w[v].enumerable);
          }
          return Object.create(Object.getPrototypeOf(g), w);
        })(a, l),
        d = {
          i: a ? 5 : 4,
          A: s ? s.A : pg(),
          P: !1,
          I: !1,
          D: {},
          l: s,
          t: l,
          k: f,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(f, at, { value: d, writable: !0 }), f;
    },
    S: function (l, s, a) {
      a
        ? ro(s) && s[at].A === l && t(l.p)
        : (l.u &&
            (function f(d) {
              if (d && typeof d == "object") {
                var h = d[at];
                if (h) {
                  var g = h.t,
                    y = h.k,
                    m = h.D,
                    w = h.i;
                  if (w === 4)
                    Uo(y, function (_) {
                      _ !== at &&
                        (g[_] !== void 0 || Nl(g, _)
                          ? m[_] || f(y[_])
                          : ((m[_] = !0), Fi(h)));
                    }),
                      Uo(g, function (_) {
                        y[_] !== void 0 || Nl(y, _) || ((m[_] = !1), Fi(h));
                      });
                  else if (w === 5) {
                    if ((r(h) && (Fi(h), (m.length = !0)), y.length < g.length))
                      for (var E = y.length; E < g.length; E++) m[E] = !1;
                    else for (var A = g.length; A < y.length; A++) m[A] = !0;
                    for (
                      var v = Math.min(y.length, g.length), S = 0;
                      S < v;
                      S++
                    )
                      y.hasOwnProperty(S) || (m[S] = !0),
                        m[S] === void 0 && f(y[S]);
                  }
                }
              }
            })(l.p[0]),
          t(l.p));
    },
    K: function (l) {
      return l.i === 4 ? n(l) : r(l);
    },
  });
}
var Tx,
  ws,
  Ym = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  TF = typeof Map < "u",
  RF = typeof Set < "u",
  Rx = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  zC = Ym
    ? Symbol.for("immer-nothing")
    : (((Tx = {})["immer-nothing"] = !0), Tx),
  Px = Ym ? Symbol.for("immer-draftable") : "__$immer_draftable",
  at = Ym ? Symbol.for("immer-state") : "__$immer_state",
  PF = "" + Object.prototype.constructor,
  Fl =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  $C =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Fl(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n);
        }),
        t
      );
    },
  vg = {},
  Ss = {
    get: function (e, t) {
      if (t === at) return e;
      var n = Co(e);
      if (!Nl(n, t))
        return (function (i, l, s) {
          var a,
            f = Ox(l, s);
          return f
            ? "value" in f
              ? f.value
              : (a = f.get) === null || a === void 0
              ? void 0
              : a.call(i.k)
            : void 0;
        })(e, n, t);
      var r = n[t];
      return e.I || !gi(r)
        ? r
        : r === Vp(e.t, t)
        ? (qp(e), (e.o[t] = gg(e.A.h, r, e)))
        : r;
    },
    has: function (e, t) {
      return t in Co(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Co(e));
    },
    set: function (e, t, n) {
      var r = Ox(Co(e), t);
      if (r?.set) return r.set.call(e.k, n), !0;
      if (!e.P) {
        var i = Vp(Co(e), t),
          l = i?.[at];
        if (l && l.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
        if (FC(n, i) && (n !== void 0 || Nl(e.t, t))) return !0;
        qp(e), Fi(e);
      }
      return (
        (e.o[t] === n && typeof n != "number" && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Vp(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), qp(e), Fi(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Co(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.i !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty: function () {
      Or(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Or(12);
    },
  },
  Fu = {};
Uo(Ss, function (e, t) {
  Fu[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (Fu.deleteProperty = function (e, t) {
    return Fu.set.call(this, e, t, void 0);
  }),
  (Fu.set = function (e, t, n) {
    return Ss.set.call(this, e[0], t, n, e[0]);
  });
var AF = (function () {
    function e(n) {
      var r = this;
      (this.g = Rx),
        (this.F = !0),
        (this.produce = function (i, l, s) {
          if (typeof i == "function" && typeof l != "function") {
            var a = l;
            l = i;
            var f = r;
            return function (E) {
              var A = this;
              E === void 0 && (E = a);
              for (
                var v = arguments.length, S = Array(v > 1 ? v - 1 : 0), _ = 1;
                _ < v;
                _++
              )
                S[_ - 1] = arguments[_];
              return f.produce(E, function (P) {
                var D;
                return (D = l).call.apply(D, [A, P].concat(S));
              });
            };
          }
          var d;
          if (
            (typeof l != "function" && Or(6),
            s !== void 0 && typeof s != "function" && Or(7),
            gi(i))
          ) {
            var h = _x(r),
              g = gg(r, i, void 0),
              y = !0;
            try {
              (d = l(g)), (y = !1);
            } finally {
              y ? $c(h) : hg(h);
            }
            return typeof Promise < "u" && d instanceof Promise
              ? d.then(
                  function (E) {
                    return jp(h, s), Wp(E, h);
                  },
                  function (E) {
                    throw ($c(h), E);
                  }
                )
              : (jp(h, s), Wp(d, h));
          }
          if (!i || typeof i != "object") {
            if (
              ((d = l(i)) === void 0 && (d = i),
              d === zC && (d = void 0),
              r.F && Km(d, !0),
              s)
            ) {
              var m = [],
                w = [];
              Wr("Patches").M(i, d, m, w), s(m, w);
            }
            return d;
          }
          Or(21, i);
        }),
        (this.produceWithPatches = function (i, l) {
          if (typeof i == "function")
            return function (d) {
              for (
                var h = arguments.length, g = Array(h > 1 ? h - 1 : 0), y = 1;
                y < h;
                y++
              )
                g[y - 1] = arguments[y];
              return r.produceWithPatches(d, function (m) {
                return i.apply(void 0, [m].concat(g));
              });
            };
          var s,
            a,
            f = r.produce(i, l, function (d, h) {
              (s = d), (a = h);
            });
          return typeof Promise < "u" && f instanceof Promise
            ? f.then(function (d) {
                return [d, s, a];
              })
            : [f, s, a];
        }),
        typeof n?.useProxies == "boolean" && this.setUseProxies(n.useProxies),
        typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (n) {
        gi(n) || Or(8), ro(n) && (n = mg(n));
        var r = _x(this),
          i = gg(this, n, void 0);
        return (i[at].C = !0), hg(r), i;
      }),
      (t.finishDraft = function (n, r) {
        var i = n && n[at],
          l = i.A;
        return jp(l, r), Wp(void 0, l);
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n;
      }),
      (t.setUseProxies = function (n) {
        n && !Rx && Or(20), (this.g = n);
      }),
      (t.applyPatches = function (n, r) {
        var i;
        for (i = r.length - 1; i >= 0; i--) {
          var l = r[i];
          if (l.path.length === 0 && l.op === "replace") {
            n = l.value;
            break;
          }
        }
        i > -1 && (r = r.slice(i + 1));
        var s = Wr("Patches").$;
        return ro(n)
          ? s(n, r)
          : this.produce(n, function (a) {
              return s(a, r);
            });
      }),
      e
    );
  })(),
  Un = new AF(),
  BC = Un.produce;
Un.produceWithPatches.bind(Un);
Un.setAutoFreeze.bind(Un);
Un.setUseProxies.bind(Un);
Un.applyPatches.bind(Un);
Un.createDraft.bind(Un);
Un.finishDraft.bind(Un);
function UC(e) {
  var t = function (r) {
    var i = r.dispatch,
      l = r.getState;
    return function (s) {
      return function (a) {
        return typeof a == "function" ? a(i, l, e) : s(a);
      };
    };
  };
  return t;
}
var HC = UC();
HC.withExtraArgument = UC;
const Ax = HC;
var DF =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var l in i)
                Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  LF =
    (globalThis && globalThis.__generator) ||
    function (e, t) {
      var n = {
          label: 0,
          sent: function () {
            if (l[0] & 1) throw l[1];
            return l[1];
          },
          trys: [],
          ops: [],
        },
        r,
        i,
        l,
        s;
      return (
        (s = { next: a(0), throw: a(1), return: a(2) }),
        typeof Symbol == "function" &&
          (s[Symbol.iterator] = function () {
            return this;
          }),
        s
      );
      function a(d) {
        return function (h) {
          return f([d, h]);
        };
      }
      function f(d) {
        if (r) throw new TypeError("Generator is already executing.");
        for (; n; )
          try {
            if (
              ((r = 1),
              i &&
                (l =
                  d[0] & 2
                    ? i.return
                    : d[0]
                    ? i.throw || ((l = i.return) && l.call(i), 0)
                    : i.next) &&
                !(l = l.call(i, d[1])).done)
            )
              return l;
            switch (((i = 0), l && (d = [d[0] & 2, l.value]), d[0])) {
              case 0:
              case 1:
                l = d;
                break;
              case 4:
                return n.label++, { value: d[1], done: !1 };
              case 5:
                n.label++, (i = d[1]), (d = [0]);
                continue;
              case 7:
                (d = n.ops.pop()), n.trys.pop();
                continue;
              default:
                if (
                  ((l = n.trys),
                  !(l = l.length > 0 && l[l.length - 1]) &&
                    (d[0] === 6 || d[0] === 2))
                ) {
                  n = 0;
                  continue;
                }
                if (d[0] === 3 && (!l || (d[1] > l[0] && d[1] < l[3]))) {
                  n.label = d[1];
                  break;
                }
                if (d[0] === 6 && n.label < l[1]) {
                  (n.label = l[1]), (l = d);
                  break;
                }
                if (l && n.label < l[2]) {
                  (n.label = l[2]), n.ops.push(d);
                  break;
                }
                l[2] && n.ops.pop(), n.trys.pop();
                continue;
            }
            d = t.call(e, n);
          } catch (h) {
            (d = [6, h]), (i = 0);
          } finally {
            r = l = 0;
          }
        if (d[0] & 5) throw d[1];
        return { value: d[0] ? d[1] : void 0, done: !0 };
      }
    },
  Hc =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
      return e;
    },
  MF = Object.defineProperty,
  NF = Object.defineProperties,
  FF = Object.getOwnPropertyDescriptors,
  Dx = Object.getOwnPropertySymbols,
  zF = Object.prototype.hasOwnProperty,
  $F = Object.prototype.propertyIsEnumerable,
  Lx = function (e, t, n) {
    return t in e
      ? MF(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  Yi = function (e, t) {
    for (var n in t || (t = {})) zF.call(t, n) && Lx(e, n, t[n]);
    if (Dx)
      for (var r = 0, i = Dx(t); r < i.length; r++) {
        var n = i[r];
        $F.call(t, n) && Lx(e, n, t[n]);
      }
    return e;
  },
  Gp = function (e, t) {
    return NF(e, FF(t));
  },
  BF = function (e, t, n) {
    return new Promise(function (r, i) {
      var l = function (f) {
          try {
            a(n.next(f));
          } catch (d) {
            i(d);
          }
        },
        s = function (f) {
          try {
            a(n.throw(f));
          } catch (d) {
            i(d);
          }
        },
        a = function (f) {
          return f.done ? r(f.value) : Promise.resolve(f.value).then(l, s);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  UF =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Fc
              : Fc.apply(null, arguments);
        };
function HF(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var n = t; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return t === n;
}
var jF = (function (e) {
  DF(t, e);
  function t() {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    var i = e.apply(this, n) || this;
    return Object.setPrototypeOf(i, t.prototype), i;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return e.prototype.concat.apply(this, n);
    }),
    (t.prototype.prepend = function () {
      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, Hc([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, Hc([void 0], n.concat(this))))();
    }),
    t
  );
})(Array);
function yg(e) {
  return gi(e) ? BC(e, function () {}) : e;
}
function WF(e) {
  return typeof e == "boolean";
}
function VF() {
  return function (t) {
    return qF(t);
  };
}
function qF(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    n = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var r = new jF();
  return (
    n && (WF(n) ? r.push(Ax) : r.push(Ax.withExtraArgument(n.extraArgument))), r
  );
}
var GF = !0;
function KF(e) {
  var t = VF(),
    n = e || {},
    r = n.reducer,
    i = r === void 0 ? void 0 : r,
    l = n.middleware,
    s = l === void 0 ? t() : l,
    a = n.devTools,
    f = a === void 0 ? !0 : a,
    d = n.preloadedState,
    h = d === void 0 ? void 0 : d,
    g = n.enhancers,
    y = g === void 0 ? void 0 : g,
    m;
  if (typeof i == "function") m = i;
  else if (HF(i)) m = wM(i);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var w = s;
  typeof w == "function" && (w = w(t));
  var E = SM.apply(void 0, w),
    A = Fc;
  f && (A = UF(Yi({ trace: !GF }, typeof f == "object" && f)));
  var v = [E];
  Array.isArray(y) ? (v = Hc([E], y)) : typeof y == "function" && (v = y(v));
  var S = A.apply(void 0, v);
  return zm(m, h, S);
}
function Xi(e, t) {
  function n() {
    for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
    if (t) {
      var l = t.apply(void 0, r);
      if (!l) throw new Error("prepareAction did not return an object");
      return Yi(
        Yi({ type: e, payload: l.payload }, "meta" in l && { meta: l.meta }),
        "error" in l && { error: l.error }
      );
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = function () {
      return "" + e;
    }),
    (n.type = e),
    (n.match = function (r) {
      return r.type === e;
    }),
    n
  );
}
function jC(e) {
  var t = {},
    n = [],
    r,
    i = {
      addCase: function (l, s) {
        var a = typeof l == "string" ? l : l.type;
        if (a in t)
          throw new Error(
            "addCase cannot be called with two reducers for the same action type"
          );
        return (t[a] = s), i;
      },
      addMatcher: function (l, s) {
        return n.push({ matcher: l, reducer: s }), i;
      },
      addDefaultCase: function (l) {
        return (r = l), i;
      },
    };
  return e(i), [t, n, r];
}
function QF(e) {
  return typeof e == "function";
}
function YF(e, t, n, r) {
  n === void 0 && (n = []);
  var i = typeof t == "function" ? jC(t) : [t, n, r],
    l = i[0],
    s = i[1],
    a = i[2],
    f;
  if (QF(e))
    f = function () {
      return yg(e());
    };
  else {
    var d = yg(e);
    f = function () {
      return d;
    };
  }
  function h(g, y) {
    g === void 0 && (g = f());
    var m = Hc(
      [l[y.type]],
      s
        .filter(function (w) {
          var E = w.matcher;
          return E(y);
        })
        .map(function (w) {
          var E = w.reducer;
          return E;
        })
    );
    return (
      m.filter(function (w) {
        return !!w;
      }).length === 0 && (m = [a]),
      m.reduce(function (w, E) {
        if (E)
          if (ro(w)) {
            var A = w,
              v = E(A, y);
            return v === void 0 ? w : v;
          } else {
            if (gi(w))
              return BC(w, function (S) {
                return E(S, y);
              });
            var v = E(w, y);
            if (v === void 0) {
              if (w === null) return w;
              throw Error(
                "A case reducer on a non-draftable value must not return undefined"
              );
            }
            return v;
          }
        return w;
      }, g)
    );
  }
  return (h.getInitialState = f), h;
}
function XF(e, t) {
  return e + "/" + t;
}
function Xm(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var n =
      typeof e.initialState == "function" ? e.initialState : yg(e.initialState),
    r = e.reducers || {},
    i = Object.keys(r),
    l = {},
    s = {},
    a = {};
  i.forEach(function (h) {
    var g = r[h],
      y = XF(t, h),
      m,
      w;
    "reducer" in g ? ((m = g.reducer), (w = g.prepare)) : (m = g),
      (l[h] = m),
      (s[y] = m),
      (a[h] = w ? Xi(y, w) : Xi(y));
  });
  function f() {
    var h =
        typeof e.extraReducers == "function"
          ? jC(e.extraReducers)
          : [e.extraReducers],
      g = h[0],
      y = g === void 0 ? {} : g,
      m = h[1],
      w = m === void 0 ? [] : m,
      E = h[2],
      A = E === void 0 ? void 0 : E,
      v = Yi(Yi({}, y), s);
    return YF(n, function (S) {
      for (var _ in v) S.addCase(_, v[_]);
      for (var P = 0, D = w; P < D.length; P++) {
        var R = D[P];
        S.addMatcher(R.matcher, R.reducer);
      }
      A && S.addDefaultCase(A);
    });
  }
  var d;
  return {
    name: t,
    reducer: function (h, g) {
      return d || (d = f()), d(h, g);
    },
    actions: a,
    caseReducers: l,
    getInitialState: function () {
      return d || (d = f()), d.getInitialState();
    },
  };
}
var ZF = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  JF = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", n = e; n--; ) t += ZF[(Math.random() * 64) | 0];
    return t;
  },
  e3 = ["name", "message", "stack", "code"],
  Kp = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  Mx = (function () {
    function e(t, n) {
      (this.payload = t), (this.meta = n);
    }
    return e;
  })(),
  t3 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, n = 0, r = e3; n < r.length; n++) {
        var i = r[n];
        typeof e[i] == "string" && (t[i] = e[i]);
      }
      return t;
    }
    return { message: String(e) };
  },
  Zm = (function () {
    function e(t, n, r) {
      var i = Xi(t + "/fulfilled", function (d, h, g, y) {
          return {
            payload: d,
            meta: Gp(Yi({}, y || {}), {
              arg: g,
              requestId: h,
              requestStatus: "fulfilled",
            }),
          };
        }),
        l = Xi(t + "/pending", function (d, h, g) {
          return {
            payload: void 0,
            meta: Gp(Yi({}, g || {}), {
              arg: h,
              requestId: d,
              requestStatus: "pending",
            }),
          };
        }),
        s = Xi(t + "/rejected", function (d, h, g, y, m) {
          return {
            payload: y,
            error: ((r && r.serializeError) || t3)(d || "Rejected"),
            meta: Gp(Yi({}, m || {}), {
              arg: g,
              requestId: h,
              rejectedWithValue: !!y,
              requestStatus: "rejected",
              aborted: d?.name === "AbortError",
              condition: d?.name === "ConditionError",
            }),
          };
        }),
        a =
          typeof AbortController < "u"
            ? AbortController
            : (function () {
                function d() {
                  this.signal = {
                    aborted: !1,
                    addEventListener: function () {},
                    dispatchEvent: function () {
                      return !1;
                    },
                    onabort: function () {},
                    removeEventListener: function () {},
                    reason: void 0,
                    throwIfAborted: function () {},
                  };
                }
                return (d.prototype.abort = function () {}), d;
              })();
      function f(d) {
        return function (h, g, y) {
          var m = r?.idGenerator ? r.idGenerator(d) : JF(),
            w = new a(),
            E;
          function A(S) {
            (E = S), w.abort();
          }
          var v = (function () {
            return BF(this, null, function () {
              var S, _, P, D, R, F, z;
              return LF(this, function (q) {
                switch (q.label) {
                  case 0:
                    return (
                      q.trys.push([0, 4, , 5]),
                      (D =
                        (S = r?.condition) == null
                          ? void 0
                          : S.call(r, d, { getState: g, extra: y })),
                      r3(D) ? [4, D] : [3, 2]
                    );
                  case 1:
                    (D = q.sent()), (q.label = 2);
                  case 2:
                    if (D === !1 || w.signal.aborted)
                      throw {
                        name: "ConditionError",
                        message:
                          "Aborted due to condition callback returning false.",
                      };
                    return (
                      (R = new Promise(function (K, B) {
                        return w.signal.addEventListener("abort", function () {
                          return B({
                            name: "AbortError",
                            message: E || "Aborted",
                          });
                        });
                      })),
                      h(
                        l(
                          m,
                          d,
                          (_ = r?.getPendingMeta) == null
                            ? void 0
                            : _.call(
                                r,
                                { requestId: m, arg: d },
                                { getState: g, extra: y }
                              )
                        )
                      ),
                      [
                        4,
                        Promise.race([
                          R,
                          Promise.resolve(
                            n(d, {
                              dispatch: h,
                              getState: g,
                              extra: y,
                              requestId: m,
                              signal: w.signal,
                              abort: A,
                              rejectWithValue: function (K, B) {
                                return new Kp(K, B);
                              },
                              fulfillWithValue: function (K, B) {
                                return new Mx(K, B);
                              },
                            })
                          ).then(function (K) {
                            if (K instanceof Kp) throw K;
                            return K instanceof Mx
                              ? i(K.payload, m, d, K.meta)
                              : i(K, m, d);
                          }),
                        ]),
                      ]
                    );
                  case 3:
                    return (P = q.sent()), [3, 5];
                  case 4:
                    return (
                      (F = q.sent()),
                      (P =
                        F instanceof Kp
                          ? s(null, m, d, F.payload, F.meta)
                          : s(F, m, d)),
                      [3, 5]
                    );
                  case 5:
                    return (
                      (z =
                        r &&
                        !r.dispatchConditionRejection &&
                        s.match(P) &&
                        P.meta.condition),
                      z || h(P),
                      [2, P]
                    );
                }
              });
            });
          })();
          return Object.assign(v, {
            abort: A,
            requestId: m,
            arg: d,
            unwrap: function () {
              return v.then(n3);
            },
          });
        };
      }
      return Object.assign(f, {
        pending: l,
        rejected: s,
        fulfilled: i,
        typePrefix: t,
      });
    }
    return (
      (e.withTypes = function () {
        return e;
      }),
      e
    );
  })();
function n3(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function r3(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var i3 = function (e) {
    return e && typeof e.match == "function";
  },
  o3 = function (e, t) {
    return i3(e) ? e.match(t) : e(t);
  };
function Jm() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n) {
    return e.some(function (r) {
      return o3(r, n);
    });
  };
}
function ev(e, t) {
  if (!e || !e.meta) return !1;
  var n = typeof e.meta.requestId == "string",
    r = t.indexOf(e.meta.requestStatus) > -1;
  return n && r;
}
function tv(e) {
  return (
    typeof e[0] == "function" &&
    "pending" in e[0] &&
    "fulfilled" in e[0] &&
    "rejected" in e[0]
  );
}
function WC() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ev(n, ["pending"]);
      }
    : tv(e)
    ? function (n) {
        var r = e.map(function (l) {
            return l.pending;
          }),
          i = Jm.apply(void 0, r);
        return i(n);
      }
    : WC()(e[0]);
}
function VC() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ev(n, ["rejected"]);
      }
    : tv(e)
    ? function (n) {
        var r = e.map(function (l) {
            return l.rejected;
          }),
          i = Jm.apply(void 0, r);
        return i(n);
      }
    : VC()(e[0]);
}
function qC() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return e.length === 0
    ? function (n) {
        return ev(n, ["fulfilled"]);
      }
    : tv(e)
    ? function (n) {
        var r = e.map(function (l) {
            return l.fulfilled;
          }),
          i = Jm.apply(void 0, r);
        return i(n);
      }
    : qC()(e[0]);
}
var nv = "listenerMiddleware";
Xi(nv + "/add");
Xi(nv + "/removeAll");
Xi(nv + "/remove");
var Nx;
typeof queueMicrotask == "function" &&
  queueMicrotask.bind(
    typeof window < "u" ? window : typeof global < "u" ? global : globalThis
  );
IF();
var en = ((e) => (
    (e.PLAYER = "player"),
    (e.SHOP = "shop"),
    (e.CONTAINER = "container"),
    (e.CRAFTING = "crafting"),
    e
  ))(en || {}),
  jc = { exports: {} };
(function (e, t) {
  (function () {
    var n,
      r = "4.17.21",
      i = 200,
      l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      s = "Expected a function",
      a = "Invalid `variable` option passed into `_.template`",
      f = "__lodash_hash_undefined__",
      d = 500,
      h = "__lodash_placeholder__",
      g = 1,
      y = 2,
      m = 4,
      w = 1,
      E = 2,
      A = 1,
      v = 2,
      S = 4,
      _ = 8,
      P = 16,
      D = 32,
      R = 64,
      F = 128,
      z = 256,
      q = 512,
      K = 30,
      B = "...",
      X = 800,
      $ = 16,
      H = 1,
      ie = 2,
      oe = 3,
      ue = 1 / 0,
      U = 9007199254740991,
      J = 17976931348623157e292,
      ee = 0 / 0,
      b = 4294967295,
      O = b - 1,
      fe = b >>> 1,
      ve = [
        ["ary", F],
        ["bind", A],
        ["bindKey", v],
        ["curry", _],
        ["curryRight", P],
        ["flip", q],
        ["partial", D],
        ["partialRight", R],
        ["rearg", z],
      ],
      Ae = "[object Arguments]",
      de = "[object Array]",
      Oe = "[object AsyncFunction]",
      ye = "[object Boolean]",
      Fe = "[object Date]",
      Te = "[object DOMException]",
      Ue = "[object Error]",
      $e = "[object Function]",
      We = "[object GeneratorFunction]",
      yt = "[object Map]",
      qn = "[object Number]",
      he = "[object Null]",
      ut = "[object Object]",
      zt = "[object Promise]",
      pn = "[object Proxy]",
      Gn = "[object RegExp]",
      Vt = "[object Set]",
      vr = "[object String]",
      qr = "[object Symbol]",
      Yo = "[object Undefined]",
      Pr = "[object WeakMap]",
      Kn = "[object WeakSet]",
      Qn = "[object ArrayBuffer]",
      W = "[object DataView]",
      re = "[object Float32Array]",
      xe = "[object Float64Array]",
      He = "[object Int8Array]",
      qt = "[object Int16Array]",
      Gr = "[object Int32Array]",
      qe = "[object Uint8Array]",
      St = "[object Uint8ClampedArray]",
      Ar = "[object Uint16Array]",
      Kr = "[object Uint32Array]",
      dt = /\b__p \+= '';/g,
      lu = /\b(__p \+=) '' \+/g,
      yr = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Tv = /&(?:amp|lt|gt|quot|#39);/g,
      Rv = /[&<>"']/g,
      b_ = RegExp(Tv.source),
      O_ = RegExp(Rv.source),
      I_ = /<%-([\s\S]+?)%>/g,
      T_ = /<%([\s\S]+?)%>/g,
      Pv = /<%=([\s\S]+?)%>/g,
      R_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      P_ = /^\w*$/,
      A_ =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Jf = /[\\^$.*+?()[\]{}|]/g,
      D_ = RegExp(Jf.source),
      ed = /^\s+/,
      L_ = /\s/,
      M_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      N_ = /\{\n\/\* \[wrapped with (.+)\] \*/,
      F_ = /,? & /,
      z_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      $_ = /[()=,{}\[\]\/\s]/,
      B_ = /\\(\\)?/g,
      U_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Av = /\w*$/,
      H_ = /^[-+]0x[0-9a-f]+$/i,
      j_ = /^0b[01]+$/i,
      W_ = /^\[object .+?Constructor\]$/,
      V_ = /^0o[0-7]+$/i,
      q_ = /^(?:0|[1-9]\d*)$/,
      G_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Ms = /($^)/,
      K_ = /['\n\r\u2028\u2029\\]/g,
      Ns = "\\ud800-\\udfff",
      Q_ = "\\u0300-\\u036f",
      Y_ = "\\ufe20-\\ufe2f",
      X_ = "\\u20d0-\\u20ff",
      Dv = Q_ + Y_ + X_,
      Lv = "\\u2700-\\u27bf",
      Mv = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Z_ = "\\xac\\xb1\\xd7\\xf7",
      J_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      eb = "\\u2000-\\u206f",
      tb =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      Nv = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Fv = "\\ufe0e\\ufe0f",
      zv = Z_ + J_ + eb + tb,
      td = "['’]",
      nb = "[" + Ns + "]",
      $v = "[" + zv + "]",
      Fs = "[" + Dv + "]",
      Bv = "\\d+",
      rb = "[" + Lv + "]",
      Uv = "[" + Mv + "]",
      Hv = "[^" + Ns + zv + Bv + Lv + Mv + Nv + "]",
      nd = "\\ud83c[\\udffb-\\udfff]",
      ib = "(?:" + Fs + "|" + nd + ")",
      jv = "[^" + Ns + "]",
      rd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      id = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Xo = "[" + Nv + "]",
      Wv = "\\u200d",
      Vv = "(?:" + Uv + "|" + Hv + ")",
      ob = "(?:" + Xo + "|" + Hv + ")",
      qv = "(?:" + td + "(?:d|ll|m|re|s|t|ve))?",
      Gv = "(?:" + td + "(?:D|LL|M|RE|S|T|VE))?",
      Kv = ib + "?",
      Qv = "[" + Fv + "]?",
      lb = "(?:" + Wv + "(?:" + [jv, rd, id].join("|") + ")" + Qv + Kv + ")*",
      ub = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      sb = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Yv = Qv + Kv + lb,
      ab = "(?:" + [rb, rd, id].join("|") + ")" + Yv,
      cb = "(?:" + [jv + Fs + "?", Fs, rd, id, nb].join("|") + ")",
      fb = RegExp(td, "g"),
      db = RegExp(Fs, "g"),
      od = RegExp(nd + "(?=" + nd + ")|" + cb + Yv, "g"),
      pb = RegExp(
        [
          Xo + "?" + Uv + "+" + qv + "(?=" + [$v, Xo, "$"].join("|") + ")",
          ob + "+" + Gv + "(?=" + [$v, Xo + Vv, "$"].join("|") + ")",
          Xo + "?" + Vv + "+" + qv,
          Xo + "+" + Gv,
          sb,
          ub,
          Bv,
          ab,
        ].join("|"),
        "g"
      ),
      hb = RegExp("[" + Wv + Ns + Dv + Fv + "]"),
      gb = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      mb = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      vb = -1,
      nt = {};
    (nt[re] =
      nt[xe] =
      nt[He] =
      nt[qt] =
      nt[Gr] =
      nt[qe] =
      nt[St] =
      nt[Ar] =
      nt[Kr] =
        !0),
      (nt[Ae] =
        nt[de] =
        nt[Qn] =
        nt[ye] =
        nt[W] =
        nt[Fe] =
        nt[Ue] =
        nt[$e] =
        nt[yt] =
        nt[qn] =
        nt[ut] =
        nt[Gn] =
        nt[Vt] =
        nt[vr] =
        nt[Pr] =
          !1);
    var et = {};
    (et[Ae] =
      et[de] =
      et[Qn] =
      et[W] =
      et[ye] =
      et[Fe] =
      et[re] =
      et[xe] =
      et[He] =
      et[qt] =
      et[Gr] =
      et[yt] =
      et[qn] =
      et[ut] =
      et[Gn] =
      et[Vt] =
      et[vr] =
      et[qr] =
      et[qe] =
      et[St] =
      et[Ar] =
      et[Kr] =
        !0),
      (et[Ue] = et[$e] = et[Pr] = !1);
    var yb = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      xb = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      wb = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      Sb = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Eb = parseFloat,
      Cb = parseInt,
      Xv = typeof Eu == "object" && Eu && Eu.Object === Object && Eu,
      kb = typeof self == "object" && self && self.Object === Object && self,
      $t = Xv || kb || Function("return this")(),
      ld = t && !t.nodeType && t,
      fo = ld && !0 && e && !e.nodeType && e,
      Zv = fo && fo.exports === ld,
      ud = Zv && Xv.process,
      Yn = (function () {
        try {
          var M = fo && fo.require && fo.require("util").types;
          return M || (ud && ud.binding && ud.binding("util"));
        } catch {}
      })(),
      Jv = Yn && Yn.isArrayBuffer,
      ey = Yn && Yn.isDate,
      ty = Yn && Yn.isMap,
      ny = Yn && Yn.isRegExp,
      ry = Yn && Yn.isSet,
      iy = Yn && Yn.isTypedArray;
    function On(M, G, j) {
      switch (j.length) {
        case 0:
          return M.call(G);
        case 1:
          return M.call(G, j[0]);
        case 2:
          return M.call(G, j[0], j[1]);
        case 3:
          return M.call(G, j[0], j[1], j[2]);
      }
      return M.apply(G, j);
    }
    function _b(M, G, j, se) {
      for (var Ce = -1, je = M == null ? 0 : M.length; ++Ce < je; ) {
        var It = M[Ce];
        G(se, It, j(It), M);
      }
      return se;
    }
    function Xn(M, G) {
      for (
        var j = -1, se = M == null ? 0 : M.length;
        ++j < se && G(M[j], j, M) !== !1;

      );
      return M;
    }
    function bb(M, G) {
      for (var j = M == null ? 0 : M.length; j-- && G(M[j], j, M) !== !1; );
      return M;
    }
    function oy(M, G) {
      for (var j = -1, se = M == null ? 0 : M.length; ++j < se; )
        if (!G(M[j], j, M)) return !1;
      return !0;
    }
    function Si(M, G) {
      for (
        var j = -1, se = M == null ? 0 : M.length, Ce = 0, je = [];
        ++j < se;

      ) {
        var It = M[j];
        G(It, j, M) && (je[Ce++] = It);
      }
      return je;
    }
    function zs(M, G) {
      var j = M == null ? 0 : M.length;
      return !!j && Zo(M, G, 0) > -1;
    }
    function sd(M, G, j) {
      for (var se = -1, Ce = M == null ? 0 : M.length; ++se < Ce; )
        if (j(G, M[se])) return !0;
      return !1;
    }
    function st(M, G) {
      for (
        var j = -1, se = M == null ? 0 : M.length, Ce = Array(se);
        ++j < se;

      )
        Ce[j] = G(M[j], j, M);
      return Ce;
    }
    function Ei(M, G) {
      for (var j = -1, se = G.length, Ce = M.length; ++j < se; )
        M[Ce + j] = G[j];
      return M;
    }
    function ad(M, G, j, se) {
      var Ce = -1,
        je = M == null ? 0 : M.length;
      for (se && je && (j = M[++Ce]); ++Ce < je; ) j = G(j, M[Ce], Ce, M);
      return j;
    }
    function Ob(M, G, j, se) {
      var Ce = M == null ? 0 : M.length;
      for (se && Ce && (j = M[--Ce]); Ce--; ) j = G(j, M[Ce], Ce, M);
      return j;
    }
    function cd(M, G) {
      for (var j = -1, se = M == null ? 0 : M.length; ++j < se; )
        if (G(M[j], j, M)) return !0;
      return !1;
    }
    var Ib = fd("length");
    function Tb(M) {
      return M.split("");
    }
    function Rb(M) {
      return M.match(z_) || [];
    }
    function ly(M, G, j) {
      var se;
      return (
        j(M, function (Ce, je, It) {
          if (G(Ce, je, It)) return (se = je), !1;
        }),
        se
      );
    }
    function $s(M, G, j, se) {
      for (var Ce = M.length, je = j + (se ? 1 : -1); se ? je-- : ++je < Ce; )
        if (G(M[je], je, M)) return je;
      return -1;
    }
    function Zo(M, G, j) {
      return G === G ? Hb(M, G, j) : $s(M, uy, j);
    }
    function Pb(M, G, j, se) {
      for (var Ce = j - 1, je = M.length; ++Ce < je; )
        if (se(M[Ce], G)) return Ce;
      return -1;
    }
    function uy(M) {
      return M !== M;
    }
    function sy(M, G) {
      var j = M == null ? 0 : M.length;
      return j ? pd(M, G) / j : ee;
    }
    function fd(M) {
      return function (G) {
        return G == null ? n : G[M];
      };
    }
    function dd(M) {
      return function (G) {
        return M == null ? n : M[G];
      };
    }
    function ay(M, G, j, se, Ce) {
      return (
        Ce(M, function (je, It, Ze) {
          j = se ? ((se = !1), je) : G(j, je, It, Ze);
        }),
        j
      );
    }
    function Ab(M, G) {
      var j = M.length;
      for (M.sort(G); j--; ) M[j] = M[j].value;
      return M;
    }
    function pd(M, G) {
      for (var j, se = -1, Ce = M.length; ++se < Ce; ) {
        var je = G(M[se]);
        je !== n && (j = j === n ? je : j + je);
      }
      return j;
    }
    function hd(M, G) {
      for (var j = -1, se = Array(M); ++j < M; ) se[j] = G(j);
      return se;
    }
    function Db(M, G) {
      return st(G, function (j) {
        return [j, M[j]];
      });
    }
    function cy(M) {
      return M && M.slice(0, hy(M) + 1).replace(ed, "");
    }
    function In(M) {
      return function (G) {
        return M(G);
      };
    }
    function gd(M, G) {
      return st(G, function (j) {
        return M[j];
      });
    }
    function uu(M, G) {
      return M.has(G);
    }
    function fy(M, G) {
      for (var j = -1, se = M.length; ++j < se && Zo(G, M[j], 0) > -1; );
      return j;
    }
    function dy(M, G) {
      for (var j = M.length; j-- && Zo(G, M[j], 0) > -1; );
      return j;
    }
    function Lb(M, G) {
      for (var j = M.length, se = 0; j--; ) M[j] === G && ++se;
      return se;
    }
    var Mb = dd(yb),
      Nb = dd(xb);
    function Fb(M) {
      return "\\" + Sb[M];
    }
    function zb(M, G) {
      return M == null ? n : M[G];
    }
    function Jo(M) {
      return hb.test(M);
    }
    function $b(M) {
      return gb.test(M);
    }
    function Bb(M) {
      for (var G, j = []; !(G = M.next()).done; ) j.push(G.value);
      return j;
    }
    function md(M) {
      var G = -1,
        j = Array(M.size);
      return (
        M.forEach(function (se, Ce) {
          j[++G] = [Ce, se];
        }),
        j
      );
    }
    function py(M, G) {
      return function (j) {
        return M(G(j));
      };
    }
    function Ci(M, G) {
      for (var j = -1, se = M.length, Ce = 0, je = []; ++j < se; ) {
        var It = M[j];
        (It === G || It === h) && ((M[j] = h), (je[Ce++] = j));
      }
      return je;
    }
    function Bs(M) {
      var G = -1,
        j = Array(M.size);
      return (
        M.forEach(function (se) {
          j[++G] = se;
        }),
        j
      );
    }
    function Ub(M) {
      var G = -1,
        j = Array(M.size);
      return (
        M.forEach(function (se) {
          j[++G] = [se, se];
        }),
        j
      );
    }
    function Hb(M, G, j) {
      for (var se = j - 1, Ce = M.length; ++se < Ce; )
        if (M[se] === G) return se;
      return -1;
    }
    function jb(M, G, j) {
      for (var se = j + 1; se--; ) if (M[se] === G) return se;
      return se;
    }
    function el(M) {
      return Jo(M) ? Vb(M) : Ib(M);
    }
    function xr(M) {
      return Jo(M) ? qb(M) : Tb(M);
    }
    function hy(M) {
      for (var G = M.length; G-- && L_.test(M.charAt(G)); );
      return G;
    }
    var Wb = dd(wb);
    function Vb(M) {
      for (var G = (od.lastIndex = 0); od.test(M); ) ++G;
      return G;
    }
    function qb(M) {
      return M.match(od) || [];
    }
    function Gb(M) {
      return M.match(pb) || [];
    }
    var Kb = function M(G) {
        G = G == null ? $t : tl.defaults($t.Object(), G, tl.pick($t, mb));
        var j = G.Array,
          se = G.Date,
          Ce = G.Error,
          je = G.Function,
          It = G.Math,
          Ze = G.Object,
          vd = G.RegExp,
          Qb = G.String,
          Zn = G.TypeError,
          Us = j.prototype,
          Yb = je.prototype,
          nl = Ze.prototype,
          Hs = G["__core-js_shared__"],
          js = Yb.toString,
          Ge = nl.hasOwnProperty,
          Xb = 0,
          gy = (function () {
            var o = /[^.]+$/.exec((Hs && Hs.keys && Hs.keys.IE_PROTO) || "");
            return o ? "Symbol(src)_1." + o : "";
          })(),
          Ws = nl.toString,
          Zb = js.call(Ze),
          Jb = $t._,
          eO = vd(
            "^" +
              js
                .call(Ge)
                .replace(Jf, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Vs = Zv ? G.Buffer : n,
          ki = G.Symbol,
          qs = G.Uint8Array,
          my = Vs ? Vs.allocUnsafe : n,
          Gs = py(Ze.getPrototypeOf, Ze),
          vy = Ze.create,
          yy = nl.propertyIsEnumerable,
          Ks = Us.splice,
          xy = ki ? ki.isConcatSpreadable : n,
          su = ki ? ki.iterator : n,
          po = ki ? ki.toStringTag : n,
          Qs = (function () {
            try {
              var o = yo(Ze, "defineProperty");
              return o({}, "", {}), o;
            } catch {}
          })(),
          tO = G.clearTimeout !== $t.clearTimeout && G.clearTimeout,
          nO = se && se.now !== $t.Date.now && se.now,
          rO = G.setTimeout !== $t.setTimeout && G.setTimeout,
          Ys = It.ceil,
          Xs = It.floor,
          yd = Ze.getOwnPropertySymbols,
          iO = Vs ? Vs.isBuffer : n,
          wy = G.isFinite,
          oO = Us.join,
          lO = py(Ze.keys, Ze),
          Tt = It.max,
          Gt = It.min,
          uO = se.now,
          sO = G.parseInt,
          Sy = It.random,
          aO = Us.reverse,
          xd = yo(G, "DataView"),
          au = yo(G, "Map"),
          wd = yo(G, "Promise"),
          rl = yo(G, "Set"),
          cu = yo(G, "WeakMap"),
          fu = yo(Ze, "create"),
          Zs = cu && new cu(),
          il = {},
          cO = xo(xd),
          fO = xo(au),
          dO = xo(wd),
          pO = xo(rl),
          hO = xo(cu),
          Js = ki ? ki.prototype : n,
          du = Js ? Js.valueOf : n,
          Ey = Js ? Js.toString : n;
        function C(o) {
          if (xt(o) && !ke(o) && !(o instanceof Me)) {
            if (o instanceof Jn) return o;
            if (Ge.call(o, "__wrapped__")) return C0(o);
          }
          return new Jn(o);
        }
        var ol = (function () {
          function o() {}
          return function (u) {
            if (!pt(u)) return {};
            if (vy) return vy(u);
            o.prototype = u;
            var c = new o();
            return (o.prototype = n), c;
          };
        })();
        function ea() {}
        function Jn(o, u) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__chain__ = !!u),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        (C.templateSettings = {
          escape: I_,
          evaluate: T_,
          interpolate: Pv,
          variable: "",
          imports: { _: C },
        }),
          (C.prototype = ea.prototype),
          (C.prototype.constructor = C),
          (Jn.prototype = ol(ea.prototype)),
          (Jn.prototype.constructor = Jn);
        function Me(o) {
          (this.__wrapped__ = o),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = b),
            (this.__views__ = []);
        }
        function gO() {
          var o = new Me(this.__wrapped__);
          return (
            (o.__actions__ = hn(this.__actions__)),
            (o.__dir__ = this.__dir__),
            (o.__filtered__ = this.__filtered__),
            (o.__iteratees__ = hn(this.__iteratees__)),
            (o.__takeCount__ = this.__takeCount__),
            (o.__views__ = hn(this.__views__)),
            o
          );
        }
        function mO() {
          if (this.__filtered__) {
            var o = new Me(this);
            (o.__dir__ = -1), (o.__filtered__ = !0);
          } else (o = this.clone()), (o.__dir__ *= -1);
          return o;
        }
        function vO() {
          var o = this.__wrapped__.value(),
            u = this.__dir__,
            c = ke(o),
            p = u < 0,
            x = c ? o.length : 0,
            k = TI(0, x, this.__views__),
            I = k.start,
            L = k.end,
            N = L - I,
            Q = p ? L : I - 1,
            Y = this.__iteratees__,
            Z = Y.length,
            le = 0,
            ce = Gt(N, this.__takeCount__);
          if (!c || (!p && x == N && ce == N)) return qy(o, this.__actions__);
          var ge = [];
          e: for (; N-- && le < ce; ) {
            Q += u;
            for (var Re = -1, me = o[Q]; ++Re < Z; ) {
              var Le = Y[Re],
                ze = Le.iteratee,
                Pn = Le.type,
                un = ze(me);
              if (Pn == ie) me = un;
              else if (!un) {
                if (Pn == H) continue e;
                break e;
              }
            }
            ge[le++] = me;
          }
          return ge;
        }
        (Me.prototype = ol(ea.prototype)), (Me.prototype.constructor = Me);
        function ho(o) {
          var u = -1,
            c = o == null ? 0 : o.length;
          for (this.clear(); ++u < c; ) {
            var p = o[u];
            this.set(p[0], p[1]);
          }
        }
        function yO() {
          (this.__data__ = fu ? fu(null) : {}), (this.size = 0);
        }
        function xO(o) {
          var u = this.has(o) && delete this.__data__[o];
          return (this.size -= u ? 1 : 0), u;
        }
        function wO(o) {
          var u = this.__data__;
          if (fu) {
            var c = u[o];
            return c === f ? n : c;
          }
          return Ge.call(u, o) ? u[o] : n;
        }
        function SO(o) {
          var u = this.__data__;
          return fu ? u[o] !== n : Ge.call(u, o);
        }
        function EO(o, u) {
          var c = this.__data__;
          return (
            (this.size += this.has(o) ? 0 : 1),
            (c[o] = fu && u === n ? f : u),
            this
          );
        }
        (ho.prototype.clear = yO),
          (ho.prototype.delete = xO),
          (ho.prototype.get = wO),
          (ho.prototype.has = SO),
          (ho.prototype.set = EO);
        function Qr(o) {
          var u = -1,
            c = o == null ? 0 : o.length;
          for (this.clear(); ++u < c; ) {
            var p = o[u];
            this.set(p[0], p[1]);
          }
        }
        function CO() {
          (this.__data__ = []), (this.size = 0);
        }
        function kO(o) {
          var u = this.__data__,
            c = ta(u, o);
          if (c < 0) return !1;
          var p = u.length - 1;
          return c == p ? u.pop() : Ks.call(u, c, 1), --this.size, !0;
        }
        function _O(o) {
          var u = this.__data__,
            c = ta(u, o);
          return c < 0 ? n : u[c][1];
        }
        function bO(o) {
          return ta(this.__data__, o) > -1;
        }
        function OO(o, u) {
          var c = this.__data__,
            p = ta(c, o);
          return p < 0 ? (++this.size, c.push([o, u])) : (c[p][1] = u), this;
        }
        (Qr.prototype.clear = CO),
          (Qr.prototype.delete = kO),
          (Qr.prototype.get = _O),
          (Qr.prototype.has = bO),
          (Qr.prototype.set = OO);
        function Yr(o) {
          var u = -1,
            c = o == null ? 0 : o.length;
          for (this.clear(); ++u < c; ) {
            var p = o[u];
            this.set(p[0], p[1]);
          }
        }
        function IO() {
          (this.size = 0),
            (this.__data__ = {
              hash: new ho(),
              map: new (au || Qr)(),
              string: new ho(),
            });
        }
        function TO(o) {
          var u = pa(this, o).delete(o);
          return (this.size -= u ? 1 : 0), u;
        }
        function RO(o) {
          return pa(this, o).get(o);
        }
        function PO(o) {
          return pa(this, o).has(o);
        }
        function AO(o, u) {
          var c = pa(this, o),
            p = c.size;
          return c.set(o, u), (this.size += c.size == p ? 0 : 1), this;
        }
        (Yr.prototype.clear = IO),
          (Yr.prototype.delete = TO),
          (Yr.prototype.get = RO),
          (Yr.prototype.has = PO),
          (Yr.prototype.set = AO);
        function go(o) {
          var u = -1,
            c = o == null ? 0 : o.length;
          for (this.__data__ = new Yr(); ++u < c; ) this.add(o[u]);
        }
        function DO(o) {
          return this.__data__.set(o, f), this;
        }
        function LO(o) {
          return this.__data__.has(o);
        }
        (go.prototype.add = go.prototype.push = DO), (go.prototype.has = LO);
        function wr(o) {
          var u = (this.__data__ = new Qr(o));
          this.size = u.size;
        }
        function MO() {
          (this.__data__ = new Qr()), (this.size = 0);
        }
        function NO(o) {
          var u = this.__data__,
            c = u.delete(o);
          return (this.size = u.size), c;
        }
        function FO(o) {
          return this.__data__.get(o);
        }
        function zO(o) {
          return this.__data__.has(o);
        }
        function $O(o, u) {
          var c = this.__data__;
          if (c instanceof Qr) {
            var p = c.__data__;
            if (!au || p.length < i - 1)
              return p.push([o, u]), (this.size = ++c.size), this;
            c = this.__data__ = new Yr(p);
          }
          return c.set(o, u), (this.size = c.size), this;
        }
        (wr.prototype.clear = MO),
          (wr.prototype.delete = NO),
          (wr.prototype.get = FO),
          (wr.prototype.has = zO),
          (wr.prototype.set = $O);
        function Cy(o, u) {
          var c = ke(o),
            p = !c && wo(o),
            x = !c && !p && Ti(o),
            k = !c && !p && !x && al(o),
            I = c || p || x || k,
            L = I ? hd(o.length, Qb) : [],
            N = L.length;
          for (var Q in o)
            (u || Ge.call(o, Q)) &&
              !(
                I &&
                (Q == "length" ||
                  (x && (Q == "offset" || Q == "parent")) ||
                  (k &&
                    (Q == "buffer" ||
                      Q == "byteLength" ||
                      Q == "byteOffset")) ||
                  ei(Q, N))
              ) &&
              L.push(Q);
          return L;
        }
        function ky(o) {
          var u = o.length;
          return u ? o[Pd(0, u - 1)] : n;
        }
        function BO(o, u) {
          return ha(hn(o), mo(u, 0, o.length));
        }
        function UO(o) {
          return ha(hn(o));
        }
        function Sd(o, u, c) {
          ((c !== n && !Sr(o[u], c)) || (c === n && !(u in o))) && Xr(o, u, c);
        }
        function pu(o, u, c) {
          var p = o[u];
          (!(Ge.call(o, u) && Sr(p, c)) || (c === n && !(u in o))) &&
            Xr(o, u, c);
        }
        function ta(o, u) {
          for (var c = o.length; c--; ) if (Sr(o[c][0], u)) return c;
          return -1;
        }
        function HO(o, u, c, p) {
          return (
            _i(o, function (x, k, I) {
              u(p, x, c(x), I);
            }),
            p
          );
        }
        function _y(o, u) {
          return o && Lr(u, Dt(u), o);
        }
        function jO(o, u) {
          return o && Lr(u, mn(u), o);
        }
        function Xr(o, u, c) {
          u == "__proto__" && Qs
            ? Qs(o, u, {
                configurable: !0,
                enumerable: !0,
                value: c,
                writable: !0,
              })
            : (o[u] = c);
        }
        function Ed(o, u) {
          for (var c = -1, p = u.length, x = j(p), k = o == null; ++c < p; )
            x[c] = k ? n : np(o, u[c]);
          return x;
        }
        function mo(o, u, c) {
          return (
            o === o &&
              (c !== n && (o = o <= c ? o : c),
              u !== n && (o = o >= u ? o : u)),
            o
          );
        }
        function er(o, u, c, p, x, k) {
          var I,
            L = u & g,
            N = u & y,
            Q = u & m;
          if ((c && (I = x ? c(o, p, x, k) : c(o)), I !== n)) return I;
          if (!pt(o)) return o;
          var Y = ke(o);
          if (Y) {
            if (((I = PI(o)), !L)) return hn(o, I);
          } else {
            var Z = Kt(o),
              le = Z == $e || Z == We;
            if (Ti(o)) return Qy(o, L);
            if (Z == ut || Z == Ae || (le && !x)) {
              if (((I = N || le ? {} : h0(o)), !L))
                return N ? wI(o, jO(I, o)) : xI(o, _y(I, o));
            } else {
              if (!et[Z]) return x ? o : {};
              I = AI(o, Z, L);
            }
          }
          k || (k = new wr());
          var ce = k.get(o);
          if (ce) return ce;
          k.set(o, I),
            j0(o)
              ? o.forEach(function (me) {
                  I.add(er(me, u, c, me, o, k));
                })
              : U0(o) &&
                o.forEach(function (me, Le) {
                  I.set(Le, er(me, u, c, Le, o, k));
                });
          var ge = Q ? (N ? Hd : Ud) : N ? mn : Dt,
            Re = Y ? n : ge(o);
          return (
            Xn(Re || o, function (me, Le) {
              Re && ((Le = me), (me = o[Le])),
                pu(I, Le, er(me, u, c, Le, o, k));
            }),
            I
          );
        }
        function WO(o) {
          var u = Dt(o);
          return function (c) {
            return by(c, o, u);
          };
        }
        function by(o, u, c) {
          var p = c.length;
          if (o == null) return !p;
          for (o = Ze(o); p--; ) {
            var x = c[p],
              k = u[x],
              I = o[x];
            if ((I === n && !(x in o)) || !k(I)) return !1;
          }
          return !0;
        }
        function Oy(o, u, c) {
          if (typeof o != "function") throw new Zn(s);
          return wu(function () {
            o.apply(n, c);
          }, u);
        }
        function hu(o, u, c, p) {
          var x = -1,
            k = zs,
            I = !0,
            L = o.length,
            N = [],
            Q = u.length;
          if (!L) return N;
          c && (u = st(u, In(c))),
            p
              ? ((k = sd), (I = !1))
              : u.length >= i && ((k = uu), (I = !1), (u = new go(u)));
          e: for (; ++x < L; ) {
            var Y = o[x],
              Z = c == null ? Y : c(Y);
            if (((Y = p || Y !== 0 ? Y : 0), I && Z === Z)) {
              for (var le = Q; le--; ) if (u[le] === Z) continue e;
              N.push(Y);
            } else k(u, Z, p) || N.push(Y);
          }
          return N;
        }
        var _i = e0(Dr),
          Iy = e0(kd, !0);
        function VO(o, u) {
          var c = !0;
          return (
            _i(o, function (p, x, k) {
              return (c = !!u(p, x, k)), c;
            }),
            c
          );
        }
        function na(o, u, c) {
          for (var p = -1, x = o.length; ++p < x; ) {
            var k = o[p],
              I = u(k);
            if (I != null && (L === n ? I === I && !Rn(I) : c(I, L)))
              var L = I,
                N = k;
          }
          return N;
        }
        function qO(o, u, c, p) {
          var x = o.length;
          for (
            c = Ie(c),
              c < 0 && (c = -c > x ? 0 : x + c),
              p = p === n || p > x ? x : Ie(p),
              p < 0 && (p += x),
              p = c > p ? 0 : V0(p);
            c < p;

          )
            o[c++] = u;
          return o;
        }
        function Ty(o, u) {
          var c = [];
          return (
            _i(o, function (p, x, k) {
              u(p, x, k) && c.push(p);
            }),
            c
          );
        }
        function Bt(o, u, c, p, x) {
          var k = -1,
            I = o.length;
          for (c || (c = LI), x || (x = []); ++k < I; ) {
            var L = o[k];
            u > 0 && c(L)
              ? u > 1
                ? Bt(L, u - 1, c, p, x)
                : Ei(x, L)
              : p || (x[x.length] = L);
          }
          return x;
        }
        var Cd = t0(),
          Ry = t0(!0);
        function Dr(o, u) {
          return o && Cd(o, u, Dt);
        }
        function kd(o, u) {
          return o && Ry(o, u, Dt);
        }
        function ra(o, u) {
          return Si(u, function (c) {
            return ti(o[c]);
          });
        }
        function vo(o, u) {
          u = Oi(u, o);
          for (var c = 0, p = u.length; o != null && c < p; ) o = o[Mr(u[c++])];
          return c && c == p ? o : n;
        }
        function Py(o, u, c) {
          var p = u(o);
          return ke(o) ? p : Ei(p, c(o));
        }
        function on(o) {
          return o == null
            ? o === n
              ? Yo
              : he
            : po && po in Ze(o)
            ? II(o)
            : UI(o);
        }
        function _d(o, u) {
          return o > u;
        }
        function GO(o, u) {
          return o != null && Ge.call(o, u);
        }
        function KO(o, u) {
          return o != null && u in Ze(o);
        }
        function QO(o, u, c) {
          return o >= Gt(u, c) && o < Tt(u, c);
        }
        function bd(o, u, c) {
          for (
            var p = c ? sd : zs,
              x = o[0].length,
              k = o.length,
              I = k,
              L = j(k),
              N = 1 / 0,
              Q = [];
            I--;

          ) {
            var Y = o[I];
            I && u && (Y = st(Y, In(u))),
              (N = Gt(Y.length, N)),
              (L[I] =
                !c && (u || (x >= 120 && Y.length >= 120))
                  ? new go(I && Y)
                  : n);
          }
          Y = o[0];
          var Z = -1,
            le = L[0];
          e: for (; ++Z < x && Q.length < N; ) {
            var ce = Y[Z],
              ge = u ? u(ce) : ce;
            if (
              ((ce = c || ce !== 0 ? ce : 0), !(le ? uu(le, ge) : p(Q, ge, c)))
            ) {
              for (I = k; --I; ) {
                var Re = L[I];
                if (!(Re ? uu(Re, ge) : p(o[I], ge, c))) continue e;
              }
              le && le.push(ge), Q.push(ce);
            }
          }
          return Q;
        }
        function YO(o, u, c, p) {
          return (
            Dr(o, function (x, k, I) {
              u(p, c(x), k, I);
            }),
            p
          );
        }
        function gu(o, u, c) {
          (u = Oi(u, o)), (o = y0(o, u));
          var p = o == null ? o : o[Mr(nr(u))];
          return p == null ? n : On(p, o, c);
        }
        function Ay(o) {
          return xt(o) && on(o) == Ae;
        }
        function XO(o) {
          return xt(o) && on(o) == Qn;
        }
        function ZO(o) {
          return xt(o) && on(o) == Fe;
        }
        function mu(o, u, c, p, x) {
          return o === u
            ? !0
            : o == null || u == null || (!xt(o) && !xt(u))
            ? o !== o && u !== u
            : JO(o, u, c, p, mu, x);
        }
        function JO(o, u, c, p, x, k) {
          var I = ke(o),
            L = ke(u),
            N = I ? de : Kt(o),
            Q = L ? de : Kt(u);
          (N = N == Ae ? ut : N), (Q = Q == Ae ? ut : Q);
          var Y = N == ut,
            Z = Q == ut,
            le = N == Q;
          if (le && Ti(o)) {
            if (!Ti(u)) return !1;
            (I = !0), (Y = !1);
          }
          if (le && !Y)
            return (
              k || (k = new wr()),
              I || al(o) ? f0(o, u, c, p, x, k) : bI(o, u, N, c, p, x, k)
            );
          if (!(c & w)) {
            var ce = Y && Ge.call(o, "__wrapped__"),
              ge = Z && Ge.call(u, "__wrapped__");
            if (ce || ge) {
              var Re = ce ? o.value() : o,
                me = ge ? u.value() : u;
              return k || (k = new wr()), x(Re, me, c, p, k);
            }
          }
          return le ? (k || (k = new wr()), OI(o, u, c, p, x, k)) : !1;
        }
        function eI(o) {
          return xt(o) && Kt(o) == yt;
        }
        function Od(o, u, c, p) {
          var x = c.length,
            k = x,
            I = !p;
          if (o == null) return !k;
          for (o = Ze(o); x--; ) {
            var L = c[x];
            if (I && L[2] ? L[1] !== o[L[0]] : !(L[0] in o)) return !1;
          }
          for (; ++x < k; ) {
            L = c[x];
            var N = L[0],
              Q = o[N],
              Y = L[1];
            if (I && L[2]) {
              if (Q === n && !(N in o)) return !1;
            } else {
              var Z = new wr();
              if (p) var le = p(Q, Y, N, o, u, Z);
              if (!(le === n ? mu(Y, Q, w | E, p, Z) : le)) return !1;
            }
          }
          return !0;
        }
        function Dy(o) {
          if (!pt(o) || NI(o)) return !1;
          var u = ti(o) ? eO : W_;
          return u.test(xo(o));
        }
        function tI(o) {
          return xt(o) && on(o) == Gn;
        }
        function nI(o) {
          return xt(o) && Kt(o) == Vt;
        }
        function rI(o) {
          return xt(o) && wa(o.length) && !!nt[on(o)];
        }
        function Ly(o) {
          return typeof o == "function"
            ? o
            : o == null
            ? vn
            : typeof o == "object"
            ? ke(o)
              ? Fy(o[0], o[1])
              : Ny(o)
            : n1(o);
        }
        function Id(o) {
          if (!xu(o)) return lO(o);
          var u = [];
          for (var c in Ze(o)) Ge.call(o, c) && c != "constructor" && u.push(c);
          return u;
        }
        function iI(o) {
          if (!pt(o)) return BI(o);
          var u = xu(o),
            c = [];
          for (var p in o)
            (p == "constructor" && (u || !Ge.call(o, p))) || c.push(p);
          return c;
        }
        function Td(o, u) {
          return o < u;
        }
        function My(o, u) {
          var c = -1,
            p = gn(o) ? j(o.length) : [];
          return (
            _i(o, function (x, k, I) {
              p[++c] = u(x, k, I);
            }),
            p
          );
        }
        function Ny(o) {
          var u = Wd(o);
          return u.length == 1 && u[0][2]
            ? m0(u[0][0], u[0][1])
            : function (c) {
                return c === o || Od(c, o, u);
              };
        }
        function Fy(o, u) {
          return qd(o) && g0(u)
            ? m0(Mr(o), u)
            : function (c) {
                var p = np(c, o);
                return p === n && p === u ? rp(c, o) : mu(u, p, w | E);
              };
        }
        function ia(o, u, c, p, x) {
          o !== u &&
            Cd(
              u,
              function (k, I) {
                if ((x || (x = new wr()), pt(k))) oI(o, u, I, c, ia, p, x);
                else {
                  var L = p ? p(Kd(o, I), k, I + "", o, u, x) : n;
                  L === n && (L = k), Sd(o, I, L);
                }
              },
              mn
            );
        }
        function oI(o, u, c, p, x, k, I) {
          var L = Kd(o, c),
            N = Kd(u, c),
            Q = I.get(N);
          if (Q) {
            Sd(o, c, Q);
            return;
          }
          var Y = k ? k(L, N, c + "", o, u, I) : n,
            Z = Y === n;
          if (Z) {
            var le = ke(N),
              ce = !le && Ti(N),
              ge = !le && !ce && al(N);
            (Y = N),
              le || ce || ge
                ? ke(L)
                  ? (Y = L)
                  : Et(L)
                  ? (Y = hn(L))
                  : ce
                  ? ((Z = !1), (Y = Qy(N, !0)))
                  : ge
                  ? ((Z = !1), (Y = Yy(N, !0)))
                  : (Y = [])
                : Su(N) || wo(N)
                ? ((Y = L),
                  wo(L) ? (Y = q0(L)) : (!pt(L) || ti(L)) && (Y = h0(N)))
                : (Z = !1);
          }
          Z && (I.set(N, Y), x(Y, N, p, k, I), I.delete(N)), Sd(o, c, Y);
        }
        function zy(o, u) {
          var c = o.length;
          if (!!c) return (u += u < 0 ? c : 0), ei(u, c) ? o[u] : n;
        }
        function $y(o, u, c) {
          u.length
            ? (u = st(u, function (k) {
                return ke(k)
                  ? function (I) {
                      return vo(I, k.length === 1 ? k[0] : k);
                    }
                  : k;
              }))
            : (u = [vn]);
          var p = -1;
          u = st(u, In(pe()));
          var x = My(o, function (k, I, L) {
            var N = st(u, function (Q) {
              return Q(k);
            });
            return { criteria: N, index: ++p, value: k };
          });
          return Ab(x, function (k, I) {
            return yI(k, I, c);
          });
        }
        function lI(o, u) {
          return By(o, u, function (c, p) {
            return rp(o, p);
          });
        }
        function By(o, u, c) {
          for (var p = -1, x = u.length, k = {}; ++p < x; ) {
            var I = u[p],
              L = vo(o, I);
            c(L, I) && vu(k, Oi(I, o), L);
          }
          return k;
        }
        function uI(o) {
          return function (u) {
            return vo(u, o);
          };
        }
        function Rd(o, u, c, p) {
          var x = p ? Pb : Zo,
            k = -1,
            I = u.length,
            L = o;
          for (o === u && (u = hn(u)), c && (L = st(o, In(c))); ++k < I; )
            for (
              var N = 0, Q = u[k], Y = c ? c(Q) : Q;
              (N = x(L, Y, N, p)) > -1;

            )
              L !== o && Ks.call(L, N, 1), Ks.call(o, N, 1);
          return o;
        }
        function Uy(o, u) {
          for (var c = o ? u.length : 0, p = c - 1; c--; ) {
            var x = u[c];
            if (c == p || x !== k) {
              var k = x;
              ei(x) ? Ks.call(o, x, 1) : Ld(o, x);
            }
          }
          return o;
        }
        function Pd(o, u) {
          return o + Xs(Sy() * (u - o + 1));
        }
        function sI(o, u, c, p) {
          for (var x = -1, k = Tt(Ys((u - o) / (c || 1)), 0), I = j(k); k--; )
            (I[p ? k : ++x] = o), (o += c);
          return I;
        }
        function Ad(o, u) {
          var c = "";
          if (!o || u < 1 || u > U) return c;
          do u % 2 && (c += o), (u = Xs(u / 2)), u && (o += o);
          while (u);
          return c;
        }
        function De(o, u) {
          return Qd(v0(o, u, vn), o + "");
        }
        function aI(o) {
          return ky(cl(o));
        }
        function cI(o, u) {
          var c = cl(o);
          return ha(c, mo(u, 0, c.length));
        }
        function vu(o, u, c, p) {
          if (!pt(o)) return o;
          u = Oi(u, o);
          for (
            var x = -1, k = u.length, I = k - 1, L = o;
            L != null && ++x < k;

          ) {
            var N = Mr(u[x]),
              Q = c;
            if (N === "__proto__" || N === "constructor" || N === "prototype")
              return o;
            if (x != I) {
              var Y = L[N];
              (Q = p ? p(Y, N, L) : n),
                Q === n && (Q = pt(Y) ? Y : ei(u[x + 1]) ? [] : {});
            }
            pu(L, N, Q), (L = L[N]);
          }
          return o;
        }
        var Hy = Zs
            ? function (o, u) {
                return Zs.set(o, u), o;
              }
            : vn,
          fI = Qs
            ? function (o, u) {
                return Qs(o, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: op(u),
                  writable: !0,
                });
              }
            : vn;
        function dI(o) {
          return ha(cl(o));
        }
        function tr(o, u, c) {
          var p = -1,
            x = o.length;
          u < 0 && (u = -u > x ? 0 : x + u),
            (c = c > x ? x : c),
            c < 0 && (c += x),
            (x = u > c ? 0 : (c - u) >>> 0),
            (u >>>= 0);
          for (var k = j(x); ++p < x; ) k[p] = o[p + u];
          return k;
        }
        function pI(o, u) {
          var c;
          return (
            _i(o, function (p, x, k) {
              return (c = u(p, x, k)), !c;
            }),
            !!c
          );
        }
        function oa(o, u, c) {
          var p = 0,
            x = o == null ? p : o.length;
          if (typeof u == "number" && u === u && x <= fe) {
            for (; p < x; ) {
              var k = (p + x) >>> 1,
                I = o[k];
              I !== null && !Rn(I) && (c ? I <= u : I < u)
                ? (p = k + 1)
                : (x = k);
            }
            return x;
          }
          return Dd(o, u, vn, c);
        }
        function Dd(o, u, c, p) {
          var x = 0,
            k = o == null ? 0 : o.length;
          if (k === 0) return 0;
          u = c(u);
          for (
            var I = u !== u, L = u === null, N = Rn(u), Q = u === n;
            x < k;

          ) {
            var Y = Xs((x + k) / 2),
              Z = c(o[Y]),
              le = Z !== n,
              ce = Z === null,
              ge = Z === Z,
              Re = Rn(Z);
            if (I) var me = p || ge;
            else
              Q
                ? (me = ge && (p || le))
                : L
                ? (me = ge && le && (p || !ce))
                : N
                ? (me = ge && le && !ce && (p || !Re))
                : ce || Re
                ? (me = !1)
                : (me = p ? Z <= u : Z < u);
            me ? (x = Y + 1) : (k = Y);
          }
          return Gt(k, O);
        }
        function jy(o, u) {
          for (var c = -1, p = o.length, x = 0, k = []; ++c < p; ) {
            var I = o[c],
              L = u ? u(I) : I;
            if (!c || !Sr(L, N)) {
              var N = L;
              k[x++] = I === 0 ? 0 : I;
            }
          }
          return k;
        }
        function Wy(o) {
          return typeof o == "number" ? o : Rn(o) ? ee : +o;
        }
        function Tn(o) {
          if (typeof o == "string") return o;
          if (ke(o)) return st(o, Tn) + "";
          if (Rn(o)) return Ey ? Ey.call(o) : "";
          var u = o + "";
          return u == "0" && 1 / o == -ue ? "-0" : u;
        }
        function bi(o, u, c) {
          var p = -1,
            x = zs,
            k = o.length,
            I = !0,
            L = [],
            N = L;
          if (c) (I = !1), (x = sd);
          else if (k >= i) {
            var Q = u ? null : kI(o);
            if (Q) return Bs(Q);
            (I = !1), (x = uu), (N = new go());
          } else N = u ? [] : L;
          e: for (; ++p < k; ) {
            var Y = o[p],
              Z = u ? u(Y) : Y;
            if (((Y = c || Y !== 0 ? Y : 0), I && Z === Z)) {
              for (var le = N.length; le--; ) if (N[le] === Z) continue e;
              u && N.push(Z), L.push(Y);
            } else x(N, Z, c) || (N !== L && N.push(Z), L.push(Y));
          }
          return L;
        }
        function Ld(o, u) {
          return (
            (u = Oi(u, o)), (o = y0(o, u)), o == null || delete o[Mr(nr(u))]
          );
        }
        function Vy(o, u, c, p) {
          return vu(o, u, c(vo(o, u)), p);
        }
        function la(o, u, c, p) {
          for (
            var x = o.length, k = p ? x : -1;
            (p ? k-- : ++k < x) && u(o[k], k, o);

          );
          return c
            ? tr(o, p ? 0 : k, p ? k + 1 : x)
            : tr(o, p ? k + 1 : 0, p ? x : k);
        }
        function qy(o, u) {
          var c = o;
          return (
            c instanceof Me && (c = c.value()),
            ad(
              u,
              function (p, x) {
                return x.func.apply(x.thisArg, Ei([p], x.args));
              },
              c
            )
          );
        }
        function Md(o, u, c) {
          var p = o.length;
          if (p < 2) return p ? bi(o[0]) : [];
          for (var x = -1, k = j(p); ++x < p; )
            for (var I = o[x], L = -1; ++L < p; )
              L != x && (k[x] = hu(k[x] || I, o[L], u, c));
          return bi(Bt(k, 1), u, c);
        }
        function Gy(o, u, c) {
          for (var p = -1, x = o.length, k = u.length, I = {}; ++p < x; ) {
            var L = p < k ? u[p] : n;
            c(I, o[p], L);
          }
          return I;
        }
        function Nd(o) {
          return Et(o) ? o : [];
        }
        function Fd(o) {
          return typeof o == "function" ? o : vn;
        }
        function Oi(o, u) {
          return ke(o) ? o : qd(o, u) ? [o] : E0(Ve(o));
        }
        var hI = De;
        function Ii(o, u, c) {
          var p = o.length;
          return (c = c === n ? p : c), !u && c >= p ? o : tr(o, u, c);
        }
        var Ky =
          tO ||
          function (o) {
            return $t.clearTimeout(o);
          };
        function Qy(o, u) {
          if (u) return o.slice();
          var c = o.length,
            p = my ? my(c) : new o.constructor(c);
          return o.copy(p), p;
        }
        function zd(o) {
          var u = new o.constructor(o.byteLength);
          return new qs(u).set(new qs(o)), u;
        }
        function gI(o, u) {
          var c = u ? zd(o.buffer) : o.buffer;
          return new o.constructor(c, o.byteOffset, o.byteLength);
        }
        function mI(o) {
          var u = new o.constructor(o.source, Av.exec(o));
          return (u.lastIndex = o.lastIndex), u;
        }
        function vI(o) {
          return du ? Ze(du.call(o)) : {};
        }
        function Yy(o, u) {
          var c = u ? zd(o.buffer) : o.buffer;
          return new o.constructor(c, o.byteOffset, o.length);
        }
        function Xy(o, u) {
          if (o !== u) {
            var c = o !== n,
              p = o === null,
              x = o === o,
              k = Rn(o),
              I = u !== n,
              L = u === null,
              N = u === u,
              Q = Rn(u);
            if (
              (!L && !Q && !k && o > u) ||
              (k && I && N && !L && !Q) ||
              (p && I && N) ||
              (!c && N) ||
              !x
            )
              return 1;
            if (
              (!p && !k && !Q && o < u) ||
              (Q && c && x && !p && !k) ||
              (L && c && x) ||
              (!I && x) ||
              !N
            )
              return -1;
          }
          return 0;
        }
        function yI(o, u, c) {
          for (
            var p = -1,
              x = o.criteria,
              k = u.criteria,
              I = x.length,
              L = c.length;
            ++p < I;

          ) {
            var N = Xy(x[p], k[p]);
            if (N) {
              if (p >= L) return N;
              var Q = c[p];
              return N * (Q == "desc" ? -1 : 1);
            }
          }
          return o.index - u.index;
        }
        function Zy(o, u, c, p) {
          for (
            var x = -1,
              k = o.length,
              I = c.length,
              L = -1,
              N = u.length,
              Q = Tt(k - I, 0),
              Y = j(N + Q),
              Z = !p;
            ++L < N;

          )
            Y[L] = u[L];
          for (; ++x < I; ) (Z || x < k) && (Y[c[x]] = o[x]);
          for (; Q--; ) Y[L++] = o[x++];
          return Y;
        }
        function Jy(o, u, c, p) {
          for (
            var x = -1,
              k = o.length,
              I = -1,
              L = c.length,
              N = -1,
              Q = u.length,
              Y = Tt(k - L, 0),
              Z = j(Y + Q),
              le = !p;
            ++x < Y;

          )
            Z[x] = o[x];
          for (var ce = x; ++N < Q; ) Z[ce + N] = u[N];
          for (; ++I < L; ) (le || x < k) && (Z[ce + c[I]] = o[x++]);
          return Z;
        }
        function hn(o, u) {
          var c = -1,
            p = o.length;
          for (u || (u = j(p)); ++c < p; ) u[c] = o[c];
          return u;
        }
        function Lr(o, u, c, p) {
          var x = !c;
          c || (c = {});
          for (var k = -1, I = u.length; ++k < I; ) {
            var L = u[k],
              N = p ? p(c[L], o[L], L, c, o) : n;
            N === n && (N = o[L]), x ? Xr(c, L, N) : pu(c, L, N);
          }
          return c;
        }
        function xI(o, u) {
          return Lr(o, Vd(o), u);
        }
        function wI(o, u) {
          return Lr(o, d0(o), u);
        }
        function ua(o, u) {
          return function (c, p) {
            var x = ke(c) ? _b : HO,
              k = u ? u() : {};
            return x(c, o, pe(p, 2), k);
          };
        }
        function ll(o) {
          return De(function (u, c) {
            var p = -1,
              x = c.length,
              k = x > 1 ? c[x - 1] : n,
              I = x > 2 ? c[2] : n;
            for (
              k = o.length > 3 && typeof k == "function" ? (x--, k) : n,
                I && ln(c[0], c[1], I) && ((k = x < 3 ? n : k), (x = 1)),
                u = Ze(u);
              ++p < x;

            ) {
              var L = c[p];
              L && o(u, L, p, k);
            }
            return u;
          });
        }
        function e0(o, u) {
          return function (c, p) {
            if (c == null) return c;
            if (!gn(c)) return o(c, p);
            for (
              var x = c.length, k = u ? x : -1, I = Ze(c);
              (u ? k-- : ++k < x) && p(I[k], k, I) !== !1;

            );
            return c;
          };
        }
        function t0(o) {
          return function (u, c, p) {
            for (var x = -1, k = Ze(u), I = p(u), L = I.length; L--; ) {
              var N = I[o ? L : ++x];
              if (c(k[N], N, k) === !1) break;
            }
            return u;
          };
        }
        function SI(o, u, c) {
          var p = u & A,
            x = yu(o);
          function k() {
            var I = this && this !== $t && this instanceof k ? x : o;
            return I.apply(p ? c : this, arguments);
          }
          return k;
        }
        function n0(o) {
          return function (u) {
            u = Ve(u);
            var c = Jo(u) ? xr(u) : n,
              p = c ? c[0] : u.charAt(0),
              x = c ? Ii(c, 1).join("") : u.slice(1);
            return p[o]() + x;
          };
        }
        function ul(o) {
          return function (u) {
            return ad(e1(J0(u).replace(fb, "")), o, "");
          };
        }
        function yu(o) {
          return function () {
            var u = arguments;
            switch (u.length) {
              case 0:
                return new o();
              case 1:
                return new o(u[0]);
              case 2:
                return new o(u[0], u[1]);
              case 3:
                return new o(u[0], u[1], u[2]);
              case 4:
                return new o(u[0], u[1], u[2], u[3]);
              case 5:
                return new o(u[0], u[1], u[2], u[3], u[4]);
              case 6:
                return new o(u[0], u[1], u[2], u[3], u[4], u[5]);
              case 7:
                return new o(u[0], u[1], u[2], u[3], u[4], u[5], u[6]);
            }
            var c = ol(o.prototype),
              p = o.apply(c, u);
            return pt(p) ? p : c;
          };
        }
        function EI(o, u, c) {
          var p = yu(o);
          function x() {
            for (var k = arguments.length, I = j(k), L = k, N = sl(x); L--; )
              I[L] = arguments[L];
            var Q = k < 3 && I[0] !== N && I[k - 1] !== N ? [] : Ci(I, N);
            if (((k -= Q.length), k < c))
              return u0(o, u, sa, x.placeholder, n, I, Q, n, n, c - k);
            var Y = this && this !== $t && this instanceof x ? p : o;
            return On(Y, this, I);
          }
          return x;
        }
        function r0(o) {
          return function (u, c, p) {
            var x = Ze(u);
            if (!gn(u)) {
              var k = pe(c, 3);
              (u = Dt(u)),
                (c = function (L) {
                  return k(x[L], L, x);
                });
            }
            var I = o(u, c, p);
            return I > -1 ? x[k ? u[I] : I] : n;
          };
        }
        function i0(o) {
          return Jr(function (u) {
            var c = u.length,
              p = c,
              x = Jn.prototype.thru;
            for (o && u.reverse(); p--; ) {
              var k = u[p];
              if (typeof k != "function") throw new Zn(s);
              if (x && !I && da(k) == "wrapper") var I = new Jn([], !0);
            }
            for (p = I ? p : c; ++p < c; ) {
              k = u[p];
              var L = da(k),
                N = L == "wrapper" ? jd(k) : n;
              N &&
              Gd(N[0]) &&
              N[1] == (F | _ | D | z) &&
              !N[4].length &&
              N[9] == 1
                ? (I = I[da(N[0])].apply(I, N[3]))
                : (I = k.length == 1 && Gd(k) ? I[L]() : I.thru(k));
            }
            return function () {
              var Q = arguments,
                Y = Q[0];
              if (I && Q.length == 1 && ke(Y)) return I.plant(Y).value();
              for (var Z = 0, le = c ? u[Z].apply(this, Q) : Y; ++Z < c; )
                le = u[Z].call(this, le);
              return le;
            };
          });
        }
        function sa(o, u, c, p, x, k, I, L, N, Q) {
          var Y = u & F,
            Z = u & A,
            le = u & v,
            ce = u & (_ | P),
            ge = u & q,
            Re = le ? n : yu(o);
          function me() {
            for (var Le = arguments.length, ze = j(Le), Pn = Le; Pn--; )
              ze[Pn] = arguments[Pn];
            if (ce)
              var un = sl(me),
                An = Lb(ze, un);
            if (
              (p && (ze = Zy(ze, p, x, ce)),
              k && (ze = Jy(ze, k, I, ce)),
              (Le -= An),
              ce && Le < Q)
            ) {
              var Ct = Ci(ze, un);
              return u0(o, u, sa, me.placeholder, c, ze, Ct, L, N, Q - Le);
            }
            var Er = Z ? c : this,
              ri = le ? Er[o] : o;
            return (
              (Le = ze.length),
              L ? (ze = HI(ze, L)) : ge && Le > 1 && ze.reverse(),
              Y && N < Le && (ze.length = N),
              this && this !== $t && this instanceof me && (ri = Re || yu(ri)),
              ri.apply(Er, ze)
            );
          }
          return me;
        }
        function o0(o, u) {
          return function (c, p) {
            return YO(c, o, u(p), {});
          };
        }
        function aa(o, u) {
          return function (c, p) {
            var x;
            if (c === n && p === n) return u;
            if ((c !== n && (x = c), p !== n)) {
              if (x === n) return p;
              typeof c == "string" || typeof p == "string"
                ? ((c = Tn(c)), (p = Tn(p)))
                : ((c = Wy(c)), (p = Wy(p))),
                (x = o(c, p));
            }
            return x;
          };
        }
        function $d(o) {
          return Jr(function (u) {
            return (
              (u = st(u, In(pe()))),
              De(function (c) {
                var p = this;
                return o(u, function (x) {
                  return On(x, p, c);
                });
              })
            );
          });
        }
        function ca(o, u) {
          u = u === n ? " " : Tn(u);
          var c = u.length;
          if (c < 2) return c ? Ad(u, o) : u;
          var p = Ad(u, Ys(o / el(u)));
          return Jo(u) ? Ii(xr(p), 0, o).join("") : p.slice(0, o);
        }
        function CI(o, u, c, p) {
          var x = u & A,
            k = yu(o);
          function I() {
            for (
              var L = -1,
                N = arguments.length,
                Q = -1,
                Y = p.length,
                Z = j(Y + N),
                le = this && this !== $t && this instanceof I ? k : o;
              ++Q < Y;

            )
              Z[Q] = p[Q];
            for (; N--; ) Z[Q++] = arguments[++L];
            return On(le, x ? c : this, Z);
          }
          return I;
        }
        function l0(o) {
          return function (u, c, p) {
            return (
              p && typeof p != "number" && ln(u, c, p) && (c = p = n),
              (u = ni(u)),
              c === n ? ((c = u), (u = 0)) : (c = ni(c)),
              (p = p === n ? (u < c ? 1 : -1) : ni(p)),
              sI(u, c, p, o)
            );
          };
        }
        function fa(o) {
          return function (u, c) {
            return (
              (typeof u == "string" && typeof c == "string") ||
                ((u = rr(u)), (c = rr(c))),
              o(u, c)
            );
          };
        }
        function u0(o, u, c, p, x, k, I, L, N, Q) {
          var Y = u & _,
            Z = Y ? I : n,
            le = Y ? n : I,
            ce = Y ? k : n,
            ge = Y ? n : k;
          (u |= Y ? D : R), (u &= ~(Y ? R : D)), u & S || (u &= ~(A | v));
          var Re = [o, u, x, ce, Z, ge, le, L, N, Q],
            me = c.apply(n, Re);
          return Gd(o) && x0(me, Re), (me.placeholder = p), w0(me, o, u);
        }
        function Bd(o) {
          var u = It[o];
          return function (c, p) {
            if (
              ((c = rr(c)), (p = p == null ? 0 : Gt(Ie(p), 292)), p && wy(c))
            ) {
              var x = (Ve(c) + "e").split("e"),
                k = u(x[0] + "e" + (+x[1] + p));
              return (
                (x = (Ve(k) + "e").split("e")), +(x[0] + "e" + (+x[1] - p))
              );
            }
            return u(c);
          };
        }
        var kI =
          rl && 1 / Bs(new rl([, -0]))[1] == ue
            ? function (o) {
                return new rl(o);
              }
            : sp;
        function s0(o) {
          return function (u) {
            var c = Kt(u);
            return c == yt ? md(u) : c == Vt ? Ub(u) : Db(u, o(u));
          };
        }
        function Zr(o, u, c, p, x, k, I, L) {
          var N = u & v;
          if (!N && typeof o != "function") throw new Zn(s);
          var Q = p ? p.length : 0;
          if (
            (Q || ((u &= ~(D | R)), (p = x = n)),
            (I = I === n ? I : Tt(Ie(I), 0)),
            (L = L === n ? L : Ie(L)),
            (Q -= x ? x.length : 0),
            u & R)
          ) {
            var Y = p,
              Z = x;
            p = x = n;
          }
          var le = N ? n : jd(o),
            ce = [o, u, c, p, x, Y, Z, k, I, L];
          if (
            (le && $I(ce, le),
            (o = ce[0]),
            (u = ce[1]),
            (c = ce[2]),
            (p = ce[3]),
            (x = ce[4]),
            (L = ce[9] = ce[9] === n ? (N ? 0 : o.length) : Tt(ce[9] - Q, 0)),
            !L && u & (_ | P) && (u &= ~(_ | P)),
            !u || u == A)
          )
            var ge = SI(o, u, c);
          else
            u == _ || u == P
              ? (ge = EI(o, u, L))
              : (u == D || u == (A | D)) && !x.length
              ? (ge = CI(o, u, c, p))
              : (ge = sa.apply(n, ce));
          var Re = le ? Hy : x0;
          return w0(Re(ge, ce), o, u);
        }
        function a0(o, u, c, p) {
          return o === n || (Sr(o, nl[c]) && !Ge.call(p, c)) ? u : o;
        }
        function c0(o, u, c, p, x, k) {
          return (
            pt(o) && pt(u) && (k.set(u, o), ia(o, u, n, c0, k), k.delete(u)), o
          );
        }
        function _I(o) {
          return Su(o) ? n : o;
        }
        function f0(o, u, c, p, x, k) {
          var I = c & w,
            L = o.length,
            N = u.length;
          if (L != N && !(I && N > L)) return !1;
          var Q = k.get(o),
            Y = k.get(u);
          if (Q && Y) return Q == u && Y == o;
          var Z = -1,
            le = !0,
            ce = c & E ? new go() : n;
          for (k.set(o, u), k.set(u, o); ++Z < L; ) {
            var ge = o[Z],
              Re = u[Z];
            if (p) var me = I ? p(Re, ge, Z, u, o, k) : p(ge, Re, Z, o, u, k);
            if (me !== n) {
              if (me) continue;
              le = !1;
              break;
            }
            if (ce) {
              if (
                !cd(u, function (Le, ze) {
                  if (!uu(ce, ze) && (ge === Le || x(ge, Le, c, p, k)))
                    return ce.push(ze);
                })
              ) {
                le = !1;
                break;
              }
            } else if (!(ge === Re || x(ge, Re, c, p, k))) {
              le = !1;
              break;
            }
          }
          return k.delete(o), k.delete(u), le;
        }
        function bI(o, u, c, p, x, k, I) {
          switch (c) {
            case W:
              if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset)
                return !1;
              (o = o.buffer), (u = u.buffer);
            case Qn:
              return !(
                o.byteLength != u.byteLength || !k(new qs(o), new qs(u))
              );
            case ye:
            case Fe:
            case qn:
              return Sr(+o, +u);
            case Ue:
              return o.name == u.name && o.message == u.message;
            case Gn:
            case vr:
              return o == u + "";
            case yt:
              var L = md;
            case Vt:
              var N = p & w;
              if ((L || (L = Bs), o.size != u.size && !N)) return !1;
              var Q = I.get(o);
              if (Q) return Q == u;
              (p |= E), I.set(o, u);
              var Y = f0(L(o), L(u), p, x, k, I);
              return I.delete(o), Y;
            case qr:
              if (du) return du.call(o) == du.call(u);
          }
          return !1;
        }
        function OI(o, u, c, p, x, k) {
          var I = c & w,
            L = Ud(o),
            N = L.length,
            Q = Ud(u),
            Y = Q.length;
          if (N != Y && !I) return !1;
          for (var Z = N; Z--; ) {
            var le = L[Z];
            if (!(I ? le in u : Ge.call(u, le))) return !1;
          }
          var ce = k.get(o),
            ge = k.get(u);
          if (ce && ge) return ce == u && ge == o;
          var Re = !0;
          k.set(o, u), k.set(u, o);
          for (var me = I; ++Z < N; ) {
            le = L[Z];
            var Le = o[le],
              ze = u[le];
            if (p) var Pn = I ? p(ze, Le, le, u, o, k) : p(Le, ze, le, o, u, k);
            if (!(Pn === n ? Le === ze || x(Le, ze, c, p, k) : Pn)) {
              Re = !1;
              break;
            }
            me || (me = le == "constructor");
          }
          if (Re && !me) {
            var un = o.constructor,
              An = u.constructor;
            un != An &&
              "constructor" in o &&
              "constructor" in u &&
              !(
                typeof un == "function" &&
                un instanceof un &&
                typeof An == "function" &&
                An instanceof An
              ) &&
              (Re = !1);
          }
          return k.delete(o), k.delete(u), Re;
        }
        function Jr(o) {
          return Qd(v0(o, n, b0), o + "");
        }
        function Ud(o) {
          return Py(o, Dt, Vd);
        }
        function Hd(o) {
          return Py(o, mn, d0);
        }
        var jd = Zs
          ? function (o) {
              return Zs.get(o);
            }
          : sp;
        function da(o) {
          for (
            var u = o.name + "", c = il[u], p = Ge.call(il, u) ? c.length : 0;
            p--;

          ) {
            var x = c[p],
              k = x.func;
            if (k == null || k == o) return x.name;
          }
          return u;
        }
        function sl(o) {
          var u = Ge.call(C, "placeholder") ? C : o;
          return u.placeholder;
        }
        function pe() {
          var o = C.iteratee || lp;
          return (
            (o = o === lp ? Ly : o),
            arguments.length ? o(arguments[0], arguments[1]) : o
          );
        }
        function pa(o, u) {
          var c = o.__data__;
          return MI(u) ? c[typeof u == "string" ? "string" : "hash"] : c.map;
        }
        function Wd(o) {
          for (var u = Dt(o), c = u.length; c--; ) {
            var p = u[c],
              x = o[p];
            u[c] = [p, x, g0(x)];
          }
          return u;
        }
        function yo(o, u) {
          var c = zb(o, u);
          return Dy(c) ? c : n;
        }
        function II(o) {
          var u = Ge.call(o, po),
            c = o[po];
          try {
            o[po] = n;
            var p = !0;
          } catch {}
          var x = Ws.call(o);
          return p && (u ? (o[po] = c) : delete o[po]), x;
        }
        var Vd = yd
            ? function (o) {
                return o == null
                  ? []
                  : ((o = Ze(o)),
                    Si(yd(o), function (u) {
                      return yy.call(o, u);
                    }));
              }
            : ap,
          d0 = yd
            ? function (o) {
                for (var u = []; o; ) Ei(u, Vd(o)), (o = Gs(o));
                return u;
              }
            : ap,
          Kt = on;
        ((xd && Kt(new xd(new ArrayBuffer(1))) != W) ||
          (au && Kt(new au()) != yt) ||
          (wd && Kt(wd.resolve()) != zt) ||
          (rl && Kt(new rl()) != Vt) ||
          (cu && Kt(new cu()) != Pr)) &&
          (Kt = function (o) {
            var u = on(o),
              c = u == ut ? o.constructor : n,
              p = c ? xo(c) : "";
            if (p)
              switch (p) {
                case cO:
                  return W;
                case fO:
                  return yt;
                case dO:
                  return zt;
                case pO:
                  return Vt;
                case hO:
                  return Pr;
              }
            return u;
          });
        function TI(o, u, c) {
          for (var p = -1, x = c.length; ++p < x; ) {
            var k = c[p],
              I = k.size;
            switch (k.type) {
              case "drop":
                o += I;
                break;
              case "dropRight":
                u -= I;
                break;
              case "take":
                u = Gt(u, o + I);
                break;
              case "takeRight":
                o = Tt(o, u - I);
                break;
            }
          }
          return { start: o, end: u };
        }
        function RI(o) {
          var u = o.match(N_);
          return u ? u[1].split(F_) : [];
        }
        function p0(o, u, c) {
          u = Oi(u, o);
          for (var p = -1, x = u.length, k = !1; ++p < x; ) {
            var I = Mr(u[p]);
            if (!(k = o != null && c(o, I))) break;
            o = o[I];
          }
          return k || ++p != x
            ? k
            : ((x = o == null ? 0 : o.length),
              !!x && wa(x) && ei(I, x) && (ke(o) || wo(o)));
        }
        function PI(o) {
          var u = o.length,
            c = new o.constructor(u);
          return (
            u &&
              typeof o[0] == "string" &&
              Ge.call(o, "index") &&
              ((c.index = o.index), (c.input = o.input)),
            c
          );
        }
        function h0(o) {
          return typeof o.constructor == "function" && !xu(o) ? ol(Gs(o)) : {};
        }
        function AI(o, u, c) {
          var p = o.constructor;
          switch (u) {
            case Qn:
              return zd(o);
            case ye:
            case Fe:
              return new p(+o);
            case W:
              return gI(o, c);
            case re:
            case xe:
            case He:
            case qt:
            case Gr:
            case qe:
            case St:
            case Ar:
            case Kr:
              return Yy(o, c);
            case yt:
              return new p();
            case qn:
            case vr:
              return new p(o);
            case Gn:
              return mI(o);
            case Vt:
              return new p();
            case qr:
              return vI(o);
          }
        }
        function DI(o, u) {
          var c = u.length;
          if (!c) return o;
          var p = c - 1;
          return (
            (u[p] = (c > 1 ? "& " : "") + u[p]),
            (u = u.join(c > 2 ? ", " : " ")),
            o.replace(
              M_,
              `{
/* [wrapped with ` +
                u +
                `] */
`
            )
          );
        }
        function LI(o) {
          return ke(o) || wo(o) || !!(xy && o && o[xy]);
        }
        function ei(o, u) {
          var c = typeof o;
          return (
            (u = u ?? U),
            !!u &&
              (c == "number" || (c != "symbol" && q_.test(o))) &&
              o > -1 &&
              o % 1 == 0 &&
              o < u
          );
        }
        function ln(o, u, c) {
          if (!pt(c)) return !1;
          var p = typeof u;
          return (
            p == "number" ? gn(c) && ei(u, c.length) : p == "string" && u in c
          )
            ? Sr(c[u], o)
            : !1;
        }
        function qd(o, u) {
          if (ke(o)) return !1;
          var c = typeof o;
          return c == "number" ||
            c == "symbol" ||
            c == "boolean" ||
            o == null ||
            Rn(o)
            ? !0
            : P_.test(o) || !R_.test(o) || (u != null && o in Ze(u));
        }
        function MI(o) {
          var u = typeof o;
          return u == "string" ||
            u == "number" ||
            u == "symbol" ||
            u == "boolean"
            ? o !== "__proto__"
            : o === null;
        }
        function Gd(o) {
          var u = da(o),
            c = C[u];
          if (typeof c != "function" || !(u in Me.prototype)) return !1;
          if (o === c) return !0;
          var p = jd(c);
          return !!p && o === p[0];
        }
        function NI(o) {
          return !!gy && gy in o;
        }
        var FI = Hs ? ti : cp;
        function xu(o) {
          var u = o && o.constructor,
            c = (typeof u == "function" && u.prototype) || nl;
          return o === c;
        }
        function g0(o) {
          return o === o && !pt(o);
        }
        function m0(o, u) {
          return function (c) {
            return c == null ? !1 : c[o] === u && (u !== n || o in Ze(c));
          };
        }
        function zI(o) {
          var u = ya(o, function (p) {
              return c.size === d && c.clear(), p;
            }),
            c = u.cache;
          return u;
        }
        function $I(o, u) {
          var c = o[1],
            p = u[1],
            x = c | p,
            k = x < (A | v | F),
            I =
              (p == F && c == _) ||
              (p == F && c == z && o[7].length <= u[8]) ||
              (p == (F | z) && u[7].length <= u[8] && c == _);
          if (!(k || I)) return o;
          p & A && ((o[2] = u[2]), (x |= c & A ? 0 : S));
          var L = u[3];
          if (L) {
            var N = o[3];
            (o[3] = N ? Zy(N, L, u[4]) : L), (o[4] = N ? Ci(o[3], h) : u[4]);
          }
          return (
            (L = u[5]),
            L &&
              ((N = o[5]),
              (o[5] = N ? Jy(N, L, u[6]) : L),
              (o[6] = N ? Ci(o[5], h) : u[6])),
            (L = u[7]),
            L && (o[7] = L),
            p & F && (o[8] = o[8] == null ? u[8] : Gt(o[8], u[8])),
            o[9] == null && (o[9] = u[9]),
            (o[0] = u[0]),
            (o[1] = x),
            o
          );
        }
        function BI(o) {
          var u = [];
          if (o != null) for (var c in Ze(o)) u.push(c);
          return u;
        }
        function UI(o) {
          return Ws.call(o);
        }
        function v0(o, u, c) {
          return (
            (u = Tt(u === n ? o.length - 1 : u, 0)),
            function () {
              for (
                var p = arguments, x = -1, k = Tt(p.length - u, 0), I = j(k);
                ++x < k;

              )
                I[x] = p[u + x];
              x = -1;
              for (var L = j(u + 1); ++x < u; ) L[x] = p[x];
              return (L[u] = c(I)), On(o, this, L);
            }
          );
        }
        function y0(o, u) {
          return u.length < 2 ? o : vo(o, tr(u, 0, -1));
        }
        function HI(o, u) {
          for (var c = o.length, p = Gt(u.length, c), x = hn(o); p--; ) {
            var k = u[p];
            o[p] = ei(k, c) ? x[k] : n;
          }
          return o;
        }
        function Kd(o, u) {
          if (
            !(u === "constructor" && typeof o[u] == "function") &&
            u != "__proto__"
          )
            return o[u];
        }
        var x0 = S0(Hy),
          wu =
            rO ||
            function (o, u) {
              return $t.setTimeout(o, u);
            },
          Qd = S0(fI);
        function w0(o, u, c) {
          var p = u + "";
          return Qd(o, DI(p, jI(RI(p), c)));
        }
        function S0(o) {
          var u = 0,
            c = 0;
          return function () {
            var p = uO(),
              x = $ - (p - c);
            if (((c = p), x > 0)) {
              if (++u >= X) return arguments[0];
            } else u = 0;
            return o.apply(n, arguments);
          };
        }
        function ha(o, u) {
          var c = -1,
            p = o.length,
            x = p - 1;
          for (u = u === n ? p : u; ++c < u; ) {
            var k = Pd(c, x),
              I = o[k];
            (o[k] = o[c]), (o[c] = I);
          }
          return (o.length = u), o;
        }
        var E0 = zI(function (o) {
          var u = [];
          return (
            o.charCodeAt(0) === 46 && u.push(""),
            o.replace(A_, function (c, p, x, k) {
              u.push(x ? k.replace(B_, "$1") : p || c);
            }),
            u
          );
        });
        function Mr(o) {
          if (typeof o == "string" || Rn(o)) return o;
          var u = o + "";
          return u == "0" && 1 / o == -ue ? "-0" : u;
        }
        function xo(o) {
          if (o != null) {
            try {
              return js.call(o);
            } catch {}
            try {
              return o + "";
            } catch {}
          }
          return "";
        }
        function jI(o, u) {
          return (
            Xn(ve, function (c) {
              var p = "_." + c[0];
              u & c[1] && !zs(o, p) && o.push(p);
            }),
            o.sort()
          );
        }
        function C0(o) {
          if (o instanceof Me) return o.clone();
          var u = new Jn(o.__wrapped__, o.__chain__);
          return (
            (u.__actions__ = hn(o.__actions__)),
            (u.__index__ = o.__index__),
            (u.__values__ = o.__values__),
            u
          );
        }
        function WI(o, u, c) {
          (c ? ln(o, u, c) : u === n) ? (u = 1) : (u = Tt(Ie(u), 0));
          var p = o == null ? 0 : o.length;
          if (!p || u < 1) return [];
          for (var x = 0, k = 0, I = j(Ys(p / u)); x < p; )
            I[k++] = tr(o, x, (x += u));
          return I;
        }
        function VI(o) {
          for (
            var u = -1, c = o == null ? 0 : o.length, p = 0, x = [];
            ++u < c;

          ) {
            var k = o[u];
            k && (x[p++] = k);
          }
          return x;
        }
        function qI() {
          var o = arguments.length;
          if (!o) return [];
          for (var u = j(o - 1), c = arguments[0], p = o; p--; )
            u[p - 1] = arguments[p];
          return Ei(ke(c) ? hn(c) : [c], Bt(u, 1));
        }
        var GI = De(function (o, u) {
            return Et(o) ? hu(o, Bt(u, 1, Et, !0)) : [];
          }),
          KI = De(function (o, u) {
            var c = nr(u);
            return (
              Et(c) && (c = n), Et(o) ? hu(o, Bt(u, 1, Et, !0), pe(c, 2)) : []
            );
          }),
          QI = De(function (o, u) {
            var c = nr(u);
            return Et(c) && (c = n), Et(o) ? hu(o, Bt(u, 1, Et, !0), n, c) : [];
          });
        function YI(o, u, c) {
          var p = o == null ? 0 : o.length;
          return p
            ? ((u = c || u === n ? 1 : Ie(u)), tr(o, u < 0 ? 0 : u, p))
            : [];
        }
        function XI(o, u, c) {
          var p = o == null ? 0 : o.length;
          return p
            ? ((u = c || u === n ? 1 : Ie(u)),
              (u = p - u),
              tr(o, 0, u < 0 ? 0 : u))
            : [];
        }
        function ZI(o, u) {
          return o && o.length ? la(o, pe(u, 3), !0, !0) : [];
        }
        function JI(o, u) {
          return o && o.length ? la(o, pe(u, 3), !0) : [];
        }
        function eT(o, u, c, p) {
          var x = o == null ? 0 : o.length;
          return x
            ? (c && typeof c != "number" && ln(o, u, c) && ((c = 0), (p = x)),
              qO(o, u, c, p))
            : [];
        }
        function k0(o, u, c) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var x = c == null ? 0 : Ie(c);
          return x < 0 && (x = Tt(p + x, 0)), $s(o, pe(u, 3), x);
        }
        function _0(o, u, c) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var x = p - 1;
          return (
            c !== n && ((x = Ie(c)), (x = c < 0 ? Tt(p + x, 0) : Gt(x, p - 1))),
            $s(o, pe(u, 3), x, !0)
          );
        }
        function b0(o) {
          var u = o == null ? 0 : o.length;
          return u ? Bt(o, 1) : [];
        }
        function tT(o) {
          var u = o == null ? 0 : o.length;
          return u ? Bt(o, ue) : [];
        }
        function nT(o, u) {
          var c = o == null ? 0 : o.length;
          return c ? ((u = u === n ? 1 : Ie(u)), Bt(o, u)) : [];
        }
        function rT(o) {
          for (var u = -1, c = o == null ? 0 : o.length, p = {}; ++u < c; ) {
            var x = o[u];
            p[x[0]] = x[1];
          }
          return p;
        }
        function O0(o) {
          return o && o.length ? o[0] : n;
        }
        function iT(o, u, c) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var x = c == null ? 0 : Ie(c);
          return x < 0 && (x = Tt(p + x, 0)), Zo(o, u, x);
        }
        function oT(o) {
          var u = o == null ? 0 : o.length;
          return u ? tr(o, 0, -1) : [];
        }
        var lT = De(function (o) {
            var u = st(o, Nd);
            return u.length && u[0] === o[0] ? bd(u) : [];
          }),
          uT = De(function (o) {
            var u = nr(o),
              c = st(o, Nd);
            return (
              u === nr(c) ? (u = n) : c.pop(),
              c.length && c[0] === o[0] ? bd(c, pe(u, 2)) : []
            );
          }),
          sT = De(function (o) {
            var u = nr(o),
              c = st(o, Nd);
            return (
              (u = typeof u == "function" ? u : n),
              u && c.pop(),
              c.length && c[0] === o[0] ? bd(c, n, u) : []
            );
          });
        function aT(o, u) {
          return o == null ? "" : oO.call(o, u);
        }
        function nr(o) {
          var u = o == null ? 0 : o.length;
          return u ? o[u - 1] : n;
        }
        function cT(o, u, c) {
          var p = o == null ? 0 : o.length;
          if (!p) return -1;
          var x = p;
          return (
            c !== n && ((x = Ie(c)), (x = x < 0 ? Tt(p + x, 0) : Gt(x, p - 1))),
            u === u ? jb(o, u, x) : $s(o, uy, x, !0)
          );
        }
        function fT(o, u) {
          return o && o.length ? zy(o, Ie(u)) : n;
        }
        var dT = De(I0);
        function I0(o, u) {
          return o && o.length && u && u.length ? Rd(o, u) : o;
        }
        function pT(o, u, c) {
          return o && o.length && u && u.length ? Rd(o, u, pe(c, 2)) : o;
        }
        function hT(o, u, c) {
          return o && o.length && u && u.length ? Rd(o, u, n, c) : o;
        }
        var gT = Jr(function (o, u) {
          var c = o == null ? 0 : o.length,
            p = Ed(o, u);
          return (
            Uy(
              o,
              st(u, function (x) {
                return ei(x, c) ? +x : x;
              }).sort(Xy)
            ),
            p
          );
        });
        function mT(o, u) {
          var c = [];
          if (!(o && o.length)) return c;
          var p = -1,
            x = [],
            k = o.length;
          for (u = pe(u, 3); ++p < k; ) {
            var I = o[p];
            u(I, p, o) && (c.push(I), x.push(p));
          }
          return Uy(o, x), c;
        }
        function Yd(o) {
          return o == null ? o : aO.call(o);
        }
        function vT(o, u, c) {
          var p = o == null ? 0 : o.length;
          return p
            ? (c && typeof c != "number" && ln(o, u, c)
                ? ((u = 0), (c = p))
                : ((u = u == null ? 0 : Ie(u)), (c = c === n ? p : Ie(c))),
              tr(o, u, c))
            : [];
        }
        function yT(o, u) {
          return oa(o, u);
        }
        function xT(o, u, c) {
          return Dd(o, u, pe(c, 2));
        }
        function wT(o, u) {
          var c = o == null ? 0 : o.length;
          if (c) {
            var p = oa(o, u);
            if (p < c && Sr(o[p], u)) return p;
          }
          return -1;
        }
        function ST(o, u) {
          return oa(o, u, !0);
        }
        function ET(o, u, c) {
          return Dd(o, u, pe(c, 2), !0);
        }
        function CT(o, u) {
          var c = o == null ? 0 : o.length;
          if (c) {
            var p = oa(o, u, !0) - 1;
            if (Sr(o[p], u)) return p;
          }
          return -1;
        }
        function kT(o) {
          return o && o.length ? jy(o) : [];
        }
        function _T(o, u) {
          return o && o.length ? jy(o, pe(u, 2)) : [];
        }
        function bT(o) {
          var u = o == null ? 0 : o.length;
          return u ? tr(o, 1, u) : [];
        }
        function OT(o, u, c) {
          return o && o.length
            ? ((u = c || u === n ? 1 : Ie(u)), tr(o, 0, u < 0 ? 0 : u))
            : [];
        }
        function IT(o, u, c) {
          var p = o == null ? 0 : o.length;
          return p
            ? ((u = c || u === n ? 1 : Ie(u)),
              (u = p - u),
              tr(o, u < 0 ? 0 : u, p))
            : [];
        }
        function TT(o, u) {
          return o && o.length ? la(o, pe(u, 3), !1, !0) : [];
        }
        function RT(o, u) {
          return o && o.length ? la(o, pe(u, 3)) : [];
        }
        var PT = De(function (o) {
            return bi(Bt(o, 1, Et, !0));
          }),
          AT = De(function (o) {
            var u = nr(o);
            return Et(u) && (u = n), bi(Bt(o, 1, Et, !0), pe(u, 2));
          }),
          DT = De(function (o) {
            var u = nr(o);
            return (
              (u = typeof u == "function" ? u : n), bi(Bt(o, 1, Et, !0), n, u)
            );
          });
        function LT(o) {
          return o && o.length ? bi(o) : [];
        }
        function MT(o, u) {
          return o && o.length ? bi(o, pe(u, 2)) : [];
        }
        function NT(o, u) {
          return (
            (u = typeof u == "function" ? u : n),
            o && o.length ? bi(o, n, u) : []
          );
        }
        function Xd(o) {
          if (!(o && o.length)) return [];
          var u = 0;
          return (
            (o = Si(o, function (c) {
              if (Et(c)) return (u = Tt(c.length, u)), !0;
            })),
            hd(u, function (c) {
              return st(o, fd(c));
            })
          );
        }
        function T0(o, u) {
          if (!(o && o.length)) return [];
          var c = Xd(o);
          return u == null
            ? c
            : st(c, function (p) {
                return On(u, n, p);
              });
        }
        var FT = De(function (o, u) {
            return Et(o) ? hu(o, u) : [];
          }),
          zT = De(function (o) {
            return Md(Si(o, Et));
          }),
          $T = De(function (o) {
            var u = nr(o);
            return Et(u) && (u = n), Md(Si(o, Et), pe(u, 2));
          }),
          BT = De(function (o) {
            var u = nr(o);
            return (u = typeof u == "function" ? u : n), Md(Si(o, Et), n, u);
          }),
          UT = De(Xd);
        function HT(o, u) {
          return Gy(o || [], u || [], pu);
        }
        function jT(o, u) {
          return Gy(o || [], u || [], vu);
        }
        var WT = De(function (o) {
          var u = o.length,
            c = u > 1 ? o[u - 1] : n;
          return (c = typeof c == "function" ? (o.pop(), c) : n), T0(o, c);
        });
        function R0(o) {
          var u = C(o);
          return (u.__chain__ = !0), u;
        }
        function VT(o, u) {
          return u(o), o;
        }
        function ga(o, u) {
          return u(o);
        }
        var qT = Jr(function (o) {
          var u = o.length,
            c = u ? o[0] : 0,
            p = this.__wrapped__,
            x = function (k) {
              return Ed(k, o);
            };
          return u > 1 ||
            this.__actions__.length ||
            !(p instanceof Me) ||
            !ei(c)
            ? this.thru(x)
            : ((p = p.slice(c, +c + (u ? 1 : 0))),
              p.__actions__.push({ func: ga, args: [x], thisArg: n }),
              new Jn(p, this.__chain__).thru(function (k) {
                return u && !k.length && k.push(n), k;
              }));
        });
        function GT() {
          return R0(this);
        }
        function KT() {
          return new Jn(this.value(), this.__chain__);
        }
        function QT() {
          this.__values__ === n && (this.__values__ = W0(this.value()));
          var o = this.__index__ >= this.__values__.length,
            u = o ? n : this.__values__[this.__index__++];
          return { done: o, value: u };
        }
        function YT() {
          return this;
        }
        function XT(o) {
          for (var u, c = this; c instanceof ea; ) {
            var p = C0(c);
            (p.__index__ = 0),
              (p.__values__ = n),
              u ? (x.__wrapped__ = p) : (u = p);
            var x = p;
            c = c.__wrapped__;
          }
          return (x.__wrapped__ = o), u;
        }
        function ZT() {
          var o = this.__wrapped__;
          if (o instanceof Me) {
            var u = o;
            return (
              this.__actions__.length && (u = new Me(this)),
              (u = u.reverse()),
              u.__actions__.push({ func: ga, args: [Yd], thisArg: n }),
              new Jn(u, this.__chain__)
            );
          }
          return this.thru(Yd);
        }
        function JT() {
          return qy(this.__wrapped__, this.__actions__);
        }
        var eR = ua(function (o, u, c) {
          Ge.call(o, c) ? ++o[c] : Xr(o, c, 1);
        });
        function tR(o, u, c) {
          var p = ke(o) ? oy : VO;
          return c && ln(o, u, c) && (u = n), p(o, pe(u, 3));
        }
        function nR(o, u) {
          var c = ke(o) ? Si : Ty;
          return c(o, pe(u, 3));
        }
        var rR = r0(k0),
          iR = r0(_0);
        function oR(o, u) {
          return Bt(ma(o, u), 1);
        }
        function lR(o, u) {
          return Bt(ma(o, u), ue);
        }
        function uR(o, u, c) {
          return (c = c === n ? 1 : Ie(c)), Bt(ma(o, u), c);
        }
        function P0(o, u) {
          var c = ke(o) ? Xn : _i;
          return c(o, pe(u, 3));
        }
        function A0(o, u) {
          var c = ke(o) ? bb : Iy;
          return c(o, pe(u, 3));
        }
        var sR = ua(function (o, u, c) {
          Ge.call(o, c) ? o[c].push(u) : Xr(o, c, [u]);
        });
        function aR(o, u, c, p) {
          (o = gn(o) ? o : cl(o)), (c = c && !p ? Ie(c) : 0);
          var x = o.length;
          return (
            c < 0 && (c = Tt(x + c, 0)),
            Sa(o) ? c <= x && o.indexOf(u, c) > -1 : !!x && Zo(o, u, c) > -1
          );
        }
        var cR = De(function (o, u, c) {
            var p = -1,
              x = typeof u == "function",
              k = gn(o) ? j(o.length) : [];
            return (
              _i(o, function (I) {
                k[++p] = x ? On(u, I, c) : gu(I, u, c);
              }),
              k
            );
          }),
          fR = ua(function (o, u, c) {
            Xr(o, c, u);
          });
        function ma(o, u) {
          var c = ke(o) ? st : My;
          return c(o, pe(u, 3));
        }
        function dR(o, u, c, p) {
          return o == null
            ? []
            : (ke(u) || (u = u == null ? [] : [u]),
              (c = p ? n : c),
              ke(c) || (c = c == null ? [] : [c]),
              $y(o, u, c));
        }
        var pR = ua(
          function (o, u, c) {
            o[c ? 0 : 1].push(u);
          },
          function () {
            return [[], []];
          }
        );
        function hR(o, u, c) {
          var p = ke(o) ? ad : ay,
            x = arguments.length < 3;
          return p(o, pe(u, 4), c, x, _i);
        }
        function gR(o, u, c) {
          var p = ke(o) ? Ob : ay,
            x = arguments.length < 3;
          return p(o, pe(u, 4), c, x, Iy);
        }
        function mR(o, u) {
          var c = ke(o) ? Si : Ty;
          return c(o, xa(pe(u, 3)));
        }
        function vR(o) {
          var u = ke(o) ? ky : aI;
          return u(o);
        }
        function yR(o, u, c) {
          (c ? ln(o, u, c) : u === n) ? (u = 1) : (u = Ie(u));
          var p = ke(o) ? BO : cI;
          return p(o, u);
        }
        function xR(o) {
          var u = ke(o) ? UO : dI;
          return u(o);
        }
        function wR(o) {
          if (o == null) return 0;
          if (gn(o)) return Sa(o) ? el(o) : o.length;
          var u = Kt(o);
          return u == yt || u == Vt ? o.size : Id(o).length;
        }
        function SR(o, u, c) {
          var p = ke(o) ? cd : pI;
          return c && ln(o, u, c) && (u = n), p(o, pe(u, 3));
        }
        var ER = De(function (o, u) {
            if (o == null) return [];
            var c = u.length;
            return (
              c > 1 && ln(o, u[0], u[1])
                ? (u = [])
                : c > 2 && ln(u[0], u[1], u[2]) && (u = [u[0]]),
              $y(o, Bt(u, 1), [])
            );
          }),
          va =
            nO ||
            function () {
              return $t.Date.now();
            };
        function CR(o, u) {
          if (typeof u != "function") throw new Zn(s);
          return (
            (o = Ie(o)),
            function () {
              if (--o < 1) return u.apply(this, arguments);
            }
          );
        }
        function D0(o, u, c) {
          return (
            (u = c ? n : u),
            (u = o && u == null ? o.length : u),
            Zr(o, F, n, n, n, n, u)
          );
        }
        function L0(o, u) {
          var c;
          if (typeof u != "function") throw new Zn(s);
          return (
            (o = Ie(o)),
            function () {
              return (
                --o > 0 && (c = u.apply(this, arguments)), o <= 1 && (u = n), c
              );
            }
          );
        }
        var Zd = De(function (o, u, c) {
            var p = A;
            if (c.length) {
              var x = Ci(c, sl(Zd));
              p |= D;
            }
            return Zr(o, p, u, c, x);
          }),
          M0 = De(function (o, u, c) {
            var p = A | v;
            if (c.length) {
              var x = Ci(c, sl(M0));
              p |= D;
            }
            return Zr(u, p, o, c, x);
          });
        function N0(o, u, c) {
          u = c ? n : u;
          var p = Zr(o, _, n, n, n, n, n, u);
          return (p.placeholder = N0.placeholder), p;
        }
        function F0(o, u, c) {
          u = c ? n : u;
          var p = Zr(o, P, n, n, n, n, n, u);
          return (p.placeholder = F0.placeholder), p;
        }
        function z0(o, u, c) {
          var p,
            x,
            k,
            I,
            L,
            N,
            Q = 0,
            Y = !1,
            Z = !1,
            le = !0;
          if (typeof o != "function") throw new Zn(s);
          (u = rr(u) || 0),
            pt(c) &&
              ((Y = !!c.leading),
              (Z = "maxWait" in c),
              (k = Z ? Tt(rr(c.maxWait) || 0, u) : k),
              (le = "trailing" in c ? !!c.trailing : le));
          function ce(Ct) {
            var Er = p,
              ri = x;
            return (p = x = n), (Q = Ct), (I = o.apply(ri, Er)), I;
          }
          function ge(Ct) {
            return (Q = Ct), (L = wu(Le, u)), Y ? ce(Ct) : I;
          }
          function Re(Ct) {
            var Er = Ct - N,
              ri = Ct - Q,
              r1 = u - Er;
            return Z ? Gt(r1, k - ri) : r1;
          }
          function me(Ct) {
            var Er = Ct - N,
              ri = Ct - Q;
            return N === n || Er >= u || Er < 0 || (Z && ri >= k);
          }
          function Le() {
            var Ct = va();
            if (me(Ct)) return ze(Ct);
            L = wu(Le, Re(Ct));
          }
          function ze(Ct) {
            return (L = n), le && p ? ce(Ct) : ((p = x = n), I);
          }
          function Pn() {
            L !== n && Ky(L), (Q = 0), (p = N = x = L = n);
          }
          function un() {
            return L === n ? I : ze(va());
          }
          function An() {
            var Ct = va(),
              Er = me(Ct);
            if (((p = arguments), (x = this), (N = Ct), Er)) {
              if (L === n) return ge(N);
              if (Z) return Ky(L), (L = wu(Le, u)), ce(N);
            }
            return L === n && (L = wu(Le, u)), I;
          }
          return (An.cancel = Pn), (An.flush = un), An;
        }
        var kR = De(function (o, u) {
            return Oy(o, 1, u);
          }),
          _R = De(function (o, u, c) {
            return Oy(o, rr(u) || 0, c);
          });
        function bR(o) {
          return Zr(o, q);
        }
        function ya(o, u) {
          if (typeof o != "function" || (u != null && typeof u != "function"))
            throw new Zn(s);
          var c = function () {
            var p = arguments,
              x = u ? u.apply(this, p) : p[0],
              k = c.cache;
            if (k.has(x)) return k.get(x);
            var I = o.apply(this, p);
            return (c.cache = k.set(x, I) || k), I;
          };
          return (c.cache = new (ya.Cache || Yr)()), c;
        }
        ya.Cache = Yr;
        function xa(o) {
          if (typeof o != "function") throw new Zn(s);
          return function () {
            var u = arguments;
            switch (u.length) {
              case 0:
                return !o.call(this);
              case 1:
                return !o.call(this, u[0]);
              case 2:
                return !o.call(this, u[0], u[1]);
              case 3:
                return !o.call(this, u[0], u[1], u[2]);
            }
            return !o.apply(this, u);
          };
        }
        function OR(o) {
          return L0(2, o);
        }
        var IR = hI(function (o, u) {
            u =
              u.length == 1 && ke(u[0])
                ? st(u[0], In(pe()))
                : st(Bt(u, 1), In(pe()));
            var c = u.length;
            return De(function (p) {
              for (var x = -1, k = Gt(p.length, c); ++x < k; )
                p[x] = u[x].call(this, p[x]);
              return On(o, this, p);
            });
          }),
          Jd = De(function (o, u) {
            var c = Ci(u, sl(Jd));
            return Zr(o, D, n, u, c);
          }),
          $0 = De(function (o, u) {
            var c = Ci(u, sl($0));
            return Zr(o, R, n, u, c);
          }),
          TR = Jr(function (o, u) {
            return Zr(o, z, n, n, n, u);
          });
        function RR(o, u) {
          if (typeof o != "function") throw new Zn(s);
          return (u = u === n ? u : Ie(u)), De(o, u);
        }
        function PR(o, u) {
          if (typeof o != "function") throw new Zn(s);
          return (
            (u = u == null ? 0 : Tt(Ie(u), 0)),
            De(function (c) {
              var p = c[u],
                x = Ii(c, 0, u);
              return p && Ei(x, p), On(o, this, x);
            })
          );
        }
        function AR(o, u, c) {
          var p = !0,
            x = !0;
          if (typeof o != "function") throw new Zn(s);
          return (
            pt(c) &&
              ((p = "leading" in c ? !!c.leading : p),
              (x = "trailing" in c ? !!c.trailing : x)),
            z0(o, u, { leading: p, maxWait: u, trailing: x })
          );
        }
        function DR(o) {
          return D0(o, 1);
        }
        function LR(o, u) {
          return Jd(Fd(u), o);
        }
        function MR() {
          if (!arguments.length) return [];
          var o = arguments[0];
          return ke(o) ? o : [o];
        }
        function NR(o) {
          return er(o, m);
        }
        function FR(o, u) {
          return (u = typeof u == "function" ? u : n), er(o, m, u);
        }
        function zR(o) {
          return er(o, g | m);
        }
        function $R(o, u) {
          return (u = typeof u == "function" ? u : n), er(o, g | m, u);
        }
        function BR(o, u) {
          return u == null || by(o, u, Dt(u));
        }
        function Sr(o, u) {
          return o === u || (o !== o && u !== u);
        }
        var UR = fa(_d),
          HR = fa(function (o, u) {
            return o >= u;
          }),
          wo = Ay(
            (function () {
              return arguments;
            })()
          )
            ? Ay
            : function (o) {
                return xt(o) && Ge.call(o, "callee") && !yy.call(o, "callee");
              },
          ke = j.isArray,
          jR = Jv ? In(Jv) : XO;
        function gn(o) {
          return o != null && wa(o.length) && !ti(o);
        }
        function Et(o) {
          return xt(o) && gn(o);
        }
        function WR(o) {
          return o === !0 || o === !1 || (xt(o) && on(o) == ye);
        }
        var Ti = iO || cp,
          VR = ey ? In(ey) : ZO;
        function qR(o) {
          return xt(o) && o.nodeType === 1 && !Su(o);
        }
        function GR(o) {
          if (o == null) return !0;
          if (
            gn(o) &&
            (ke(o) ||
              typeof o == "string" ||
              typeof o.splice == "function" ||
              Ti(o) ||
              al(o) ||
              wo(o))
          )
            return !o.length;
          var u = Kt(o);
          if (u == yt || u == Vt) return !o.size;
          if (xu(o)) return !Id(o).length;
          for (var c in o) if (Ge.call(o, c)) return !1;
          return !0;
        }
        function KR(o, u) {
          return mu(o, u);
        }
        function QR(o, u, c) {
          c = typeof c == "function" ? c : n;
          var p = c ? c(o, u) : n;
          return p === n ? mu(o, u, n, c) : !!p;
        }
        function ep(o) {
          if (!xt(o)) return !1;
          var u = on(o);
          return (
            u == Ue ||
            u == Te ||
            (typeof o.message == "string" &&
              typeof o.name == "string" &&
              !Su(o))
          );
        }
        function YR(o) {
          return typeof o == "number" && wy(o);
        }
        function ti(o) {
          if (!pt(o)) return !1;
          var u = on(o);
          return u == $e || u == We || u == Oe || u == pn;
        }
        function B0(o) {
          return typeof o == "number" && o == Ie(o);
        }
        function wa(o) {
          return typeof o == "number" && o > -1 && o % 1 == 0 && o <= U;
        }
        function pt(o) {
          var u = typeof o;
          return o != null && (u == "object" || u == "function");
        }
        function xt(o) {
          return o != null && typeof o == "object";
        }
        var U0 = ty ? In(ty) : eI;
        function XR(o, u) {
          return o === u || Od(o, u, Wd(u));
        }
        function ZR(o, u, c) {
          return (c = typeof c == "function" ? c : n), Od(o, u, Wd(u), c);
        }
        function JR(o) {
          return H0(o) && o != +o;
        }
        function eP(o) {
          if (FI(o)) throw new Ce(l);
          return Dy(o);
        }
        function tP(o) {
          return o === null;
        }
        function nP(o) {
          return o == null;
        }
        function H0(o) {
          return typeof o == "number" || (xt(o) && on(o) == qn);
        }
        function Su(o) {
          if (!xt(o) || on(o) != ut) return !1;
          var u = Gs(o);
          if (u === null) return !0;
          var c = Ge.call(u, "constructor") && u.constructor;
          return typeof c == "function" && c instanceof c && js.call(c) == Zb;
        }
        var tp = ny ? In(ny) : tI;
        function rP(o) {
          return B0(o) && o >= -U && o <= U;
        }
        var j0 = ry ? In(ry) : nI;
        function Sa(o) {
          return typeof o == "string" || (!ke(o) && xt(o) && on(o) == vr);
        }
        function Rn(o) {
          return typeof o == "symbol" || (xt(o) && on(o) == qr);
        }
        var al = iy ? In(iy) : rI;
        function iP(o) {
          return o === n;
        }
        function oP(o) {
          return xt(o) && Kt(o) == Pr;
        }
        function lP(o) {
          return xt(o) && on(o) == Kn;
        }
        var uP = fa(Td),
          sP = fa(function (o, u) {
            return o <= u;
          });
        function W0(o) {
          if (!o) return [];
          if (gn(o)) return Sa(o) ? xr(o) : hn(o);
          if (su && o[su]) return Bb(o[su]());
          var u = Kt(o),
            c = u == yt ? md : u == Vt ? Bs : cl;
          return c(o);
        }
        function ni(o) {
          if (!o) return o === 0 ? o : 0;
          if (((o = rr(o)), o === ue || o === -ue)) {
            var u = o < 0 ? -1 : 1;
            return u * J;
          }
          return o === o ? o : 0;
        }
        function Ie(o) {
          var u = ni(o),
            c = u % 1;
          return u === u ? (c ? u - c : u) : 0;
        }
        function V0(o) {
          return o ? mo(Ie(o), 0, b) : 0;
        }
        function rr(o) {
          if (typeof o == "number") return o;
          if (Rn(o)) return ee;
          if (pt(o)) {
            var u = typeof o.valueOf == "function" ? o.valueOf() : o;
            o = pt(u) ? u + "" : u;
          }
          if (typeof o != "string") return o === 0 ? o : +o;
          o = cy(o);
          var c = j_.test(o);
          return c || V_.test(o)
            ? Cb(o.slice(2), c ? 2 : 8)
            : H_.test(o)
            ? ee
            : +o;
        }
        function q0(o) {
          return Lr(o, mn(o));
        }
        function aP(o) {
          return o ? mo(Ie(o), -U, U) : o === 0 ? o : 0;
        }
        function Ve(o) {
          return o == null ? "" : Tn(o);
        }
        var cP = ll(function (o, u) {
            if (xu(u) || gn(u)) {
              Lr(u, Dt(u), o);
              return;
            }
            for (var c in u) Ge.call(u, c) && pu(o, c, u[c]);
          }),
          G0 = ll(function (o, u) {
            Lr(u, mn(u), o);
          }),
          Ea = ll(function (o, u, c, p) {
            Lr(u, mn(u), o, p);
          }),
          fP = ll(function (o, u, c, p) {
            Lr(u, Dt(u), o, p);
          }),
          dP = Jr(Ed);
        function pP(o, u) {
          var c = ol(o);
          return u == null ? c : _y(c, u);
        }
        var hP = De(function (o, u) {
            o = Ze(o);
            var c = -1,
              p = u.length,
              x = p > 2 ? u[2] : n;
            for (x && ln(u[0], u[1], x) && (p = 1); ++c < p; )
              for (var k = u[c], I = mn(k), L = -1, N = I.length; ++L < N; ) {
                var Q = I[L],
                  Y = o[Q];
                (Y === n || (Sr(Y, nl[Q]) && !Ge.call(o, Q))) && (o[Q] = k[Q]);
              }
            return o;
          }),
          gP = De(function (o) {
            return o.push(n, c0), On(K0, n, o);
          });
        function mP(o, u) {
          return ly(o, pe(u, 3), Dr);
        }
        function vP(o, u) {
          return ly(o, pe(u, 3), kd);
        }
        function yP(o, u) {
          return o == null ? o : Cd(o, pe(u, 3), mn);
        }
        function xP(o, u) {
          return o == null ? o : Ry(o, pe(u, 3), mn);
        }
        function wP(o, u) {
          return o && Dr(o, pe(u, 3));
        }
        function SP(o, u) {
          return o && kd(o, pe(u, 3));
        }
        function EP(o) {
          return o == null ? [] : ra(o, Dt(o));
        }
        function CP(o) {
          return o == null ? [] : ra(o, mn(o));
        }
        function np(o, u, c) {
          var p = o == null ? n : vo(o, u);
          return p === n ? c : p;
        }
        function kP(o, u) {
          return o != null && p0(o, u, GO);
        }
        function rp(o, u) {
          return o != null && p0(o, u, KO);
        }
        var _P = o0(function (o, u, c) {
            u != null && typeof u.toString != "function" && (u = Ws.call(u)),
              (o[u] = c);
          }, op(vn)),
          bP = o0(function (o, u, c) {
            u != null && typeof u.toString != "function" && (u = Ws.call(u)),
              Ge.call(o, u) ? o[u].push(c) : (o[u] = [c]);
          }, pe),
          OP = De(gu);
        function Dt(o) {
          return gn(o) ? Cy(o) : Id(o);
        }
        function mn(o) {
          return gn(o) ? Cy(o, !0) : iI(o);
        }
        function IP(o, u) {
          var c = {};
          return (
            (u = pe(u, 3)),
            Dr(o, function (p, x, k) {
              Xr(c, u(p, x, k), p);
            }),
            c
          );
        }
        function TP(o, u) {
          var c = {};
          return (
            (u = pe(u, 3)),
            Dr(o, function (p, x, k) {
              Xr(c, x, u(p, x, k));
            }),
            c
          );
        }
        var RP = ll(function (o, u, c) {
            ia(o, u, c);
          }),
          K0 = ll(function (o, u, c, p) {
            ia(o, u, c, p);
          }),
          PP = Jr(function (o, u) {
            var c = {};
            if (o == null) return c;
            var p = !1;
            (u = st(u, function (k) {
              return (k = Oi(k, o)), p || (p = k.length > 1), k;
            })),
              Lr(o, Hd(o), c),
              p && (c = er(c, g | y | m, _I));
            for (var x = u.length; x--; ) Ld(c, u[x]);
            return c;
          });
        function AP(o, u) {
          return Q0(o, xa(pe(u)));
        }
        var DP = Jr(function (o, u) {
          return o == null ? {} : lI(o, u);
        });
        function Q0(o, u) {
          if (o == null) return {};
          var c = st(Hd(o), function (p) {
            return [p];
          });
          return (
            (u = pe(u)),
            By(o, c, function (p, x) {
              return u(p, x[0]);
            })
          );
        }
        function LP(o, u, c) {
          u = Oi(u, o);
          var p = -1,
            x = u.length;
          for (x || ((x = 1), (o = n)); ++p < x; ) {
            var k = o == null ? n : o[Mr(u[p])];
            k === n && ((p = x), (k = c)), (o = ti(k) ? k.call(o) : k);
          }
          return o;
        }
        function MP(o, u, c) {
          return o == null ? o : vu(o, u, c);
        }
        function NP(o, u, c, p) {
          return (
            (p = typeof p == "function" ? p : n), o == null ? o : vu(o, u, c, p)
          );
        }
        var Y0 = s0(Dt),
          X0 = s0(mn);
        function FP(o, u, c) {
          var p = ke(o),
            x = p || Ti(o) || al(o);
          if (((u = pe(u, 4)), c == null)) {
            var k = o && o.constructor;
            x
              ? (c = p ? new k() : [])
              : pt(o)
              ? (c = ti(k) ? ol(Gs(o)) : {})
              : (c = {});
          }
          return (
            (x ? Xn : Dr)(o, function (I, L, N) {
              return u(c, I, L, N);
            }),
            c
          );
        }
        function zP(o, u) {
          return o == null ? !0 : Ld(o, u);
        }
        function $P(o, u, c) {
          return o == null ? o : Vy(o, u, Fd(c));
        }
        function BP(o, u, c, p) {
          return (
            (p = typeof p == "function" ? p : n),
            o == null ? o : Vy(o, u, Fd(c), p)
          );
        }
        function cl(o) {
          return o == null ? [] : gd(o, Dt(o));
        }
        function UP(o) {
          return o == null ? [] : gd(o, mn(o));
        }
        function HP(o, u, c) {
          return (
            c === n && ((c = u), (u = n)),
            c !== n && ((c = rr(c)), (c = c === c ? c : 0)),
            u !== n && ((u = rr(u)), (u = u === u ? u : 0)),
            mo(rr(o), u, c)
          );
        }
        function jP(o, u, c) {
          return (
            (u = ni(u)),
            c === n ? ((c = u), (u = 0)) : (c = ni(c)),
            (o = rr(o)),
            QO(o, u, c)
          );
        }
        function WP(o, u, c) {
          if (
            (c && typeof c != "boolean" && ln(o, u, c) && (u = c = n),
            c === n &&
              (typeof u == "boolean"
                ? ((c = u), (u = n))
                : typeof o == "boolean" && ((c = o), (o = n))),
            o === n && u === n
              ? ((o = 0), (u = 1))
              : ((o = ni(o)), u === n ? ((u = o), (o = 0)) : (u = ni(u))),
            o > u)
          ) {
            var p = o;
            (o = u), (u = p);
          }
          if (c || o % 1 || u % 1) {
            var x = Sy();
            return Gt(o + x * (u - o + Eb("1e-" + ((x + "").length - 1))), u);
          }
          return Pd(o, u);
        }
        var VP = ul(function (o, u, c) {
          return (u = u.toLowerCase()), o + (c ? Z0(u) : u);
        });
        function Z0(o) {
          return ip(Ve(o).toLowerCase());
        }
        function J0(o) {
          return (o = Ve(o)), o && o.replace(G_, Mb).replace(db, "");
        }
        function qP(o, u, c) {
          (o = Ve(o)), (u = Tn(u));
          var p = o.length;
          c = c === n ? p : mo(Ie(c), 0, p);
          var x = c;
          return (c -= u.length), c >= 0 && o.slice(c, x) == u;
        }
        function GP(o) {
          return (o = Ve(o)), o && O_.test(o) ? o.replace(Rv, Nb) : o;
        }
        function KP(o) {
          return (o = Ve(o)), o && D_.test(o) ? o.replace(Jf, "\\$&") : o;
        }
        var QP = ul(function (o, u, c) {
            return o + (c ? "-" : "") + u.toLowerCase();
          }),
          YP = ul(function (o, u, c) {
            return o + (c ? " " : "") + u.toLowerCase();
          }),
          XP = n0("toLowerCase");
        function ZP(o, u, c) {
          (o = Ve(o)), (u = Ie(u));
          var p = u ? el(o) : 0;
          if (!u || p >= u) return o;
          var x = (u - p) / 2;
          return ca(Xs(x), c) + o + ca(Ys(x), c);
        }
        function JP(o, u, c) {
          (o = Ve(o)), (u = Ie(u));
          var p = u ? el(o) : 0;
          return u && p < u ? o + ca(u - p, c) : o;
        }
        function e2(o, u, c) {
          (o = Ve(o)), (u = Ie(u));
          var p = u ? el(o) : 0;
          return u && p < u ? ca(u - p, c) + o : o;
        }
        function t2(o, u, c) {
          return (
            c || u == null ? (u = 0) : u && (u = +u),
            sO(Ve(o).replace(ed, ""), u || 0)
          );
        }
        function n2(o, u, c) {
          return (
            (c ? ln(o, u, c) : u === n) ? (u = 1) : (u = Ie(u)), Ad(Ve(o), u)
          );
        }
        function r2() {
          var o = arguments,
            u = Ve(o[0]);
          return o.length < 3 ? u : u.replace(o[1], o[2]);
        }
        var i2 = ul(function (o, u, c) {
          return o + (c ? "_" : "") + u.toLowerCase();
        });
        function o2(o, u, c) {
          return (
            c && typeof c != "number" && ln(o, u, c) && (u = c = n),
            (c = c === n ? b : c >>> 0),
            c
              ? ((o = Ve(o)),
                o &&
                (typeof u == "string" || (u != null && !tp(u))) &&
                ((u = Tn(u)), !u && Jo(o))
                  ? Ii(xr(o), 0, c)
                  : o.split(u, c))
              : []
          );
        }
        var l2 = ul(function (o, u, c) {
          return o + (c ? " " : "") + ip(u);
        });
        function u2(o, u, c) {
          return (
            (o = Ve(o)),
            (c = c == null ? 0 : mo(Ie(c), 0, o.length)),
            (u = Tn(u)),
            o.slice(c, c + u.length) == u
          );
        }
        function s2(o, u, c) {
          var p = C.templateSettings;
          c && ln(o, u, c) && (u = n), (o = Ve(o)), (u = Ea({}, u, p, a0));
          var x = Ea({}, u.imports, p.imports, a0),
            k = Dt(x),
            I = gd(x, k),
            L,
            N,
            Q = 0,
            Y = u.interpolate || Ms,
            Z = "__p += '",
            le = vd(
              (u.escape || Ms).source +
                "|" +
                Y.source +
                "|" +
                (Y === Pv ? U_ : Ms).source +
                "|" +
                (u.evaluate || Ms).source +
                "|$",
              "g"
            ),
            ce =
              "//# sourceURL=" +
              (Ge.call(u, "sourceURL")
                ? (u.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++vb + "]") +
              `
`;
          o.replace(le, function (me, Le, ze, Pn, un, An) {
            return (
              ze || (ze = Pn),
              (Z += o.slice(Q, An).replace(K_, Fb)),
              Le &&
                ((L = !0),
                (Z +=
                  `' +
__e(` +
                  Le +
                  `) +
'`)),
              un &&
                ((N = !0),
                (Z +=
                  `';
` +
                  un +
                  `;
__p += '`)),
              ze &&
                (Z +=
                  `' +
((__t = (` +
                  ze +
                  `)) == null ? '' : __t) +
'`),
              (Q = An + me.length),
              me
            );
          }),
            (Z += `';
`);
          var ge = Ge.call(u, "variable") && u.variable;
          if (!ge)
            Z =
              `with (obj) {
` +
              Z +
              `
}
`;
          else if ($_.test(ge)) throw new Ce(a);
          (Z = (N ? Z.replace(dt, "") : Z)
            .replace(lu, "$1")
            .replace(yr, "$1;")),
            (Z =
              "function(" +
              (ge || "obj") +
              `) {
` +
              (ge
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (L ? ", __e = _.escape" : "") +
              (N
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              Z +
              `return __p
}`);
          var Re = t1(function () {
            return je(k, ce + "return " + Z).apply(n, I);
          });
          if (((Re.source = Z), ep(Re))) throw Re;
          return Re;
        }
        function a2(o) {
          return Ve(o).toLowerCase();
        }
        function c2(o) {
          return Ve(o).toUpperCase();
        }
        function f2(o, u, c) {
          if (((o = Ve(o)), o && (c || u === n))) return cy(o);
          if (!o || !(u = Tn(u))) return o;
          var p = xr(o),
            x = xr(u),
            k = fy(p, x),
            I = dy(p, x) + 1;
          return Ii(p, k, I).join("");
        }
        function d2(o, u, c) {
          if (((o = Ve(o)), o && (c || u === n))) return o.slice(0, hy(o) + 1);
          if (!o || !(u = Tn(u))) return o;
          var p = xr(o),
            x = dy(p, xr(u)) + 1;
          return Ii(p, 0, x).join("");
        }
        function p2(o, u, c) {
          if (((o = Ve(o)), o && (c || u === n))) return o.replace(ed, "");
          if (!o || !(u = Tn(u))) return o;
          var p = xr(o),
            x = fy(p, xr(u));
          return Ii(p, x).join("");
        }
        function h2(o, u) {
          var c = K,
            p = B;
          if (pt(u)) {
            var x = "separator" in u ? u.separator : x;
            (c = "length" in u ? Ie(u.length) : c),
              (p = "omission" in u ? Tn(u.omission) : p);
          }
          o = Ve(o);
          var k = o.length;
          if (Jo(o)) {
            var I = xr(o);
            k = I.length;
          }
          if (c >= k) return o;
          var L = c - el(p);
          if (L < 1) return p;
          var N = I ? Ii(I, 0, L).join("") : o.slice(0, L);
          if (x === n) return N + p;
          if ((I && (L += N.length - L), tp(x))) {
            if (o.slice(L).search(x)) {
              var Q,
                Y = N;
              for (
                x.global || (x = vd(x.source, Ve(Av.exec(x)) + "g")),
                  x.lastIndex = 0;
                (Q = x.exec(Y));

              )
                var Z = Q.index;
              N = N.slice(0, Z === n ? L : Z);
            }
          } else if (o.indexOf(Tn(x), L) != L) {
            var le = N.lastIndexOf(x);
            le > -1 && (N = N.slice(0, le));
          }
          return N + p;
        }
        function g2(o) {
          return (o = Ve(o)), o && b_.test(o) ? o.replace(Tv, Wb) : o;
        }
        var m2 = ul(function (o, u, c) {
            return o + (c ? " " : "") + u.toUpperCase();
          }),
          ip = n0("toUpperCase");
        function e1(o, u, c) {
          return (
            (o = Ve(o)),
            (u = c ? n : u),
            u === n ? ($b(o) ? Gb(o) : Rb(o)) : o.match(u) || []
          );
        }
        var t1 = De(function (o, u) {
            try {
              return On(o, n, u);
            } catch (c) {
              return ep(c) ? c : new Ce(c);
            }
          }),
          v2 = Jr(function (o, u) {
            return (
              Xn(u, function (c) {
                (c = Mr(c)), Xr(o, c, Zd(o[c], o));
              }),
              o
            );
          });
        function y2(o) {
          var u = o == null ? 0 : o.length,
            c = pe();
          return (
            (o = u
              ? st(o, function (p) {
                  if (typeof p[1] != "function") throw new Zn(s);
                  return [c(p[0]), p[1]];
                })
              : []),
            De(function (p) {
              for (var x = -1; ++x < u; ) {
                var k = o[x];
                if (On(k[0], this, p)) return On(k[1], this, p);
              }
            })
          );
        }
        function x2(o) {
          return WO(er(o, g));
        }
        function op(o) {
          return function () {
            return o;
          };
        }
        function w2(o, u) {
          return o == null || o !== o ? u : o;
        }
        var S2 = i0(),
          E2 = i0(!0);
        function vn(o) {
          return o;
        }
        function lp(o) {
          return Ly(typeof o == "function" ? o : er(o, g));
        }
        function C2(o) {
          return Ny(er(o, g));
        }
        function k2(o, u) {
          return Fy(o, er(u, g));
        }
        var _2 = De(function (o, u) {
            return function (c) {
              return gu(c, o, u);
            };
          }),
          b2 = De(function (o, u) {
            return function (c) {
              return gu(o, c, u);
            };
          });
        function up(o, u, c) {
          var p = Dt(u),
            x = ra(u, p);
          c == null &&
            !(pt(u) && (x.length || !p.length)) &&
            ((c = u), (u = o), (o = this), (x = ra(u, Dt(u))));
          var k = !(pt(c) && "chain" in c) || !!c.chain,
            I = ti(o);
          return (
            Xn(x, function (L) {
              var N = u[L];
              (o[L] = N),
                I &&
                  (o.prototype[L] = function () {
                    var Q = this.__chain__;
                    if (k || Q) {
                      var Y = o(this.__wrapped__),
                        Z = (Y.__actions__ = hn(this.__actions__));
                      return (
                        Z.push({ func: N, args: arguments, thisArg: o }),
                        (Y.__chain__ = Q),
                        Y
                      );
                    }
                    return N.apply(o, Ei([this.value()], arguments));
                  });
            }),
            o
          );
        }
        function O2() {
          return $t._ === this && ($t._ = Jb), this;
        }
        function sp() {}
        function I2(o) {
          return (
            (o = Ie(o)),
            De(function (u) {
              return zy(u, o);
            })
          );
        }
        var T2 = $d(st),
          R2 = $d(oy),
          P2 = $d(cd);
        function n1(o) {
          return qd(o) ? fd(Mr(o)) : uI(o);
        }
        function A2(o) {
          return function (u) {
            return o == null ? n : vo(o, u);
          };
        }
        var D2 = l0(),
          L2 = l0(!0);
        function ap() {
          return [];
        }
        function cp() {
          return !1;
        }
        function M2() {
          return {};
        }
        function N2() {
          return "";
        }
        function F2() {
          return !0;
        }
        function z2(o, u) {
          if (((o = Ie(o)), o < 1 || o > U)) return [];
          var c = b,
            p = Gt(o, b);
          (u = pe(u)), (o -= b);
          for (var x = hd(p, u); ++c < o; ) u(c);
          return x;
        }
        function $2(o) {
          return ke(o) ? st(o, Mr) : Rn(o) ? [o] : hn(E0(Ve(o)));
        }
        function B2(o) {
          var u = ++Xb;
          return Ve(o) + u;
        }
        var U2 = aa(function (o, u) {
            return o + u;
          }, 0),
          H2 = Bd("ceil"),
          j2 = aa(function (o, u) {
            return o / u;
          }, 1),
          W2 = Bd("floor");
        function V2(o) {
          return o && o.length ? na(o, vn, _d) : n;
        }
        function q2(o, u) {
          return o && o.length ? na(o, pe(u, 2), _d) : n;
        }
        function G2(o) {
          return sy(o, vn);
        }
        function K2(o, u) {
          return sy(o, pe(u, 2));
        }
        function Q2(o) {
          return o && o.length ? na(o, vn, Td) : n;
        }
        function Y2(o, u) {
          return o && o.length ? na(o, pe(u, 2), Td) : n;
        }
        var X2 = aa(function (o, u) {
            return o * u;
          }, 1),
          Z2 = Bd("round"),
          J2 = aa(function (o, u) {
            return o - u;
          }, 0);
        function eA(o) {
          return o && o.length ? pd(o, vn) : 0;
        }
        function tA(o, u) {
          return o && o.length ? pd(o, pe(u, 2)) : 0;
        }
        return (
          (C.after = CR),
          (C.ary = D0),
          (C.assign = cP),
          (C.assignIn = G0),
          (C.assignInWith = Ea),
          (C.assignWith = fP),
          (C.at = dP),
          (C.before = L0),
          (C.bind = Zd),
          (C.bindAll = v2),
          (C.bindKey = M0),
          (C.castArray = MR),
          (C.chain = R0),
          (C.chunk = WI),
          (C.compact = VI),
          (C.concat = qI),
          (C.cond = y2),
          (C.conforms = x2),
          (C.constant = op),
          (C.countBy = eR),
          (C.create = pP),
          (C.curry = N0),
          (C.curryRight = F0),
          (C.debounce = z0),
          (C.defaults = hP),
          (C.defaultsDeep = gP),
          (C.defer = kR),
          (C.delay = _R),
          (C.difference = GI),
          (C.differenceBy = KI),
          (C.differenceWith = QI),
          (C.drop = YI),
          (C.dropRight = XI),
          (C.dropRightWhile = ZI),
          (C.dropWhile = JI),
          (C.fill = eT),
          (C.filter = nR),
          (C.flatMap = oR),
          (C.flatMapDeep = lR),
          (C.flatMapDepth = uR),
          (C.flatten = b0),
          (C.flattenDeep = tT),
          (C.flattenDepth = nT),
          (C.flip = bR),
          (C.flow = S2),
          (C.flowRight = E2),
          (C.fromPairs = rT),
          (C.functions = EP),
          (C.functionsIn = CP),
          (C.groupBy = sR),
          (C.initial = oT),
          (C.intersection = lT),
          (C.intersectionBy = uT),
          (C.intersectionWith = sT),
          (C.invert = _P),
          (C.invertBy = bP),
          (C.invokeMap = cR),
          (C.iteratee = lp),
          (C.keyBy = fR),
          (C.keys = Dt),
          (C.keysIn = mn),
          (C.map = ma),
          (C.mapKeys = IP),
          (C.mapValues = TP),
          (C.matches = C2),
          (C.matchesProperty = k2),
          (C.memoize = ya),
          (C.merge = RP),
          (C.mergeWith = K0),
          (C.method = _2),
          (C.methodOf = b2),
          (C.mixin = up),
          (C.negate = xa),
          (C.nthArg = I2),
          (C.omit = PP),
          (C.omitBy = AP),
          (C.once = OR),
          (C.orderBy = dR),
          (C.over = T2),
          (C.overArgs = IR),
          (C.overEvery = R2),
          (C.overSome = P2),
          (C.partial = Jd),
          (C.partialRight = $0),
          (C.partition = pR),
          (C.pick = DP),
          (C.pickBy = Q0),
          (C.property = n1),
          (C.propertyOf = A2),
          (C.pull = dT),
          (C.pullAll = I0),
          (C.pullAllBy = pT),
          (C.pullAllWith = hT),
          (C.pullAt = gT),
          (C.range = D2),
          (C.rangeRight = L2),
          (C.rearg = TR),
          (C.reject = mR),
          (C.remove = mT),
          (C.rest = RR),
          (C.reverse = Yd),
          (C.sampleSize = yR),
          (C.set = MP),
          (C.setWith = NP),
          (C.shuffle = xR),
          (C.slice = vT),
          (C.sortBy = ER),
          (C.sortedUniq = kT),
          (C.sortedUniqBy = _T),
          (C.split = o2),
          (C.spread = PR),
          (C.tail = bT),
          (C.take = OT),
          (C.takeRight = IT),
          (C.takeRightWhile = TT),
          (C.takeWhile = RT),
          (C.tap = VT),
          (C.throttle = AR),
          (C.thru = ga),
          (C.toArray = W0),
          (C.toPairs = Y0),
          (C.toPairsIn = X0),
          (C.toPath = $2),
          (C.toPlainObject = q0),
          (C.transform = FP),
          (C.unary = DR),
          (C.union = PT),
          (C.unionBy = AT),
          (C.unionWith = DT),
          (C.uniq = LT),
          (C.uniqBy = MT),
          (C.uniqWith = NT),
          (C.unset = zP),
          (C.unzip = Xd),
          (C.unzipWith = T0),
          (C.update = $P),
          (C.updateWith = BP),
          (C.values = cl),
          (C.valuesIn = UP),
          (C.without = FT),
          (C.words = e1),
          (C.wrap = LR),
          (C.xor = zT),
          (C.xorBy = $T),
          (C.xorWith = BT),
          (C.zip = UT),
          (C.zipObject = HT),
          (C.zipObjectDeep = jT),
          (C.zipWith = WT),
          (C.entries = Y0),
          (C.entriesIn = X0),
          (C.extend = G0),
          (C.extendWith = Ea),
          up(C, C),
          (C.add = U2),
          (C.attempt = t1),
          (C.camelCase = VP),
          (C.capitalize = Z0),
          (C.ceil = H2),
          (C.clamp = HP),
          (C.clone = NR),
          (C.cloneDeep = zR),
          (C.cloneDeepWith = $R),
          (C.cloneWith = FR),
          (C.conformsTo = BR),
          (C.deburr = J0),
          (C.defaultTo = w2),
          (C.divide = j2),
          (C.endsWith = qP),
          (C.eq = Sr),
          (C.escape = GP),
          (C.escapeRegExp = KP),
          (C.every = tR),
          (C.find = rR),
          (C.findIndex = k0),
          (C.findKey = mP),
          (C.findLast = iR),
          (C.findLastIndex = _0),
          (C.findLastKey = vP),
          (C.floor = W2),
          (C.forEach = P0),
          (C.forEachRight = A0),
          (C.forIn = yP),
          (C.forInRight = xP),
          (C.forOwn = wP),
          (C.forOwnRight = SP),
          (C.get = np),
          (C.gt = UR),
          (C.gte = HR),
          (C.has = kP),
          (C.hasIn = rp),
          (C.head = O0),
          (C.identity = vn),
          (C.includes = aR),
          (C.indexOf = iT),
          (C.inRange = jP),
          (C.invoke = OP),
          (C.isArguments = wo),
          (C.isArray = ke),
          (C.isArrayBuffer = jR),
          (C.isArrayLike = gn),
          (C.isArrayLikeObject = Et),
          (C.isBoolean = WR),
          (C.isBuffer = Ti),
          (C.isDate = VR),
          (C.isElement = qR),
          (C.isEmpty = GR),
          (C.isEqual = KR),
          (C.isEqualWith = QR),
          (C.isError = ep),
          (C.isFinite = YR),
          (C.isFunction = ti),
          (C.isInteger = B0),
          (C.isLength = wa),
          (C.isMap = U0),
          (C.isMatch = XR),
          (C.isMatchWith = ZR),
          (C.isNaN = JR),
          (C.isNative = eP),
          (C.isNil = nP),
          (C.isNull = tP),
          (C.isNumber = H0),
          (C.isObject = pt),
          (C.isObjectLike = xt),
          (C.isPlainObject = Su),
          (C.isRegExp = tp),
          (C.isSafeInteger = rP),
          (C.isSet = j0),
          (C.isString = Sa),
          (C.isSymbol = Rn),
          (C.isTypedArray = al),
          (C.isUndefined = iP),
          (C.isWeakMap = oP),
          (C.isWeakSet = lP),
          (C.join = aT),
          (C.kebabCase = QP),
          (C.last = nr),
          (C.lastIndexOf = cT),
          (C.lowerCase = YP),
          (C.lowerFirst = XP),
          (C.lt = uP),
          (C.lte = sP),
          (C.max = V2),
          (C.maxBy = q2),
          (C.mean = G2),
          (C.meanBy = K2),
          (C.min = Q2),
          (C.minBy = Y2),
          (C.stubArray = ap),
          (C.stubFalse = cp),
          (C.stubObject = M2),
          (C.stubString = N2),
          (C.stubTrue = F2),
          (C.multiply = X2),
          (C.nth = fT),
          (C.noConflict = O2),
          (C.noop = sp),
          (C.now = va),
          (C.pad = ZP),
          (C.padEnd = JP),
          (C.padStart = e2),
          (C.parseInt = t2),
          (C.random = WP),
          (C.reduce = hR),
          (C.reduceRight = gR),
          (C.repeat = n2),
          (C.replace = r2),
          (C.result = LP),
          (C.round = Z2),
          (C.runInContext = M),
          (C.sample = vR),
          (C.size = wR),
          (C.snakeCase = i2),
          (C.some = SR),
          (C.sortedIndex = yT),
          (C.sortedIndexBy = xT),
          (C.sortedIndexOf = wT),
          (C.sortedLastIndex = ST),
          (C.sortedLastIndexBy = ET),
          (C.sortedLastIndexOf = CT),
          (C.startCase = l2),
          (C.startsWith = u2),
          (C.subtract = J2),
          (C.sum = eA),
          (C.sumBy = tA),
          (C.template = s2),
          (C.times = z2),
          (C.toFinite = ni),
          (C.toInteger = Ie),
          (C.toLength = V0),
          (C.toLower = a2),
          (C.toNumber = rr),
          (C.toSafeInteger = aP),
          (C.toString = Ve),
          (C.toUpper = c2),
          (C.trim = f2),
          (C.trimEnd = d2),
          (C.trimStart = p2),
          (C.truncate = h2),
          (C.unescape = g2),
          (C.uniqueId = B2),
          (C.upperCase = m2),
          (C.upperFirst = ip),
          (C.each = P0),
          (C.eachRight = A0),
          (C.first = O0),
          up(
            C,
            (function () {
              var o = {};
              return (
                Dr(C, function (u, c) {
                  Ge.call(C.prototype, c) || (o[c] = u);
                }),
                o
              );
            })(),
            { chain: !1 }
          ),
          (C.VERSION = r),
          Xn(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (o) {
              C[o].placeholder = C;
            }
          ),
          Xn(["drop", "take"], function (o, u) {
            (Me.prototype[o] = function (c) {
              c = c === n ? 1 : Tt(Ie(c), 0);
              var p = this.__filtered__ && !u ? new Me(this) : this.clone();
              return (
                p.__filtered__
                  ? (p.__takeCount__ = Gt(c, p.__takeCount__))
                  : p.__views__.push({
                      size: Gt(c, b),
                      type: o + (p.__dir__ < 0 ? "Right" : ""),
                    }),
                p
              );
            }),
              (Me.prototype[o + "Right"] = function (c) {
                return this.reverse()[o](c).reverse();
              });
          }),
          Xn(["filter", "map", "takeWhile"], function (o, u) {
            var c = u + 1,
              p = c == H || c == oe;
            Me.prototype[o] = function (x) {
              var k = this.clone();
              return (
                k.__iteratees__.push({ iteratee: pe(x, 3), type: c }),
                (k.__filtered__ = k.__filtered__ || p),
                k
              );
            };
          }),
          Xn(["head", "last"], function (o, u) {
            var c = "take" + (u ? "Right" : "");
            Me.prototype[o] = function () {
              return this[c](1).value()[0];
            };
          }),
          Xn(["initial", "tail"], function (o, u) {
            var c = "drop" + (u ? "" : "Right");
            Me.prototype[o] = function () {
              return this.__filtered__ ? new Me(this) : this[c](1);
            };
          }),
          (Me.prototype.compact = function () {
            return this.filter(vn);
          }),
          (Me.prototype.find = function (o) {
            return this.filter(o).head();
          }),
          (Me.prototype.findLast = function (o) {
            return this.reverse().find(o);
          }),
          (Me.prototype.invokeMap = De(function (o, u) {
            return typeof o == "function"
              ? new Me(this)
              : this.map(function (c) {
                  return gu(c, o, u);
                });
          })),
          (Me.prototype.reject = function (o) {
            return this.filter(xa(pe(o)));
          }),
          (Me.prototype.slice = function (o, u) {
            o = Ie(o);
            var c = this;
            return c.__filtered__ && (o > 0 || u < 0)
              ? new Me(c)
              : (o < 0 ? (c = c.takeRight(-o)) : o && (c = c.drop(o)),
                u !== n &&
                  ((u = Ie(u)), (c = u < 0 ? c.dropRight(-u) : c.take(u - o))),
                c);
          }),
          (Me.prototype.takeRightWhile = function (o) {
            return this.reverse().takeWhile(o).reverse();
          }),
          (Me.prototype.toArray = function () {
            return this.take(b);
          }),
          Dr(Me.prototype, function (o, u) {
            var c = /^(?:filter|find|map|reject)|While$/.test(u),
              p = /^(?:head|last)$/.test(u),
              x = C[p ? "take" + (u == "last" ? "Right" : "") : u],
              k = p || /^find/.test(u);
            !x ||
              (C.prototype[u] = function () {
                var I = this.__wrapped__,
                  L = p ? [1] : arguments,
                  N = I instanceof Me,
                  Q = L[0],
                  Y = N || ke(I),
                  Z = function (Le) {
                    var ze = x.apply(C, Ei([Le], L));
                    return p && le ? ze[0] : ze;
                  };
                Y &&
                  c &&
                  typeof Q == "function" &&
                  Q.length != 1 &&
                  (N = Y = !1);
                var le = this.__chain__,
                  ce = !!this.__actions__.length,
                  ge = k && !le,
                  Re = N && !ce;
                if (!k && Y) {
                  I = Re ? I : new Me(this);
                  var me = o.apply(I, L);
                  return (
                    me.__actions__.push({ func: ga, args: [Z], thisArg: n }),
                    new Jn(me, le)
                  );
                }
                return ge && Re
                  ? o.apply(this, L)
                  : ((me = this.thru(Z)),
                    ge ? (p ? me.value()[0] : me.value()) : me);
              });
          }),
          Xn(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (o) {
              var u = Us[o],
                c = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru",
                p = /^(?:pop|shift)$/.test(o);
              C.prototype[o] = function () {
                var x = arguments;
                if (p && !this.__chain__) {
                  var k = this.value();
                  return u.apply(ke(k) ? k : [], x);
                }
                return this[c](function (I) {
                  return u.apply(ke(I) ? I : [], x);
                });
              };
            }
          ),
          Dr(Me.prototype, function (o, u) {
            var c = C[u];
            if (c) {
              var p = c.name + "";
              Ge.call(il, p) || (il[p] = []), il[p].push({ name: u, func: c });
            }
          }),
          (il[sa(n, v).name] = [{ name: "wrapper", func: n }]),
          (Me.prototype.clone = gO),
          (Me.prototype.reverse = mO),
          (Me.prototype.value = vO),
          (C.prototype.at = qT),
          (C.prototype.chain = GT),
          (C.prototype.commit = KT),
          (C.prototype.next = QT),
          (C.prototype.plant = XT),
          (C.prototype.reverse = ZT),
          (C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = JT),
          (C.prototype.first = C.prototype.head),
          su && (C.prototype[su] = YT),
          C
        );
      },
      tl = Kb();
    fo ? (((fo.exports = tl)._ = tl), (ld._ = tl)) : ($t._ = tl);
  }).call(Eu);
})(jc, jc.exports);
const ct = {
  water: {
    name: "water",
    close: !1,
    label: "VODA",
    stack: !0,
    usable: !0,
    count: 0,
  },
  burger: {
    name: "burger",
    close: !1,
    label: "BURGR",
    stack: !1,
    usable: !1,
    count: 0,
  },
};
let lc = "images";
function l3(e) {
  e && e !== "" && (lc = e);
}
const GC = () => !window.invokeNative,
  KC = () => {},
  u3 = window.GetParentResourceName
    ? window.GetParentResourceName()
    : "ox_inventory";
async function cr(e, t) {
  if (!GC())
    try {
      return await (
        await fetch(`https://${u3}/${e}`, {
          method: "post",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(t),
        })
      ).json();
    } catch (n) {
      throw Error(`Failed to fetch NUI callback ${e}! (${n})`);
    }
}
const Fx = (e, t) => {
    if (t.type !== "shop" || !wn(e)) return !0;
    if (e.count !== void 0 && e.count === 0) return !1;
    if (e.grade === void 0 || !t.groups) return !0;
    const n = Mn.getState().inventory.leftInventory;
    if (!n.groups) return !1;
    const r = Object.keys(t.groups);
    if (Array.isArray(e.grade)) {
      for (let i = 0; i < r.length; i++) {
        const l = r[i];
        if (n.groups[l] !== void 0) {
          const s = n.groups[l];
          for (let a = 0; a < e.grade.length; a++) {
            const f = e.grade[a];
            if (s === f) return !0;
          }
        }
      }
      return !1;
    } else {
      for (let i = 0; i < r.length; i++) {
        const l = r[i];
        if (n.groups[l] !== void 0 && n.groups[l] >= e.grade) return !0;
      }
      return !1;
    }
  },
  zx = (e, t) => {
    if (!wn(e) || t !== "crafting" || !e.ingredients) return !0;
    const n = Mn.getState().inventory.leftInventory;
    return (
      Object.entries(e.ingredients).filter((l) => {
        const [s, a] = [l[0], l[1]],
          f = ct[s];
        return a >= 1 && f && f.count >= a
          ? !1
          : !n.items.find((h) => {
              if (wn(h) && h.name === s && a < 1)
                return h.metadata?.durability >= a * 100;
            });
      }).length === 0
    );
  },
  wn = (e, t = !1) =>
    (e.name !== void 0 && e.weight !== void 0) ||
    (t && e.name !== void 0 && e.count !== void 0 && e.weight !== void 0),
  s3 = (e, t) =>
    e.name === t.name && jc.exports.isEqual(e.metadata, t.metadata),
  a3 = (e, t, n) =>
    t.stack
      ? n.find(
          (i) => i.name === e.name && jc.exports.isEqual(i.metadata, e.metadata)
        ) || n.find((i) => i.name === void 0)
      : n.find((i) => i.name === void 0),
  Wf = (e, t, n) => ({
    sourceInventory: t === en.PLAYER ? e.leftInventory : e.rightInventory,
    targetInventory: n
      ? n === en.PLAYER
        ? e.leftInventory
        : e.rightInventory
      : t === en.PLAYER
      ? e.rightInventory
      : e.leftInventory,
  }),
  Yl = (e, t) => {
    if (e?.durability === void 0) return;
    let n = e.durability;
    return (
      n > 100 &&
        e.degrade &&
        (n = ((e.durability - t) / (60 * e.degrade)) * 100),
      n < 0 && (n = 0),
      n
    );
  },
  c3 = (e) => e.reduce((t, n) => (wn(n) ? t + n.weight : t), 0),
  $x = async (e) => {
    const t = await cr("getItemData", e);
    if (t?.name) return (ct[e] = t), t;
  },
  zl = (e) => {
    const t = typeof e == "object";
    if (t) {
      if (!e.name) return;
      const i = e.metadata;
      if (i?.imageurl) return `${i.imageurl}`;
      if (i?.image) return `${lc}/${i.image}.png`;
    }
    const n = t ? e.name : e,
      r = ct[n];
    return r
      ? (r.image || (r.image = `${lc}/${n}.png`), r.image)
      : `${lc}/${n}.png`;
  },
  f3 = (e, t) => {
    const { leftInventory: n, rightInventory: r } = t.payload,
      i = Math.floor(Date.now() / 1e3);
    n &&
      (e.leftInventory = {
        ...n,
        items: Array.from(Array(n.slots), (l, s) => {
          const a = Object.values(n.items).find((f) => f?.slot === s + 1) || {
            slot: s + 1,
          };
          return (
            a.name &&
              (typeof ct[a.name] > "u" && $x(a.name),
              (a.durability = Yl(a.metadata, i))),
            a
          );
        }),
      }),
      r &&
        (e.rightInventory = {
          ...r,
          items: Array.from(Array(r.slots), (l, s) => {
            const a = Object.values(r.items).find((f) => f?.slot === s + 1) || {
              slot: s + 1,
            };
            return (
              a.name &&
                (typeof ct[a.name] > "u" && $x(a.name),
                (a.durability = Yl(a.metadata, i))),
              a
            );
          }),
        }),
      (e.isBusy = !1);
  },
  d3 = (e, t) => {
    if (t.payload.items) {
      Array.isArray(t.payload.items) || (t.payload.items = [t.payload.items]);
      const n = Math.floor(Date.now() / 1e3);
      Object.values(t.payload.items)
        .filter((r) => !!r)
        .forEach((r) => {
          const i =
            r.inventory && r.inventory !== en.PLAYER
              ? e.rightInventory
              : e.leftInventory;
          (r.item.durability = Yl(r.item.metadata, n)),
            (i.items[r.item.slot - 1] = r.item);
        }),
        e.rightInventory.type === en.CRAFTING &&
          (e.rightInventory = { ...e.rightInventory });
    }
    if (t.payload.itemCount) {
      const n = Object.entries(t.payload.itemCount);
      for (let r = 0; r < n.length; r++) {
        const i = n[r][0],
          l = n[r][1];
        ct[i]
          ? (ct[i].count += l)
          : console.log(`Item data for ${i} is undefined`);
      }
    }
    if (t.payload.weightData) {
      const n = t.payload.weightData.inventoryId,
        r = t.payload.weightData.maxWeight,
        i =
          n === e.leftInventory.id
            ? "leftInventory"
            : n === e.rightInventory.id
            ? "rightInventory"
            : null;
      if (!i) return;
      e[i].maxWeight = r;
    }
    if (t.payload.slotsData) {
      const { inventoryId: n } = t.payload.slotsData,
        { slots: r } = t.payload.slotsData,
        i =
          n === e.leftInventory.id
            ? "leftInventory"
            : n === e.rightInventory.id
            ? "rightInventory"
            : null;
      if (!i) return;
      (e[i].slots = r),
        rv.caseReducers.setupInventory(e, {
          type: "setupInventory",
          payload: {
            leftInventory: i === "leftInventory" ? e[i] : void 0,
            rightInventory: i === "rightInventory" ? e[i] : void 0,
          },
        });
    }
  },
  p3 = (e, t) => {
    const { fromSlot: n, fromType: r, toSlot: i, toType: l } = t.payload,
      { sourceInventory: s, targetInventory: a } = Wf(e, r, l),
      f = Math.floor(Date.now() / 1e3);
    [s.items[n.slot - 1], a.items[i.slot - 1]] = [
      { ...a.items[i.slot - 1], slot: n.slot, durability: Yl(i.metadata, f) },
      { ...s.items[n.slot - 1], slot: i.slot, durability: Yl(n.metadata, f) },
    ];
  },
  h3 = (e, t) => {
    const {
        fromSlot: n,
        fromType: r,
        toSlot: i,
        toType: l,
        count: s,
      } = t.payload,
      { sourceInventory: a, targetInventory: f } = Wf(e, r, l),
      d = n.weight / n.count;
    (f.items[i.slot - 1] = {
      ...f.items[i.slot - 1],
      count: i.count + s,
      weight: d * (i.count + s),
    }),
      !(r === en.SHOP || r === en.CRAFTING) &&
        (a.items[n.slot - 1] =
          n.count - s > 0
            ? {
                ...a.items[n.slot - 1],
                count: n.count - s,
                weight: d * (n.count - s),
              }
            : { slot: n.slot });
  },
  g3 = (e, t) => {
    const {
        fromSlot: n,
        fromType: r,
        toSlot: i,
        toType: l,
        count: s,
      } = t.payload,
      { sourceInventory: a, targetInventory: f } = Wf(e, r, l),
      d = n.weight / n.count,
      h = Math.floor(Date.now() / 1e3),
      g = a.items[n.slot - 1];
    (f.items[i.slot - 1] = {
      ...g,
      count: s,
      weight: d * s,
      slot: i.slot,
      durability: Yl(g.metadata, h),
    }),
      !(r === en.SHOP || r === en.CRAFTING) &&
        (a.items[n.slot - 1] =
          n.count - s > 0
            ? {
                ...a.items[n.slot - 1],
                count: n.count - s,
                weight: d * (n.count - s),
              }
            : { slot: n.slot });
  },
  m3 = {
    leftInventory: { id: "", type: "", slots: 0, maxWeight: 0, items: [] },
    rightInventory: { id: "", type: "", slots: 0, maxWeight: 0, items: [] },
    additionalMetadata: new Array(),
    itemAmount: 0,
    shiftPressed: !1,
    isBusy: !1,
  },
  rv = Xm({
    name: "inventory",
    initialState: m3,
    reducers: {
      stackSlots: h3,
      swapSlots: p3,
      setupInventory: f3,
      moveSlots: g3,
      refreshSlots: d3,
      setAdditionalMetadata: (e, t) => {
        const n = [];
        for (let r = 0; r < t.payload.length; r++) {
          const i = t.payload[r];
          e.additionalMetadata.find((l) => l.value === i.value) || n.push(i);
        }
        e.additionalMetadata = [...e.additionalMetadata, ...n];
      },
      setItemAmount: (e, t) => {
        e.itemAmount = t.payload;
      },
      setShiftPressed: (e, t) => {
        e.shiftPressed = t.payload;
      },
      setContainerWeight: (e, t) => {
        const n = e.leftInventory.items.find(
          (r) => r.metadata?.container === e.rightInventory.id
        );
        !n || (n.weight = t.payload);
      },
    },
    extraReducers: (e) => {
      e.addMatcher(WC, (t) => {
        (t.isBusy = !0),
          (t.history = {
            leftInventory: mg(t.leftInventory),
            rightInventory: mg(t.rightInventory),
          });
      }),
        e.addMatcher(qC, (t) => {
          t.isBusy = !1;
        }),
        e.addMatcher(VC, (t) => {
          t.history &&
            t.history.leftInventory &&
            t.history.rightInventory &&
            ((t.leftInventory = t.history.leftInventory),
            (t.rightInventory = t.history.rightInventory)),
            (t.isBusy = !1);
        });
    },
  }),
  {
    setAdditionalMetadata: v3,
    setItemAmount: y3,
    setShiftPressed: x3,
    setupInventory: QC,
    swapSlots: w3,
    moveSlots: S3,
    stackSlots: E3,
    refreshSlots: C3,
    setContainerWeight: k3,
  } = rv.actions,
  YC = (e) => e.inventory.leftInventory,
  _3 = (e) => e.inventory.rightInventory,
  b3 = (e) => e.inventory.itemAmount,
  O3 = rv.reducer,
  I3 = { open: !1, item: null, inventoryType: null },
  XC = Xm({
    name: "tooltip",
    initialState: I3,
    reducers: {
      openTooltip(e, t) {
        (e.open = !0),
          (e.item = t.payload.item),
          (e.inventoryType = t.payload.inventoryType);
      },
      closeTooltip(e) {
        e.open = !1;
      },
    },
  }),
  { openTooltip: T3, closeTooltip: Xu } = XC.actions,
  R3 = XC.reducer,
  P3 = { coords: null, item: null },
  ZC = Xm({
    name: "contextMenu",
    initialState: P3,
    reducers: {
      openContextMenu(e, t) {
        (e.coords = t.payload.coords), (e.item = t.payload.item);
      },
      closeContextMenu(e) {
        e.coords = null;
      },
    },
  }),
  { openContextMenu: A3, closeContextMenu: JC } = ZC.actions,
  D3 = ZC.reducer,
  Mn = KF({ reducer: { inventory: O3, tooltip: R3, contextMenu: D3 } }),
  ru = () => hM(),
  yi = YL,
  Br = (e, t) => {
    const n = T.exports.useRef(KC);
    T.exports.useEffect(() => {
      n.current = t;
    }, [t]),
      T.exports.useEffect(() => {
        const r = (i) => {
          const { action: l, data: s } = i.data;
          n.current && l === e && n.current(s);
        };
        return (
          window.addEventListener("message", r),
          () => window.removeEventListener("message", r)
        );
      }, [e]);
  },
  iv = (e) => {
    cr("useItem", e.slot);
  },
  ek = (e) => {
    const {
      inventory: { itemAmount: t },
    } = Mn.getState();
    cr("giveItem", { slot: e.slot, count: t });
  },
  ot = {},
  Wc = Math.min,
  Do = Math.max,
  Vc = Math.round,
  Tl = Math.floor,
  io = (e) => ({ x: e, y: e }),
  L3 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  M3 = { start: "end", end: "start" };
function Bx(e, t, n) {
  return Do(e, Wc(t, n));
}
function Vf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ho(e) {
  return e.split("-")[0];
}
function qf(e) {
  return e.split("-")[1];
}
function tk(e) {
  return e === "x" ? "y" : "x";
}
function nk(e) {
  return e === "y" ? "height" : "width";
}
function Gf(e) {
  return ["top", "bottom"].includes(Ho(e)) ? "y" : "x";
}
function rk(e) {
  return tk(Gf(e));
}
function N3(e, t, n) {
  n === void 0 && (n = !1);
  const r = qf(e),
    i = rk(e),
    l = nk(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[l] > t.floating[l] && (s = qc(s)), [s, qc(s)];
}
function F3(e) {
  const t = qc(e);
  return [xg(e), t, xg(t)];
}
function xg(e) {
  return e.replace(/start|end/g, (t) => M3[t]);
}
function z3(e, t, n) {
  const r = ["left", "right"],
    i = ["right", "left"],
    l = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? i : r) : t ? r : i;
    case "left":
    case "right":
      return t ? l : s;
    default:
      return [];
  }
}
function $3(e, t, n, r) {
  const i = qf(e);
  let l = z3(Ho(e), n === "start", r);
  return (
    i && ((l = l.map((s) => s + "-" + i)), t && (l = l.concat(l.map(xg)))), l
  );
}
function qc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => L3[t]);
}
function B3(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function U3(e) {
  return typeof e != "number"
    ? B3(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Gc(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function oo(e) {
  return ik(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $n(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function xi(e) {
  var t;
  return (t = (ik(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function ik(e) {
  return e instanceof Node || e instanceof $n(e).Node;
}
function gt(e) {
  return e instanceof Element || e instanceof $n(e).Element;
}
function nn(e) {
  return e instanceof HTMLElement || e instanceof $n(e).HTMLElement;
}
function wg(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof $n(e).ShadowRoot;
}
function Ts(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Hn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(i)
  );
}
function H3(e) {
  return ["table", "td", "th"].includes(oo(e));
}
function ov(e) {
  const t = lv(),
    n = Hn(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function j3(e) {
  let t = jo(e);
  for (; nn(t) && !Rs(t); ) {
    if (ov(t)) return t;
    t = jo(t);
  }
  return null;
}
function lv() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Rs(e) {
  return ["html", "body", "#document"].includes(oo(e));
}
function Hn(e) {
  return $n(e).getComputedStyle(e);
}
function Kf(e) {
  return gt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function jo(e) {
  if (oo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (wg(e) && e.host) || xi(e);
  return wg(t) ? t.host : t;
}
function ok(e) {
  const t = jo(e);
  return Rs(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : nn(t) && Ts(t)
    ? t
    : ok(t);
}
function Zi(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = ok(e),
    l = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = $n(i);
  return l
    ? t.concat(
        s,
        s.visualViewport || [],
        Ts(i) ? i : [],
        s.frameElement && n ? Zi(s.frameElement) : []
      )
    : t.concat(i, Zi(i, [], n));
}
function zi(e) {
  let t = e.activeElement;
  for (
    ;
    ((n = t) == null || (r = n.shadowRoot) == null
      ? void 0
      : r.activeElement) != null;

  ) {
    var n, r;
    t = t.shadowRoot.activeElement;
  }
  return t;
}
function Lt(e, t) {
  if (!e || !t) return !1;
  const n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && wg(n)) {
    let r = t;
    for (; r; ) {
      if (e === r) return !0;
      r = r.parentNode || r.host;
    }
  }
  return !1;
}
function uv() {
  const e = navigator.userAgentData;
  return e != null && e.platform ? e.platform : navigator.platform;
}
function W3() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands)
    ? e.brands
        .map((t) => {
          let { brand: n, version: r } = t;
          return n + "/" + r;
        })
        .join(" ")
    : navigator.userAgent;
}
function lk(e) {
  if (e.mozInputSource === 0 && e.isTrusted) return !0;
  const t = /Android/i;
  return (t.test(uv()) || t.test(W3())) && e.pointerType
    ? e.type === "click" && e.buttons === 1
    : e.detail === 0 && !e.pointerType;
}
function uk(e) {
  return (
    (e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType !== "mouse") ||
    (e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0)
  );
}
function sk() {
  return /apple/i.test(navigator.vendor);
}
function V3() {
  return uv().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function Kc(e, t) {
  const n = ["mouse", "pen"];
  return t || n.push("", void 0), n.includes(e);
}
function q3(e) {
  return "nativeEvent" in e;
}
function G3(e) {
  return e.matches("html,body");
}
function an(e) {
  return e?.ownerDocument || document;
}
function Qp(e, t) {
  if (t == null) return !1;
  if ("composedPath" in e) return e.composedPath().includes(t);
  const n = e;
  return n.target != null && t.contains(n.target);
}
function sv(e) {
  return "composedPath" in e ? e.composedPath()[0] : e.target;
}
const K3 =
  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function ak(e) {
  return nn(e) && e.matches(K3);
}
function Ht(e) {
  e.preventDefault(), e.stopPropagation();
}
function Ux(e, t, n) {
  let { reference: r, floating: i } = e;
  const l = Gf(t),
    s = rk(t),
    a = nk(s),
    f = Ho(t),
    d = l === "y",
    h = r.x + r.width / 2 - i.width / 2,
    g = r.y + r.height / 2 - i.height / 2,
    y = r[a] / 2 - i[a] / 2;
  let m;
  switch (f) {
    case "top":
      m = { x: h, y: r.y - i.height };
      break;
    case "bottom":
      m = { x: h, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: g };
      break;
    case "left":
      m = { x: r.x - i.width, y: g };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (qf(t)) {
    case "start":
      m[s] -= y * (n && d ? -1 : 1);
      break;
    case "end":
      m[s] += y * (n && d ? -1 : 1);
      break;
  }
  return m;
}
const Q3 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: l = [],
      platform: s,
    } = n,
    a = l.filter(Boolean),
    f = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: h, y: g } = Ux(d, r, f),
    y = r,
    m = {},
    w = 0;
  for (let E = 0; E < a.length; E++) {
    const { name: A, fn: v } = a[E],
      {
        x: S,
        y: _,
        data: P,
        reset: D,
      } = await v({
        x: h,
        y: g,
        initialPlacement: r,
        placement: y,
        strategy: i,
        middlewareData: m,
        rects: d,
        platform: s,
        elements: { reference: e, floating: t },
      });
    if (
      ((h = S ?? h),
      (g = _ ?? g),
      (m = { ...m, [A]: { ...m[A], ...P } }),
      D && w <= 50)
    ) {
      w++,
        typeof D == "object" &&
          (D.placement && (y = D.placement),
          D.rects &&
            (d =
              D.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : D.rects),
          ({ x: h, y: g } = Ux(d, y, f))),
        (E = -1);
      continue;
    }
  }
  return { x: h, y: g, placement: y, strategy: i, middlewareData: m };
};
async function ck(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: l, rects: s, elements: a, strategy: f } = e,
    {
      boundary: d = "clippingAncestors",
      rootBoundary: h = "viewport",
      elementContext: g = "floating",
      altBoundary: y = !1,
      padding: m = 0,
    } = Vf(t, e),
    w = U3(m),
    A = a[y ? (g === "floating" ? "reference" : "floating") : g],
    v = Gc(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(A))) == null ||
          n
            ? A
            : A.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(a.floating))),
        boundary: d,
        rootBoundary: h,
        strategy: f,
      })
    ),
    S = g === "floating" ? { ...s.floating, x: r, y: i } : s.reference,
    _ = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(a.floating)),
    P = (await (l.isElement == null ? void 0 : l.isElement(_)))
      ? (await (l.getScale == null ? void 0 : l.getScale(_))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    D = Gc(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: S,
            offsetParent: _,
            strategy: f,
          })
        : S
    );
  return {
    top: (v.top - D.top + w.top) / P.y,
    bottom: (D.bottom - v.bottom + w.bottom) / P.y,
    left: (v.left - D.left + w.left) / P.x,
    right: (D.right - v.right + w.right) / P.x,
  };
}
const fk = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
            placement: i,
            middlewareData: l,
            rects: s,
            initialPlacement: a,
            platform: f,
            elements: d,
          } = t,
          {
            mainAxis: h = !0,
            crossAxis: g = !0,
            fallbackPlacements: y,
            fallbackStrategy: m = "bestFit",
            fallbackAxisSideDirection: w = "none",
            flipAlignment: E = !0,
            ...A
          } = Vf(e, t);
        if ((n = l.arrow) != null && n.alignmentOffset) return {};
        const v = Ho(i),
          S = Ho(a) === a,
          _ = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)),
          P = y || (S || !E ? [qc(a)] : F3(a));
        !y && w !== "none" && P.push(...$3(a, E, w, _));
        const D = [a, ...P],
          R = await ck(t, A),
          F = [];
        let z = ((r = l.flip) == null ? void 0 : r.overflows) || [];
        if ((h && F.push(R[v]), g)) {
          const X = N3(i, s, _);
          F.push(R[X[0]], R[X[1]]);
        }
        if (
          ((z = [...z, { placement: i, overflows: F }]),
          !F.every((X) => X <= 0))
        ) {
          var q, K;
          const X = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1,
            $ = D[X];
          if ($)
            return {
              data: { index: X, overflows: z },
              reset: { placement: $ },
            };
          let H =
            (K = z
              .filter((ie) => ie.overflows[0] <= 0)
              .sort((ie, oe) => ie.overflows[1] - oe.overflows[1])[0]) == null
              ? void 0
              : K.placement;
          if (!H)
            switch (m) {
              case "bestFit": {
                var B;
                const ie =
                  (B = z
                    .map((oe) => [
                      oe.placement,
                      oe.overflows
                        .filter((ue) => ue > 0)
                        .reduce((ue, U) => ue + U, 0),
                    ])
                    .sort((oe, ue) => oe[1] - ue[1])[0]) == null
                    ? void 0
                    : B[0];
                ie && (H = ie);
                break;
              }
              case "initialPlacement":
                H = a;
                break;
            }
          if (i !== H) return { reset: { placement: H } };
        }
        return {};
      },
    }
  );
};
async function Y3(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    l = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = Ho(n),
    a = qf(n),
    f = Gf(n) === "y",
    d = ["left", "top"].includes(s) ? -1 : 1,
    h = l && f ? -1 : 1,
    g = Vf(t, e);
  let {
    mainAxis: y,
    crossAxis: m,
    alignmentAxis: w,
  } = typeof g == "number"
    ? { mainAxis: g, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...g };
  return (
    a && typeof w == "number" && (m = a === "end" ? w * -1 : w),
    f ? { x: m * h, y: y * d } : { x: y * d, y: m * h }
  );
}
const dk = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          const { x: n, y: r } = t,
            i = await Y3(t, e);
          return { x: n + i.x, y: r + i.y, data: i };
        },
      }
    );
  },
  pk = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: l = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (A) => {
                  let { x: v, y: S } = A;
                  return { x: v, y: S };
                },
              },
              ...f
            } = Vf(e, t),
            d = { x: n, y: r },
            h = await ck(t, f),
            g = Gf(Ho(i)),
            y = tk(g);
          let m = d[y],
            w = d[g];
          if (l) {
            const A = y === "y" ? "top" : "left",
              v = y === "y" ? "bottom" : "right",
              S = m + h[A],
              _ = m - h[v];
            m = Bx(S, m, _);
          }
          if (s) {
            const A = g === "y" ? "top" : "left",
              v = g === "y" ? "bottom" : "right",
              S = w + h[A],
              _ = w - h[v];
            w = Bx(S, w, _);
          }
          const E = a.fn({ ...t, [y]: m, [g]: w });
          return { ...E, data: { x: E.x - n, y: E.y - r } };
        },
      }
    );
  };
function hk(e) {
  const t = Hn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = nn(e),
    l = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = Vc(n) !== l || Vc(r) !== s;
  return a && ((n = l), (r = s)), { width: n, height: r, $: a };
}
function av(e) {
  return gt(e) ? e : e.contextElement;
}
function $l(e) {
  const t = av(e);
  if (!nn(t)) return io(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: l } = hk(t);
  let s = (l ? Vc(n.width) : n.width) / r,
    a = (l ? Vc(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const X3 = io(0);
function gk(e) {
  const t = $n(e);
  return !lv() || !t.visualViewport
    ? X3
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Z3(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== $n(e)) ? !1 : t;
}
function Wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    l = av(e);
  let s = io(1);
  t && (r ? gt(r) && (s = $l(r)) : (s = $l(e)));
  const a = Z3(l, n, r) ? gk(l) : io(0);
  let f = (i.left + a.x) / s.x,
    d = (i.top + a.y) / s.y,
    h = i.width / s.x,
    g = i.height / s.y;
  if (l) {
    const y = $n(l),
      m = r && gt(r) ? $n(r) : r;
    let w = y.frameElement;
    for (; w && r && m !== y; ) {
      const E = $l(w),
        A = w.getBoundingClientRect(),
        v = Hn(w),
        S = A.left + (w.clientLeft + parseFloat(v.paddingLeft)) * E.x,
        _ = A.top + (w.clientTop + parseFloat(v.paddingTop)) * E.y;
      (f *= E.x),
        (d *= E.y),
        (h *= E.x),
        (g *= E.y),
        (f += S),
        (d += _),
        (w = $n(w).frameElement);
    }
  }
  return Gc({ width: h, height: g, x: f, y: d });
}
function J3(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const i = nn(n),
    l = xi(n);
  if (n === l) return t;
  let s = { scrollLeft: 0, scrollTop: 0 },
    a = io(1);
  const f = io(0);
  if (
    (i || (!i && r !== "fixed")) &&
    ((oo(n) !== "body" || Ts(l)) && (s = Kf(n)), nn(n))
  ) {
    const d = Wo(n);
    (a = $l(n)), (f.x = d.x + n.clientLeft), (f.y = d.y + n.clientTop);
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - s.scrollLeft * a.x + f.x,
    y: t.y * a.y - s.scrollTop * a.y + f.y,
  };
}
function e4(e) {
  return Array.from(e.getClientRects());
}
function mk(e) {
  return Wo(xi(e)).left + Kf(e).scrollLeft;
}
function t4(e) {
  const t = xi(e),
    n = Kf(e),
    r = e.ownerDocument.body,
    i = Do(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    l = Do(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + mk(e);
  const a = -n.scrollTop;
  return (
    Hn(r).direction === "rtl" && (s += Do(t.clientWidth, r.clientWidth) - i),
    { width: i, height: l, x: s, y: a }
  );
}
function n4(e, t) {
  const n = $n(e),
    r = xi(e),
    i = n.visualViewport;
  let l = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    f = 0;
  if (i) {
    (l = i.width), (s = i.height);
    const d = lv();
    (!d || (d && t === "fixed")) && ((a = i.offsetLeft), (f = i.offsetTop));
  }
  return { width: l, height: s, x: a, y: f };
}
function r4(e, t) {
  const n = Wo(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    l = nn(e) ? $l(e) : io(1),
    s = e.clientWidth * l.x,
    a = e.clientHeight * l.y,
    f = i * l.x,
    d = r * l.y;
  return { width: s, height: a, x: f, y: d };
}
function Hx(e, t, n) {
  let r;
  if (t === "viewport") r = n4(e, n);
  else if (t === "document") r = t4(xi(e));
  else if (gt(t)) r = r4(t, n);
  else {
    const i = gk(e);
    r = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return Gc(r);
}
function vk(e, t) {
  const n = jo(e);
  return n === t || !gt(n) || Rs(n)
    ? !1
    : Hn(n).position === "fixed" || vk(n, t);
}
function i4(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Zi(e, [], !1).filter((a) => gt(a) && oo(a) !== "body"),
    i = null;
  const l = Hn(e).position === "fixed";
  let s = l ? jo(e) : e;
  for (; gt(s) && !Rs(s); ) {
    const a = Hn(s),
      f = ov(s);
    !f && a.position === "fixed" && (i = null),
      (
        l
          ? !f && !i
          : (!f &&
              a.position === "static" &&
              !!i &&
              ["absolute", "fixed"].includes(i.position)) ||
            (Ts(s) && !f && vk(e, s))
      )
        ? (r = r.filter((h) => h !== s))
        : (i = a),
      (s = jo(s));
  }
  return t.set(e, r), r;
}
function o4(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [...(n === "clippingAncestors" ? i4(t, this._c) : [].concat(n)), r],
    a = s[0],
    f = s.reduce((d, h) => {
      const g = Hx(t, h, i);
      return (
        (d.top = Do(g.top, d.top)),
        (d.right = Wc(g.right, d.right)),
        (d.bottom = Wc(g.bottom, d.bottom)),
        (d.left = Do(g.left, d.left)),
        d
      );
    }, Hx(t, a, i));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top,
  };
}
function l4(e) {
  return hk(e);
}
function u4(e, t, n) {
  const r = nn(t),
    i = xi(t),
    l = n === "fixed",
    s = Wo(e, !0, l, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const f = io(0);
  if (r || (!r && !l))
    if (((oo(t) !== "body" || Ts(i)) && (a = Kf(t)), r)) {
      const d = Wo(t, !0, l, t);
      (f.x = d.x + t.clientLeft), (f.y = d.y + t.clientTop);
    } else i && (f.x = mk(i));
  return {
    x: s.left + a.scrollLeft - f.x,
    y: s.top + a.scrollTop - f.y,
    width: s.width,
    height: s.height,
  };
}
function jx(e, t) {
  return !nn(e) || Hn(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function yk(e, t) {
  const n = $n(e);
  if (!nn(e)) return n;
  let r = jx(e, t);
  for (; r && H3(r) && Hn(r).position === "static"; ) r = jx(r, t);
  return r &&
    (oo(r) === "html" ||
      (oo(r) === "body" && Hn(r).position === "static" && !ov(r)))
    ? n
    : r || j3(e) || n;
}
const s4 = async function (e) {
  let { reference: t, floating: n, strategy: r } = e;
  const i = this.getOffsetParent || yk,
    l = this.getDimensions;
  return {
    reference: u4(t, await i(n), r),
    floating: { x: 0, y: 0, ...(await l(n)) },
  };
};
function a4(e) {
  return Hn(e).direction === "rtl";
}
const c4 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: J3,
  getDocumentElement: xi,
  getClippingRect: o4,
  getOffsetParent: yk,
  getElementRects: s4,
  getClientRects: e4,
  getDimensions: l4,
  getScale: $l,
  isElement: gt,
  isRTL: a4,
};
function f4(e, t) {
  let n = null,
    r;
  const i = xi(e);
  function l() {
    clearTimeout(r), n && n.disconnect(), (n = null);
  }
  function s(a, f) {
    a === void 0 && (a = !1), f === void 0 && (f = 1), l();
    const { left: d, top: h, width: g, height: y } = e.getBoundingClientRect();
    if ((a || t(), !g || !y)) return;
    const m = Tl(h),
      w = Tl(i.clientWidth - (d + g)),
      E = Tl(i.clientHeight - (h + y)),
      A = Tl(d),
      S = {
        rootMargin: -m + "px " + -w + "px " + -E + "px " + -A + "px",
        threshold: Do(0, Wc(1, f)) || 1,
      };
    let _ = !0;
    function P(D) {
      const R = D[0].intersectionRatio;
      if (R !== f) {
        if (!_) return s();
        R
          ? s(!1, R)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 100));
      }
      _ = !1;
    }
    try {
      n = new IntersectionObserver(P, { ...S, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(P, S);
    }
    n.observe(e);
  }
  return s(!0), l;
}
function d4(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: l = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: f = !1,
    } = r,
    d = av(e),
    h = i || l ? [...(d ? Zi(d) : []), ...Zi(t)] : [];
  h.forEach((v) => {
    i && v.addEventListener("scroll", n, { passive: !0 }),
      l && v.addEventListener("resize", n);
  });
  const g = d && a ? f4(d, n) : null;
  let y = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((v) => {
      let [S] = v;
      S &&
        S.target === d &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(() => {
          m && m.observe(t);
        }))),
        n();
    })),
    d && !f && m.observe(d),
    m.observe(t));
  let w,
    E = f ? Wo(e) : null;
  f && A();
  function A() {
    const v = Wo(e);
    E &&
      (v.x !== E.x ||
        v.y !== E.y ||
        v.width !== E.width ||
        v.height !== E.height) &&
      n(),
      (E = v),
      (w = requestAnimationFrame(A));
  }
  return (
    n(),
    () => {
      h.forEach((v) => {
        i && v.removeEventListener("scroll", n),
          l && v.removeEventListener("resize", n);
      }),
        g && g(),
        m && m.disconnect(),
        (m = null),
        f && cancelAnimationFrame(w);
    }
  );
}
const p4 = (e, t, n) => {
  const r = new Map(),
    i = { platform: c4, ...n },
    l = { ...i.platform, _c: r };
  return Q3(e, t, { ...i, platform: l });
};
var uc =
  typeof document < "u" ? T.exports.useLayoutEffect : T.exports.useEffect;
function Qc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Qc(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const l = i[r];
      if (!(l === "_owner" && e.$$typeof) && !Qc(e[l], t[l])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function xk(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wx(e, t) {
  const n = xk(e);
  return Math.round(t * n) / n;
}
function Vx(e) {
  const t = T.exports.useRef(e);
  return (
    uc(() => {
      t.current = e;
    }),
    t
  );
}
function h4(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: l, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: f,
      open: d,
    } = e,
    [h, g] = T.exports.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [y, m] = T.exports.useState(r);
  Qc(y, r) || m(r);
  const [w, E] = T.exports.useState(null),
    [A, v] = T.exports.useState(null),
    S = T.exports.useCallback(
      (oe) => {
        oe != R.current && ((R.current = oe), E(oe));
      },
      [E]
    ),
    _ = T.exports.useCallback(
      (oe) => {
        oe !== F.current && ((F.current = oe), v(oe));
      },
      [v]
    ),
    P = l || w,
    D = s || A,
    R = T.exports.useRef(null),
    F = T.exports.useRef(null),
    z = T.exports.useRef(h),
    q = Vx(f),
    K = Vx(i),
    B = T.exports.useCallback(() => {
      if (!R.current || !F.current) return;
      const oe = { placement: t, strategy: n, middleware: y };
      K.current && (oe.platform = K.current),
        p4(R.current, F.current, oe).then((ue) => {
          const U = { ...ue, isPositioned: !0 };
          X.current &&
            !Qc(z.current, U) &&
            ((z.current = U),
            Vo.exports.flushSync(() => {
              g(U);
            }));
        });
    }, [y, t, n, K]);
  uc(() => {
    d === !1 &&
      z.current.isPositioned &&
      ((z.current.isPositioned = !1), g((oe) => ({ ...oe, isPositioned: !1 })));
  }, [d]);
  const X = T.exports.useRef(!1);
  uc(
    () => (
      (X.current = !0),
      () => {
        X.current = !1;
      }
    ),
    []
  ),
    uc(() => {
      if ((P && (R.current = P), D && (F.current = D), P && D)) {
        if (q.current) return q.current(P, D, B);
        B();
      }
    }, [P, D, B, q]);
  const $ = T.exports.useMemo(
      () => ({ reference: R, floating: F, setReference: S, setFloating: _ }),
      [S, _]
    ),
    H = T.exports.useMemo(() => ({ reference: P, floating: D }), [P, D]),
    ie = T.exports.useMemo(() => {
      const oe = { position: n, left: 0, top: 0 };
      if (!H.floating) return oe;
      const ue = Wx(H.floating, h.x),
        U = Wx(H.floating, h.y);
      return a
        ? {
            ...oe,
            transform: "translate(" + ue + "px, " + U + "px)",
            ...(xk(H.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: ue, top: U };
    }, [n, a, H.floating, h.x, h.y]);
  return T.exports.useMemo(
    () => ({ ...h, update: B, refs: $, elements: H, floatingStyles: ie }),
    [h, B, $, H, ie]
  );
}
var g4 = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  Sg = g4.join(","),
  wk = typeof Element > "u",
  Es = wk
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Yc =
    !wk && Element.prototype.getRootNode
      ? function (e) {
          var t;
          return e == null || (t = e.getRootNode) === null || t === void 0
            ? void 0
            : t.call(e);
        }
      : function (e) {
          return e?.ownerDocument;
        },
  Xc = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var i =
        t == null || (r = t.getAttribute) === null || r === void 0
          ? void 0
          : r.call(t, "inert"),
      l = i === "" || i === "true",
      s = l || (n && t && e(t.parentNode));
    return s;
  },
  m4 = function (t) {
    var n,
      r =
        t == null || (n = t.getAttribute) === null || n === void 0
          ? void 0
          : n.call(t, "contenteditable");
    return r === "" || r === "true";
  },
  v4 = function (t, n, r) {
    if (Xc(t)) return [];
    var i = Array.prototype.slice.apply(t.querySelectorAll(Sg));
    return n && Es.call(t, Sg) && i.unshift(t), (i = i.filter(r)), i;
  },
  y4 = function e(t, n, r) {
    for (var i = [], l = Array.from(t); l.length; ) {
      var s = l.shift();
      if (!Xc(s, !1))
        if (s.tagName === "SLOT") {
          var a = s.assignedElements(),
            f = a.length ? a : s.children,
            d = e(f, !0, r);
          r.flatten
            ? i.push.apply(i, d)
            : i.push({ scopeParent: s, candidates: d });
        } else {
          var h = Es.call(s, Sg);
          h && r.filter(s) && (n || !t.includes(s)) && i.push(s);
          var g =
              s.shadowRoot ||
              (typeof r.getShadowRoot == "function" && r.getShadowRoot(s)),
            y = !Xc(g, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
          if (g && y) {
            var m = e(g === !0 ? s.children : g.children, !0, r);
            r.flatten
              ? i.push.apply(i, m)
              : i.push({ scopeParent: s, candidates: m });
          } else l.unshift.apply(l, s.children);
        }
    }
    return i;
  },
  Sk = function (t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
  },
  Ek = function (t) {
    if (!t) throw new Error("No node provided");
    return t.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || m4(t)) &&
      !Sk(t)
      ? 0
      : t.tabIndex;
  },
  x4 = function (t, n) {
    var r = Ek(t);
    return r < 0 && n && !Sk(t) ? 0 : r;
  },
  w4 = function (t, n) {
    return t.tabIndex === n.tabIndex
      ? t.documentOrder - n.documentOrder
      : t.tabIndex - n.tabIndex;
  },
  Ck = function (t) {
    return t.tagName === "INPUT";
  },
  S4 = function (t) {
    return Ck(t) && t.type === "hidden";
  },
  E4 = function (t) {
    var n =
      t.tagName === "DETAILS" &&
      Array.prototype.slice.apply(t.children).some(function (r) {
        return r.tagName === "SUMMARY";
      });
    return n;
  },
  C4 = function (t, n) {
    for (var r = 0; r < t.length; r++)
      if (t[r].checked && t[r].form === n) return t[r];
  },
  k4 = function (t) {
    if (!t.name) return !0;
    var n = t.form || Yc(t),
      r = function (a) {
        return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
      },
      i;
    if (
      typeof window < "u" &&
      typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    )
      i = r(window.CSS.escape(t.name));
    else
      try {
        i = r(t.name);
      } catch (s) {
        return (
          console.error(
            "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
            s.message
          ),
          !1
        );
      }
    var l = C4(i, t.form);
    return !l || l === t;
  },
  _4 = function (t) {
    return Ck(t) && t.type === "radio";
  },
  b4 = function (t) {
    return _4(t) && !k4(t);
  },
  O4 = function (t) {
    var n,
      r = t && Yc(t),
      i = (n = r) === null || n === void 0 ? void 0 : n.host,
      l = !1;
    if (r && r !== t) {
      var s, a, f;
      for (
        l = !!(
          ((s = i) !== null &&
            s !== void 0 &&
            (a = s.ownerDocument) !== null &&
            a !== void 0 &&
            a.contains(i)) ||
          (t != null &&
            (f = t.ownerDocument) !== null &&
            f !== void 0 &&
            f.contains(t))
        );
        !l && i;

      ) {
        var d, h, g;
        (r = Yc(i)),
          (i = (d = r) === null || d === void 0 ? void 0 : d.host),
          (l = !!(
            (h = i) !== null &&
            h !== void 0 &&
            (g = h.ownerDocument) !== null &&
            g !== void 0 &&
            g.contains(i)
          ));
      }
    }
    return l;
  },
  qx = function (t) {
    var n = t.getBoundingClientRect(),
      r = n.width,
      i = n.height;
    return r === 0 && i === 0;
  },
  I4 = function (t, n) {
    var r = n.displayCheck,
      i = n.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden") return !0;
    var l = Es.call(t, "details>summary:first-of-type"),
      s = l ? t.parentElement : t;
    if (Es.call(s, "details:not([open]) *")) return !0;
    if (!r || r === "full" || r === "legacy-full") {
      if (typeof i == "function") {
        for (var a = t; t; ) {
          var f = t.parentElement,
            d = Yc(t);
          if (f && !f.shadowRoot && i(f) === !0) return qx(t);
          t.assignedSlot
            ? (t = t.assignedSlot)
            : !f && d !== t.ownerDocument
            ? (t = d.host)
            : (t = f);
        }
        t = a;
      }
      if (O4(t)) return !t.getClientRects().length;
      if (r !== "legacy-full") return !0;
    } else if (r === "non-zero-area") return qx(t);
    return !1;
  },
  T4 = function (t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === "FIELDSET" && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var i = n.children.item(r);
            if (i.tagName === "LEGEND")
              return Es.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  },
  R4 = function (t, n) {
    return !(n.disabled || Xc(n) || S4(n) || I4(n, t) || E4(n) || T4(n));
  },
  Gx = function (t, n) {
    return !(b4(n) || Ek(n) < 0 || !R4(t, n));
  },
  P4 = function (t) {
    var n = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
  },
  A4 = function e(t) {
    var n = [],
      r = [];
    return (
      t.forEach(function (i, l) {
        var s = !!i.scopeParent,
          a = s ? i.scopeParent : i,
          f = x4(a, s),
          d = s ? e(i.candidates) : a;
        f === 0
          ? s
            ? n.push.apply(n, d)
            : n.push(a)
          : r.push({
              documentOrder: l,
              tabIndex: f,
              item: i,
              isScope: s,
              content: d,
            });
      }),
      r
        .sort(w4)
        .reduce(function (i, l) {
          return l.isScope ? i.push.apply(i, l.content) : i.push(l.content), i;
        }, [])
        .concat(n)
    );
  },
  cv = function (t, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = y4([t], n.includeContainer, {
            filter: Gx.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: P4,
          }))
        : (r = v4(t, n.includeContainer, Gx.bind(null, n))),
      A4(r)
    );
  };
function fv(e) {
  return T.exports.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              typeof n == "function" ? n(t) : n != null && (n.current = t);
            });
          },
    e
  );
}
const dv = "ArrowUp",
  Qf = "ArrowDown",
  Xl = "ArrowLeft",
  Ps = "ArrowRight";
function Ua(e, t, n) {
  return Math.floor(e / t) !== n;
}
function Zu(e, t) {
  return t < 0 || t >= e.current.length;
}
function Yp(e, t) {
  return Zt(e, { disabledIndices: t });
}
function Kx(e, t) {
  return Zt(e, {
    decrement: !0,
    startingIndex: e.current.length,
    disabledIndices: t,
  });
}
function Zt(e, t) {
  let {
    startingIndex: n = -1,
    decrement: r = !1,
    disabledIndices: i,
    amount: l = 1,
  } = t === void 0 ? {} : t;
  const s = e.current;
  let a = n;
  do {
    var f, d;
    a = a + (r ? -l : l);
  } while (
    a >= 0 &&
    a <= s.length - 1 &&
    (i
      ? i.includes(a)
      : s[a] == null ||
        ((f = s[a]) == null ? void 0 : f.hasAttribute("disabled")) ||
        ((d = s[a]) == null ? void 0 : d.getAttribute("aria-disabled")) ===
          "true")
  );
  return a;
}
function D4(e, t) {
  let {
      event: n,
      orientation: r,
      loop: i,
      cols: l,
      disabledIndices: s,
      minIndex: a,
      maxIndex: f,
      prevIndex: d,
      stopEvent: h = !1,
    } = t,
    g = d;
  if (n.key === dv) {
    if ((h && Ht(n), d === -1)) g = f;
    else if (
      ((g = Zt(e, {
        startingIndex: g,
        amount: l,
        decrement: !0,
        disabledIndices: s,
      })),
      i && (d - l < a || g < 0))
    ) {
      const y = d % l,
        m = f % l,
        w = f - (m - y);
      m === y ? (g = f) : (g = m > y ? w : w - l);
    }
    Zu(e, g) && (g = d);
  }
  if (
    (n.key === Qf &&
      (h && Ht(n),
      d === -1
        ? (g = a)
        : ((g = Zt(e, { startingIndex: d, amount: l, disabledIndices: s })),
          i &&
            d + l > f &&
            (g = Zt(e, {
              startingIndex: (d % l) - l,
              amount: l,
              disabledIndices: s,
            }))),
      Zu(e, g) && (g = d)),
    r === "both")
  ) {
    const y = Tl(d / l);
    n.key === Ps &&
      (h && Ht(n),
      d % l !== l - 1
        ? ((g = Zt(e, { startingIndex: d, disabledIndices: s })),
          i &&
            Ua(g, l, y) &&
            (g = Zt(e, { startingIndex: d - (d % l) - 1, disabledIndices: s })))
        : i &&
          (g = Zt(e, { startingIndex: d - (d % l) - 1, disabledIndices: s })),
      Ua(g, l, y) && (g = d)),
      n.key === Xl &&
        (h && Ht(n),
        d % l !== 0
          ? ((g = Zt(e, {
              startingIndex: d,
              disabledIndices: s,
              decrement: !0,
            })),
            i &&
              Ua(g, l, y) &&
              (g = Zt(e, {
                startingIndex: d + (l - (d % l)),
                decrement: !0,
                disabledIndices: s,
              })))
          : i &&
            (g = Zt(e, {
              startingIndex: d + (l - (d % l)),
              decrement: !0,
              disabledIndices: s,
            })),
        Ua(g, l, y) && (g = d));
    const m = Tl(f / l) === y;
    Zu(e, g) &&
      (i && m
        ? (g =
            n.key === Xl
              ? f
              : Zt(e, { startingIndex: d - (d % l) - 1, disabledIndices: s }))
        : (g = d));
  }
  return g;
}
let Qx = 0;
function oi(e, t) {
  t === void 0 && (t = {});
  const { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
  r && cancelAnimationFrame(Qx);
  const l = () => e?.focus({ preventScroll: n });
  i ? l() : (Qx = requestAnimationFrame(l));
}
var Ke =
  typeof document < "u" ? T.exports.useLayoutEffect : T.exports.useEffect;
function L4(e, t) {
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING ||
    n & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : n & Node.DOCUMENT_POSITION_PRECEDING ||
      n & Node.DOCUMENT_POSITION_CONTAINS
    ? 1
    : 0;
}
function M4(e, t) {
  if (e.size !== t.size) return !1;
  for (const [n, r] of e.entries()) if (r !== t.get(n)) return !1;
  return !0;
}
const kk = T.exports.createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: { current: [] },
});
function N4(e) {
  let { children: t, elementsRef: n, labelsRef: r } = e;
  const [i, l] = T.exports.useState(() => new Map()),
    s = T.exports.useCallback((f) => {
      l((d) => new Map(d).set(f, null));
    }, []),
    a = T.exports.useCallback((f) => {
      l((d) => {
        const h = new Map(d);
        return h.delete(f), h;
      });
    }, []);
  return (
    Ke(() => {
      const f = new Map(i);
      Array.from(f.keys())
        .sort(L4)
        .forEach((h, g) => {
          f.set(h, g);
        }),
        M4(i, f) || l(f);
    }, [i]),
    T.exports.createElement(
      kk.Provider,
      {
        value: T.exports.useMemo(
          () => ({
            register: s,
            unregister: a,
            map: i,
            elementsRef: n,
            labelsRef: r,
          }),
          [s, a, i, n, r]
        ),
      },
      t
    )
  );
}
function _k(e) {
  let { label: t } = e === void 0 ? {} : e;
  const [n, r] = T.exports.useState(null),
    i = T.exports.useRef(null),
    {
      register: l,
      unregister: s,
      map: a,
      elementsRef: f,
      labelsRef: d,
    } = T.exports.useContext(kk),
    h = T.exports.useCallback(
      (g) => {
        if (((i.current = g), n !== null && ((f.current[n] = g), d))) {
          var y;
          const m = t !== void 0;
          d.current[n] = m ? t : (y = g?.textContent) != null ? y : null;
        }
      },
      [n, f, d, t]
    );
  return (
    Ke(() => {
      const g = i.current;
      if (g)
        return (
          l(g),
          () => {
            s(g);
          }
        );
    }, [l, s]),
    Ke(() => {
      const g = i.current ? a.get(i.current) : null;
      g != null && r(g);
    }, [a]),
    T.exports.useMemo(() => ({ ref: h, index: n ?? -1 }), [n, h])
  );
}
function Cs() {
  return (
    (Cs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cs.apply(this, arguments)
  );
}
let Xp = !1,
  F4 = 0;
const Yx = () => "floating-ui-" + F4++;
function z4() {
  const [e, t] = T.exports.useState(() => (Xp ? Yx() : void 0));
  return (
    Ke(() => {
      e == null && t(Yx());
    }, []),
    T.exports.useEffect(() => {
      Xp || (Xp = !0);
    }, []),
    e
  );
}
const $4 = lS["useId".toString()],
  As = $4 || z4;
function bk() {
  const e = new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((i) => i(n));
    },
    on(t, n) {
      e.set(t, [...(e.get(t) || []), n]);
    },
    off(t, n) {
      var r;
      e.set(
        t,
        ((r = e.get(t)) == null ? void 0 : r.filter((i) => i !== n)) || []
      );
    },
  };
}
const Ok = T.exports.createContext(null),
  Ik = T.exports.createContext(null),
  Ko = () => {
    var e;
    return ((e = T.exports.useContext(Ok)) == null ? void 0 : e.id) || null;
  },
  ao = () => T.exports.useContext(Ik);
function B4(e) {
  const t = As(),
    n = ao(),
    r = Ko(),
    i = e || r;
  return (
    Ke(() => {
      const l = { id: t, parentId: i };
      return (
        n?.addNode(l),
        () => {
          n?.removeNode(l);
        }
      );
    }, [n, t, i]),
    t
  );
}
function U4(e) {
  let { children: t, id: n } = e;
  const r = Ko();
  return T.exports.createElement(
    Ok.Provider,
    { value: T.exports.useMemo(() => ({ id: n, parentId: r }), [n, r]) },
    t
  );
}
function H4(e) {
  let { children: t } = e;
  const n = T.exports.useRef([]),
    r = T.exports.useCallback((s) => {
      n.current = [...n.current, s];
    }, []),
    i = T.exports.useCallback((s) => {
      n.current = n.current.filter((a) => a !== s);
    }, []),
    l = T.exports.useState(() => bk())[0];
  return T.exports.createElement(
    Ik.Provider,
    {
      value: T.exports.useMemo(
        () => ({ nodesRef: n, addNode: r, removeNode: i, events: l }),
        [n, r, i, l]
      ),
    },
    t
  );
}
function Zl(e) {
  return "data-floating-ui-" + e;
}
function En(e) {
  const t = T.exports.useRef(e);
  return (
    Ke(() => {
      t.current = e;
    }),
    t
  );
}
const Xx = Zl("safe-polygon");
function Zp(e, t, n) {
  return n && !Kc(n) ? 0 : typeof e == "number" ? e : e?.[t];
}
function j4(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      dataRef: i,
      events: l,
      elements: { domReference: s, floating: a },
      refs: f,
    } = e,
    {
      enabled: d = !0,
      delay: h = 0,
      handleClose: g = null,
      mouseOnly: y = !1,
      restMs: m = 0,
      move: w = !0,
    } = t,
    E = ao(),
    A = Ko(),
    v = En(g),
    S = En(h),
    _ = T.exports.useRef(),
    P = T.exports.useRef(),
    D = T.exports.useRef(),
    R = T.exports.useRef(),
    F = T.exports.useRef(!0),
    z = T.exports.useRef(!1),
    q = T.exports.useRef(() => {}),
    K = T.exports.useCallback(() => {
      var H;
      const ie = (H = i.current.openEvent) == null ? void 0 : H.type;
      return ie?.includes("mouse") && ie !== "mousedown";
    }, [i]);
  T.exports.useEffect(() => {
    if (!d) return;
    function H() {
      clearTimeout(P.current), clearTimeout(R.current), (F.current = !0);
    }
    return (
      l.on("dismiss", H),
      () => {
        l.off("dismiss", H);
      }
    );
  }, [d, l]),
    T.exports.useEffect(() => {
      if (!d || !v.current || !n) return;
      function H(oe) {
        K() && r(!1, oe);
      }
      const ie = an(a).documentElement;
      return (
        ie.addEventListener("mouseleave", H),
        () => {
          ie.removeEventListener("mouseleave", H);
        }
      );
    }, [a, n, r, d, v, i, K]);
  const B = T.exports.useCallback(
      function (H, ie) {
        ie === void 0 && (ie = !0);
        const oe = Zp(S.current, "close", _.current);
        oe && !D.current
          ? (clearTimeout(P.current),
            (P.current = setTimeout(() => r(!1, H), oe)))
          : ie && (clearTimeout(P.current), r(!1, H));
      },
      [S, r]
    ),
    X = T.exports.useCallback(() => {
      q.current(), (D.current = void 0);
    }, []),
    $ = T.exports.useCallback(() => {
      if (z.current) {
        const H = an(f.floating.current).body;
        (H.style.pointerEvents = ""), H.removeAttribute(Xx), (z.current = !1);
      }
    }, [f]);
  return (
    T.exports.useEffect(() => {
      if (!d) return;
      function H() {
        return i.current.openEvent
          ? ["click", "mousedown"].includes(i.current.openEvent.type)
          : !1;
      }
      function ie(U) {
        if (
          (clearTimeout(P.current),
          (F.current = !1),
          (y && !Kc(_.current)) || (m > 0 && Zp(S.current, "open") === 0))
        )
          return;
        const J = Zp(S.current, "open", _.current);
        J
          ? (P.current = setTimeout(() => {
              r(!0, U);
            }, J))
          : r(!0, U);
      }
      function oe(U) {
        if (H()) return;
        q.current();
        const J = an(a);
        if ((clearTimeout(R.current), v.current)) {
          n || clearTimeout(P.current),
            (D.current = v.current({
              ...e,
              tree: E,
              x: U.clientX,
              y: U.clientY,
              onClose() {
                $(), X(), B(U);
              },
            }));
          const b = D.current;
          J.addEventListener("mousemove", b),
            (q.current = () => {
              J.removeEventListener("mousemove", b);
            });
          return;
        }
        (_.current === "touch" ? !Lt(a, U.relatedTarget) : !0) && B(U);
      }
      function ue(U) {
        H() ||
          v.current == null ||
          v.current({
            ...e,
            tree: E,
            x: U.clientX,
            y: U.clientY,
            onClose() {
              $(), X(), B(U);
            },
          })(U);
      }
      if (gt(s)) {
        const U = s;
        return (
          n && U.addEventListener("mouseleave", ue),
          a?.addEventListener("mouseleave", ue),
          w && U.addEventListener("mousemove", ie, { once: !0 }),
          U.addEventListener("mouseenter", ie),
          U.addEventListener("mouseleave", oe),
          () => {
            n && U.removeEventListener("mouseleave", ue),
              a?.removeEventListener("mouseleave", ue),
              w && U.removeEventListener("mousemove", ie),
              U.removeEventListener("mouseenter", ie),
              U.removeEventListener("mouseleave", oe);
          }
        );
      }
    }, [s, a, d, e, y, m, w, B, X, $, r, n, E, S, v, i]),
    Ke(() => {
      var H;
      if (
        !!d &&
        n &&
        (H = v.current) != null &&
        H.__options.blockPointerEvents &&
        K()
      ) {
        const ue = an(a).body;
        if (
          (ue.setAttribute(Xx, ""),
          (ue.style.pointerEvents = "none"),
          (z.current = !0),
          gt(s) && a)
        ) {
          var ie, oe;
          const U = s,
            J =
              E == null ||
              (ie = E.nodesRef.current.find((ee) => ee.id === A)) == null ||
              (oe = ie.context) == null
                ? void 0
                : oe.elements.floating;
          return (
            J && (J.style.pointerEvents = ""),
            (U.style.pointerEvents = "auto"),
            (a.style.pointerEvents = "auto"),
            () => {
              (U.style.pointerEvents = ""), (a.style.pointerEvents = "");
            }
          );
        }
      }
    }, [d, n, A, a, s, E, v, i, K]),
    Ke(() => {
      n || ((_.current = void 0), X(), $());
    }, [n, X, $]),
    T.exports.useEffect(
      () => () => {
        X(), clearTimeout(P.current), clearTimeout(R.current), $();
      },
      [d, s, X, $]
    ),
    T.exports.useMemo(() => {
      if (!d) return {};
      function H(ie) {
        _.current = ie.pointerType;
      }
      return {
        reference: {
          onPointerDown: H,
          onPointerEnter: H,
          onMouseMove(ie) {
            n ||
              m === 0 ||
              (clearTimeout(R.current),
              (R.current = setTimeout(() => {
                F.current || r(!0, ie.nativeEvent);
              }, m)));
          },
        },
        floating: {
          onMouseEnter() {
            clearTimeout(P.current);
          },
          onMouseLeave(ie) {
            l.emit("dismiss", {
              type: "mouseLeave",
              data: { returnFocus: !1 },
            }),
              B(ie.nativeEvent, !1);
          },
        },
      };
    }, [l, d, m, n, r, B])
  );
}
function W4(e, t) {
  var n;
  let r = [],
    i = (n = e.find((l) => l.id === t)) == null ? void 0 : n.parentId;
  for (; i; ) {
    const l = e.find((s) => s.id === i);
    (i = l?.parentId), l && (r = r.concat(l));
  }
  return r;
}
function Lo(e, t) {
  let n = e.filter((i) => {
      var l;
      return i.parentId === t && ((l = i.context) == null ? void 0 : l.open);
    }),
    r = n;
  for (; r.length; )
    (r = e.filter((i) => {
      var l;
      return (l = r) == null
        ? void 0
        : l.some((s) => {
            var a;
            return (
              i.parentId === s.id && ((a = i.context) == null ? void 0 : a.open)
            );
          });
    })),
      (n = n.concat(r));
  return n;
}
function V4(e, t) {
  let n,
    r = -1;
  function i(l, s) {
    s > r && ((n = l), (r = s)),
      Lo(e, l).forEach((f) => {
        i(f.id, s + 1);
      });
  }
  return i(t, 0), e.find((l) => l.id === n);
}
let pl = new WeakMap(),
  Ha = new WeakSet(),
  ja = {},
  Jp = 0;
const q4 = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
  Tk = (e) => e && (e.host || Tk(e.parentNode)),
  G4 = (e, t) =>
    t
      .map((n) => {
        if (e.contains(n)) return n;
        const r = Tk(n);
        return e.contains(r) ? r : null;
      })
      .filter((n) => n != null);
function K4(e, t, n, r) {
  const i = "data-floating-ui-inert",
    l = r ? "inert" : n ? "aria-hidden" : null,
    s = G4(t, e),
    a = new Set(),
    f = new Set(s),
    d = [];
  ja[i] || (ja[i] = new WeakMap());
  const h = ja[i];
  s.forEach(g), y(t), a.clear();
  function g(m) {
    !m || a.has(m) || (a.add(m), m.parentNode && g(m.parentNode));
  }
  function y(m) {
    !m ||
      f.has(m) ||
      Array.prototype.forEach.call(m.children, (w) => {
        if (a.has(w)) y(w);
        else {
          const E = l ? w.getAttribute(l) : null,
            A = E !== null && E !== "false",
            v = (pl.get(w) || 0) + 1,
            S = (h.get(w) || 0) + 1;
          pl.set(w, v),
            h.set(w, S),
            d.push(w),
            v === 1 && A && Ha.add(w),
            S === 1 && w.setAttribute(i, ""),
            !A && l && w.setAttribute(l, "true");
        }
      });
  }
  return (
    Jp++,
    () => {
      d.forEach((m) => {
        const w = (pl.get(m) || 0) - 1,
          E = (h.get(m) || 0) - 1;
        pl.set(m, w),
          h.set(m, E),
          w || (!Ha.has(m) && l && m.removeAttribute(l), Ha.delete(m)),
          E || m.removeAttribute(i);
      }),
        Jp--,
        Jp ||
          ((pl = new WeakMap()),
          (pl = new WeakMap()),
          (Ha = new WeakSet()),
          (ja = {}));
    }
  );
}
function Zx(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = an(e[0]).body;
  return K4(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
}
const pv = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == "function" &&
    ResizeObserver.toString().includes("[native code]")
      ? "full"
      : "none",
});
function Rk(e, t) {
  const n = cv(e, pv());
  t === "prev" && n.reverse();
  const r = n.indexOf(zi(an(e)));
  return n.slice(r + 1)[0];
}
function Pk() {
  return Rk(document.body, "next");
}
function Ak() {
  return Rk(document.body, "prev");
}
function Ju(e, t) {
  const n = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !Lt(n, r);
}
function Q4(e) {
  cv(e, pv()).forEach((n) => {
    (n.dataset.tabindex = n.getAttribute("tabindex") || ""),
      n.setAttribute("tabindex", "-1");
  });
}
function Y4(e) {
  e.querySelectorAll("[data-tabindex]").forEach((n) => {
    const r = n.dataset.tabindex;
    delete n.dataset.tabindex,
      r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
  });
}
const hv = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0,
};
let X4;
function Jx(e) {
  e.key === "Tab" && (e.target, clearTimeout(X4));
}
const Zc = T.exports.forwardRef(function (t, n) {
    const [r, i] = T.exports.useState();
    Ke(
      () => (
        sk() && i("button"),
        document.addEventListener("keydown", Jx),
        () => {
          document.removeEventListener("keydown", Jx);
        }
      ),
      []
    );
    const l = {
      ref: n,
      tabIndex: 0,
      role: r,
      "aria-hidden": r ? void 0 : !0,
      [Zl("focus-guard")]: "",
      style: hv,
    };
    return T.exports.createElement("span", Cs({}, t, l));
  }),
  Dk = T.exports.createContext(null);
function Z4(e) {
  let { id: t, root: n } = e === void 0 ? {} : e;
  const [r, i] = T.exports.useState(null),
    l = As(),
    s = Lk(),
    a = T.exports.useMemo(
      () => ({ id: t, root: n, portalContext: s, uniqueId: l }),
      [t, n, s, l]
    ),
    f = T.exports.useRef();
  return (
    Ke(
      () => () => {
        r?.remove();
      },
      [r, a]
    ),
    Ke(() => {
      if (f.current === a) return;
      f.current = a;
      const { id: d, root: h, portalContext: g, uniqueId: y } = a,
        m = d ? document.getElementById(d) : null,
        w = Zl("portal");
      if (m) {
        const E = document.createElement("div");
        (E.id = y), E.setAttribute(w, ""), m.appendChild(E), i(E);
      } else {
        let E = h || g?.portalNode;
        E && !gt(E) && (E = E.current), (E = E || document.body);
        let A = null;
        d &&
          ((A = document.createElement("div")), (A.id = d), E.appendChild(A));
        const v = document.createElement("div");
        (v.id = y), v.setAttribute(w, ""), (E = A || E), E.appendChild(v), i(v);
      }
    }, [a]),
    r
  );
}
function gv(e) {
  let { children: t, id: n, root: r = null, preserveTabOrder: i = !0 } = e;
  const l = Z4({ id: n, root: r }),
    [s, a] = T.exports.useState(null),
    f = T.exports.useRef(null),
    d = T.exports.useRef(null),
    h = T.exports.useRef(null),
    g = T.exports.useRef(null),
    y = !!s && !s.modal && s.open && i && !!(r || l);
  return (
    T.exports.useEffect(() => {
      if (!l || !i || (s != null && s.modal)) return;
      function m(w) {
        l && Ju(w) && (w.type === "focusin" ? Y4 : Q4)(l);
      }
      return (
        l.addEventListener("focusin", m, !0),
        l.addEventListener("focusout", m, !0),
        () => {
          l.removeEventListener("focusin", m, !0),
            l.removeEventListener("focusout", m, !0);
        }
      );
    }, [l, i, s?.modal]),
    T.exports.createElement(
      Dk.Provider,
      {
        value: T.exports.useMemo(
          () => ({
            preserveTabOrder: i,
            beforeOutsideRef: f,
            afterOutsideRef: d,
            beforeInsideRef: h,
            afterInsideRef: g,
            portalNode: l,
            setFocusManagerState: a,
          }),
          [i, l]
        ),
      },
      y &&
        l &&
        T.exports.createElement(Zc, {
          "data-type": "outside",
          ref: f,
          onFocus: (m) => {
            if (Ju(m, l)) {
              var w;
              (w = h.current) == null || w.focus();
            } else {
              const E = Ak() || s?.refs.domReference.current;
              E?.focus();
            }
          },
        }),
      y &&
        l &&
        T.exports.createElement("span", { "aria-owns": l.id, style: hv }),
      l && Vo.exports.createPortal(t, l),
      y &&
        l &&
        T.exports.createElement(Zc, {
          "data-type": "outside",
          ref: d,
          onFocus: (m) => {
            if (Ju(m, l)) {
              var w;
              (w = g.current) == null || w.focus();
            } else {
              const E = Pk() || s?.refs.domReference.current;
              E?.focus(),
                s?.closeOnFocusOut && s?.onOpenChange(!1, m.nativeEvent);
            }
          },
        })
    )
  );
}
const Lk = () => T.exports.useContext(Dk),
  J4 = T.exports.forwardRef(function (t, n) {
    return T.exports.createElement(
      "button",
      Cs({}, t, { type: "button", ref: n, tabIndex: -1, style: hv })
    );
  });
function Mk(e) {
  const {
      context: t,
      children: n,
      disabled: r = !1,
      order: i = ["content"],
      guards: l = !0,
      initialFocus: s = 0,
      returnFocus: a = !0,
      modal: f = !0,
      visuallyHiddenDismiss: d = !1,
      closeOnFocusOut: h = !0,
    } = e,
    {
      open: g,
      refs: y,
      nodeId: m,
      onOpenChange: w,
      events: E,
      dataRef: A,
      elements: { domReference: v, floating: S },
    } = t,
    _ = q4() ? l : !0,
    P = En(i),
    D = En(s),
    R = En(a),
    F = ao(),
    z = Lk(),
    q = typeof s == "number" && s < 0,
    K = T.exports.useRef(null),
    B = T.exports.useRef(null),
    X = T.exports.useRef(!1),
    $ = T.exports.useRef(null),
    H = T.exports.useRef(!1),
    ie = z != null,
    oe = v && v.getAttribute("role") === "combobox" && ak(v) && q,
    ue = T.exports.useCallback(
      function (b) {
        return b === void 0 && (b = S), b ? cv(b, pv()) : [];
      },
      [S]
    ),
    U = T.exports.useCallback(
      (b) => {
        const O = ue(b);
        return P.current
          .map((fe) =>
            v && fe === "reference" ? v : S && fe === "floating" ? S : O
          )
          .filter(Boolean)
          .flat();
      },
      [v, S, P, ue]
    );
  T.exports.useEffect(() => {
    if (r || !f) return;
    function b(fe) {
      if (fe.key === "Tab") {
        Lt(S, zi(an(S))) && ue().length === 0 && !oe && Ht(fe);
        const ve = U(),
          Ae = sv(fe);
        P.current[0] === "reference" &&
          Ae === v &&
          (Ht(fe), fe.shiftKey ? oi(ve[ve.length - 1]) : oi(ve[1])),
          P.current[1] === "floating" &&
            Ae === S &&
            fe.shiftKey &&
            (Ht(fe), oi(ve[0]));
      }
    }
    const O = an(S);
    return (
      O.addEventListener("keydown", b),
      () => {
        O.removeEventListener("keydown", b);
      }
    );
  }, [r, v, S, f, P, y, oe, ue, U]),
    T.exports.useEffect(() => {
      if (r || !h) return;
      function b() {
        (H.current = !0),
          setTimeout(() => {
            H.current = !1;
          });
      }
      function O(fe) {
        const ve = fe.relatedTarget;
        queueMicrotask(() => {
          const Ae = !(
            Lt(v, ve) ||
            Lt(S, ve) ||
            Lt(ve, S) ||
            Lt(z?.portalNode, ve) ||
            (ve != null && ve.hasAttribute(Zl("focus-guard"))) ||
            (F &&
              (Lo(F.nodesRef.current, m).find((de) => {
                var Oe, ye;
                return (
                  Lt(
                    (Oe = de.context) == null ? void 0 : Oe.elements.floating,
                    ve
                  ) ||
                  Lt(
                    (ye = de.context) == null
                      ? void 0
                      : ye.elements.domReference,
                    ve
                  )
                );
              }) ||
                W4(F.nodesRef.current, m).find((de) => {
                  var Oe, ye;
                  return (
                    ((Oe = de.context) == null
                      ? void 0
                      : Oe.elements.floating) === ve ||
                    ((ye = de.context) == null
                      ? void 0
                      : ye.elements.domReference) === ve
                  );
                })))
          );
          ve &&
            Ae &&
            !H.current &&
            ve !== $.current &&
            ((X.current = !0), w(!1, fe));
        });
      }
      if (S && nn(v))
        return (
          v.addEventListener("focusout", O),
          v.addEventListener("pointerdown", b),
          !f && S.addEventListener("focusout", O),
          () => {
            v.removeEventListener("focusout", O),
              v.removeEventListener("pointerdown", b),
              !f && S.removeEventListener("focusout", O);
          }
        );
    }, [r, v, S, f, m, F, z, w, h]),
    T.exports.useEffect(() => {
      var b;
      if (r) return;
      const O = Array.from(
        (z == null || (b = z.portalNode) == null
          ? void 0
          : b.querySelectorAll("[" + Zl("portal") + "]")) || []
      );
      if (S) {
        const fe = [
            S,
            ...O,
            K.current,
            B.current,
            P.current.includes("reference") || oe ? v : null,
          ].filter((Ae) => Ae != null),
          ve = f ? Zx(fe, _, !_) : Zx(fe);
        return () => {
          ve();
        };
      }
    }, [r, v, S, f, P, z, oe, _]),
    Ke(() => {
      if (r || !S) return;
      const b = an(S),
        O = zi(b);
      queueMicrotask(() => {
        const fe = U(S),
          ve = D.current,
          Ae = (typeof ve == "number" ? fe[ve] : ve.current) || S,
          de = Lt(S, O);
        !q && !de && g && oi(Ae, { preventScroll: Ae === S });
      });
    }, [r, g, S, q, U, D]),
    Ke(() => {
      if (r || !S) return;
      let b = !1;
      const O = an(S),
        fe = zi(O),
        ve = A.current;
      $.current = fe;
      function Ae(de) {
        if (
          (de.type === "escapeKey" &&
            y.domReference.current &&
            ($.current = y.domReference.current),
          ["referencePress", "escapeKey"].includes(de.type))
        )
          return;
        const Oe = de.data.returnFocus;
        typeof Oe == "object"
          ? ((X.current = !1), (b = Oe.preventScroll))
          : (X.current = !Oe);
      }
      return (
        E.on("dismiss", Ae),
        () => {
          E.off("dismiss", Ae);
          const de = zi(O);
          (Lt(S, de) ||
            (F &&
              Lo(F.nodesRef.current, m).some((ye) => {
                var Fe;
                return Lt(
                  (Fe = ye.context) == null ? void 0 : Fe.elements.floating,
                  de
                );
              })) ||
            (ve.openEvent &&
              ["click", "mousedown"].includes(ve.openEvent.type))) &&
            y.domReference.current &&
            ($.current = y.domReference.current),
            R.current &&
              nn($.current) &&
              !X.current &&
              oi($.current, { cancelPrevious: !1, preventScroll: b });
        }
      );
    }, [r, S, R, A, y, E, F, m]),
    Ke(() => {
      if (!(r || !z))
        return (
          z.setFocusManagerState({
            modal: f,
            closeOnFocusOut: h,
            open: g,
            onOpenChange: w,
            refs: y,
          }),
          () => {
            z.setFocusManagerState(null);
          }
        );
    }, [r, z, f, g, w, y, h]),
    Ke(() => {
      if (!r && S && typeof MutationObserver == "function" && !q) {
        const b = () => {
          const fe = S.getAttribute("tabindex");
          P.current.includes("floating") ||
          (zi(an(S)) !== y.domReference.current && ue().length === 0)
            ? fe !== "0" && S.setAttribute("tabindex", "0")
            : fe !== "-1" && S.setAttribute("tabindex", "-1");
        };
        b();
        const O = new MutationObserver(b);
        return (
          O.observe(S, { childList: !0, subtree: !0, attributes: !0 }),
          () => {
            O.disconnect();
          }
        );
      }
    }, [r, S, y, P, ue, q]);
  function J(b) {
    return r || !d || !f
      ? null
      : T.exports.createElement(
          J4,
          { ref: b === "start" ? K : B, onClick: (O) => w(!1, O.nativeEvent) },
          typeof d == "string" ? d : "Dismiss"
        );
  }
  const ee = !r && _ && !oe && (ie || f);
  return T.exports.createElement(
    T.exports.Fragment,
    null,
    ee &&
      T.exports.createElement(Zc, {
        "data-type": "inside",
        ref: z?.beforeInsideRef,
        onFocus: (b) => {
          if (f) {
            const fe = U();
            oi(i[0] === "reference" ? fe[0] : fe[fe.length - 1]);
          } else if (z != null && z.preserveTabOrder && z.portalNode)
            if (((X.current = !1), Ju(b, z.portalNode))) {
              const fe = Pk() || v;
              fe?.focus();
            } else {
              var O;
              (O = z.beforeOutsideRef.current) == null || O.focus();
            }
        },
      }),
    !oe && J("start"),
    n,
    J("end"),
    ee &&
      T.exports.createElement(Zc, {
        "data-type": "inside",
        ref: z?.afterInsideRef,
        onFocus: (b) => {
          if (f) oi(U()[0]);
          else if (z != null && z.preserveTabOrder && z.portalNode)
            if ((h && (X.current = !0), Ju(b, z.portalNode))) {
              const fe = Ak() || v;
              fe?.focus();
            } else {
              var O;
              (O = z.afterOutsideRef.current) == null || O.focus();
            }
        },
      })
  );
}
const eh = new Set(),
  Nk = T.exports.forwardRef(function (t, n) {
    let { lockScroll: r = !1, ...i } = t;
    const l = As();
    return (
      Ke(() => {
        if (!r) return;
        eh.add(l);
        const s = /iP(hone|ad|od)|iOS/.test(uv()),
          a = document.body.style,
          d =
            Math.round(document.documentElement.getBoundingClientRect().left) +
            document.documentElement.scrollLeft
              ? "paddingLeft"
              : "paddingRight",
          h = window.innerWidth - document.documentElement.clientWidth,
          g = a.left ? parseFloat(a.left) : window.pageXOffset,
          y = a.top ? parseFloat(a.top) : window.pageYOffset;
        if (((a.overflow = "hidden"), h && (a[d] = h + "px"), s)) {
          var m, w;
          const E =
              ((m = window.visualViewport) == null ? void 0 : m.offsetLeft) ||
              0,
            A =
              ((w = window.visualViewport) == null ? void 0 : w.offsetTop) || 0;
          Object.assign(a, {
            position: "fixed",
            top: -(y - Math.floor(A)) + "px",
            left: -(g - Math.floor(E)) + "px",
            right: "0",
          });
        }
        return () => {
          eh.delete(l),
            eh.size === 0 &&
              (Object.assign(a, { overflow: "", [d]: "" }),
              s &&
                (Object.assign(a, {
                  position: "",
                  top: "",
                  left: "",
                  right: "",
                }),
                window.scrollTo(g, y)));
        };
      }, [l, r]),
      T.exports.createElement(
        "div",
        Cs({ ref: n }, i, {
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...i.style,
          },
        })
      )
    );
  });
function ew(e) {
  return nn(e.target) && e.target.tagName === "BUTTON";
}
function tw(e) {
  return ak(e);
}
function ez(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      dataRef: i,
      elements: { domReference: l },
    } = e,
    {
      enabled: s = !0,
      event: a = "click",
      toggle: f = !0,
      ignoreMouse: d = !1,
      keyboardHandlers: h = !0,
    } = t,
    g = T.exports.useRef(),
    y = T.exports.useRef(!1);
  return T.exports.useMemo(
    () =>
      s
        ? {
            reference: {
              onPointerDown(m) {
                g.current = m.pointerType;
              },
              onMouseDown(m) {
                m.button === 0 &&
                  ((Kc(g.current, !0) && d) ||
                    (a !== "click" &&
                      (n &&
                      f &&
                      (i.current.openEvent
                        ? i.current.openEvent.type === "mousedown"
                        : !0)
                        ? r(!1, m.nativeEvent)
                        : (m.preventDefault(), r(!0, m.nativeEvent)))));
              },
              onClick(m) {
                if (a === "mousedown" && g.current) {
                  g.current = void 0;
                  return;
                }
                (Kc(g.current, !0) && d) ||
                  (n &&
                  f &&
                  (i.current.openEvent
                    ? i.current.openEvent.type === "click"
                    : !0)
                    ? r(!1, m.nativeEvent)
                    : r(!0, m.nativeEvent));
              },
              onKeyDown(m) {
                (g.current = void 0),
                  !(m.defaultPrevented || !h || ew(m)) &&
                    (m.key === " " &&
                      !tw(l) &&
                      (m.preventDefault(), (y.current = !0)),
                    m.key === "Enter" && r(!(n && f), m.nativeEvent));
              },
              onKeyUp(m) {
                m.defaultPrevented ||
                  !h ||
                  ew(m) ||
                  tw(l) ||
                  (m.key === " " &&
                    y.current &&
                    ((y.current = !1), r(!(n && f), m.nativeEvent)));
              },
            },
          }
        : {},
    [s, i, a, d, h, l, f, n, r]
  );
}
const tz = lS["useInsertionEffect".toString()],
  nz = tz || ((e) => e());
function Ji(e) {
  const t = T.exports.useRef(() => {});
  return (
    nz(() => {
      t.current = e;
    }),
    T.exports.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current == null ? void 0 : t.current(...r);
    }, [])
  );
}
const rz = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick",
  },
  iz = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  oz = (e) => {
    var t, n;
    return {
      escapeKeyBubbles:
        typeof e == "boolean" ? e : (t = e?.escapeKey) != null ? t : !1,
      outsidePressBubbles:
        typeof e == "boolean" ? e : (n = e?.outsidePress) != null ? n : !0,
    };
  };
function Fk(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      onOpenChange: r,
      events: i,
      nodeId: l,
      elements: { reference: s, domReference: a, floating: f },
      dataRef: d,
    } = e,
    {
      enabled: h = !0,
      escapeKey: g = !0,
      outsidePress: y = !0,
      outsidePressEvent: m = "pointerdown",
      referencePress: w = !1,
      referencePressEvent: E = "pointerdown",
      ancestorScroll: A = !1,
      bubbles: v,
    } = t,
    S = ao(),
    _ = Ko() != null,
    P = Ji(typeof y == "function" ? y : () => !1),
    D = typeof y == "function" ? P : y,
    R = T.exports.useRef(!1),
    { escapeKeyBubbles: F, outsidePressBubbles: z } = oz(v),
    q = Ji((B) => {
      if (!n || !h || !g || B.key !== "Escape") return;
      const X = S ? Lo(S.nodesRef.current, l) : [];
      if (!F && (B.stopPropagation(), X.length > 0)) {
        let $ = !0;
        if (
          (X.forEach((H) => {
            var ie;
            if (
              (ie = H.context) != null &&
              ie.open &&
              !H.context.dataRef.current.__escapeKeyBubbles
            ) {
              $ = !1;
              return;
            }
          }),
          !$)
        )
          return;
      }
      i.emit("dismiss", {
        type: "escapeKey",
        data: { returnFocus: { preventScroll: !1 } },
      }),
        r(!1, q3(B) ? B.nativeEvent : B);
    }),
    K = Ji((B) => {
      const X = R.current;
      if (((R.current = !1), X || (typeof D == "function" && !D(B)))) return;
      const $ = sv(B),
        H = "[" + Zl("inert") + "]",
        ie = an(f).querySelectorAll(H);
      let oe = gt($) ? $ : null;
      for (; oe && !Rs(oe); ) {
        const J = jo(oe);
        if (J === an(f).body || !gt(J)) break;
        oe = J;
      }
      if (
        ie.length &&
        gt($) &&
        !G3($) &&
        !Lt($, f) &&
        Array.from(ie).every((J) => !Lt(oe, J))
      )
        return;
      if (nn($) && f) {
        const J = $.clientWidth > 0 && $.scrollWidth > $.clientWidth,
          ee = $.clientHeight > 0 && $.scrollHeight > $.clientHeight;
        let b = ee && B.offsetX > $.clientWidth;
        if (
          (ee &&
            Hn($).direction === "rtl" &&
            (b = B.offsetX <= $.offsetWidth - $.clientWidth),
          b || (J && B.offsetY > $.clientHeight))
        )
          return;
      }
      const ue =
        S &&
        Lo(S.nodesRef.current, l).some((J) => {
          var ee;
          return Qp(
            B,
            (ee = J.context) == null ? void 0 : ee.elements.floating
          );
        });
      if (Qp(B, f) || Qp(B, a) || ue) return;
      const U = S ? Lo(S.nodesRef.current, l) : [];
      if (U.length > 0) {
        let J = !0;
        if (
          (U.forEach((ee) => {
            var b;
            if (
              (b = ee.context) != null &&
              b.open &&
              !ee.context.dataRef.current.__outsidePressBubbles
            ) {
              J = !1;
              return;
            }
          }),
          !J)
        )
          return;
      }
      i.emit("dismiss", {
        type: "outsidePress",
        data: { returnFocus: _ ? { preventScroll: !0 } : lk(B) || uk(B) },
      }),
        r(!1, B);
    });
  return (
    T.exports.useEffect(() => {
      if (!n || !h) return;
      (d.current.__escapeKeyBubbles = F), (d.current.__outsidePressBubbles = z);
      function B(H) {
        r(!1, H);
      }
      const X = an(f);
      g && X.addEventListener("keydown", q), D && X.addEventListener(m, K);
      let $ = [];
      return (
        A &&
          (gt(a) && ($ = Zi(a)),
          gt(f) && ($ = $.concat(Zi(f))),
          !gt(s) &&
            s &&
            s.contextElement &&
            ($ = $.concat(Zi(s.contextElement)))),
        ($ = $.filter((H) => {
          var ie;
          return (
            H !== ((ie = X.defaultView) == null ? void 0 : ie.visualViewport)
          );
        })),
        $.forEach((H) => {
          H.addEventListener("scroll", B, { passive: !0 });
        }),
        () => {
          g && X.removeEventListener("keydown", q),
            D && X.removeEventListener(m, K),
            $.forEach((H) => {
              H.removeEventListener("scroll", B);
            });
        }
      );
    }, [d, f, a, s, g, D, m, n, r, A, h, F, z, q, K]),
    T.exports.useEffect(() => {
      R.current = !1;
    }, [D, m]),
    T.exports.useMemo(
      () =>
        h
          ? {
              reference: {
                onKeyDown: q,
                [rz[E]]: (B) => {
                  w &&
                    (i.emit("dismiss", {
                      type: "referencePress",
                      data: { returnFocus: !1 },
                    }),
                    r(!1, B.nativeEvent));
                },
              },
              floating: {
                onKeyDown: q,
                [iz[m]]: () => {
                  R.current = !0;
                },
              },
            }
          : {},
      [h, i, w, m, E, r, q]
    )
  );
}
function mv(e) {
  var t;
  e === void 0 && (e = {});
  const { open: n = !1, onOpenChange: r, nodeId: i } = e,
    [l, s] = T.exports.useState(null),
    a = ((t = e.elements) == null ? void 0 : t.reference) || l,
    f = h4(e),
    d = ao(),
    h = Ji((P, D) => {
      P && (y.current.openEvent = D), r?.(P, D);
    }),
    g = T.exports.useRef(null),
    y = T.exports.useRef({}),
    m = T.exports.useState(() => bk())[0],
    w = As(),
    E = T.exports.useCallback(
      (P) => {
        const D = gt(P)
          ? {
              getBoundingClientRect: () => P.getBoundingClientRect(),
              contextElement: P,
            }
          : P;
        f.refs.setReference(D);
      },
      [f.refs]
    ),
    A = T.exports.useCallback(
      (P) => {
        (gt(P) || P === null) && ((g.current = P), s(P)),
          (gt(f.refs.reference.current) ||
            f.refs.reference.current === null ||
            (P !== null && !gt(P))) &&
            f.refs.setReference(P);
      },
      [f.refs]
    ),
    v = T.exports.useMemo(
      () => ({
        ...f.refs,
        setReference: A,
        setPositionReference: E,
        domReference: g,
      }),
      [f.refs, A, E]
    ),
    S = T.exports.useMemo(
      () => ({ ...f.elements, domReference: a }),
      [f.elements, a]
    ),
    _ = T.exports.useMemo(
      () => ({
        ...f,
        refs: v,
        elements: S,
        dataRef: y,
        nodeId: i,
        floatingId: w,
        events: m,
        open: n,
        onOpenChange: h,
      }),
      [f, i, w, m, n, h, v, S]
    );
  return (
    Ke(() => {
      const P = d?.nodesRef.current.find((D) => D.id === i);
      P && (P.context = _);
    }),
    T.exports.useMemo(
      () => ({ ...f, context: _, refs: v, elements: S }),
      [f, v, S, _]
    )
  );
}
function th(e, t, n) {
  const r = new Map();
  return {
    ...(n === "floating" && { tabIndex: -1 }),
    ...e,
    ...t
      .map((i) => (i ? i[n] : null))
      .concat(e)
      .reduce(
        (i, l) => (
          l &&
            Object.entries(l).forEach((s) => {
              let [a, f] = s;
              if (a.indexOf("on") === 0) {
                if ((r.has(a) || r.set(a, []), typeof f == "function")) {
                  var d;
                  (d = r.get(a)) == null || d.push(f),
                    (i[a] = function () {
                      for (
                        var h, g = arguments.length, y = new Array(g), m = 0;
                        m < g;
                        m++
                      )
                        y[m] = arguments[m];
                      return (h = r.get(a)) == null
                        ? void 0
                        : h.map((w) => w(...y)).find((w) => w !== void 0);
                    });
                }
              } else i[a] = f;
            }),
          i
        ),
        {}
      ),
  };
}
function zk(e) {
  e === void 0 && (e = []);
  const t = e,
    n = T.exports.useCallback((l) => th(l, e, "reference"), t),
    r = T.exports.useCallback((l) => th(l, e, "floating"), t),
    i = T.exports.useCallback(
      (l) => th(l, e, "item"),
      e.map((l) => l?.item)
    );
  return T.exports.useMemo(
    () => ({ getReferenceProps: n, getFloatingProps: r, getItemProps: i }),
    [n, r, i]
  );
}
let nw = !1;
function Yf(e, t, n) {
  switch (e) {
    case "vertical":
      return t;
    case "horizontal":
      return n;
    default:
      return t || n;
  }
}
function rw(e, t) {
  return Yf(t, e === dv || e === Qf, e === Xl || e === Ps);
}
function nh(e, t, n) {
  return (
    Yf(t, e === Qf, n ? e === Xl : e === Ps) ||
    e === "Enter" ||
    e == " " ||
    e === ""
  );
}
function lz(e, t, n) {
  return Yf(t, n ? e === Xl : e === Ps, e === Qf);
}
function iw(e, t, n) {
  return Yf(t, n ? e === Ps : e === Xl, e === dv);
}
function uz(e, t) {
  const {
      open: n,
      onOpenChange: r,
      refs: i,
      elements: { domReference: l, floating: s },
    } = e,
    {
      listRef: a,
      activeIndex: f,
      onNavigate: d = () => {},
      enabled: h = !0,
      selectedIndex: g = null,
      allowEscape: y = !1,
      loop: m = !1,
      nested: w = !1,
      rtl: E = !1,
      virtual: A = !1,
      focusItemOnOpen: v = "auto",
      focusItemOnHover: S = !0,
      openOnArrowKeyDown: _ = !0,
      disabledIndices: P = void 0,
      orientation: D = "vertical",
      cols: R = 1,
      scrollItemIntoView: F = !0,
      virtualItemRef: z,
    } = t,
    q = Ko(),
    K = ao(),
    B = Ji(d),
    X = T.exports.useRef(v),
    $ = T.exports.useRef(g ?? -1),
    H = T.exports.useRef(null),
    ie = T.exports.useRef(!0),
    oe = T.exports.useRef(B),
    ue = T.exports.useRef(!!s),
    U = T.exports.useRef(!1),
    J = T.exports.useRef(!1),
    ee = En(P),
    b = En(n),
    O = En(F),
    [fe, ve] = T.exports.useState(),
    [Ae, de] = T.exports.useState(),
    Oe = Ji(function (Te, Ue, $e) {
      $e === void 0 && ($e = !1);
      const We = Te.current[Ue.current];
      !We ||
        (A
          ? (ve(We.id),
            K?.events.emit("virtualfocus", We),
            z && (z.current = We))
          : oi(We, {
              preventScroll: !0,
              sync: V3() && sk() ? nw || U.current : !1,
            }),
        requestAnimationFrame(() => {
          const yt = O.current;
          yt &&
            We &&
            ($e || !ie.current) &&
            (We.scrollIntoView == null ||
              We.scrollIntoView(
                typeof yt == "boolean"
                  ? { block: "nearest", inline: "nearest" }
                  : yt
              ));
        }));
    });
  Ke(() => {
    document.createElement("div").focus({
      get preventScroll() {
        return (nw = !0), !1;
      },
    });
  }, []),
    Ke(() => {
      !h ||
        (n && s
          ? X.current && g != null && ((J.current = !0), B(g))
          : ue.current && (($.current = -1), oe.current(null)));
    }, [h, n, s, g, B]),
    Ke(() => {
      if (!!h && n && s)
        if (f == null) {
          if (((U.current = !1), g != null)) return;
          if (
            (ue.current && (($.current = -1), Oe(a, $)),
            !ue.current &&
              X.current &&
              (H.current != null || (X.current === !0 && H.current == null)))
          ) {
            let Te = 0;
            const Ue = () => {
              a.current[0] == null
                ? (Te < 2 && (Te ? requestAnimationFrame : queueMicrotask)(Ue),
                  Te++)
                : (($.current =
                    H.current == null || nh(H.current, D, E) || w
                      ? Yp(a, ee.current)
                      : Kx(a, ee.current)),
                  (H.current = null),
                  B($.current));
            };
            Ue();
          }
        } else
          Zu(a, f) || (($.current = f), Oe(a, $, J.current), (J.current = !1));
    }, [h, n, s, f, g, w, a, D, E, B, Oe, ee]),
    Ke(() => {
      var Te, Ue;
      if (!h || s || !K || A || !ue.current) return;
      const $e = K.nodesRef.current,
        We =
          (Te = $e.find((he) => he.id === q)) == null ||
          (Ue = Te.context) == null
            ? void 0
            : Ue.elements.floating,
        yt = zi(an(s)),
        qn = $e.some(
          (he) => he.context && Lt(he.context.elements.floating, yt)
        );
      We && !qn && ie.current && We.focus({ preventScroll: !0 });
    }, [h, s, K, q, A]),
    Ke(() => {
      if (!h || !K || !A || q) return;
      function Te(Ue) {
        de(Ue.id), z && (z.current = Ue);
      }
      return (
        K.events.on("virtualfocus", Te),
        () => {
          K.events.off("virtualfocus", Te);
        }
      );
    }, [h, K, A, q, z]),
    Ke(() => {
      (oe.current = B), (ue.current = !!s);
    }),
    Ke(() => {
      n || (H.current = null);
    }, [n]);
  const ye = f != null,
    Fe = T.exports.useMemo(() => {
      function Te($e) {
        if (!n) return;
        const We = a.current.indexOf($e);
        We !== -1 && B(We);
      }
      return {
        onFocus($e) {
          let { currentTarget: We } = $e;
          Te(We);
        },
        onClick: ($e) => {
          let { currentTarget: We } = $e;
          return We.focus({ preventScroll: !0 });
        },
        ...(S && {
          onMouseMove($e) {
            let { currentTarget: We } = $e;
            Te(We);
          },
          onPointerLeave($e) {
            let { pointerType: We } = $e;
            !ie.current ||
              We === "touch" ||
              (($.current = -1),
              Oe(a, $),
              B(null),
              A || oi(i.floating.current, { preventScroll: !0 }));
          },
        }),
      };
    }, [n, i, Oe, S, a, B, A]);
  return T.exports.useMemo(() => {
    if (!h) return {};
    const Te = ee.current;
    function Ue(he) {
      if (
        ((ie.current = !1),
        (U.current = !0),
        !b.current && he.currentTarget === i.floating.current)
      )
        return;
      if (w && iw(he.key, D, E)) {
        Ht(he), r(!1, he.nativeEvent), nn(l) && !A && l.focus();
        return;
      }
      const ut = $.current,
        zt = Yp(a, Te),
        pn = Kx(a, Te);
      if (
        (he.key === "Home" && (Ht(he), ($.current = zt), B($.current)),
        he.key === "End" && (Ht(he), ($.current = pn), B($.current)),
        !(
          R > 1 &&
          (($.current = D4(a, {
            event: he,
            orientation: D,
            loop: m,
            cols: R,
            disabledIndices: Te,
            minIndex: zt,
            maxIndex: pn,
            prevIndex: $.current,
            stopEvent: !0,
          })),
          B($.current),
          D === "both")
        ) && rw(he.key, D))
      ) {
        if (
          (Ht(he),
          n && !A && zi(he.currentTarget.ownerDocument) === he.currentTarget)
        ) {
          ($.current = nh(he.key, D, E) ? zt : pn), B($.current);
          return;
        }
        nh(he.key, D, E)
          ? m
            ? ($.current =
                ut >= pn
                  ? y && ut !== a.current.length
                    ? -1
                    : zt
                  : Zt(a, { startingIndex: ut, disabledIndices: Te }))
            : ($.current = Math.min(
                pn,
                Zt(a, { startingIndex: ut, disabledIndices: Te })
              ))
          : m
          ? ($.current =
              ut <= zt
                ? y && ut !== -1
                  ? a.current.length
                  : pn
                : Zt(a, {
                    startingIndex: ut,
                    decrement: !0,
                    disabledIndices: Te,
                  }))
          : ($.current = Math.max(
              zt,
              Zt(a, { startingIndex: ut, decrement: !0, disabledIndices: Te })
            )),
          Zu(a, $.current) ? B(null) : B($.current);
      }
    }
    function $e(he) {
      v === "auto" && lk(he.nativeEvent) && (X.current = !0);
    }
    function We(he) {
      (X.current = v), v === "auto" && uk(he.nativeEvent) && (X.current = !0);
    }
    const yt = A && n && ye && { "aria-activedescendant": Ae || fe },
      qn = a.current.find((he) => he?.id === fe);
    return {
      reference: {
        ...yt,
        onKeyDown(he) {
          ie.current = !1;
          const ut = he.key.indexOf("Arrow") === 0,
            zt = lz(he.key, D, E),
            pn = iw(he.key, D, E),
            Gn = rw(he.key, D),
            Vt = (w ? zt : Gn) || he.key === "Enter" || he.key.trim() === "";
          if (A && n) {
            const Pr = K?.nodesRef.current.find((Qn) => Qn.parentId == null),
              Kn = K && Pr ? V4(K.nodesRef.current, Pr.id) : null;
            if (ut && Kn && z) {
              const Qn = new KeyboardEvent("keydown", {
                key: he.key,
                bubbles: !0,
              });
              if (zt || pn) {
                var vr, qr;
                const W =
                    ((vr = Kn.context) == null
                      ? void 0
                      : vr.elements.domReference) === he.currentTarget,
                  re =
                    pn && !W
                      ? (qr = Kn.context) == null
                        ? void 0
                        : qr.elements.domReference
                      : zt
                      ? qn
                      : null;
                re && (Ht(he), re.dispatchEvent(Qn), de(void 0));
              }
              if (
                Gn &&
                Kn.context &&
                Kn.context.open &&
                Kn.parentId &&
                he.currentTarget !== Kn.context.elements.domReference
              ) {
                var Yo;
                Ht(he),
                  (Yo = Kn.context.elements.domReference) == null ||
                    Yo.dispatchEvent(Qn);
                return;
              }
            }
            return Ue(he);
          }
          if (!(!n && !_ && ut)) {
            if ((Vt && (H.current = w && Gn ? null : he.key), w)) {
              zt &&
                (Ht(he),
                n
                  ? (($.current = Yp(a, Te)), B($.current))
                  : r(!0, he.nativeEvent));
              return;
            }
            Gn &&
              (g != null && ($.current = g),
              Ht(he),
              !n && _ ? r(!0, he.nativeEvent) : Ue(he),
              n && B($.current));
          }
        },
        onFocus() {
          n && B(null);
        },
        onPointerDown: We,
        onMouseDown: $e,
        onClick: $e,
      },
      floating: {
        "aria-orientation": D === "both" ? void 0 : D,
        ...yt,
        onKeyDown: Ue,
        onPointerMove() {
          ie.current = !0;
        },
      },
      item: Fe,
    };
  }, [
    l,
    i,
    fe,
    Ae,
    ee,
    b,
    a,
    h,
    D,
    E,
    A,
    n,
    ye,
    w,
    g,
    _,
    y,
    R,
    m,
    v,
    B,
    r,
    Fe,
    K,
    z,
  ]);
}
function sz(e, t) {
  t === void 0 && (t = {});
  const { open: n, floatingId: r } = e,
    { enabled: i = !0, role: l = "dialog" } = t,
    s = As();
  return T.exports.useMemo(() => {
    const a = { id: r, role: l };
    return i
      ? l === "tooltip"
        ? { reference: { "aria-describedby": n ? r : void 0 }, floating: a }
        : {
            reference: {
              "aria-expanded": n ? "true" : "false",
              "aria-haspopup": l === "alertdialog" ? "dialog" : l,
              "aria-controls": n ? r : void 0,
              ...(l === "listbox" && { role: "combobox" }),
              ...(l === "menu" && { id: s }),
            },
            floating: { ...a, ...(l === "menu" && { "aria-labelledby": s }) },
          }
      : {};
  }, [i, l, n, r, s]);
}
const ow = (e) =>
  e.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    (t, n) => (n ? "-" : "") + t.toLowerCase()
  );
function hl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function az(e, t) {
  const [n, r] = T.exports.useState(e);
  return (
    e && !n && r(!0),
    T.exports.useEffect(() => {
      if (!e) {
        const i = setTimeout(() => r(!1), t);
        return () => clearTimeout(i);
      }
    }, [e, t]),
    n
  );
}
function cz(e, t) {
  t === void 0 && (t = {});
  const {
      open: n,
      elements: { floating: r },
    } = e,
    { duration: i = 250 } = t,
    s = (typeof i == "number" ? i : i.close) || 0,
    [a, f] = T.exports.useState(!1),
    [d, h] = T.exports.useState("unmounted"),
    g = az(n, s);
  return (
    Ke(() => {
      a && !g && h("unmounted");
    }, [a, g]),
    Ke(() => {
      if (!!r)
        if (n) {
          h("initial");
          const y = requestAnimationFrame(() => {
            h("open");
          });
          return () => {
            cancelAnimationFrame(y);
          };
        } else f(!0), h("close");
    }, [n, r]),
    { isMounted: g, status: d }
  );
}
function vv(e, t) {
  t === void 0 && (t = {});
  const {
      initial: n = { opacity: 0 },
      open: r,
      close: i,
      common: l,
      duration: s = 250,
    } = t,
    a = e.placement,
    f = a.split("-")[0],
    d = T.exports.useMemo(() => ({ side: f, placement: a }), [f, a]),
    h = typeof s == "number",
    g = (h ? s : s.open) || 0,
    y = (h ? s : s.close) || 0,
    [m, w] = T.exports.useState(() => ({ ...hl(l, d), ...hl(n, d) })),
    { isMounted: E, status: A } = cz(e, { duration: s }),
    v = En(n),
    S = En(r),
    _ = En(i),
    P = En(l);
  return (
    Ke(() => {
      const D = hl(v.current, d),
        R = hl(_.current, d),
        F = hl(P.current, d),
        z =
          hl(S.current, d) ||
          Object.keys(D).reduce((q, K) => ((q[K] = ""), q), {});
      if (
        (A === "initial" &&
          w((q) => ({ transitionProperty: q.transitionProperty, ...F, ...D })),
        A === "open" &&
          w({
            transitionProperty: Object.keys(z).map(ow).join(","),
            transitionDuration: g + "ms",
            ...F,
            ...z,
          }),
        A === "close")
      ) {
        const q = R || D;
        w({
          transitionProperty: Object.keys(q).map(ow).join(","),
          transitionDuration: y + "ms",
          ...F,
          ...q,
        });
      }
    }, [y, _, v, S, P, g, A, d]),
    { isMounted: E, styles: m }
  );
}
function fz(e, t) {
  var n;
  const { open: r, dataRef: i } = e,
    {
      listRef: l,
      activeIndex: s,
      onMatch: a,
      onTypingChange: f,
      enabled: d = !0,
      findMatch: h = null,
      resetMs: g = 750,
      ignoreKeys: y = [],
      selectedIndex: m = null,
    } = t,
    w = T.exports.useRef(),
    E = T.exports.useRef(""),
    A = T.exports.useRef((n = m ?? s) != null ? n : -1),
    v = T.exports.useRef(null),
    S = Ji(a),
    _ = Ji(f),
    P = En(h),
    D = En(y);
  return (
    Ke(() => {
      r && (clearTimeout(w.current), (v.current = null), (E.current = ""));
    }, [r]),
    Ke(() => {
      if (r && E.current === "") {
        var R;
        A.current = (R = m ?? s) != null ? R : -1;
      }
    }, [r, m, s]),
    T.exports.useMemo(() => {
      if (!d) return {};
      function R(q) {
        q
          ? i.current.typing || ((i.current.typing = q), _(q))
          : i.current.typing && ((i.current.typing = q), _(q));
      }
      function F(q, K, B) {
        const X = P.current
          ? P.current(K, B)
          : K.find(
              ($) => $?.toLocaleLowerCase().indexOf(B.toLocaleLowerCase()) === 0
            );
        return X ? q.indexOf(X) : -1;
      }
      function z(q) {
        const K = l.current;
        if (
          (E.current.length > 0 &&
            E.current[0] !== " " &&
            (F(K, K, E.current) === -1 ? R(!1) : q.key === " " && Ht(q)),
          K == null ||
            D.current.includes(q.key) ||
            q.key.length !== 1 ||
            q.ctrlKey ||
            q.metaKey ||
            q.altKey)
        )
          return;
        r && q.key !== " " && (Ht(q), R(!0)),
          K.every((H) => {
            var ie, oe;
            return H
              ? ((ie = H[0]) == null ? void 0 : ie.toLocaleLowerCase()) !==
                  ((oe = H[1]) == null ? void 0 : oe.toLocaleLowerCase())
              : !0;
          }) &&
            E.current === q.key &&
            ((E.current = ""), (A.current = v.current)),
          (E.current += q.key),
          clearTimeout(w.current),
          (w.current = setTimeout(() => {
            (E.current = ""), (A.current = v.current), R(!1);
          }, g));
        const X = A.current,
          $ = F(
            K,
            [...K.slice((X || 0) + 1), ...K.slice(0, (X || 0) + 1)],
            E.current
          );
        $ !== -1
          ? (S($), (v.current = $))
          : q.key !== " " && ((E.current = ""), R(!1));
      }
      return {
        reference: { onKeyDown: z },
        floating: {
          onKeyDown: z,
          onKeyUp(q) {
            q.key === " " && R(!1);
          },
        },
      };
    }, [d, r, i, l, g, D, P, S, _])
  );
}
function lw(e, t) {
  const [n, r] = e;
  let i = !1;
  const l = t.length;
  for (let s = 0, a = l - 1; s < l; a = s++) {
    const [f, d] = t[s] || [0, 0],
      [h, g] = t[a] || [0, 0];
    d >= r != g >= r && n <= ((h - f) * (r - d)) / (g - d) + f && (i = !i);
  }
  return i;
}
function dz(e, t) {
  return (
    e[0] >= t.x &&
    e[0] <= t.x + t.width &&
    e[1] >= t.y &&
    e[1] <= t.y + t.height
  );
}
function pz(e) {
  e === void 0 && (e = {});
  const {
    buffer: t = 0.5,
    blockPointerEvents: n = !1,
    requireIntent: r = !0,
  } = e;
  let i,
    l = !1,
    s = null,
    a = null,
    f = performance.now();
  function d(g, y) {
    const m = performance.now(),
      w = m - f;
    if (s === null || a === null || w === 0)
      return (s = g), (a = y), (f = m), null;
    const E = g - s,
      A = y - a,
      S = Math.sqrt(E * E + A * A) / w;
    return (s = g), (a = y), (f = m), S;
  }
  const h = (g) => {
    let {
      x: y,
      y: m,
      placement: w,
      elements: E,
      onClose: A,
      nodeId: v,
      tree: S,
    } = g;
    return function (P) {
      function D() {
        clearTimeout(i), A();
      }
      if (
        (clearTimeout(i),
        !E.domReference || !E.floating || w == null || y == null || m == null)
      )
        return;
      const { clientX: R, clientY: F } = P,
        z = [R, F],
        q = sv(P),
        K = P.type === "mouseleave",
        B = Lt(E.floating, q),
        X = Lt(E.domReference, q),
        $ = E.domReference.getBoundingClientRect(),
        H = E.floating.getBoundingClientRect(),
        ie = w.split("-")[0],
        oe = y > H.right - H.width / 2,
        ue = m > H.bottom - H.height / 2,
        U = dz(z, $),
        J = H.width > $.width,
        ee = H.height > $.height,
        b = (J ? $ : H).left,
        O = (J ? $ : H).right,
        fe = (ee ? $ : H).top,
        ve = (ee ? $ : H).bottom;
      if (B && ((l = !0), !K)) return;
      if ((X && (l = !1), X && !K)) {
        l = !0;
        return;
      }
      if (
        (K && gt(P.relatedTarget) && Lt(E.floating, P.relatedTarget)) ||
        (S &&
          Lo(S.nodesRef.current, v).some((Oe) => {
            let { context: ye } = Oe;
            return ye?.open;
          }))
      )
        return;
      if (
        (ie === "top" && m >= $.bottom - 1) ||
        (ie === "bottom" && m <= $.top + 1) ||
        (ie === "left" && y >= $.right - 1) ||
        (ie === "right" && y <= $.left + 1)
      )
        return D();
      let Ae = [];
      switch (ie) {
        case "top":
          Ae = [
            [b, $.top + 1],
            [b, H.bottom - 1],
            [O, H.bottom - 1],
            [O, $.top + 1],
          ];
          break;
        case "bottom":
          Ae = [
            [b, H.top + 1],
            [b, $.bottom - 1],
            [O, $.bottom - 1],
            [O, H.top + 1],
          ];
          break;
        case "left":
          Ae = [
            [H.right - 1, ve],
            [H.right - 1, fe],
            [$.left + 1, fe],
            [$.left + 1, ve],
          ];
          break;
        case "right":
          Ae = [
            [$.right - 1, ve],
            [$.right - 1, fe],
            [H.left + 1, fe],
            [H.left + 1, ve],
          ];
          break;
      }
      function de(Oe) {
        let [ye, Fe] = Oe;
        switch (ie) {
          case "top": {
            const Te = [
                J ? ye + t / 2 : oe ? ye + t * 4 : ye - t * 4,
                Fe + t + 1,
              ],
              Ue = [J ? ye - t / 2 : oe ? ye + t * 4 : ye - t * 4, Fe + t + 1],
              $e = [
                [H.left, oe || J ? H.bottom - t : H.top],
                [H.right, oe ? (J ? H.bottom - t : H.top) : H.bottom - t],
              ];
            return [Te, Ue, ...$e];
          }
          case "bottom": {
            const Te = [J ? ye + t / 2 : oe ? ye + t * 4 : ye - t * 4, Fe - t],
              Ue = [J ? ye - t / 2 : oe ? ye + t * 4 : ye - t * 4, Fe - t],
              $e = [
                [H.left, oe || J ? H.top + t : H.bottom],
                [H.right, oe ? (J ? H.top + t : H.bottom) : H.top + t],
              ];
            return [Te, Ue, ...$e];
          }
          case "left": {
            const Te = [
                ye + t + 1,
                ee ? Fe + t / 2 : ue ? Fe + t * 4 : Fe - t * 4,
              ],
              Ue = [ye + t + 1, ee ? Fe - t / 2 : ue ? Fe + t * 4 : Fe - t * 4];
            return [
              ...[
                [ue || ee ? H.right - t : H.left, H.top],
                [ue ? (ee ? H.right - t : H.left) : H.right - t, H.bottom],
              ],
              Te,
              Ue,
            ];
          }
          case "right": {
            const Te = [ye - t, ee ? Fe + t / 2 : ue ? Fe + t * 4 : Fe - t * 4],
              Ue = [ye - t, ee ? Fe - t / 2 : ue ? Fe + t * 4 : Fe - t * 4],
              $e = [
                [ue || ee ? H.left + t : H.right, H.top],
                [ue ? (ee ? H.left + t : H.right) : H.left + t, H.bottom],
              ];
            return [Te, Ue, ...$e];
          }
        }
      }
      if (!lw([R, F], Ae)) {
        if (l && !U) return D();
        if (!K && r) {
          const Oe = d(P.clientX, P.clientY);
          if (Oe !== null && Oe < 0.1) return D();
        }
        lw([R, F], de([y, m]))
          ? !l && r && (i = window.setTimeout(D, 40))
          : D();
      }
    };
  };
  return (h.__options = { blockPointerEvents: n }), h;
}
const hz = ({ infoVisible: e, setInfoVisible: t }) => {
    const { refs: n, context: r } = mv({ open: e, onOpenChange: t }),
      i = Fk(r, { outsidePressEvent: "mousedown" }),
      { isMounted: l, styles: s } = vv(r),
      { getFloatingProps: a } = zk([i]);
    return V(bn, {
      children:
        l &&
        V(gv, {
          children: V(Nk, {
            lockScroll: !0,
            className: "useful-controls-dialog-overlay",
            "data-open": e,
            style: s,
            children: V(Mk, {
              context: r,
              children: we("div", {
                ref: n.setFloating,
                ...a(),
                className: "useful-controls-dialog",
                style: s,
                children: [
                  we("div", {
                    className: "useful-controls-dialog-title",
                    children: [
                      V("p", {
                        children: ot.ui_usefulcontrols || "Useful controls",
                      }),
                      V("div", {
                        className: "useful-controls-dialog-close",
                        onClick: () => t(!1),
                        children: V("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          height: "1em",
                          viewBox: "0 0 400 528",
                          children: V("path", {
                            d: "M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z",
                          }),
                        }),
                      }),
                    ],
                  }),
                  we("div", {
                    className: "useful-controls-content-wrapper",
                    children: [
                      we("p", {
                        children: [
                          V("kbd", { children: "RMB" }),
                          V("br", {}),
                          ot.ui_rmb,
                        ],
                      }),
                      we("p", {
                        children: [
                          V("kbd", { children: "ALT + LMB" }),
                          V("br", {}),
                          ot.ui_alt_lmb,
                        ],
                      }),
                      we("p", {
                        children: [
                          V("kbd", { children: "CTRL + LMB" }),
                          V("br", {}),
                          ot.ui_ctrl_lmb,
                        ],
                      }),
                      we("p", {
                        children: [
                          V("kbd", { children: "SHIFT + Drag" }),
                          V("br", {}),
                          ot.ui_shift_drag,
                        ],
                      }),
                      we("p", {
                        children: [
                          V("kbd", { children: "CTRL + SHIFT + LMB" }),
                          V("br", {}),
                          ot.ui_ctrl_shift_lmb,
                        ],
                      }),
                      V("div", {
                        style: { textAlign: "right" },
                        children: "🐂",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
    });
  },
  gz = () => {
    const e = yi(b3),
      t = ru(),
      [n, r] = T.exports.useState(!1),
      [, i] = dg(() => ({
        accept: "SLOT",
        drop: (a) => {
          a.inventory === "player" && iv(a.item);
        },
      })),
      [, l] = dg(() => ({
        accept: "SLOT",
        drop: (a) => {
          a.inventory === "player" && ek(a.item);
        },
      }));
    return we(bn, {
      children: [
        V(hz, { infoVisible: n, setInfoVisible: r }),
        V("div", {
          className: "inventory-control",
          children: we("div", {
            className: "inventory-control-wrapper",
            children: [
              V("input", {
                className: "inventory-control-input",
                type: "number",
                defaultValue: e,
                onChange: (a) => {
                  (a.target.valueAsNumber =
                    isNaN(a.target.valueAsNumber) || a.target.valueAsNumber < 0
                      ? 0
                      : Math.floor(a.target.valueAsNumber)),
                    t(y3(a.target.valueAsNumber));
                },
                min: 0,
              }),
              V("button", {
                className: "inventory-control-button",
                ref: i,
                children: ot.ui_use || "Use",
              }),
              V("button", {
                className: "inventory-control-button",
                ref: l,
                children: ot.ui_give || "Give",
              }),
              V("button", {
                className: "inventory-control-button",
                onClick: () => cr("exit"),
                children: ot.ui_close || "Close",
              }),
            ],
          }),
        }),
        // V("button", {
        //   className: "useful-controls-button",
        //   onClick: () => r(!0),
        //   children: V("svg", {
        //     xmlns: "http://www.w3.org/2000/svg",
        //     height: "2em",
        //     viewBox: "0 0 524 524",
        //     children: V("path", {
        //       d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
        //     }),
        //   }),
        // }),
      ],
    });
  },
  rh = (e, t, n) => {
    let r = e * n,
      i = t * (1 - n);
    return r + i;
  },
  Wa = (e, t, n) => {
    let r = rh(e[0], t[0], n),
      i = rh(e[1], t[1], n),
      l = rh(e[2], t[2], n);
    return `rgb(${r}, ${i}, ${l})`;
  },
  Pi = {
    primaryColor: [231, 76, 60],
    secondColor: [39, 174, 96],
    accentColor: [211, 84, 0],
  },
  yv = ({ percent: e, durability: t }) => {
    const n = be.useMemo(
      () =>
        t
          ? e < 50
            ? Wa(Pi.accentColor, Pi.primaryColor, e / 100)
            : Wa(Pi.secondColor, Pi.accentColor, e / 100)
          : e > 50
          ? Wa(Pi.primaryColor, Pi.accentColor, e / 100)
          : Wa(Pi.accentColor, Pi.secondColor, e / 50),
      [t, e]
    );
    return V("div", {
      className: t ? "durability-bar" : "weight-bar",
      children: V("div", {
        style: {
          visibility: e > 0 ? "visible" : "hidden",
          height: "100%",
          width: `${e}%`,
          backgroundColor: n,
          transition: `background ${0.3}s ease, width ${0.3}s ease`,
        },
      }),
    });
  };
function Eg(e, t) {
  return (
    (Eg = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Eg(e, t)
  );
}
function xv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Eg(e, t);
}
var Se = { exports: {} },
  mz = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  vz = mz,
  yz = vz;
function $k() {}
function Bk() {}
Bk.resetWarningCache = $k;
var xz = function () {
  function e(r, i, l, s, a, f) {
    if (f !== yz) {
      var d = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((d.name = "Invariant Violation"), d);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Bk,
    resetWarningCache: $k,
  };
  return (n.PropTypes = n), n;
};
Se.exports = xz();
function wz(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " "
      ) !== -1;
}
function Sz(e, t) {
  e.classList
    ? e.classList.add(t)
    : wz(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t
          ));
}
function uw(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Ez(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
    ? (e.className = uw(e.className, t))
    : e.setAttribute(
        "class",
        uw((e.className && e.className.baseVal) || "", t)
      );
}
const sw = { disabled: !1 },
  Jc = be.createContext(null);
var Uk = function (t) {
    return t.scrollTop;
  },
  zu = "unmounted",
  ko = "exited",
  _o = "entering",
  ml = "entered",
  Cg = "exiting",
  wi = (function (e) {
    xv(t, e);
    function t(r, i) {
      var l;
      l = e.call(this, r, i) || this;
      var s = i,
        a = s && !s.isMounting ? r.enter : r.appear,
        f;
      return (
        (l.appearStatus = null),
        r.in
          ? a
            ? ((f = ko), (l.appearStatus = _o))
            : (f = ml)
          : r.unmountOnExit || r.mountOnEnter
          ? (f = zu)
          : (f = ko),
        (l.state = { status: f }),
        (l.nextCallback = null),
        l
      );
    }
    t.getDerivedStateFromProps = function (i, l) {
      var s = i.in;
      return s && l.status === zu ? { status: ko } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var l = null;
        if (i !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== _o && s !== ml && (l = _o)
            : (s === _o || s === ml) && (l = Cg);
        }
        this.updateStatus(!1, l);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          l,
          s,
          a;
        return (
          (l = s = a = i),
          i != null &&
            typeof i != "number" &&
            ((l = i.exit),
            (s = i.enter),
            (a = i.appear !== void 0 ? i.appear : s)),
          { exit: l, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (i, l) {
        if ((i === void 0 && (i = !1), l !== null))
          if ((this.cancelNextCallback(), l === _o)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ba.findDOMNode(this);
              s && Uk(s);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === ko &&
            this.setState({ status: zu });
      }),
      (n.performEnter = function (i) {
        var l = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          f = this.props.nodeRef ? [a] : [Ba.findDOMNode(this), a],
          d = f[0],
          h = f[1],
          g = this.getTimeouts(),
          y = a ? g.appear : g.enter;
        if ((!i && !s) || sw.disabled) {
          this.safeSetState({ status: ml }, function () {
            l.props.onEntered(d);
          });
          return;
        }
        this.props.onEnter(d, h),
          this.safeSetState({ status: _o }, function () {
            l.props.onEntering(d, h),
              l.onTransitionEnd(y, function () {
                l.safeSetState({ status: ml }, function () {
                  l.props.onEntered(d, h);
                });
              });
          });
      }),
      (n.performExit = function () {
        var i = this,
          l = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Ba.findDOMNode(this);
        if (!l || sw.disabled) {
          this.safeSetState({ status: ko }, function () {
            i.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Cg }, function () {
            i.props.onExiting(a),
              i.onTransitionEnd(s.exit, function () {
                i.safeSetState({ status: ko }, function () {
                  i.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, l) {
        (l = this.setNextCallback(l)), this.setState(i, l);
      }),
      (n.setNextCallback = function (i) {
        var l = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (l.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, l) {
        this.setNextCallback(l);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ba.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var f = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            d = f[0],
            h = f[1];
          this.props.addEndListener(d, h);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === zu) return null;
        var l = this.props,
          s = l.children;
        l.in,
          l.mountOnEnter,
          l.unmountOnExit,
          l.appear,
          l.enter,
          l.exit,
          l.timeout,
          l.addEndListener,
          l.onEnter,
          l.onEntering,
          l.onEntered,
          l.onExit,
          l.onExiting,
          l.onExited,
          l.nodeRef;
        var a = Am(l, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return be.createElement(
          Jc.Provider,
          { value: null },
          typeof s == "function"
            ? s(i, a)
            : be.cloneElement(be.Children.only(s), a)
        );
      }),
      t
    );
  })(be.Component);
wi.contextType = Jc;
wi.propTypes = {};
function gl() {}
wi.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: gl,
  onEntering: gl,
  onEntered: gl,
  onExit: gl,
  onExiting: gl,
  onExited: gl,
};
wi.UNMOUNTED = zu;
wi.EXITED = ko;
wi.ENTERING = _o;
wi.ENTERED = ml;
wi.EXITING = Cg;
const Cz = wi;
var kz = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return Sz(t, r);
      })
    );
  },
  ih = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return Ez(t, r);
      })
    );
  },
  wv = (function (e) {
    xv(t, e);
    function t() {
      for (var r, i = arguments.length, l = new Array(i), s = 0; s < i; s++)
        l[s] = arguments[s];
      return (
        (r = e.call.apply(e, [this].concat(l)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (a, f) {
          var d = r.resolveArguments(a, f),
            h = d[0],
            g = d[1];
          r.removeClasses(h, "exit"),
            r.addClass(h, g ? "appear" : "enter", "base"),
            r.props.onEnter && r.props.onEnter(a, f);
        }),
        (r.onEntering = function (a, f) {
          var d = r.resolveArguments(a, f),
            h = d[0],
            g = d[1],
            y = g ? "appear" : "enter";
          r.addClass(h, y, "active"),
            r.props.onEntering && r.props.onEntering(a, f);
        }),
        (r.onEntered = function (a, f) {
          var d = r.resolveArguments(a, f),
            h = d[0],
            g = d[1],
            y = g ? "appear" : "enter";
          r.removeClasses(h, y),
            r.addClass(h, y, "done"),
            r.props.onEntered && r.props.onEntered(a, f);
        }),
        (r.onExit = function (a) {
          var f = r.resolveArguments(a),
            d = f[0];
          r.removeClasses(d, "appear"),
            r.removeClasses(d, "enter"),
            r.addClass(d, "exit", "base"),
            r.props.onExit && r.props.onExit(a);
        }),
        (r.onExiting = function (a) {
          var f = r.resolveArguments(a),
            d = f[0];
          r.addClass(d, "exit", "active"),
            r.props.onExiting && r.props.onExiting(a);
        }),
        (r.onExited = function (a) {
          var f = r.resolveArguments(a),
            d = f[0];
          r.removeClasses(d, "exit"),
            r.addClass(d, "exit", "done"),
            r.props.onExited && r.props.onExited(a);
        }),
        (r.resolveArguments = function (a, f) {
          return r.props.nodeRef ? [r.props.nodeRef.current, a] : [a, f];
        }),
        (r.getClassNames = function (a) {
          var f = r.props.classNames,
            d = typeof f == "string",
            h = d && f ? f + "-" : "",
            g = d ? "" + h + a : f[a],
            y = d ? g + "-active" : f[a + "Active"],
            m = d ? g + "-done" : f[a + "Done"];
          return { baseClassName: g, activeClassName: y, doneClassName: m };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (i, l, s) {
        var a = this.getClassNames(l)[s + "ClassName"],
          f = this.getClassNames("enter"),
          d = f.doneClassName;
        l === "appear" && s === "done" && d && (a += " " + d),
          s === "active" && i && Uk(i),
          a && ((this.appliedClasses[l][s] = a), kz(i, a));
      }),
      (n.removeClasses = function (i, l) {
        var s = this.appliedClasses[l],
          a = s.base,
          f = s.active,
          d = s.done;
        (this.appliedClasses[l] = {}),
          a && ih(i, a),
          f && ih(i, f),
          d && ih(i, d);
      }),
      (n.render = function () {
        var i = this.props;
        i.classNames;
        var l = Am(i, ["classNames"]);
        return be.createElement(
          Cz,
          Mc({}, l, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          })
        );
      }),
      t
    );
  })(be.Component);
wv.defaultProps = { classNames: "" };
wv.propTypes = {};
const Hk = wv;
function _z(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Sv(e, t) {
  var n = function (l) {
      return t && T.exports.isValidElement(l) ? t(l) : l;
    },
    r = Object.create(null);
  return (
    e &&
      T.exports.Children.map(e, function (i) {
        return i;
      }).forEach(function (i) {
        r[i.key] = n(i);
      }),
    r
  );
}
function bz(e, t) {
  (e = e || {}), (t = t || {});
  function n(h) {
    return h in t ? t[h] : e[h];
  }
  var r = Object.create(null),
    i = [];
  for (var l in e) l in t ? i.length && ((r[l] = i), (i = [])) : i.push(l);
  var s,
    a = {};
  for (var f in t) {
    if (r[f])
      for (s = 0; s < r[f].length; s++) {
        var d = r[f][s];
        a[r[f][s]] = n(d);
      }
    a[f] = n(f);
  }
  for (s = 0; s < i.length; s++) a[i[s]] = n(i[s]);
  return a;
}
function Ro(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Oz(e, t) {
  return Sv(e.children, function (n) {
    return T.exports.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Ro(n, "appear", e),
      enter: Ro(n, "enter", e),
      exit: Ro(n, "exit", e),
    });
  });
}
function Iz(e, t, n) {
  var r = Sv(e.children),
    i = bz(t, r);
  return (
    Object.keys(i).forEach(function (l) {
      var s = i[l];
      if (!!T.exports.isValidElement(s)) {
        var a = l in t,
          f = l in r,
          d = t[l],
          h = T.exports.isValidElement(d) && !d.props.in;
        f && (!a || h)
          ? (i[l] = T.exports.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Ro(s, "exit", e),
              enter: Ro(s, "enter", e),
            }))
          : !f && a && !h
          ? (i[l] = T.exports.cloneElement(s, { in: !1 }))
          : f &&
            a &&
            T.exports.isValidElement(d) &&
            (i[l] = T.exports.cloneElement(s, {
              onExited: n.bind(null, s),
              in: d.props.in,
              exit: Ro(s, "exit", e),
              enter: Ro(s, "enter", e),
            }));
      }
    }),
    i
  );
}
var Tz =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  Rz = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Ev = (function (e) {
    xv(t, e);
    function t(r, i) {
      var l;
      l = e.call(this, r, i) || this;
      var s = l.handleExited.bind(_z(l));
      return (
        (l.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        l
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (i, l) {
        var s = l.children,
          a = l.handleExited,
          f = l.firstRender;
        return { children: f ? Oz(i, a) : Iz(i, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (i, l) {
        var s = Sv(this.props.children);
        i.key in s ||
          (i.props.onExited && i.props.onExited(l),
          this.mounted &&
            this.setState(function (a) {
              var f = Mc({}, a.children);
              return delete f[i.key], { children: f };
            }));
      }),
      (n.render = function () {
        var i = this.props,
          l = i.component,
          s = i.childFactory,
          a = Am(i, ["component", "childFactory"]),
          f = this.state.contextValue,
          d = Tz(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          l === null
            ? be.createElement(Jc.Provider, { value: f }, d)
            : be.createElement(
                Jc.Provider,
                { value: f },
                be.createElement(l, a, d)
              )
        );
      }),
      t
    );
  })(be.Component);
Ev.propTypes = {};
Ev.defaultProps = Rz;
const Pz = Ev,
  Az = (e) => {
    const t = be.useRef(null);
    return V(Hk, {
      nodeRef: t,
      in: e.in,
      timeout: 200,
      classNames: "transition-slide-up",
      unmountOnExit: !0,
      children: be.cloneElement(e.children, { ref: t }),
    });
  },
  Dz = () => {
    const [e, t] = T.exports.useState(!1),
      n = yi(YC).items.slice(0, 5),
      [r, i] = T.exports.useState();
    return (
      Br("toggleHotbar", () => {
        e
          ? t(!1)
          : (r && clearTimeout(r), t(!0), i(setTimeout(() => t(!1), 3e3)));
      }),
      V(Az, {
        in: e,
        children: V("div", {
          className: "hotbar-container",
          children: n.map((l) =>
            V(
              "div",
              {
                className: "hotbar-item-slot",
                style: { backgroundImage: `url(${l?.name ? zl(l) : "none"}` },
                children:
                  wn(l) &&
                  we("div", {
                    className: "item-slot-wrapper",
                    children: [
                      we("div", {
                        className: "hotbar-slot-header-wrapper",
                        children: [
                          V("div", {
                            className: "inventory-slot-number",
                            children: l.slot,
                          }),
                          we("div", {
                            className: "item-slot-info-wrapper",
                            children: [
                              V("p", {
                                children:
                                  l.weight > 0
                                    ? l.weight >= 1e3
                                      ? `${(l.weight / 1e3).toLocaleString(
                                          "en-us",
                                          { minimumFractionDigits: 2 }
                                        )}kg `
                                      : `${l.weight.toLocaleString("en-us", {
                                          minimumFractionDigits: 0,
                                        })}g `
                                    : "",
                              }),
                              V("p", {
                                children: l.count
                                  ? l.count.toLocaleString("en-us") + "x"
                                  : "",
                              }),
                            ],
                          }),
                        ],
                      }),
                      we("div", {
                        children: [
                          l?.durability !== void 0 &&
                            V(yv, { percent: l.durability, durability: !0 }),
                          V("div", {
                            className: "inventory-slot-label-box",
                            children: V("div", {
                              className: "inventory-slot-label-text",
                              children: l.metadata?.label
                                ? l.metadata.label
                                : ct[l.name]?.label || l.name,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              },
              `hotbar-${l.slot}`
            )
          ),
        }),
      })
    );
  },
  Lz = ["Escape"],
  Mz = (e) => {
    const t = T.exports.useRef(KC),
      n = ru();
    T.exports.useEffect(() => {
      t.current = e;
    }, [e]),
      T.exports.useEffect(() => {
        const r = (i) => {
          Lz.includes(i.code) && (t.current(!1), n(Xu()), n(JC()), cr("exit"));
        };
        return (
          window.addEventListener("keyup", r),
          () => window.removeEventListener("keyup", r)
        );
      }, []);
  },
  Nz = Zm(
    "inventory/validateMove",
    async (e, { rejectWithValue: t, dispatch: n }) => {
      try {
        const r = await cr("swapItems", e);
        if (r === !1) return t(r);
        typeof r == "number" && n(k3(r));
      } catch {
        return t(!1);
      }
    }
  ),
  kg = (e, t) => {
    const { inventory: n } = Mn.getState(),
      { sourceInventory: r, targetInventory: i } = Wf(
        n,
        e.inventory,
        t?.inventory
      ),
      l = r.items[e.item.slot - 1],
      s = ct[l.name];
    if (s === void 0) return console.error(`${l.name} item data undefined!`);
    if (l.metadata?.container !== void 0) {
      if (i.type === en.CONTAINER)
        return console.log(
          `Cannot store container ${l.name} inside another container`
        );
      if (n.rightInventory.id === l.metadata.container)
        return console.log(`Cannot move container ${l.name} when opened`);
    }
    const a = t ? i.items[t.item.slot - 1] : a3(l, s, i.items);
    if (a === void 0) return console.error("Target slot undefined!");
    if (
      a.metadata?.container !== void 0 &&
      n.rightInventory.id === a.metadata.container
    )
      return console.log(
        `Cannot swap item ${l.name} with container ${a.name} when opened`
      );
    const f =
        n.shiftPressed && l.count > 1 && r.type !== "shop"
          ? Math.floor(l.count / 2)
          : n.itemAmount === 0 || n.itemAmount > l.count
          ? l.count
          : n.itemAmount,
      d = {
        fromSlot: l,
        toSlot: a,
        fromType: r.type,
        toType: i.type,
        count: f,
      };
    Mn.dispatch(Nz({ ...d, fromSlot: l.slot, toSlot: a.slot })),
      wn(a, !0)
        ? s.stack && s3(l, a)
          ? Mn.dispatch(E3({ ...d, toSlot: a }))
          : Mn.dispatch(w3({ ...d, toSlot: a }))
        : Mn.dispatch(S3(d));
  },
  Fz = Zm("inventory/buyItem", async (e, { rejectWithValue: t }) => {
    try {
      const n = await cr("buyItem", e);
      if (n === !1) return t(n);
    } catch {
      return t(!1);
    }
  }),
  zz = (e, t) => {
    const { inventory: n } = Mn.getState(),
      r = n.rightInventory,
      i = n.leftInventory,
      l = r.items[e.item.slot - 1];
    if (!wn(l)) throw new Error(`Item ${l.slot} name === undefined`);
    if (l.count === 0) return;
    if (ct[l.name] === void 0)
      return console.error(`Item ${l.name} data undefined!`);
    const a = i.items[t.item.slot - 1];
    if (a === void 0) return console.error("Target slot undefined");
    const f =
        n.itemAmount !== 0
          ? l.count && n.itemAmount > l.count
            ? l.count
            : n.itemAmount
          : 1,
      d = {
        fromSlot: l,
        toSlot: a,
        fromType: r.type,
        toType: i.type,
        count: f,
      };
    Mn.dispatch(Fz({ ...d, fromSlot: l.slot, toSlot: a.slot }));
  },
  $z = Zm("inventory/craftItem", async (e, { rejectWithValue: t }) => {
    try {
      const n = await cr("craftItem", e);
      if (n === !1) return t(n);
    } catch {
      return t(!1);
    }
  }),
  Bz = (e, t) => {
    const { inventory: n } = Mn.getState(),
      r = n.rightInventory,
      i = n.leftInventory,
      l = r.items[e.item.slot - 1];
    if (!wn(l)) throw new Error(`Item ${l.slot} name === undefined`);
    if (l.count === 0) return;
    if (ct[l.name] === void 0)
      return console.error(`Item ${l.name} data undefined!`);
    const a = i.items[t.item.slot - 1];
    if (a === void 0) return console.error("Target slot undefined");
    const f = n.itemAmount === 0 ? 1 : n.itemAmount,
      d = {
        fromSlot: l,
        toSlot: a,
        fromType: r.type,
        toType: i.type,
        count: f,
      };
    Mn.dispatch($z({ ...d, fromSlot: l.slot, toSlot: a.slot }));
  },
  Uz = (
    { item: e, inventoryId: t, inventoryType: n, inventoryGroups: r },
    i
  ) => {
    const l = vi(),
      s = ru(),
      a = T.exports.useRef(null),
      f = be.useCallback(
        () => Fx(e, { type: n, groups: r }) && zx(e, n),
        [e, n, r]
      ),
      [{ isDragging: d }, h] = oF(
        () => ({
          type: "SLOT",
          collect: (v) => ({ isDragging: v.isDragging() }),
          item: () =>
            wn(e, n !== en.SHOP)
              ? {
                  inventory: n,
                  item: { name: e.name, slot: e.slot },
                  image: e?.name && `url(${zl(e) || "none"}`,
                }
              : null,
          canDrag: f,
        }),
        [n, e]
      ),
      [{ isOver: g }, y] = dg(
        () => ({
          accept: "SLOT",
          collect: (v) => ({ isOver: v.isOver() }),
          drop: (v) => {
            switch ((s(Xu()), v.inventory)) {
              case en.SHOP:
                zz(v, { inventory: n, item: { slot: e.slot } });
                break;
              case en.CRAFTING:
                Bz(v, { inventory: n, item: { slot: e.slot } });
                break;
              default:
                kg(v, { inventory: n, item: { slot: e.slot } });
                break;
            }
          },
          canDrop: (v) =>
            (v.item.slot !== e.slot || v.inventory !== n) &&
            n !== en.SHOP &&
            n !== en.CRAFTING,
        }),
        [n, e]
      );
    Br("refreshSlots", (v) => {
      (!d && !v.items) ||
        !Array.isArray(v.items) ||
        !v.items.find((_) => _.item.slot === e.slot && _.inventory === t) ||
        l.dispatch({ type: "dnd-core/END_DRAG" });
    });
    const m = (v) => h(y(v)),
      w = (v) => {
        v.preventDefault(),
          !(n !== "player" || !wn(e)) &&
            s(A3({ item: e, coords: { x: v.clientX, y: v.clientY } }));
      },
      E = (v) => {
        s(Xu()),
          a.current && clearTimeout(a.current),
          v.ctrlKey && wn(e) && n !== "shop" && n !== "crafting"
            ? kg({ item: e, inventory: n })
            : v.altKey && wn(e) && n === "player" && iv(e);
      },
      A = fv([m, i]);
    return V("div", {
      ref: A,
      onContextMenu: w,
      onClick: E,
      className: "inventory-slot",
      style: {
        filter:
          !Fx(e, { type: n, groups: r }) || !zx(e, n)
            ? "brightness(80%) grayscale(100%)"
            : void 0,
        opacity: d ? 0.4 : 1,
        backgroundImage: `url(${e?.name ? zl(e) : "none"}`,
        border: g ? "1px dashed rgba(255,255,255,0.4)" : "",
      },
      children:
        wn(e) &&
        we("div", {
          className: "item-slot-wrapper",
          onMouseEnter: () => {
            a.current = setTimeout(() => {
              s(T3({ item: e, inventoryType: n }));
            }, 500);
          },
          onMouseLeave: () => {
            s(Xu()), a.current && (clearTimeout(a.current), (a.current = null));
          },
          children: [
            we("div", {
              className:
                n === "player" && e.slot <= 5
                  ? "item-hotslot-header-wrapper"
                  : "item-slot-header-wrapper",
              children: [
                n === "player" &&
                  e.slot <= 5 &&
                  V("div", {
                    className: "inventory-slot-number",
                    children: e.slot,
                  }),
                we("div", {
                  className: "item-slot-info-wrapper",
                  children: [
                    V("p", {
                      children:
                        e.weight > 0
                          ? e.weight >= 1e3
                            ? `${(e.weight / 1e3).toLocaleString("en-us", {
                                minimumFractionDigits: 2,
                              })}kg `
                            : `${e.weight.toLocaleString("en-us", {
                                minimumFractionDigits: 0,
                              })}g `
                          : "",
                    }),
                    V("p", {
                      children: e.count
                        ? e.count.toLocaleString("en-us") + "x"
                        : "",
                    }),
                  ],
                }),
              ],
            }),
            we("div", {
              children: [
                n !== "shop" &&
                  e?.durability !== void 0 &&
                  V(yv, { percent: e.durability, durability: !0 }),
                n === "shop" &&
                  e?.price !== void 0 &&
                  V(bn, {
                    children:
                      e?.currency !== "money" &&
                      e.currency !== "black_money" &&
                      e.price > 0 &&
                      e.currency
                        ? we("div", {
                            className: "item-slot-currency-wrapper",
                            children: [
                              V("img", {
                                src: e.currency ? zl(e.currency) : "none",
                                alt: "item-image",
                                style: {
                                  imageRendering: "-webkit-optimize-contrast",
                                  height: "auto",
                                  width: "2vh",
                                  backfaceVisibility: "hidden",
                                  transform: "translateZ(0)",
                                },
                              }),
                              V("p", {
                                children: e.price.toLocaleString("en-us"),
                              }),
                            ],
                          })
                        : V(bn, {
                            children:
                              e.price > 0 &&
                              V("div", {
                                className: "item-slot-price-wrapper",
                                style: {
                                  color:
                                    e.currency === "money" || !e.currency
                                      ? "#2ECC71"
                                      : "#E74C3C",
                                },
                                children: we("p", {
                                  children: [
                                    ot.$ || "$",
                                    e.price.toLocaleString("en-us"),
                                  ],
                                }),
                              }),
                          }),
                  }),
                V("div", {
                  className: "inventory-slot-label-box",
                  children: V("div", {
                    className: "inventory-slot-label-text",
                    children: e.metadata?.label
                      ? e.metadata.label
                      : ct[e.name]?.label || e.name,
                  }),
                }),
              ],
            }),
          ],
        }),
    });
  },
  Hz = be.memo(be.forwardRef(Uz));
function jz(e) {
  const [t, n] = T.exports.useState(null),
    r = T.exports.useRef(null);
  return {
    ref: T.exports.useCallback(
      (l) => {
        if (
          (r.current && (r.current.disconnect(), (r.current = null)),
          l === null)
        ) {
          n(null);
          return;
        }
        (r.current = new IntersectionObserver(([s]) => {
          n(s);
        }, e)),
          r.current.observe(l);
      },
      [e?.rootMargin, e?.root, e?.threshold]
    ),
    entry: t,
  };
}
const aw = 30,
  jk = ({ inventory: e }) => {
    const t = be.useMemo(
        () =>
          e.maxWeight !== void 0 ? Math.floor(c3(e.items) * 1e3) / 1e3 : 0,
        [e.maxWeight, e.items]
      ),
      [n, r] = be.useState(0),
      i = T.exports.useRef(null),
      { ref: l, entry: s } = jz({ threshold: 0.5 }),
      a = yi((f) => f.inventory.isBusy);
    return (
      be.useEffect(() => {
        s && s.isIntersecting && r((f) => ++f);
      }, [s]),
      V(bn, {
        children: we("div", {
          className: "inventory-grid-wrapper",
          style: { pointerEvents: a ? "none" : "auto" },
          children: [
            we("div", {
              children: [
                we("div", {
                  className: "inventory-grid-header-wrapper",
                  children: [
                    V("p", { children: e.label }),
                    e.maxWeight &&
                      we("p", {
                        children: [t / 1e3, "/", e.maxWeight / 1e3, "kg"],
                      }),
                  ],
                }),
                V(yv, { percent: e.maxWeight ? (t / e.maxWeight) * 100 : 0 }),
              ],
            }),
            V("div", {
              className: "inventory-grid-container",
              ref: i,
              children: V(bn, {
                children: e.items
                  .slice(0, (n + 1) * aw)
                  .map((f, d) =>
                    V(
                      Hz,
                      {
                        item: f,
                        ref: d === (n + 1) * aw - 1 ? l : null,
                        inventoryType: e.type,
                        inventoryGroups: e.groups,
                        inventoryId: e.id,
                      },
                      `${e.type}-${e.id}-${f.slot}`
                    )
                  ),
              }),
            }),
          ],
        }),
      })
    );
  },
  Wz = () => {
    const e = yi(_3);
    return V(jk, { inventory: e });
  },
  Vz = () => {
    const e = yi(YC);
    return V(jk, { inventory: e });
  },
  cw = ["http", "https", "mailto", "tel"];
function qz(e) {
  const t = (e || "").trim(),
    n = t.charAt(0);
  if (n === "#" || n === "/") return t;
  const r = t.indexOf(":");
  if (r === -1) return t;
  let i = -1;
  for (; ++i < cw.length; ) {
    const l = cw[i];
    if (r === l.length && t.slice(0, l.length).toLowerCase() === l) return t;
  }
  return (
    (i = t.indexOf("?")),
    (i !== -1 && r > i) || ((i = t.indexOf("#")), i !== -1 && r > i)
      ? t
      : "javascript:void(0)"
  );
}
var Wk = function (t) {
  return (
    t != null &&
    t.constructor != null &&
    typeof t.constructor.isBuffer == "function" &&
    t.constructor.isBuffer(t)
  );
};
function es(e) {
  return !e || typeof e != "object"
    ? ""
    : "position" in e || "type" in e
    ? fw(e.position)
    : "start" in e || "end" in e
    ? fw(e)
    : "line" in e || "column" in e
    ? _g(e)
    : "";
}
function _g(e) {
  return dw(e && e.line) + ":" + dw(e && e.column);
}
function fw(e) {
  return _g(e && e.start) + "-" + _g(e && e.end);
}
function dw(e) {
  return e && typeof e == "number" ? e : 1;
}
class gr extends Error {
  constructor(t, n, r) {
    const i = [null, null];
    let l = {
      start: { line: null, column: null },
      end: { line: null, column: null },
    };
    if (
      (super(),
      typeof n == "string" && ((r = n), (n = void 0)),
      typeof r == "string")
    ) {
      const s = r.indexOf(":");
      s === -1 ? (i[1] = r) : ((i[0] = r.slice(0, s)), (i[1] = r.slice(s + 1)));
    }
    n &&
      ("type" in n || "position" in n
        ? n.position && (l = n.position)
        : "start" in n || "end" in n
        ? (l = n)
        : ("line" in n || "column" in n) && (l.start = n)),
      (this.name = es(n) || "1:1"),
      (this.message = typeof t == "object" ? t.message : t),
      (this.stack = ""),
      typeof t == "object" && t.stack && (this.stack = t.stack),
      (this.reason = this.message),
      this.fatal,
      (this.line = l.start.line),
      (this.column = l.start.column),
      (this.position = l),
      (this.source = i[0]),
      (this.ruleId = i[1]),
      this.file,
      this.actual,
      this.expected,
      this.url,
      this.note;
  }
}
gr.prototype.file = "";
gr.prototype.name = "";
gr.prototype.reason = "";
gr.prototype.message = "";
gr.prototype.stack = "";
gr.prototype.fatal = null;
gr.prototype.column = null;
gr.prototype.line = null;
gr.prototype.source = null;
gr.prototype.ruleId = null;
gr.prototype.position = null;
const zr = { basename: Gz, dirname: Kz, extname: Qz, join: Yz, sep: "/" };
function Gz(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Ds(e);
  let n = 0,
    r = -1,
    i = e.length,
    l;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.charCodeAt(i) === 47) {
        if (l) {
          n = i + 1;
          break;
        }
      } else r < 0 && ((l = !0), (r = i + 1));
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e) return "";
  let s = -1,
    a = t.length - 1;
  for (; i--; )
    if (e.charCodeAt(i) === 47) {
      if (l) {
        n = i + 1;
        break;
      }
    } else
      s < 0 && ((l = !0), (s = i + 1)),
        a > -1 &&
          (e.charCodeAt(i) === t.charCodeAt(a--)
            ? a < 0 && (r = i)
            : ((a = -1), (r = s)));
  return n === r ? (r = s) : r < 0 && (r = e.length), e.slice(n, r);
}
function Kz(e) {
  if ((Ds(e), e.length === 0)) return ".";
  let t = -1,
    n = e.length,
    r;
  for (; --n; )
    if (e.charCodeAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0
    ? e.charCodeAt(0) === 47
      ? "/"
      : "."
    : t === 1 && e.charCodeAt(0) === 47
    ? "//"
    : e.slice(0, t);
}
function Qz(e) {
  Ds(e);
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    l = 0,
    s;
  for (; t--; ) {
    const a = e.charCodeAt(t);
    if (a === 47) {
      if (s) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && ((s = !0), (n = t + 1)),
      a === 46 ? (i < 0 ? (i = t) : l !== 1 && (l = 1)) : i > -1 && (l = -1);
  }
  return i < 0 || n < 0 || l === 0 || (l === 1 && i === n - 1 && i === r + 1)
    ? ""
    : e.slice(i, n);
}
function Yz(...e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    Ds(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Xz(n);
}
function Xz(e) {
  Ds(e);
  const t = e.charCodeAt(0) === 47;
  let n = Zz(e, !t);
  return (
    n.length === 0 && !t && (n = "."),
    n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"),
    t ? "/" + n : n
  );
}
function Zz(e, t) {
  let n = "",
    r = 0,
    i = -1,
    l = 0,
    s = -1,
    a,
    f;
  for (; ++s <= e.length; ) {
    if (s < e.length) a = e.charCodeAt(s);
    else {
      if (a === 47) break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === s - 1 || l === 1))
        if (i !== s - 1 && l === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.charCodeAt(n.length - 1) !== 46 ||
            n.charCodeAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((f = n.lastIndexOf("/")), f !== n.length - 1)) {
                f < 0
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, f)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (i = s),
                  (l = 0);
                continue;
              }
            } else if (n.length > 0) {
              (n = ""), (r = 0), (i = s), (l = 0);
              continue;
            }
          }
          t && ((n = n.length > 0 ? n + "/.." : ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + e.slice(i + 1, s))
            : (n = e.slice(i + 1, s)),
            (r = s - i - 1);
      (i = s), (l = 0);
    } else a === 46 && l > -1 ? l++ : (l = -1);
  }
  return n;
}
function Ds(e) {
  if (typeof e != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
}
const Jz = { cwd: e6 };
function e6() {
  return "/";
}
function bg(e) {
  return e !== null && typeof e == "object" && e.href && e.origin;
}
function t6(e) {
  if (typeof e == "string") e = new URL(e);
  else if (!bg(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        "`"
    );
    throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
  }
  return n6(e);
}
function n6(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw ((r.code = "ERR_INVALID_FILE_URL_HOST"), r);
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
      const r = t.charCodeAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw ((i.code = "ERR_INVALID_FILE_URL_PATH"), i);
      }
    }
  return decodeURIComponent(t);
}
const oh = ["history", "path", "basename", "stem", "extname", "dirname"];
class Vk {
  constructor(t) {
    let n;
    t
      ? typeof t == "string" || Wk(t)
        ? (n = { value: t })
        : bg(t)
        ? (n = { path: t })
        : (n = t)
      : (n = {}),
      (this.data = {}),
      (this.messages = []),
      (this.history = []),
      (this.cwd = Jz.cwd()),
      this.value,
      this.stored,
      this.result,
      this.map;
    let r = -1;
    for (; ++r < oh.length; ) {
      const l = oh[r];
      l in n &&
        n[l] !== void 0 &&
        (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n) oh.includes(i) || (this[i] = n[i]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(t) {
    bg(t) && (t = t6(t)),
      uh(t, "path"),
      this.path !== t && this.history.push(t);
  }
  get dirname() {
    return typeof this.path == "string" ? zr.dirname(this.path) : void 0;
  }
  set dirname(t) {
    pw(this.basename, "dirname"), (this.path = zr.join(t || "", this.basename));
  }
  get basename() {
    return typeof this.path == "string" ? zr.basename(this.path) : void 0;
  }
  set basename(t) {
    uh(t, "basename"),
      lh(t, "basename"),
      (this.path = zr.join(this.dirname || "", t));
  }
  get extname() {
    return typeof this.path == "string" ? zr.extname(this.path) : void 0;
  }
  set extname(t) {
    if ((lh(t, "extname"), pw(this.dirname, "extname"), t)) {
      if (t.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = zr.join(this.dirname, this.stem + (t || ""));
  }
  get stem() {
    return typeof this.path == "string"
      ? zr.basename(this.path, this.extname)
      : void 0;
  }
  set stem(t) {
    uh(t, "stem"),
      lh(t, "stem"),
      (this.path = zr.join(this.dirname || "", t + (this.extname || "")));
  }
  toString(t) {
    return (this.value || "").toString(t);
  }
  message(t, n, r) {
    const i = new gr(t, n, r);
    return (
      this.path && ((i.name = this.path + ":" + i.name), (i.file = this.path)),
      (i.fatal = !1),
      this.messages.push(i),
      i
    );
  }
  info(t, n, r) {
    const i = this.message(t, n, r);
    return (i.fatal = null), i;
  }
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw ((i.fatal = !0), i);
  }
}
function lh(e, t) {
  if (e && e.includes(zr.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + zr.sep + "`"
    );
}
function uh(e, t) {
  if (!e) throw new Error("`" + t + "` cannot be empty");
}
function pw(e, t) {
  if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hw(e) {
  if (e) throw e;
}
var sc = Object.prototype.hasOwnProperty,
  qk = Object.prototype.toString,
  gw = Object.defineProperty,
  mw = Object.getOwnPropertyDescriptor,
  vw = function (t) {
    return typeof Array.isArray == "function"
      ? Array.isArray(t)
      : qk.call(t) === "[object Array]";
  },
  yw = function (t) {
    if (!t || qk.call(t) !== "[object Object]") return !1;
    var n = sc.call(t, "constructor"),
      r =
        t.constructor &&
        t.constructor.prototype &&
        sc.call(t.constructor.prototype, "isPrototypeOf");
    if (t.constructor && !n && !r) return !1;
    var i;
    for (i in t);
    return typeof i > "u" || sc.call(t, i);
  },
  xw = function (t, n) {
    gw && n.name === "__proto__"
      ? gw(t, n.name, {
          enumerable: !0,
          configurable: !0,
          value: n.newValue,
          writable: !0,
        })
      : (t[n.name] = n.newValue);
  },
  ww = function (t, n) {
    if (n === "__proto__")
      if (sc.call(t, n)) {
        if (mw) return mw(t, n).value;
      } else return;
    return t[n];
  },
  Sw = function e() {
    var t,
      n,
      r,
      i,
      l,
      s,
      a = arguments[0],
      f = 1,
      d = arguments.length,
      h = !1;
    for (
      typeof a == "boolean" && ((h = a), (a = arguments[1] || {}), (f = 2)),
        (a == null || (typeof a != "object" && typeof a != "function")) &&
          (a = {});
      f < d;
      ++f
    )
      if (((t = arguments[f]), t != null))
        for (n in t)
          (r = ww(a, n)),
            (i = ww(t, n)),
            a !== i &&
              (h && i && (yw(i) || (l = vw(i)))
                ? (l
                    ? ((l = !1), (s = r && vw(r) ? r : []))
                    : (s = r && yw(r) ? r : {}),
                  xw(a, { name: n, newValue: e(h, s, i) }))
                : typeof i < "u" && xw(a, { name: n, newValue: i }));
    return a;
  };
function Og(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function r6() {
  const e = [],
    t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const s = i.pop();
    if (typeof s != "function")
      throw new TypeError("Expected function as last argument, not " + s);
    a(null, ...i);
    function a(f, ...d) {
      const h = e[++l];
      let g = -1;
      if (f) {
        s(f);
        return;
      }
      for (; ++g < i.length; )
        (d[g] === null || d[g] === void 0) && (d[g] = i[g]);
      (i = d), h ? i6(h, a)(...d) : s(null, ...d);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e.push(i), t;
  }
}
function i6(e, t) {
  let n;
  return r;
  function r(...s) {
    const a = e.length > s.length;
    let f;
    a && s.push(i);
    try {
      f = e.apply(this, s);
    } catch (d) {
      const h = d;
      if (a && n) throw h;
      return i(h);
    }
    a ||
      (f instanceof Promise ? f.then(l, i) : f instanceof Error ? i(f) : l(f));
  }
  function i(s, ...a) {
    n || ((n = !0), t(s, ...a));
  }
  function l(s) {
    i(null, s);
  }
}
const o6 = Kk().freeze(),
  Gk = {}.hasOwnProperty;
function Kk() {
  const e = r6(),
    t = [];
  let n = {},
    r,
    i = -1;
  return (
    (l.data = s),
    (l.Parser = void 0),
    (l.Compiler = void 0),
    (l.freeze = a),
    (l.attachers = t),
    (l.use = f),
    (l.parse = d),
    (l.stringify = h),
    (l.run = g),
    (l.runSync = y),
    (l.process = m),
    (l.processSync = w),
    l
  );
  function l() {
    const E = Kk();
    let A = -1;
    for (; ++A < t.length; ) E.use(...t[A]);
    return E.data(Sw(!0, {}, n)), E;
  }
  function s(E, A) {
    return typeof E == "string"
      ? arguments.length === 2
        ? (ch("data", r), (n[E] = A), l)
        : (Gk.call(n, E) && n[E]) || null
      : E
      ? (ch("data", r), (n = E), l)
      : n;
  }
  function a() {
    if (r) return l;
    for (; ++i < t.length; ) {
      const [E, ...A] = t[i];
      if (A[0] === !1) continue;
      A[0] === !0 && (A[0] = void 0);
      const v = E.call(l, ...A);
      typeof v == "function" && e.use(v);
    }
    return (r = !0), (i = Number.POSITIVE_INFINITY), l;
  }
  function f(E, ...A) {
    let v;
    if ((ch("use", r), E != null))
      if (typeof E == "function") D(E, ...A);
      else if (typeof E == "object") Array.isArray(E) ? P(E) : _(E);
      else throw new TypeError("Expected usable value, not `" + E + "`");
    return v && (n.settings = Object.assign(n.settings || {}, v)), l;
    function S(R) {
      if (typeof R == "function") D(R);
      else if (typeof R == "object")
        if (Array.isArray(R)) {
          const [F, ...z] = R;
          D(F, ...z);
        } else _(R);
      else throw new TypeError("Expected usable value, not `" + R + "`");
    }
    function _(R) {
      P(R.plugins), R.settings && (v = Object.assign(v || {}, R.settings));
    }
    function P(R) {
      let F = -1;
      if (R != null)
        if (Array.isArray(R))
          for (; ++F < R.length; ) {
            const z = R[F];
            S(z);
          }
        else throw new TypeError("Expected a list of plugins, not `" + R + "`");
    }
    function D(R, F) {
      let z = -1,
        q;
      for (; ++z < t.length; )
        if (t[z][0] === R) {
          q = t[z];
          break;
        }
      q
        ? (Og(q[1]) && Og(F) && (F = Sw(!0, q[1], F)), (q[1] = F))
        : t.push([...arguments]);
    }
  }
  function d(E) {
    l.freeze();
    const A = Au(E),
      v = l.Parser;
    return (
      sh("parse", v),
      Ew(v, "parse") ? new v(String(A), A).parse() : v(String(A), A)
    );
  }
  function h(E, A) {
    l.freeze();
    const v = Au(A),
      S = l.Compiler;
    return (
      ah("stringify", S),
      Cw(E),
      Ew(S, "compile") ? new S(E, v).compile() : S(E, v)
    );
  }
  function g(E, A, v) {
    if (
      (Cw(E),
      l.freeze(),
      !v && typeof A == "function" && ((v = A), (A = void 0)),
      !v)
    )
      return new Promise(S);
    S(null, v);
    function S(_, P) {
      e.run(E, Au(A), D);
      function D(R, F, z) {
        (F = F || E), R ? P(R) : _ ? _(F) : v(null, F, z);
      }
    }
  }
  function y(E, A) {
    let v, S;
    return l.run(E, A, _), kw("runSync", "run", S), v;
    function _(P, D) {
      hw(P), (v = D), (S = !0);
    }
  }
  function m(E, A) {
    if ((l.freeze(), sh("process", l.Parser), ah("process", l.Compiler), !A))
      return new Promise(v);
    v(null, A);
    function v(S, _) {
      const P = Au(E);
      l.run(l.parse(P), P, (R, F, z) => {
        if (R || !F || !z) D(R);
        else {
          const q = l.stringify(F, z);
          q == null || (s6(q) ? (z.value = q) : (z.result = q)), D(R, z);
        }
      });
      function D(R, F) {
        R || !F ? _(R) : S ? S(F) : A(null, F);
      }
    }
  }
  function w(E) {
    let A;
    l.freeze(), sh("processSync", l.Parser), ah("processSync", l.Compiler);
    const v = Au(E);
    return l.process(v, S), kw("processSync", "process", A), v;
    function S(_) {
      (A = !0), hw(_);
    }
  }
}
function Ew(e, t) {
  return (
    typeof e == "function" &&
    e.prototype &&
    (l6(e.prototype) || t in e.prototype)
  );
}
function l6(e) {
  let t;
  for (t in e) if (Gk.call(e, t)) return !0;
  return !1;
}
function sh(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Parser`");
}
function ah(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `Compiler`");
}
function ch(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" +
        e +
        "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Cw(e) {
  if (!Og(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function kw(e, t, n) {
  if (!n)
    throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Au(e) {
  return u6(e) ? e : new Vk(e);
}
function u6(e) {
  return Boolean(
    e && typeof e == "object" && "message" in e && "messages" in e
  );
}
function s6(e) {
  return typeof e == "string" || Wk(e);
}
function a6(e, t) {
  var { includeImageAlt: n = !0 } = t || {};
  return Qk(e, n);
}
function Qk(e, t) {
  return (
    (e &&
      typeof e == "object" &&
      (e.value ||
        (t ? e.alt : "") ||
        ("children" in e && _w(e.children, t)) ||
        (Array.isArray(e) && _w(e, t)))) ||
    ""
  );
}
function _w(e, t) {
  for (var n = [], r = -1; ++r < e.length; ) n[r] = Qk(e[r], t);
  return n.join("");
}
function Vr(e, t, n, r) {
  const i = e.length;
  let l = 0,
    s;
  if (
    (t < 0 ? (t = -t > i ? 0 : i + t) : (t = t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (s = Array.from(r)), s.unshift(t, n), [].splice.apply(e, s);
  else
    for (n && [].splice.apply(e, [t, n]); l < r.length; )
      (s = r.slice(l, l + 1e4)),
        s.unshift(t, 0),
        [].splice.apply(e, s),
        (l += 1e4),
        (t += 1e4);
}
function ur(e, t) {
  return e.length > 0 ? (Vr(e, e.length, 0, t), e) : t;
}
const bw = {}.hasOwnProperty;
function c6(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; ) f6(t, e[n]);
  return t;
}
function f6(e, t) {
  let n;
  for (n in t) {
    const i = (bw.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      l = t[n];
    let s;
    for (s in l) {
      bw.call(i, s) || (i[s] = []);
      const a = l[s];
      d6(i[s], Array.isArray(a) ? a : a ? [a] : []);
    }
  }
}
function d6(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
  Vr(e, 0, 0, r);
}
const p6 =
    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
  Ur = co(/[A-Za-z]/),
  Ig = co(/\d/),
  h6 = co(/[\dA-Fa-f]/),
  Fn = co(/[\dA-Za-z]/),
  g6 = co(/[!-/:-@[-`{-~]/),
  Ow = co(/[#-'*+\--9=?A-Z^-~]/);
function Tg(e) {
  return e !== null && (e < 32 || e === 127);
}
function fr(e) {
  return e !== null && (e < 0 || e === 32);
}
function Ee(e) {
  return e !== null && e < -2;
}
function bt(e) {
  return e === -2 || e === -1 || e === 32;
}
const m6 = co(/\s/),
  v6 = co(p6);
function co(e) {
  return t;
  function t(n) {
    return n !== null && e.test(String.fromCharCode(n));
  }
}
function Je(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return s;
  function s(f) {
    return bt(f) ? (e.enter(n), a(f)) : t(f);
  }
  function a(f) {
    return bt(f) && l++ < i ? (e.consume(f), a) : (e.exit(n), t(f));
  }
}
const y6 = { tokenize: x6 };
function x6(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(a),
      e.exit("lineEnding"),
      Je(e, t, "linePrefix")
    );
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const f = e.enter("chunkText", { contentType: "text", previous: n });
    return n && (n.next = f), (n = f), s(a);
  }
  function s(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return Ee(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), s);
  }
}
const w6 = { tokenize: S6 },
  Iw = { tokenize: E6 };
function S6(e) {
  const t = this,
    n = [];
  let r = 0,
    i,
    l,
    s;
  return a;
  function a(_) {
    if (r < n.length) {
      const P = n[r];
      return (t.containerState = P[1]), e.attempt(P[0].continuation, f, d)(_);
    }
    return d(_);
  }
  function f(_) {
    if ((r++, t.containerState._closeFlow)) {
      (t.containerState._closeFlow = void 0), i && S();
      const P = t.events.length;
      let D = P,
        R;
      for (; D--; )
        if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
          R = t.events[D][1].end;
          break;
        }
      v(r);
      let F = P;
      for (; F < t.events.length; )
        (t.events[F][1].end = Object.assign({}, R)), F++;
      return (
        Vr(t.events, D + 1, 0, t.events.slice(P)), (t.events.length = F), d(_)
      );
    }
    return a(_);
  }
  function d(_) {
    if (r === n.length) {
      if (!i) return y(_);
      if (i.currentConstruct && i.currentConstruct.concrete) return w(_);
      t.interrupt = Boolean(
        i.currentConstruct && !i._gfmTableDynamicInterruptHack
      );
    }
    return (t.containerState = {}), e.check(Iw, h, g)(_);
  }
  function h(_) {
    return i && S(), v(r), y(_);
  }
  function g(_) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (s = t.now().offset), w(_)
    );
  }
  function y(_) {
    return (t.containerState = {}), e.attempt(Iw, m, w)(_);
  }
  function m(_) {
    return r++, n.push([t.currentConstruct, t.containerState]), y(_);
  }
  function w(_) {
    if (_ === null) {
      i && S(), v(0), e.consume(_);
      return;
    }
    return (
      (i = i || t.parser.flow(t.now())),
      e.enter("chunkFlow", { contentType: "flow", previous: l, _tokenizer: i }),
      E(_)
    );
  }
  function E(_) {
    if (_ === null) {
      A(e.exit("chunkFlow"), !0), v(0), e.consume(_);
      return;
    }
    return Ee(_)
      ? (e.consume(_),
        A(e.exit("chunkFlow")),
        (r = 0),
        (t.interrupt = void 0),
        a)
      : (e.consume(_), E);
  }
  function A(_, P) {
    const D = t.sliceStream(_);
    if (
      (P && D.push(null),
      (_.previous = l),
      l && (l.next = _),
      (l = _),
      i.defineSkip(_.start),
      i.write(D),
      t.parser.lazy[_.start.line])
    ) {
      let R = i.events.length;
      for (; R--; )
        if (
          i.events[R][1].start.offset < s &&
          (!i.events[R][1].end || i.events[R][1].end.offset > s)
        )
          return;
      const F = t.events.length;
      let z = F,
        q,
        K;
      for (; z--; )
        if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
          if (q) {
            K = t.events[z][1].end;
            break;
          }
          q = !0;
        }
      for (v(r), R = F; R < t.events.length; )
        (t.events[R][1].end = Object.assign({}, K)), R++;
      Vr(t.events, z + 1, 0, t.events.slice(F)), (t.events.length = R);
    }
  }
  function v(_) {
    let P = n.length;
    for (; P-- > _; ) {
      const D = n[P];
      (t.containerState = D[1]), D[0].exit.call(t, e);
    }
    n.length = _;
  }
  function S() {
    i.write([null]),
      (l = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0);
  }
}
function E6(e, t, n) {
  return Je(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function Tw(e) {
  if (e === null || fr(e) || m6(e)) return 1;
  if (v6(e)) return 2;
}
function Cv(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && ((t = l(t, n)), r.push(l));
  }
  return t;
}
const Rg = { name: "attention", tokenize: k6, resolveAll: C6 };
function C6(e, t) {
  let n = -1,
    r,
    i,
    l,
    s,
    a,
    f,
    d,
    h;
  for (; ++n < e.length; )
    if (
      e[n][0] === "enter" &&
      e[n][1].type === "attentionSequence" &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === "exit" &&
          e[r][1].type === "attentionSequence" &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue;
          f =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1;
          const g = Object.assign({}, e[r][1].end),
            y = Object.assign({}, e[n][1].start);
          Rw(g, -f),
            Rw(y, f),
            (s = {
              type: f > 1 ? "strongSequence" : "emphasisSequence",
              start: g,
              end: Object.assign({}, e[r][1].end),
            }),
            (a = {
              type: f > 1 ? "strongSequence" : "emphasisSequence",
              start: Object.assign({}, e[n][1].start),
              end: y,
            }),
            (l = {
              type: f > 1 ? "strongText" : "emphasisText",
              start: Object.assign({}, e[r][1].end),
              end: Object.assign({}, e[n][1].start),
            }),
            (i = {
              type: f > 1 ? "strong" : "emphasis",
              start: Object.assign({}, s.start),
              end: Object.assign({}, a.end),
            }),
            (e[r][1].end = Object.assign({}, s.start)),
            (e[n][1].start = Object.assign({}, a.end)),
            (d = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (d = ur(d, [
                ["enter", e[r][1], t],
                ["exit", e[r][1], t],
              ])),
            (d = ur(d, [
              ["enter", i, t],
              ["enter", s, t],
              ["exit", s, t],
              ["enter", l, t],
            ])),
            (d = ur(
              d,
              Cv(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)
            )),
            (d = ur(d, [
              ["exit", l, t],
              ["enter", a, t],
              ["exit", a, t],
              ["exit", i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((h = 2),
                (d = ur(d, [
                  ["enter", e[n][1], t],
                  ["exit", e[n][1], t],
                ])))
              : (h = 0),
            Vr(e, r - 1, n - r + 3, d),
            (n = r + d.length - h - 2);
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function k6(e, t) {
  const n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Tw(r);
  let l;
  return s;
  function s(f) {
    return e.enter("attentionSequence"), (l = f), a(f);
  }
  function a(f) {
    if (f === l) return e.consume(f), a;
    const d = e.exit("attentionSequence"),
      h = Tw(f),
      g = !h || (h === 2 && i) || n.includes(f),
      y = !i || (i === 2 && h) || n.includes(r);
    return (
      (d._open = Boolean(l === 42 ? g : g && (i || !y))),
      (d._close = Boolean(l === 42 ? y : y && (h || !g))),
      t(f)
    );
  }
}
function Rw(e, t) {
  (e.column += t), (e.offset += t), (e._bufferIndex += t);
}
const _6 = { name: "autolink", tokenize: b6 };
function b6(e, t, n) {
  let r = 1;
  return i;
  function i(w) {
    return (
      e.enter("autolink"),
      e.enter("autolinkMarker"),
      e.consume(w),
      e.exit("autolinkMarker"),
      e.enter("autolinkProtocol"),
      l
    );
  }
  function l(w) {
    return Ur(w) ? (e.consume(w), s) : Ow(w) ? d(w) : n(w);
  }
  function s(w) {
    return w === 43 || w === 45 || w === 46 || Fn(w) ? a(w) : d(w);
  }
  function a(w) {
    return w === 58
      ? (e.consume(w), f)
      : (w === 43 || w === 45 || w === 46 || Fn(w)) && r++ < 32
      ? (e.consume(w), a)
      : d(w);
  }
  function f(w) {
    return w === 62
      ? (e.exit("autolinkProtocol"), m(w))
      : w === null || w === 32 || w === 60 || Tg(w)
      ? n(w)
      : (e.consume(w), f);
  }
  function d(w) {
    return w === 64
      ? (e.consume(w), (r = 0), h)
      : Ow(w)
      ? (e.consume(w), d)
      : n(w);
  }
  function h(w) {
    return Fn(w) ? g(w) : n(w);
  }
  function g(w) {
    return w === 46
      ? (e.consume(w), (r = 0), h)
      : w === 62
      ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), m(w))
      : y(w);
  }
  function y(w) {
    return (w === 45 || Fn(w)) && r++ < 63
      ? (e.consume(w), w === 45 ? y : g)
      : n(w);
  }
  function m(w) {
    return (
      e.enter("autolinkMarker"),
      e.consume(w),
      e.exit("autolinkMarker"),
      e.exit("autolink"),
      t
    );
  }
}
const Xf = { tokenize: O6, partial: !0 };
function O6(e, t, n) {
  return Je(e, r, "linePrefix");
  function r(i) {
    return i === null || Ee(i) ? t(i) : n(i);
  }
}
const Yk = {
  name: "blockQuote",
  tokenize: I6,
  continuation: { tokenize: T6 },
  exit: R6,
};
function I6(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    if (s === 62) {
      const a = r.containerState;
      return (
        a.open || (e.enter("blockQuote", { _container: !0 }), (a.open = !0)),
        e.enter("blockQuotePrefix"),
        e.enter("blockQuoteMarker"),
        e.consume(s),
        e.exit("blockQuoteMarker"),
        l
      );
    }
    return n(s);
  }
  function l(s) {
    return bt(s)
      ? (e.enter("blockQuotePrefixWhitespace"),
        e.consume(s),
        e.exit("blockQuotePrefixWhitespace"),
        e.exit("blockQuotePrefix"),
        t)
      : (e.exit("blockQuotePrefix"), t(s));
  }
}
function T6(e, t, n) {
  return Je(
    e,
    e.attempt(Yk, t, n),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function R6(e) {
  e.exit("blockQuote");
}
const Xk = { name: "characterEscape", tokenize: P6 };
function P6(e, t, n) {
  return r;
  function r(l) {
    return (
      e.enter("characterEscape"),
      e.enter("escapeMarker"),
      e.consume(l),
      e.exit("escapeMarker"),
      i
    );
  }
  function i(l) {
    return g6(l)
      ? (e.enter("characterEscapeValue"),
        e.consume(l),
        e.exit("characterEscapeValue"),
        e.exit("characterEscape"),
        t)
      : n(l);
  }
}
const Pw = document.createElement("i");
function kv(e) {
  const t = "&" + e + ";";
  Pw.innerHTML = t;
  const n = Pw.textContent;
  return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
    ? !1
    : n;
}
const Zk = { name: "characterReference", tokenize: A6 };
function A6(e, t, n) {
  const r = this;
  let i = 0,
    l,
    s;
  return a;
  function a(g) {
    return (
      e.enter("characterReference"),
      e.enter("characterReferenceMarker"),
      e.consume(g),
      e.exit("characterReferenceMarker"),
      f
    );
  }
  function f(g) {
    return g === 35
      ? (e.enter("characterReferenceMarkerNumeric"),
        e.consume(g),
        e.exit("characterReferenceMarkerNumeric"),
        d)
      : (e.enter("characterReferenceValue"), (l = 31), (s = Fn), h(g));
  }
  function d(g) {
    return g === 88 || g === 120
      ? (e.enter("characterReferenceMarkerHexadecimal"),
        e.consume(g),
        e.exit("characterReferenceMarkerHexadecimal"),
        e.enter("characterReferenceValue"),
        (l = 6),
        (s = h6),
        h)
      : (e.enter("characterReferenceValue"), (l = 7), (s = Ig), h(g));
  }
  function h(g) {
    let y;
    return g === 59 && i
      ? ((y = e.exit("characterReferenceValue")),
        s === Fn && !kv(r.sliceSerialize(y))
          ? n(g)
          : (e.enter("characterReferenceMarker"),
            e.consume(g),
            e.exit("characterReferenceMarker"),
            e.exit("characterReference"),
            t))
      : s(g) && i++ < l
      ? (e.consume(g), h)
      : n(g);
  }
}
const Aw = { name: "codeFenced", tokenize: D6, concrete: !0 };
function D6(e, t, n) {
  const r = this,
    i = { tokenize: D, partial: !0 },
    l = { tokenize: P, partial: !0 },
    s = this.events[this.events.length - 1],
    a =
      s && s[1].type === "linePrefix"
        ? s[2].sliceSerialize(s[1], !0).length
        : 0;
  let f = 0,
    d;
  return h;
  function h(R) {
    return (
      e.enter("codeFenced"),
      e.enter("codeFencedFence"),
      e.enter("codeFencedFenceSequence"),
      (d = R),
      g(R)
    );
  }
  function g(R) {
    return R === d
      ? (e.consume(R), f++, g)
      : (e.exit("codeFencedFenceSequence"),
        f < 3 ? n(R) : Je(e, y, "whitespace")(R));
  }
  function y(R) {
    return R === null || Ee(R)
      ? A(R)
      : (e.enter("codeFencedFenceInfo"),
        e.enter("chunkString", { contentType: "string" }),
        m(R));
  }
  function m(R) {
    return R === null || fr(R)
      ? (e.exit("chunkString"),
        e.exit("codeFencedFenceInfo"),
        Je(e, w, "whitespace")(R))
      : R === 96 && R === d
      ? n(R)
      : (e.consume(R), m);
  }
  function w(R) {
    return R === null || Ee(R)
      ? A(R)
      : (e.enter("codeFencedFenceMeta"),
        e.enter("chunkString", { contentType: "string" }),
        E(R));
  }
  function E(R) {
    return R === null || Ee(R)
      ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), A(R))
      : R === 96 && R === d
      ? n(R)
      : (e.consume(R), E);
  }
  function A(R) {
    return e.exit("codeFencedFence"), r.interrupt ? t(R) : v(R);
  }
  function v(R) {
    return R === null
      ? _(R)
      : Ee(R)
      ? e.attempt(
          l,
          e.attempt(i, _, a ? Je(e, v, "linePrefix", a + 1) : v),
          _
        )(R)
      : (e.enter("codeFlowValue"), S(R));
  }
  function S(R) {
    return R === null || Ee(R)
      ? (e.exit("codeFlowValue"), v(R))
      : (e.consume(R), S);
  }
  function _(R) {
    return e.exit("codeFenced"), t(R);
  }
  function P(R, F, z) {
    const q = this;
    return K;
    function K(X) {
      return R.enter("lineEnding"), R.consume(X), R.exit("lineEnding"), B;
    }
    function B(X) {
      return q.parser.lazy[q.now().line] ? z(X) : F(X);
    }
  }
  function D(R, F, z) {
    let q = 0;
    return Je(
      R,
      K,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function K($) {
      return (
        R.enter("codeFencedFence"), R.enter("codeFencedFenceSequence"), B($)
      );
    }
    function B($) {
      return $ === d
        ? (R.consume($), q++, B)
        : q < f
        ? z($)
        : (R.exit("codeFencedFenceSequence"), Je(R, X, "whitespace")($));
    }
    function X($) {
      return $ === null || Ee($) ? (R.exit("codeFencedFence"), F($)) : z($);
    }
  }
}
const fh = { name: "codeIndented", tokenize: M6 },
  L6 = { tokenize: N6, partial: !0 };
function M6(e, t, n) {
  const r = this;
  return i;
  function i(d) {
    return e.enter("codeIndented"), Je(e, l, "linePrefix", 4 + 1)(d);
  }
  function l(d) {
    const h = r.events[r.events.length - 1];
    return h &&
      h[1].type === "linePrefix" &&
      h[2].sliceSerialize(h[1], !0).length >= 4
      ? s(d)
      : n(d);
  }
  function s(d) {
    return d === null
      ? f(d)
      : Ee(d)
      ? e.attempt(L6, s, f)(d)
      : (e.enter("codeFlowValue"), a(d));
  }
  function a(d) {
    return d === null || Ee(d)
      ? (e.exit("codeFlowValue"), s(d))
      : (e.consume(d), a);
  }
  function f(d) {
    return e.exit("codeIndented"), t(d);
  }
}
function N6(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return r.parser.lazy[r.now().line]
      ? n(s)
      : Ee(s)
      ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i)
      : Je(e, l, "linePrefix", 4 + 1)(s);
  }
  function l(s) {
    const a = r.events[r.events.length - 1];
    return a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(s)
      : Ee(s)
      ? i(s)
      : n(s);
  }
}
const F6 = { name: "codeText", tokenize: B6, resolve: z6, previous: $6 };
function z6(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i;
  if (
    (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
    (e[t][1].type === "lineEnding" || e[t][1].type === "space")
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        (e[n][1].type = "codeTextPadding"),
          (e[t][1].type = "codeTextPadding"),
          (n += 2),
          (t -= 2);
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== "lineEnding" && (i = r)
      : (r === t || e[r][1].type === "lineEnding") &&
        ((e[i][1].type = "codeTextData"),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0));
  return e;
}
function $6(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === "characterEscape"
  );
}
function B6(e, t, n) {
  let r = 0,
    i,
    l;
  return s;
  function s(g) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(g);
  }
  function a(g) {
    return g === 96
      ? (e.consume(g), r++, a)
      : (e.exit("codeTextSequence"), f(g));
  }
  function f(g) {
    return g === null
      ? n(g)
      : g === 96
      ? ((l = e.enter("codeTextSequence")), (i = 0), h(g))
      : g === 32
      ? (e.enter("space"), e.consume(g), e.exit("space"), f)
      : Ee(g)
      ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f)
      : (e.enter("codeTextData"), d(g));
  }
  function d(g) {
    return g === null || g === 32 || g === 96 || Ee(g)
      ? (e.exit("codeTextData"), f(g))
      : (e.consume(g), d);
  }
  function h(g) {
    return g === 96
      ? (e.consume(g), i++, h)
      : i === r
      ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g))
      : ((l.type = "codeTextData"), d(g));
  }
}
function Jk(e) {
  const t = {};
  let n = -1,
    r,
    i,
    l,
    s,
    a,
    f,
    d;
  for (; ++n < e.length; ) {
    for (; n in t; ) n = t[n];
    if (
      ((r = e[n]),
      n &&
        r[1].type === "chunkFlow" &&
        e[n - 1][1].type === "listItemPrefix" &&
        ((f = r[1]._tokenizer.events),
        (l = 0),
        l < f.length && f[l][1].type === "lineEndingBlank" && (l += 2),
        l < f.length && f[l][1].type === "content"))
    )
      for (; ++l < f.length && f[l][1].type !== "content"; )
        f[l][1].type === "chunkText" &&
          ((f[l][1]._isInFirstContentOfListItem = !0), l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, U6(e, n)), (n = t[n]), (d = !0));
    else if (r[1]._container) {
      for (
        l = n, i = void 0;
        l-- &&
        ((s = e[l]),
        s[1].type === "lineEnding" || s[1].type === "lineEndingBlank");

      )
        s[0] === "enter" &&
          (i && (e[i][1].type = "lineEndingBlank"),
          (s[1].type = "lineEnding"),
          (i = l));
      i &&
        ((r[1].end = Object.assign({}, e[i][1].start)),
        (a = e.slice(i, n)),
        a.unshift(r),
        Vr(e, i, n - i + 1, a));
    }
  }
  return !d;
}
function U6(e, t) {
  const n = e[t][1],
    r = e[t][2];
  let i = t - 1;
  const l = [],
    s = n._tokenizer || r.parser[n.contentType](n.start),
    a = s.events,
    f = [],
    d = {};
  let h,
    g,
    y = -1,
    m = n,
    w = 0,
    E = 0;
  const A = [E];
  for (; m; ) {
    for (; e[++i][1] !== m; );
    l.push(i),
      m._tokenizer ||
        ((h = r.sliceStream(m)),
        m.next || h.push(null),
        g && s.defineSkip(m.start),
        m._isInFirstContentOfListItem &&
          (s._gfmTasklistFirstContentOfListItem = !0),
        s.write(h),
        m._isInFirstContentOfListItem &&
          (s._gfmTasklistFirstContentOfListItem = void 0)),
      (g = m),
      (m = m.next);
  }
  for (m = n; ++y < a.length; )
    a[y][0] === "exit" &&
      a[y - 1][0] === "enter" &&
      a[y][1].type === a[y - 1][1].type &&
      a[y][1].start.line !== a[y][1].end.line &&
      ((E = y + 1),
      A.push(E),
      (m._tokenizer = void 0),
      (m.previous = void 0),
      (m = m.next));
  for (
    s.events = [],
      m ? ((m._tokenizer = void 0), (m.previous = void 0)) : A.pop(),
      y = A.length;
    y--;

  ) {
    const v = a.slice(A[y], A[y + 1]),
      S = l.pop();
    f.unshift([S, S + v.length - 1]), Vr(e, S, 2, v);
  }
  for (y = -1; ++y < f.length; )
    (d[w + f[y][0]] = w + f[y][1]), (w += f[y][1] - f[y][0] - 1);
  return d;
}
const H6 = { tokenize: V6, resolve: W6 },
  j6 = { tokenize: q6, partial: !0 };
function W6(e) {
  return Jk(e), e;
}
function V6(e, t) {
  let n;
  return r;
  function r(a) {
    return (
      e.enter("content"),
      (n = e.enter("chunkContent", { contentType: "content" })),
      i(a)
    );
  }
  function i(a) {
    return a === null ? l(a) : Ee(a) ? e.check(j6, s, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function s(a) {
    return (
      e.consume(a),
      e.exit("chunkContent"),
      (n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n,
      })),
      (n = n.next),
      i
    );
  }
}
function q6(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      e.exit("chunkContent"),
      e.enter("lineEnding"),
      e.consume(s),
      e.exit("lineEnding"),
      Je(e, l, "linePrefix")
    );
  }
  function l(s) {
    if (s === null || Ee(s)) return n(s);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") &&
      a &&
      a[1].type === "linePrefix" &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(s)
      : e.interrupt(r.parser.constructs.flow, n, t)(s);
  }
}
function e_(e, t, n, r, i, l, s, a, f) {
  const d = f || Number.POSITIVE_INFINITY;
  let h = 0;
  return g;
  function g(v) {
    return v === 60
      ? (e.enter(r), e.enter(i), e.enter(l), e.consume(v), e.exit(l), y)
      : v === null || v === 41 || Tg(v)
      ? n(v)
      : (e.enter(r),
        e.enter(s),
        e.enter(a),
        e.enter("chunkString", { contentType: "string" }),
        E(v));
  }
  function y(v) {
    return v === 62
      ? (e.enter(l), e.consume(v), e.exit(l), e.exit(i), e.exit(r), t)
      : (e.enter(a), e.enter("chunkString", { contentType: "string" }), m(v));
  }
  function m(v) {
    return v === 62
      ? (e.exit("chunkString"), e.exit(a), y(v))
      : v === null || v === 60 || Ee(v)
      ? n(v)
      : (e.consume(v), v === 92 ? w : m);
  }
  function w(v) {
    return v === 60 || v === 62 || v === 92 ? (e.consume(v), m) : m(v);
  }
  function E(v) {
    return v === 40
      ? ++h > d
        ? n(v)
        : (e.consume(v), E)
      : v === 41
      ? h--
        ? (e.consume(v), E)
        : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(v))
      : v === null || fr(v)
      ? h
        ? n(v)
        : (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(v))
      : Tg(v)
      ? n(v)
      : (e.consume(v), v === 92 ? A : E);
  }
  function A(v) {
    return v === 40 || v === 41 || v === 92 ? (e.consume(v), E) : E(v);
  }
}
function t_(e, t, n, r, i, l) {
  const s = this;
  let a = 0,
    f;
  return d;
  function d(m) {
    return e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(l), h;
  }
  function h(m) {
    return m === null ||
      m === 91 ||
      (m === 93 && !f) ||
      (m === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs) ||
      a > 999
      ? n(m)
      : m === 93
      ? (e.exit(l), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t)
      : Ee(m)
      ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), h)
      : (e.enter("chunkString", { contentType: "string" }), g(m));
  }
  function g(m) {
    return m === null || m === 91 || m === 93 || Ee(m) || a++ > 999
      ? (e.exit("chunkString"), h(m))
      : (e.consume(m), (f = f || !bt(m)), m === 92 ? y : g);
  }
  function y(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, g) : g(m);
  }
}
function n_(e, t, n, r, i, l) {
  let s;
  return a;
  function a(y) {
    return (
      e.enter(r),
      e.enter(i),
      e.consume(y),
      e.exit(i),
      (s = y === 40 ? 41 : y),
      f
    );
  }
  function f(y) {
    return y === s
      ? (e.enter(i), e.consume(y), e.exit(i), e.exit(r), t)
      : (e.enter(l), d(y));
  }
  function d(y) {
    return y === s
      ? (e.exit(l), f(s))
      : y === null
      ? n(y)
      : Ee(y)
      ? (e.enter("lineEnding"),
        e.consume(y),
        e.exit("lineEnding"),
        Je(e, d, "linePrefix"))
      : (e.enter("chunkString", { contentType: "string" }), h(y));
  }
  function h(y) {
    return y === s || y === null || Ee(y)
      ? (e.exit("chunkString"), d(y))
      : (e.consume(y), y === 92 ? g : h);
  }
  function g(y) {
    return y === s || y === 92 ? (e.consume(y), h) : h(y);
  }
}
function ts(e, t) {
  let n;
  return r;
  function r(i) {
    return Ee(i)
      ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), (n = !0), r)
      : bt(i)
      ? Je(e, r, n ? "linePrefix" : "lineSuffix")(i)
      : t(i);
  }
}
function Bl(e) {
  return e
    .replace(/[\t\n\r ]+/g, " ")
    .replace(/^ | $/g, "")
    .toLowerCase()
    .toUpperCase();
}
const G6 = { name: "definition", tokenize: Q6 },
  K6 = { tokenize: Y6, partial: !0 };
function Q6(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return (
      e.enter("definition"),
      t_.call(
        r,
        e,
        s,
        n,
        "definitionLabel",
        "definitionLabelMarker",
        "definitionLabelString"
      )(f)
    );
  }
  function s(f) {
    return (
      (i = Bl(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      f === 58
        ? (e.enter("definitionMarker"),
          e.consume(f),
          e.exit("definitionMarker"),
          ts(
            e,
            e_(
              e,
              e.attempt(K6, Je(e, a, "whitespace"), Je(e, a, "whitespace")),
              n,
              "definitionDestination",
              "definitionDestinationLiteral",
              "definitionDestinationLiteralMarker",
              "definitionDestinationRaw",
              "definitionDestinationString"
            )
          ))
        : n(f)
    );
  }
  function a(f) {
    return f === null || Ee(f)
      ? (e.exit("definition"),
        r.parser.defined.includes(i) || r.parser.defined.push(i),
        t(f))
      : n(f);
  }
}
function Y6(e, t, n) {
  return r;
  function r(s) {
    return fr(s) ? ts(e, i)(s) : n(s);
  }
  function i(s) {
    return s === 34 || s === 39 || s === 40
      ? n_(
          e,
          Je(e, l, "whitespace"),
          n,
          "definitionTitle",
          "definitionTitleMarker",
          "definitionTitleString"
        )(s)
      : n(s);
  }
  function l(s) {
    return s === null || Ee(s) ? t(s) : n(s);
  }
}
const X6 = { name: "hardBreakEscape", tokenize: Z6 };
function Z6(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(l), i;
  }
  function i(l) {
    return Ee(l)
      ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(l))
      : n(l);
  }
}
const J6 = { name: "headingAtx", tokenize: t5, resolve: e5 };
function e5(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    l;
  return (
    e[r][1].type === "whitespace" && (r += 2),
    n - 2 > r && e[n][1].type === "whitespace" && (n -= 2),
    e[n][1].type === "atxHeadingSequence" &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === "whitespace")) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = { type: "atxHeadingText", start: e[r][1].start, end: e[n][1].end }),
      (l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text",
      }),
      Vr(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", l, t],
        ["exit", l, t],
        ["exit", i, t],
      ])),
    e
  );
}
function t5(e, t, n) {
  const r = this;
  let i = 0;
  return l;
  function l(h) {
    return e.enter("atxHeading"), e.enter("atxHeadingSequence"), s(h);
  }
  function s(h) {
    return h === 35 && i++ < 6
      ? (e.consume(h), s)
      : h === null || fr(h)
      ? (e.exit("atxHeadingSequence"), r.interrupt ? t(h) : a(h))
      : n(h);
  }
  function a(h) {
    return h === 35
      ? (e.enter("atxHeadingSequence"), f(h))
      : h === null || Ee(h)
      ? (e.exit("atxHeading"), t(h))
      : bt(h)
      ? Je(e, a, "whitespace")(h)
      : (e.enter("atxHeadingText"), d(h));
  }
  function f(h) {
    return h === 35 ? (e.consume(h), f) : (e.exit("atxHeadingSequence"), a(h));
  }
  function d(h) {
    return h === null || h === 35 || fr(h)
      ? (e.exit("atxHeadingText"), a(h))
      : (e.consume(h), d);
  }
}
const n5 = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul",
  ],
  Dw = ["pre", "script", "style", "textarea"],
  r5 = { name: "htmlFlow", tokenize: l5, resolveTo: o5, concrete: !0 },
  i5 = { tokenize: u5, partial: !0 };
function o5(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
  return (
    t > 1 &&
      e[t - 2][1].type === "linePrefix" &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  );
}
function l5(e, t, n) {
  const r = this;
  let i, l, s, a, f;
  return d;
  function d(O) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(O), h;
  }
  function h(O) {
    return O === 33
      ? (e.consume(O), g)
      : O === 47
      ? (e.consume(O), w)
      : O === 63
      ? (e.consume(O), (i = 3), r.interrupt ? t : J)
      : Ur(O)
      ? (e.consume(O), (s = String.fromCharCode(O)), (l = !0), E)
      : n(O);
  }
  function g(O) {
    return O === 45
      ? (e.consume(O), (i = 2), y)
      : O === 91
      ? (e.consume(O), (i = 5), (s = "CDATA["), (a = 0), m)
      : Ur(O)
      ? (e.consume(O), (i = 4), r.interrupt ? t : J)
      : n(O);
  }
  function y(O) {
    return O === 45 ? (e.consume(O), r.interrupt ? t : J) : n(O);
  }
  function m(O) {
    return O === s.charCodeAt(a++)
      ? (e.consume(O), a === s.length ? (r.interrupt ? t : B) : m)
      : n(O);
  }
  function w(O) {
    return Ur(O) ? (e.consume(O), (s = String.fromCharCode(O)), E) : n(O);
  }
  function E(O) {
    return O === null || O === 47 || O === 62 || fr(O)
      ? O !== 47 && l && Dw.includes(s.toLowerCase())
        ? ((i = 1), r.interrupt ? t(O) : B(O))
        : n5.includes(s.toLowerCase())
        ? ((i = 6), O === 47 ? (e.consume(O), A) : r.interrupt ? t(O) : B(O))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? n(O) : l ? S(O) : v(O))
      : O === 45 || Fn(O)
      ? (e.consume(O), (s += String.fromCharCode(O)), E)
      : n(O);
  }
  function A(O) {
    return O === 62 ? (e.consume(O), r.interrupt ? t : B) : n(O);
  }
  function v(O) {
    return bt(O) ? (e.consume(O), v) : q(O);
  }
  function S(O) {
    return O === 47
      ? (e.consume(O), q)
      : O === 58 || O === 95 || Ur(O)
      ? (e.consume(O), _)
      : bt(O)
      ? (e.consume(O), S)
      : q(O);
  }
  function _(O) {
    return O === 45 || O === 46 || O === 58 || O === 95 || Fn(O)
      ? (e.consume(O), _)
      : P(O);
  }
  function P(O) {
    return O === 61 ? (e.consume(O), D) : bt(O) ? (e.consume(O), P) : S(O);
  }
  function D(O) {
    return O === null || O === 60 || O === 61 || O === 62 || O === 96
      ? n(O)
      : O === 34 || O === 39
      ? (e.consume(O), (f = O), R)
      : bt(O)
      ? (e.consume(O), D)
      : ((f = null), F(O));
  }
  function R(O) {
    return O === null || Ee(O)
      ? n(O)
      : O === f
      ? (e.consume(O), z)
      : (e.consume(O), R);
  }
  function F(O) {
    return O === null ||
      O === 34 ||
      O === 39 ||
      O === 60 ||
      O === 61 ||
      O === 62 ||
      O === 96 ||
      fr(O)
      ? P(O)
      : (e.consume(O), F);
  }
  function z(O) {
    return O === 47 || O === 62 || bt(O) ? S(O) : n(O);
  }
  function q(O) {
    return O === 62 ? (e.consume(O), K) : n(O);
  }
  function K(O) {
    return bt(O) ? (e.consume(O), K) : O === null || Ee(O) ? B(O) : n(O);
  }
  function B(O) {
    return O === 45 && i === 2
      ? (e.consume(O), ie)
      : O === 60 && i === 1
      ? (e.consume(O), oe)
      : O === 62 && i === 4
      ? (e.consume(O), ee)
      : O === 63 && i === 3
      ? (e.consume(O), J)
      : O === 93 && i === 5
      ? (e.consume(O), U)
      : Ee(O) && (i === 6 || i === 7)
      ? e.check(i5, ee, X)(O)
      : O === null || Ee(O)
      ? X(O)
      : (e.consume(O), B);
  }
  function X(O) {
    return e.exit("htmlFlowData"), $(O);
  }
  function $(O) {
    return O === null
      ? b(O)
      : Ee(O)
      ? e.attempt({ tokenize: H, partial: !0 }, $, b)(O)
      : (e.enter("htmlFlowData"), B(O));
  }
  function H(O, fe, ve) {
    return Ae;
    function Ae(Oe) {
      return O.enter("lineEnding"), O.consume(Oe), O.exit("lineEnding"), de;
    }
    function de(Oe) {
      return r.parser.lazy[r.now().line] ? ve(Oe) : fe(Oe);
    }
  }
  function ie(O) {
    return O === 45 ? (e.consume(O), J) : B(O);
  }
  function oe(O) {
    return O === 47 ? (e.consume(O), (s = ""), ue) : B(O);
  }
  function ue(O) {
    return O === 62 && Dw.includes(s.toLowerCase())
      ? (e.consume(O), ee)
      : Ur(O) && s.length < 8
      ? (e.consume(O), (s += String.fromCharCode(O)), ue)
      : B(O);
  }
  function U(O) {
    return O === 93 ? (e.consume(O), J) : B(O);
  }
  function J(O) {
    return O === 62
      ? (e.consume(O), ee)
      : O === 45 && i === 2
      ? (e.consume(O), J)
      : B(O);
  }
  function ee(O) {
    return O === null || Ee(O)
      ? (e.exit("htmlFlowData"), b(O))
      : (e.consume(O), ee);
  }
  function b(O) {
    return e.exit("htmlFlow"), t(O);
  }
}
function u5(e, t, n) {
  return r;
  function r(i) {
    return (
      e.exit("htmlFlowData"),
      e.enter("lineEndingBlank"),
      e.consume(i),
      e.exit("lineEndingBlank"),
      e.attempt(Xf, t, n)
    );
  }
}
const s5 = { name: "htmlText", tokenize: a5 };
function a5(e, t, n) {
  const r = this;
  let i, l, s, a;
  return f;
  function f(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), d;
  }
  function d(b) {
    return b === 33
      ? (e.consume(b), h)
      : b === 47
      ? (e.consume(b), F)
      : b === 63
      ? (e.consume(b), D)
      : Ur(b)
      ? (e.consume(b), K)
      : n(b);
  }
  function h(b) {
    return b === 45
      ? (e.consume(b), g)
      : b === 91
      ? (e.consume(b), (l = "CDATA["), (s = 0), A)
      : Ur(b)
      ? (e.consume(b), P)
      : n(b);
  }
  function g(b) {
    return b === 45 ? (e.consume(b), y) : n(b);
  }
  function y(b) {
    return b === null || b === 62 ? n(b) : b === 45 ? (e.consume(b), m) : w(b);
  }
  function m(b) {
    return b === null || b === 62 ? n(b) : w(b);
  }
  function w(b) {
    return b === null
      ? n(b)
      : b === 45
      ? (e.consume(b), E)
      : Ee(b)
      ? ((a = w), U(b))
      : (e.consume(b), w);
  }
  function E(b) {
    return b === 45 ? (e.consume(b), ee) : w(b);
  }
  function A(b) {
    return b === l.charCodeAt(s++)
      ? (e.consume(b), s === l.length ? v : A)
      : n(b);
  }
  function v(b) {
    return b === null
      ? n(b)
      : b === 93
      ? (e.consume(b), S)
      : Ee(b)
      ? ((a = v), U(b))
      : (e.consume(b), v);
  }
  function S(b) {
    return b === 93 ? (e.consume(b), _) : v(b);
  }
  function _(b) {
    return b === 62 ? ee(b) : b === 93 ? (e.consume(b), _) : v(b);
  }
  function P(b) {
    return b === null || b === 62
      ? ee(b)
      : Ee(b)
      ? ((a = P), U(b))
      : (e.consume(b), P);
  }
  function D(b) {
    return b === null
      ? n(b)
      : b === 63
      ? (e.consume(b), R)
      : Ee(b)
      ? ((a = D), U(b))
      : (e.consume(b), D);
  }
  function R(b) {
    return b === 62 ? ee(b) : D(b);
  }
  function F(b) {
    return Ur(b) ? (e.consume(b), z) : n(b);
  }
  function z(b) {
    return b === 45 || Fn(b) ? (e.consume(b), z) : q(b);
  }
  function q(b) {
    return Ee(b) ? ((a = q), U(b)) : bt(b) ? (e.consume(b), q) : ee(b);
  }
  function K(b) {
    return b === 45 || Fn(b)
      ? (e.consume(b), K)
      : b === 47 || b === 62 || fr(b)
      ? B(b)
      : n(b);
  }
  function B(b) {
    return b === 47
      ? (e.consume(b), ee)
      : b === 58 || b === 95 || Ur(b)
      ? (e.consume(b), X)
      : Ee(b)
      ? ((a = B), U(b))
      : bt(b)
      ? (e.consume(b), B)
      : ee(b);
  }
  function X(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Fn(b)
      ? (e.consume(b), X)
      : $(b);
  }
  function $(b) {
    return b === 61
      ? (e.consume(b), H)
      : Ee(b)
      ? ((a = $), U(b))
      : bt(b)
      ? (e.consume(b), $)
      : B(b);
  }
  function H(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96
      ? n(b)
      : b === 34 || b === 39
      ? (e.consume(b), (i = b), ie)
      : Ee(b)
      ? ((a = H), U(b))
      : bt(b)
      ? (e.consume(b), H)
      : (e.consume(b), (i = void 0), ue);
  }
  function ie(b) {
    return b === i
      ? (e.consume(b), oe)
      : b === null
      ? n(b)
      : Ee(b)
      ? ((a = ie), U(b))
      : (e.consume(b), ie);
  }
  function oe(b) {
    return b === 62 || b === 47 || fr(b) ? B(b) : n(b);
  }
  function ue(b) {
    return b === null ||
      b === 34 ||
      b === 39 ||
      b === 60 ||
      b === 61 ||
      b === 96
      ? n(b)
      : b === 62 || fr(b)
      ? B(b)
      : (e.consume(b), ue);
  }
  function U(b) {
    return (
      e.exit("htmlTextData"),
      e.enter("lineEnding"),
      e.consume(b),
      e.exit("lineEnding"),
      Je(
        e,
        J,
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )
    );
  }
  function J(b) {
    return e.enter("htmlTextData"), a(b);
  }
  function ee(b) {
    return b === 62
      ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t)
      : n(b);
  }
}
const _v = { name: "labelEnd", tokenize: g5, resolveTo: h5, resolveAll: p5 },
  c5 = { tokenize: m5 },
  f5 = { tokenize: v5 },
  d5 = { tokenize: y5 };
function p5(e) {
  let t = -1,
    n;
  for (; ++t < e.length; )
    (n = e[t][1]),
      (n.type === "labelImage" ||
        n.type === "labelLink" ||
        n.type === "labelEnd") &&
        (e.splice(t + 1, n.type === "labelImage" ? 4 : 2),
        (n.type = "data"),
        t++);
  return e;
}
function h5(e, t) {
  let n = e.length,
    r = 0,
    i,
    l,
    s,
    a;
  for (; n--; )
    if (((i = e[n][1]), l)) {
      if (i.type === "link" || (i.type === "labelLink" && i._inactive)) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (s) {
      if (
        e[n][0] === "enter" &&
        (i.type === "labelImage" || i.type === "labelLink") &&
        !i._balanced &&
        ((l = n), i.type !== "labelLink")
      ) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (s = n);
  const f = {
      type: e[l][1].type === "labelLink" ? "link" : "image",
      start: Object.assign({}, e[l][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    },
    d = {
      type: "label",
      start: Object.assign({}, e[l][1].start),
      end: Object.assign({}, e[s][1].end),
    },
    h = {
      type: "labelText",
      start: Object.assign({}, e[l + r + 2][1].end),
      end: Object.assign({}, e[s - 2][1].start),
    };
  return (
    (a = [
      ["enter", f, t],
      ["enter", d, t],
    ]),
    (a = ur(a, e.slice(l + 1, l + r + 3))),
    (a = ur(a, [["enter", h, t]])),
    (a = ur(
      a,
      Cv(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, s - 3), t)
    )),
    (a = ur(a, [["exit", h, t], e[s - 2], e[s - 1], ["exit", d, t]])),
    (a = ur(a, e.slice(s + 1))),
    (a = ur(a, [["exit", f, t]])),
    Vr(e, l, e.length, a),
    e
  );
}
function g5(e, t, n) {
  const r = this;
  let i = r.events.length,
    l,
    s;
  for (; i--; )
    if (
      (r.events[i][1].type === "labelImage" ||
        r.events[i][1].type === "labelLink") &&
      !r.events[i][1]._balanced
    ) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l
      ? l._inactive
        ? d(h)
        : ((s = r.parser.defined.includes(
            Bl(r.sliceSerialize({ start: l.end, end: r.now() }))
          )),
          e.enter("labelEnd"),
          e.enter("labelMarker"),
          e.consume(h),
          e.exit("labelMarker"),
          e.exit("labelEnd"),
          f)
      : n(h);
  }
  function f(h) {
    return h === 40
      ? e.attempt(c5, t, s ? t : d)(h)
      : h === 91
      ? e.attempt(f5, t, s ? e.attempt(d5, t, d) : d)(h)
      : s
      ? t(h)
      : d(h);
  }
  function d(h) {
    return (l._balanced = !0), n(h);
  }
}
function m5(e, t, n) {
  return r;
  function r(f) {
    return (
      e.enter("resource"),
      e.enter("resourceMarker"),
      e.consume(f),
      e.exit("resourceMarker"),
      ts(e, i)
    );
  }
  function i(f) {
    return f === 41
      ? a(f)
      : e_(
          e,
          l,
          n,
          "resourceDestination",
          "resourceDestinationLiteral",
          "resourceDestinationLiteralMarker",
          "resourceDestinationRaw",
          "resourceDestinationString",
          32
        )(f);
  }
  function l(f) {
    return fr(f) ? ts(e, s)(f) : a(f);
  }
  function s(f) {
    return f === 34 || f === 39 || f === 40
      ? n_(
          e,
          ts(e, a),
          n,
          "resourceTitle",
          "resourceTitleMarker",
          "resourceTitleString"
        )(f)
      : a(f);
  }
  function a(f) {
    return f === 41
      ? (e.enter("resourceMarker"),
        e.consume(f),
        e.exit("resourceMarker"),
        e.exit("resource"),
        t)
      : n(f);
  }
}
function v5(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return t_.call(
      r,
      e,
      l,
      n,
      "reference",
      "referenceMarker",
      "referenceString"
    )(s);
  }
  function l(s) {
    return r.parser.defined.includes(
      Bl(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(s)
      : n(s);
  }
}
function y5(e, t, n) {
  return r;
  function r(l) {
    return (
      e.enter("reference"),
      e.enter("referenceMarker"),
      e.consume(l),
      e.exit("referenceMarker"),
      i
    );
  }
  function i(l) {
    return l === 93
      ? (e.enter("referenceMarker"),
        e.consume(l),
        e.exit("referenceMarker"),
        e.exit("reference"),
        t)
      : n(l);
  }
}
const x5 = { name: "labelStartImage", tokenize: w5, resolveAll: _v.resolveAll };
function w5(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return (
      e.enter("labelImage"),
      e.enter("labelImageMarker"),
      e.consume(a),
      e.exit("labelImageMarker"),
      l
    );
  }
  function l(a) {
    return a === 91
      ? (e.enter("labelMarker"),
        e.consume(a),
        e.exit("labelMarker"),
        e.exit("labelImage"),
        s)
      : n(a);
  }
  function s(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(a)
      : t(a);
  }
}
const S5 = { name: "labelStartLink", tokenize: E5, resolveAll: _v.resolveAll };
function E5(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      e.enter("labelLink"),
      e.enter("labelMarker"),
      e.consume(s),
      e.exit("labelMarker"),
      e.exit("labelLink"),
      l
    );
  }
  function l(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs
      ? n(s)
      : t(s);
  }
}
const dh = { name: "lineEnding", tokenize: C5 };
function C5(e, t) {
  return n;
  function n(r) {
    return (
      e.enter("lineEnding"),
      e.consume(r),
      e.exit("lineEnding"),
      Je(e, t, "linePrefix")
    );
  }
}
const ac = { name: "thematicBreak", tokenize: k5 };
function k5(e, t, n) {
  let r = 0,
    i;
  return l;
  function l(f) {
    return e.enter("thematicBreak"), (i = f), s(f);
  }
  function s(f) {
    return f === i
      ? (e.enter("thematicBreakSequence"), a(f))
      : bt(f)
      ? Je(e, s, "whitespace")(f)
      : r < 3 || (f !== null && !Ee(f))
      ? n(f)
      : (e.exit("thematicBreak"), t(f));
  }
  function a(f) {
    return f === i
      ? (e.consume(f), r++, a)
      : (e.exit("thematicBreakSequence"), s(f));
  }
}
const yn = {
    name: "list",
    tokenize: O5,
    continuation: { tokenize: I5 },
    exit: R5,
  },
  _5 = { tokenize: P5, partial: !0 },
  b5 = { tokenize: T5, partial: !0 };
function O5(e, t, n) {
  const r = this,
    i = r.events[r.events.length - 1];
  let l =
      i && i[1].type === "linePrefix"
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    s = 0;
  return a;
  function a(m) {
    const w =
      r.containerState.type ||
      (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
    if (
      w === "listUnordered"
        ? !r.containerState.marker || m === r.containerState.marker
        : Ig(m)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = w), e.enter(w, { _container: !0 })),
        w === "listUnordered")
      )
        return (
          e.enter("listItemPrefix"),
          m === 42 || m === 45 ? e.check(ac, n, d)(m) : d(m)
        );
      if (!r.interrupt || m === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), f(m);
    }
    return n(m);
  }
  function f(m) {
    return Ig(m) && ++s < 10
      ? (e.consume(m), f)
      : (!r.interrupt || s < 2) &&
        (r.containerState.marker
          ? m === r.containerState.marker
          : m === 41 || m === 46)
      ? (e.exit("listItemValue"), d(m))
      : n(m);
  }
  function d(m) {
    return (
      e.enter("listItemMarker"),
      e.consume(m),
      e.exit("listItemMarker"),
      (r.containerState.marker = r.containerState.marker || m),
      e.check(Xf, r.interrupt ? n : h, e.attempt(_5, y, g))
    );
  }
  function h(m) {
    return (r.containerState.initialBlankLine = !0), l++, y(m);
  }
  function g(m) {
    return bt(m)
      ? (e.enter("listItemPrefixWhitespace"),
        e.consume(m),
        e.exit("listItemPrefixWhitespace"),
        y)
      : n(m);
  }
  function y(m) {
    return (
      (r.containerState.size =
        l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length),
      t(m)
    );
  }
}
function I5(e, t, n) {
  const r = this;
  return (r.containerState._closeFlow = void 0), e.check(Xf, i, l);
  function i(a) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      Je(e, t, "listItemIndent", r.containerState.size + 1)(a)
    );
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !bt(a)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        s(a))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(b5, t, s)(a));
  }
  function s(a) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      Je(
        e,
        e.attempt(yn, t, n),
        "linePrefix",
        r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(a)
    );
  }
}
function T5(e, t, n) {
  const r = this;
  return Je(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const s = r.events[r.events.length - 1];
    return s &&
      s[1].type === "listItemIndent" &&
      s[2].sliceSerialize(s[1], !0).length === r.containerState.size
      ? t(l)
      : n(l);
  }
}
function R5(e) {
  e.exit(this.containerState.type);
}
function P5(e, t, n) {
  const r = this;
  return Je(
    e,
    i,
    "listItemPrefixWhitespace",
    r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function i(l) {
    const s = r.events[r.events.length - 1];
    return !bt(l) && s && s[1].type === "listItemPrefixWhitespace"
      ? t(l)
      : n(l);
  }
}
const Lw = { name: "setextUnderline", tokenize: D5, resolveTo: A5 };
function A5(e, t) {
  let n = e.length,
    r,
    i,
    l;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1),
        !l && e[n][1].type === "definition" && (l = n);
  const s = {
    type: "setextHeading",
    start: Object.assign({}, e[i][1].start),
    end: Object.assign({}, e[e.length - 1][1].end),
  };
  return (
    (e[i][1].type = "setextHeadingText"),
    l
      ? (e.splice(i, 0, ["enter", s, t]),
        e.splice(l + 1, 0, ["exit", e[r][1], t]),
        (e[r][1].end = Object.assign({}, e[l][1].end)))
      : (e[r][1] = s),
    e.push(["exit", s, t]),
    e
  );
}
function D5(e, t, n) {
  const r = this;
  let i = r.events.length,
    l,
    s;
  for (; i--; )
    if (
      r.events[i][1].type !== "lineEnding" &&
      r.events[i][1].type !== "linePrefix" &&
      r.events[i][1].type !== "content"
    ) {
      s = r.events[i][1].type === "paragraph";
      break;
    }
  return a;
  function a(h) {
    return !r.parser.lazy[r.now().line] && (r.interrupt || s)
      ? (e.enter("setextHeadingLine"),
        e.enter("setextHeadingLineSequence"),
        (l = h),
        f(h))
      : n(h);
  }
  function f(h) {
    return h === l
      ? (e.consume(h), f)
      : (e.exit("setextHeadingLineSequence"), Je(e, d, "lineSuffix")(h));
  }
  function d(h) {
    return h === null || Ee(h) ? (e.exit("setextHeadingLine"), t(h)) : n(h);
  }
}
const L5 = { tokenize: M5 };
function M5(e) {
  const t = this,
    n = e.attempt(
      Xf,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        Je(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(H6, i)),
          "linePrefix"
        )
      )
    );
  return n;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEndingBlank"),
      e.consume(l),
      e.exit("lineEndingBlank"),
      (t.currentConstruct = void 0),
      n
    );
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return (
      e.enter("lineEnding"),
      e.consume(l),
      e.exit("lineEnding"),
      (t.currentConstruct = void 0),
      n
    );
  }
}
const N5 = { resolveAll: i_() },
  F5 = r_("string"),
  z5 = r_("text");
function r_(e) {
  return { tokenize: t, resolveAll: i_(e === "text" ? $5 : void 0) };
  function t(n) {
    const r = this,
      i = this.parser.constructs[e],
      l = n.attempt(i, s, a);
    return s;
    function s(h) {
      return d(h) ? l(h) : a(h);
    }
    function a(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("data"), n.consume(h), f;
    }
    function f(h) {
      return d(h) ? (n.exit("data"), l(h)) : (n.consume(h), f);
    }
    function d(h) {
      if (h === null) return !0;
      const g = i[h];
      let y = -1;
      if (g)
        for (; ++y < g.length; ) {
          const m = g[y];
          if (!m.previous || m.previous.call(r, r.previous)) return !0;
        }
      return !1;
    }
  }
}
function i_(e) {
  return t;
  function t(n, r) {
    let i = -1,
      l;
    for (; ++i <= n.length; )
      l === void 0
        ? n[i] && n[i][1].type === "data" && ((l = i), i++)
        : (!n[i] || n[i][1].type !== "data") &&
          (i !== l + 2 &&
            ((n[l][1].end = n[i - 1][1].end),
            n.splice(l + 2, i - l - 2),
            (i = l + 2)),
          (l = void 0));
    return e ? e(n, r) : n;
  }
}
function $5(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === "lineEnding") &&
      e[n - 1][1].type === "data"
    ) {
      const r = e[n - 1][1],
        i = t.sliceStream(r);
      let l = i.length,
        s = -1,
        a = 0,
        f;
      for (; l--; ) {
        const d = i[l];
        if (typeof d == "string") {
          for (s = d.length; d.charCodeAt(s - 1) === 32; ) a++, s--;
          if (s) break;
          s = -1;
        } else if (d === -2) (f = !0), a++;
        else if (d !== -1) {
          l++;
          break;
        }
      }
      if (a) {
        const d = {
          type:
            n === e.length || f || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a,
            _index: r.start._index + l,
            _bufferIndex: l ? s : r.start._bufferIndex + s,
          },
          end: Object.assign({}, r.end),
        };
        (r.end = Object.assign({}, d.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, d)
            : (e.splice(n, 0, ["enter", d, t], ["exit", d, t]), (n += 2));
      }
      n++;
    }
  return e;
}
function B5(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
    { _index: 0, _bufferIndex: -1 }
  );
  const i = {},
    l = [];
  let s = [],
    a = [];
  const f = {
      consume: S,
      enter: _,
      exit: P,
      attempt: F(D),
      check: F(R),
      interrupt: F(R, { interrupt: !0 }),
    },
    d = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: m,
      sliceSerialize: y,
      now: w,
      defineSkip: E,
      write: g,
    };
  let h = t.tokenize.call(d, f);
  return t.resolveAll && l.push(t), d;
  function g(B) {
    return (
      (s = ur(s, B)),
      A(),
      s[s.length - 1] !== null
        ? []
        : (z(t, 0), (d.events = Cv(l, d.events, d)), d.events)
    );
  }
  function y(B, X) {
    return H5(m(B), X);
  }
  function m(B) {
    return U5(s, B);
  }
  function w() {
    return Object.assign({}, r);
  }
  function E(B) {
    (i[B.line] = B.column), K();
  }
  function A() {
    let B;
    for (; r._index < s.length; ) {
      const X = s[r._index];
      if (typeof X == "string")
        for (
          B = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === B && r._bufferIndex < X.length;

        )
          v(X.charCodeAt(r._bufferIndex));
      else v(X);
    }
  }
  function v(B) {
    h = h(B);
  }
  function S(B) {
    Ee(B)
      ? (r.line++, (r.column = 1), (r.offset += B === -3 ? 2 : 1), K())
      : B !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === s[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (d.previous = B);
  }
  function _(B, X) {
    const $ = X || {};
    return (
      ($.type = B),
      ($.start = w()),
      d.events.push(["enter", $, d]),
      a.push($),
      $
    );
  }
  function P(B) {
    const X = a.pop();
    return (X.end = w()), d.events.push(["exit", X, d]), X;
  }
  function D(B, X) {
    z(B, X.from);
  }
  function R(B, X) {
    X.restore();
  }
  function F(B, X) {
    return $;
    function $(H, ie, oe) {
      let ue, U, J, ee;
      return Array.isArray(H) ? O(H) : "tokenize" in H ? O([H]) : b(H);
      function b(de) {
        return Oe;
        function Oe(ye) {
          const Fe = ye !== null && de[ye],
            Te = ye !== null && de.null,
            Ue = [
              ...(Array.isArray(Fe) ? Fe : Fe ? [Fe] : []),
              ...(Array.isArray(Te) ? Te : Te ? [Te] : []),
            ];
          return O(Ue)(ye);
        }
      }
      function O(de) {
        return (ue = de), (U = 0), de.length === 0 ? oe : fe(de[U]);
      }
      function fe(de) {
        return Oe;
        function Oe(ye) {
          return (
            (ee = q()),
            (J = de),
            de.partial || (d.currentConstruct = de),
            de.name && d.parser.constructs.disable.null.includes(de.name)
              ? Ae()
              : de.tokenize.call(
                  X ? Object.assign(Object.create(d), X) : d,
                  f,
                  ve,
                  Ae
                )(ye)
          );
        }
      }
      function ve(de) {
        return B(J, ee), ie;
      }
      function Ae(de) {
        return ee.restore(), ++U < ue.length ? fe(ue[U]) : oe;
      }
    }
  }
  function z(B, X) {
    B.resolveAll && !l.includes(B) && l.push(B),
      B.resolve &&
        Vr(d.events, X, d.events.length - X, B.resolve(d.events.slice(X), d)),
      B.resolveTo && (d.events = B.resolveTo(d.events, d));
  }
  function q() {
    const B = w(),
      X = d.previous,
      $ = d.currentConstruct,
      H = d.events.length,
      ie = Array.from(a);
    return { restore: oe, from: H };
    function oe() {
      (r = B),
        (d.previous = X),
        (d.currentConstruct = $),
        (d.events.length = H),
        (a = ie),
        K();
    }
  }
  function K() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1));
  }
}
function U5(e, t) {
  const n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    l = t.end._bufferIndex;
  let s;
  return (
    n === i
      ? (s = [e[n].slice(r, l)])
      : ((s = e.slice(n, i)),
        r > -1 && (s[0] = s[0].slice(r)),
        l > 0 && s.push(e[i].slice(0, l))),
    s
  );
}
function H5(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const l = e[n];
    let s;
    if (typeof l == "string") s = l;
    else
      switch (l) {
        case -5: {
          s = "\r";
          break;
        }
        case -4: {
          s = `
`;
          break;
        }
        case -3: {
          s = `\r
`;
          break;
        }
        case -2: {
          s = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          s = " ";
          break;
        }
        default:
          s = String.fromCharCode(l);
      }
    (i = l === -2), r.push(s);
  }
  return r.join("");
}
const j5 = {
    [42]: yn,
    [43]: yn,
    [45]: yn,
    [48]: yn,
    [49]: yn,
    [50]: yn,
    [51]: yn,
    [52]: yn,
    [53]: yn,
    [54]: yn,
    [55]: yn,
    [56]: yn,
    [57]: yn,
    [62]: Yk,
  },
  W5 = { [91]: G6 },
  V5 = { [-2]: fh, [-1]: fh, [32]: fh },
  q5 = {
    [35]: J6,
    [42]: ac,
    [45]: [Lw, ac],
    [60]: r5,
    [61]: Lw,
    [95]: ac,
    [96]: Aw,
    [126]: Aw,
  },
  G5 = { [38]: Zk, [92]: Xk },
  K5 = {
    [-5]: dh,
    [-4]: dh,
    [-3]: dh,
    [33]: x5,
    [38]: Zk,
    [42]: Rg,
    [60]: [_6, s5],
    [91]: S5,
    [92]: [X6, Xk],
    [93]: _v,
    [95]: Rg,
    [96]: F6,
  },
  Q5 = { null: [Rg, N5] },
  Y5 = { null: [42, 95] },
  X5 = { null: [] },
  Z5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        document: j5,
        contentInitial: W5,
        flowInitial: V5,
        flow: q5,
        string: G5,
        text: K5,
        insideSpan: Q5,
        attentionMarkers: Y5,
        disable: X5,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function J5(e = {}) {
  const t = c6([Z5].concat(e.extensions || [])),
    n = {
      defined: [],
      lazy: {},
      constructs: t,
      content: r(y6),
      document: r(w6),
      flow: r(L5),
      string: r(F5),
      text: r(z5),
    };
  return n;
  function r(i) {
    return l;
    function l(s) {
      return B5(n, i, s);
    }
  }
}
const Mw = /[\0\t\n\r]/g;
function e$() {
  let e = 1,
    t = "",
    n = !0,
    r;
  return i;
  function i(l, s, a) {
    const f = [];
    let d, h, g, y, m;
    for (
      l = t + l.toString(s),
        g = 0,
        t = "",
        n && (l.charCodeAt(0) === 65279 && g++, (n = void 0));
      g < l.length;

    ) {
      if (
        ((Mw.lastIndex = g),
        (d = Mw.exec(l)),
        (y = d && d.index !== void 0 ? d.index : l.length),
        (m = l.charCodeAt(y)),
        !d)
      ) {
        t = l.slice(g);
        break;
      }
      if (m === 10 && g === y && r) f.push(-3), (r = void 0);
      else
        switch (
          (r && (f.push(-5), (r = void 0)),
          g < y && (f.push(l.slice(g, y)), (e += y - g)),
          m)
        ) {
          case 0: {
            f.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, f.push(-2); e++ < h; ) f.push(-1);
            break;
          }
          case 10: {
            f.push(-4), (e = 1);
            break;
          }
          default:
            (r = !0), (e = 1);
        }
      g = y + 1;
    }
    return a && (r && f.push(-5), t && f.push(t), f.push(null)), f;
  }
}
function t$(e) {
  for (; !Jk(e); );
  return e;
}
function o_(e, t) {
  const n = Number.parseInt(e, t);
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) === 65535 ||
    (n & 65535) === 65534 ||
    n > 1114111
    ? "�"
    : String.fromCharCode(n);
}
const n$ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function r$(e) {
  return e.replace(n$, i$);
}
function i$(e, t, n) {
  if (t) return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1),
      l = i === 120 || i === 88;
    return o_(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return kv(n) || e;
}
const Pg = {}.hasOwnProperty,
  o$ = function (e, t, n) {
    return (
      typeof t != "string" && ((n = t), (t = void 0)),
      l$(n)(t$(J5(n).document().write(e$()(e, t, !0))))
    );
  };
function l$(e = {}) {
  const t = l_(
      {
        transforms: [],
        canContainEols: [
          "emphasis",
          "fragment",
          "heading",
          "paragraph",
          "strong",
        ],
        enter: {
          autolink: f(Vt),
          autolinkProtocol: X,
          autolinkEmail: X,
          atxHeading: f(ut),
          blockQuote: f($e),
          characterEscape: X,
          characterReference: X,
          codeFenced: f(We),
          codeFencedFenceInfo: d,
          codeFencedFenceMeta: d,
          codeIndented: f(We, d),
          codeText: f(yt, d),
          codeTextData: X,
          data: X,
          codeFlowValue: X,
          definition: f(qn),
          definitionDestinationString: d,
          definitionLabelString: d,
          definitionTitleString: d,
          emphasis: f(he),
          hardBreakEscape: f(zt),
          hardBreakTrailing: f(zt),
          htmlFlow: f(pn, d),
          htmlFlowData: X,
          htmlText: f(pn, d),
          htmlTextData: X,
          image: f(Gn),
          label: d,
          link: f(Vt),
          listItem: f(qr),
          listItemValue: E,
          listOrdered: f(vr, w),
          listUnordered: f(vr),
          paragraph: f(Yo),
          reference: de,
          referenceString: d,
          resourceDestinationString: d,
          resourceTitleString: d,
          setextHeading: f(ut),
          strong: f(Pr),
          thematicBreak: f(Qn),
        },
        exit: {
          atxHeading: g(),
          atxHeadingSequence: z,
          autolink: g(),
          autolinkEmail: Ue,
          autolinkProtocol: Te,
          blockQuote: g(),
          characterEscapeValue: $,
          characterReferenceMarkerHexadecimal: ye,
          characterReferenceMarkerNumeric: ye,
          characterReferenceValue: Fe,
          codeFenced: g(_),
          codeFencedFence: S,
          codeFencedFenceInfo: A,
          codeFencedFenceMeta: v,
          codeFlowValue: $,
          codeIndented: g(P),
          codeText: g(U),
          codeTextData: $,
          data: $,
          definition: g(),
          definitionDestinationString: F,
          definitionLabelString: D,
          definitionTitleString: R,
          emphasis: g(),
          hardBreakEscape: g(ie),
          hardBreakTrailing: g(ie),
          htmlFlow: g(oe),
          htmlFlowData: $,
          htmlText: g(ue),
          htmlTextData: $,
          image: g(ee),
          label: O,
          labelText: b,
          lineEnding: H,
          link: g(J),
          listItem: g(),
          listOrdered: g(),
          listUnordered: g(),
          paragraph: g(),
          referenceString: Oe,
          resourceDestinationString: fe,
          resourceTitleString: ve,
          resource: Ae,
          setextHeading: g(B),
          setextHeadingLineSequence: K,
          setextHeadingText: q,
          strong: g(),
          thematicBreak: g(),
        },
      },
      e.mdastExtensions || []
    ),
    n = {};
  return r;
  function r(W) {
    let re = { type: "root", children: [] };
    const xe = [re],
      He = [],
      qt = [],
      Gr = {
        stack: xe,
        tokenStack: He,
        config: t,
        enter: h,
        exit: y,
        buffer: d,
        resume: m,
        setData: l,
        getData: s,
      };
    let qe = -1;
    for (; ++qe < W.length; )
      if (W[qe][1].type === "listOrdered" || W[qe][1].type === "listUnordered")
        if (W[qe][0] === "enter") qt.push(qe);
        else {
          const St = qt.pop();
          qe = i(W, St, qe);
        }
    for (qe = -1; ++qe < W.length; ) {
      const St = t[W[qe][0]];
      Pg.call(St, W[qe][1].type) &&
        St[W[qe][1].type].call(
          Object.assign({ sliceSerialize: W[qe][2].sliceSerialize }, Gr),
          W[qe][1]
        );
    }
    if (He.length > 0) {
      const St = He[He.length - 1];
      (St[1] || Nw).call(Gr, void 0, St[0]);
    }
    for (
      re.position = {
        start: a(
          W.length > 0 ? W[0][1].start : { line: 1, column: 1, offset: 0 }
        ),
        end: a(
          W.length > 0
            ? W[W.length - 2][1].end
            : { line: 1, column: 1, offset: 0 }
        ),
      },
        qe = -1;
      ++qe < t.transforms.length;

    )
      re = t.transforms[qe](re) || re;
    return re;
  }
  function i(W, re, xe) {
    let He = re - 1,
      qt = -1,
      Gr = !1,
      qe,
      St,
      Ar,
      Kr;
    for (; ++He <= xe; ) {
      const dt = W[He];
      if (
        (dt[1].type === "listUnordered" ||
        dt[1].type === "listOrdered" ||
        dt[1].type === "blockQuote"
          ? (dt[0] === "enter" ? qt++ : qt--, (Kr = void 0))
          : dt[1].type === "lineEndingBlank"
          ? dt[0] === "enter" &&
            (qe && !Kr && !qt && !Ar && (Ar = He), (Kr = void 0))
          : dt[1].type === "linePrefix" ||
            dt[1].type === "listItemValue" ||
            dt[1].type === "listItemMarker" ||
            dt[1].type === "listItemPrefix" ||
            dt[1].type === "listItemPrefixWhitespace" ||
            (Kr = void 0),
        (!qt && dt[0] === "enter" && dt[1].type === "listItemPrefix") ||
          (qt === -1 &&
            dt[0] === "exit" &&
            (dt[1].type === "listUnordered" || dt[1].type === "listOrdered")))
      ) {
        if (qe) {
          let lu = He;
          for (St = void 0; lu--; ) {
            const yr = W[lu];
            if (
              yr[1].type === "lineEnding" ||
              yr[1].type === "lineEndingBlank"
            ) {
              if (yr[0] === "exit") continue;
              St && ((W[St][1].type = "lineEndingBlank"), (Gr = !0)),
                (yr[1].type = "lineEnding"),
                (St = lu);
            } else if (
              !(
                yr[1].type === "linePrefix" ||
                yr[1].type === "blockQuotePrefix" ||
                yr[1].type === "blockQuotePrefixWhitespace" ||
                yr[1].type === "blockQuoteMarker" ||
                yr[1].type === "listItemIndent"
              )
            )
              break;
          }
          Ar && (!St || Ar < St) && (qe._spread = !0),
            (qe.end = Object.assign({}, St ? W[St][1].start : dt[1].end)),
            W.splice(St || He, 0, ["exit", qe, dt[2]]),
            He++,
            xe++;
        }
        dt[1].type === "listItemPrefix" &&
          ((qe = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, dt[1].start),
          }),
          W.splice(He, 0, ["enter", qe, dt[2]]),
          He++,
          xe++,
          (Ar = void 0),
          (Kr = !0));
      }
    }
    return (W[re][1]._spread = Gr), xe;
  }
  function l(W, re) {
    n[W] = re;
  }
  function s(W) {
    return n[W];
  }
  function a(W) {
    return { line: W.line, column: W.column, offset: W.offset };
  }
  function f(W, re) {
    return xe;
    function xe(He) {
      h.call(this, W(He), He), re && re.call(this, He);
    }
  }
  function d() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function h(W, re, xe) {
    return (
      this.stack[this.stack.length - 1].children.push(W),
      this.stack.push(W),
      this.tokenStack.push([re, xe]),
      (W.position = { start: a(re.start) }),
      W
    );
  }
  function g(W) {
    return re;
    function re(xe) {
      W && W.call(this, xe), y.call(this, xe);
    }
  }
  function y(W, re) {
    const xe = this.stack.pop(),
      He = this.tokenStack.pop();
    if (He)
      He[0].type !== W.type &&
        (re ? re.call(this, W, He[0]) : (He[1] || Nw).call(this, W, He[0]));
    else
      throw new Error(
        "Cannot close `" +
          W.type +
          "` (" +
          es({ start: W.start, end: W.end }) +
          "): it’s not open"
      );
    return (xe.position.end = a(W.end)), xe;
  }
  function m() {
    return a6(this.stack.pop());
  }
  function w() {
    l("expectingFirstListItemValue", !0);
  }
  function E(W) {
    if (s("expectingFirstListItemValue")) {
      const re = this.stack[this.stack.length - 2];
      (re.start = Number.parseInt(this.sliceSerialize(W), 10)),
        l("expectingFirstListItemValue");
    }
  }
  function A() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.lang = W;
  }
  function v() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.meta = W;
  }
  function S() {
    s("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0));
  }
  function _() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    (re.value = W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")), l("flowCodeInside");
  }
  function P() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.value = W.replace(/(\r?\n|\r)$/g, "");
  }
  function D(W) {
    const re = this.resume(),
      xe = this.stack[this.stack.length - 1];
    (xe.label = re), (xe.identifier = Bl(this.sliceSerialize(W)).toLowerCase());
  }
  function R() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.title = W;
  }
  function F() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.url = W;
  }
  function z(W) {
    const re = this.stack[this.stack.length - 1];
    if (!re.depth) {
      const xe = this.sliceSerialize(W).length;
      re.depth = xe;
    }
  }
  function q() {
    l("setextHeadingSlurpLineEnding", !0);
  }
  function K(W) {
    const re = this.stack[this.stack.length - 1];
    re.depth = this.sliceSerialize(W).charCodeAt(0) === 61 ? 1 : 2;
  }
  function B() {
    l("setextHeadingSlurpLineEnding");
  }
  function X(W) {
    const re = this.stack[this.stack.length - 1];
    let xe = re.children[re.children.length - 1];
    (!xe || xe.type !== "text") &&
      ((xe = Kn()),
      (xe.position = { start: a(W.start) }),
      re.children.push(xe)),
      this.stack.push(xe);
  }
  function $(W) {
    const re = this.stack.pop();
    (re.value += this.sliceSerialize(W)), (re.position.end = a(W.end));
  }
  function H(W) {
    const re = this.stack[this.stack.length - 1];
    if (s("atHardBreak")) {
      const xe = re.children[re.children.length - 1];
      (xe.position.end = a(W.end)), l("atHardBreak");
      return;
    }
    !s("setextHeadingSlurpLineEnding") &&
      t.canContainEols.includes(re.type) &&
      (X.call(this, W), $.call(this, W));
  }
  function ie() {
    l("atHardBreak", !0);
  }
  function oe() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.value = W;
  }
  function ue() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.value = W;
  }
  function U() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.value = W;
  }
  function J() {
    const W = this.stack[this.stack.length - 1];
    s("inReference")
      ? ((W.type += "Reference"),
        (W.referenceType = s("referenceType") || "shortcut"),
        delete W.url,
        delete W.title)
      : (delete W.identifier, delete W.label),
      l("referenceType");
  }
  function ee() {
    const W = this.stack[this.stack.length - 1];
    s("inReference")
      ? ((W.type += "Reference"),
        (W.referenceType = s("referenceType") || "shortcut"),
        delete W.url,
        delete W.title)
      : (delete W.identifier, delete W.label),
      l("referenceType");
  }
  function b(W) {
    const re = this.stack[this.stack.length - 2],
      xe = this.sliceSerialize(W);
    (re.label = r$(xe)), (re.identifier = Bl(xe).toLowerCase());
  }
  function O() {
    const W = this.stack[this.stack.length - 1],
      re = this.resume(),
      xe = this.stack[this.stack.length - 1];
    l("inReference", !0),
      xe.type === "link" ? (xe.children = W.children) : (xe.alt = re);
  }
  function fe() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.url = W;
  }
  function ve() {
    const W = this.resume(),
      re = this.stack[this.stack.length - 1];
    re.title = W;
  }
  function Ae() {
    l("inReference");
  }
  function de() {
    l("referenceType", "collapsed");
  }
  function Oe(W) {
    const re = this.resume(),
      xe = this.stack[this.stack.length - 1];
    (xe.label = re),
      (xe.identifier = Bl(this.sliceSerialize(W)).toLowerCase()),
      l("referenceType", "full");
  }
  function ye(W) {
    l("characterReferenceType", W.type);
  }
  function Fe(W) {
    const re = this.sliceSerialize(W),
      xe = s("characterReferenceType");
    let He;
    xe
      ? ((He = o_(re, xe === "characterReferenceMarkerNumeric" ? 10 : 16)),
        l("characterReferenceType"))
      : (He = kv(re));
    const qt = this.stack.pop();
    (qt.value += He), (qt.position.end = a(W.end));
  }
  function Te(W) {
    $.call(this, W);
    const re = this.stack[this.stack.length - 1];
    re.url = this.sliceSerialize(W);
  }
  function Ue(W) {
    $.call(this, W);
    const re = this.stack[this.stack.length - 1];
    re.url = "mailto:" + this.sliceSerialize(W);
  }
  function $e() {
    return { type: "blockquote", children: [] };
  }
  function We() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function yt() {
    return { type: "inlineCode", value: "" };
  }
  function qn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
    };
  }
  function he() {
    return { type: "emphasis", children: [] };
  }
  function ut() {
    return { type: "heading", depth: void 0, children: [] };
  }
  function zt() {
    return { type: "break" };
  }
  function pn() {
    return { type: "html", value: "" };
  }
  function Gn() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Vt() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function vr(W) {
    return {
      type: "list",
      ordered: W.type === "listOrdered",
      start: null,
      spread: W._spread,
      children: [],
    };
  }
  function qr(W) {
    return { type: "listItem", spread: W._spread, checked: null, children: [] };
  }
  function Yo() {
    return { type: "paragraph", children: [] };
  }
  function Pr() {
    return { type: "strong", children: [] };
  }
  function Kn() {
    return { type: "text", value: "" };
  }
  function Qn() {
    return { type: "thematicBreak" };
  }
}
function l_(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? l_(e, r) : u$(e, r);
  }
  return e;
}
function u$(e, t) {
  let n;
  for (n in t)
    if (Pg.call(t, n)) {
      const r = n === "canContainEols" || n === "transforms",
        l = (Pg.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}),
        s = t[n];
      s && (r ? (e[n] = [...l, ...s]) : Object.assign(l, s));
    }
}
function Nw(e, t) {
  throw e
    ? new Error(
        "Cannot close `" +
          e.type +
          "` (" +
          es({ start: e.start, end: e.end }) +
          "): a different token (`" +
          t.type +
          "`, " +
          es({ start: t.start, end: t.end }) +
          ") is open"
      )
    : new Error(
        "Cannot close document, a token (`" +
          t.type +
          "`, " +
          es({ start: t.start, end: t.end }) +
          ") is still open"
      );
}
function s$(e) {
  Object.assign(this, {
    Parser: (n) => {
      const r = this.data("settings");
      return o$(
        n,
        Object.assign({}, r, e, {
          extensions: this.data("micromarkExtensions") || [],
          mdastExtensions: this.data("fromMarkdownExtensions") || [],
        })
      );
    },
  });
}
var At = function (e, t, n) {
  var r = { type: String(e) };
  return (
    n == null && (typeof t == "string" || Array.isArray(t))
      ? (n = t)
      : Object.assign(r, t),
    Array.isArray(n) ? (r.children = n) : n != null && (r.value = String(n)),
    r
  );
};
const cc = {}.hasOwnProperty;
function a$(e, t) {
  const n = t.data || {};
  return "value" in t &&
    !(
      cc.call(n, "hName") ||
      cc.call(n, "hProperties") ||
      cc.call(n, "hChildren")
    )
    ? e.augment(t, At("text", t.value))
    : e(t, "div", rn(e, t));
}
function u_(e, t, n) {
  const r = t && t.type;
  let i;
  if (!r) throw new Error("Expected node, got `" + t + "`");
  return (
    cc.call(e.handlers, r)
      ? (i = e.handlers[r])
      : e.passThrough && e.passThrough.includes(r)
      ? (i = c$)
      : (i = e.unknownHandler),
    (typeof i == "function" ? i : a$)(e, t, n)
  );
}
function c$(e, t) {
  return "children" in t ? { ...t, children: rn(e, t) } : t;
}
function rn(e, t) {
  const n = [];
  if ("children" in t) {
    const r = t.children;
    let i = -1;
    for (; ++i < r.length; ) {
      const l = u_(e, r[i], t);
      if (l) {
        if (
          i &&
          r[i - 1].type === "break" &&
          (!Array.isArray(l) &&
            l.type === "text" &&
            (l.value = l.value.replace(/^\s+/, "")),
          !Array.isArray(l) && l.type === "element")
        ) {
          const s = l.children[0];
          s && s.type === "text" && (s.value = s.value.replace(/^\s+/, ""));
        }
        Array.isArray(l) ? n.push(...l) : n.push(l);
      }
    }
  }
  return n;
}
const s_ = function (e) {
  if (e == null) return h$;
  if (typeof e == "string") return p$(e);
  if (typeof e == "object") return Array.isArray(e) ? f$(e) : d$(e);
  if (typeof e == "function") return Zf(e);
  throw new Error("Expected function, string, or object as test");
};
function f$(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; ) t[n] = s_(e[n]);
  return Zf(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; ) if (t[l].call(this, ...i)) return !0;
    return !1;
  }
}
function d$(e) {
  return Zf(t);
  function t(n) {
    let r;
    for (r in e) if (n[r] !== e[r]) return !1;
    return !0;
  }
}
function p$(e) {
  return Zf(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Zf(e) {
  return t;
  function t(...n) {
    return Boolean(e.call(this, ...n));
  }
}
function h$() {
  return !0;
}
const g$ = !0,
  m$ = "skip",
  Fw = !1,
  v$ = function (e, t, n, r) {
    typeof t == "function" &&
      typeof n != "function" &&
      ((r = n), (n = t), (t = null));
    const i = s_(t),
      l = r ? -1 : 1;
    s(e, null, [])();
    function s(a, f, d) {
      const h = typeof a == "object" && a !== null ? a : {};
      let g;
      return (
        typeof h.type == "string" &&
          ((g =
            typeof h.tagName == "string"
              ? h.tagName
              : typeof h.name == "string"
              ? h.name
              : void 0),
          Object.defineProperty(y, "name", {
            value: "node (" + (h.type + (g ? "<" + g + ">" : "")) + ")",
          })),
        y
      );
      function y() {
        let m = [],
          w,
          E,
          A;
        if (
          (!t || i(a, f, d[d.length - 1] || null)) &&
          ((m = y$(n(a, d))), m[0] === Fw)
        )
          return m;
        if (a.children && m[0] !== m$)
          for (
            E = (r ? a.children.length : -1) + l, A = d.concat(a);
            E > -1 && E < a.children.length;

          ) {
            if (((w = s(a.children[E], E, A)()), w[0] === Fw)) return w;
            E = typeof w[1] == "number" ? w[1] : E + l;
          }
        return m;
      }
    }
  };
function y$(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [g$, e] : [e];
}
const bv = function (e, t, n, r) {
    typeof t == "function" &&
      typeof n != "function" &&
      ((r = n), (n = t), (t = null)),
      v$(e, t, i, r);
    function i(l, s) {
      const a = s[s.length - 1];
      return n(l, a ? a.children.indexOf(l) : null, a);
    }
  },
  a_ = f_("start"),
  c_ = f_("end");
function f_(e) {
  return t;
  function t(n) {
    const r = (n && n.position && n.position[e]) || {};
    return {
      line: r.line || null,
      column: r.column || null,
      offset: r.offset > -1 ? r.offset : null,
    };
  }
}
function x$(e) {
  return (
    !e ||
    !e.position ||
    !e.position.start ||
    !e.position.start.line ||
    !e.position.start.column ||
    !e.position.end ||
    !e.position.end.line ||
    !e.position.end.column
  );
}
const zw = {}.hasOwnProperty;
function w$(e) {
  const t = Object.create(null);
  if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
  return (
    bv(e, "definition", (r) => {
      const i = $w(r.identifier);
      i && !zw.call(t, i) && (t[i] = r);
    }),
    n
  );
  function n(r) {
    const i = $w(r);
    return i && zw.call(t, i) ? t[i] : null;
  }
}
function $w(e) {
  return String(e || "").toUpperCase();
}
function iu(e) {
  const t = [];
  let n = -1,
    r = 0,
    i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let s = "";
    if (l === 37 && Fn(e.charCodeAt(n + 1)) && Fn(e.charCodeAt(n + 2))) i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) ||
        (s = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(n + 1);
      l < 56320 && a > 56319 && a < 57344
        ? ((s = String.fromCharCode(l, a)), (i = 1))
        : (s = "�");
    } else s = String.fromCharCode(l);
    s &&
      (t.push(e.slice(r, n), encodeURIComponent(s)), (r = n + i + 1), (s = "")),
      i && ((n += i), (i = 0));
  }
  return t.join("") + e.slice(r);
}
function ai(e, t) {
  const n = [];
  let r = -1;
  for (
    t &&
    n.push(
      At(
        "text",
        `
`
      )
    );
    ++r < e.length;

  )
    r &&
      n.push(
        At(
          "text",
          `
`
        )
      ),
      n.push(e[r]);
  return (
    t &&
      e.length > 0 &&
      n.push(
        At(
          "text",
          `
`
        )
      ),
    n
  );
}
function S$(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
    if (!r) continue;
    const i = rn(e, r),
      l = String(r.identifier),
      s = iu(l.toLowerCase());
    let a = 0;
    const f = [];
    for (; ++a <= e.footnoteCounts[l]; ) {
      const g = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e.clobberPrefix + "fnref-" + s + (a > 1 ? "-" + a : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: e.footnoteBackLabel,
        },
        children: [{ type: "text", value: "↩" }],
      };
      a > 1 &&
        g.children.push({
          type: "element",
          tagName: "sup",
          children: [{ type: "text", value: String(a) }],
        }),
        f.length > 0 && f.push({ type: "text", value: " " }),
        f.push(g);
    }
    const d = i[i.length - 1];
    if (d && d.type === "element" && d.tagName === "p") {
      const g = d.children[d.children.length - 1];
      g && g.type === "text"
        ? (g.value += " ")
        : d.children.push({ type: "text", value: " " }),
        d.children.push(...f);
    } else i.push(...f);
    const h = {
      type: "element",
      tagName: "li",
      properties: { id: e.clobberPrefix + "fn-" + s },
      children: ai(i, !0),
    };
    r.position && (h.position = r.position), n.push(h);
  }
  return n.length === 0
    ? null
    : {
        type: "element",
        tagName: "section",
        properties: { dataFootnotes: !0, className: ["footnotes"] },
        children: [
          {
            type: "element",
            tagName: e.footnoteLabelTagName,
            properties: {
              ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
              id: "footnote-label",
            },
            children: [At("text", e.footnoteLabel)],
          },
          {
            type: "text",
            value: `
`,
          },
          {
            type: "element",
            tagName: "ol",
            properties: {},
            children: ai(n, !0),
          },
          {
            type: "text",
            value: `
`,
          },
        ],
      };
}
function E$(e, t) {
  return e(t, "blockquote", ai(rn(e, t), !0));
}
function C$(e, t) {
  return [
    e(t, "br"),
    At(
      "text",
      `
`
    ),
  ];
}
function k$(e, t) {
  const n = t.value
      ? t.value +
        `
`
      : "",
    r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
    i = {};
  r && (i.className = ["language-" + r]);
  const l = e(t, "code", i, [At("text", n)]);
  return t.meta && (l.data = { meta: t.meta }), e(t.position, "pre", [l]);
}
function _$(e, t) {
  return e(t, "del", rn(e, t));
}
function b$(e, t) {
  return e(t, "em", rn(e, t));
}
function d_(e, t) {
  const n = String(t.identifier),
    r = iu(n.toLowerCase()),
    i = e.footnoteOrder.indexOf(n);
  let l;
  i === -1
    ? (e.footnoteOrder.push(n),
      (e.footnoteCounts[n] = 1),
      (l = e.footnoteOrder.length))
    : (e.footnoteCounts[n]++, (l = i + 1));
  const s = e.footnoteCounts[n];
  return e(t, "sup", [
    e(
      t.position,
      "a",
      {
        href: "#" + e.clobberPrefix + "fn-" + r,
        id: e.clobberPrefix + "fnref-" + r + (s > 1 ? "-" + s : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: "footnote-label",
      },
      [At("text", String(l))]
    ),
  ]);
}
function O$(e, t) {
  const n = e.footnoteById;
  let r = 1;
  for (; r in n; ) r++;
  const i = String(r);
  return (
    (n[i] = {
      type: "footnoteDefinition",
      identifier: i,
      children: [{ type: "paragraph", children: t.children }],
      position: t.position,
    }),
    d_(e, { type: "footnoteReference", identifier: i, position: t.position })
  );
}
function I$(e, t) {
  return e(t, "h" + t.depth, rn(e, t));
}
function T$(e, t) {
  return e.dangerous ? e.augment(t, At("raw", t.value)) : null;
}
function p_(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (
    (n === "collapsed"
      ? (r += "[]")
      : n === "full" && (r += "[" + (t.label || t.identifier) + "]"),
    t.type === "imageReference")
  )
    return At("text", "![" + t.alt + r);
  const i = rn(e, t),
    l = i[0];
  l && l.type === "text"
    ? (l.value = "[" + l.value)
    : i.unshift(At("text", "["));
  const s = i[i.length - 1];
  return s && s.type === "text" ? (s.value += r) : i.push(At("text", r)), i;
}
function R$(e, t) {
  const n = e.definition(t.identifier);
  if (!n) return p_(e, t);
  const r = { src: iu(n.url || ""), alt: t.alt };
  return (
    n.title !== null && n.title !== void 0 && (r.title = n.title),
    e(t, "img", r)
  );
}
function P$(e, t) {
  const n = { src: iu(t.url), alt: t.alt };
  return (
    t.title !== null && t.title !== void 0 && (n.title = t.title),
    e(t, "img", n)
  );
}
function A$(e, t) {
  return e(t, "code", [At("text", t.value.replace(/\r?\n|\r/g, " "))]);
}
function D$(e, t) {
  const n = e.definition(t.identifier);
  if (!n) return p_(e, t);
  const r = { href: iu(n.url || "") };
  return (
    n.title !== null && n.title !== void 0 && (r.title = n.title),
    e(t, "a", r, rn(e, t))
  );
}
function L$(e, t) {
  const n = { href: iu(t.url) };
  return (
    t.title !== null && t.title !== void 0 && (n.title = t.title),
    e(t, "a", n, rn(e, t))
  );
}
function M$(e, t, n) {
  const r = rn(e, t),
    i = n ? N$(n) : h_(t),
    l = {},
    s = [];
  if (typeof t.checked == "boolean") {
    let d;
    r[0] && r[0].type === "element" && r[0].tagName === "p"
      ? (d = r[0])
      : ((d = e(null, "p", [])), r.unshift(d)),
      d.children.length > 0 && d.children.unshift(At("text", " ")),
      d.children.unshift(
        e(null, "input", { type: "checkbox", checked: t.checked, disabled: !0 })
      ),
      (l.className = ["task-list-item"]);
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const d = r[a];
    (i || a !== 0 || d.type !== "element" || d.tagName !== "p") &&
      s.push(
        At(
          "text",
          `
`
        )
      ),
      d.type === "element" && d.tagName === "p" && !i
        ? s.push(...d.children)
        : s.push(d);
  }
  const f = r[r.length - 1];
  return (
    f &&
      (i || !("tagName" in f) || f.tagName !== "p") &&
      s.push(
        At(
          "text",
          `
`
        )
      ),
    e(t, "li", l, s)
  );
}
function N$(e) {
  let t = e.spread;
  const n = e.children;
  let r = -1;
  for (; !t && ++r < n.length; ) t = h_(n[r]);
  return Boolean(t);
}
function h_(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function F$(e, t) {
  const n = {},
    r = t.ordered ? "ol" : "ul",
    i = rn(e, t);
  let l = -1;
  for (
    typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
    ++l < i.length;

  ) {
    const s = i[l];
    if (
      s.type === "element" &&
      s.tagName === "li" &&
      s.properties &&
      Array.isArray(s.properties.className) &&
      s.properties.className.includes("task-list-item")
    ) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  return e(t, r, n, ai(i, !0));
}
function z$(e, t) {
  return e(t, "p", rn(e, t));
}
function $$(e, t) {
  return e.augment(t, At("root", ai(rn(e, t))));
}
function B$(e, t) {
  return e(t, "strong", rn(e, t));
}
function U$(e, t) {
  const n = t.children;
  let r = -1;
  const i = t.align || [],
    l = [];
  for (; ++r < n.length; ) {
    const s = n[r].children,
      a = r === 0 ? "th" : "td",
      f = [];
    let d = -1;
    const h = t.align ? i.length : s.length;
    for (; ++d < h; ) {
      const g = s[d];
      f.push(e(g, a, { align: i[d] }, g ? rn(e, g) : []));
    }
    l[r] = e(n[r], "tr", ai(f, !0));
  }
  return e(
    t,
    "table",
    ai(
      [e(l[0].position, "thead", ai([l[0]], !0))].concat(
        l[1]
          ? e(
              { start: a_(l[1]), end: c_(l[l.length - 1]) },
              "tbody",
              ai(l.slice(1), !0)
            )
          : []
      ),
      !0
    )
  );
}
const Bw = 9,
  Uw = 32;
function H$(e) {
  const t = String(e),
    n = /\r?\n|\r/g;
  let r = n.exec(t),
    i = 0;
  const l = [];
  for (; r; )
    l.push(Hw(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t));
  return l.push(Hw(t.slice(i), i > 0, !1)), l.join("");
}
function Hw(e, t, n) {
  let r = 0,
    i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Bw || l === Uw; ) r++, (l = e.codePointAt(r));
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Bw || l === Uw; ) i--, (l = e.codePointAt(i - 1));
  }
  return i > r ? e.slice(r, i) : "";
}
function j$(e, t) {
  return e.augment(t, At("text", H$(String(t.value))));
}
function W$(e, t) {
  return e(t, "hr");
}
const V$ = {
  blockquote: E$,
  break: C$,
  code: k$,
  delete: _$,
  emphasis: b$,
  footnoteReference: d_,
  footnote: O$,
  heading: I$,
  html: T$,
  imageReference: R$,
  image: P$,
  inlineCode: A$,
  linkReference: D$,
  link: L$,
  listItem: M$,
  list: F$,
  paragraph: z$,
  root: $$,
  strong: B$,
  table: U$,
  text: j$,
  thematicBreak: W$,
  toml: Va,
  yaml: Va,
  definition: Va,
  footnoteDefinition: Va,
};
function Va() {
  return null;
}
const q$ = {}.hasOwnProperty;
function G$(e, t) {
  const n = t || {},
    r = n.allowDangerousHtml || !1,
    i = {};
  return (
    (s.dangerous = r),
    (s.clobberPrefix =
      n.clobberPrefix === void 0 || n.clobberPrefix === null
        ? "user-content-"
        : n.clobberPrefix),
    (s.footnoteLabel = n.footnoteLabel || "Footnotes"),
    (s.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
    (s.footnoteLabelProperties = n.footnoteLabelProperties || {
      className: ["sr-only"],
    }),
    (s.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
    (s.definition = w$(e)),
    (s.footnoteById = i),
    (s.footnoteOrder = []),
    (s.footnoteCounts = {}),
    (s.augment = l),
    (s.handlers = { ...V$, ...n.handlers }),
    (s.unknownHandler = n.unknownHandler),
    (s.passThrough = n.passThrough),
    bv(e, "footnoteDefinition", (a) => {
      const f = String(a.identifier).toUpperCase();
      q$.call(i, f) || (i[f] = a);
    }),
    s
  );
  function l(a, f) {
    if (a && "data" in a && a.data) {
      const d = a.data;
      d.hName &&
        (f.type !== "element" &&
          (f = { type: "element", tagName: "", properties: {}, children: [] }),
        (f.tagName = d.hName)),
        f.type === "element" &&
          d.hProperties &&
          (f.properties = { ...f.properties, ...d.hProperties }),
        "children" in f &&
          f.children &&
          d.hChildren &&
          (f.children = d.hChildren);
    }
    if (a) {
      const d = "type" in a ? a : { position: a };
      x$(d) || (f.position = { start: a_(d), end: c_(d) });
    }
    return f;
  }
  function s(a, f, d, h) {
    return (
      Array.isArray(d) && ((h = d), (d = {})),
      l(a, {
        type: "element",
        tagName: f,
        properties: d || {},
        children: h || [],
      })
    );
  }
}
function g_(e, t) {
  const n = G$(e, t),
    r = u_(n, e, null),
    i = S$(n);
  return (
    i &&
      r.children.push(
        At(
          "text",
          `
`
        ),
        i
      ),
    Array.isArray(r) ? { type: "root", children: r } : r
  );
}
const K$ = function (e, t) {
    return e && "run" in e ? Y$(e, t) : X$(e || t);
  },
  Q$ = K$;
function Y$(e, t) {
  return (n, r, i) => {
    e.run(g_(n, t), r, (l) => {
      i(l);
    });
  };
}
function X$(e) {
  return (t) => g_(t, e);
}
class Ls {
  constructor(t, n, r) {
    (this.property = t), (this.normal = n), r && (this.space = r);
  }
}
Ls.prototype.property = {};
Ls.prototype.normal = {};
Ls.prototype.space = null;
function m_(e, t) {
  const n = {},
    r = {};
  let i = -1;
  for (; ++i < e.length; )
    Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
  return new Ls(n, r, t);
}
function Ag(e) {
  return e.toLowerCase();
}
class mr {
  constructor(t, n) {
    (this.property = t), (this.attribute = n);
  }
}
mr.prototype.space = null;
mr.prototype.boolean = !1;
mr.prototype.booleanish = !1;
mr.prototype.overloadedBoolean = !1;
mr.prototype.number = !1;
mr.prototype.commaSeparated = !1;
mr.prototype.spaceSeparated = !1;
mr.prototype.commaOrSpaceSeparated = !1;
mr.prototype.mustUseProperty = !1;
mr.prototype.defined = !1;
let Z$ = 0;
const Pe = Qo(),
  _t = Qo(),
  v_ = Qo(),
  ne = Qo(),
  it = Qo(),
  Ul = Qo(),
  Dn = Qo();
function Qo() {
  return 2 ** ++Z$;
}
const Dg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: Pe,
        booleanish: _t,
        overloadedBoolean: v_,
        number: ne,
        spaceSeparated: it,
        commaSeparated: Ul,
        commaOrSpaceSeparated: Dn,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ph = Object.keys(Dg);
class Ov extends mr {
  constructor(t, n, r, i) {
    let l = -1;
    if ((super(t, n), jw(this, "space", i), typeof r == "number"))
      for (; ++l < ph.length; ) {
        const s = ph[l];
        jw(this, ph[l], (r & Dg[s]) === Dg[s]);
      }
  }
}
Ov.prototype.defined = !0;
function jw(e, t, n) {
  n && (e[t] = n);
}
const J$ = {}.hasOwnProperty;
function ou(e) {
  const t = {},
    n = {};
  let r;
  for (r in e.properties)
    if (J$.call(e.properties, r)) {
      const i = e.properties[r],
        l = new Ov(r, e.transform(e.attributes || {}, r), i, e.space);
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (l.mustUseProperty = !0),
        (t[r] = l),
        (n[Ag(r)] = r),
        (n[Ag(l.attribute)] = r);
    }
  return new Ls(t, n, e.space);
}
const y_ = ou({
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  x_ = ou({
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function w_(e, t) {
  return t in e ? e[t] : t;
}
function S_(e, t) {
  return w_(e, t.toLowerCase());
}
const E_ = ou({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: S_,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  C_ = ou({
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: _t,
      ariaAutoComplete: null,
      ariaBusy: _t,
      ariaChecked: _t,
      ariaColCount: ne,
      ariaColIndex: ne,
      ariaColSpan: ne,
      ariaControls: it,
      ariaCurrent: null,
      ariaDescribedBy: it,
      ariaDetails: null,
      ariaDisabled: _t,
      ariaDropEffect: it,
      ariaErrorMessage: null,
      ariaExpanded: _t,
      ariaFlowTo: it,
      ariaGrabbed: _t,
      ariaHasPopup: null,
      ariaHidden: _t,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: it,
      ariaLevel: ne,
      ariaLive: null,
      ariaModal: _t,
      ariaMultiLine: _t,
      ariaMultiSelectable: _t,
      ariaOrientation: null,
      ariaOwns: it,
      ariaPlaceholder: null,
      ariaPosInSet: ne,
      ariaPressed: _t,
      ariaReadOnly: _t,
      ariaRelevant: null,
      ariaRequired: _t,
      ariaRoleDescription: it,
      ariaRowCount: ne,
      ariaRowIndex: ne,
      ariaRowSpan: ne,
      ariaSelected: _t,
      ariaSetSize: ne,
      ariaSort: null,
      ariaValueMax: ne,
      ariaValueMin: ne,
      ariaValueNow: ne,
      ariaValueText: null,
      role: null,
    },
  }),
  eB = ou({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: S_,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: Ul,
      acceptCharset: it,
      accessKey: it,
      action: null,
      allow: null,
      allowFullScreen: Pe,
      allowPaymentRequest: Pe,
      allowUserMedia: Pe,
      alt: null,
      as: null,
      async: Pe,
      autoCapitalize: null,
      autoComplete: it,
      autoFocus: Pe,
      autoPlay: Pe,
      capture: Pe,
      charSet: null,
      checked: Pe,
      cite: null,
      className: it,
      cols: ne,
      colSpan: null,
      content: null,
      contentEditable: _t,
      controls: Pe,
      controlsList: it,
      coords: ne | Ul,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Pe,
      defer: Pe,
      dir: null,
      dirName: null,
      disabled: Pe,
      download: v_,
      draggable: _t,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Pe,
      formTarget: null,
      headers: it,
      height: ne,
      hidden: Pe,
      high: ne,
      href: null,
      hrefLang: null,
      htmlFor: it,
      httpEquiv: it,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Pe,
      itemId: null,
      itemProp: it,
      itemRef: it,
      itemScope: Pe,
      itemType: it,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Pe,
      low: ne,
      manifest: null,
      max: null,
      maxLength: ne,
      media: null,
      method: null,
      min: null,
      minLength: ne,
      multiple: Pe,
      muted: Pe,
      name: null,
      nonce: null,
      noModule: Pe,
      noValidate: Pe,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Pe,
      optimum: ne,
      pattern: null,
      ping: it,
      placeholder: null,
      playsInline: Pe,
      poster: null,
      preload: null,
      readOnly: Pe,
      referrerPolicy: null,
      rel: it,
      required: Pe,
      reversed: Pe,
      rows: ne,
      rowSpan: ne,
      sandbox: it,
      scope: null,
      scoped: Pe,
      seamless: Pe,
      selected: Pe,
      shape: null,
      size: ne,
      sizes: null,
      slot: null,
      span: ne,
      spellCheck: _t,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: ne,
      step: null,
      style: null,
      tabIndex: ne,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Pe,
      useMap: null,
      value: _t,
      width: ne,
      wrap: null,
      align: null,
      aLink: null,
      archive: it,
      axis: null,
      background: null,
      bgColor: null,
      border: ne,
      borderColor: null,
      bottomMargin: ne,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Pe,
      declare: Pe,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: ne,
      leftMargin: ne,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: ne,
      marginWidth: ne,
      noResize: Pe,
      noHref: Pe,
      noShade: Pe,
      noWrap: Pe,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: ne,
      rules: null,
      scheme: null,
      scrolling: _t,
      standby: null,
      summary: null,
      text: null,
      topMargin: ne,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: ne,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Pe,
      disableRemotePlayback: Pe,
      prefix: null,
      property: null,
      results: ne,
      security: null,
      unselectable: null,
    },
  }),
  tB = ou({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: w_,
    properties: {
      about: Dn,
      accentHeight: ne,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: ne,
      amplitude: ne,
      arabicForm: null,
      ascent: ne,
      attributeName: null,
      attributeType: null,
      azimuth: ne,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: ne,
      by: null,
      calcMode: null,
      capHeight: ne,
      className: it,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: ne,
      diffuseConstant: ne,
      direction: null,
      display: null,
      dur: null,
      divisor: ne,
      dominantBaseline: null,
      download: Pe,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: ne,
      enableBackground: null,
      end: null,
      event: null,
      exponent: ne,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: ne,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Ul,
      g2: Ul,
      glyphName: Ul,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: ne,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: ne,
      horizOriginX: ne,
      horizOriginY: ne,
      id: null,
      ideographic: ne,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: ne,
      k: ne,
      k1: ne,
      k2: ne,
      k3: ne,
      k4: ne,
      kernelMatrix: Dn,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: ne,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: ne,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: ne,
      overlineThickness: ne,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: ne,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: it,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: ne,
      pointsAtY: ne,
      pointsAtZ: ne,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Dn,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Dn,
      rev: Dn,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Dn,
      requiredFeatures: Dn,
      requiredFonts: Dn,
      requiredFormats: Dn,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: ne,
      specularExponent: ne,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: ne,
      strikethroughThickness: ne,
      string: null,
      stroke: null,
      strokeDashArray: Dn,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: ne,
      strokeOpacity: ne,
      strokeWidth: null,
      style: null,
      surfaceScale: ne,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Dn,
      tabIndex: ne,
      tableValues: null,
      target: null,
      targetX: ne,
      targetY: ne,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Dn,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: ne,
      underlineThickness: ne,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: ne,
      values: null,
      vAlphabetic: ne,
      vMathematical: ne,
      vectorEffect: null,
      vHanging: ne,
      vIdeographic: ne,
      version: null,
      vertAdvY: ne,
      vertOriginX: ne,
      vertOriginY: ne,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: ne,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  nB = /^data[-\w.:]+$/i,
  Ww = /-[a-z]/g,
  rB = /[A-Z]/g;
function iB(e, t) {
  const n = Ag(t);
  let r = t,
    i = mr;
  if (n in e.normal) return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && nB.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(Ww, lB);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!Ww.test(l)) {
        let s = l.replace(rB, oB);
        s.charAt(0) !== "-" && (s = "-" + s), (t = "data" + s);
      }
    }
    i = Ov;
  }
  return new i(r, t);
}
function oB(e) {
  return "-" + e.toLowerCase();
}
function lB(e) {
  return e.charAt(1).toUpperCase();
}
const Vw = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  },
  uB = m_([x_, y_, E_, C_, eB], "html"),
  sB = m_([x_, y_, E_, C_, tB], "svg");
function aB(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      bv(t, "element", (n, r, i) => {
        const l = i;
        let s;
        if (
          (e.allowedElements
            ? (s = !e.allowedElements.includes(n.tagName))
            : e.disallowedElements &&
              (s = e.disallowedElements.includes(n.tagName)),
          !s &&
            e.allowElement &&
            typeof r == "number" &&
            (s = !e.allowElement(n, r, l)),
          s && typeof r == "number")
        )
          return (
            e.unwrapDisallowed && n.children
              ? l.children.splice(r, 1, ...n.children)
              : l.children.splice(r, 1),
            r
          );
      });
    };
}
function cB(e) {
  var t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
  return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
}
function fB(e) {
  return e.join(" ").trim();
}
function dB(e, t) {
  const n = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e)
    .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
    .trim();
}
var qw = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  pB = /\n/g,
  hB = /^\s*/,
  gB = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  mB = /^:\s*/,
  vB = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  yB = /^[;\s]*/,
  xB = /^\s+|\s+$/g,
  wB = `
`,
  Gw = "/",
  Kw = "*",
  bo = "",
  SB = "comment",
  EB = "declaration",
  CB = function (e, t) {
    if (typeof e != "string")
      throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
      r = 1;
    function i(w) {
      var E = w.match(pB);
      E && (n += E.length);
      var A = w.lastIndexOf(wB);
      r = ~A ? w.length - A : r + w.length;
    }
    function l() {
      var w = { line: n, column: r };
      return function (E) {
        return (E.position = new s(w)), d(), E;
      };
    }
    function s(w) {
      (this.start = w),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    }
    s.prototype.content = e;
    function a(w) {
      var E = new Error(t.source + ":" + n + ":" + r + ": " + w);
      if (
        ((E.reason = w),
        (E.filename = t.source),
        (E.line = n),
        (E.column = r),
        (E.source = e),
        !t.silent)
      )
        throw E;
    }
    function f(w) {
      var E = w.exec(e);
      if (!!E) {
        var A = E[0];
        return i(A), (e = e.slice(A.length)), E;
      }
    }
    function d() {
      f(hB);
    }
    function h(w) {
      var E;
      for (w = w || []; (E = g()); ) E !== !1 && w.push(E);
      return w;
    }
    function g() {
      var w = l();
      if (!(Gw != e.charAt(0) || Kw != e.charAt(1))) {
        for (
          var E = 2;
          bo != e.charAt(E) && (Kw != e.charAt(E) || Gw != e.charAt(E + 1));

        )
          ++E;
        if (((E += 2), bo === e.charAt(E - 1)))
          return a("End of comment missing");
        var A = e.slice(2, E - 2);
        return (
          (r += 2),
          i(A),
          (e = e.slice(E)),
          (r += 2),
          w({ type: SB, comment: A })
        );
      }
    }
    function y() {
      var w = l(),
        E = f(gB);
      if (!!E) {
        if ((g(), !f(mB))) return a("property missing ':'");
        var A = f(vB),
          v = w({
            type: EB,
            property: Qw(E[0].replace(qw, bo)),
            value: A ? Qw(A[0].replace(qw, bo)) : bo,
          });
        return f(yB), v;
      }
    }
    function m() {
      var w = [];
      h(w);
      for (var E; (E = y()); ) E !== !1 && (w.push(E), h(w));
      return w;
    }
    return d(), m();
  };
function Qw(e) {
  return e ? e.replace(xB, bo) : bo;
}
var kB = CB;
function _B(e, t) {
  var n = null;
  if (!e || typeof e != "string") return n;
  for (
    var r, i = kB(e), l = typeof t == "function", s, a, f = 0, d = i.length;
    f < d;
    f++
  )
    (r = i[f]),
      (s = r.property),
      (a = r.value),
      l ? t(s, a, r) : a && (n || (n = {}), (n[s] = a));
  return n;
}
var bB = _B;
const Lg = {}.hasOwnProperty,
  OB = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function k_(e, t) {
  const n = [];
  let r = -1,
    i;
  for (; ++r < t.children.length; )
    (i = t.children[r]),
      i.type === "element"
        ? n.push(IB(e, i, r, t))
        : i.type === "text"
        ? (t.type !== "element" || !OB.has(t.tagName) || !cB(i)) &&
          n.push(i.value)
        : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
  return n;
}
function IB(e, t, n, r) {
  const i = e.options,
    l = e.schema,
    s = t.tagName,
    a = {};
  let f = l,
    d;
  if (
    (l.space === "html" && s === "svg" && ((f = sB), (e.schema = f)),
    t.properties)
  )
    for (d in t.properties)
      Lg.call(t.properties, d) && RB(a, d, t.properties[d], e);
  (s === "ol" || s === "ul") && e.listDepth++;
  const h = k_(e, t);
  (s === "ol" || s === "ul") && e.listDepth--, (e.schema = l);
  const g = t.position || {
      start: { line: null, column: null, offset: null },
      end: { line: null, column: null, offset: null },
    },
    y = i.components && Lg.call(i.components, s) ? i.components[s] : s,
    m = typeof y == "string" || y === be.Fragment;
  if (!lM.isValidElementType(y))
    throw new TypeError(
      `Component for name \`${s}\` not defined or is not renderable`
    );
  if (
    ((a.key = [s, g.start.line, g.start.column, n].join("-")),
    s === "a" &&
      i.linkTarget &&
      (a.target =
        typeof i.linkTarget == "function"
          ? i.linkTarget(
              String(a.href || ""),
              t.children,
              typeof a.title == "string" ? a.title : null
            )
          : i.linkTarget),
    s === "a" &&
      i.transformLinkUri &&
      (a.href = i.transformLinkUri(
        String(a.href || ""),
        t.children,
        typeof a.title == "string" ? a.title : null
      )),
    !m &&
      s === "code" &&
      r.type === "element" &&
      r.tagName !== "pre" &&
      (a.inline = !0),
    !m &&
      (s === "h1" ||
        s === "h2" ||
        s === "h3" ||
        s === "h4" ||
        s === "h5" ||
        s === "h6") &&
      (a.level = Number.parseInt(s.charAt(1), 10)),
    s === "img" &&
      i.transformImageUri &&
      (a.src = i.transformImageUri(
        String(a.src || ""),
        String(a.alt || ""),
        typeof a.title == "string" ? a.title : null
      )),
    !m && s === "li" && r.type === "element")
  ) {
    const w = TB(t);
    (a.checked = w && w.properties ? Boolean(w.properties.checked) : null),
      (a.index = hh(r, t)),
      (a.ordered = r.tagName === "ol");
  }
  return (
    !m &&
      (s === "ol" || s === "ul") &&
      ((a.ordered = s === "ol"), (a.depth = e.listDepth)),
    (s === "td" || s === "th") &&
      (a.align &&
        (a.style || (a.style = {}),
        (a.style.textAlign = a.align),
        delete a.align),
      m || (a.isHeader = s === "th")),
    !m &&
      s === "tr" &&
      r.type === "element" &&
      (a.isHeader = Boolean(r.tagName === "thead")),
    i.sourcePos && (a["data-sourcepos"] = DB(g)),
    !m && i.rawSourcePos && (a.sourcePosition = t.position),
    !m &&
      i.includeElementIndex &&
      ((a.index = hh(r, t)), (a.siblingCount = hh(r))),
    m || (a.node = t),
    h.length > 0 ? be.createElement(y, a, h) : be.createElement(y, a)
  );
}
function TB(e) {
  let t = -1;
  for (; ++t < e.children.length; ) {
    const n = e.children[t];
    if (n.type === "element" && n.tagName === "input") return n;
  }
  return null;
}
function hh(e, t) {
  let n = -1,
    r = 0;
  for (; ++n < e.children.length && e.children[n] !== t; )
    e.children[n].type === "element" && r++;
  return r;
}
function RB(e, t, n, r) {
  const i = iB(r.schema, t);
  let l = n;
  l == null ||
    l !== l ||
    (Array.isArray(l) && (l = i.commaSeparated ? dB(l) : fB(l)),
    i.property === "style" && typeof l == "string" && (l = PB(l)),
    i.space && i.property
      ? (e[Lg.call(Vw, i.property) ? Vw[i.property] : i.property] = l)
      : i.attribute && (e[i.attribute] = l));
}
function PB(e) {
  const t = {};
  try {
    bB(e, n);
  } catch {}
  return t;
  function n(r, i) {
    const l = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
    t[l.replace(/-([a-z])/g, AB)] = i;
  }
}
function AB(e, t) {
  return t.toUpperCase();
}
function DB(e) {
  return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column]
    .map(String)
    .join("");
}
const Yw = {}.hasOwnProperty,
  LB = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
  qa = {
    plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
    renderers: { to: "components", id: "change-renderers-to-components" },
    astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
    allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
    escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
    source: { to: "children", id: "change-source-to-children" },
    allowNode: {
      to: "allowElement",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    allowedTypes: {
      to: "allowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    disallowedTypes: {
      to: "disallowedElements",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
    },
    includeNodeIndex: {
      to: "includeElementIndex",
      id: "change-includenodeindex-to-includeelementindex",
    },
  };
function Iv(e) {
  for (const l in qa)
    if (Yw.call(qa, l) && Yw.call(e, l)) {
      const s = qa[l];
      console.warn(
        `[react-markdown] Warning: please ${
          s.to ? `use \`${s.to}\` instead of` : "remove"
        } \`${l}\` (see <${LB}#${s.id}> for more info)`
      ),
        delete qa[l];
    }
  const t = o6()
      .use(s$)
      .use(e.remarkPlugins || [])
      .use(Q$, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
      .use(e.rehypePlugins || [])
      .use(aB, e),
    n = new Vk();
  typeof e.children == "string"
    ? (n.value = e.children)
    : e.children !== void 0 &&
      e.children !== null &&
      console.warn(
        `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
      );
  const r = t.runSync(t.parse(n), n);
  if (r.type !== "root") throw new TypeError("Expected a `root` node");
  let i = be.createElement(
    be.Fragment,
    {},
    k_({ options: e, schema: uB, listDepth: 0 }, r)
  );
  return (
    e.className && (i = be.createElement("div", { className: e.className }, i)),
    i
  );
}
Iv.defaultProps = { transformLinkUri: qz };
Iv.propTypes = {
  children: Se.exports.string,
  className: Se.exports.string,
  allowElement: Se.exports.func,
  allowedElements: Se.exports.arrayOf(Se.exports.string),
  disallowedElements: Se.exports.arrayOf(Se.exports.string),
  unwrapDisallowed: Se.exports.bool,
  remarkPlugins: Se.exports.arrayOf(
    Se.exports.oneOfType([
      Se.exports.object,
      Se.exports.func,
      Se.exports.arrayOf(
        Se.exports.oneOfType([
          Se.exports.bool,
          Se.exports.string,
          Se.exports.object,
          Se.exports.func,
          Se.exports.arrayOf(Se.exports.any),
        ])
      ),
    ])
  ),
  rehypePlugins: Se.exports.arrayOf(
    Se.exports.oneOfType([
      Se.exports.object,
      Se.exports.func,
      Se.exports.arrayOf(
        Se.exports.oneOfType([
          Se.exports.bool,
          Se.exports.string,
          Se.exports.object,
          Se.exports.func,
          Se.exports.arrayOf(Se.exports.any),
        ])
      ),
    ])
  ),
  sourcePos: Se.exports.bool,
  rawSourcePos: Se.exports.bool,
  skipHtml: Se.exports.bool,
  includeElementIndex: Se.exports.bool,
  transformLinkUri: Se.exports.oneOfType([Se.exports.func, Se.exports.bool]),
  linkTarget: Se.exports.oneOfType([Se.exports.func, Se.exports.string]),
  transformImageUri: Se.exports.func,
  components: Se.exports.object,
};
const MB = () =>
    we("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "#ffffff",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        V("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        V("circle", { cx: "12", cy: "12", r: "9" }),
        V("polyline", { points: "12 7 12 12 15 15" }),
      ],
    }),
  Xw = () => V("div", { className: "divider" }),
  NB = ({ item: e, inventoryType: t, style: n }, r) => {
    const i = yi((d) => d.inventory.additionalMetadata),
      l = T.exports.useMemo(() => ct[e.name], [e]),
      s = T.exports.useMemo(
        () =>
          e.ingredients
            ? Object.entries(e.ingredients).sort((d, h) => d[1] - h[1])
            : null,
        [e]
      ),
      a = e.metadata?.description || l?.description,
      f = l?.ammoName && ct[l?.ammoName]?.label;
    return V(bn, {
      children: l
        ? we("div", {
            style: { ...n },
            className: "tooltip-wrapper",
            ref: r,
            children: [
              we("div", {
                className: "tooltip-header-wrapper",
                children: [
                  V("p", { children: e.metadata?.label || l.label || e.name }),
                  t === "crafting"
                    ? we("div", {
                        className: "tooltip-crafting-duration",
                        children: [
                          V(MB, {}),
                          we("p", {
                            children: [
                              (e.duration !== void 0 ? e.duration : 3e3) / 1e3,
                              "s",
                            ],
                          }),
                        ],
                      })
                    : V("p", { children: e.metadata?.type }),
                ],
              }),
              V(Xw, {}),
              a &&
                V("div", {
                  className: "tooltip-description",
                  children: V(Iv, {
                    className: "tooltip-markdown",
                    children: a,
                  }),
                }),
              t !== "crafting"
                ? we(bn, {
                    children: [
                      e.durability !== void 0 &&
                        we("p", {
                          children: [
                            ot.ui_durability,
                            ": ",
                            Math.trunc(e.durability),
                          ],
                        }),
                      e.metadata?.ammo !== void 0 &&
                        we("p", {
                          children: [ot.ui_ammo, ": ", e.metadata.ammo],
                        }),
                      f && we("p", { children: [ot.ammo_type, ": ", f] }),
                      e.metadata?.serial &&
                        we("p", {
                          children: [ot.ui_serial, ": ", e.metadata.serial],
                        }),
                      e.metadata?.components &&
                        e.metadata?.components[0] &&
                        we("p", {
                          children: [
                            ot.ui_components,
                            ":",
                            " ",
                            (e.metadata?.components).map((d, h, g) =>
                              h + 1 === g.length
                                ? ct[d]?.label
                                : ct[d]?.label + ", "
                            ),
                          ],
                        }),
                      e.metadata?.weapontint &&
                        we("p", {
                          children: [ot.ui_tint, ": ", e.metadata.weapontint],
                        }),
                      i.map((d, h) =>
                        V(
                          T.exports.Fragment,
                          {
                            children:
                              e.metadata &&
                              e.metadata[d.metadata] &&
                              we("p", {
                                children: [
                                  d.value,
                                  ": ",
                                  e.metadata[d.metadata],
                                ],
                              }),
                          },
                          `metadata-${h}`
                        )
                      ),
                    ],
                  })
                : V("div", {
                    className: "tooltip-ingredients",
                    children:
                      s &&
                      s.map((d) => {
                        const [h, g] = [d[0], d[1]];
                        return we(
                          "div",
                          {
                            className: "tooltip-ingredient",
                            children: [
                              V("img", {
                                src: h ? zl(h) : "none",
                                alt: "item-image",
                              }),
                              V("p", {
                                children:
                                  g >= 1
                                    ? `${g}x ${ct[h]?.label || h}`
                                    : g === 0
                                    ? `${ct[h]?.label || h}`
                                    : g < 1 &&
                                      `${g * 100}% ${ct[h]?.label || h}`,
                              }),
                            ],
                          },
                          `ingredient-${h}`
                        );
                      }),
                  }),
            ],
          })
        : we("div", {
            className: "tooltip-wrapper",
            ref: r,
            style: n,
            children: [
              V("div", {
                className: "tooltip-header-wrapper",
                children: V("p", { children: e.name }),
              }),
              V(Xw, {}),
            ],
          }),
    });
  },
  FB = be.forwardRef(NB);
function zB(e, t) {
  const [n, r] = T.exports.useState(e);
  return (
    T.exports.useEffect(() => {
      const i = setTimeout(() => r(e), t || 500);
      return () => {
        clearTimeout(i);
      };
    }, [e, t]),
    n
  );
}
const $B = () => {
    const e = yi((a) => a.tooltip);
    zB(e.open, 500),
      be.useState(!1),
      T.exports.useRef(null),
      T.exports.useRef(!1);
    const {
        refs: t,
        context: n,
        floatingStyles: r,
      } = mv({
        middleware: [fk(), pk(), dk({ mainAxis: 10, crossAxis: 10 })],
        open: e.open,
        placement: "right-start",
      }),
      { isMounted: i, styles: l } = vv(n, { duration: 200 }),
      s = ({ clientX: a, clientY: f }) => {
        t.setPositionReference({
          getBoundingClientRect() {
            return {
              width: 0,
              height: 0,
              x: a,
              y: f,
              left: a,
              top: f,
              right: a,
              bottom: f,
            };
          },
        });
      };
    return (
      be.useEffect(
        () => (
          window.addEventListener("mousemove", s),
          () => {
            window.removeEventListener("mousemove", s);
          }
        ),
        []
      ),
      V(bn, {
        children:
          i &&
          e.item &&
          e.inventoryType &&
          V(gv, {
            children: V(FB, {
              ref: t.setFloating,
              style: { ...r, ...l },
              item: e.item,
              inventoryType: e.inventoryType,
            }),
          }),
      })
    );
  },
  BB = (e) => {
    const t = document.createElement("input");
    (t.value = e),
      document.body.appendChild(t),
      t.select(),
      document.execCommand("copy"),
      document.body.removeChild(t);
  },
  Mg = T.exports.createContext({
    getItemProps: () => ({}),
    activeIndex: null,
    setActiveIndex: () => {},
    setHasFocusInside: () => {},
    isOpen: !1,
  }),
  Zw = T.exports.forwardRef(({ children: e, label: t, ...n }, r) => {
    const i = yi((ue) => ue.contextMenu),
      [l, s] = T.exports.useState(!1),
      [a, f] = T.exports.useState(!1),
      [d, h] = T.exports.useState(null),
      g = T.exports.useRef([]),
      y = T.exports.useRef([]),
      m = T.exports.useContext(Mg),
      w = ao(),
      E = B4(),
      A = Ko(),
      v = _k(),
      S = A != null,
      {
        floatingStyles: _,
        refs: P,
        context: D,
      } = mv({
        nodeId: E,
        open: l,
        onOpenChange: s,
        placement: S ? "right-start" : "bottom-start",
        middleware: [
          dk({ mainAxis: S ? 0 : 4, alignmentAxis: S ? -4 : 0 }),
          fk(),
          pk(),
        ],
        whileElementsMounted: d4,
      }),
      { isMounted: R, styles: F } = vv(D);
    T.exports.useEffect(() => {
      S ||
        (i.coords &&
          (P.setPositionReference({
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                x: i.coords.x,
                y: i.coords.y,
                top: i.coords.y,
                right: i.coords.x,
                bottom: i.coords.y,
                left: i.coords.x,
              };
            },
          }),
          s(!0)),
        i.coords || s(!1));
    }, [i]);
    const z = j4(D, {
        enabled: S,
        delay: { open: 75 },
        handleClose: pz({ blockPointerEvents: !0 }),
      }),
      q = ez(D, { event: "mousedown", toggle: !S, ignoreMouse: S }),
      K = sz(D, { role: "menu" }),
      B = Fk(D, { bubbles: !0 }),
      X = uz(D, { listRef: g, activeIndex: d, nested: S, onNavigate: h }),
      $ = fz(D, { listRef: y, onMatch: l ? h : void 0, activeIndex: d }),
      {
        getReferenceProps: H,
        getFloatingProps: ie,
        getItemProps: oe,
      } = zk([z, q, K, B, X, $]);
    return (
      T.exports.useEffect(() => {
        if (!w) return;
        function ue() {
          s(!1);
        }
        function U(J) {
          J.nodeId !== E && J.parentId === A && s(!1);
        }
        return (
          w.events.on("click", ue),
          w.events.on("menuopen", U),
          () => {
            w.events.off("click", ue), w.events.off("menuopen", U);
          }
        );
      }, [w, E, A]),
      T.exports.useEffect(() => {
        l && w && w.events.emit("menuopen", { parentId: A, nodeId: E });
      }, [w, l, E, A]),
      we(U4, {
        id: E,
        children: [
          S &&
            we("button", {
              ref: fv([P.setReference, v.ref, r]),
              tabIndex: S ? (m.activeIndex === v.index ? 0 : -1) : void 0,
              role: S ? "menuitem" : void 0,
              "data-open": l ? "" : void 0,
              "data-nested": S ? "" : void 0,
              "data-focus-inside": a ? "" : void 0,
              className: S ? "context-menu-item" : "context-menu-list",
              ...H(
                m.getItemProps({
                  ...n,
                  onFocus(ue) {
                    n.onFocus?.(ue), f(!1), m.setHasFocusInside(!0);
                  },
                })
              ),
              children: [
                t,
                S &&
                  V("span", {
                    "aria-hidden": !0,
                    style: { marginLeft: 10, fontSize: 10 },
                    children: "▶",
                  }),
              ],
            }),
          V(Mg.Provider, {
            value: {
              activeIndex: d,
              setActiveIndex: h,
              getItemProps: oe,
              setHasFocusInside: f,
              isOpen: l,
            },
            children: V(N4, {
              elementsRef: g,
              labelsRef: y,
              children:
                R &&
                V(gv, {
                  children: V(Nk, {
                    lockScroll: !0,
                    children: V(Mk, {
                      context: D,
                      modal: !0,
                      initialFocus: P.floating,
                      children: V("div", {
                        ref: P.setFloating,
                        className: "context-menu-list",
                        style: { ..._, ...F },
                        ...ie(),
                        children: e,
                      }),
                    }),
                  }),
                }),
            }),
          }),
        ],
      })
    );
  }),
  Ai = T.exports.forwardRef(({ label: e, disabled: t, ...n }, r) => {
    const i = T.exports.useContext(Mg),
      l = _k({ label: t ? null : e }),
      s = ao(),
      a = l.index === i.activeIndex;
    return V("button", {
      ...n,
      ref: fv([l.ref, r]),
      type: "button",
      role: "menuitem",
      className: "context-menu-item",
      tabIndex: a ? 0 : -1,
      disabled: t,
      ...i.getItemProps({
        onClick(f) {
          n.onClick?.(f), s?.events.emit("click");
        },
        onFocus(f) {
          n.onFocus?.(f), i.setHasFocusInside(!0);
        },
      }),
      children: e,
    });
  }),
  gh = T.exports.forwardRef((e, t) =>
    Ko() === null
      ? V(H4, { children: V(Zw, { ...e, ref: t }) })
      : V(Zw, { ...e, ref: t })
  ),
  UB = () => {
    const t = yi((i) => i.contextMenu).item,
      n = (i) => {
        if (!!t)
          switch (i && i.action) {
            case "use":
              iv({ name: t.name, slot: t.slot });
              break;
            case "give":
              ek({ name: t.name, slot: t.slot });
              break;
            case "drop":
              wn(t) && kg({ item: t, inventory: "player" });
              break;
            case "remove":
              cr("removeComponent", { component: i?.component, slot: i?.slot });
              break;
            case "removeAmmo":
              cr("removeAmmo", t.slot);
              break;
            case "copy":
              BB(i.serial || "");
              break;
            case "custom":
              cr("useButton", { id: (i?.id || 0) + 1, slot: t.slot });
              break;
          }
      },
      r = (i) =>
        i.reduce((l, s, a) => {
          if (s.group) {
            const f = l.findIndex((d) => d.groupName === s.group);
            f !== -1
              ? l[f].buttons.push({ ...s, index: a })
              : l.push({ groupName: s.group, buttons: [{ ...s, index: a }] });
          } else l.push({ groupName: null, buttons: [{ ...s, index: a }] });
          return l;
        }, []);
    return V(bn, {
      children: we(gh, {
        children: [
          V(Ai, {
            onClick: () => n({ action: "use" }),
            label: ot.ui_use || "Use",
          }),
          V(Ai, {
            onClick: () => n({ action: "give" }),
            label: ot.ui_give || "Give",
          }),
          V(Ai, {
            onClick: () => n({ action: "drop" }),
            label: ot.ui_drop || "Drop",
          }),
          t &&
            t.metadata?.ammo > 0 &&
            V(Ai, {
              onClick: () => n({ action: "removeAmmo" }),
              label: ot.ui_remove_ammo,
            }),
          t &&
            t.metadata?.serial &&
            V(Ai, {
              onClick: () => n({ action: "copy", serial: t.metadata?.serial }),
              label: ot.ui_copy,
            }),
          t &&
            t.metadata?.components &&
            t.metadata?.components.length > 0 &&
            V(gh, {
              label: ot.ui_removeattachments,
              children:
                t &&
                t.metadata?.components.map((i, l) =>
                  V(
                    Ai,
                    {
                      onClick: () =>
                        n({ action: "remove", component: i, slot: t.slot }),
                      label: ct[i]?.label || "",
                    },
                    l
                  )
                ),
            }),
          ((t && t.name && ct[t.name]?.buttons?.length) || 0) > 0 &&
            V(bn, {
              children:
                t &&
                t.name &&
                r(ct[t.name]?.buttons).map((i, l) =>
                  V(
                    be.Fragment,
                    {
                      children: i.groupName
                        ? V(gh, {
                            label: i.groupName,
                            children: i.buttons.map((s) =>
                              V(
                                Ai,
                                {
                                  onClick: () =>
                                    n({ action: "custom", id: s.index }),
                                  label: s.label,
                                },
                                s.index
                              )
                            ),
                          })
                        : i.buttons.map((s) =>
                            V(
                              Ai,
                              {
                                onClick: () =>
                                  n({ action: "custom", id: s.index }),
                                label: s.label,
                              },
                              s.index
                            )
                          ),
                    },
                    l
                  )
                ),
            }),
        ],
      }),
    });
  },
  __ = (e) => {
    const t = be.useRef(null);
    return V(Hk, {
      in: e.in,
      nodeRef: t,
      classNames: "transition-fade",
      timeout: 200,
      unmountOnExit: !0,
      children: V("span", { ref: t, children: e.children }),
    });
  },
  HB = () => {
    const [e, t] = be.useState(!1),
      n = ru();
    return (
      Br("setInventoryVisible", t),
      Br("closeInventory", () => {
        t(!1), n(JC()), n(Xu());
      }),
      Mz(t),
      Br("setupInventory", (r) => {
        n(QC(r)), !e && t(!0);
      }),
      Br("refreshSlots", (r) => n(C3(r))),
      Br("displayMetadata", (r) => {
        n(v3(r));
      }),
      we(bn, {
        children: [
          V(__, {
            in: e,
            children: we("div", {
              className: "inventory-wrapper",
              children: [V(Vz, {}), V(gz, {}), V(Wz, {}), V($B, {}), V(UB, {})],
            }),
          }),
          V(Dz, {}),
        ],
      })
    );
  },
  Ng = (e, t) => ({ x: e.x - t.x, y: e.y - t.y }),
  jB = (e) => {
    const t = e.getInitialClientOffset(),
      n = e.getInitialSourceClientOffset();
    return t === null || n === null || t.x === void 0 || t.y === void 0
      ? { x: 0, y: 0 }
      : Ng(t, n);
  },
  WB = (e, t) => {
    const n = e.getClientOffset();
    if (n === null) return null;
    if (!t.current || !t.current.getBoundingClientRect) return Ng(n, jB(e));
    const r = t.current.getBoundingClientRect(),
      i = { x: r.width / 2, y: r.height / 2 };
    return Ng(n, i);
  },
  VB = () => {
    const e = T.exports.useRef(null),
      {
        data: t,
        isDragging: n,
        currentOffset: r,
      } = lF((i) => ({
        data: i.getItem(),
        currentOffset: WB(i, e),
        isDragging: i.isDragging(),
      }));
    return V(bn, {
      children:
        n &&
        r &&
        t.item &&
        V("div", {
          className: "item-drag-preview",
          ref: e,
          style: {
            transform: `translate(${r.x}px, ${r.y}px)`,
            backgroundImage: t.image,
          },
        }),
    });
  },
  qB = (e) => {
    const [t, n] = be.useState(!1),
      r = be.useCallback(
        ({ key: l }) => {
          l === e && n(!0);
        },
        [e]
      ),
      i = be.useCallback(
        ({ key: l }) => {
          l === e && n(!1);
        },
        [e]
      );
    return (
      be.useEffect(
        () => (
          window.addEventListener("keydown", r),
          window.addEventListener("keyup", i),
          () => {
            window.removeEventListener("keydown", r),
              window.removeEventListener("keyup", i);
          }
        ),
        [r, i]
      ),
      t
    );
  },
  GB = () => {
    const e = ru(),
      t = qB("Shift");
    return (
      T.exports.useEffect(() => {
        e(x3(t));
      }, [t, e]),
      V(bn, {})
    );
  },
  KB = () => {
    const e = ru(),
      t = vi();
    return (
      Br("init", ({ locale: n, items: r, leftInventory: i, imagepath: l }) => {
        for (const s in n) ot[s] = n[s];
        for (const s in r) ct[s] = r[s];
        l3(l), e(QC({ leftInventory: i }));
      }),
      cr("uiLoaded", {}),
      Br("closeInventory", () => {
        t.dispatch({ type: "dnd-core/END_DRAG" });
      }),
      we("div", {
        className: "app-wrapper",
        children: [V(HB, {}), V(VB, {}), V(GB, {})],
      })
    );
  };
addEventListener("dragstart", function (e) {
  e.preventDefault();
});
const QB = (e = []) => {
    const [t, n] = T.exports.useState(e);
    return {
      add: (r) => {
        n((i) => [...i, r]);
      },
      remove: () => {
        let r;
        return n(([i, ...l]) => ((r = i), l)), r;
      },
      get values() {
        return t;
      },
      get first() {
        return t[0];
      },
      get last() {
        return t[t.length - 1];
      },
      get size() {
        return t.length;
      },
    };
  },
  YB = be.createContext(null),
  XB = be.forwardRef((e, t) => {
    const n = e.item.item;
    return V("div", {
      className: "item-notification-item-box",
      style: { backgroundImage: `url(${zl(n) || "none"}`, ...e.style },
      ref: t,
      children: we("div", {
        className: "item-slot-wrapper",
        children: [
          V("div", {
            className: "item-notification-action-box",
            children: V("p", { children: e.item.text }),
          }),
          V("div", {
            className: "inventory-slot-label-box",
            children: V("div", {
              className: "inventory-slot-label-text",
              children: n.metadata?.label || ct[n.name]?.label,
            }),
          }),
        ],
      }),
    });
  }),
  ZB = ({ children: e }) => {
    const t = QB(),
      n = (r) => {
        const i = be.createRef(),
          l = { id: Date.now(), item: r, ref: i };
        t.add(l);
        const s = setTimeout(() => {
          t.remove(), clearTimeout(s);
        }, 2500);
      };
    return (
      Br("itemNotify", ([r, i, l]) => {
        n({ item: r, text: l ? `${ot[i]} ${l}x` : `${ot[i]}` });
      }),
      we(YB.Provider, {
        value: { add: n },
        children: [
          e,
          Vo.exports.createPortal(
            V(Pz, {
              className: "item-notification-container",
              children: t.values.map((r, i) =>
                V(
                  __,
                  { children: V(XB, { item: r.item, ref: r.ref }) },
                  `item-notification-${i}`
                )
              ),
            }),
            document.body
          ),
        ],
      })
    );
  },
  $u = document.getElementById("root");
GC() &&
  (($u.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")'),
  ($u.style.backgroundSize = "cover"),
  ($u.style.backgroundRepeat = "no-repeat"),
  ($u.style.backgroundPosition = "center"));
aC($u).render(
  V(be.StrictMode, {
    children: V(fM, {
      store: Mn,
      children: V(FN, {
        backend: CF,
        options: { enableMouseEvents: !0 },
        children: V(ZB, { children: V(KB, {}) }),
      }),
    }),
  })
);
