(()=>{
    var e = {
        8891: e=>{
            "use strict";
            var t, n = {
                DEBUG: !1,
                LIB_VERSION: "2.47.0"
            };
            if ("undefined" == typeof window) {
                var i = {
                    hostname: ""
                };
                t = {
                    navigator: {
                        userAgent: ""
                    },
                    document: {
                        location: i,
                        referrer: ""
                    },
                    screen: {
                        width: 0,
                        height: 0
                    },
                    location: i
                }
            } else
                t = window;
            var o, r, s, a, c, p, l, d, h, u, _, m = Array.prototype, f = Function.prototype, g = Object.prototype, y = m.slice, v = g.toString, b = g.hasOwnProperty, w = t.console, x = t.navigator, E = t.document, k = t.opera, S = t.screen, I = x.userAgent, C = f.bind, A = m.forEach, T = m.indexOf, O = m.map, M = Array.isArray, R = {}, N = {
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }, L = {
                log: function() {
                    if (n.DEBUG && !N.isUndefined(w) && w)
                        try {
                            w.log.apply(w, arguments)
                        } catch (e) {
                            N.each(arguments, (function(e) {
                                w.log(e)
                            }
                            ))
                        }
                },
                warn: function() {
                    if (n.DEBUG && !N.isUndefined(w) && w) {
                        var e = ["Mixpanel warning:"].concat(N.toArray(arguments));
                        try {
                            w.warn.apply(w, e)
                        } catch (t) {
                            N.each(e, (function(e) {
                                w.warn(e)
                            }
                            ))
                        }
                    }
                },
                error: function() {
                    if (n.DEBUG && !N.isUndefined(w) && w) {
                        var e = ["Mixpanel error:"].concat(N.toArray(arguments));
                        try {
                            w.error.apply(w, e)
                        } catch (t) {
                            N.each(e, (function(e) {
                                w.error(e)
                            }
                            ))
                        }
                    }
                },
                critical: function() {
                    if (!N.isUndefined(w) && w) {
                        var e = ["Mixpanel error:"].concat(N.toArray(arguments));
                        try {
                            w.error.apply(w, e)
                        } catch (t) {
                            N.each(e, (function(e) {
                                w.error(e)
                            }
                            ))
                        }
                    }
                }
            }, D = function(e, t) {
                return function() {
                    return arguments[0] = "[" + t + "] " + arguments[0],
                    e.apply(L, arguments)
                }
            }, B = function(e) {
                return {
                    log: D(L.log, e),
                    error: D(L.error, e),
                    critical: D(L.critical, e)
                }
            };
            N.bind = function(e, t) {
                var n, i;
                if (C && e.bind === C)
                    return C.apply(e, y.call(arguments, 1));
                if (!N.isFunction(e))
                    throw new TypeError;
                return n = y.call(arguments, 2),
                i = function() {
                    if (!(this instanceof i))
                        return e.apply(t, n.concat(y.call(arguments)));
                    var o = {};
                    o.prototype = e.prototype;
                    var r = new o;
                    o.prototype = null;
                    var s = e.apply(r, n.concat(y.call(arguments)));
                    return Object(s) === s ? s : r
                }
                ,
                i
            }
            ,
            N.each = function(e, t, n) {
                if (null != e)
                    if (A && e.forEach === A)
                        e.forEach(t, n);
                    else if (e.length === +e.length) {
                        for (var i = 0, o = e.length; i < o; i++)
                            if (i in e && t.call(n, e[i], i, e) === R)
                                return
                    } else
                        for (var r in e)
                            if (b.call(e, r) && t.call(n, e[r], r, e) === R)
                                return
            }
            ,
            N.extend = function(e) {
                return N.each(y.call(arguments, 1), (function(t) {
                    for (var n in t)
                        void 0 !== t[n] && (e[n] = t[n])
                }
                )),
                e
            }
            ,
            N.isArray = M || function(e) {
                return "[object Array]" === v.call(e)
            }
            ,
            N.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e)
                } catch (e) {
                    return !1
                }
            }
            ,
            N.isArguments = function(e) {
                return !(!e || !b.call(e, "callee"))
            }
            ,
            N.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : N.isArray(e) || N.isArguments(e) ? y.call(e) : N.values(e) : []
            }
            ,
            N.map = function(e, t, n) {
                if (O && e.map === O)
                    return e.map(t, n);
                var i = [];
                return N.each(e, (function(e) {
                    i.push(t.call(n, e))
                }
                )),
                i
            }
            ,
            N.keys = function(e) {
                var t = [];
                return null === e || N.each(e, (function(e, n) {
                    t[t.length] = n
                }
                )),
                t
            }
            ,
            N.values = function(e) {
                var t = [];
                return null === e || N.each(e, (function(e) {
                    t[t.length] = e
                }
                )),
                t
            }
            ,
            N.include = function(e, t) {
                var n = !1;
                return null === e ? n : T && e.indexOf === T ? -1 != e.indexOf(t) : (N.each(e, (function(e) {
                    if (n || (n = e === t))
                        return R
                }
                )),
                n)
            }
            ,
            N.includes = function(e, t) {
                return -1 !== e.indexOf(t)
            }
            ,
            N.inherit = function(e, t) {
                return e.prototype = new t,
                e.prototype.constructor = e,
                e.superclass = t.prototype,
                e
            }
            ,
            N.isObject = function(e) {
                return e === Object(e) && !N.isArray(e)
            }
            ,
            N.isEmptyObject = function(e) {
                if (N.isObject(e)) {
                    for (var t in e)
                        if (b.call(e, t))
                            return !1;
                    return !0
                }
                return !1
            }
            ,
            N.isUndefined = function(e) {
                return void 0 === e
            }
            ,
            N.isString = function(e) {
                return "[object String]" == v.call(e)
            }
            ,
            N.isDate = function(e) {
                return "[object Date]" == v.call(e)
            }
            ,
            N.isNumber = function(e) {
                return "[object Number]" == v.call(e)
            }
            ,
            N.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }
            ,
            N.encodeDates = function(e) {
                return N.each(e, (function(t, n) {
                    N.isDate(t) ? e[n] = N.formatDate(t) : N.isObject(t) && (e[n] = N.encodeDates(t))
                }
                )),
                e
            }
            ,
            N.timestamp = function() {
                return Date.now = Date.now || function() {
                    return +new Date
                }
                ,
                Date.now()
            }
            ,
            N.formatDate = function(e) {
                function t(e) {
                    return e < 10 ? "0" + e : e
                }
                return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds())
            }
            ,
            N.strip_empty_properties = function(e) {
                var t = {};
                return N.each(e, (function(e, n) {
                    N.isString(e) && e.length > 0 && (t[n] = e)
                }
                )),
                t
            }
            ,
            N.truncate = function(e, t) {
                var n;
                return "string" == typeof e ? n = e.slice(0, t) : N.isArray(e) ? (n = [],
                N.each(e, (function(e) {
                    n.push(N.truncate(e, t))
                }
                ))) : N.isObject(e) ? (n = {},
                N.each(e, (function(e, i) {
                    n[i] = N.truncate(e, t)
                }
                ))) : n = e,
                n
            }
            ,
            N.JSONEncode = function(e) {
                var t = function(e) {
                    var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
                      , n = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };
                    return t.lastIndex = 0,
                    t.test(e) ? '"' + e.replace(t, (function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }
                    )) + '"' : '"' + e + '"'
                }
                  , n = function(e, i) {
                    var o = ""
                      , r = 0
                      , s = ""
                      , a = ""
                      , c = 0
                      , p = o
                      , l = []
                      , d = i[e];
                    switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(e)),
                    typeof d) {
                    case "string":
                        return t(d);
                    case "number":
                        return isFinite(d) ? String(d) : "null";
                    case "boolean":
                    case "null":
                        return String(d);
                    case "object":
                        if (!d)
                            return "null";
                        if (o += "    ",
                        l = [],
                        "[object Array]" === v.apply(d)) {
                            for (c = d.length,
                            r = 0; r < c; r += 1)
                                l[r] = n(r, d) || "null";
                            return a = 0 === l.length ? "[]" : o ? "[\n" + o + l.join(",\n" + o) + "\n" + p + "]" : "[" + l.join(",") + "]",
                            o = p,
                            a
                        }
                        for (s in d)
                            b.call(d, s) && (a = n(s, d)) && l.push(t(s) + (o ? ": " : ":") + a);
                        return a = 0 === l.length ? "{}" : o ? "{" + l.join(",") + p + "}" : "{" + l.join(",") + "}",
                        o = p,
                        a
                    }
                };
                return n("", {
                    "": e
                })
            }
            ,
            N.JSONDecode = (c = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            },
            p = function(e) {
                var t = new SyntaxError(e);
                throw t.at = o,
                t.text = s,
                t
            }
            ,
            l = function(e) {
                return e && e !== r && p("Expected '" + e + "' instead of '" + r + "'"),
                r = s.charAt(o),
                o += 1,
                r
            }
            ,
            d = function() {
                var e, t = "";
                for ("-" === r && (t = "-",
                l("-")); r >= "0" && r <= "9"; )
                    t += r,
                    l();
                if ("." === r)
                    for (t += "."; l() && r >= "0" && r <= "9"; )
                        t += r;
                if ("e" === r || "E" === r)
                    for (t += r,
                    l(),
                    "-" !== r && "+" !== r || (t += r,
                    l()); r >= "0" && r <= "9"; )
                        t += r,
                        l();
                if (e = +t,
                isFinite(e))
                    return e;
                p("Bad number")
            }
            ,
            h = function() {
                var e, t, n, i = "";
                if ('"' === r)
                    for (; l(); ) {
                        if ('"' === r)
                            return l(),
                            i;
                        if ("\\" === r)
                            if (l(),
                            "u" === r) {
                                for (n = 0,
                                t = 0; t < 4 && (e = parseInt(l(), 16),
                                isFinite(e)); t += 1)
                                    n = 16 * n + e;
                                i += String.fromCharCode(n)
                            } else {
                                if ("string" != typeof c[r])
                                    break;
                                i += c[r]
                            }
                        else
                            i += r
                    }
                p("Bad string")
            }
            ,
            u = function() {
                for (; r && r <= " "; )
                    l()
            }
            ,
            a = function() {
                switch (u(),
                r) {
                case "{":
                    return function() {
                        var e, t = {};
                        if ("{" === r) {
                            if (l("{"),
                            u(),
                            "}" === r)
                                return l("}"),
                                t;
                            for (; r; ) {
                                if (e = h(),
                                u(),
                                l(":"),
                                Object.hasOwnProperty.call(t, e) && p('Duplicate key "' + e + '"'),
                                t[e] = a(),
                                u(),
                                "}" === r)
                                    return l("}"),
                                    t;
                                l(","),
                                u()
                            }
                        }
                        p("Bad object")
                    }();
                case "[":
                    return function() {
                        var e = [];
                        if ("[" === r) {
                            if (l("["),
                            u(),
                            "]" === r)
                                return l("]"),
                                e;
                            for (; r; ) {
                                if (e.push(a()),
                                u(),
                                "]" === r)
                                    return l("]"),
                                    e;
                                l(","),
                                u()
                            }
                        }
                        p("Bad array")
                    }();
                case '"':
                    return h();
                case "-":
                    return d();
                default:
                    return r >= "0" && r <= "9" ? d() : function() {
                        switch (r) {
                        case "t":
                            return l("t"),
                            l("r"),
                            l("u"),
                            l("e"),
                            !0;
                        case "f":
                            return l("f"),
                            l("a"),
                            l("l"),
                            l("s"),
                            l("e"),
                            !1;
                        case "n":
                            return l("n"),
                            l("u"),
                            l("l"),
                            l("l"),
                            null
                        }
                        p('Unexpected "' + r + '"')
                    }()
                }
            }
            ,
            function(e) {
                var t;
                return s = e,
                o = 0,
                r = " ",
                t = a(),
                u(),
                r && p("Syntax error"),
                t
            }
            ),
            N.base64Encode = function(e) {
                var t, n, i, o, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, c = 0, p = "", l = [];
                if (!e)
                    return e;
                e = N.utf8Encode(e);
                do {
                    t = (r = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63,
                    n = r >> 12 & 63,
                    i = r >> 6 & 63,
                    o = 63 & r,
                    l[c++] = s.charAt(t) + s.charAt(n) + s.charAt(i) + s.charAt(o)
                } while (a < e.length);
                switch (p = l.join(""),
                e.length % 3) {
                case 1:
                    p = p.slice(0, -2) + "==";
                    break;
                case 2:
                    p = p.slice(0, -1) + "="
                }
                return p
            }
            ,
            N.utf8Encode = function(e) {
                var t, n, i, o, r = "";
                for (t = n = 0,
                i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length,
                o = 0; o < i; o++) {
                    var s = e.charCodeAt(o)
                      , a = null;
                    s < 128 ? n++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128),
                    null !== a && (n > t && (r += e.substring(t, n)),
                    r += a,
                    t = n = o + 1)
                }
                return n > t && (r += e.substring(t, e.length)),
                r
            }
            ,
            N.UUID = (_ = function() {
                var e, n = 1 * new Date;
                if (t.performance && t.performance.now)
                    e = t.performance.now();
                else
                    for (e = 0; n == 1 * new Date; )
                        e++;
                return n.toString(16) + Math.floor(e).toString(16)
            }
            ,
            function() {
                var e = (S.height * S.width).toString(16);
                return _() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
                    var e, t, n = I, i = [], o = 0;
                    function r(e, t) {
                        var n, o = 0;
                        for (n = 0; n < t.length; n++)
                            o |= i[n] << 8 * n;
                        return e ^ o
                    }
                    for (e = 0; e < n.length; e++)
                        t = n.charCodeAt(e),
                        i.unshift(255 & t),
                        i.length >= 4 && (o = r(o, i),
                        i = []);
                    return i.length > 0 && (o = r(o, i)),
                    o.toString(16)
                }() + "-" + e + "-" + _()
            }
            );
            var G = ["ahrefsbot", "baiduspider", "bingbot", "bingpreview", "facebookexternal", "petalbot", "pinterest", "screaming frog", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"];
            N.isBlockedUA = function(e) {
                var t;
                for (e = e.toLowerCase(),
                t = 0; t < G.length; t++)
                    if (-1 !== e.indexOf(G[t]))
                        return !0;
                return !1
            }
            ,
            N.HTTPBuildQuery = function(e, t) {
                var n, i, o = [];
                return N.isUndefined(t) && (t = "&"),
                N.each(e, (function(e, t) {
                    n = encodeURIComponent(e.toString()),
                    i = encodeURIComponent(t),
                    o[o.length] = i + "=" + n
                }
                )),
                o.join(t)
            }
            ,
            N.getQueryParam = function(e, t) {
                t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
                if (null === n || n && "string" != typeof n[1] && n[1].length)
                    return "";
                var i = n[1];
                try {
                    i = decodeURIComponent(i)
                } catch (e) {
                    L.error("Skipping decoding for malformed query param: " + i)
                }
                return i.replace(/\+/g, " ")
            }
            ,
            N.cookie = {
                get: function(e) {
                    for (var t = e + "=", n = E.cookie.split(";"), i = 0; i < n.length; i++) {
                        for (var o = n[i]; " " == o.charAt(0); )
                            o = o.substring(1, o.length);
                        if (0 === o.indexOf(t))
                            return decodeURIComponent(o.substring(t.length, o.length))
                    }
                    return null
                },
                parse: function(e) {
                    var t;
                    try {
                        t = N.JSONDecode(N.cookie.get(e)) || {}
                    } catch (e) {}
                    return t
                },
                set_seconds: function(e, t, n, i, o, r, s) {
                    var a = ""
                      , c = ""
                      , p = "";
                    if (s)
                        a = "; domain=" + s;
                    else if (i) {
                        var l = z(E.location.hostname);
                        a = l ? "; domain=." + l : ""
                    }
                    if (n) {
                        var d = new Date;
                        d.setTime(d.getTime() + 1e3 * n),
                        c = "; expires=" + d.toGMTString()
                    }
                    r && (o = !0,
                    p = "; SameSite=None"),
                    o && (p += "; secure"),
                    E.cookie = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p
                },
                set: function(e, t, n, i, o, r, s) {
                    var a = ""
                      , c = ""
                      , p = "";
                    if (s)
                        a = "; domain=" + s;
                    else if (i) {
                        var l = z(E.location.hostname);
                        a = l ? "; domain=." + l : ""
                    }
                    if (n) {
                        var d = new Date;
                        d.setTime(d.getTime() + 24 * n * 60 * 60 * 1e3),
                        c = "; expires=" + d.toGMTString()
                    }
                    r && (o = !0,
                    p = "; SameSite=None"),
                    o && (p += "; secure");
                    var h = e + "=" + encodeURIComponent(t) + c + "; path=/" + a + p;
                    return E.cookie = h,
                    h
                },
                remove: function(e, t, n) {
                    N.cookie.set(e, "", -1, t, !1, !1, n)
                }
            };
            var P = null
              , q = function(e, t) {
                if (null !== P && !t)
                    return P;
                var n = !0;
                try {
                    e = e || window.localStorage;
                    var i = "__mplss_" + H(8);
                    e.setItem(i, "xyz"),
                    "xyz" !== e.getItem(i) && (n = !1),
                    e.removeItem(i)
                } catch (e) {
                    n = !1
                }
                return P = n,
                n
            };
            N.localStorage = {
                is_supported: function(e) {
                    var t = q(null, e);
                    return t || L.error("localStorage unsupported; falling back to cookie store"),
                    t
                },
                error: function(e) {
                    L.error("localStorage error: " + e)
                },
                get: function(e) {
                    try {
                        return window.localStorage.getItem(e)
                    } catch (e) {
                        N.localStorage.error(e)
                    }
                    return null
                },
                parse: function(e) {
                    try {
                        return N.JSONDecode(N.localStorage.get(e)) || {}
                    } catch (e) {}
                    return null
                },
                set: function(e, t) {
                    try {
                        window.localStorage.setItem(e, t)
                    } catch (e) {
                        N.localStorage.error(e)
                    }
                },
                remove: function(e) {
                    try {
                        window.localStorage.removeItem(e)
                    } catch (e) {
                        N.localStorage.error(e)
                    }
                }
            },
            N.register_event = function() {
                function e(t) {
                    return t && (t.preventDefault = e.preventDefault,
                    t.stopPropagation = e.stopPropagation),
                    t
                }
                return e.preventDefault = function() {
                    this.returnValue = !1
                }
                ,
                e.stopPropagation = function() {
                    this.cancelBubble = !0
                }
                ,
                function(t, n, i, o, r) {
                    if (t)
                        if (t.addEventListener && !o)
                            t.addEventListener(n, i, !!r);
                        else {
                            var s = "on" + n
                              , a = t[s];
                            t[s] = function(t, n, i) {
                                return function(o) {
                                    if (o = o || e(window.event)) {
                                        var r, s, a = !0;
                                        return N.isFunction(i) && (r = i(o)),
                                        s = n.call(t, o),
                                        !1 !== r && !1 !== s || (a = !1),
                                        a
                                    }
                                }
                            }(t, i, a)
                        }
                    else
                        L.error("No valid element provided to register_event")
                }
            }();
            var U = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
            N.dom_query = function() {
                function e(e) {
                    return e.all ? e.all : e.getElementsByTagName("*")
                }
                var t = /[\t\r\n]/g;
                function n(e, n) {
                    var i = " " + n + " ";
                    return (" " + e.className + " ").replace(t, " ").indexOf(i) >= 0
                }
                function i(t) {
                    if (!E.getElementsByTagName)
                        return [];
                    var i, o, r, s, a, c, p, l, d, h, u = t.split(" "), _ = [E];
                    for (c = 0; c < u.length; c++)
                        if ((i = u[c].replace(/^\s+/, "").replace(/\s+$/, "")).indexOf("#") > -1) {
                            r = (o = i.split("#"))[0];
                            var m = o[1]
                              , f = E.getElementById(m);
                            if (!f || r && f.nodeName.toLowerCase() != r)
                                return [];
                            _ = [f]
                        } else if (i.indexOf(".") > -1) {
                            r = (o = i.split("."))[0];
                            var g = o[1];
                            for (r || (r = "*"),
                            s = [],
                            a = 0,
                            p = 0; p < _.length; p++)
                                for (d = "*" == r ? e(_[p]) : _[p].getElementsByTagName(r),
                                l = 0; l < d.length; l++)
                                    s[a++] = d[l];
                            for (_ = [],
                            h = 0,
                            p = 0; p < s.length; p++)
                                s[p].className && N.isString(s[p].className) && n(s[p], g) && (_[h++] = s[p])
                        } else {
                            var y = i.match(U);
                            if (y) {
                                r = y[1];
                                var v, b = y[2], w = y[3], x = y[4];
                                for (r || (r = "*"),
                                s = [],
                                a = 0,
                                p = 0; p < _.length; p++)
                                    for (d = "*" == r ? e(_[p]) : _[p].getElementsByTagName(r),
                                    l = 0; l < d.length; l++)
                                        s[a++] = d[l];
                                switch (_ = [],
                                h = 0,
                                w) {
                                case "=":
                                    v = function(e) {
                                        return e.getAttribute(b) == x
                                    }
                                    ;
                                    break;
                                case "~":
                                    v = function(e) {
                                        return e.getAttribute(b).match(new RegExp("\\b" + x + "\\b"))
                                    }
                                    ;
                                    break;
                                case "|":
                                    v = function(e) {
                                        return e.getAttribute(b).match(new RegExp("^" + x + "-?"))
                                    }
                                    ;
                                    break;
                                case "^":
                                    v = function(e) {
                                        return 0 === e.getAttribute(b).indexOf(x)
                                    }
                                    ;
                                    break;
                                case "$":
                                    v = function(e) {
                                        return e.getAttribute(b).lastIndexOf(x) == e.getAttribute(b).length - x.length
                                    }
                                    ;
                                    break;
                                case "*":
                                    v = function(e) {
                                        return e.getAttribute(b).indexOf(x) > -1
                                    }
                                    ;
                                    break;
                                default:
                                    v = function(e) {
                                        return e.getAttribute(b)
                                    }
                                }
                                for (_ = [],
                                h = 0,
                                p = 0; p < s.length; p++)
                                    v(s[p]) && (_[h++] = s[p])
                            } else {
                                for (r = i,
                                s = [],
                                a = 0,
                                p = 0; p < _.length; p++)
                                    for (d = _[p].getElementsByTagName(r),
                                    l = 0; l < d.length; l++)
                                        s[a++] = d[l];
                                _ = s
                            }
                        }
                    return _
                }
                return function(e) {
                    return N.isElement(e) ? [e] : N.isObject(e) && !N.isUndefined(e.length) ? e : i.call(this, e)
                }
            }();
            var W = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
              , j = ["dclid", "fbclid", "gclid", "ko_click_id", "li_fat_id", "msclkid", "ttclid", "twclid", "wbraid"];
            N.info = {
                campaignParams: function(e) {
                    var t = ""
                      , n = {};
                    return N.each(W, (function(i) {
                        (t = N.getQueryParam(E.URL, i)).length ? n[i] = t : void 0 !== e && (n[i] = e)
                    }
                    )),
                    n
                },
                clickParams: function() {
                    var e = ""
                      , t = {};
                    return N.each(j, (function(n) {
                        (e = N.getQueryParam(E.URL, n)).length && (t[n] = e)
                    }
                    )),
                    t
                },
                marketingParams: function() {
                    return N.extend(N.info.campaignParams(), N.info.clickParams())
                },
                searchEngine: function(e) {
                    return 0 === e.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e.search("https?://(.*)bing.com") ? "bing" : 0 === e.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null
                },
                searchInfo: function(e) {
                    var t = N.info.searchEngine(e)
                      , n = "yahoo" != t ? "q" : "p"
                      , i = {};
                    if (null !== t) {
                        i.$search_engine = t;
                        var o = N.getQueryParam(e, n);
                        o.length && (i.mp_keyword = o)
                    }
                    return i
                },
                browser: function(e, t, n) {
                    return t = t || "",
                    n || N.includes(e, " OPR/") ? N.includes(e, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : N.includes(e, "IEMobile") || N.includes(e, "WPDesktop") ? "Internet Explorer Mobile" : N.includes(e, "SamsungBrowser/") ? "Samsung Internet" : N.includes(e, "Edge") || N.includes(e, "Edg/") ? "Microsoft Edge" : N.includes(e, "FBIOS") ? "Facebook Mobile" : N.includes(e, "Chrome") ? "Chrome" : N.includes(e, "CriOS") ? "Chrome iOS" : N.includes(e, "UCWEB") || N.includes(e, "UCBrowser") ? "UC Browser" : N.includes(e, "FxiOS") ? "Firefox iOS" : N.includes(t, "Apple") ? N.includes(e, "Mobile") ? "Mobile Safari" : "Safari" : N.includes(e, "Android") ? "Android Mobile" : N.includes(e, "Konqueror") ? "Konqueror" : N.includes(e, "Firefox") ? "Firefox" : N.includes(e, "MSIE") || N.includes(e, "Trident/") ? "Internet Explorer" : N.includes(e, "Gecko") ? "Mozilla" : ""
                },
                browserVersion: function(e, t, n) {
                    var i = {
                        "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                        "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                        "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        "Android Mobile": /android\s(\d+(\.\d+)?)/,
                        "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                        "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/
                    }[N.info.browser(e, t, n)];
                    if (void 0 === i)
                        return null;
                    var o = e.match(i);
                    return o ? parseFloat(o[o.length - 2]) : null
                },
                os: function() {
                    var e = I;
                    return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : "Windows" : /(iPhone|iPad|iPod)/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Mac/i.test(e) ? "Mac OS X" : /Linux/.test(e) ? "Linux" : /CrOS/.test(e) ? "Chrome OS" : ""
                },
                device: function(e) {
                    return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? "Windows Phone" : /iPad/.test(e) ? "iPad" : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e) ? "BlackBerry" : /Android/.test(e) ? "Android" : ""
                },
                referringDomain: function(e) {
                    var t = e.split("/");
                    return t.length >= 3 ? t[2] : ""
                },
                properties: function() {
                    return N.extend(N.strip_empty_properties({
                        $os: N.info.os(),
                        $browser: N.info.browser(I, x.vendor, k),
                        $referrer: E.referrer,
                        $referring_domain: N.info.referringDomain(E.referrer),
                        $device: N.info.device(I)
                    }), {
                        $current_url: t.location.href,
                        $browser_version: N.info.browserVersion(I, x.vendor, k),
                        $screen_height: S.height,
                        $screen_width: S.width,
                        mp_lib: "web",
                        $lib_version: n.LIB_VERSION,
                        $insert_id: H(),
                        time: N.timestamp() / 1e3
                    })
                },
                people_properties: function() {
                    return N.extend(N.strip_empty_properties({
                        $os: N.info.os(),
                        $browser: N.info.browser(I, x.vendor, k)
                    }), {
                        $browser_version: N.info.browserVersion(I, x.vendor, k)
                    })
                },
                mpPageViewProperties: function() {
                    return N.strip_empty_properties({
                        current_page_title: E.title,
                        current_domain: t.location.hostname,
                        current_url_path: t.location.pathname,
                        current_url_protocol: t.location.protocol,
                        current_url_search: t.location.search
                    })
                }
            };
            var H = function(e) {
                var t = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
                return e ? t.substring(0, e) : t
            }
              , F = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i
              , $ = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i
              , z = function(e) {
                var t = $
                  , n = e.split(".")
                  , i = n[n.length - 1];
                (i.length > 4 || "com" === i || "org" === i) && (t = F);
                var o = e.match(t);
                return o ? o[0] : ""
            }
              , K = null
              , X = null;
            "undefined" != typeof JSON && (K = JSON.stringify,
            X = JSON.parse),
            K = K || N.JSONEncode,
            X = X || N.JSONDecode,
            N.toArray = N.toArray,
            N.isObject = N.isObject,
            N.JSONEncode = N.JSONEncode,
            N.JSONDecode = N.JSONDecode,
            N.isBlockedUA = N.isBlockedUA,
            N.isEmptyObject = N.isEmptyObject,
            N.info = N.info,
            N.info.device = N.info.device,
            N.info.browser = N.info.browser,
            N.info.browserVersion = N.info.browserVersion,
            N.info.properties = N.info.properties;
            var V = function() {};
            V.prototype.create_properties = function() {}
            ,
            V.prototype.event_handler = function() {}
            ,
            V.prototype.after_track_handler = function() {}
            ,
            V.prototype.init = function(e) {
                return this.mp = e,
                this
            }
            ,
            V.prototype.track = function(e, t, n, i) {
                var o = this
                  , r = N.dom_query(e);
                if (0 !== r.length)
                    return N.each(r, (function(e) {
                        N.register_event(e, this.override_event, (function(e) {
                            var r = {}
                              , s = o.create_properties(n, this)
                              , a = o.mp.get_config("track_links_timeout");
                            o.event_handler(e, this, r),
                            window.setTimeout(o.track_callback(i, s, r, !0), a),
                            o.mp.track(t, s, o.track_callback(i, s, r))
                        }
                        ))
                    }
                    ), this),
                    !0;
                L.error("The DOM query (" + e + ") returned 0 elements")
            }
            ,
            V.prototype.track_callback = function(e, t, n, i) {
                i = i || !1;
                var o = this;
                return function() {
                    n.callback_fired || (n.callback_fired = !0,
                    e && !1 === e(i, t) || o.after_track_handler(t, n, i))
                }
            }
            ,
            V.prototype.create_properties = function(e, t) {
                return "function" == typeof e ? e(t) : N.extend({}, e)
            }
            ;
            var Y = function() {
                this.override_event = "click"
            };
            N.inherit(Y, V),
            Y.prototype.create_properties = function(e, t) {
                var n = Y.superclass.create_properties.apply(this, arguments);
                return t.href && (n.url = t.href),
                n
            }
            ,
            Y.prototype.event_handler = function(e, t, n) {
                n.new_tab = 2 === e.which || e.metaKey || e.ctrlKey || "_blank" === t.target,
                n.href = t.href,
                n.new_tab || e.preventDefault()
            }
            ,
            Y.prototype.after_track_handler = function(e, t) {
                t.new_tab || setTimeout((function() {
                    window.location = t.href
                }
                ), 0)
            }
            ;
            var J = function() {
                this.override_event = "submit"
            };
            N.inherit(J, V),
            J.prototype.event_handler = function(e, t, n) {
                n.element = t,
                e.preventDefault()
            }
            ,
            J.prototype.after_track_handler = function(e, t) {
                setTimeout((function() {
                    t.element.submit()
                }
                ), 0)
            }
            ;
            var Q = B("lock")
              , Z = function(e, t) {
                t = t || {},
                this.storageKey = e,
                this.storage = t.storage || window.localStorage,
                this.pollIntervalMS = t.pollIntervalMS || 100,
                this.timeoutMS = t.timeoutMS || 2e3
            };
            Z.prototype.withLock = function(e, t, n) {
                n || "function" == typeof t || (n = t,
                t = null);
                var i = n || (new Date).getTime() + "|" + Math.random()
                  , o = (new Date).getTime()
                  , r = this.storageKey
                  , s = this.pollIntervalMS
                  , a = this.timeoutMS
                  , c = this.storage
                  , p = r + ":X"
                  , l = r + ":Y"
                  , d = r + ":Z"
                  , h = function(e) {
                    t && t(e)
                }
                  , u = function(e) {
                    if ((new Date).getTime() - o > a)
                        return Q.error("Timeout waiting for mutex on " + r + "; clearing lock. [" + i + "]"),
                        c.removeItem(d),
                        c.removeItem(l),
                        void f();
                    setTimeout((function() {
                        try {
                            e()
                        } catch (e) {
                            h(e)
                        }
                    }
                    ), s * (Math.random() + .1))
                }
                  , _ = function(e, t) {
                    e() ? t() : u((function() {
                        _(e, t)
                    }
                    ))
                }
                  , m = function() {
                    var e = c.getItem(l);
                    if (e && e !== i)
                        return !1;
                    if (c.setItem(l, i),
                    c.getItem(l) === i)
                        return !0;
                    if (!q(c, !0))
                        throw new Error("localStorage support dropped while acquiring lock");
                    return !1
                }
                  , f = function() {
                    c.setItem(p, i),
                    _(m, (function() {
                        c.getItem(p) !== i ? u((function() {
                            c.getItem(l) === i ? _((function() {
                                return !c.getItem(d)
                            }
                            ), g) : f()
                        }
                        )) : g()
                    }
                    ))
                }
                  , g = function() {
                    c.setItem(d, "1");
                    try {
                        e()
                    } finally {
                        c.removeItem(d),
                        c.getItem(l) === i && c.removeItem(l),
                        c.getItem(p) === i && c.removeItem(p)
                    }
                };
                try {
                    if (!q(c, !0))
                        throw new Error("localStorage support check failed");
                    f()
                } catch (e) {
                    h(e)
                }
            }
            ;
            var ee = B("batch")
              , te = function(e, t) {
                t = t || {},
                this.storageKey = e,
                this.storage = t.storage || window.localStorage,
                this.reportError = t.errorReporter || N.bind(ee.error, ee),
                this.lock = new Z(e,{
                    storage: this.storage
                }),
                this.pid = t.pid || null,
                this.memQueue = []
            };
            te.prototype.enqueue = function(e, t, n) {
                var i = {
                    id: H(),
                    flushAfter: (new Date).getTime() + 2 * t,
                    payload: e
                };
                this.lock.withLock(N.bind((function() {
                    var t;
                    try {
                        var o = this.readFromStorage();
                        o.push(i),
                        (t = this.saveToStorage(o)) && this.memQueue.push(i)
                    } catch (n) {
                        this.reportError("Error enqueueing item", e),
                        t = !1
                    }
                    n && n(t)
                }
                ), this), N.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e),
                    n && n(!1)
                }
                ), this), this.pid)
            }
            ,
            te.prototype.fillBatch = function(e) {
                var t = this.memQueue.slice(0, e);
                if (t.length < e) {
                    var n = this.readFromStorage();
                    if (n.length) {
                        var i = {};
                        N.each(t, (function(e) {
                            i[e.id] = !0
                        }
                        ));
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            if ((new Date).getTime() > r.flushAfter && !i[r.id] && (r.orphaned = !0,
                            t.push(r),
                            t.length >= e))
                                break
                        }
                    }
                }
                return t
            }
            ;
            var ne = function(e, t) {
                var n = [];
                return N.each(e, (function(e) {
                    e.id && !t[e.id] && n.push(e)
                }
                )),
                n
            };
            te.prototype.removeItemsByID = function(e, t) {
                var n = {};
                N.each(e, (function(e) {
                    n[e] = !0
                }
                )),
                this.memQueue = ne(this.memQueue, n);
                var i = N.bind((function() {
                    var t;
                    try {
                        var i = this.readFromStorage();
                        if (i = ne(i, n),
                        t = this.saveToStorage(i)) {
                            i = this.readFromStorage();
                            for (var o = 0; o < i.length; o++) {
                                var r = i[o];
                                if (r.id && n[r.id])
                                    return this.reportError("Item not removed from storage"),
                                    !1
                            }
                        }
                    } catch (n) {
                        this.reportError("Error removing items", e),
                        t = !1
                    }
                    return t
                }
                ), this);
                this.lock.withLock((function() {
                    var e = i();
                    t && t(e)
                }
                ), N.bind((function(e) {
                    var n = !1;
                    if (this.reportError("Error acquiring storage lock", e),
                    !q(this.storage, !0) && !(n = i()))
                        try {
                            this.storage.removeItem(this.storageKey)
                        } catch (e) {
                            this.reportError("Error clearing queue", e)
                        }
                    t && t(n)
                }
                ), this), this.pid)
            }
            ;
            var ie = function(e, t) {
                var n = [];
                return N.each(e, (function(e) {
                    var i = e.id;
                    if (i in t) {
                        var o = t[i];
                        null !== o && (e.payload = o,
                        n.push(e))
                    } else
                        n.push(e)
                }
                )),
                n
            };
            te.prototype.updatePayloads = function(e, t) {
                this.memQueue = ie(this.memQueue, e),
                this.lock.withLock(N.bind((function() {
                    var n;
                    try {
                        var i = this.readFromStorage();
                        i = ie(i, e),
                        n = this.saveToStorage(i)
                    } catch (t) {
                        this.reportError("Error updating items", e),
                        n = !1
                    }
                    t && t(n)
                }
                ), this), N.bind((function(e) {
                    this.reportError("Error acquiring storage lock", e),
                    t && t(!1)
                }
                ), this), this.pid)
            }
            ,
            te.prototype.readFromStorage = function() {
                var e;
                try {
                    (e = this.storage.getItem(this.storageKey)) && (e = X(e),
                    N.isArray(e) || (this.reportError("Invalid storage entry:", e),
                    e = null))
                } catch (t) {
                    this.reportError("Error retrieving queue", t),
                    e = null
                }
                return e || []
            }
            ,
            te.prototype.saveToStorage = function(e) {
                try {
                    return this.storage.setItem(this.storageKey, K(e)),
                    !0
                } catch (e) {
                    return this.reportError("Error saving queue", e),
                    !1
                }
            }
            ,
            te.prototype.clear = function() {
                this.memQueue = [],
                this.storage.removeItem(this.storageKey)
            }
            ;
            var oe = B("batch")
              , re = function(e, t) {
                this.errorReporter = t.errorReporter,
                this.queue = new te(e,{
                    errorReporter: N.bind(this.reportError, this),
                    storage: t.storage
                }),
                this.libConfig = t.libConfig,
                this.sendRequest = t.sendRequestFunc,
                this.beforeSendHook = t.beforeSendHook,
                this.stopAllBatching = t.stopAllBatchingFunc,
                this.batchSize = this.libConfig.batch_size,
                this.flushInterval = this.libConfig.batch_flush_interval_ms,
                this.stopped = !this.libConfig.batch_autostart,
                this.consecutiveRemovalFailures = 0,
                this.itemIdsSentSuccessfully = {}
            };
            re.prototype.enqueue = function(e, t) {
                this.queue.enqueue(e, this.flushInterval, t)
            }
            ,
            re.prototype.start = function() {
                this.stopped = !1,
                this.consecutiveRemovalFailures = 0,
                this.flush()
            }
            ,
            re.prototype.stop = function() {
                this.stopped = !0,
                this.timeoutID && (clearTimeout(this.timeoutID),
                this.timeoutID = null)
            }
            ,
            re.prototype.clear = function() {
                this.queue.clear()
            }
            ,
            re.prototype.resetBatchSize = function() {
                this.batchSize = this.libConfig.batch_size
            }
            ,
            re.prototype.resetFlush = function() {
                this.scheduleFlush(this.libConfig.batch_flush_interval_ms)
            }
            ,
            re.prototype.scheduleFlush = function(e) {
                this.flushInterval = e,
                this.stopped || (this.timeoutID = setTimeout(N.bind(this.flush, this), this.flushInterval))
            }
            ,
            re.prototype.flush = function(e) {
                try {
                    if (this.requestInProgress)
                        return void oe.log("Flush: Request already in progress");
                    e = e || {};
                    var t = this.libConfig.batch_request_timeout_ms
                      , i = (new Date).getTime()
                      , o = this.batchSize
                      , r = this.queue.fillBatch(o)
                      , s = []
                      , a = {};
                    if (N.each(r, (function(e) {
                        var t = e.payload;
                        if (this.beforeSendHook && !e.orphaned && (t = this.beforeSendHook(t)),
                        t) {
                            t.event && t.properties && (t.properties = N.extend({}, t.properties, {
                                mp_sent_by_lib_version: n.LIB_VERSION
                            }));
                            var i = !0
                              , o = e.id;
                            o ? (this.itemIdsSentSuccessfully[o] || 0) > 5 && (this.reportError("[dupe] item ID sent too many times, not sending", {
                                item: e,
                                batchSize: r.length,
                                timesSent: this.itemIdsSentSuccessfully[o]
                            }),
                            i = !1) : this.reportError("[dupe] found item with no ID", {
                                item: e
                            }),
                            i && s.push(t)
                        }
                        a[e.id] = t
                    }
                    ), this),
                    s.length < 1)
                        return void this.resetFlush();
                    this.requestInProgress = !0;
                    var c = N.bind((function(n) {
                        this.requestInProgress = !1;
                        try {
                            var s = !1;
                            if (e.unloading)
                                this.queue.updatePayloads(a);
                            else if (N.isObject(n) && "timeout" === n.error && (new Date).getTime() - i >= t)
                                this.reportError("Network timeout; retrying"),
                                this.flush();
                            else if (N.isObject(n) && n.xhr_req && (n.xhr_req.status >= 500 || 429 === n.xhr_req.status || "timeout" === n.error)) {
                                var c = 2 * this.flushInterval
                                  , p = n.xhr_req.responseHeaders;
                                if (p) {
                                    var l = p["Retry-After"];
                                    l && (c = 1e3 * parseInt(l, 10) || c)
                                }
                                c = Math.min(6e5, c),
                                this.reportError("Error; retry in " + c + " ms"),
                                this.scheduleFlush(c)
                            } else if (N.isObject(n) && n.xhr_req && 413 === n.xhr_req.status)
                                if (r.length > 1) {
                                    var d = Math.max(1, Math.floor(o / 2));
                                    this.batchSize = Math.min(this.batchSize, d, r.length - 1),
                                    this.reportError("413 response; reducing batch size to " + this.batchSize),
                                    this.resetFlush()
                                } else
                                    this.reportError("Single-event request too large; dropping", r),
                                    this.resetBatchSize(),
                                    s = !0;
                            else
                                s = !0;
                            s && (this.queue.removeItemsByID(N.map(r, (function(e) {
                                return e.id
                            }
                            )), N.bind((function(e) {
                                e ? (this.consecutiveRemovalFailures = 0,
                                this.flush()) : (this.reportError("Failed to remove items from queue"),
                                ++this.consecutiveRemovalFailures > 5 ? (this.reportError("Too many queue failures; disabling batching system."),
                                this.stopAllBatching()) : this.resetFlush())
                            }
                            ), this)),
                            N.each(r, N.bind((function(e) {
                                var t = e.id;
                                t ? (this.itemIdsSentSuccessfully[t] = this.itemIdsSentSuccessfully[t] || 0,
                                this.itemIdsSentSuccessfully[t]++,
                                this.itemIdsSentSuccessfully[t] > 5 && this.reportError("[dupe] item ID sent too many times", {
                                    item: e,
                                    batchSize: r.length,
                                    timesSent: this.itemIdsSentSuccessfully[t]
                                })) : this.reportError("[dupe] found item with no ID while removing", {
                                    item: e
                                })
                            }
                            ), this)))
                        } catch (e) {
                            this.reportError("Error handling API response", e),
                            this.resetFlush()
                        }
                    }
                    ), this)
                      , p = {
                        method: "POST",
                        verbose: !0,
                        ignore_json_errors: !0,
                        timeout_ms: t
                    };
                    e.unloading && (p.transport = "sendBeacon"),
                    oe.log("MIXPANEL REQUEST:", s),
                    this.sendRequest(s, p, c)
                } catch (e) {
                    this.reportError("Error flushing request queue", e),
                    this.resetFlush()
                }
            }
            ,
            re.prototype.reportError = function(e, t) {
                if (oe.error.apply(oe.error, arguments),
                this.errorReporter)
                    try {
                        t instanceof Error || (t = new Error(e)),
                        this.errorReporter(e, t)
                    } catch (t) {
                        oe.error(t)
                    }
            }
            ;
            var se = "__mp_opt_in_out_";
            function ae(e, t) {
                ye(!0, e, t)
            }
            function ce(e, t) {
                ye(!1, e, t)
            }
            function pe(e, t) {
                return "1" === ge(e, t)
            }
            function le(e, n) {
                if (function(e) {
                    if (e && e.ignoreDnt)
                        return !1;
                    var n = e && e.window || t
                      , i = n.navigator || {}
                      , o = !1;
                    return N.each([i.doNotTrack, i.msDoNotTrack, n.doNotTrack], (function(e) {
                        N.includes([!0, 1, "1", "yes"], e) && (o = !0)
                    }
                    )),
                    o
                }(n))
                    return L.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'),
                    !0;
                var i = "0" === ge(e, n);
                return i && L.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data."),
                i
            }
            function de(e) {
                return ve(e, (function(e) {
                    return this.get_config(e)
                }
                ))
            }
            function he(e) {
                return ve(e, (function(e) {
                    return this._get_config(e)
                }
                ))
            }
            function ue(e) {
                return ve(e, (function(e) {
                    return this._get_config(e)
                }
                ))
            }
            function _e(e, t) {
                me(t = t || {}).remove(fe(e, t), !!t.crossSubdomainCookie, t.cookieDomain)
            }
            function me(e) {
                return "localStorage" === (e = e || {}).persistenceType ? N.localStorage : N.cookie
            }
            function fe(e, t) {
                return ((t = t || {}).persistencePrefix || se) + e
            }
            function ge(e, t) {
                return me(t).get(fe(e, t))
            }
            function ye(e, t, n) {
                N.isString(t) && t.length ? (me(n = n || {}).set(fe(t, n), e ? 1 : 0, N.isNumber(n.cookieExpiration) ? n.cookieExpiration : null, !!n.crossSubdomainCookie, !!n.secureCookie, !!n.crossSiteCookie, n.cookieDomain),
                n.track && e && n.track(n.trackEventName || "$opt_in", n.trackProperties, {
                    send_immediately: !0
                })) : L.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
            }
            function ve(e, t) {
                return function() {
                    var n = !1;
                    try {
                        var i = t.call(this, "token")
                          , o = t.call(this, "ignore_dnt")
                          , r = t.call(this, "opt_out_tracking_persistence_type")
                          , s = t.call(this, "opt_out_tracking_cookie_prefix")
                          , a = t.call(this, "window");
                        i && (n = le(i, {
                            ignoreDnt: o,
                            persistenceType: r,
                            persistencePrefix: s,
                            window: a
                        }))
                    } catch (e) {
                        L.error("Unexpected error when checking tracking opt-out status: " + e)
                    }
                    if (!n)
                        return e.apply(this, arguments);
                    var c = arguments[arguments.length - 1];
                    "function" == typeof c && c(0)
                }
            }
            var be = "$set"
              , we = "$set_once"
              , xe = "$unset"
              , Ee = "$add"
              , ke = "$append"
              , Se = "$union"
              , Ie = "$remove"
              , Ce = {
                set_action: function(e, t) {
                    var n = {}
                      , i = {};
                    return N.isObject(e) ? N.each(e, (function(e, t) {
                        this._is_reserved_property(t) || (i[t] = e)
                    }
                    ), this) : i[e] = t,
                    n[be] = i,
                    n
                },
                unset_action: function(e) {
                    var t = {}
                      , n = [];
                    return N.isArray(e) || (e = [e]),
                    N.each(e, (function(e) {
                        this._is_reserved_property(e) || n.push(e)
                    }
                    ), this),
                    t[xe] = n,
                    t
                },
                set_once_action: function(e, t) {
                    var n = {}
                      , i = {};
                    return N.isObject(e) ? N.each(e, (function(e, t) {
                        this._is_reserved_property(t) || (i[t] = e)
                    }
                    ), this) : i[e] = t,
                    n[we] = i,
                    n
                },
                union_action: function(e, t) {
                    var n = {}
                      , i = {};
                    return N.isObject(e) ? N.each(e, (function(e, t) {
                        this._is_reserved_property(t) || (i[t] = N.isArray(e) ? e : [e])
                    }
                    ), this) : i[e] = N.isArray(t) ? t : [t],
                    n[Se] = i,
                    n
                },
                append_action: function(e, t) {
                    var n = {}
                      , i = {};
                    return N.isObject(e) ? N.each(e, (function(e, t) {
                        this._is_reserved_property(t) || (i[t] = e)
                    }
                    ), this) : i[e] = t,
                    n[ke] = i,
                    n
                },
                remove_action: function(e, t) {
                    var n = {}
                      , i = {};
                    return N.isObject(e) ? N.each(e, (function(e, t) {
                        this._is_reserved_property(t) || (i[t] = e)
                    }
                    ), this) : i[e] = t,
                    n[Ie] = i,
                    n
                },
                delete_action: function() {
                    return {
                        $delete: ""
                    }
                }
            }
              , Ae = function() {};
            N.extend(Ae.prototype, Ce),
            Ae.prototype._init = function(e, t, n) {
                this._mixpanel = e,
                this._group_key = t,
                this._group_id = n
            }
            ,
            Ae.prototype.set = ue((function(e, t, n) {
                var i = this.set_action(e, t);
                return N.isObject(e) && (n = t),
                this._send_request(i, n)
            }
            )),
            Ae.prototype.set_once = ue((function(e, t, n) {
                var i = this.set_once_action(e, t);
                return N.isObject(e) && (n = t),
                this._send_request(i, n)
            }
            )),
            Ae.prototype.unset = ue((function(e, t) {
                var n = this.unset_action(e);
                return this._send_request(n, t)
            }
            )),
            Ae.prototype.union = ue((function(e, t, n) {
                N.isObject(e) && (n = t);
                var i = this.union_action(e, t);
                return this._send_request(i, n)
            }
            )),
            Ae.prototype.delete = ue((function(e) {
                var t = this.delete_action();
                return this._send_request(t, e)
            }
            )),
            Ae.prototype.remove = ue((function(e, t, n) {
                var i = this.remove_action(e, t);
                return this._send_request(i, n)
            }
            )),
            Ae.prototype._send_request = function(e, t) {
                e.$group_key = this._group_key,
                e.$group_id = this._group_id,
                e.$token = this._get_config("token");
                var n = N.encodeDates(e);
                return this._mixpanel._track_or_batch({
                    type: "groups",
                    data: n,
                    endpoint: this._get_config("api_host") + "/groups/",
                    batcher: this._mixpanel.request_batchers.groups
                }, t)
            }
            ,
            Ae.prototype._is_reserved_property = function(e) {
                return "$group_key" === e || "$group_id" === e
            }
            ,
            Ae.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }
            ,
            Ae.prototype.toString = function() {
                return this._mixpanel.toString() + ".group." + this._group_key + "." + this._group_id
            }
            ,
            Ae.prototype.remove = Ae.prototype.remove,
            Ae.prototype.set = Ae.prototype.set,
            Ae.prototype.set_once = Ae.prototype.set_once,
            Ae.prototype.union = Ae.prototype.union,
            Ae.prototype.unset = Ae.prototype.unset,
            Ae.prototype.toString = Ae.prototype.toString;
            var Te = function() {};
            N.extend(Te.prototype, Ce),
            Te.prototype._init = function(e) {
                this._mixpanel = e
            }
            ,
            Te.prototype.set = he((function(e, t, n) {
                var i = this.set_action(e, t);
                return N.isObject(e) && (n = t),
                this._get_config("save_referrer") && this._mixpanel.persistence.update_referrer_info(document.referrer),
                i[be] = N.extend({}, N.info.people_properties(), this._mixpanel.persistence.get_referrer_info(), i[be]),
                this._send_request(i, n)
            }
            )),
            Te.prototype.set_once = he((function(e, t, n) {
                var i = this.set_once_action(e, t);
                return N.isObject(e) && (n = t),
                this._send_request(i, n)
            }
            )),
            Te.prototype.unset = he((function(e, t) {
                var n = this.unset_action(e);
                return this._send_request(n, t)
            }
            )),
            Te.prototype.increment = he((function(e, t, n) {
                var i = {}
                  , o = {};
                return N.isObject(e) ? (N.each(e, (function(e, t) {
                    if (!this._is_reserved_property(t)) {
                        if (isNaN(parseFloat(e)))
                            return void L.error("Invalid increment value passed to mixpanel.people.increment - must be a number");
                        o[t] = e
                    }
                }
                ), this),
                n = t) : (N.isUndefined(t) && (t = 1),
                o[e] = t),
                i[Ee] = o,
                this._send_request(i, n)
            }
            )),
            Te.prototype.append = he((function(e, t, n) {
                N.isObject(e) && (n = t);
                var i = this.append_action(e, t);
                return this._send_request(i, n)
            }
            )),
            Te.prototype.remove = he((function(e, t, n) {
                N.isObject(e) && (n = t);
                var i = this.remove_action(e, t);
                return this._send_request(i, n)
            }
            )),
            Te.prototype.union = he((function(e, t, n) {
                N.isObject(e) && (n = t);
                var i = this.union_action(e, t);
                return this._send_request(i, n)
            }
            )),
            Te.prototype.track_charge = he((function(e, t, n) {
                if (N.isNumber(e) || (e = parseFloat(e),
                !isNaN(e)))
                    return this.append("$transactions", N.extend({
                        $amount: e
                    }, t), n);
                L.error("Invalid value passed to mixpanel.people.track_charge - must be a number")
            }
            )),
            Te.prototype.clear_charges = function(e) {
                return this.set("$transactions", [], e)
            }
            ,
            Te.prototype.delete_user = function() {
                if (this._identify_called()) {
                    var e = {
                        $delete: this._mixpanel.get_distinct_id()
                    };
                    return this._send_request(e)
                }
                L.error("mixpanel.people.delete_user() requires you to call identify() first")
            }
            ,
            Te.prototype.toString = function() {
                return this._mixpanel.toString() + ".people"
            }
            ,
            Te.prototype._send_request = function(e, t) {
                e.$token = this._get_config("token"),
                e.$distinct_id = this._mixpanel.get_distinct_id();
                var n = this._mixpanel.get_property("$device_id")
                  , i = this._mixpanel.get_property("$user_id")
                  , o = this._mixpanel.get_property("$had_persisted_distinct_id");
                n && (e.$device_id = n),
                i && (e.$user_id = i),
                o && (e.$had_persisted_distinct_id = o);
                var r = N.encodeDates(e);
                return this._identify_called() ? this._mixpanel._track_or_batch({
                    type: "people",
                    data: r,
                    endpoint: this._get_config("api_host") + "/engage/",
                    batcher: this._mixpanel.request_batchers.people
                }, t) : (this._enqueue(e),
                N.isUndefined(t) || (this._get_config("verbose") ? t({
                    status: -1,
                    error: null
                }) : t(-1)),
                N.truncate(r, 255))
            }
            ,
            Te.prototype._get_config = function(e) {
                return this._mixpanel.get_config(e)
            }
            ,
            Te.prototype._identify_called = function() {
                return !0 === this._mixpanel._flags.identify_called
            }
            ,
            Te.prototype._enqueue = function(e) {
                be in e ? this._mixpanel.persistence._add_to_people_queue(be, e) : we in e ? this._mixpanel.persistence._add_to_people_queue(we, e) : xe in e ? this._mixpanel.persistence._add_to_people_queue(xe, e) : Ee in e ? this._mixpanel.persistence._add_to_people_queue(Ee, e) : ke in e ? this._mixpanel.persistence._add_to_people_queue(ke, e) : Ie in e ? this._mixpanel.persistence._add_to_people_queue(Ie, e) : Se in e ? this._mixpanel.persistence._add_to_people_queue(Se, e) : L.error("Invalid call to _enqueue():", e)
            }
            ,
            Te.prototype._flush_one_queue = function(e, t, n, i) {
                var o = this
                  , r = N.extend({}, this._mixpanel.persistence._get_queue(e))
                  , s = r;
                N.isUndefined(r) || !N.isObject(r) || N.isEmptyObject(r) || (o._mixpanel.persistence._pop_from_people_queue(e, r),
                i && (s = i(r)),
                t.call(o, s, (function(t, i) {
                    0 === t && o._mixpanel.persistence._add_to_people_queue(e, r),
                    N.isUndefined(n) || n(t, i)
                }
                )))
            }
            ,
            Te.prototype._flush = function(e, t, n, i, o, r, s) {
                var a = this
                  , c = this._mixpanel.persistence._get_queue(ke)
                  , p = this._mixpanel.persistence._get_queue(Ie);
                if (this._flush_one_queue(be, this.set, e),
                this._flush_one_queue(we, this.set_once, i),
                this._flush_one_queue(xe, this.unset, r, (function(e) {
                    return N.keys(e)
                }
                )),
                this._flush_one_queue(Ee, this.increment, t),
                this._flush_one_queue(Se, this.union, o),
                !N.isUndefined(c) && N.isArray(c) && c.length) {
                    for (var l, d = function(e, t) {
                        0 === e && a._mixpanel.persistence._add_to_people_queue(ke, l),
                        N.isUndefined(n) || n(e, t)
                    }, h = c.length - 1; h >= 0; h--)
                        l = c.pop(),
                        N.isEmptyObject(l) || a.append(l, d);
                    a._mixpanel.persistence.save()
                }
                if (!N.isUndefined(p) && N.isArray(p) && p.length) {
                    for (var u, _ = function(e, t) {
                        0 === e && a._mixpanel.persistence._add_to_people_queue(Ie, u),
                        N.isUndefined(s) || s(e, t)
                    }, m = p.length - 1; m >= 0; m--)
                        u = p.pop(),
                        N.isEmptyObject(u) || a.remove(u, _);
                    a._mixpanel.persistence.save()
                }
            }
            ,
            Te.prototype._is_reserved_property = function(e) {
                return "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
            }
            ,
            Te.prototype.set = Te.prototype.set,
            Te.prototype.set_once = Te.prototype.set_once,
            Te.prototype.unset = Te.prototype.unset,
            Te.prototype.increment = Te.prototype.increment,
            Te.prototype.append = Te.prototype.append,
            Te.prototype.remove = Te.prototype.remove,
            Te.prototype.union = Te.prototype.union,
            Te.prototype.track_charge = Te.prototype.track_charge,
            Te.prototype.clear_charges = Te.prototype.clear_charges,
            Te.prototype.delete_user = Te.prototype.delete_user,
            Te.prototype.toString = Te.prototype.toString;
            var Oe, Me, Re = "__mps", Ne = "__mpso", Le = "__mpus", De = "__mpa", Be = "__mpap", Ge = "__mpr", Pe = "__mpu", qe = "$people_distinct_id", Ue = "__alias", We = "__timers", je = [Re, Ne, Le, De, Be, Ge, Pe, qe, Ue, We], He = function(e) {
                this.props = {},
                this.campaign_params_saved = !1,
                e.persistence_name ? this.name = "mp_" + e.persistence_name : this.name = "mp_" + e.token + "_mixpanel";
                var t = e.persistence;
                "cookie" !== t && "localStorage" !== t && (L.critical("Unknown persistence type " + t + "; falling back to cookie"),
                t = e.persistence = "cookie"),
                "localStorage" === t && N.localStorage.is_supported() ? this.storage = N.localStorage : this.storage = N.cookie,
                this.load(),
                this.update_config(e),
                this.upgrade(e),
                this.save()
            };
            He.prototype.properties = function() {
                var e = {};
                return N.each(this.props, (function(t, n) {
                    N.include(je, n) || (e[n] = t)
                }
                )),
                e
            }
            ,
            He.prototype.load = function() {
                if (!this.disabled) {
                    var e = this.storage.parse(this.name);
                    e && (this.props = N.extend({}, e))
                }
            }
            ,
            He.prototype.upgrade = function(e) {
                var t, n, i = e.upgrade;
                i && (t = "mp_super_properties",
                "string" == typeof i && (t = i),
                n = this.storage.parse(t),
                this.storage.remove(t),
                this.storage.remove(t, !0),
                n && (this.props = N.extend(this.props, n.all, n.events))),
                e.cookie_name || "mixpanel" === e.name || (t = "mp_" + e.token + "_" + e.name,
                (n = this.storage.parse(t)) && (this.storage.remove(t),
                this.storage.remove(t, !0),
                this.register_once(n))),
                this.storage === N.localStorage && (n = N.cookie.parse(this.name),
                N.cookie.remove(this.name),
                N.cookie.remove(this.name, !0),
                n && this.register_once(n))
            }
            ,
            He.prototype.save = function() {
                this.disabled || this.storage.set(this.name, N.JSONEncode(this.props), this.expire_days, this.cross_subdomain, this.secure, this.cross_site, this.cookie_domain)
            }
            ,
            He.prototype.remove = function() {
                this.storage.remove(this.name, !1, this.cookie_domain),
                this.storage.remove(this.name, !0, this.cookie_domain)
            }
            ,
            He.prototype.clear = function() {
                this.remove(),
                this.props = {}
            }
            ,
            He.prototype.register_once = function(e, t, n) {
                return !!N.isObject(e) && (void 0 === t && (t = "None"),
                this.expire_days = void 0 === n ? this.default_expiry : n,
                N.each(e, (function(e, n) {
                    this.props.hasOwnProperty(n) && this.props[n] !== t || (this.props[n] = e)
                }
                ), this),
                this.save(),
                !0)
            }
            ,
            He.prototype.register = function(e, t) {
                return !!N.isObject(e) && (this.expire_days = void 0 === t ? this.default_expiry : t,
                N.extend(this.props, e),
                this.save(),
                !0)
            }
            ,
            He.prototype.unregister = function(e) {
                e in this.props && (delete this.props[e],
                this.save())
            }
            ,
            He.prototype.update_search_keyword = function(e) {
                this.register(N.info.searchInfo(e))
            }
            ,
            He.prototype.update_referrer_info = function(e) {
                this.register_once({
                    $initial_referrer: e || "$direct",
                    $initial_referring_domain: N.info.referringDomain(e) || "$direct"
                }, "")
            }
            ,
            He.prototype.get_referrer_info = function() {
                return N.strip_empty_properties({
                    $initial_referrer: this.props.$initial_referrer,
                    $initial_referring_domain: this.props.$initial_referring_domain
                })
            }
            ,
            He.prototype.safe_merge = function(e) {
                return N.each(this.props, (function(t, n) {
                    n in e || (e[n] = t)
                }
                )),
                e
            }
            ,
            He.prototype.update_config = function(e) {
                this.default_expiry = this.expire_days = e.cookie_expiration,
                this.set_disabled(e.disable_persistence),
                this.set_cookie_domain(e.cookie_domain),
                this.set_cross_site(e.cross_site_cookie),
                this.set_cross_subdomain(e.cross_subdomain_cookie),
                this.set_secure(e.secure_cookie)
            }
            ,
            He.prototype.set_disabled = function(e) {
                this.disabled = e,
                this.disabled ? this.remove() : this.save()
            }
            ,
            He.prototype.set_cookie_domain = function(e) {
                e !== this.cookie_domain && (this.remove(),
                this.cookie_domain = e,
                this.save())
            }
            ,
            He.prototype.set_cross_site = function(e) {
                e !== this.cross_site && (this.cross_site = e,
                this.remove(),
                this.save())
            }
            ,
            He.prototype.set_cross_subdomain = function(e) {
                e !== this.cross_subdomain && (this.cross_subdomain = e,
                this.remove(),
                this.save())
            }
            ,
            He.prototype.get_cross_subdomain = function() {
                return this.cross_subdomain
            }
            ,
            He.prototype.set_secure = function(e) {
                e !== this.secure && (this.secure = !!e,
                this.remove(),
                this.save())
            }
            ,
            He.prototype._add_to_people_queue = function(e, t) {
                var n = this._get_queue_key(e)
                  , i = t[e]
                  , o = this._get_or_create_queue(be)
                  , r = this._get_or_create_queue(we)
                  , s = this._get_or_create_queue(xe)
                  , a = this._get_or_create_queue(Ee)
                  , c = this._get_or_create_queue(Se)
                  , p = this._get_or_create_queue(Ie, [])
                  , l = this._get_or_create_queue(ke, []);
                n === Re ? (N.extend(o, i),
                this._pop_from_people_queue(Ee, i),
                this._pop_from_people_queue(Se, i),
                this._pop_from_people_queue(xe, i)) : n === Ne ? (N.each(i, (function(e, t) {
                    t in r || (r[t] = e)
                }
                )),
                this._pop_from_people_queue(xe, i)) : n === Le ? N.each(i, (function(e) {
                    N.each([o, r, a, c], (function(t) {
                        e in t && delete t[e]
                    }
                    )),
                    N.each(l, (function(t) {
                        e in t && delete t[e]
                    }
                    )),
                    s[e] = !0
                }
                )) : n === De ? (N.each(i, (function(e, t) {
                    t in o ? o[t] += e : (t in a || (a[t] = 0),
                    a[t] += e)
                }
                ), this),
                this._pop_from_people_queue(xe, i)) : n === Pe ? (N.each(i, (function(e, t) {
                    N.isArray(e) && (t in c || (c[t] = []),
                    c[t] = c[t].concat(e))
                }
                )),
                this._pop_from_people_queue(xe, i)) : n === Ge ? (p.push(i),
                this._pop_from_people_queue(ke, i)) : n === Be && (l.push(i),
                this._pop_from_people_queue(xe, i)),
                L.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):"),
                L.log(t),
                this.save()
            }
            ,
            He.prototype._pop_from_people_queue = function(e, t) {
                var n = this._get_queue(e);
                N.isUndefined(n) || (N.each(t, (function(t, i) {
                    e === ke || e === Ie ? N.each(n, (function(e) {
                        e[i] === t && delete e[i]
                    }
                    )) : delete n[i]
                }
                ), this),
                this.save())
            }
            ,
            He.prototype._get_queue_key = function(e) {
                return e === be ? Re : e === we ? Ne : e === xe ? Le : e === Ee ? De : e === ke ? Be : e === Ie ? Ge : e === Se ? Pe : void L.error("Invalid queue:", e)
            }
            ,
            He.prototype._get_queue = function(e) {
                return this.props[this._get_queue_key(e)]
            }
            ,
            He.prototype._get_or_create_queue = function(e, t) {
                var n = this._get_queue_key(e);
                return t = N.isUndefined(t) ? {} : t,
                this.props[n] || (this.props[n] = t)
            }
            ,
            He.prototype.set_event_timer = function(e, t) {
                var n = this.props[We] || {};
                n[e] = t,
                this.props[We] = n,
                this.save()
            }
            ,
            He.prototype.remove_event_timer = function(e) {
                var t = (this.props[We] || {})[e];
                return N.isUndefined(t) || (delete this.props[We][e],
                this.save()),
                t
            }
            ;
            var Fe = function(e) {
                return e
            }
              , $e = function() {}
              , ze = "mixpanel"
              , Ke = "base64"
              , Xe = "$device:"
              , Ve = t.XMLHttpRequest && "withCredentials"in new XMLHttpRequest
              , Ye = !Ve && -1 === I.indexOf("MSIE") && -1 === I.indexOf("Mozilla")
              , Je = null;
            x.sendBeacon && (Je = function() {
                return x.sendBeacon.apply(x, arguments)
            }
            );
            var Qe = {
                api_host: "https://api-js.mixpanel.com",
                api_method: "POST",
                api_transport: "XHR",
                api_payload_format: Ke,
                app_host: "https://mixpanel.com",
                cdn: "https://cdn.mxpnl.com",
                cross_site_cookie: !1,
                cross_subdomain_cookie: !0,
                error_reporter: $e,
                persistence: "cookie",
                persistence_name: "",
                cookie_domain: "",
                cookie_name: "",
                loaded: $e,
                track_marketing: !0,
                track_pageview: !1,
                skip_first_touch_marketing: !1,
                store_google: !0,
                save_referrer: !0,
                test: !1,
                verbose: !1,
                img: !1,
                debug: !1,
                track_links_timeout: 300,
                cookie_expiration: 365,
                upgrade: !1,
                disable_persistence: !1,
                disable_cookie: !1,
                secure_cookie: !1,
                ip: !0,
                opt_out_tracking_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_tracking_persistence_type: "localStorage",
                opt_out_tracking_cookie_prefix: null,
                property_blacklist: [],
                xhr_headers: {},
                ignore_dnt: !1,
                batch_requests: !0,
                batch_size: 50,
                batch_flush_interval_ms: 5e3,
                batch_request_timeout_ms: 9e4,
                batch_autostart: !0,
                hooks: {}
            }
              , Ze = !1
              , et = function() {}
              , tt = function(e, t, i) {
                var o, r = i === ze ? Me : Me[i];
                if (r && 0 === Oe)
                    o = r;
                else {
                    if (r && !N.isArray(r))
                        return void L.error("You have already initialized " + i);
                    o = new et
                }
                if (o._cached_groups = {},
                o._init(e, t, i),
                o.people = new Te,
                o.people._init(o),
                !o.get_config("skip_first_touch_marketing")) {
                    var s = N.info.campaignParams(null)
                      , a = {}
                      , c = !1;
                    N.each(s, (function(e, t) {
                        a["initial_" + t] = e,
                        e && (c = !0)
                    }
                    )),
                    c && o.people.set_once(a)
                }
                return n.DEBUG = n.DEBUG || o.get_config("debug"),
                !N.isUndefined(r) && N.isArray(r) && (o._execute_array.call(o.people, r.people),
                o._execute_array(r)),
                o
            };
            et.prototype.init = function(e, t, n) {
                if (N.isUndefined(n))
                    this.report_error("You must name your new library: init(token, config, name)");
                else {
                    if (n !== ze) {
                        var i = tt(e, t, n);
                        return Me[n] = i,
                        i._loaded(),
                        i
                    }
                    this.report_error("You must initialize the main mixpanel object right after you include the Mixpanel js snippet")
                }
            }
            ,
            et.prototype._init = function(e, n, i) {
                n = n || {},
                this.__loaded = !0,
                this.config = {};
                var o = {};
                if ("api_payload_format"in n || (n.api_host || Qe.api_host).match(/\.mixpanel\.com/) && (o.api_payload_format = "json"),
                this.set_config(N.extend({}, Qe, o, n, {
                    name: i,
                    token: e,
                    callback_fn: (i === ze ? i : ze + "." + i) + "._jsc"
                })),
                this._jsc = $e,
                this.__dom_loaded_queue = [],
                this.__request_queue = [],
                this.__disabled_events = [],
                this._flags = {
                    disable_all_events: !1,
                    identify_called: !1
                },
                this.request_batchers = {},
                this._batch_requests = this.get_config("batch_requests"),
                this._batch_requests)
                    if (N.localStorage.is_supported(!0) && Ve) {
                        if (this.init_batchers(),
                        Je && t.addEventListener) {
                            var r = N.bind((function() {
                                this.request_batchers.events.stopped || this.request_batchers.events.flush({
                                    unloading: !0
                                })
                            }
                            ), this);
                            t.addEventListener("pagehide", (function(e) {
                                e.persisted && r()
                            }
                            )),
                            t.addEventListener("visibilitychange", (function() {
                                "hidden" === E.visibilityState && r()
                            }
                            ))
                        }
                    } else
                        this._batch_requests = !1,
                        L.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
                this.persistence = this.cookie = new He(this.config),
                this.unpersisted_superprops = {},
                this._gdpr_init();
                var s = N.UUID();
                this.get_distinct_id() || this.register_once({
                    distinct_id: Xe + s,
                    $device_id: s
                }, ""),
                this.get_config("track_pageview") && this.track_pageview()
            }
            ,
            et.prototype._loaded = function() {
                this.get_config("loaded")(this),
                this._set_default_superprops()
            }
            ,
            et.prototype._set_default_superprops = function() {
                this.persistence.update_search_keyword(E.referrer),
                this.get_config("store_google") && this.register(N.info.campaignParams(), {
                    persistent: !1
                }),
                this.get_config("save_referrer") && this.persistence.update_referrer_info(E.referrer)
            }
            ,
            et.prototype._dom_loaded = function() {
                N.each(this.__dom_loaded_queue, (function(e) {
                    this._track_dom.apply(this, e)
                }
                ), this),
                this.has_opted_out_tracking() || N.each(this.__request_queue, (function(e) {
                    this._send_request.apply(this, e)
                }
                ), this),
                delete this.__dom_loaded_queue,
                delete this.__request_queue
            }
            ,
            et.prototype._track_dom = function(e, t) {
                if (this.get_config("img"))
                    return this.report_error("You can't use DOM tracking functions with img = true."),
                    !1;
                if (!Ze)
                    return this.__dom_loaded_queue.push([e, t]),
                    !1;
                var n = (new e).init(this);
                return n.track.apply(n, t)
            }
            ,
            et.prototype._prepare_callback = function(e, t) {
                if (N.isUndefined(e))
                    return null;
                if (Ve)
                    return function(n) {
                        e(n, t)
                    }
                    ;
                var n = this._jsc
                  , i = "" + Math.floor(1e8 * Math.random())
                  , o = this.get_config("callback_fn") + "[" + i + "]";
                return n[i] = function(o) {
                    delete n[i],
                    e(o, t)
                }
                ,
                o
            }
            ,
            et.prototype._send_request = function(e, t, n, i) {
                var o = !0;
                if (Ye)
                    return this.__request_queue.push(arguments),
                    o;
                var r = {
                    method: this.get_config("api_method"),
                    transport: this.get_config("api_transport"),
                    verbose: this.get_config("verbose")
                }
                  , s = null;
                i || !N.isFunction(n) && "string" != typeof n || (i = n,
                n = null),
                n = N.extend(r, n || {}),
                Ve || (n.method = "GET");
                var a = "POST" === n.method
                  , c = Je && a && "sendbeacon" === n.transport.toLowerCase()
                  , p = n.verbose;
                t.verbose && (p = !0),
                this.get_config("test") && (t.test = 1),
                p && (t.verbose = 1),
                this.get_config("img") && (t.img = 1),
                Ve || (i ? t.callback = i : (p || this.get_config("test")) && (t.callback = "(function(){})")),
                t.ip = this.get_config("ip") ? 1 : 0,
                t._ = (new Date).getTime().toString(),
                a && (s = "data=" + encodeURIComponent(t.data),
                delete t.data),
                e += "?" + N.HTTPBuildQuery(t);
                var l = this;
                if ("img"in t) {
                    var d = E.createElement("img");
                    d.src = e,
                    E.body.appendChild(d)
                } else if (c) {
                    try {
                        o = Je(e, s)
                    } catch (e) {
                        l.report_error(e),
                        o = !1
                    }
                    try {
                        i && i(o ? 1 : 0)
                    } catch (e) {
                        l.report_error(e)
                    }
                } else if (Ve)
                    try {
                        var h = new XMLHttpRequest;
                        h.open(n.method, e, !0);
                        var u = this.get_config("xhr_headers");
                        if (a && (u["Content-Type"] = "application/x-www-form-urlencoded"),
                        N.each(u, (function(e, t) {
                            h.setRequestHeader(t, e)
                        }
                        )),
                        n.timeout_ms && void 0 !== h.timeout) {
                            h.timeout = n.timeout_ms;
                            var _ = (new Date).getTime()
                        }
                        h.withCredentials = !0,
                        h.onreadystatechange = function() {
                            var e;
                            if (4 === h.readyState)
                                if (200 === h.status) {
                                    if (i)
                                        if (p) {
                                            var t;
                                            try {
                                                t = N.JSONDecode(h.responseText)
                                            } catch (e) {
                                                if (l.report_error(e),
                                                !n.ignore_json_errors)
                                                    return;
                                                t = h.responseText
                                            }
                                            i(t)
                                        } else
                                            i(Number(h.responseText))
                                } else
                                    e = h.timeout && !h.status && (new Date).getTime() - _ >= h.timeout ? "timeout" : "Bad HTTP status: " + h.status + " " + h.statusText,
                                    l.report_error(e),
                                    i && i(p ? {
                                        status: 0,
                                        error: e,
                                        xhr_req: h
                                    } : 0)
                        }
                        ,
                        h.send(s)
                    } catch (e) {
                        l.report_error(e),
                        o = !1
                    }
                else {
                    var m = E.createElement("script");
                    m.type = "text/javascript",
                    m.async = !0,
                    m.defer = !0,
                    m.src = e;
                    var f = E.getElementsByTagName("script")[0];
                    f.parentNode.insertBefore(m, f)
                }
                return o
            }
            ,
            et.prototype._execute_array = function(e) {
                var t, n = [], i = [], o = [];
                N.each(e, (function(e) {
                    e && (t = e[0],
                    N.isArray(t) ? o.push(e) : "function" == typeof e ? e.call(this) : N.isArray(e) && "alias" === t ? n.push(e) : N.isArray(e) && -1 !== t.indexOf("track") && "function" == typeof this[t] ? o.push(e) : i.push(e))
                }
                ), this);
                var r = function(e, t) {
                    N.each(e, (function(e) {
                        if (N.isArray(e[0])) {
                            var n = t;
                            N.each(e, (function(e) {
                                n = n[e[0]].apply(n, e.slice(1))
                            }
                            ))
                        } else
                            this[e[0]].apply(this, e.slice(1))
                    }
                    ), t)
                };
                r(n, this),
                r(i, this),
                r(o, this)
            }
            ,
            et.prototype.are_batchers_initialized = function() {
                return !!this.request_batchers.events
            }
            ,
            et.prototype.init_batchers = function() {
                var e = this.get_config("token");
                if (!this.are_batchers_initialized()) {
                    var t = N.bind((function(t) {
                        return new re("__mpq_" + e + t.queue_suffix,{
                            libConfig: this.config,
                            sendRequestFunc: N.bind((function(e, n, i) {
                                this._send_request(this.get_config("api_host") + t.endpoint, this._encode_data_for_request(e), n, this._prepare_callback(i, e))
                            }
                            ), this),
                            beforeSendHook: N.bind((function(e) {
                                return this._run_hook("before_send_" + t.type, e)
                            }
                            ), this),
                            errorReporter: this.get_config("error_reporter"),
                            stopAllBatchingFunc: N.bind(this.stop_batch_senders, this)
                        })
                    }
                    ), this);
                    this.request_batchers = {
                        events: t({
                            type: "events",
                            endpoint: "/track/",
                            queue_suffix: "_ev"
                        }),
                        people: t({
                            type: "people",
                            endpoint: "/engage/",
                            queue_suffix: "_pp"
                        }),
                        groups: t({
                            type: "groups",
                            endpoint: "/groups/",
                            queue_suffix: "_gr"
                        })
                    }
                }
                this.get_config("batch_autostart") && this.start_batch_senders()
            }
            ,
            et.prototype.start_batch_senders = function() {
                this.are_batchers_initialized() && (this._batch_requests = !0,
                N.each(this.request_batchers, (function(e) {
                    e.start()
                }
                )))
            }
            ,
            et.prototype.stop_batch_senders = function() {
                this._batch_requests = !1,
                N.each(this.request_batchers, (function(e) {
                    e.stop(),
                    e.clear()
                }
                ))
            }
            ,
            et.prototype.push = function(e) {
                this._execute_array([e])
            }
            ,
            et.prototype.disable = function(e) {
                void 0 === e ? this._flags.disable_all_events = !0 : this.__disabled_events = this.__disabled_events.concat(e)
            }
            ,
            et.prototype._encode_data_for_request = function(e) {
                var t = N.JSONEncode(e);
                return this.get_config("api_payload_format") === Ke && (t = N.base64Encode(t)),
                {
                    data: t
                }
            }
            ,
            et.prototype._track_or_batch = function(e, t) {
                var n = N.truncate(e.data, 255)
                  , i = e.endpoint
                  , o = e.batcher
                  , r = e.should_send_immediately
                  , s = e.send_request_options || {};
                t = t || $e;
                var a = !0
                  , c = N.bind((function() {
                    return s.skip_hooks || (n = this._run_hook("before_send_" + e.type, n)),
                    n ? (L.log("MIXPANEL REQUEST:"),
                    L.log(n),
                    this._send_request(i, this._encode_data_for_request(n), s, this._prepare_callback(t, n))) : null
                }
                ), this);
                return this._batch_requests && !r ? o.enqueue(n, (function(e) {
                    e ? t(1, n) : c()
                }
                )) : a = c(),
                a && n
            }
            ,
            et.prototype.track = de((function(e, t, n, i) {
                i || "function" != typeof n || (i = n,
                n = null);
                var o = (n = n || {}).transport;
                o && (n.transport = o);
                var r = n.send_immediately;
                if ("function" != typeof i && (i = $e),
                N.isUndefined(e))
                    this.report_error("No event name provided to mixpanel.track");
                else {
                    if (!this._event_is_disabled(e)) {
                        (t = t || {}).token = this.get_config("token");
                        var s = this.persistence.remove_event_timer(e);
                        if (!N.isUndefined(s)) {
                            var a = (new Date).getTime() - s;
                            t.$duration = parseFloat((a / 1e3).toFixed(3))
                        }
                        this._set_default_superprops();
                        var c = this.get_config("track_marketing") ? N.info.marketingParams() : {};
                        t = N.extend({}, N.info.properties(), c, this.persistence.properties(), this.unpersisted_superprops, t);
                        var p = this.get_config("property_blacklist");
                        N.isArray(p) ? N.each(p, (function(e) {
                            delete t[e]
                        }
                        )) : this.report_error("Invalid value for property_blacklist config: " + p);
                        var l = {
                            event: e,
                            properties: t
                        };
                        return this._track_or_batch({
                            type: "events",
                            data: l,
                            endpoint: this.get_config("api_host") + "/track/",
                            batcher: this.request_batchers.events,
                            should_send_immediately: r,
                            send_request_options: n
                        }, i)
                    }
                    i(0)
                }
            }
            )),
            et.prototype.set_group = de((function(e, t, n) {
                N.isArray(t) || (t = [t]);
                var i = {};
                return i[e] = t,
                this.register(i),
                this.people.set(e, t, n)
            }
            )),
            et.prototype.add_group = de((function(e, t, n) {
                var i = this.get_property(e);
                if (void 0 === i) {
                    var o = {};
                    o[e] = [t],
                    this.register(o)
                } else
                    -1 === i.indexOf(t) && (i.push(t),
                    this.register(o));
                return this.people.union(e, t, n)
            }
            )),
            et.prototype.remove_group = de((function(e, t, n) {
                var i = this.get_property(e);
                if (void 0 !== i) {
                    var o = i.indexOf(t);
                    o > -1 && (i.splice(o, 1),
                    this.register({
                        group_key: i
                    })),
                    0 === i.length && this.unregister(e)
                }
                return this.people.remove(e, t, n)
            }
            )),
            et.prototype.track_with_groups = de((function(e, t, n, i) {
                var o = N.extend({}, t || {});
                return N.each(n, (function(e, t) {
                    null != e && (o[t] = e)
                }
                )),
                this.track(e, o, i)
            }
            )),
            et.prototype._create_map_key = function(e, t) {
                return e + "_" + JSON.stringify(t)
            }
            ,
            et.prototype._remove_group_from_cache = function(e, t) {
                delete this._cached_groups[this._create_map_key(e, t)]
            }
            ,
            et.prototype.get_group = function(e, t) {
                var n = this._create_map_key(e, t)
                  , i = this._cached_groups[n];
                return void 0 !== i && i._group_key === e && i._group_id === t || ((i = new Ae)._init(this, e, t),
                this._cached_groups[n] = i),
                i
            }
            ,
            et.prototype.track_pageview = de((function(e, t) {
                "object" != typeof e && (e = {});
                var n = (t = t || {}).event_name || "$mp_web_page_view"
                  , i = N.extend(N.info.mpPageViewProperties(), N.info.campaignParams(), N.info.clickParams())
                  , o = N.extend({}, i, e);
                return this.track(n, o)
            }
            )),
            et.prototype.track_links = function() {
                return this._track_dom.call(this, Y, arguments)
            }
            ,
            et.prototype.track_forms = function() {
                return this._track_dom.call(this, J, arguments)
            }
            ,
            et.prototype.time_event = function(e) {
                N.isUndefined(e) ? this.report_error("No event name provided to mixpanel.time_event") : this._event_is_disabled(e) || this.persistence.set_event_timer(e, (new Date).getTime())
            }
            ;
            var nt = {
                persistent: !0
            }
              , it = function(e) {
                var t;
                return t = N.isObject(e) ? e : N.isUndefined(e) ? {} : {
                    days: e
                },
                N.extend({}, nt, t)
            };
            et.prototype.register = function(e, t) {
                var n = it(t);
                n.persistent ? this.persistence.register(e, n.days) : N.extend(this.unpersisted_superprops, e)
            }
            ,
            et.prototype.register_once = function(e, t, n) {
                var i = it(n);
                i.persistent ? this.persistence.register_once(e, t, i.days) : (void 0 === t && (t = "None"),
                N.each(e, (function(e, n) {
                    this.unpersisted_superprops.hasOwnProperty(n) && this.unpersisted_superprops[n] !== t || (this.unpersisted_superprops[n] = e)
                }
                ), this))
            }
            ,
            et.prototype.unregister = function(e, t) {
                (t = it(t)).persistent ? this.persistence.unregister(e) : delete this.unpersisted_superprops[e]
            }
            ,
            et.prototype._register_single = function(e, t) {
                var n = {};
                n[e] = t,
                this.register(n)
            }
            ,
            et.prototype.identify = function(e, t, n, i, o, r, s, a) {
                var c = this.get_distinct_id();
                if (e && c !== e) {
                    if ("string" == typeof e && 0 === e.indexOf(Xe))
                        return this.report_error("distinct_id cannot have $device: prefix"),
                        -1;
                    this.register({
                        $user_id: e
                    })
                }
                if (!this.get_property("$device_id")) {
                    var p = c;
                    this.register_once({
                        $had_persisted_distinct_id: !0,
                        $device_id: p
                    }, "")
                }
                e !== c && e !== this.get_property(Ue) && (this.unregister(Ue),
                this.register({
                    distinct_id: e
                })),
                this._flags.identify_called = !0,
                this.people._flush(t, n, i, o, r, s, a),
                e !== c && this.track("$identify", {
                    distinct_id: e,
                    $anon_distinct_id: c
                }, {
                    skip_hooks: !0
                })
            }
            ,
            et.prototype.reset = function() {
                this.persistence.clear(),
                this._flags.identify_called = !1;
                var e = N.UUID();
                this.register_once({
                    distinct_id: Xe + e,
                    $device_id: e
                }, "")
            }
            ,
            et.prototype.get_distinct_id = function() {
                return this.get_property("distinct_id")
            }
            ,
            et.prototype.alias = function(e, t) {
                if (e === this.get_property(qe))
                    return this.report_error("Attempting to create alias for existing People user - aborting."),
                    -2;
                var n = this;
                return N.isUndefined(t) && (t = this.get_distinct_id()),
                e !== t ? (this._register_single(Ue, e),
                this.track("$create_alias", {
                    alias: e,
                    distinct_id: t
                }, {
                    skip_hooks: !0
                }, (function() {
                    n.identify(e)
                }
                ))) : (this.report_error("alias matches current distinct_id - skipping api call."),
                this.identify(e),
                -1)
            }
            ,
            et.prototype.name_tag = function(e) {
                this._register_single("mp_name_tag", e)
            }
            ,
            et.prototype.set_config = function(e) {
                N.isObject(e) && (N.extend(this.config, e),
                e.batch_size && N.each(this.request_batchers, (function(e) {
                    e.resetBatchSize()
                }
                )),
                this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
                this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
                this.persistence && this.persistence.update_config(this.config),
                n.DEBUG = n.DEBUG || this.get_config("debug"))
            }
            ,
            et.prototype.get_config = function(e) {
                return this.config[e]
            }
            ,
            et.prototype._run_hook = function(e) {
                var t = (this.config.hooks[e] || Fe).apply(this, y.call(arguments, 1));
                return void 0 === t && (this.report_error(e + " hook did not return a value"),
                t = null),
                t
            }
            ,
            et.prototype.get_property = function(e) {
                return this.persistence.props[e]
            }
            ,
            et.prototype.toString = function() {
                var e = this.get_config("name");
                return e !== ze && (e = ze + "." + e),
                e
            }
            ,
            et.prototype._event_is_disabled = function(e) {
                return N.isBlockedUA(I) || this._flags.disable_all_events || N.include(this.__disabled_events, e)
            }
            ,
            et.prototype._gdpr_init = function() {
                "localStorage" === this.get_config("opt_out_tracking_persistence_type") && N.localStorage.is_supported() && (!this.has_opted_in_tracking() && this.has_opted_in_tracking({
                    persistence_type: "cookie"
                }) && this.opt_in_tracking({
                    enable_persistence: !1
                }),
                !this.has_opted_out_tracking() && this.has_opted_out_tracking({
                    persistence_type: "cookie"
                }) && this.opt_out_tracking({
                    clear_persistence: !1
                }),
                this.clear_opt_in_out_tracking({
                    persistence_type: "cookie",
                    enable_persistence: !1
                })),
                this.has_opted_out_tracking() ? this._gdpr_update_persistence({
                    clear_persistence: !0
                }) : this.has_opted_in_tracking() || !this.get_config("opt_out_tracking_by_default") && !N.cookie.get("mp_optout") || (N.cookie.remove("mp_optout"),
                this.opt_out_tracking({
                    clear_persistence: this.get_config("opt_out_persistence_by_default")
                }))
            }
            ,
            et.prototype._gdpr_update_persistence = function(e) {
                var t;
                if (e && e.clear_persistence)
                    t = !0;
                else {
                    if (!e || !e.enable_persistence)
                        return;
                    t = !1
                }
                this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t),
                t && N.each(this.request_batchers, (function(e) {
                    e.clear()
                }
                ))
            }
            ,
            et.prototype._gdpr_call_func = function(e, t) {
                return t = N.extend({
                    track: N.bind(this.track, this),
                    persistence_type: this.get_config("opt_out_tracking_persistence_type"),
                    cookie_prefix: this.get_config("opt_out_tracking_cookie_prefix"),
                    cookie_expiration: this.get_config("cookie_expiration"),
                    cross_site_cookie: this.get_config("cross_site_cookie"),
                    cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                    cookie_domain: this.get_config("cookie_domain"),
                    secure_cookie: this.get_config("secure_cookie"),
                    ignore_dnt: this.get_config("ignore_dnt")
                }, t),
                N.localStorage.is_supported() || (t.persistence_type = "cookie"),
                e(this.get_config("token"), {
                    track: t.track,
                    trackEventName: t.track_event_name,
                    trackProperties: t.track_properties,
                    persistenceType: t.persistence_type,
                    persistencePrefix: t.cookie_prefix,
                    cookieDomain: t.cookie_domain,
                    cookieExpiration: t.cookie_expiration,
                    crossSiteCookie: t.cross_site_cookie,
                    crossSubdomainCookie: t.cross_subdomain_cookie,
                    secureCookie: t.secure_cookie,
                    ignoreDnt: t.ignore_dnt
                })
            }
            ,
            et.prototype.opt_in_tracking = function(e) {
                e = N.extend({
                    enable_persistence: !0
                }, e),
                this._gdpr_call_func(ae, e),
                this._gdpr_update_persistence(e)
            }
            ,
            et.prototype.opt_out_tracking = function(e) {
                (e = N.extend({
                    clear_persistence: !0,
                    delete_user: !0
                }, e)).delete_user && this.people && this.people._identify_called() && (this.people.delete_user(),
                this.people.clear_charges()),
                this._gdpr_call_func(ce, e),
                this._gdpr_update_persistence(e)
            }
            ,
            et.prototype.has_opted_in_tracking = function(e) {
                return this._gdpr_call_func(pe, e)
            }
            ,
            et.prototype.has_opted_out_tracking = function(e) {
                return this._gdpr_call_func(le, e)
            }
            ,
            et.prototype.clear_opt_in_out_tracking = function(e) {
                e = N.extend({
                    enable_persistence: !0
                }, e),
                this._gdpr_call_func(_e, e),
                this._gdpr_update_persistence(e)
            }
            ,
            et.prototype.report_error = function(e, t) {
                L.error.apply(L.error, arguments);
                try {
                    t || e instanceof Error || (e = new Error(e)),
                    this.get_config("error_reporter")(e, t)
                } catch (t) {
                    L.error(t)
                }
            }
            ,
            et.prototype.init = et.prototype.init,
            et.prototype.reset = et.prototype.reset,
            et.prototype.disable = et.prototype.disable,
            et.prototype.time_event = et.prototype.time_event,
            et.prototype.track = et.prototype.track,
            et.prototype.track_links = et.prototype.track_links,
            et.prototype.track_forms = et.prototype.track_forms,
            et.prototype.track_pageview = et.prototype.track_pageview,
            et.prototype.register = et.prototype.register,
            et.prototype.register_once = et.prototype.register_once,
            et.prototype.unregister = et.prototype.unregister,
            et.prototype.identify = et.prototype.identify,
            et.prototype.alias = et.prototype.alias,
            et.prototype.name_tag = et.prototype.name_tag,
            et.prototype.set_config = et.prototype.set_config,
            et.prototype.get_config = et.prototype.get_config,
            et.prototype.get_property = et.prototype.get_property,
            et.prototype.get_distinct_id = et.prototype.get_distinct_id,
            et.prototype.toString = et.prototype.toString,
            et.prototype.opt_out_tracking = et.prototype.opt_out_tracking,
            et.prototype.opt_in_tracking = et.prototype.opt_in_tracking,
            et.prototype.has_opted_out_tracking = et.prototype.has_opted_out_tracking,
            et.prototype.has_opted_in_tracking = et.prototype.has_opted_in_tracking,
            et.prototype.clear_opt_in_out_tracking = et.prototype.clear_opt_in_out_tracking,
            et.prototype.get_group = et.prototype.get_group,
            et.prototype.set_group = et.prototype.set_group,
            et.prototype.add_group = et.prototype.add_group,
            et.prototype.remove_group = et.prototype.remove_group,
            et.prototype.track_with_groups = et.prototype.track_with_groups,
            et.prototype.start_batch_senders = et.prototype.start_batch_senders,
            et.prototype.stop_batch_senders = et.prototype.stop_batch_senders,
            He.prototype.properties = He.prototype.properties,
            He.prototype.update_search_keyword = He.prototype.update_search_keyword,
            He.prototype.update_referrer_info = He.prototype.update_referrer_info,
            He.prototype.get_cross_subdomain = He.prototype.get_cross_subdomain,
            He.prototype.clear = He.prototype.clear;
            var ot = {}
              , rt = (Oe = 0,
            (Me = new et).init = function(e, n, i) {
                if (i)
                    return Me[i] || (Me[i] = ot[i] = tt(e, n, i),
                    Me[i]._loaded()),
                    Me[i];
                var o = Me;
                ot[ze] ? o = ot[ze] : e && ((o = tt(e, n, ze))._loaded(),
                ot[ze] = o),
                Me = o,
                1 === Oe && (t[ze] = Me),
                N.each(ot, (function(e, t) {
                    t !== ze && (Me[t] = e)
                }
                )),
                Me._ = N
            }
            ,
            Me.init(),
            function() {
                function e() {
                    e.done || (e.done = !0,
                    Ze = !0,
                    Ye = !1,
                    N.each(ot, (function(e) {
                        e._dom_loaded()
                    }
                    )))
                }
                if (E.addEventListener)
                    "complete" === E.readyState ? e() : E.addEventListener("DOMContentLoaded", e, !1);
                else if (E.attachEvent) {
                    E.attachEvent("onreadystatechange", e);
                    var n = !1;
                    try {
                        n = null === t.frameElement
                    } catch (e) {}
                    E.documentElement.doScroll && n && function t() {
                        try {
                            E.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(t, 1)
                        }
                        e()
                    }()
                }
                N.register_event(t, "load", e, !0)
            }(),
            Me);
            e.exports = rt
        }
        ,
        5561: e=>{
            e.exports = '<svg viewBox="0 0 24 24" fill="none"><g><path d="M18 6L6 18" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 18L6 6" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath><rect width="24" height="24" fill="none"></rect></clipPath></defs></svg>'
        }
        ,
        3915: e=>{
            e.exports = '<svg viewBox="0 0 24 24" fill="none"><path d="M21.3094 7.51875L16.4813 2.69063C16.1999 2.41003 15.8192 2.2517 15.4219 2.25H8.57812C8.18077 2.2517 7.80011 2.41003 7.51875 2.69063L2.69063 7.51875C2.41003 7.80011 2.2517 8.18077 2.25 8.57812V15.4219C2.2517 15.8192 2.41003 16.1999 2.69063 16.4813L7.51875 21.3094C7.80011 21.59 8.18077 21.7483 8.57812 21.75H15.4219C15.8192 21.7483 16.1999 21.59 16.4813 21.3094L21.3094 16.4813C21.59 16.1999 21.7483 15.8192 21.75 15.4219V8.57812C21.7483 8.18077 21.59 7.80011 21.3094 7.51875ZM11.25 7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75C12.1989 6.75 12.3897 6.82902 12.5303 6.96967C12.671 7.11032 12.75 7.30109 12.75 7.5V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75V7.5ZM12 17.25C11.7775 17.25 11.56 17.184 11.375 17.0604C11.19 16.9368 11.0458 16.7611 10.9606 16.5555C10.8755 16.35 10.8532 16.1238 10.8966 15.9055C10.94 15.6873 11.0472 15.4868 11.2045 15.3295C11.3618 15.1722 11.5623 15.065 11.7805 15.0216C11.9988 14.9782 12.225 15.0005 12.4305 15.0856C12.6361 15.1708 12.8118 15.315 12.9354 15.5C13.059 15.685 13.125 15.9025 13.125 16.125C13.125 16.4234 13.0065 16.7095 12.7955 16.9205C12.5845 17.1315 12.2984 17.25 12 17.25Z" fill="#F1686B"></path></svg>'
        }
        ,
        5910: e=>{
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><rect width="20" height="20" rx="10" fill="#7CBF64"></rect><path d="M6 11.3424L8.58462 14L14 6" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        }
        ,
        9264: e=>{
            e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24" fill="none"><path d="M0 14.7704C0 15.2331 0.183893 15.6765 0.510154 16.0042L7.33791 22.832C7.66566 23.1597 8.10908 23.3421 8.57177 23.3421H16.7446C20.0206 23.3421 22.6752 20.6876 22.6752 17.4116V6.59753C22.6752 3.32157 20.0206 0.666992 16.7446 0.666992H5.93054C2.65458 0.666992 0 3.32157 0 6.59753V14.7704H0Z" fill="url(#paint0_linear_11785_218544)"></path><path d="M16.2212 22.4702C19.3044 22.4702 21.8032 19.9713 21.8032 16.8882V7.1211C21.8032 4.03793 19.3044 1.53906 16.2212 1.53906H6.45264C3.36947 1.53906 0.870605 4.03793 0.870605 7.1211V14.3448C0.870605 15.116 1.49495 15.7403 2.26611 15.7403H3.76395C5.88316 15.7403 7.60049 17.4576 7.60049 19.5783V21.0762C7.60049 21.8473 8.22483 22.4717 8.99599 22.4717H16.2197L16.2212 22.4702Z" fill="url(#paint1_linear_11785_218544)"></path><path d="M8.3864 15.4744C7.37796 15.4744 6.5801 15.1466 5.99135 14.4912C5.4026 13.8357 5.17421 12.9844 5.30768 11.9404C5.44115 10.9082 5.89051 10.0792 6.65574 9.45339C7.4091 8.83349 8.27666 8.52355 9.26138 8.52355C10.47 8.52355 11.3865 8.98773 12.0124 9.91757L10.8912 10.883C10.4596 10.269 9.88869 9.96354 9.17833 9.96354C8.60144 9.96354 8.09722 10.1489 7.66566 10.5197C7.23411 10.8904 6.97607 11.3724 6.89153 11.9686C6.81294 12.5573 6.93454 13.0467 7.25635 13.4353C7.5841 13.8119 8.03345 14.0003 8.60441 14.0003C9.32663 14.0003 9.99843 13.6844 10.6168 13.0526L11.5274 14.0641C11.1389 14.4956 10.6702 14.8382 10.12 15.0933C9.56984 15.3483 8.99147 15.4759 8.38492 15.4759L8.3864 15.4744ZM14.2517 15.4922C13.7119 15.4922 13.2299 15.375 12.8072 15.1422C12.3846 14.9079 12.0583 14.5668 11.8285 14.1174L12.9303 13.1698C13.0757 13.4427 13.2774 13.6622 13.5354 13.8253C13.7934 13.9899 14.0678 14.0715 14.36 14.0715C14.6032 14.0715 14.8078 14.0136 14.9754 13.898C15.143 13.7823 15.2409 13.634 15.272 13.4516C15.2957 13.2143 15.1474 13.0022 14.8256 12.8139L14.2339 12.5128C13.9358 12.3616 13.7 12.2281 13.5235 12.1124C12.8799 11.6868 12.613 11.1099 12.7227 10.3818C12.8013 9.81673 13.0742 9.36441 13.5428 9.0248C14.01 8.68519 14.5869 8.51465 15.2735 8.51465C16.1173 8.51465 16.8277 8.8157 17.4046 9.41632L16.4569 10.4915C16.0313 10.1089 15.5923 9.91757 15.1356 9.91757C14.8983 9.91757 14.7055 9.96948 14.5572 10.0718C14.4089 10.1756 14.3244 10.3091 14.3066 10.4722C14.2828 10.6116 14.314 10.7288 14.403 10.8222C14.4905 10.9156 14.6566 11.0269 14.8998 11.1544C15.6042 11.5192 16.0387 11.755 16.2018 11.8648C16.8158 12.2963 17.0635 12.8569 16.9493 13.5495C16.8588 14.156 16.5578 14.6335 16.0476 14.9791C15.5434 15.3187 14.9457 15.4892 14.2532 15.4892L14.2517 15.4922Z" fill="#F4F4F6"></path><defs><linearGradient id="paint0_linear_11785_218544" x1="20.5989" y1="21.9199" x2="1.7366" y2="2.40359" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.270588" stop-color="#C940FF"></stop><stop offset="0.478431" stop-color="#931FFF"></stop><stop offset="0.709804" stop-color="#1B6BFF"></stop><stop offset="1" stop-color="#EF96FF"></stop></linearGradient><linearGradient id="paint1_linear_11785_218544" x1="5.31814" y1="18.2629" x2="22.5388" y2="0.508371" gradientUnits="userSpaceOnUse"><stop stop-color="#5105CD"></stop><stop offset="1" stop-color="#5105CD" stop-opacity="0"></stop></linearGradient></defs></svg>'
        }
    }
      , t = {};
    function n(i) {
        var o = t[i];
        if (void 0 !== o)
            return o.exports;
        var r = t[i] = {
            exports: {}
        };
        return e[i](r, r.exports, n),
        r.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var i in t)
            n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
    }
    ,
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        "use strict";
        const e = new class {
            dig(e, t, n) {
                e.add(n);
                let i = Object.keys(n);
                for (let o = i.length, r = 0; r < o; r++) {
                    let o = i[r]
                      , s = n[o];
                    if (s && !e.has(s))
                        if ("string" == typeof s)
                            console.log(t.join("."), o, s);
                        else if ("object" == typeof s) {
                            let n = JSON.parse(JSON.stringify(t));
                            n.push(o),
                            dig(e, n, s)
                        }
                }
            }
            detect_changes(e, t, n) {
                let i = 0;
                new MutationObserver((()=>{
                    Date.now(),
                    intervalc,
                    i = Date.now()
                }
                )).observe(e, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0
                }),
                setInterval((()=>{}
                ), t),
                n()
            }
            find_text_input(e) {
                return Array.from(e.querySelectorAll("input, textarea")).filter((e=>"text" === e.type || "textarea" === e.type || "number" === e.type || "email" === e.type))[0]
            }
            get_value(e) {
                let t = $(e).get(0);
                return t ? "META" === t.tagName ? t.getAttribute("content").trim() : t.textContent.trim() : "Not available"
            }
            async wait(e) {
                return new Promise((t=>{
                    setTimeout(t, e)
                }
                ))
            }
            decode_json(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            }
            clone(e) {
                try {
                    return JSON.parse(JSON.stringify(e))
                } catch (e) {
                    return null
                }
            }
            is_undefined(e) {
                return void 0 === e
            }
            list_is_empty(e) {
                return 0 === e.length
            }
            object_is_empty(e) {
                return 0 === Object.keys(e).length
            }
            async fetch_json(e, t) {
                let n = await fetch(e, t)
                  , i = await n.text();
                try {
                    return JSON.parse(i)
                } catch (e) {
                    return console.log(e),
                    null
                }
            }
            async fetch_text(e) {
                let t = await fetch(e);
                return await t.text()
            }
            async wait_for_ready_state_complete() {
                for (; ; ) {
                    if ("complete" === document.readyState)
                        return;
                    await this.wait(200)
                }
            }
            async wait_for_element(e) {
                for (let t = 0; t < 1e3; t++) {
                    let t = document.querySelector(e);
                    if (t)
                        return t;
                    await this.wait(100)
                }
            }
            simulate(e, t) {
                e.dispatchEvent(new Event(t,{
                    bubbles: !0
                }))
            }
            html_to_element(e) {
                let t = document.createElement("div");
                return t.innerHTML = e,
                t.firstElementChild
            }
            run_complex_selector(e) {
                if (e.root_css)
                    (t = document.querySelector(e.root_css)) || (t = document);
                else if (e.root_element)
                    var t = e.root_element;
                else
                    t = document;
                if (e.css)
                    var n = Array.from(t.querySelectorAll(e.css));
                else
                    n = Array.from(t.querySelectorAll("*"));
                if (e.inner_text)
                    for (var i = n.length; i--; )
                        n[i].innerText !== e.inner_text && n.splice(i, 1);
                if (e.inner_text_includes)
                    for (i = n.length; i--; )
                        !1 === n[i].innerText.toLowerCase().includes(e.inner_text_includes) && n.splice(i, 1);
                if (e.style) {
                    var o = Object.keys(e.style)
                      , r = null;
                    e: for (i = n.length; i--; ) {
                        r = window.getComputedStyle(n[i]);
                        for (var s = o.length; s--; )
                            if (e.style[o[s]] !== r[o[s]]) {
                                n.splice(i, 1);
                                continue e
                            }
                    }
                }
                if (e.min_area)
                    for (let t = n.length; t--; ) {
                        let i = n[t].getBoundingClientRect();
                        i.width * i.height < e.min_area && n.splice(t, 1)
                    }
                return n
            }
            find_element(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = this.run_complex_selector(e[t]);
                    if (n && n.length > 0)
                        return n[0]
                }
                return null
            }
            find_elements(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = this.run_complex_selector(e[t]);
                    return n && n.length > 0 ? n : []
                }
                return null
            }
            bg_fetch(e, t) {
                return new Promise((n=>{
                    chrome.runtime.sendMessage({
                        name: "fetch_json",
                        data: {
                            url: e,
                            data: t
                        }
                    }, (e=>{
                        n(e)
                    }
                    ))
                }
                ))
            }
            create_iframe_wrap(e) {
                let t = new Promise((t=>{
                    let n = i=>{
                        if (i.data && "iframe_ready" === i.data.name && e.contentWindow === i.source) {
                            let e = i.source;
                            window.removeEventListener("message", n),
                            t(this.create_window_wrap(window, e))
                        }
                    }
                    ;
                    window.addEventListener("message", n)
                }
                ));
                return {
                    exec: (e,n)=>t.then((t=>t.exec(e, n)))
                }
            }
            create_window_wrap(e, t) {
                let n = [];
                return e.addEventListener("message", (async e=>{
                    if (e.data) {
                        let t = e.data.name
                          , i = e.data.meta
                          , o = e.data.data;
                        "exec_result" === t && i && i.response && n[i.request_id] && n[i.request_id](o.result)
                    }
                }
                )),
                {
                    exec: (e,i)=>new Promise((o=>{
                        try {
                            let r = n.length;
                            n.push(o);
                            let s = {
                                request_id: r,
                                request: !0
                            };
                            t.postMessage({
                                name: e,
                                meta: s,
                                data: i
                            }, "*")
                        } catch (e) {
                            console.log(e, "error")
                        }
                    }
                    ))
                }
            }
            create_window_api(e) {
                window.addEventListener("message", (async t=>{
                    if (t.data) {
                        let i = t.data.name
                          , o = t.data.meta
                          , r = t.data.data;
                        if (e[i]) {
                            try {
                                var n = await e[i](r)
                            } catch (e) {
                                n = null,
                                console.log(e)
                            }
                            if (!t || !t.source)
                                return;
                            t.source.postMessage({
                                name: "exec_result",
                                meta: {
                                    response: !0,
                                    request_id: o,
                                    request_id: o.request_id
                                },
                                data: {
                                    result: n
                                }
                            }, "*")
                        }
                    }
                }
                ))
            }
            create_runtime_api(e) {
                chrome.runtime.onMessage.addListener((function(t, n, i) {
                    if (e[t.name]) {
                        t.data && t.data._sender && (t.data._sender = n);
                        try {
                            let n = e[t.name](t.data);
                            n && n.then ? n.then(i).catch((e=>{
                                i(null)
                            }
                            )) : i(n)
                        } catch (e) {
                            console.log(e),
                            i(null)
                        }
                    } else
                        i(null);
                    return !0
                }
                ))
            }
            runtime_exec(e, t) {
                return new Promise((n=>{
                    chrome.runtime.sendMessage({
                        name: e,
                        data: t
                    }, n)
                }
                ))
            }
            parse_rows(e) {
                for (var t = [], n = null, i = e[0], o = 1; o < e.length; o++) {
                    n = {};
                    for (var r = 0; r < i.length; r++)
                        n[i[r]] = e[o][r];
                    t.push(n)
                }
                return t
            }
            get_methods(e) {
                return console.log(e, "obj"),
                Object.getOwnPropertyNames(e).filter((t=>"function" == typeof e[t]))
            }
            wrap_class(e, t) {
                t = t || [];
                let n = this
                  , i = e.name;
                console.log(e, "item"),
                this.get_methods(e.prototype).forEach((o=>{
                    let r = e.prototype[o];
                    e.prototype[o] = function() {
                        let e = {
                            ignore: t.includes(o),
                            obj: this,
                            class_name: i,
                            method_name: o,
                            args: Array.from(arguments)
                        }
                          , s = n.stubs;
                        if (s && s[0] && s[0].class_name === i && s[0].method_name === o)
                            return e.stub = !0,
                            e.output = s[0].output,
                            s.splice(0, 1),
                            e.output;
                        try {
                            e.output = r.apply(this, arguments)
                        } catch (t) {
                            e.error = !0,
                            e.stack = t.stack,
                            e.output = null
                        }
                        return e.output && e.output.then && (e.output = new Promise((t=>{
                            e.output.then((n=>{
                                e.output = n,
                                t(n)
                            }
                            )).catch((n=>{
                                e.error = !0,
                                e.stack = n.stack,
                                e.output = null,
                                t(null)
                            }
                            ))
                        }
                        ))),
                        e.output
                    }
                }
                ))
            }
            set_stubs(e) {
                this.stubs = e
            }
            post_window_message(e, t, n) {
                e.postMessage({
                    name: t,
                    data: n
                }, "*")
            }
            blob_to_base64(e) {
                return new Promise((t=>{
                    const n = new FileReader;
                    n.onloadend = ()=>{
                        t(n.result)
                    }
                    ,
                    n.readAsDataURL(e)
                }
                ))
            }
            download_string(e, t) {
                var n = new Blob([e],{
                    type: "text/plain"
                })
                  , i = URL.createObjectURL(n)
                  , o = document.createElement("a");
                document.body.appendChild(o),
                o.style = "display: none",
                o.href = i,
                o.download = t,
                o.click(),
                window.URL.revokeObjectURL(i)
            }
            download_blob(e, t) {
                var n = URL.createObjectURL(e)
                  , i = document.createElement("a");
                document.body.appendChild(i),
                i.style = "display: none",
                i.href = n,
                i.download = t,
                i.click(),
                window.URL.revokeObjectURL(n)
            }
            find(e, t, n) {
                for (var i = 0; i < e.length; i++)
                    if (e[i][t] === n)
                        return e[i];
                return null
            }
            update_object(e, t) {
                Object.keys(t).forEach((n=>{
                    null !== e[n] && "object" == typeof e[n] ? this.update_object(e[n], t[n]) : e[n] = t[n]
                }
                ))
            }
            rows_to_data_arr(e) {
                for (var t = [], n = null, i = e[0], o = 1; o < e.length; o++) {
                    n = {};
                    for (var r = 0; r < i.length; r++)
                        n[i[r]] = e[o][r];
                    t.push(n)
                }
                return t
            }
            to_data_url(e) {
                return new Promise((t=>{
                    var n = new XMLHttpRequest;
                    n.onload = function() {
                        var e = new FileReader;
                        e.onloadend = function() {
                            t(e.result)
                        }
                        ,
                        e.readAsDataURL(n.response)
                    }
                    ,
                    n.open("GET", e),
                    n.responseType = "blob",
                    n.send()
                }
                ))
            }
        }
          , t = e;
        var i, o = new Uint8Array(16);
        function r() {
            if (!i && !(i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return i(o)
        }
        const s = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (var a = [], c = 0; c < 256; ++c)
            a.push((c + 256).toString(16).substr(1));
        const p = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = (a[e[t + 0]] + a[e[t + 1]] + a[e[t + 2]] + a[e[t + 3]] + "-" + a[e[t + 4]] + a[e[t + 5]] + "-" + a[e[t + 6]] + a[e[t + 7]] + "-" + a[e[t + 8]] + a[e[t + 9]] + "-" + a[e[t + 10]] + a[e[t + 11]] + a[e[t + 12]] + a[e[t + 13]] + a[e[t + 14]] + a[e[t + 15]]).toLowerCase();
            if (!function(e) {
                return "string" == typeof e && s.test(e)
            }(n))
                throw TypeError("Stringified UUID is invalid");
            return n
        }
          , l = function(e, t, n) {
            var i = (e = e || {}).random || (e.rng || r)();
            if (i[6] = 15 & i[6] | 64,
            i[8] = 63 & i[8] | 128,
            t) {
                n = n || 0;
                for (var o = 0; o < 16; ++o)
                    t[n + o] = i[o];
                return t
            }
            return p(i)
        };
        var d, h, u, _, m;
        !function(e) {
            e.GOOGLE_CORRECT_FLEX = "chromane-flex-correct",
            e.GOOGLE_CORRECT_FLEX_RIGHT = "chromane-flex-correct-right",
            e.GOOGLE_ADS_CAMPAIGN_BTN = "ch-sonic-google-ads-campaigns-draft-btn",
            e.LINKEDIN_ADS_CAMPAIGN_BTN = "ch-sonic-linkedin-ads-campaigns-draft-btn",
            e.WORDPRESS_POST_BTN = "ch-sonic-wordpress-post-btn",
            e.SEARCH_IFRAME_HIDE = "chromane-sonic-hide",
            e.SEARCH_IFRAME_BTN_CLOSE = "ch-sonic-search-iframe-close",
            e.SEARCH_IFRAME_BTN_MANUAL = "ch-sonic-search-iframe-manual",
            e.CHROMANE_AD_MORE_BTN = "ch-sonic-ad-more-btn",
            e.WIDGET_AUTOCOMPLETE = "ch-sonic-w-cmplt",
            e.HELPSCOUT_EWIDGET_WRAP = "ch-sonic-helpscout-widget-wrap"
        }(d || (d = {})),
        function(e) {
            e.SEARCH_IFRAME = "ch-sonic-search-iframe",
            e.ADS_IFRAME = "ch-sonic-ads-iframe",
            e.IMPROVER_IFRAME = "ch-sonic-improver-iframe",
            e.WORDPRESS_TITLE_IFRAME = "chromane-sonic-wordpress-title-iframe"
        }(h || (h = {})),
        function(e) {
            e.GOOGLE_PAGE_CENTER_COL = "#center_col",
            e.GOOGLE_INPUT = "form input[name='q']",
            e.GOOGLE_COLUMN_RIGHT_EL = "#center_col ~ div",
            e.GOOGLE_MAPS_ID = "rhs",
            e.GOOGLE_CURRENT_PAGE_FLAG = "[aria-current='page']",
            e.GOOGLE_FONT_FLAG = ".g",
            e.GOOGLE_USA_BAR = '[data-st-cnt="mode"]',
            e.GOOGLE_HOME_MENU = '[data-ogbl]:not([data-sonic = "detected"])',
            e.GOOGLE_ADS_HEADLINE_SECTION = '.headline-section .headlines:not([data-sonic = "detected"])',
            e.GOOGLE_ADS_HEADLINE_INPUT = '.headline-section input:not([data-sonic = "detected"])',
            e.GOOGLE_ADS_DESCRIPTION_SECTION = '.description-section .descriptions:not([data-sonic = "detected"])',
            e.GOOGLE_ADS_DESCRIPTION_TEXTAREA = '.description-section textarea:not([data-sonic = "detected"])',
            e.WORDPRESS_TITLE_MORE_BTN = ".edit-post-header__toolbar:not([data-sonic='detected'])",
            e.WORDPRESS_TEXT_FIELD = ".is-root-container [contenteditable]:not([class^='ch-sonic'])",
            e.LINKEDIN_ADS_HEADLINE = '[placeholder^="This is your headline"]:not([data-sonic = "detected"]),\n                           [placeholder^="This is your ad headline"]:not([data-sonic = "detected"]),\n                           #headline:not([data-sonic = "detected"]),\n                           #shareContentTitle:not([data-sonic = "detected"]),\n                           input[id^=\'carousel-card-form__title\']:not([data-sonic = "detected"]),\n                           #text-ad-edit-panel__headline-field:not([data-sonic = "detected"]),\n                           #spotlight-edit-panel__headline-field:not([data-sonic = "detected"]),\n                           #follow-company-edit-panel__custom-headline-field:not([data-sonic = "detected"])',
            e.LINKEDIN_ADS_DESCRIPTION = '[placeholder="Description here"]:not([data-sonic = "detected"]),\n                              #description:not([data-sonic = "detected"]),\n                              #text-ad-edit-panel__description-field:not([data-sonic = "detected"]),\n                              #spotlight-edit-panel__description-field:not([data-sonic = "detected"]),\n                              #follow-company-edit-panel__custom-description-field:not([data-sonic = "detected"])',
            e.LINKEDIN_ADS_INTRODUCTORY = '[placeholder^="This is your introductory text"]:not([data-sonic = "detected"]),\n                                #introductoryText:not([data-sonic = "detected"]),\n                                [id="sponsorableContent.shareContent.shareCommentary.text"]:not([data-sonic = "detected"]),\n                                #shareCommentaryText:not([data-sonic = "detected"]),\n                                #sponsored-update-job-posting-edit-panel__introductory-text-field:not([data-sonic = "detected"])',
            e.YOUTUBE_STUDIO_HEADLINE = ".title #textbox:not([data-sonic='detected'])",
            e.YOUTUBE_STUDIO_DESCRIPTION = ".description #textbox:not([data-sonic='detected'])",
            e.FACEBOOK_ADS_PRIMARY_TEXT = "#add-bodies-option-button:not([data-sonic='detected'])",
            e.FACEBOOK_ADS_HEADLINE = "#add-titles-option-button:not([data-sonic='detected'])",
            e.FACEBOOK_ADS_DESCRIPTION = "#add-descriptions-option-button:not([data-sonic='detected'])",
            e.GDOCS_COPY_BTN_DISABLED = "goog-menuitem-disabled",
            e.GDOCS_COPY_ICON = ".goog-menu.goog-menu-vertical[role='menu'] .goog-menuitem-content .docs-icon-editors-ia-content-copy",
            e.BING_INPUT = "#sb_form_q",
            e.BING_RESULT = "#b_results",
            e.BING_RIGHT_EL = "#b_context",
            e.PAGE_TEXTAREA = "textarea:not([data-sonic='detected'])",
            e.PAGE_CONTENTEDITABLE = "[contenteditable=\"true\"]:not([data-sonic='detected'])",
            e.PAGE_INPUT = "input[type=\"text\"]:not([data-sonic='detected']),\n                input:not([type]):not([data-sonic='detected']),\n                input[type=\"\"]:not([data-sonic='detected']),\n                input[type=\"search\"]:not([data-sonic='detected'])",
            e.PAGE_IFRAME = "iframe:not([data-sonic='detected'])",
            e.AUTOCOMPLT_TEXBOX = "textarea, [contenteditable='true']",
            e.HELPSCOUT_THREAD = '#tblTickets tbody tr .attachment:not([data-sonic = "detected"])',
            e.HELPSCOUT_BAR = 'ul.convo-actions:not([data-sonic = "detected"])',
            e.HELPSCOUT_REPLY_BTN = "#navReply",
            e.HELPSCOUT_TEXTBOX = ".redactor_editor[contenteditable]"
        }(u || (u = {})),
        function(e) {
            e.GMAIL_WRAPPER = "chromane-sonic-gmail",
            e.GMAIL_WRITE = "chromane-sonic-gmail-write",
            e.GMAIL_AUTH_WRAPPER = "chromane-gmail-auth-wrapper",
            e.GMAIL_THREAD_BTN = "chromane-sonic-gmail-thread-btn",
            e.GMAIL_THREAD_TEST = "chromane-sonic-gmail-thread-test",
            e.GMAIL_THREAD_COMPOSE = "chromane-sonic-gmail-thread-compose",
            e.GMAIL_OVERRIDE_HIDE_MENUS = "chromane-sonic-gmail-hide-menus",
            e.GMAIL_OVERRIDE_HIDE_COMPOSE = "chromane-sonic-gmail-hide-compose",
            e.GMAIL_OVERRIDE_OPEN_IFRAME = "chromane-sonic-summarise-iframe-open",
            e.GMAIL_REPLY_BTN = "chromane-sonic-gmail-reply",
            e.GMAIL_SETTINGS_BTN = "ch-sonic-gmail-settings-btn",
            e.EMAIL_BOX_WRAP = "ch-sonic-email-box-wrap"
        }(_ || (_ = {})),
        function(e) {
            e.GMAIL_BUTTON_SEND = ".btC > td",
            e.GMAIL_COMPOSE_FORM = ".bAs:not([data-chromane='detected'])",
            e.GMAIL_REPLY_FORM = ".AO .bAs",
            e.GMAIL_TEXT_BOX = ".LW-avf",
            e.GMAIL_SUBJECT_BOX = '.AD .I5.chromane-sonic-active input[name="subjectbox"]',
            e.GMAIL_SUBJECT_BOX_BIG = '.aSt .I5.chromane-sonic-active input[name="subjectbox"]',
            e.GMAIL_SUBJECT_REPLY = "table.IG",
            e.GMAIL_BOX_TABLE = ".I5",
            e.GMAIL_BOX_TABLE_ACTIVE = ".I5.chromane-sonic-active",
            e.GMAIL_THREAD = "tr[jscontroller][aria-labelledby][role = 'row']",
            e.GMAIL_THREAD_CELL = "[role='gridcell']",
            e.GMAIL_THREAD_SUBJECT = "tr .bog [data-thread-id]",
            e.GMAIL_THREAD_BAR_SUBJECT = "[data-thread-perm-id][data-legacy-thread-id]",
            e.GMAIL_COMPOSE_WINDOW = ".AD",
            e.GMAIL_COMPOSE_WINDOW_BIG = ".aVN",
            e.GMAIL_CTX_MENU_ITEMS = "[role=\"menu\"][aria-haspopup='true'][style*='visible'][tabindex='0'] [role=\"menuitem\"]",
            e.GMAIL_CTX_REPLY_ICON = ".J-N-JX.aDE.BS",
            e.GMAIL_CTX_REPLY_ALL_ICON = ".J-N-JX.aDE.BR",
            e.GMAIL_REPLY_PANEl = ".amn:not([data-chromane='detected'])",
            e.GMAIL_REPLY_BTN = ".amn .bkH",
            e.GMAIL_REPLY_ALL_BTN = ".amn .bkI",
            e.GMAIL_ACCOUNT_OWNER = "[ng-non-bindable][class*='gb']>[class*='gb'] ",
            e.GMAIL_POPOUT_SIZE = ".GP",
            e.GMAIL_SUPPORT_BTN = ".zo[data-tooltip]"
        }(m || (m = {}));
        const f = [{
            description: "Write professional ",
            icon: "emoji-funny.png",
            name: "professional",
            title: "😁 Professional"
        }, {
            description: "Write formal ",
            icon: "emoji-funny.png",
            name: "formal",
            title: "🤵 Formal"
        }, {
            description: "Write casual ",
            icon: "emoji-funny.png",
            name: "casual",
            title: "😄 Casual"
        }, {
            description: "Write apologetic ",
            icon: "emoji-funny.png",
            name: "apologetic",
            title: "🙇‍♂️ Apologetic"
        }, {
            description: "Write persuasive ",
            icon: "emoji-funny.png",
            name: "persuasive",
            title: "🤓 Persuasive"
        }, {
            description: "Write congratulatory ",
            icon: "emoji-funny.png",
            name: "congratulatory",
            title: "🥳 Congratulatory"
        }, {
            description: "Write encouraging ",
            icon: "emoji-funny.png",
            name: "encouraging",
            title: "🫡 Encouraging"
        }, {
            description: "Write symphatetic ",
            icon: "emoji-funny.png",
            name: "sympathetic",
            title: "🥲 Sympathetic"
        }, {
            description: "Write appreciative ",
            icon: "emoji-funny.png",
            name: "appreciative",
            title: "😍 Appreciative"
        }, {
            description: "Write confident ",
            icon: "emoji-funny.png",
            name: "confident",
            title: "😎 Confident"
        }, {
            description: "Write assertive ",
            icon: "emoji-funny.png",
            name: "assertive",
            title: "🤔 Assertive"
        }, {
            description: "Write thankful ",
            icon: "emoji-funny.png",
            name: "thankful",
            title: "🙏 Thankful"
        }, {
            description: "Write empathetic ",
            icon: "emoji-sad.png",
            name: "empathetic",
            title: "😊 Empathetic"
        }]
          , g = [{
            description: "",
            icon: "emoji-funny.png",
            name: "positive",
            title: "😁 Positive "
        }, {
            description: "",
            icon: "emoji-funny.png",
            name: "neutral",
            title: "😐 Neutral"
        }, {
            description: "",
            icon: "emoji-funny.png",
            name: "negative",
            title: "😡 Negative"
        }];
        var y, v, b;
        !function(e) {
            e.GDOCS_COPY_BTN_DISABLED = "goog-menuitem-disabled",
            e.GDOCS_COPY_ICON = ".goog-menu.goog-menu-vertical[role='menu'] .goog-menuitem-content .docs-icon-editors-ia-content-copy"
        }(y || (y = {})),
        function(e) {
            e.COMMAND_IFRAME = "chat-sonic-command-iframe",
            e.SEARCH_IFRAME = "ch-sonic-search-iframe",
            e.GMAIL_IFRAME = "chromane-sonic-gmail-iframe",
            e.MULTI_IFRAME = "ch-sonic-multi-iframe",
            e.ADS_IFRAME = "ch-sonic-ads-iframe",
            e.IMPROVER_IFRAME = "ch-sonic-improver-iframe",
            e.WORDPRESS_TITLE_IFRAME = "chromane-sonic-wordpress-title-iframe",
            e.SUMMARISE_IFRAME = "chromane-sonic-summarise-iframe",
            e.YOUTUBE_CMD_IFRAME = "ch-sonic-youtube-cmd-iframe",
            e.SUM_TEXT_IFRAME = "chromane-sonic-sumtext-iframe",
            e.SOCIAL_IFRAME = "ch-sonic-social-iframe",
            e.WIDGET_BTN = "sonic-chromane-btn-widget"
        }(v || (v = {})),
        function(e) {
            e.CHROMANE_HIDE = "chromane-hide",
            e.CHROMANE_WORDS_EXPIRED = "ch-words-expired",
            e.CHROMANE_UNAUTH = "ch-sonic-unauth",
            e.CHROMANE_IFRAME = "ch-sonic-iframe",
            e.CHROMANE_SONIC_LOGO_BTN = "ch-sonic-logo-btn",
            e.CHROMANE_AD_MORE_BTN = "ch-sonic-ad-more-btn",
            e.CHROMANE_SONIC_REWRITE_BTN = "ch-sonic-rewrite-btn",
            e.BTNS_GENER_MANAGE = "ch-sonic-gen-man",
            e.NOTIFICATION_WRAP = "chat-sonic-chromane-notification-wrap",
            e.NOTIFICATION = "chat-sonic-chromane-notification",
            e.COMMAND_IFRAME_HIDE = "chat-sonic-command-iframe-hide",
            e.SONIC_IFRAME_UNAUTH = "chat-sonic-unauth",
            e.WIDGET_BTN_IMG = "sonic-chromane-btn-widget-img",
            e.WIDGET_BTN_TEXT = "sonic-chromane-btn-widget-text",
            e.WIDGET_BTN_HIDE = "sonic-chromane-btn-widget-hide",
            e.WIDGET_BTN_CLOSE = "sonic-chromane-btn-widget-close",
            e.CHROMANE_SONIC_DARK = "chromane-sonic-dark",
            e.CHROMANE_SONIC_ACTIVE = "chromane-sonic-active",
            e.EMAIL_WIDGET = "ch-sonic-email-widget",
            e.EMAIL_WIDGET_BTN = "ch-sonic-email-widget-gen",
            e.SELECT_MOOD = "ch-sonic-mood-select",
            e.CHIP_DEFAULT = "ch-sonic-chip-default",
            e.CHIP_EMOTIONS = "ch-sonic-chip-emotions",
            e.EMAIL_BOX_WRAP = "ch-sonic-email-box-wrap",
            e.PAGE_TEXTAREA_BOX = "ch-sonic-textarea-box",
            e.PAGE_TEXTAREA_BOX_DRAG = "ch-sonic-textarea-box-drag"
        }(b || (b = {}));
        const w = new class {
            timeout(e) {
                return new Promise((t=>{
                    setTimeout((()=>{
                        t()
                    }
                    ), e)
                }
                ))
            }
            getUnComputedStyle(e) {
                const {styleSheets: t} = document
                  , n = {};
                for (let i of t)
                    try {
                        const t = i.cssRules || i.rules;
                        for (let i of t) {
                            const {selectorText: t, style: o} = i;
                            if (e.matches(t))
                                for (let[e,t] of Object.entries(o))
                                    "" === t && void 0 !== n[e] || (n[e] = t)
                        }
                    } catch (e) {
                        continue
                    }
                return n
            }
            createIframe(e, t) {
                const n = document.createElement("iframe");
                return n.name = JSON.stringify({
                    context: e
                }),
                t || (t = E.extensionId ? `chrome-extension://${E.extensionId}/pages/iframe/iframe.html` : "http://localhost:3000"),
                n.src = t,
                n
            }
            async execSearchElement(e, t=5) {
                if (!t)
                    return null;
                return document.querySelector(e) || (await this.timeout(500),
                this.execSearchElement(e, t - 1))
            }
            async getVisibleParentEl(e, t=5) {
                if (!t || !e)
                    return null;
                if (e.offsetHeight)
                    return e;
                {
                    const n = e.parentElement;
                    return n ? await this.getVisibleParentEl(n, t - 1) : null
                }
            }
            injectScript(e, t) {
                const n = e.createElement("script");
                n.src = w.wrapChromeRuntimeGetUrl(t),
                e.documentElement.append(n)
            }
            injectStyle(e, t) {
                const n = e.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css",
                n.href = w.wrapChromeRuntimeGetUrl(t),
                e.documentElement.append(n)
            }
            injectStyleRawRecursive(e) {
                const t = document.createElement("style");
                t.innerHTML = e,
                document.documentElement.append(t)
            }
            wrapChromeRuntimeGetUrl(e, t=null) {
                return t || (t = E.extensionId),
                t || (t = chrome.runtime.id),
                `chrome-extension://${t}${e}`
            }
            countWords(e) {
                return e.trim().split(" ").length
            }
            countLetters(e) {
                return e.trim().split(" ").reduce(((e,t)=>e + t.length), 0)
            }
            isObjectEqual(e, t) {
                return JSON.stringify(e) === JSON.stringify(t)
            }
            async dispatchPasteEvent(e, t) {
                e.focus();
                const n = new DataTransfer;
                n.setData("text/plain", t);
                const i = new ClipboardEvent("paste",{
                    clipboardData: n,
                    bubbles: !0
                });
                e.dispatchEvent(i)
            }
            async clearTextBox({box: e, textLength: t=e.textContent.length, timeout: n=5}) {
                e.focus();
                const i = window.getSelection()
                  , o = document.createRange();
                o.selectNodeContents(e),
                i.removeAllRanges(),
                i.addRange(o),
                await w.timeout(n);
                const r = new KeyboardEvent("keydown",{
                    bubbles: !0,
                    code: "Backspace",
                    key: "Backspace",
                    keyCode: 8,
                    which: 8
                })
                  , s = new KeyboardEvent("keydown",{
                    bubbles: !0,
                    code: "Delete",
                    key: "Delete",
                    keyCode: 46,
                    which: 46,
                    ctrlKey: !0
                });
                e.dispatchEvent(r),
                e.dispatchEvent(s);
                const a = e.textContent.trim();
                return a && a.length !== t ? (await w.timeout(n),
                await this.clearTextBox({
                    box: e,
                    textLength: a.length
                })) : void 0
            }
            debounce(e, t=300) {
                let n;
                return (...i)=>{
                    clearTimeout(n),
                    n = setTimeout((()=>{
                        e.apply(this, i)
                    }
                    ), t)
                }
            }
            selectAllTextInContenteditable(e) {
                let t = window.getSelection()
                  , n = document.createRange();
                n.selectNodeContents(e),
                t.removeAllRanges(),
                t.addRange(n)
            }
            applyThemeModeToHtmlElement(e, t="dark") {
                if (!document.documentElement)
                    return "white";
                let n = "white";
                return "dark" === e ? (document.documentElement.classList.add(t),
                n = "dark") : "white" === e ? (document.documentElement.classList.remove(t),
                n = "white") : "auto" !== e && e || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add(t),
                n = "dark") : (document.documentElement.classList.remove(t),
                n = "white")),
                n
            }
            onOSThemeChange() {
                window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (async()=>{
                    const e = await chrome.storage.local.get(null);
                    "auto" === e?.theme_mode && this.applyThemeModeToHtmlElement("auto", b.CHROMANE_SONIC_DARK)
                }
                ))
            }
        }
          , x = w
          , E = new class {
            token;
            extensionId;
            trackAnalytic;
            handleErrors;
            manageGlobalState;
            execSetWSGenerete;
            moodEmoji;
            moodEmotions;
            apiIframe;
            config;
            constructor() {
                this.token = null,
                this.moodEmoji = f,
                this.moodEmotions = g,
                this.trackAnalytic = (e,t)=>{
                    console.log("Analytic Track", e, t)
                }
            }
            initBackground(e) {
                this.config = e.config,
                e.trackAnalytic && (this.trackAnalytic = e.trackAnalytic)
            }
            initContent(e) {
                x.injectStyleRawRecursive('/* !Email Widget */\n.ch-sonic-email-box-wrap {\n  position: relative;\n  z-index: 2;\n}\n\n.ch-sonic-email-widget {\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  column-gap: 10px;\n  font-size: 14px;\n  line-height: 17px;\n}\n\n.ch-sonic-email-widget-gen {\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  width: 108px;\n  padding: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #705cf6;\n  background: transparent;\n  border-radius: 6px;\n  cursor: pointer;\n  user-select: none;\n  font-size: 14px;\n  line-height: 17px;\n}\n\n.ch-sonic-email-widget-close {\n  position: absolute;\n  width: 17px;\n  height: 17px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 0px;\n  top: 0px;\n  transform: translate(50%, -50%);\n  background: white;\n  z-index: 2;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  visibility: hidden;\n  opacity: 0;\n  border-radius: 50%;\n}\n\n.ch-sonic-email-widget-close svg {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.ch-sonic-email-widget-close svg path {\n  stroke: #705cf6 !important;\n}\n\n.ch-sonic-email-widget:hover .ch-sonic-email-widget-close {\n  visibility: visible;\n  opacity: 1;\n}\n\n.ch-sonic-email-widget:has(.chromane-sonic-active) .ch-sonic-email-widget-close {\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n.ch-sonic-email-widget-gen:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.ch-sonic-email-widget-gen-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #705cf6;\n}\n.ch-sonic-email-widget-gen-icon + span:not(:empty) {\n  margin-left: 8px;\n}\n\n.ch-sonic-email-widget-gen-icon svg {\n  width: 14px;\n  height: 14px;\n}\n\n.ch-sonic-email-widget-gen span {\n  color: #705cf6;\n  font-weight: 500;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: "Inter";\n  user-select: none;\n}\n\n.ch-sonic-email-widget-box {\n  flex: 0 1 auto;\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n\n.ch-sonic-email-widget-box span {\n  position: absolute;\n  top: 4px;\n  left: -1px;\n  width: fit-content;\n  padding: 0px 6px;\n  height: 23px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #e5e7eb;\n  border-radius: 6px;\n  border-bottom-left-radius: 0px;\n  font-family: Inter;\n  font-size: inherit;\n  font-weight: 600;\n  line-height: inherit;\n  color: #1f2937;\n  white-space: nowrap;\n}\n\n.ch-sonic-email-widget-textarea {\n  width: 100%;\n  border: 0px;\n  border-bottom: 1px solid #d1d5db;\n  outline: none !important;\n  resize: none;\n  overflow: hidden;\n  transition: all 0.2s ease;\n  font-family: Inter;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 19px;\n  padding: 6px 0px;\n  color: #1f2937;\n  text-indent: 114px;\n  word-break: break-all;\n}\n\n.ch-sonic-email-widget-textarea > * {\n  text-indent: 0px !important;\n}\n\n.ch-sonic-email-widget-textarea[contenteditable][aria-placeholder]:empty:before {\n  content: attr(aria-placeholder);\n  position: absolute;\n  background-color: transparent;\n  color: rgb(75 85 99);\n  font-size: inherit;\n  line-height: inherit;\n  font-weight: 400;\n  cursor: text;\n  text-indent: 0px;\n  max-width: var(--cwidth);\n  visibility: hidden;\n  visibility: var(--cvis);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n/* !Select mood */\n\n/*! Mood Component */\n.ch-sonic-email-widget-mood {\n  width: fit-content;\n  display: flex;\n  align-items: center;\n  column-gap: 6px;\n  margin-top: 10px;\n  background: #e5e7eb;\n  padding: 4px 6px 4px 8px;\n  border-radius: 6px;\n  font-size: 14px;\n  line-height: 17px;\n  box-sizing: border-box;\n  color: #1f2937;\n}\n.ch-sonic-email-widget-mood > span {\n  font-family: "Inter";\n  font-weight: 600;\n}\n\n.ch-sonic-mood-select {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: fit-content;\n  column-gap: 3px;\n  padding: 0px 4px;\n  cursor: pointer;\n  font-family: "Inter";\n  font-weight: 400;\n  height: 28px;\n  position: relative;\n  z-index: 2;\n  user-select: none;\n}\n\n.ch-sonic-email-widget-mood.chips {\n  width: 100%;\n  align-items: baseline;\n  padding: 6px;\n  background: transparent;\n  margin-top: 0px;\n}\n\n.ch-sonic-chip-default {\n  overflow-x: scroll;\n  padding-bottom: 6px;\n}\n\n/* *Scrollbar */\n.ch-sonic-chip-default::-webkit-scrollbar {\n  width: 5px;\n  height: 4px;\n}\n.ch-sonic-chip-default::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.ch-sonic-chip-default::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 13px;\n  cursor: pointer;\n}\n\n.ch-sonic-mood-select > svg {\n  margin: -3px;\n  width: 19px;\n  height: 19px;\n  fill: black;\n  transition: all 0.3s ease;\n}\n\n.ch-sonic-mood-select-items {\n  position: absolute;\n  background: white;\n  left: 0px;\n  top: 32px;\n  z-index: 999999;\n  min-width: calc(100% + 6px);\n  padding: 7px 4px;\n  display: flex;\n  flex-direction: column;\n  color: #1f2937;\n  font-size: inherit;\n  row-gap: 4px;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  font-family: "Inter";\n  cursor: default;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.ch-sonic-mood-select-item {\n  padding: 3px 2px;\n  border-radius: 3px;\n  transition: all 0.3s ease;\n  width: 100%;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.ch-sonic-mood-select-item:hover {\n  background: #e5e7eb;\n}\n\n.ch-sonic-mood-select.chromane-sonic-active .ch-sonic-mood-select-items {\n  visibility: visible;\n  opacity: 1;\n}\n.ch-sonic-mood-select.chromane-sonic-active > svg {\n  transform: rotate(180deg);\n}\n.ch-sonic-email-widget-mood.emotion {\n  background: transparent;\n  padding: 0px;\n  margin-top: 12px;\n}\n\n/*!Chip Emotions Component-------------------------------------------------------------  */\n.ch-sonic-chip-emotions,\n.ch-sonic-chip-default {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 6px;\n}\n\n.ch-sonic-chip-default {\n  padding: 3px 0px 3px 0px;\n}\n\n.ch-sonic-chip-emotions-chip,\n.ch-sonic-chip-default-chip {\n  background: #e5e7eb;\n  border-radius: 6px;\n  padding: 2px 4px;\n  color: #1f2937;\n  font-family: Inter;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: inherit;\n  cursor: pointer;\n  transition: all 0.1s ease;\n}\n.ch-sonic-chip-default-chip {\n  white-space: nowrap;\n  padding: 4px 6px;\n}\n\n.ch-sonic-chip-emotions-chip.chromane-sonic-active,\n.ch-sonic-chip-default-chip.chromane-sonic-active {\n  background: #d7d6fe;\n}\n\n/* !WIDGET DARK MODE STYLESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS ----------------------------------------------------------*/\n.ch-sonic-email-widget-mood.dark .ch-sonic-chip-default::-webkit-scrollbar-thumb {\n  background: #6b7280;\n}\n\n.ch-sonic-email-widget-mood.dark .ch-sonic-chip-emotions-chip,\n.ch-sonic-email-widget-mood.dark .ch-sonic-chip-default-chip {\n  background: #1f2937;\n  color: #e5e7eb;\n}\n.ch-sonic-email-widget-mood.dark .ch-sonic-chip-emotions-chip.chromane-sonic-active,\n.ch-sonic-email-widget-mood.dark .ch-sonic-chip-default-chip.chromane-sonic-active {\n  background: #6b7280;\n}\n\n.ch-sonic-email-widget.dark .ch-sonic-email-widget-box span {\n  background: #34383f;\n  color: #e5e7eb;\n}\n\n.ch-sonic-email-widget.dark .ch-sonic-email-widget-textarea {\n  color: #e5e7eb;\n  border-bottom-color: #34383f;\n}\n.ch-sonic-email-widget.dark .ch-sonic-email-widget-close {\n  background: #1f2937;\n}\n\n.ch-sonic-email-widget.dark .ch-sonic-email-widget-textarea[contenteditable][aria-placeholder]:empty:before {\n  color: #4b5563;\n}\n\n.ch-sonic-email-widget-mood.dark {\n  background: #34383f;\n  color: #e5e7eb;\n}\n\n.ch-sonic-email-widget-mood.dark.chips {\n  background: transparent;\n}\n.ch-sonic-email-widget-mood.dark .ch-sonic-mood-select {\n  background: #4b5563;\n}\n.ch-sonic-email-widget-mood.dark .ch-sonic-mood-select-input {\n  color: #e5e7eb;\n}\n.ch-sonic-email-widget-mood.dark .ch-sonic-mood-select-items {\n  background: #34383f;\n  color: #e5e7eb;\n}\n.ch-sonic-email-widget-mood.dark .ch-sonic-mood-select-item:hover {\n  background: #4b5563;\n}\n\n/* !SIZE MODIFIERS------------------------------------------------------------------------------------------------------------ */\n.ch-sonic-email-widget.s-small {\n  font-size: 12px;\n  line-height: 14px;\n  column-gap: 4px;\n}\n\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-gen {\n  flex: 0 0 80px;\n  width: 80px;\n  font-size: 11px;\n  line-height: 14px;\n}\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-gen-icon {\n  width: 14px;\n  height: 14px;\n}\n\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-gen-icon svg {\n  width: 9px;\n  height: 9px;\n}\n\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-close {\n  width: 14px !important;\n  height: 14px !important;\n}\n\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-box {\n  flex: 0 0 auto;\n  width: calc(100% - 85px);\n  max-width: calc(100% - 85px);\n}\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-box span {\n  height: 19px;\n  top: 3px;\n  padding: 0px 6px;\n}\n\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-textarea {\n  font-size: 12px;\n  line-height: 18px;\n  text-indent: 112px;\n  padding: 3px 0px;\n}\n\n.ch-sonic-email-widget-mood.s-small {\n  font-size: 11px;\n  line-height: 14px;\n  margin-top: 5px;\n  padding: 6px;\n}\n\n.ch-sonic-email-widget-mood.s-small.chips {\n  padding: 3px 6px 0px 6px;\n  margin-top: 0px;\n}\n\n.ch-sonic-email-widget-mood.s-small .ch-sonic-mood-select {\n  height: 20px;\n}\n.ch-sonic-email-widget-mood.s-small .ch-sonic-mood-select > svg {\n  width: 16px;\n  height: 16px;\n}\n.ch-sonic-email-widget-mood.s-small .ch-sonic-chip-default-chip {\n  padding: 3px 5px;\n  font-size: 10px;\n}\n\n/* !MAIL TYPE MODIFIERS------------------------------------------------------------------- */\n\n/* ?Default-size */\n.ch-sonic-email-widget.reply .ch-sonic-email-widget-textarea {\n  text-indent: 88px;\n}\n\n.ch-sonic-email-widget.message .ch-sonic-email-widget-textarea {\n  text-indent: 129px;\n}\n.ch-sonic-email-widget.short .ch-sonic-email-widget-textarea {\n  text-indent: 62px;\n}\n\n/* ?Smaill-size */\n.ch-sonic-email-widget.s-small .ch-sonic-email-widget-textarea {\n  text-indent: 112px;\n}\n /* !Widget BTN */\n#sonic-chromane-btn-widget {\n  width: fit-content;\n  padding: 0px 6px;\n  height: 36px;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  column-gap: 4px;\n  justify-content: center;\n  z-index: 99999999999999999999999;\n  bottom: 30px;\n  left: 30px;\n  background: #111827;\n  border: 1px solid #374151;\n  border-radius: 8px;\n  visibility: visible;\n  opacity: 0.1;\n  cursor: pointer;\n  transition: visibility 0.2s ease, opacity 0.2s ease;\n}\n\n#sonic-chromane-btn-widget .sonic-chromane-btn-widget-img {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#sonic-chromane-btn-widget .sonic-chromane-btn-widget-text {\n  user-select: none;\n  font-family: "Inter", sans-serif !important;\n  font-size: 18px;\n  line-height: 20px;\n  font-weight: 600;\n  color: #f4f4f6;\n}\n#sonic-chromane-btn-widget .sonic-chromane-btn-widget-close {\n  position: absolute;\n  flex: 0 0 15px;\n  width: 15px !important;\n  height: 15px !important;\n  top: 0px;\n  right: 0px;\n  transform: translate(50%, -50%);\n  border-radius: 50%;\n  background: #ff76df;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.2s ease;\n}\n\n#sonic-chromane-btn-widget:hover {\n  opacity: 1;\n}\n#sonic-chromane-btn-widget:hover .sonic-chromane-btn-widget-close {\n  visibility: visible;\n  opacity: 1;\n}\n#sonic-chromane-btn-widget .sonic-chromane-btn-widget-close svg {\n  width: 10px !important;\n  height: 10px !important;\n}\n\n#sonic-chromane-btn-widget.sonic-chromane-btn-widget-hide {\n  visibility: hidden;\n  opacity: 0;\n}\n\n/* !BUTTON GENERETIONS MANAGE */\n\n.ch-sonic-gen-man {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 22px;\n  height: 22px;\n}\n\nbutton.ch-sonic-gen-man-btn {\n  position: relative;\n  width: 22px;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: #705cf6;\n  border-radius: 50%;\n  border: none !important;\n  padding: 0px !important;\n  margin: 0px !important;\n  border: none !important;\n  outline: none;\n}\n\nbutton.ch-sonic-gen-man-stop {\n  position: absolute;\n  top: 50%;\n  left: 0px;\n  transform: translateY(-50%);\n  background: transparent;\n  transition: all 0.2s ease;\n}\n\n.ch-sonic-gen-man.chromane-sonic-active button.ch-sonic-gen-man-stop {\n  transform: translate(-120%, -50%);\n}\nbutton.ch-sonic-gen-man-stop svg.ch-sonic-gen-man-icon {\n  height: 22px !important;\n  width: 22px !important;\n}\n\n.ch-sonic-gen-man-rewrite {\n  z-index: 2;\n  transition: all 0.2s ease;\n}\n.ch-sonic-gen-man-rewrite .ch-sonic-gen-man-icon {\n  width: 14px !important;\n  height: 14px !important;\n  flex: 0 0 14px;\n}\n.ch-sonic-gen-man-rewrite .ch-sonic-gen-man-icon * {\n  stroke: white !important;\n}\n\nsvg.ch-sonic-gen-man-loader {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n  height: 100% !important;\n  width: 100% !important;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.ch-sonic-gen-man.chromane-sonic-active .ch-sonic-gen-man-rewrite svg.ch-sonic-gen-man-loader {\n  visibility: visible;\n  opacity: 1;\n}\n\n.ch-sonic-gen-man.chromane-sonic-active .ch-sonic-gen-man-rewrite .ch-sonic-gen-man-icon {\n  opacity: 0;\n  visibility: hidden !important;\n}\n.ch-sonic-gen-man.chromane-sonic-active .ch-sonic-gen-man-rewrite {\n  background: transparent !important;\n  cursor: default;\n  box-shadow: none !important;\n}\n\n.ch-sonic-gen-man-ttip {\n  color: white;\n  background: rgb(99 102 241);\n  white-space: nowrap;\n  position: absolute;\n  top: -4px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  z-index: 99999999;\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-family: "Satoshi";\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 10px;\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n\n.ch-sonic-gen-man-ttip svg {\n  width: 11px;\n  height: 5px;\n  position: absolute;\n  bottom: 1px;\n  transform: translate(-50%, 100%) rotate(180deg);\n  left: 50%;\n}\n\n.ch-sonic-gen-man-ttip.chromane-sonic-active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.ch-sonic-gen-man.chromane-sonic-active .ch-sonic-gen-man-rewrite .ch-sonic-gen-man-ttip {\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n/*! CHROMANE SONIC LOGO BTN */\n.ch-sonic-logo-btn {\n  width: 22px;\n  height: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  padding: 0px;\n  cursor: pointer;\n  border: none !important;\n  outline: none !important;\n}\n\n.ch-sonic-logo-btn img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n/* !NOTIFICATION */\n.chat-sonic-chromane-notification-wrap {\n  height: fit-content;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  row-gap: 10px;\n  bottom: 30px;\n  right: 0px;\n  width: 400px;\n  background: transparent;\n  z-index: 999999999;\n  pointer-events: none;\n}\n\n.chat-sonic-chromane-notification {\n  margin-right: 20px;\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  background-color: #111827;\n  border-radius: 12px;\n  padding: 10px 16px;\n  z-index: 99999999999;\n  transform: translateX(0px);\n  transition: all 0.3s ease;\n  width: fit-content;\n  height: fit-content;\n}\n\n.chat-sonic-chromane-notification span {\n  padding: 0px !important;\n  margin: 0px !important;\n  color: white !important;\n  font-weight: 700 !important;\n  font-family: "Satoshi" !important;\n  font-size: 13px !important;\n  line-height: 20px !important;\n  letter-spacing: 0.2px;\n}\n\n.chat-sonic-chromane-notification svg {\n  width: 24px !important;\n  height: 24px !important;\n  flex: 0 0 24px;\n}\n\n.chat-sonic-chromane-notification.chromane-hide {\n  transform: translateX(calc(100% + 20px));\n}\n\n/* !Chromane More btn */\n.ch-sonic-ad-more-btn {\n  height: 35px;\n  color: #705cf6;\n  padding: 10px 20px 10px 10px;\n  border-radius: 6px;\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  background: transparent;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #705cf6 !important;\n  outline: none !important;\n  transition: all 0.2s ease;\n}\n\n.ch-sonic-ad-more-btn-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #705cf6;\n}\n\n.ch-sonic-ad-more-btn-icon svg {\n  width: 14px;\n  height: 14px;\n}\n\n.ch-sonic-ad-more-btn:hover {\n  background: rgba(26, 115, 232, 0.1);\n}\n\n/* !CUSTOM TOOLTIP */\n\n.ch-sonic-tooltip {\n  color: white;\n  background: rgb(99 102 241);\n  white-space: nowrap;\n  position: fixed;\n  top: 194px;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  z-index: 99999999;\n  border-radius: 6px;\n  padding: 4px 6px;\n  font-family: "Satoshi";\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 10px;\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.3s ease;\n  animation: tooltipkeys 0.5s 1;\n}\n\n.ch-sonic-tooltip svg {\n  position: absolute;\n  bottom: 1px;\n  transform: translate(-50%, 100%) rotate(180deg);\n  left: 50%;\n  width: 11px !important;\n  height: 5px !important;\n}\n\n@keyframes tooltipkeys {\n  0% {\n    opacity: 0;\n  }\n  75% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n /* !SONIC Iframe */\n.ch-sonic-iframe {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 670px;\n  max-height: calc(100vh - 30px);\n  z-index: 99999999999999;\n  visibility: visible;\n  opacity: 1;\n  border: 1px solid #e5e7eb;\n  min-height: 48px;\n  box-shadow: rgb(17 17 26 / 20%) 0px 4px 16px, rgb(17 17 26 / 20%) 0px 8px 24px, rgb(17 17 26 / 20%) 0px 16px 56px;\n  border-radius: 12px;\n  background: white;\n\n  transform: translate(-50%, -50%) scale(1);\n  transition: all 0.3s ease;\n}\n\n.ch-sonic-iframe.chromane-hide {\n  visibility: hidden !important;\n  opacity: 0 !important;\n  transform: translate(-50%, 20%) scale(0) !important;\n}\n\nhtml.chromane-sonic-dark .ch-sonic-iframe {\n  border-color: #1f2937;\n}\n\n/* !Iframe Command */\n#chat-sonic-command-iframe,\n#chromane-sonic-google-home-iframe {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 670px;\n  max-height: calc(100vh - 30px);\n  z-index: 99999999999999;\n  visibility: visible;\n  opacity: 1;\n  border: 1px solid #e5e7eb;\n  min-height: 48px;\n  box-shadow: rgb(17 17 26 / 20%) 0px 4px 16px, rgb(17 17 26 / 20%) 0px 8px 24px, rgb(17 17 26 / 20%) 0px 16px 56px;\n  border-radius: 12px;\n  background: white;\n  transform: translate(-50%, -50%) scale(1);\n  transition: all 0.3s ease;\n}\n\n#chat-sonic-command-iframe.chromane-hide {\n  visibility: hidden !important;\n  opacity: 0 !important;\n  transform: translate(-50%, 20%) scale(0) !important;\n}\n\n#chat-sonic-command-iframe.chat-sonic-unauth {\n  width: 489px;\n}\n\nhtml.chromane-sonic-dark #chat-sonic-command-iframe {\n  border-color: #1f2937;\n}\n\n.chat-sonic-command-iframe-hide {\n  visibility: hidden !important;\n  opacity: 0 !important;\n  transform: translate(-50%, 20%) scale(0) !important;\n}\n\n/* !Invisible paste input */\n.chromane-sonic-input-invisible {\n  position: fixed;\n  /* left: -1000000px; */\n  left: 100px;\n  top: 100px;\n  z-index: 999999999999999999999;\n}\n\n/* !Social IFrame */\n#ch-sonic-social-iframe {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 560px;\n  height: 306px;\n  max-height: calc(100vh - 30px);\n  z-index: 99999999999999;\n  visibility: visible;\n  opacity: 1;\n  border: 1px solid #e5e7eb;\n  box-shadow: rgb(17 17 26 / 20%) 0px 4px 16px, rgb(17 17 26 / 20%) 0px 8px 24px, rgb(17 17 26 / 20%) 0px 16px 56px;\n  border-radius: 12px;\n  background: white;\n  transform: translate(-50%, -50%) scale(1);\n  transition: all 0.3s ease, height 0.1s;\n  background: rgb(17 24 39);\n}\n\n#ch-sonic-social-iframe.chromane-hide {\n  visibility: hidden;\n  opacity: 0;\n  transform: translate(-50%, 20%) scale(0);\n}\n\nhtml.chromane-sonic-dark #ch-sonic-social-iframe {\n  border-color: #1f2937;\n}\n\n/* !Summarise Iframe */\n#chromane-sonic-summarise-iframe {\n  position: fixed;\n  bottom: 0px;\n  right: 30px;\n  width: 504px;\n  height: 444px;\n  transform: translate(0px, 0px);\n  z-index: 99999999;\n  transition: all 0.2s ease;\n  border: none;\n  box-shadow: -8px -11px 68px rgba(0, 0, 0, 0.25);\n}\n\n#chromane-sonic-summarise-iframe.chromane-hide {\n  transform: translate(0px, calc(100% + 20px));\n}\n\n/* !Summarise widget open styles*/\nbody.chromane-sonic-summarise-iframe-open .ch-sonic-email-widget-gen {\n  opacity: 0.6 !important;\n  cursor: default;\n}\n\nbody.chromane-sonic-summarise-iframe-open .ch-sonic-logo-btn img {\n  filter: grayscale(100%);\n  opacity: 0.5 !important;\n}\nbody.chromane-sonic-summarise-iframe-open .ch-sonic-logo-btn {\n  cursor: default;\n}\nbody.chromane-sonic-summarise-iframe-open .ch-sonic-logo-btn:hover {\n  background: none !important;\n  box-shadow: none !important;\n}\n\n/* !Multi Iframe */\n\n.ch-sonic-multi-iframe-overlay.chromane-hide {\n  visibility: hidden;\n  opacity: 0;\n}\n.ch-sonic-multi-iframe-overlay {\n  position: fixed;\n  z-index: 9999999;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  bottom: 0px;\n  background: #111827;\n  visibility: visible;\n  opacity: 0.6;\n  transition: all 0.3s ease;\n}\n/* !Summarise thread iframe  */\n#chromane-sonic-sumtext-iframe[data-page="summarize"] {\n  height: 300px;\n}\n#chromane-sonic-sumtext-iframe[data-page="word_count"] {\n  height: 175px;\n  width: 450px;\n}\n\n/* !Styles When words expired  */\n/* search */\n\nhtml.ch-words-expired #ch-sonic-search-iframe:not(.ch-sonic-search-iframe-manual) {\n  height: 495px !important;\n}\nhtml.ch-words-expired #ch-sonic-search-iframe iframe,\nhtml.ch-words-expired #ch-sonic-youtube-cmd-iframe {\n  border-color: #e5e7eb !important;\n}\nhtml.ch-words-expired #ch-sonic-search-iframe.ch-sonic-search-iframe-close {\n  background: transparent;\n}\n\nhtml.ch-words-expired #ch-sonic-youtube-cmd-iframe {\n  border-radius: 12px;\n}\n\n/* command and other */\nhtml.ch-words-expired .ch-sonic-iframe,\nhtml.ch-words-expired #chromane-sonic-summarise-iframe,\nhtml.ch-words-expired #chat-sonic-command-iframe {\n  width: 400px !important;\n  height: 495px !important;\n  border-color: transparent !important;\n}\n/* !Styles When user unauth  */\n\nhtml.ch-sonic-unauth .ch-sonic-iframe {\n  height: 630px !important;\n  width: 489px !important;\n}\n\nhtml.ch-sonic-unauth #chat-sonic-command-iframe {\n  height: 630px !important;\n}\n'),
                this.handleErrors = e.handleErrors,
                this.manageGlobalState = e.manageGlobalState,
                this.execSetWSGenerete = e.execSetWSGenerete,
                this.extensionId = chrome.runtime.id,
                this.apiIframe = e.apiIframe,
                this.config = e.config,
                e.trackAnalytic && (this.trackAnalytic = e.trackAnalytic)
            }
            initApp(e) {
                this.config = e.config,
                e.trackAnalytic && (this.trackAnalytic = e.trackAnalytic)
            }
            init() {
                this.extensionId = chrome.runtime.id
            }
            setToken(e) {
                this.token = e
            }
        }
        ;
        var k, S;
        !function(e) {
            e.WRITESONIC = "writesonic.com",
            e.TWITTER = "https://twitter.com/",
            e.GMAIL = "https://mail.google.com/",
            e.GOOGLE_SEARCH = "https://www.google.com/search",
            e.GOOGLE_ADS = "https://ads.google.com",
            e.LINKEDIN_ADS = "https://www.linkedin.com/campaignmanager",
            e.YOUTUBE = "https://www.youtube.com/",
            e.YOUTUBE_STUDIO = "https://studio.youtube.com/channel/",
            e.FACEBOOK_ADS = "https://adsmanager.facebook.com/",
            e.FACEBOOK = "https://www.facebook.com/",
            e.INSTAGRAM = "https://www.instagram.com/",
            e.TELEGRAM = "https://web.telegram.org/",
            e.WHATSAPP = "https://web.whatsapp.com/",
            e.BING_SEARCH = "https://www.bing.com/search",
            e.GOOGLE_DOCS = "https://docs.google.com/document",
            e.OUTLOOK = "https://outlook.live.com/mail/",
            e.LINKEDIN = "https://www.linkedin.com/",
            e.HELPSCOUT = "https://secure.helpscout.net/",
            e.WORDPRESS = "https://wordpress.com/post"
        }(k || (k = {})),
        function(e) {
            e.GOOGLE_CAMPAIGN = "/aw/campaigns/new/search/draft",
            e.GOOGLE_OVERVIEW = "/aw/overview",
            e.LINKEDIN_CAMPAIGN = "/campaignmanager",
            e.WORDPRESS = "/wp-admin/",
            e.NOTION = "/*.notion.*/",
            e.GOOGLE_OTHER = "other"
        }(S || (S = {}));
        var I = n(8891)
          , C = n.n(I);
        const A = new class {
            #e;
            #t;
            #n;
            #i;
            #o;
            constructor() {
                this.#e = "G-W40B6C5P30",
                this.#t = "SQvqtLLnQeeCCgIDoGDJzQ",
                this.#n = "1abd997090e0d999e5aaa8d238875b18",
                this.#i = !1,
                this.#o = null
            }
            track(e, t={}) {
                switch (e) {
                case "signup":
                    "native" === t.scope ? T.preSignUpBtnClickSaveStorage(t?.href) : T.preSignUpBtnClick(t?.href);
                    break;
                case "upgrade":
                    "native" === t.scope ? T.upgradeBtnClickSaveStorage(t.email, t.fullName, t.href) : T.upgradeBtnClick(t.email, t.fullName, t.href);
                    break;
                case "gmail_write_btn_click":
                    T.gmailWriteBtnClick(t.toneOfVoice);
                    break;
                case "gmail_stop_btn_click":
                    T.gmailStopBtnClick(t.toneOfVoice);
                    break;
                case "email_summary_genereted":
                    T.gmailSummaryGenereted();
                    break;
                case "email_reply_btn_click":
                    T.gmailReplyToEmailBtnClick(t.toneOfVoice);
                    break;
                case "twitter_write_btn_click":
                    T.twitterWriteBtnClick(t.toneOfVoice);
                    break;
                case "twitter_stop_btn_click":
                    T.twitterStopBtnClick("");
                    break;
                case "twitter_reload_btn_click":
                    T.twitterReloadBtnClick("");
                    break;
                case "twitter_thread_reply":
                    T.twitterReplyToThread();
                    break;
                case "twitter_thread_summary":
                    T.twitterThreadSummary();
                    break;
                case "linkedin_write_btn_click":
                    T.linkedinWritePostBtnClick(t.toneOfVoice);
                    break;
                case "linkedin_write_msg_btn_click":
                    T.linkedinWriteMsgBtnClick(t.toneOfVoice)
                }
            }
            async exec(e) {
                await this.#r(e),
                this.#s(e)
            }
            async #r(e) {
                const t = {
                    name: e.name
                };
                if (e.params && (t.params = e.params),
                !this.#o) {
                    const e = await chrome.storage.local.get(null);
                    if (e.ga_client_id)
                        this.#o = e.ga_client_id;
                    else {
                        const e = l();
                        this.#o = e;
                        const t = {
                            ga_client_id: e
                        };
                        await chrome.storage.local.set(t)
                    }
                }
                fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${this.#e}&api_secret=${this.#t}`, {
                    method: "POST",
                    body: JSON.stringify({
                        client_id: this.#o,
                        events: [t]
                    })
                })
            }
            async #s(e) {
                try {
                    let t = null;
                    e.params && (t = e.params),
                    this.#i || (C().init(this.#n),
                    this.#i = !0),
                    t ? C().track(e.name, t) : C().track(e.name)
                } catch (e) {
                    console.log(e)
                }
            }
        }
          , T = new class {
            async preSignUpBtnClickSaveStorage(e) {
                const t = {
                    name: "CS_CE_Sign_Up_Button_Click",
                    params: {
                        current_url: e,
                        ipAddress: await this.#a() || ""
                    }
                };
                await this.#c(t)
            }
            async preSignUpBtnClick(e) {
                const t = {
                    name: "CS_CE_Sign_Up_Button_Click",
                    params: {
                        current_url: e,
                        ipAddress: await this.#a() || ""
                    }
                };
                await A.exec(t)
            }
            async upgradeBtnClick(e, t, n) {
                const i = {
                    name: "CS_CE_Upgrade_Button_Click",
                    params: {
                        current_url: n,
                        ipAddress: await this.#a() || "",
                        email: e,
                        fullName: t
                    }
                };
                A.exec(i)
            }
            async upgradeBtnClickSaveStorage(e, t, n) {
                const i = {
                    name: "CS_CE_Upgrade_Button_Click",
                    params: {
                        current_url: n,
                        ipAddress: await this.#a() || "",
                        email: e,
                        fullName: t
                    }
                };
                await this.#c(i)
            }
            gmailWriteBtnClick(e) {
                const t = {
                    name: "CS_CE_Gmail_Write_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            gmailStopBtnClick(e) {
                const t = {
                    name: "CS_CE_Gmail_Stop_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            gmailSummaryGenereted() {
                A.exec({
                    name: "CS_CE_Email_Summary_Generated"
                })
            }
            gmailReplyToEmailBtnClick(e) {
                const t = {
                    name: "CS_CE_Reply_to_Email_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            twitterWriteBtnClick(e) {
                const t = {
                    name: "CS_CE_Twitter_Write_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            twitterStopBtnClick(e) {
                const t = {
                    name: "CS_CE_Twitter_Stop_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            twitterReloadBtnClick(e) {
                const t = {
                    name: "CS_CE_Twitter_Reload_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            twitterReplyToThread() {
                A.exec({
                    name: "CS_CE_Reply_to_thread_button_click"
                })
            }
            twitterThreadSummary() {
                A.exec({
                    name: "CS_CE_Thread_Summary_Generated"
                })
            }
            linkedinWritePostBtnClick(e) {
                const t = {
                    name: "CS_CE_LinekdIN_Write_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            linkedinWriteMsgBtnClick(e) {
                const t = {
                    name: "CS_CE_LinekdIN_Write_Message_Button_Click",
                    params: {
                        Tone: e
                    }
                };
                A.exec(t)
            }
            execSetValueFromStorageStack(e) {
                for (const t of e)
                    A.exec(t)
            }
            async #a() {
                try {
                    const e = await fetch("https://api.db-ip.com/v2/free/self");
                    return (await e.json()).ipAddress
                } catch (e) {
                    return null
                }
            }
            async #c(e) {
                const t = await chrome.storage.local.get(null);
                let n = t.analytic_stack;
                t.analytic_stack ? n.push(e) : n = [e];
                const i = {
                    analytic_stack: n
                };
                await chrome.storage.local.set(i)
            }
        }
        ;
        var O;
        !function(e) {
            e.CMD_CLICK = "cmd_click",
            e.REDIRECT_AUTH = "redirect_auth",
            e.CLOSE_THIS_TAB = "close_this_tab",
            e.CREATE_TAB = "create_tab",
            e.CHECK_AUTH = "check_auth",
            e.CMD_SHORT = "cmd_shortcut",
            e.CTX_CLICK_SUM = "CTX_CLICK_SUM",
            e.CTX_CLICK = "CTX_CLICK",
            e.G_ANALYTIC = "G_ANALYTIC",
            e.UPGRADE = "UPGRADE",
            e.GET_TAB_ID = "GET_TAB_ID",
            e.TAB_CHANGE_ACTIVATE = "TAB_CHANGE_ACTIVATE",
            e.INTEG_WS_MSG = "INTEG_WS_MSG",
            e.INTEG_WS_CB = "INTEG_WS_CB",
            e.EXEC_ACTION_CONTENT = "MAKE_ACTION_CONTENT"
        }(O || (O = {}));
        var M = n(5561)
          , R = n.n(M);
        class N {
            widget;
            widgetMode;
            startPos;
            iconLogo;
            onClickOuter;
            constructor(e) {
                this.iconLogo = e.icon,
                this.onMouseMoveWidget = this.onMouseMoveWidget.bind(this),
                this.startPos = {
                    x: 0,
                    y: 0
                },
                this.widgetMode = "visible",
                this.onClickOuter = e.onClick
            }
            async show() {
                this.widget ? this.widget.classList.remove(b.WIDGET_BTN_HIDE) : (await this.#p(),
                await this.#l())
            }
            async hide() {
                this.widget && this.widget.classList.add(b.WIDGET_BTN_HIDE)
            }
            widgetModeController(e) {
                if ("visible" === e && this.show(),
                "only_selected" === e && this.hide(),
                "hide_always" === e && this.hide(),
                !e) {
                    const e = {
                        btn_widget_mode: "only_selected"
                    };
                    chrome.storage.local.set(e)
                }
            }
            isOpen() {
                return !!this.widget && !this.widget.classList.contains(b.WIDGET_BTN_HIDE)
            }
            async #l() {
                if (!document.body)
                    return await x.timeout(500),
                    this.#l();
                document.body.append(this.widget),
                await x.timeout(100),
                this.widget.classList.remove(b.WIDGET_BTN_HIDE)
            }
            async #p() {
                const e = document.createElement("div");
                e.onclick = this.#d.bind(this),
                e.onmousedown = this.#h.bind(this),
                e.onmouseup = this.#u.bind(this),
                e.onmouseleave = this.#_.bind(this),
                e.ondragstart = ()=>!1,
                e.id = v.WIDGET_BTN,
                e.classList.add(b.WIDGET_BTN_HIDE);
                const t = document.createElement("div");
                t.classList.add(b.WIDGET_BTN_IMG),
                t.innerHTML = this.iconLogo;
                const n = document.createElement("div");
                n.classList.add(b.WIDGET_BTN_TEXT);
                const i = {
                    reason: O.CMD_SHORT,
                    type: "toggle-feature"
                }
                  , o = await chrome.runtime.sendMessage(i);
                n.innerHTML = o || "⌘+M";
                const r = document.createElement("div");
                r.classList.add(b.WIDGET_BTN_CLOSE),
                r.innerHTML = R(),
                r.onclick = this.#m.bind(this),
                e.append(t),
                e.append(n),
                e.append(r),
                this.widget = e
            }
            #d() {
                "grab" !== window.getComputedStyle(this.widget).cursor ? this.onClickOuter() : this.widget.style.cursor = "pointer"
            }
            #m(e) {
                e.stopPropagation(),
                e.stopImmediatePropagation(),
                this.hide(),
                chrome.storage.local.set({
                    btn_widget_mode: "hide_always"
                })
            }
            #h(e) {
                try {
                    if (1 !== e.buttons)
                        return;
                    if (e.preventDefault(),
                    !this.startPos)
                        return;
                    this.startPos.x = e.clientX - this.widget.getBoundingClientRect().left,
                    this.startPos.y = e.clientY - this.widget.getBoundingClientRect().top,
                    this.widget.addEventListener("mousemove", this.onMouseMoveWidget)
                } catch (e) {
                    console.log(e)
                }
            }
            #_() {
                this.widget.removeEventListener("mousemove", this.onMouseMoveWidget),
                this.widget.style.cursor = "pointer"
            }
            async #u() {
                this.widget.removeEventListener("mousemove", this.onMouseMoveWidget),
                await x.timeout(10),
                this.widget.style.cursor = "pointer"
            }
            onMouseMoveWidget(e) {
                const t = this.widget;
                let n = e.clientX - this.startPos.x
                  , i = e.clientY - this.startPos.y;
                const o = window.innerWidth
                  , r = window.innerHeight
                  , s = t.getBoundingClientRect();
                n < 10 && (n = 10);
                const a = o - s.width - 20;
                a < n && (n = a),
                i < 10 && (i = 10);
                const c = r - s.height - 10;
                c < i && (i = c),
                t.style.left = n + "px",
                t.style.top = i + "px",
                t.style.cursor = "grab"
            }
        }
        var L = n(9264)
          , D = n.n(L);
        const B = new class {
            activeCmdIframe;
            activeMultiIframe;
            activeSocialIframe;
            activeYoutubeCmdIframe;
            activeAdsIframe;
            activeSearchIframe;
            activeSumTextIframe;
            activeSummarizeIframe;
            activeImproverIframe;
            constructor() {
                this.activeCmdIframe = null,
                this.activeMultiIframe = null,
                this.activeSocialIframe = null,
                this.activeYoutubeCmdIframe = null,
                this.activeSearchIframe = null,
                this.activeSumTextIframe = null,
                this.activeSummarizeIframe = null,
                this.activeImproverIframe = null
            }
            setActiveCmdIframe(e) {
                this.activeCmdIframe = e
            }
            setActiveMultiIframe(e) {
                this.activeMultiIframe = e
            }
            setActiveSocialIframe(e) {
                this.activeSocialIframe = e
            }
            setActiveYoutubeCmdIframe(e) {
                this.activeYoutubeCmdIframe = e
            }
            setActiveAdsIframe(e) {
                this.activeAdsIframe = e
            }
            setActiveSearchIframe(e) {
                this.activeSearchIframe = e
            }
            setActiveSumTextIframe(e) {
                this.activeSumTextIframe = e
            }
            setActiveSummarizeIframe(e) {
                this.activeSummarizeIframe = e
            }
            setActiveImproverIframe(e) {
                this.activeImproverIframe = e
            }
        }
          , G = new class {
            activePageController;
            activeAdsController;
            activeSocialController;
            activeSearchlController;
            activeMessangerController;
            autocomplete;
            autoimprover;
            btnWidgetController;
            constructor() {
                this.activeAdsController = null,
                this.activeSocialController = null,
                this.activePageController = null,
                this.btnWidgetController = null
            }
            appendControllerBtnWidget() {
                const e = new N({
                    icon: D(),
                    onClick: ()=>{
                        B.activeCmdIframe?.setTypeIframeOpened("btn_widget"),
                        B.activeCmdIframe?.toggle()
                    }
                });
                this.btnWidgetController = e
            }
            setActiveAdsController(e) {
                this.activeAdsController = e
            }
            setActiveSocialController(e) {
                this.activeSocialController = e
            }
            setActiveSearchController(e) {
                this.activeSearchlController = e
            }
            setActiveMessangerController(e) {
                this.activeMessangerController = e
            }
            setActivePageController(e) {
                this.activePageController = e
            }
            setAutocomplete(e) {
                this.autocomplete = e
            }
            setAutoimprover(e) {
                this.autoimprover = e
            }
            execOnActivateTab() {
                G.activePageController?.restartObserver()
            }
            execOnBlurTab() {
                G.activePageController?.cancelObserver()
            }
        }
          , P = new class {
            isAuth;
            storage;
            integration;
            subIntegration;
            extensionId;
            isWordsExpired;
            isInsideIframe;
            isWSGenerete;
            constructor() {
                this.isAuth = !1,
                this.storage = {},
                this.integration = "other",
                this.subIntegration = "other",
                this.isWordsExpired = !1,
                this.isInsideIframe = !1,
                this.isWSGenerete = !1
            }
            async initGlobal(e) {
                this.addErrorCatcher(),
                this.extensionId = chrome.runtime.id;
                const t = await this.exec_set_storage();
                if ("main" === e && t.analytic_stack && t.analytic_stack.length > 0) {
                    T.execSetValueFromStorageStack(t.analytic_stack);
                    const e = {
                        analytic_stack: []
                    };
                    chrome.storage.local.set(e)
                }
                this.execSetItegration(),
                window === window.top ? this.isInsideIframe = !1 : this.isInsideIframe = !0
            }
            async initGlobalAllIframes() {
                this.addErrorCatcher(),
                this.extensionId = chrome.runtime?.id
            }
            async exec_set_storage(e=null) {
                return e || (e = await chrome.storage.local.get(null)),
                E.setToken(e.sonic_token || null),
                e.sonic_token && (this.isAuth = !0),
                e.trigger_mode || (e.trigger_mode = "manually"),
                this.storage = e,
                e
            }
            execSetItegration() {
                window.location.href.includes(k.WRITESONIC) && (this.integration = "writesonic"),
                window.location.href.startsWith(k.TWITTER) && (this.integration = "twitter"),
                window.location.href.startsWith(k.GMAIL) && (this.integration = "gmail"),
                window.location.href.startsWith(k.LINKEDIN) && (this.integration = "linkedin"),
                window.location.href.startsWith(k.GOOGLE_ADS) && (this.integration = "google_ads"),
                window.location.href.startsWith(k.LINKEDIN_ADS) && (this.integration = "linkedin_ads"),
                window.location.href.startsWith(k.FACEBOOK_ADS) && (this.integration = "facebook_ads"),
                window.location.href.startsWith(k.FACEBOOK) && (this.integration = "facebook"),
                window.location.href.startsWith(k.INSTAGRAM) && (this.integration = "instagram"),
                window.location.href.startsWith(k.TELEGRAM) && (this.integration = "telegram"),
                window.location.href.startsWith(k.WHATSAPP) && (this.integration = "whatsapp"),
                window.location.href.startsWith(k.YOUTUBE) && (this.integration = "youtube"),
                window.location.href.startsWith(k.YOUTUBE_STUDIO) && (this.integration = "youtube_studio"),
                window.location.href.startsWith(k.HELPSCOUT) && (this.integration = "helpscout"),
                window.location.href.startsWith(k.GOOGLE_SEARCH) && (this.integration = "google_search"),
                window.location.href.startsWith(k.BING_SEARCH) && (this.integration = "bing_search"),
                window.location.href.startsWith(k.WORDPRESS) && (this.integration = "wordpress")
            }
            addErrorCatcher() {
                window.onerror = (e,t,n,i,o)=>{
                    console.log("Catched the error", e, t, n, i, o)
                }
            }
            execSetIsWordsExpired(e) {
                e ? document.documentElement.classList.add(b.CHROMANE_WORDS_EXPIRED) : document.documentElement.classList.remove(b.CHROMANE_WORDS_EXPIRED),
                this.isWordsExpired = e
            }
            execSetIsAuth(e) {
                e ? document.documentElement.classList.remove(b.CHROMANE_UNAUTH) : document.documentElement.classList.add(b.CHROMANE_UNAUTH),
                this.isAuth = e
            }
            manageIsWSGenerete(e) {
                switch (e.status) {
                case "end":
                case "error":
                case "force_closed":
                    return void this.execSetIsWSGenerete(!1)
                }
                this.isWSGenerete || (this.isWSGenerete = !0)
            }
            execSetIsWSGenerete(e) {
                e && G?.autocomplete?.isInitialized && !G.autocomplete?.isGenerete && (G.autocomplete?.arrow?.hide(),
                G.autocomplete?.menu?.hide()),
                this.isWSGenerete = e
            }
        }
          , q = P;
        var U = n(5910)
          , W = n.n(U)
          , j = n(3915)
          , H = n.n(j);
        const F = new class {
            wrap;
            staticNotification;
            constructor() {}
            async show(e) {
                this.#f();
                const t = this.#g(e);
                t.classList.add(b.CHROMANE_HIDE),
                this.wrap.append(t),
                await x.timeout(10),
                t.classList.remove(b.CHROMANE_HIDE),
                await x.timeout(4e3),
                t.classList.add(b.CHROMANE_HIDE),
                await x.timeout(400),
                t.remove()
            }
            async showStatic(e) {
                this.#f();
                const t = this.#g(e);
                this.staticNotification = t,
                t.classList.add(b.CHROMANE_HIDE),
                this.wrap.append(t),
                await x.timeout(10),
                t.classList.remove(b.CHROMANE_HIDE)
            }
            #g(e) {
                const t = document.createElement("div");
                let n;
                t.classList.add(b.NOTIFICATION),
                n = "error" === e.type ? H() : W();
                const i = document.createElement("span");
                return i.innerHTML = e.text,
                t.innerHTML = n,
                t.append(i),
                t
            }
            #f() {
                if (this.wrap)
                    return;
                const e = document.createElement("div");
                e.classList.add(b.NOTIFICATION_WRAP),
                this.wrap = e,
                document.body.append(e)
            }
            async hideStatic() {
                if (!this.staticNotification)
                    return;
                const e = this.staticNotification;
                this.staticNotification = null,
                e.classList.add(b.CHROMANE_HIDE),
                await x.timeout(400),
                e.remove()
            }
        }
          , z = new class {
            timeout(e) {
                return new Promise((t=>{
                    setTimeout((()=>{
                        t()
                    }
                    ), e)
                }
                ))
            }
            convertResponseItemToHistory(e) {
                const t = []
                  , n = {
                    id: l(),
                    is_sent: !0,
                    message: e.question
                }
                  , i = {
                    id: l(),
                    is_sent: !1,
                    message: e.response
                };
                return e.likeStatus && (i.like_status = e.likeStatus),
                t.push(n),
                t.push(i),
                t
            }
            async checkIsAllGoogleSubMenu(e=10) {
                if (!e)
                    return !1;
                const t = document.querySelector(u.GOOGLE_CURRENT_PAGE_FLAG);
                let n = null;
                return t || (n = document.querySelector(u.GOOGLE_USA_BAR)),
                t === t?.parentElement?.firstElementChild || !!n || (await this.timeout(500),
                await this.checkIsAllGoogleSubMenu(e - 1))
            }
            async execGetBigTextbox(e=5) {
                if (!e)
                    return null;
                const t = document.querySelectorAll(m.GMAIL_TEXT_BOX);
                if (0 === t.length)
                    return await this.timeout(200),
                    await this.execGetBigTextbox(e - 1);
                let n = null;
                for (const e of t)
                    if (!e.closest(m.GMAIL_COMPOSE_WINDOW)) {
                        n = e;
                        break
                    }
                return n || (await this.timeout(200),
                await this.execGetBigTextbox(e - 1))
            }
            injectStyle(e, t) {
                const n = e.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css",
                n.href = z.wrapChromeRuntimeGetUrl(t),
                e.documentElement.append(n)
            }
            wrapChromeRuntimeGetUrl(e, t=q.extensionId) {
                return `chrome-extension://${t}${e}`
            }
            manageSonicInfoState() {
                return !q.isWSGenerete && (q.storage.sonic_token && !q.isWordsExpired || (B.activeCmdIframe?.show(),
                !1))
            }
            async reportBugToFB(e) {
                const t = {
                    interDesc: e.interDesc,
                    error: e.error,
                    htmlPage: document?.body?.outerHTML || "not provided",
                    outer: e.outer
                };
                await this.timeout(500),
                B.activeCmdIframe?.isApiInjected() ? B.activeCmdIframe?.sendMessageToIframe("fb_bug_report", t) : G.activeSocialController?.socialIframe?.getIsApiInjected() ? G.activeSocialController?.socialIframe?.sendMessageToIframe("fb_bug_report", t) : B.activeSearchIframe?.isApiInjected() && B.activeSearchIframe?.sendMessageToIframe("fb_bug_report", t)
            }
            async saveTestDataToFB(e, t) {
                const n = {
                    data: e,
                    path: t
                };
                B.activeCmdIframe?.isApiInjected() || (B.activeCmdIframe?.show(),
                await (B.activeCmdIframe?.waitApiInjected())),
                B.activeCmdIframe?.sendMessageToIframe("fb_save_test_data", n)
            }
            countWords(e) {
                return e.trim().split(" ").length
            }
            countLetters(e) {
                return e.trim().split(" ").reduce(((e,t)=>e + t.length), 0)
            }
            countWordsAndLetters(e) {
                return [this.countWords(e), this.countLetters(e)]
            }
            handleErrors(e) {
                const t = e.code
                  , n = {
                    text: "Something went wrong!!!",
                    type: "error"
                };
                if ("AbortError" !== e.name)
                    if ("unauthorized" !== t)
                        if ("no_words" !== t) {
                            if ("handled" === t)
                                return n.text = e.message,
                                void F.show(n);
                            "string" == typeof e.message && (n.text = e.message),
                            F.show(n)
                        } else {
                            if (!q.isWordsExpired) {
                                const e = {
                                    type: "error",
                                    text: "You used all free credits. Please upgrade your plan to keep genereting"
                                };
                                F.show(e)
                            }
                            q.execSetIsWordsExpired(!0)
                        }
                    else {
                        const e = {
                            sonic_token: null,
                            action_type: "unauth"
                        };
                        chrome.storage.local.set(e)
                    }
            }
            async getActiveTabInfo() {
                const e = {
                    url: null,
                    tabId: null
                };
                try {
                    const t = await chrome.tabs.query({
                        active: !0,
                        currentWindow: !0
                    });
                    return 0 === t?.length ? null : (e.url = t[0]?.url,
                    e.tabId = t[0]?.id,
                    e)
                } catch (t) {
                    return console.log(t, "error"),
                    e
                }
            }
            isObjectEqual(e, t) {
                return JSON.stringify(e) === JSON.stringify(t)
            }
            setCaretAndFocus(e) {
                e && ((e = e.parentElement).focus(),
                window.getSelection().selectAllChildren(e),
                window.getSelection().collapseToEnd())
            }
            selectAllTextInContenteditable(e) {
                let t = window.getSelection()
                  , n = document.createRange();
                n.selectNodeContents(e),
                t.removeAllRanges(),
                t.addRange(n)
            }
            async dispatchPasteEvent(e, t) {
                e.focus();
                const n = new DataTransfer;
                n.setData("text/plain", t);
                const i = new ClipboardEvent("paste",{
                    clipboardData: n,
                    bubbles: !0
                });
                e.dispatchEvent(i)
            }
            async clearTextBox({box: e, textLength: t=e.textContent.length, timeout: n=5}) {
                e.focus();
                const i = window.getSelection()
                  , o = document.createRange();
                o.selectNodeContents(e),
                i.removeAllRanges(),
                i.addRange(o),
                await z.timeout(n);
                const r = new KeyboardEvent("keydown",{
                    bubbles: !0,
                    code: "Backspace",
                    key: "Backspace",
                    keyCode: 8,
                    which: 8
                })
                  , s = new KeyboardEvent("keydown",{
                    bubbles: !0,
                    code: "Delete",
                    key: "Delete",
                    keyCode: 46,
                    which: 46,
                    ctrlKey: !0
                });
                e.dispatchEvent(r),
                e.dispatchEvent(s);
                const a = e.textContent.trim();
                return a && a.length !== t ? (await z.timeout(n),
                await this.clearTextBox({
                    box: e,
                    textLength: a.length
                })) : void 0
            }
            debounce(e, t=300) {
                let n;
                return (...i)=>{
                    clearTimeout(n),
                    n = setTimeout((()=>{
                        e.apply(this, i)
                    }
                    ), t)
                }
            }
        }
          , K = z;
        class X {
            override_xhr(e) {
                if (!window.chromane_xhr_overriden_flag) {
                    window.chromane_xhr_overriden_flag = !0;
                    var t = XMLHttpRequest.prototype.open
                      , n = window.XMLHttpRequest.prototype.setRequestHeader;
                    window.XMLHttpRequest.prototype.setRequestHeader = function(e, t) {
                        return this.chromane_request_headers || (this.chromane_request_headers = {}),
                        this.chromane_request_headers[e] = t,
                        n.apply(this, arguments)
                    }
                    ,
                    window.XMLHttpRequest.prototype.open = function(n, i) {
                        return this.addEventListener("load", (t=>{
                            (4 === this.readyState && 200 === this.status && "text" === this.responseType || "" === this.responseType) && e({
                                name: "xhr_response_captured",
                                data: {
                                    status: this.status,
                                    response_text: this.responseText,
                                    request_url: i,
                                    response_url: this.responseURL,
                                    request_headers: this.chromane_request_headers
                                }
                            })
                        }
                        )),
                        t.apply(this, arguments)
                    }
                }
            }
            override_fetch(e) {
                if (!window.chromane_fetch_overriden_flag) {
                    window.chromane_fetch_overriden_flag = !0;
                    var t = window.fetch;
                    window.fetch = async function() {
                        if (arguments[0]instanceof Request)
                            var n = (i = arguments[0]).url;
                        else {
                            var i = arguments[1];
                            n = arguments[0]
                        }
                        if (i instanceof Request)
                            var o = i.clone()
                              , r = await o.text();
                        else
                            r = "";
                        var s = await t.apply(window, arguments)
                          , a = s.clone()
                          , c = await a.text()
                          , p = {
                            name: "fetch_response_captured",
                            data: {
                                status: a.status,
                                response_text: c,
                                request_url: n,
                                request_text: r
                            }
                        };
                        if (arguments[1] && arguments[1].headers)
                            if (arguments[1].headers instanceof Headers)
                                for (var l of (p.data.response_headers = {},
                                arguments[1].headers.entries()))
                                    p.data.response_headers[l[0]] = l[1];
                            else
                                p.data.response_headers = arguments[1].headers;
                        return arguments[1] && arguments[1].body && (p.data.response_body = arguments[1].body),
                        e(p),
                        s
                    }
                }
            }
            overrideKeyUpPropagation(e) {
                if (window.chromane_keyboard_stop_propagation_override)
                    return;
                window.chromane_keyboard_stop_propagation_override = !0;
                const t = window.Event.prototype.stopPropagation;
                window.Event.prototype.stopPropagation = function() {
                    return this instanceof KeyboardEvent && e(this),
                    t.apply(this, arguments)
                }
            }
        }
        new class {
            constructor() {
                this.#y()
            }
            async #y() {
                const e = ["ControlLeft", "ControlRight", "AltLeft", "AltRight", "ShiftRight", "ShiftLeft"]
                  , n = t
                  , i = await n.create_window_wrap(window, window.parent)
                  , o = K.debounce((t=>{
                    if (e.includes(t.code))
                        return;
                    const n = {
                        altKey: t.altKey,
                        code: t.code,
                        ctrlKey: t.ctrlKey,
                        key: t.key,
                        keyCode: t.keyCode,
                        location: t.location,
                        metaKey: t.metaKey,
                        repeat: t.repeat,
                        shiftKey: t.shiftKey,
                        which: t.which
                    };
                    i.exec("inject_improver_keyboard", n)
                }
                ), 200);
                (new X).overrideKeyUpPropagation(o)
            }
        }
    }
    )()
}
)();
