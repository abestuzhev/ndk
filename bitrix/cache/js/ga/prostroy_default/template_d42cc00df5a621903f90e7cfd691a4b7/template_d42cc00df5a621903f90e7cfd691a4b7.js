;/* Start:"a:4:{s:4:"full";s:82:"/bitrix/templates/prostroy_default/assets/lib/jquery-1.11.2.min.js?147567488995935";s:6:"source";s:66:"/bitrix/templates/prostroy_default/assets/lib/jquery-1.11.2.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.2", m = function (a, b) {
        return new m.fn.init(a, b)
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return m.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === m.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)for (b in a)return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g)return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)a[e++] = b[d++];
            if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, eb = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function (b) {
                return b = +b, ib(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = gb.support = {}, f = gb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)return lb(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function (a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = gb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: ib(function (a) {
                    return function (b) {
                        return gb(a, b).length > 0
                    }
                }), contains: ib(function (a) {
                    return a = a.replace(cb, db), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ib(function (a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: ob(function () {
                    return [0]
                }), last: ob(function (a, b) {
                    return [b - 1]
                }), eq: ob(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: ob(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: ob(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: ob(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = mb(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = nb(b);
        function qb() {
        }

        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function tb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)gb(a, b[d], c);
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
                return a === b
            }, h, !0), l = sb(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [sb(tb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                }
                m.push(c)
            }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ib(f) : f
        }

        return h = gb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function (a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b))return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b))return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }

    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0
            }));
            for (b = 0; e > b; b++)m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        }, is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return m.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return m.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return m.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return m.sibling(a.firstChild)
        }, contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function () {
                return h && m.each(arguments, function (a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            }, has: function (a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], e = 0, this
            }, disable: function () {
                return h = i = c = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, c || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? m.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }

    m.ready.promise = function (b) {
        if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(m.ready); else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k))break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))return
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    m.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                    empty: m.Callbacks("once memory").add(function () {
                        m._removeData(a, b + "queue"), m._removeData(a, c)
                    })
                })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(m(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = y.createElement("div");
        for (b in{
            submit: !0,
            change: !0,
            focusin: !0
        })c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return !0
    }

    function bb() {
        return !1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }

    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                e.length && g.push({elem: i, handlers: e})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[m.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== cb() && this.focus)try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === cb() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a)this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = bb; else if (!d)return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)d[g] && Bb(e, d[g]);
            if (b)if (c)for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)Ab(e, d[g]); else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--)h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild)h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                e = 0;
                while (f = h[e++])ob.test(f.type || "") && c.push(f)
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        }, html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }

    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                }, boxSizingReliable: function () {
                    return null == f && i(), f
                }, pixelPosition: function () {
                    return null == e && i(), e
                }, reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sb = {letterSpacing: "0", fontWeight: "400"}, Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a)return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--)if (b = Tb[e] + c, b in a)return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
                    i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Jb, [a, "marginRight"]) : void 0
    }), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Vb(this, !0)
        }, hide: function () {
            return Vb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }

    m.Tween = Zb, Zb.prototype = {
        constructor: Zb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
        }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d])continue;
                q = !0
            }
            o[d] = r && r[d] || m.style(a, d)
        } else j = void 0;
        if (m.isEmptyObject(o))"inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)m.style(a, b, o[b])
            });
            for (d in o)g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)if (d = dc[f].call(j, a, k, j.opts))return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    m.Animation = m.extend(kc, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $b = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null
    }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }), qc || (mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: mc.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), m.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b)return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)for (g in h)if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? f : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a))return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== m.type(b))d(a, b); else for (e in b)Vc(a + "[" + e + "]", b[e], c, d)
    }

    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {name: b.name, value: a.replace(Sc, "\r\n")}
                }) : {name: b.name, value: c.replace(Sc, "\r\n")}
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xc)Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText
                            } catch (k) {
                                i = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    m.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd)return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
                return a || cd
            })
        }
    }), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height", Width: "width"}, function (a, b) {
        m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});

/* End */
;
;/* Start:"a:4:{s:4:"full";s:85:"/bitrix/templates/prostroy_default/assets/lib/jquery.mousewheel.min.js?14756748892737";s:6:"source";s:70:"/bitrix/templates/prostroy_default/assets/lib/jquery.mousewheel.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }

    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.11", setup: function () {
            if (this.addEventListener)for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (b) {
            var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
        }, getPageHeight: function (b) {
            return a(b).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:77:"/bitrix/templates/prostroy_default/assets/lib/jquery.cookie.js?14756748893121";s:6:"source";s:62:"/bitrix/templates/prostroy_default/assets/lib/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {
        }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, {expires: -1}));
        return !$.cookie(key);
    };

}));

/* End */
;
;/* Start:"a:4:{s:4:"full";s:86:"/bitrix/templates/prostroy_default/assets/lib/jquery.maskedinput.min.js?14756748894274";s:6:"source";s:71:"/bitrix/templates/prostroy_default/assets/lib/jquery.maskedinput.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.0
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function (a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a))return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)if (j[c]) {
                            if (!(n > d && j[c].test(C[d])))break;
                            C[c] = C[d], C[d] = p(d), d = q(d)
                        }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)if (j[b]) {
                        if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e)))break;
                        c = e
                    }
                }

                function u() {
                    var a = B.val(), b = B.caret();
                    if (a.length < o.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--;
                        if (0 === b.begin)for (; b.begin < l && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function () {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0, d = 0; n > b; b++)if (j[b]) {
                        for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) {
                            C[b] = c, f = b;
                            break
                        }
                        if (d > e.length) {
                            y(b + 1, n);
                            break
                        }
                    } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }

                var B = a(this), C = a.map(c.split(""), function (a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0
                }), D = C.join(""), E = B.val();
                B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function () {
                            z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:85:"/bitrix/templates/prostroy_default/assets/lib/owl/owl.carousel.min.js?147567488940401";s:6:"source";s:69:"/bitrix/templates/prostroy_default/assets/lib/owl/owl.carousel.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d)return {x: a.touches[0].pageX, y: a.touches[0].pageY};
        if (a.touches === d) {
            if (a.pageX !== d)return {x: a.pageX, y: a.pageY};
            if (a.pageX === d)return {x: a.clientX, y: a.clientY}
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"), f = a;
        for (b in f)if (d = f[b], "undefined" != typeof e.style[d])return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }

    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"], run: function (a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var a = this._clones, b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var a, b, c = this._clones, d = this._items, e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++)e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var a, b, c, d = this.settings.rtl ? 1 : -1, e = (this.width() / this.settings.items).toFixed(3), f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(e), e = {width: this.settings.autoWidth ? "auto" : d - this.settings.margin}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
                    return a > 1
                }).length > 0)for (b = 0, c = this._coordinates.length; c > b; b++)e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e); else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++)a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function () {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e)return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function () {
        if (0 === this._items.length)return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function () {
        this.e._onDragStart = a.proxy(function (a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function (a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function (a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function (a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function (a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function (a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function (a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function () {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function (d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch)return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d)return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function (a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function (b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function (c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function () {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function (b) {
        var c = -1, d = 30, e = this.width(), f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function (b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({left: b + "px"}) : this.$stage.animate({left: b}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function (a) {
        if (a === d)return this._current;
        if (0 === this._items.length)return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function (a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function (a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = 0, f = this.settings;
        if (a)return this._items.length - 1;
        if (!f.loop && f.center)b = this._items.length - 1; else if (f.loop || f.center)if (f.loop || f.center)b = this._items.length + f.items; else {
            if (!f.autoWidth && !f.merge)throw"Can not detect maximum absolute position.";
            for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);)b = ++e
        } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function (a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()), f = this.current(), g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1, j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function (a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function () {
        var d;
        if (this.options.responsiveBaseElement !== b)d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth)d = b.innerWidth; else {
            if (!c.documentElement || !c.documentElement.clientWidth)throw"Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function () {
        var b = a.proxy(function (b, c) {
            return a.proxy(function (a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function (a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function () {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }

        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function (g, h) {
            e = a(h), f = new Image, f.onload = function () {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function () {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins)this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
        }, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : c > a;
            case">":
                return d ? c > a : a > c;
            case">=":
                return d ? c >= a : a >= c;
            case"<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d) {
        var e = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, f = a.camelCase(a.grep(["on", b, d], function (a) {
            return a
        }).join("-").toLowerCase()), g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, e, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function () {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function (b) {
        return this.each(function () {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    var c = function (b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
                    this.load(b)
                }, this); e++ < d;)this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {lazyLoad: !1}, c.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": "url(" + g + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document), function (a) {
    var b = function (c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, b.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function (a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, d.prototype.fetch = function (a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube", d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g)throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)c = "youtube"; else {
            if (!(d[3].indexOf("vimeo") > -1))throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
        };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function (b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement), f = e.closest("." + this._core.settings.itemClass), g = this._videos[f.attr("data-video")], h = g.width || "100%", i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function () {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                this.swapping = "translated" == a.type
            }, this), "translate.owl.carousel": a.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))"function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
    var d = function (b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
                this.autoplay()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function () {
                this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function () {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function () {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function () {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers)this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document), function (a) {
    "use strict";
    var b = function (c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": a.proxy(function (b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "change.owl.carousel": a.proxy(function (a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(), c = this._core.maximum(), d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                "position" == a.property.name && this.draw()
            }, this), "refreshed.owl.carousel": a.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function () {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides)this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers)this.$element.off(a, this._handlers[a]);
        for (b in this._controls)this._controls[b].remove();
        for (d in this.overides)this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))"function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function () {
        var a, b, c, d = this._core.settings, e = this._core.clones().length / 2, f = e + this._core.items().length, g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
            start: a - e,
            end: a - e + g - 1
        }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function () {
        var b, c, d = "", e = this._core.settings, f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++)d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function (a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function (b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document), function (a, b) {
    "use strict";
    var c = function (d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function () {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
            var a = b.location.hash.substring(1), c = this._core.$stage.children(), d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {URLhashListener: !1}, c.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))"function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);
/* End */
;
;/* Start:"a:4:{s:4:"full";s:99:"/bitrix/templates/prostroy_default/assets/lib/jscrollpane/jquery.jscrollpane.min.js?147567488914107";s:6:"source";s:83:"/bitrix/templates/prostroy_default/assets/lib/jscrollpane/jquery.jscrollpane.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jScrollPane - v2.0.17 - 2013-08-17
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!function (a, b, c) {
    a.fn.jScrollPane = function (d) {
        function e(d, e) {
            function f(b) {
                var e, h, j, l, m, n, q = !1, r = !1;
                if (P = b, Q === c)m = d.scrollTop(), n = d.scrollLeft(), d.css({
                    overflow: "hidden",
                    padding: 0
                }), R = d.innerWidth() + tb, S = d.innerHeight(), d.width(R), Q = a('<div class="jspPane" />').css("padding", sb).append(d.children()), T = a('<div class="jspContainer" />').css({
                    width: R + "px",
                    height: S + "px"
                }).append(Q).appendTo(d); else {
                    if (d.css("width", ""), q = P.stickToBottom && C(), r = P.stickToRight && D(), l = d.innerWidth() + tb != R || d.outerHeight() != S, l && (R = d.innerWidth() + tb, S = d.innerHeight(), T.css({
                            width: R + "px",
                            height: S + "px"
                        })), !l && ub == U && Q.outerHeight() == V)return d.width(R), void 0;
                    ub = U, Q.css("width", ""), d.width(R), T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                Q.css("overflow", "auto"), U = b.contentWidth ? b.contentWidth : Q[0].scrollWidth, V = Q[0].scrollHeight, Q.css("overflow", ""), W = U / R, X = V / S, Y = X > 1, Z = W > 1, Z || Y ? (d.addClass("jspScrollable"), e = P.maintainPosition && (ab || db), e && (h = A(), j = B()), g(), i(), k(), e && (y(r ? U - R : h, !1), x(q ? V - S : j, !1)), H(), E(), N(), P.enableKeyboardNavigation && J(), P.clickOnTrack && o(), L(), P.hijackInternalLinks && M()) : (d.removeClass("jspScrollable"), Q.css({
                    top: 0,
                    left: 0,
                    width: T.width() - tb
                }), F(), I(), K(), p()), P.autoReinitialise && !rb ? rb = setInterval(function () {
                    f(P)
                }, P.autoReinitialiseDelay) : !P.autoReinitialise && rb && clearInterval(rb), m && d.scrollTop(0) && x(m, !1), n && d.scrollLeft(0) && y(n, !1), d.trigger("jsp-initialised", [Z || Y])
            }

            function g() {
                Y && (T.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), eb = T.find(">.jspVerticalBar"), fb = eb.find(">.jspTrack"), $ = fb.find(">.jspDrag"), P.showArrows && (jb = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", m(0, -1)).bind("click.jsp", G), kb = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", m(0, 1)).bind("click.jsp", G), P.arrowScrollOnHover && (jb.bind("mouseover.jsp", m(0, -1, jb)), kb.bind("mouseover.jsp", m(0, 1, kb))), l(fb, P.verticalArrowPositions, jb, kb)), hb = S, T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    hb -= a(this).outerHeight()
                }), $.hover(function () {
                    $.addClass("jspHover")
                }, function () {
                    $.removeClass("jspHover")
                }).bind("mousedown.jsp", function (b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", G), $.addClass("jspActive");
                    var c = b.pageY - $.position().top;
                    return a("html").bind("mousemove.jsp", function (a) {
                        r(a.pageY - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", q), !1
                }), h())
            }

            function h() {
                fb.height(hb + "px"), ab = 0, gb = P.verticalGutter + fb.outerWidth(), Q.width(R - gb - tb);
                try {
                    0 === eb.position().left && Q.css("margin-left", gb + "px")
                } catch (a) {
                }
            }

            function i() {
                Z && (T.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), lb = T.find(">.jspHorizontalBar"), mb = lb.find(">.jspTrack"), bb = mb.find(">.jspDrag"), P.showArrows && (pb = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", m(-1, 0)).bind("click.jsp", G), qb = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", m(1, 0)).bind("click.jsp", G), P.arrowScrollOnHover && (pb.bind("mouseover.jsp", m(-1, 0, pb)), qb.bind("mouseover.jsp", m(1, 0, qb))), l(mb, P.horizontalArrowPositions, pb, qb)), bb.hover(function () {
                    bb.addClass("jspHover")
                }, function () {
                    bb.removeClass("jspHover")
                }).bind("mousedown.jsp", function (b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", G), bb.addClass("jspActive");
                    var c = b.pageX - bb.position().left;
                    return a("html").bind("mousemove.jsp", function (a) {
                        t(a.pageX - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", q), !1
                }), nb = T.innerWidth(), j())
            }

            function j() {
                T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    nb -= a(this).outerWidth()
                }), mb.width(nb + "px"), db = 0
            }

            function k() {
                if (Z && Y) {
                    var b = mb.outerHeight(), c = fb.outerWidth();
                    hb -= b, a(lb).find(">.jspCap:visible,>.jspArrow").each(function () {
                        nb += a(this).outerWidth()
                    }), nb -= c, S -= c, R -= b, mb.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), h(), j()
                }
                Z && Q.width(T.outerWidth() - tb + "px"), V = Q.outerHeight(), X = V / S, Z && (ob = Math.ceil(1 / W * nb), ob > P.horizontalDragMaxWidth ? ob = P.horizontalDragMaxWidth : ob < P.horizontalDragMinWidth && (ob = P.horizontalDragMinWidth), bb.width(ob + "px"), cb = nb - ob, u(db)), Y && (ib = Math.ceil(1 / X * hb), ib > P.verticalDragMaxHeight ? ib = P.verticalDragMaxHeight : ib < P.verticalDragMinHeight && (ib = P.verticalDragMinHeight), $.height(ib + "px"), _ = hb - ib, s(ab))
            }

            function l(a, b, c, d) {
                var e, f = "before", g = "after";
                "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d)
            }

            function m(a, b, c) {
                return function () {
                    return n(a, b, this, c), this.blur(), !1
                }
            }

            function n(b, c, d, e) {
                d = a(d).addClass("jspActive");
                var f, g, h = !0, i = function () {
                    0 !== b && vb.scrollByX(b * P.arrowButtonSpeed), 0 !== c && vb.scrollByY(c * P.arrowButtonSpeed), g = setTimeout(i, h ? P.initialDelay : P.arrowRepeatFreq), h = !1
                };
                i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function () {
                    d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f)
                })
            }

            function o() {
                p(), Y && fb.bind("mousedown.jsp", function (b) {
                    if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                        var d, e = a(this), f = e.offset(), g = b.pageY - f.top - ab, h = !0, i = function () {
                            var a = e.offset(), c = b.pageY - a.top - ib / 2, f = S * P.scrollPagePercent, k = _ * f / (V - S);
                            if (0 > g)ab - k > c ? vb.scrollByY(-f) : r(c); else {
                                if (!(g > 0))return j(), void 0;
                                c > ab + k ? vb.scrollByY(f) : r(c)
                            }
                            d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1
                        }, j = function () {
                            d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j)
                        };
                        return i(), a(document).bind("mouseup.jsp", j), !1
                    }
                }), Z && mb.bind("mousedown.jsp", function (b) {
                    if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                        var d, e = a(this), f = e.offset(), g = b.pageX - f.left - db, h = !0, i = function () {
                            var a = e.offset(), c = b.pageX - a.left - ob / 2, f = R * P.scrollPagePercent, k = cb * f / (U - R);
                            if (0 > g)db - k > c ? vb.scrollByX(-f) : t(c); else {
                                if (!(g > 0))return j(), void 0;
                                c > db + k ? vb.scrollByX(f) : t(c)
                            }
                            d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1
                        }, j = function () {
                            d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j)
                        };
                        return i(), a(document).bind("mouseup.jsp", j), !1
                    }
                })
            }

            function p() {
                mb && mb.unbind("mousedown.jsp"), fb && fb.unbind("mousedown.jsp")
            }

            function q() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), $ && $.removeClass("jspActive"), bb && bb.removeClass("jspActive")
            }

            function r(a, b) {
                Y && (0 > a ? a = 0 : a > _ && (a = _), b === c && (b = P.animateScroll), b ? vb.animate($, "top", a, s) : ($.css("top", a), s(a)))
            }

            function s(a) {
                a === c && (a = $.position().top), T.scrollTop(0), ab = a;
                var b = 0 === ab, e = ab == _, f = a / _, g = -f * (V - S);
                (wb != b || yb != e) && (wb = b, yb = e, d.trigger("jsp-arrow-change", [wb, yb, xb, zb])), v(b, e), Q.css("top", g), d.trigger("jsp-scroll-y", [-g, b, e]).trigger("scroll")
            }

            function t(a, b) {
                Z && (0 > a ? a = 0 : a > cb && (a = cb), b === c && (b = P.animateScroll), b ? vb.animate(bb, "left", a, u) : (bb.css("left", a), u(a)))
            }

            function u(a) {
                a === c && (a = bb.position().left), T.scrollTop(0), db = a;
                var b = 0 === db, e = db == cb, f = a / cb, g = -f * (U - R);
                (xb != b || zb != e) && (xb = b, zb = e, d.trigger("jsp-arrow-change", [wb, yb, xb, zb])), w(b, e), Q.css("left", g), d.trigger("jsp-scroll-x", [-g, b, e]).trigger("scroll")
            }

            function v(a, b) {
                P.showArrows && (jb[a ? "addClass" : "removeClass"]("jspDisabled"), kb[b ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function w(a, b) {
                P.showArrows && (pb[a ? "addClass" : "removeClass"]("jspDisabled"), qb[b ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function x(a, b) {
                var c = a / (V - S);
                r(c * _, b)
            }

            function y(a, b) {
                var c = a / (U - R);
                t(c * cb, b)
            }

            function z(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n = 0, o = 0;
                try {
                    e = a(b)
                } catch (p) {
                    return
                }
                for (f = e.outerHeight(), g = e.outerWidth(), T.scrollTop(0), T.scrollLeft(0); !e.is(".jspPane");)if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName))return;
                h = B(), j = h + S, h > n || c ? l = n - P.verticalGutter : n + f > j && (l = n - S + f + P.verticalGutter), isNaN(l) || x(l, d), i = A(), k = i + R, i > o || c ? m = o - P.horizontalGutter : o + g > k && (m = o - R + g + P.horizontalGutter), isNaN(m) || y(m, d)
            }

            function A() {
                return -Q.position().left
            }

            function B() {
                return -Q.position().top
            }

            function C() {
                var a = V - S;
                return a > 20 && a - B() < 10
            }

            function D() {
                var a = U - R;
                return a > 20 && a - A() < 10
            }

            function E() {
                T.unbind(Bb).bind(Bb, function (a, b, c, d) {
                    var e = db, f = ab;
                    return vb.scrollBy(c * P.mouseWheelSpeed, -d * P.mouseWheelSpeed, !1), e == db && f == ab
                })
            }

            function F() {
                T.unbind(Bb)
            }

            function G() {
                return !1
            }

            function H() {
                Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
                    z(a.target, !1)
                })
            }

            function I() {
                Q.find(":input,a").unbind("focus.jsp")
            }

            function J() {
                function b() {
                    var a = db, b = ab;
                    switch (c) {
                        case 40:
                            vb.scrollByY(P.keyboardSpeed, !1);
                            break;
                        case 38:
                            vb.scrollByY(-P.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            vb.scrollByY(S * P.scrollPagePercent, !1);
                            break;
                        case 33:
                            vb.scrollByY(-S * P.scrollPagePercent, !1);
                            break;
                        case 39:
                            vb.scrollByX(P.keyboardSpeed, !1);
                            break;
                        case 37:
                            vb.scrollByX(-P.keyboardSpeed, !1)
                    }
                    return e = a != db || b != ab
                }

                var c, e, f = [];
                Z && f.push(lb[0]), Y && f.push(eb[0]), Q.focus(function () {
                    d.focus()
                }), d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (d) {
                    if (d.target === this || f.length && a(d.target).closest(f).length) {
                        var g = db, h = ab;
                        switch (d.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                c = d.keyCode, b();
                                break;
                            case 35:
                                x(V - S), c = null;
                                break;
                            case 36:
                                x(0), c = null
                        }
                        return e = d.keyCode == c && g != db || h != ab, !e
                    }
                }).bind("keypress.jsp", function (a) {
                    return a.keyCode == c && b(), !e
                }), P.hideFocus ? (d.css("outline", "none"), "hideFocus" in T[0] && d.attr("hideFocus", !0)) : (d.css("outline", ""), "hideFocus" in T[0] && d.attr("hideFocus", !1))
            }

            function K() {
                d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function L() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash.substr(1));
                    try {
                        b = a("#" + d + ', a[name="' + d + '"]')
                    } catch (e) {
                        return
                    }
                    b.length && Q.find(d) && (0 === T.scrollTop() ? c = setInterval(function () {
                        T.scrollTop() > 0 && (z(b, !0), a(document).scrollTop(T.position().top), clearInterval(c))
                    }, 50) : (z(b, !0), a(document).scrollTop(T.position().top)))
                }
            }

            function M() {
                a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function (c) {
                    var d, e, f, g, h, i, j = this.href.substr(0, this.href.indexOf("#")), k = location.href;
                    if (-1 !== location.href.indexOf("#") && (k = location.href.substr(0, location.href.indexOf("#"))), j === k) {
                        d = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            e = a("#" + d + ', a[name="' + d + '"]')
                        } catch (l) {
                            return
                        }
                        e.length && (f = e.closest(".jspScrollable"), g = f.data("jsp"), g.scrollToElement(e, !0), f[0].scrollIntoView && (h = a(b).scrollTop(), i = e.offset().top, (h > i || i > h + a(b).height()) && f[0].scrollIntoView()), c.preventDefault())
                    }
                }))
            }

            function N() {
                var a, b, c, d, e, f = !1;
                T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (g) {
                    var h = g.originalEvent.touches[0];
                    a = A(), b = B(), c = h.pageX, d = h.pageY, e = !1, f = !0
                }).bind("touchmove.jsp", function (g) {
                    if (f) {
                        var h = g.originalEvent.touches[0], i = db, j = ab;
                        return vb.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == db && j == ab
                    }
                }).bind("touchend.jsp", function () {
                    f = !1
                }).bind("click.jsp-touchclick", function () {
                    return e ? (e = !1, !1) : void 0
                })
            }

            function O() {
                var a = B(), b = A();
                d.removeClass("jspScrollable").unbind(".jsp"), d.replaceWith(Ab.append(Q.children())), Ab.scrollTop(a), Ab.scrollLeft(b), rb && clearInterval(rb)
            }

            var P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb = this, wb = !0, xb = !0, yb = !1, zb = !1, Ab = d.clone(!1, !1).empty(), Bb = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === d.css("box-sizing") ? (sb = 0, tb = 0) : (sb = d.css("paddingTop") + " " + d.css("paddingRight") + " " + d.css("paddingBottom") + " " + d.css("paddingLeft"), tb = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0)), a.extend(vb, {
                reinitialise: function (b) {
                    b = a.extend({}, P, b), f(b)
                }, scrollToElement: function (a, b, c) {
                    z(a, b, c)
                }, scrollTo: function (a, b, c) {
                    y(a, c), x(b, c)
                }, scrollToX: function (a, b) {
                    y(a, b)
                }, scrollToY: function (a, b) {
                    x(a, b)
                }, scrollToPercentX: function (a, b) {
                    y(a * (U - R), b)
                }, scrollToPercentY: function (a, b) {
                    x(a * (V - S), b)
                }, scrollBy: function (a, b, c) {
                    vb.scrollByX(a, c), vb.scrollByY(b, c)
                }, scrollByX: function (a, b) {
                    var c = A() + Math[0 > a ? "floor" : "ceil"](a), d = c / (U - R);
                    t(d * cb, b)
                }, scrollByY: function (a, b) {
                    var c = B() + Math[0 > a ? "floor" : "ceil"](a), d = c / (V - S);
                    r(d * _, b)
                }, positionDragX: function (a, b) {
                    t(a, b)
                }, positionDragY: function (a, b) {
                    r(a, b)
                }, animate: function (a, b, c, d) {
                    var e = {};
                    e[b] = c, a.animate(e, {duration: P.animateDuration, easing: P.animateEase, queue: !1, step: d})
                }, getContentPositionX: function () {
                    return A()
                }, getContentPositionY: function () {
                    return B()
                }, getContentWidth: function () {
                    return U
                }, getContentHeight: function () {
                    return V
                }, getPercentScrolledX: function () {
                    return A() / (U - R)
                }, getPercentScrolledY: function () {
                    return B() / (V - S)
                }, getIsScrollableH: function () {
                    return Z
                }, getIsScrollableV: function () {
                    return Y
                }, getContentPane: function () {
                    return Q
                }, scrollToBottom: function (a) {
                    r(_, a)
                }, hijackInternalLinks: a.noop, destroy: function () {
                    O()
                }
            }), f(e)
        }

        return d = a.extend({}, a.fn.jScrollPane.defaults, d), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            d[this] = d[this] || d.speed
        }), this.each(function () {
            var b = a(this), c = b.data("jsp");
            c ? c.reinitialise(d) : (a("script", b).filter('[type="text/javascript"],:not([type])').remove(), c = new e(b, d), b.data("jsp", c))
        })
    }, a.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}(jQuery, this);
/* End */
;
;/* Start:"a:4:{s:4:"full";s:80:"/bitrix/templates/prostroy_default/assets/lib/jssor/jssor.core.js?14756748897022";s:6:"source";s:65:"/bitrix/templates/prostroy_default/assets/lib/jssor/jssor.core.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * Jssor.Core 14.0
 * http://www.jssor.com/
 *
 * TERMS OF USE - Jssor.Core
 *
 * Copyright 2014 Jssor
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*! Jssor */
$Jssor$ = window.$Jssor$ = window.$Jssor$ || {};

//$Jssor$.$Ready = function () {
//    //Logic borrowed from http://www.jquery.com

//    var readyBound = false,
//        readyList = [],
//        DOMContentLoaded;

//    if (document.addEventListener) {
//        DOMContentLoaded = function() {
//            document.removeEventListener('DOMContentLoaded', DOMContentLoaded, false);
//            ready();
//        };

//    } else if (document.attachEvent) {
//        DOMContentLoaded = function() {
//            if (document.readyState === 'complete') {
//                document.detachEvent('onreadystatechange', DOMContentLoaded);
//                ready();
//            }
//        };
//    }

//    function ready() {
//        if (!ready.$IsReady) {
//            ready.$IsReady = true;
//            for (var i = 0, j = readyList.length; i < j; i++) {
//                try {
//                    readyList[i]();
//                }
//                catch (e) { }
//            }
//        }
//    }

//    function doScrollCheck() {
//        try {
//            document.documentElement.doScroll("left");
//        } catch (e) {
//            setTimeout(doScrollCheck, 1);
//            return;
//        }
//        ready();
//    }

//    function bindReady() {
//        if (readyBound) {
//            return;
//        }
//        readyBound = true;

//        if (document.readyState === 'complete') {
//            ready.$IsReady = true;
//        } else {
//            if (document.addEventListener) {
//                document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
//                window.addEventListener('load', ready, false);
//            } else if (document.attachEvent) {
//                document.attachEvent('onreadystatechange', DOMContentLoaded);
//                window.attachEvent('onload', ready);

//                var toplevel = false;

//                try {
//                    toplevel = window.frameElement == null;
//                } catch (e) { }

//                if (document.documentElement.doScroll && toplevel) {
//                    doScrollCheck();
//                }
//            }
//        }
//    }
//    bindReady();

//    return function(callback) {
//        ready.$IsReady ? callback() : readyList.push(callback);
//    };
//}();


//$JssorDebug$
var $JssorDebug$ = new function () {

    this.$DebugMode = true;

    // Methods

    this.$Log = function (msg, important) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        } else if (debug && important) {
            alert(msg);
        }
    };

    this.$Error = function (msg, e) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.error) {
            console.error(msg);
        } else if (debug) {
            alert(msg);
        }

        if (debug) {
            // since we're debugging, fail fast by crashing
            throw e || new Error(msg);
        }
    };

    this.$Fail = function (msg) {
        throw new Error(msg);
    };

    this.$Assert = function (value, msg) {
        var debug = this.$DebugMode;
        if (debug) {
            if (!value)
                throw new Error("Assert failed " + msg || "");
        }
    };

    this.$Trace = function (msg) {
        var console = window.console || {};
        var debug = this.$DebugMode;

        if (debug && console.log) {
            console.log(msg);
        }
    };

    this.$Execute = function (func) {
        var debug = this.$DebugMode;
        if (debug)
            func();
    };

    this.$LiveStamp = function (obj, id) {
        var stamp = document.createElement("DIV");
        stamp.setAttribute("id", id);

        obj.$Live = stamp;
    };
};


//$JssorEventManager$
var $JssorEventManager$ = function () {
    var self = this;
    // Fields

    var listeners = {}; // dictionary of eventName --> array of handlers

    // Methods

    self.$On = self.addEventListener = function (eventName, handler) {
        if (typeof (handler) != "function") {
            return;
        }

        if (!listeners[eventName]) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(handler);
    };

    self.$Off = self.removeEventListener = function (eventName, handler) {
        var handlers = listeners[eventName];

        if (typeof (handler) != "function") {
            return;
        } else if (!handlers) {
            return;
        }

        for (var i = 0; i < handlers.length; i++) {
            if (handler == handlers[i]) {
                handlers.splice(i, 1);
                return;
            }
        }
    };

    self.$ClearEventListeners = function (eventName) {
        if (listeners[eventName]) {
            delete listeners[eventName];
        }
    };

    self.$TriggerEvent = function (eventName) {
        var handlers = listeners[eventName];
        var args = [];

        if (!handlers) {
            return;
        }

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        for (var i = 0; i < handlers.length; i++) {
            try {
                handlers[i].apply(window, args);
            } catch (e) {
                // handler threw an error, ignore, go on to next one
                $JssorDebug$.$Error(e.name + " while executing " + eventName +
                    " handler: " + e.message, e);
            }
        }
    };
};
/* End */
;
;/* Start:"a:4:{s:4:"full";s:82:"/bitrix/templates/prostroy_default/assets/lib/jssor/jssor.utils.js?147567488989613";s:6:"source";s:66:"/bitrix/templates/prostroy_default/assets/lib/jssor/jssor.utils.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/// <reference path="Jssor.Core.js" />

/*
 * Jssor.Utils 14.0
 * http://www.jssor.com/
 *
 * TERMS OF USE - Jssor.Utils
 *
 * Copyright 2014 Jssor
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */


//$JssorPoint$
var $JssorPoint$;

(function () {

    $JssorPoint$ = function (x, y) {

        // Properties

        this.x = typeof (x) == "number" ? x : 0;
        this.y = typeof (y) == "number" ? y : 0;

    };

    // Methods

    var SDPointPrototype = $JssorPoint$.prototype;

    SDPointPrototype.$Plus = function (point) {
        return new $JssorPoint$(this.x + point.x, this.y + point.y);
    };

    SDPointPrototype.$Minus = function (point) {
        return new $JssorPoint$(this.x - point.x, this.y - point.y);
    };

    SDPointPrototype.$Times = function (factor) {
        return new $JssorPoint$(this.x * factor, this.y * factor);
    };

    SDPointPrototype.$Divide = function (factor) {
        return new $JssorPoint$(this.x / factor, this.y / factor);
    };

    SDPointPrototype.$Negate = function () {
        return new $JssorPoint$(-this.x, -this.y);
    };

    SDPointPrototype.$DistanceTo = function (point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) +
            Math.pow(this.y - point.y, 2));
    };

    SDPointPrototype.$Apply = function (func) {
        return new $JssorPoint$(func(this.x), func(this.y));
    };

    SDPointPrototype.$Equals = function (point) {
        return (point instanceof $JssorPoint$) &&
            (this.x === point.x) && (this.y === point.y);
    };

    SDPointPrototype.$ToString = function () {
        return "(" + this.x + "," + this.y + ")";
    };

})();

//$JssorEasing$
var $JssorEasing$ = window.$JssorEasing$ = {
    $EaseLinear: function (t) {
        return t;
    },
    $EaseGoBack: function (t) {
        return 1 - Math.abs((t *= 2) - 1);
    },
    $EaseSwing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
    },
    $EaseInQuad: function (t) {
        return t * t;
    },
    $EaseOutQuad: function (t) {
        return -t * (t - 2);
    },
    $EaseInOutQuad: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t : -1 / 2 * (--t * (t - 2) - 1);
    },
    $EaseInCubic: function (t) {
        return t * t * t;
    },
    $EaseOutCubic: function (t) {
        return (t -= 1) * t * t + 1;
    },
    $EaseInOutCubic: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t : 1 / 2 * ((t -= 2) * t * t + 2);
    },
    $EaseInQuart: function (t) {
        return t * t * t * t;
    },
    $EaseOutQuart: function (t) {
        return -((t -= 1) * t * t * t - 1);
    },
    $EaseInOutQuart: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t : -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    $EaseInQuint: function (t) {
        return t * t * t * t * t;
    },
    $EaseOutQuint: function (t) {
        return (t -= 1) * t * t * t * t + 1;
    },
    $EaseInOutQuint: function (t) {
        return (t *= 2) < 1 ? 1 / 2 * t * t * t * t * t : 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    $EaseInSine: function (t) {
        return 1 - Math.cos(t * Math.PI / 2)
    },
    $EaseOutSine: function (t) {
        return Math.sin(t * Math.PI / 2);
    },
    $EaseInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
    },
    $EaseInExpo: function (t) {
        return t == 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },
    $EaseOutExpo: function (t) {
        return t == 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },
    $EaseInOutExpo: function (t) {
        return t == 0 || t == 1 ? t : (t *= 2) < 1 ? 1 / 2 * Math.pow(2, 10 * (t - 1)) : 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    $EaseInCirc: function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    },
    $EaseOutCirc: function (t) {
        return Math.sqrt(1 - (t -= 1) * t);
    },
    $EaseInOutCirc: function (t) {
        return (t *= 2) < 1 ? -1 / 2 * (Math.sqrt(1 - t * t) - 1) : 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    $EaseInElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p));
    },
    $EaseOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .3, s = .075;
        return Math.pow(2, -10 * t) * Math.sin((t - s) * 2 * Math.PI / p) + 1;
    },
    $EaseInOutElastic: function (t) {
        if (!t || t == 1)
            return t;
        var p = .45, s = .1125;
        return (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) : Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * 2 * Math.PI / p) * .5 + 1;
    },
    $EaseInBack: function (t) {
        var s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    $EaseOutBack: function (t) {
        var s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    $EaseInOutBack: function (t) {
        var s = 1.70158;
        return (t *= 2) < 1 ? 1 / 2 * t * t * (((s *= 1.525) + 1) * t - s) : 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    $EaseInBounce: function (t) {
        return 1 - $JssorEasing$.$EaseOutBounce(1 - t)
    },
    $EaseOutBounce: function (t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    $EaseInOutBounce: function (t) {
        return t < 1 / 2 ? $JssorEasing$.$EaseInBounce(t * 2) * .5 : $JssorEasing$.$EaseOutBounce(t * 2 - 1) * .5 + .5;
    },
    $EaseInWave: function (t) {
        return 1 - Math.cos(t * Math.PI * 2)
    },
    $EaseOutWave: function (t) {
        return Math.sin(t * Math.PI * 2);
    },
    $EaseOutJump: function (t) {
        return 1 - (((t *= 2) < 1) ? (t = 1 - t) * t * t : (t -= 1) * t * t);
    },
    $EaseInJump: function (t) {
        return ((t *= 2) < 1) ? t * t * t : (t = 2 - t) * t * t;
    }
};

var $JssorDirection$ = window.$JssorDirection$ = {
    $TO_LEFT: 0x0001,
    $TO_RIGHT: 0x0002,
    $TO_TOP: 0x0004,
    $TO_BOTTOM: 0x0008,
    $HORIZONTAL: 0x0003,
    $VERTICAL: 0x000C,
    $LEFTRIGHT: 0x0003,
    $TOPBOTOM: 0x000C,
    $TOPLEFT: 0x0005,
    $TOPRIGHT: 0x0006,
    $BOTTOMLEFT: 0x0009,
    $BOTTOMRIGHT: 0x000A,
    $AROUND: 0x000F,

    $GetDirectionHorizontal: function (direction) {
        return direction & 0x0003;
    },
    $GetDirectionVertical: function (direction) {
        return direction & 0x000C;
    },
    $ChessHorizontal: function (direction) {
        return (~direction & 0x0003) + (direction & 0x000C);
    },
    $ChessVertical: function (direction) {
        return (~direction & 0x000C) + (direction & 0x0003);
    },
    $IsToLeft: function (direction) {
        return (direction & 0x0003) == 0x0001;
    },
    $IsToRight: function (direction) {
        return (direction & 0x0003) == 0x0002;
    },
    $IsToTop: function (direction) {
        return (direction & 0x000C) == 0x0004;
    },
    $IsToBottom: function (direction) {
        return (direction & 0x000C) == 0x0008;
    },
    $IsHorizontal: function (direction) {
        return (direction & 0x0003) > 0;
    },
    $IsVertical: function (direction) {
        return (direction & 0x000C) > 0;
    }
};

var $JssorKeyCode$ = {
    $BACKSPACE: 8,
    $COMMA: 188,
    $DELETE: 46,
    $DOWN: 40,
    $END: 35,
    $ENTER: 13,
    $ESCAPE: 27,
    $HOME: 36,
    $LEFT: 37,
    $NUMPAD_ADD: 107,
    $NUMPAD_DECIMAL: 110,
    $NUMPAD_DIVIDE: 111,
    $NUMPAD_ENTER: 108,
    $NUMPAD_MULTIPLY: 106,
    $NUMPAD_SUBTRACT: 109,
    $PAGE_DOWN: 34,
    $PAGE_UP: 33,
    $PERIOD: 190,
    $RIGHT: 39,
    $SPACE: 32,
    $TAB: 9,
    $UP: 38
};

var $JssorAlignment$ = {
    $TopLeft: 0x11,
    $TopCenter: 0x12,
    $TopRight: 0x14,
    $MiddleLeft: 0x21,
    $MiddleCenter: 0x22,
    $MiddleRight: 0x24,
    $BottomLeft: 0x41,
    $BottomCenter: 0x42,
    $BottomRight: 0x44,

    $IsTop: function (aligment) {
        return aligment & 0x10 > 0;
    },
    $IsMiddle: function (alignment) {
        return alignment & 0x20 > 0;
    },
    $IsBottom: function (alignment) {
        return alignment & 0x40 > 0;
    },
    $IsLeft: function (alignment) {
        return alignment & 0x01 > 0;
    },
    $IsCenter: function (alignment) {
        return alignment & 0x02 > 0;
    },
    $IsRight: function (alignment) {
        return alignment & 0x04 > 0;
    }
};

var $JssorMatrix$;

var $JssorBrowser$ = {
    $UNKNOWN: 0,
    $IE: 1,
    $FIREFOX: 2,
    $SAFARI: 3,
    $CHROME: 4,
    $OPERA: 5
};

var $ROWSER_UNKNOWN$ = 0;
var $ROWSER_IE$ = 1;
var $ROWSER_FIREFOX$ = 2;
var $ROWSER_SAFARI$ = 3;
var $ROWSER_CHROME$ = 4;
var $ROWSER_OPERA$ = 5;

var $JssorAnimator$;

// $JssorUtils$ is a static class, so make it singleton instance
var $JssorUtils$ = window.$JssorUtils$ = new function () {

    // Fields

    var self = this;

    var arrActiveX = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"];
    var supportedImageFormats = {
        "bmp": false,
        "jpeg": true,
        "jpg": true,
        "png": true,
        "tif": false,
        "wdp": false
    };

    var browser = $JssorBrowser$.$UNKNOWN;
    var browserRuntimeVersion = 0;
    var browserEngineVersion = 0;
    var browserJavascriptVersion = 0;
    var webkitVersion = 0;

    var app = navigator.appName;
    var ver = navigator.appVersion;
    var ua = navigator.userAgent;

    var urlParams = {};

    function DetectBrowser() {
        if (!browser) {
            if (app == "Microsoft Internet Explorer" && !!window.attachEvent && !!window.ActiveXObject) {

                var ieOffset = ua.indexOf("MSIE");
                browser = $JssorBrowser$.$IE;
                browserEngineVersion = parseFloat(ua.substring(ieOffset + 5, ua.indexOf(";", ieOffset)));

                //check IE javascript version
                /*@cc_on
                 browserJavascriptVersion = @_jscript_version;
                 @*/

                // update: for intranet sites and compat view list sites, IE sends
                // an IE7 User-Agent to the server to be interoperable, and even if
                // the page requests a later IE version, IE will still report the
                // IE7 UA to JS. we should be robust to self.
                //var docMode = document.documentMode;
                //if (typeof docMode !== "undefined") {
                //    browserRuntimeVersion = docMode;
                //}

                browserRuntimeVersion = document.documentMode || browserEngineVersion;

            }
            else if (app == "Netscape" && !!window.addEventListener) {

                var ffOffset = ua.indexOf("Firefox");
                var saOffset = ua.indexOf("Safari");
                var chOffset = ua.indexOf("Chrome");
                var webkitOffset = ua.indexOf("AppleWebKit");

                if (ffOffset >= 0) {
                    browser = $JssorBrowser$.$FIREFOX;
                    browserRuntimeVersion = parseFloat(ua.substring(ffOffset + 8));
                }
                else if (saOffset >= 0) {
                    var slash = ua.substring(0, saOffset).lastIndexOf("/");
                    browser = (chOffset >= 0) ? $JssorBrowser$.$CHROME : $JssorBrowser$.$SAFARI;
                    browserRuntimeVersion = parseFloat(ua.substring(slash + 1, saOffset));
                }

                if (webkitOffset >= 0)
                    webkitVersion = parseFloat(ua.substring(webkitOffset + 12));
            }
            else {
                var match = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(ua);
                if (match) {
                    browser = $JssorBrowser$.$OPERA;
                    browserRuntimeVersion = parseFloat(match[2]);
                }
            }
        }
    }

    function IsBrowserIE() {
        DetectBrowser();
        return browser == $ROWSER_IE$;
    }

    function IsBrowserIeQuirks() {

        return IsBrowserIE() && (browserRuntimeVersion < 6 || document.compatMode == "BackCompat");   //Composite to "CSS1Compat"
    }

    function IsBrowserFireFox() {
        DetectBrowser();
        return browser == $ROWSER_FIREFOX$;
    }

    function IsBrowserSafari() {
        DetectBrowser();
        return browser == $ROWSER_SAFARI$;
    }

    function IsBrowserChrome() {
        DetectBrowser();
        return browser == $ROWSER_CHROME$;
    }

    function IsBrowserOpera() {
        DetectBrowser();
        return browser == $ROWSER_OPERA$;
    }

    function IsBrowserBadTransform() {
        return IsBrowserSafari() && (webkitVersion > 534) && (webkitVersion < 535);
    }

    function IsBrowserSafeHWA() {
        return IsBrowserSafari() && (webkitVersion < 535);
    }

    function IsBrowserIe9Earlier() {

        //IE 8- and chrome 1 won't fade well
        return IsBrowserIE() && browserRuntimeVersion < 9; // || (IsBrowserChrome() && browserRuntimeVersion < 2);
    }

    var _TransformProperty;

    function GetTransformProperty(elmt) {

        if (!_TransformProperty) {
            // Note that in some versions of IE9 it is critical that
            // msTransform appear in this list before MozTransform

            each(['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'], function (property) {
                if (!self.$IsUndefined(elmt.style[property])) {
                    _TransformProperty = property;
                    return true;
                }
            });

            _TransformProperty = _TransformProperty || "transform";
        }

        return _TransformProperty;
    }

    // Constructor
    {
        //Ignore urlParams
        //        // Url parameters

        //        var query = window.location.search.substring(1);    // ignore '?'
        //        var parts = query.split('&');

        //        for (var i = 0; i < parts.length; i++) {
        //            var part = parts[i];
        //            var sep = part.indexOf('=');

        //            if (sep > 0) {
        //                urlParams[part.substring(0, sep)] =
        //                        decodeURIComponent(part.substring(sep + 1));
        //            }
        //        }

        // Browser behaviors

    }

    // Helpers
    function getOffsetParent(elmt, isFixed) {
        // IE and Opera "fixed" position elements don't have offset parents.
        // regardless, if it's fixed, its offset parent is the body.
        if (isFixed && elmt != document.body) {
            return document.body;
        } else {
            return elmt.offsetParent;
        }
    }

    function toString(obj) {
        return Object.prototype.toString.call(obj);
    }

    // [[Class]] -> type pairs
    var class2type;

    function each(object, callback) {
        if (toString(object) == "[object Array]") {
            for (var i = 0; i < object.length; i++) {
                if (callback(object[i], i, object)) {
                    break;
                }
            }
        } else {
            for (var name in object) {
                if (callback(object[name], name, object)) {
                    break;
                }
            }
        }
    }

    function GetClass2Type() {
        if (!class2type) {
            class2type = {};
            each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });
        }

        return class2type;
    }

    function type(obj) {
        return obj == null ? String(obj) : GetClass2Type()[toString(obj)] || "object";
    }

    function isPlainObject(obj) {
        // Must be an Object.
        // Because of IE, we also have to check the presence of the constructor property.
        // Make sure that DOM nodes and window objects don't pass through, as well
        if (!obj || type(obj) !== "object" || obj.nodeType || self.$IsWindow(obj)) {
            return false;
        }

        var hasOwn = Object.prototype.hasOwnProperty;

        try {
            // Not own constructor property must be Object
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        } catch (e) {
            // IE8,9 Will throw exceptions on certain host objects #9897
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.

        var key;
        for (key in obj) {
        }

        return key === undefined || hasOwn.call(obj, key);
    }

    function Delay(code, delay) {
        setTimeout(code, delay || 0);
    }

    function RemoveByReg(str, reg) {
        var m = reg.exec(str);

        if (m) {
            var header = str.substr(0, m.index);
            var tailer = str.substr(m.lastIndex + 1, str.length - (m.lastIndex + 1));
            str = header + tailer;
        }

        return str;
    }

    function BuildNewCss(oldCss, removeRegs, replaceValue) {
        var css = (!oldCss || oldCss == "inherit") ? "" : oldCss;

        each(removeRegs, function (removeReg) {
            var m = removeReg.exec(css);

            if (m) {
                var header = css.substr(0, m.index);
                var tailer = css.substr(m.lastIndex + 1, css.length - (m.lastIndex + 1));
                css = header + tailer;
            }
        });

        css = replaceValue + (css.indexOf(" ") != 0 ? " " : "") + css;

        return css;
    }

    function SetStyleFilterIE(elmt, value) {
        if (browserRuntimeVersion < 9) {
            elmt.style.filter = value;
        }
    }

    function SetStyleMatrixIE(elmt, matrix, offset) {
        //matrix is not for ie9+ running in ie8- mode
        if (browserJavascriptVersion < 9) {
            var oldFilterValue = elmt.style.filter;
            var matrixReg = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g);
            var matrixValue = matrix ? "progid:DXImageTransform.Microsoft.Matrix(" + "M11=" + matrix[0][0] + ", M12=" + matrix[0][1] + ", M21=" + matrix[1][0] + ", M22=" + matrix[1][1] + ", SizingMethod='auto expand')" : "";

            var newFilterValue = BuildNewCss(oldFilterValue, [matrixReg], matrixValue);

            SetStyleFilterIE(elmt, newFilterValue);

            self.$SetStyleMarginTop(elmt, offset.y);
            self.$SetStyleMarginLeft(elmt, offset.x);
        }
    }

    // Methods

    self.$IsBrowserIE = IsBrowserIE;

    self.$IsBrowserIeQuirks = IsBrowserIeQuirks;

    self.$IsBrowserFireFox = IsBrowserFireFox;

    self.$IsBrowserSafari = IsBrowserSafari;

    self.$IsBrowserChrome = IsBrowserChrome;

    self.$IsBrowserOpera = IsBrowserOpera;

    self.$IsBrowserBadTransform = IsBrowserBadTransform;

    self.$IsBrowserSafeHWA = IsBrowserSafeHWA;

    self.$IsBrowserIe9Earlier = IsBrowserIe9Earlier;

    self.$GetBrowserVersion = function () {
        return browserRuntimeVersion;
    };

    self.$GetBrowserEngineVersion = function () {
        return browserEngineVersion || browserRuntimeVersion;
    };

    self.$GetWebKitVersion = function () {
        return webkitVersion;
    };

    self.$Delay = Delay;

    self.$GetElement = function (elmt) {
        if (self.$IsString(elmt)) {
            elmt = document.getElementById(elmt);
        }

        return elmt;
    };

    self.$GetElementPosition = function (elmt) {
        elmt = self.$GetElement(elmt);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/findpos.html
        // with special check for "fixed" elements.

        while (elmt) {
            result.x += elmt.offsetLeft;
            result.y += elmt.offsetTop;

            var isFixed = self.$GetElementStyle(elmt).position == "fixed";

            if (isFixed) {
                result = result.$Plus(self.$GetPageScroll(window));
            }

            elmt = getOffsetParent(elmt, isFixed);
        }

        return result;
    };

    self.$GetElementSize = function (elmt) {
        elmt = self.$GetElement(elmt);
        return new $JssorPoint$(elmt.clientWidth, elmt.clientHeight);
    };

    self.$GetElementStyle = function (elmt) {
        elmt = self.$GetElement(elmt);

        if (elmt.currentStyle) {
            return elmt.currentStyle;
        } else if (window.getComputedStyle) {
            return window.getComputedStyle(elmt, "");
        } else {
            $JssorDebug$.$Fail("Unknown elmt style, no known technique.");
        }
    };

    self.$GetEvent = function (event) {
        return event ? event : window.event;
    };

    self.$GetEventSrcElement = function (event) {
        event = self.$GetEvent(event);
        return event.target || event.srcElement || document;
    };

    self.$GetEventDstElement = function (event) {
        event = self.$GetEvent(event);
        return event.relatedTarget || event.toElement;
    };

    self.$GetMousePosition = function (event) {
        event = self.$GetEvent(event);
        var result = new $JssorPoint$();

        // technique from:
        // http://www.quirksmode.org/js/events_properties.html

        if (event.type == "DOMMouseScroll" &&
            IsBrowserFireFox() && browserRuntimeVersion < 3) {
            // hack for FF2 which reports incorrect position for mouse scroll
            result.x = event.screenX;
            result.y = event.screenY;
        } else if (typeof (event.pageX) == "number") {
            result.x = event.pageX;
            result.y = event.pageY;
        } else if (typeof (event.clientX) == "number") {
            result.x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            result.y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse position, no known technique.");
        }

        return result;
    };

    self.$GetMouseScroll = function (event) {
        event = self.$GetEvent(event);
        var delta = 0; // default value

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/10/31/javascript-tutorial-the-scroll-wheel/

        if (typeof (event.wheelDelta) == "number") {
            delta = event.wheelDelta;
        } else if (typeof (event.detail) == "number") {
            delta = event.detail * -1;
        } else {
            $JssorDebug$.$Fail("Unknown event mouse scroll, no known technique.");
        }

        // normalize value to [-1, 1]
        return delta ? delta / Math.abs(delta) : 0;
    };

    self.$GetPageScroll = function (window) {
        var result = new $JssorPoint$();
        var docElmt = window.document.documentElement || {};
        var body = window.document.body || {};

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        if (typeof (window.pageXOffset) == "number") {
            // most browsers
            result.x = window.pageXOffset;
            result.y = window.pageYOffset;
        } else if (body.scrollLeft || body.scrollTop) {
            // W3C spec, IE6+ in quirks mode
            result.x = body.scrollLeft;
            result.y = body.scrollTop;
        } else if (docElmt.scrollLeft || docElmt.scrollTop) {
            // IE6+ in standards mode
            result.x = docElmt.scrollLeft;
            result.y = docElmt.scrollTop;
        }

        // note: we specifically aren't testing for typeof here, because IE sets
        // the appropriate variables undefined instead of 0 under certain
        // conditions. self means we also shouldn't fail if none of the three
        // cases are hit; we'll just assume the page scroll is 0.

        return result;
    };

    self.$GetWindowSize = function (window) {
        var result = new $JssorPoint$();

        // technique from:
        // http://www.howtocreate.co.uk/tutorials/javascript/browserwindow

        // important: i originally cleaned up the second and third IE checks to
        // check if the typeof was number. but self fails for quirks mode,
        // because docElmt.clientWidth is indeed a number, but it's incorrectly
        // zero. so no longer checking typeof is number for those cases.

        //if (typeof (window.innerWidth) == 'number') {
        //    // non-IE browsers
        //    result.x = window.innerWidth;
        //    result.y = window.innerHeight;
        //}
        //else {

        //jQuery way to get window size, but support ie quirks mode
        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);

        //$JssorDebug$.$Execute(function () {
        //    if (!checkElement || (!checkElement.clientWidth && !checkElement.clientHeight))
        //        $JssorDebug$.$Fail("Unknown window size, no known technique.");
        //});

        result.x = checkElement.clientWidth;
        result.y = checkElement.clientHeight;
        //}

        return result;
    };

    //self.$ImageFormatSupported = function (ext) {
    //    var ext = ext ? ext : "";
    //    return !!supportedImageFormats[ext.toLowerCase()];
    //};

    //self.$MakeCenteredNode = function (elmt) {
    //    elmt = $JssorUtils$.$GetElement(elmt);
    //    var div = self.$MakeNeutralElement("div");
    //    var html = [];

    //    // technique for vertically centering (in IE!!!) from:
    //    // http://www.jakpsatweb.cz/css/css-vertical-center-solution.html
    //    // with explicit neutralizing of styles added by me.
    //    html.push('<div style="display:table; height:100%; width:100%;');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('#position:relative; overflow:hidden; text-align:left;">');
    //    // the text-align:left guards against incorrect centering in IE
    //    html.push('<div style="#position:absolute; #top:50%; width:100%; ');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('display:table-cell; vertical-align:middle;">');
    //    html.push('<div style="#position:relative; #top:-50%; width:100%; ');
    //    html.push('border:none; margin:0px; padding:0px;'); // neutralizing
    //    html.push('text-align:center;"></div></div></div>');

    //    div.innerHTML = html.join('');
    //    div = div.firstChild;

    //    // now add the elmt as a child to the inner-most div
    //    var innerDiv = div;
    //    var innerDivs = div.getElementsByTagName("div");
    //    while (innerDivs.length > 0) {
    //        innerDiv = innerDivs[0];
    //        innerDivs = innerDiv.getElementsByTagName("div");
    //    }

    //    innerDiv.appendChild(elmt);

    //    return div;
    //};

    //self.$MakeNeutralElement = function (tagName) {
    //    var elmt = self.$CreateElement(tagName);
    //    var style = elmt.style;

    //    // TODO reset neutral elmt's style in a better way
    //    style.background = "transparent none";
    //    style.border = "none";
    //    style.margin = "0px";
    //    style.padding = "0px";
    //    style.position = "static";

    //    return elmt;
    //};

    //self.$MakeTransparentImage = function (src) {
    //    var img = self.$MakeNeutralElement("img");
    //    var elmt = null;

    //    if (IsBrowserIE() && browserRuntimeVersion < 7) {
    //        elmt = self.$MakeNeutralElement("span");
    //        elmt.style.display = "inline-block";

    //        // to size span correctly, load image and get natural size,
    //        // but don't override any user-set CSS values
    //        img.onload = function () {
    //            elmt.style.width = elmt.style.width || img.width + "px";
    //            elmt.style.height = elmt.style.height || img.height + "px";

    //            img.onload = null;
    //            img = null;     // to prevent memory leaks in IE
    //        };

    //        img.src = src;
    //        elmt.style.filter =
    //                "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
    //                src + "', sizingMethod='scale')";
    //    } else {
    //        elmt = img;
    //        elmt.src = src;
    //    }

    //    return elmt;
    //};

    //self.$MakeAjaxRequest = function (url, callback) {
    //    var async = typeof (callback) == "function";
    //    var req = null;

    //    if (async) {
    //        var actual = callback;
    //        var callback = function () {
    //            Delay($JssorUtils$.$CreateCallback(null, actual, req), 1);
    //        };
    //    }

    //    if (window.ActiveXObject) {
    //        for (var i = 0; i < arrActiveX.length; i++) {
    //            try {
    //                req = new ActiveXObject(arrActiveX[i]);
    //                break;
    //            } catch (e) {
    //                continue;
    //            }
    //        }
    //    } else if (window.XMLHttpRequest) {
    //        req = new XMLHttpRequest();
    //    }

    //    if (!req) {
    //        $JssorDebug$.$Fail("Browser doesn't support XMLHttpRequest.");
    //    }

    //    if (async) {
    //        req.onreadystatechange = function () {
    //            if (req.readyState == 4) {
    //                // prevent memory leaks by breaking circular reference now
    //                req.onreadystatechange = new Function();
    //                callback();
    //            }
    //        };
    //    }

    //    try {
    //        req.open("GET", url, async);
    //        req.send(null);
    //    } catch (e) {
    //        $JssorDebug$.$Log(e.name + " while making AJAX request: " + e.message);

    //        req.onreadystatechange = null;
    //        req = null;

    //        if (async) {
    //            callback();
    //        }
    //    }

    //    return async ? null : req;
    //};

    //self.$ParseXml = function (string) {
    //    var xmlDoc = null;

    //    if (window.ActiveXObject) {
    //        try {
    //            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    //            xmlDoc.async = false;
    //            xmlDoc.loadXML(string);
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (ActiveX): " + e.message);
    //        }
    //    } else if (window.DOMParser) {
    //        try {
    //            var parser = new DOMParser();
    //            xmlDoc = parser.parseFromString(string, "text/xml");
    //        } catch (e) {
    //            $JssorDebug$.$Log(e.name + " while parsing XML (DOMParser): " + e.message);
    //        }
    //    } else {
    //        $JssorDebug$.$Fail("Browser doesn't support XML DOM.");
    //    }

    //    return xmlDoc;
    //};

    //self.$GetUrlParameter = function (key) {
    //    var value = urlParams[key];
    //    return value ? value : null;
    //};

    self.$GetStyleOpacity = function (elmt) {
        if (IsBrowserIE() && browserEngineVersion < 9) {
            var match = /opacity=([^)]*)/.exec(elmt.style.filter || "");
            return match ? (parseFloat(match[1]) / 100) : 1;
        }
        else
            return parseFloat(elmt.style.opacity || "1");
    };

    self.$SetStyleOpacity = self.$setElementOpacity = function (elmt, opacity, ie9EarlierForce) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            //var filterName = "filter"; // browserEngineVersion < 8 ? "filter" : "-ms-filter";
            var finalFilter = elmt.style.filter || "";

            // for CSS filter browsers (IE), remove alpha filter if it's unnecessary.
            // update: doing self always since IE9 beta seems to have broken the
            // behavior if we rely on the programmatic filters collection.
            var alphaReg = new RegExp(/[\s]*alpha\([^\)]*\)/g);

            // important: note the lazy star! self protects against
            // multiple filters; we don't want to delete the other ones.
            // update: also trimming extra whitespace around filter.

            var ieOpacity = Math.round(100 * opacity);
            var alphaFilter = "";
            if (ieOpacity < 100 || ie9EarlierForce) {
                alphaFilter = "alpha(opacity=" + ieOpacity + ") ";
                //elmt.style["-ms-filter"] = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + ieOpacity + ") ";
            }

            var newFilterValue = BuildNewCss(finalFilter, [alphaReg], alphaFilter);

            SetStyleFilterIE(elmt, newFilterValue);
        }

        //if (!IsBrowserIE() || browserEngineVersion >= 9)
        else {
            elmt.style.opacity = opacity == 1 ? "" : Math.round(opacity * 100) / 100;
        }
    };

    function SetStyleTransformInternal(elmt, transform) {
        var rotate = transform.$Rotate || 0;
        var scale = transform.$Scale || 1;

        if (IsBrowserIe9Earlier()) {
            var matrix = self.$CreateMatrix(rotate / 180 * Math.PI, scale, scale);
            SetStyleMatrixIE(elmt, (!rotate && scale == 1) ? null : matrix, self.$GetMatrixOffset(matrix, transform.$OriginalWidth, transform.$OriginalHeight));
        }
        else {
            //rotate(15deg) scale(.5) translateZ(0)
            var transformProperty = GetTransformProperty(elmt);
            if (transformProperty) {
                var transformValue = "rotate(" + rotate % 360 + "deg) scale(" + scale + ")";
                if ($JssorUtils$.$IsBrowserChrome() && webkitVersion > 535)
                    transformValue += " perspective(2000px)";

                elmt.style[transformProperty] = transformValue;
            }
        }
    }

    self.$SetStyleTransform = function (elmt, transform) {
        if (IsBrowserBadTransform()) {
            Delay(self.$CreateCallback(null, SetStyleTransformInternal, elmt, transform));
        }
        else {
            SetStyleTransformInternal(elmt, transform);
        }
    };

    self.$SetStyleTransformOrigin = function (elmt, transformOrigin) {
        var transformProperty = GetTransformProperty(elmt);

        if (transformProperty)
            elmt.style[transformProperty + "Origin"] = transformOrigin;
    };

    self.$SetStyleScale = function (elmt, scale) {

        if (IsBrowserIE() && browserEngineVersion < 9 || (browserEngineVersion < 10 && IsBrowserIeQuirks())) {
            elmt.style.zoom = (scale == 1) ? "" : scale;
        }
        else {
            var transformProperty = GetTransformProperty(elmt);

            if (transformProperty) {
                //rotate(15deg) scale(.5)
                var transformValue = "scale(" + scale + ")";

                var oldTransformValue = elmt.style[transformProperty];
                var scaleReg = new RegExp(/[\s]*scale\(.*?\)/g);

                var newTransformValue = BuildNewCss(oldTransformValue, [scaleReg], transformValue);

                elmt.style[transformProperty] = newTransformValue;
            }
        }
    };

    self.$EnableHWA = function (elmt) {
        if (!elmt.style[GetTransformProperty(elmt)] || elmt.style[GetTransformProperty(elmt)] == "none")
            elmt.style[GetTransformProperty(elmt)] = "perspective(2000px)";
    };

    self.$DisableHWA = function (elmt) {
        //if (force || elmt.style[GetTransformProperty(elmt)] == "perspective(2000px)")
        elmt.style[GetTransformProperty(elmt)] = "none";
    };

    self.$GetStyleFloat = function (elmt) {
        return IsBrowserIE() ? elmt.style.styleFloat : elmt.style.cssFloat;
    };

    self.$SetStyleFloat = function (elmt, float) {
        if (IsBrowserIE())
            elmt.style.styleFloat = float;
        else
            elmt.style.cssFloat = float;
    };

    var ie8OffsetWidth = 0;
    var ie8OffsetHeight = 0;
    var ie8WindowResizeCallbackHandlers;
    //var ie8LastVerticalScrollbar;
    //var toggleInfo = "";

    function Ie8WindowResizeFilter(window) {

        var trigger = true;

        var checkElement = (IsBrowserIeQuirks() ? window.document.body : window.document.documentElement);
        if (checkElement) {
            //check vertical bar
            //var hasVerticalBar = checkElement.scrollHeight > checkElement.clientHeight;
            //var verticalBarToggle = hasVerticalBar != ie8LastVerticalScrollbar;
            //ie8LastVerticalScrollbar = hasVerticalBar;

            var widthChange = checkElement.offsetWidth - ie8OffsetWidth;
            var heightChange = checkElement.offsetHeight - ie8OffsetHeight;
            if (widthChange || heightChange) {

                ie8OffsetWidth += widthChange;
                ie8OffsetHeight += heightChange;
            }
            else
                trigger = false;
        }

        trigger && each(ie8WindowResizeCallbackHandlers, function (handler) {
            handler();
        });
    }

    self.$OnWindowResize = function (window, handler) {

        if (IsBrowserIE() && browserEngineVersion < 9) {
            if (!ie8WindowResizeCallbackHandlers) {
                ie8WindowResizeCallbackHandlers = [handler];
                handler = self.$CreateCallback(null, Ie8WindowResizeFilter, window);
            }
            else {
                ie8WindowResizeCallbackHandlers.push(handler);
                return;
            }
        }

        self.$AddEvent(window, "resize", handler);
    };

    self.$AddEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.addEventListener) {
            if (eventName == "mousewheel") {
                elmt.addEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to add the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs addEventListener.
            elmt.addEventListener(eventName, handler, useCapture);
        }
        else if (elmt.attachEvent) {
            elmt.attachEvent("on" + eventName, handler);
            if (useCapture && elmt.setCapture) {
                elmt.setCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.addEventListener && !elmt.attachEvent) {
                $JssorDebug$.$Fail("Unable to attach event handler, no known technique.");
            }
        });

    };

    self.$RemoveEvent = function (elmt, eventName, handler, useCapture) {
        elmt = self.$GetElement(elmt);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (elmt.removeEventListener) {
            if (eventName == "mousewheel") {
                elmt.removeEventListener("DOMMouseScroll", handler, useCapture);
            }
            // we are still going to remove the mousewheel -- not a mistake!
            // self is for opera, since it uses onmousewheel but needs removeEventListener.
            elmt.removeEventListener(eventName, handler, useCapture);
        }
        else if (elmt.detachEvent) {
            elmt.detachEvent("on" + eventName, handler);
            if (useCapture && elmt.releaseCapture) {
                elmt.releaseCapture();
            }
        }

        $JssorDebug$.$Execute(function () {
            if (!elmt.removeEventListener && !elmt.detachEvent) {
                $JssorDebug$.$Fail("Unable to detach event handler, no known technique.");
            }
        });
    };

    self.$FireEvent = function (elmt, eventName) {
        //var document = elmt.document;

        $JssorDebug$.$Execute(function () {
            if (!document.createEvent && !document.createEventObject) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }

            if (!elmt.dispatchEvent && !elmt.fireEvent) {
                $JssorDebug$.$Fail("Unable to fire event, no known technique.");
            }
        });

        var evento;

        if (document.createEvent) {
            evento = document.createEvent("HTMLEvents");
            evento.initEvent(eventName, false, false);
            elmt.dispatchEvent(evento);
        }
        else {
            var ieEventName = "on" + eventName;
            evento = document.createEventObject();
            //event.eventType = ieEventName;
            //event.eventName = ieEventName;

            elmt.fireEvent(ieEventName, evento);
        }
    };

    self.$AddEventBrowserMouseUp = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseUp = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mouseup", handler, userCapture);
    };

    self.$AddEventBrowserMouseDown = function (handler, userCapture) {
        self.$AddEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$RemoveEventBrowserMouseDown = function (handler, userCapture) {
        self.$RemoveEvent((IsBrowserIe9Earlier()) ? document : window, "mousedown", handler, userCapture);
    };

    self.$CancelEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.preventDefault) {
            event.preventDefault();     // W3C for preventing default
        }

        event.cancel = true;            // legacy for preventing default
        event.returnValue = false;      // IE for preventing default
    };

    self.$StopEvent = function (event) {
        event = self.$GetEvent(event);

        // technique from:
        // http://blog.paranoidferret.com/index.php/2007/08/10/javascript-working-with-events/

        if (event.stopPropagation) {
            event.stopPropagation();    // W3C for stopping propagation
        }

        event.cancelBubble = true;      // IE for stopping propagation
    };

    self.$CreateCallback = function (object, method) {
        // create callback args
        var initialArgs = [];
        for (var i = 2; i < arguments.length; i++) {
            initialArgs.push(arguments[i]);
        }

        // create closure to apply method
        var callback = function () {
            // concatenate new args, but make a copy of initialArgs first
            var args = initialArgs.concat([]);
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            return method.apply(object, args);
        };

        $JssorDebug$.$LiveStamp(callback, "callback_" + ($JssorUtils$.$GetNow() & 11111111));

        return callback;
    };

    var _Freeer;
    self.$FreeElement = function (elmt) {
        if (!_Freeer)
            _Freeer = self.$CreateDivElement();

        if (elmt) {
            $JssorUtils$.$AppendChild(_Freeer, elmt);
            $JssorUtils$.$ClearInnerHtml(_Freeer);
        }
    };

    self.$SetInnerText = function (elmt, text) {
        var textNode = document.createTextNode(text);
        self.$ClearInnerHtml(elmt);
        elmt.appendChild(textNode);
    };

    self.$GetInnerText = function (elmt) {
        return elmt.textContent || elmt.innerText;
    };

    self.$GetInnerHtml = function (elmt) {
        return elmt.innerHTML;
    };

    self.$SetInnerHtml = function (elmt, html) {
        elmt.innerHTML = html;
    };

    self.$ClearInnerHtml = function (elmt) {
        elmt.innerHTML = "";
    };

    self.$EncodeHtml = function (text) {
        var div = self.$CreateDivElement();
        self.$SetInnerText(div, text);
        return self.$GetInnerHtml(div);
    };

    self.$DecodeHtml = function (html) {
        var div = self.$CreateDivElement();
        self.$SetInnerHtml(div, html);
        return self.$GetInnerText(div);
    };

    self.$SelectElement = function (elmt) {
        var userSelection;
        if (window.getSelection) {
            //W3C default
            userSelection = window.getSelection();
        }
        var theRange = null;
        if (document.createRange) {
            theRange = document.createRange();
            theRange.selectNode(elmt);
        }
        else {
            theRange = document.body.createTextRange();
            theRange.moveToElementText(elmt);
            theRange.select();
        }
        //set user selection
        if (userSelection)
            userSelection.addRange(theRange);
    };

    self.$DeselectElements = function () {
        if (document.selection) {
            document.selection.empty();
        } else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };

    self.$GetChildren = function (elmt) {
        var children = [];

        for (var tmpEl = elmt.firstChild; tmpEl; tmpEl = tmpEl.nextSibling) {
            if (tmpEl.nodeType == 1) {
                children.push(tmpEl);
            }
        }

        return children;
    };

    function FindFirstChildByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.getAttribute(attrName) == attrValue)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByAttribute = FindFirstChildByAttribute;

    function FindChildrenByAttribute(elmt, attrValue, attrName, deep) {
        if (!attrName)
            attrName = "u";

        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.getAttribute(attrName) == attrValue)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByAttribute(elmt, attrValue, attrName, deep);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByAttribute = FindChildrenByAttribute;

    function FindFirstChildByTag(elmt, tagName, deep) {

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (elmt.tagName == tagName)
                    return elmt;

                if (deep) {
                    var childRet = FindFirstChildByTag(elmt, tagName, deep);
                    if (childRet)
                        return childRet;
                }
            }
        }
    }

    self.$FindFirstChildByTag = FindFirstChildByTag;

    function FindChildrenByTag(elmt, tagName, deep) {
        var ret = [];

        for (elmt = elmt ? elmt.firstChild : null; elmt; elmt = elmt.nextSibling) {
            if (elmt.nodeType == 1) {
                if (!tagName || elmt.tagName == tagName)
                    ret.push(elmt);

                if (deep) {
                    var childRet = FindChildrenByTag(elmt, tagName, true);
                    if (childRet.length)
                        ret = ret.concat(childRet);
                }
            }
        }

        return ret;
    }

    self.$FindChildrenByTag = FindChildrenByTag;

    self.$GetElementsByTagName = function (elmt, tagName) {
        return elmt.getElementsByTagName(tagName);
    };

    self.$Extend = function (target) {
        for (var i = 1; i < arguments.length; i++) {

            var options = arguments[i];

            // Only deal with non-null/undefined values
            if (options) {
                // Extend the base object
                for (var name in options) {
                    target[name] = options[name];
                }
            }
        }

        // Return the modified object
        return target;
    };

    self.$Unextend = function (target, options) {
        $JssorDebug$.$Assert(options);

        var unextended = {};

        // Extend the base object
        for (var name in target) {
            if (target[name] != options[name]) {
                unextended[name] = target[name];
            }
        }

        // Return the modified object
        return unextended;
    };

    self.$IsUndefined = function (obj) {
        return type(obj) == "undefined";
    };

    self.$IsFunction = function (obj) {
        return type(obj) == "function";
    };

    self.$IsArray = Array.isArray || function (obj) {
            return type(obj) == "array";
        };

    self.$IsString = function (obj) {
        return type(obj) == "string";
    };

    self.$IsNumeric = function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    };

    self.$IsWindow = function (obj) {
        return obj != null && obj == obj.window;
    };

    self.$Type = type;

    // args is for internal usage only
    self.$Each = each;

    self.$IsPlainObject = isPlainObject;

    self.$CreateDivElement = function (doc) {
        return self.$CreateElement("DIV", doc);
    };

    self.$CreateSpanElement = function (doc) {
        return self.$CreateElement("SPAN", doc);
    };

    self.$CreateElement = function (tagName, doc) {
        doc = doc || document;
        return doc.createElement(tagName);
    };

    self.$EmptyFunction = function () {
    };

    self.$GetAttribute = function (elmt, name) {
        return elmt.getAttribute(name);
    };

    self.$SetAttribute = function (elmt, name, value) {
        elmt.setAttribute(name, value);
    };

    self.$GetClassName = function (elmt) {
        return elmt.className;
    };

    self.$SetClassName = function (elmt, className) {
        elmt.className = className ? className : "";
    };

    self.$GetStyleCursor = function (elmt) {
        return elmt.style.cursor;
    };

    self.$SetStyleCursor = function (elmt, cursor) {
        elmt.style.cursor = cursor;
    };

    self.$GetStyleDisplay = function (elmt) {
        return elmt.style.display;
    };

    self.$SetStyleDisplay = function (elmt, display) {
        elmt.style.display = display || "";
    };

    self.$GetStyleOverflow = function (elmt) {
        return elmt.style.overflow;
    };

    self.$SetStyleOverflow = function (elmt, overflow) {
        elmt.style.overflow = overflow;
    };

    self.$GetStyleOverflowX = function (elmt) {
        return elmt.style.overflowX;
    };

    self.$SetStyleOverflowX = function (elmt, overflow) {
        elmt.style.overflowX = overflow;
    };

    self.$GetStyleOverflowY = function (elmt) {
        return elmt.style.overflowY;
    };

    self.$SetStyleOverflowY = function (elmt, overflow) {
        elmt.style.overflowY = overflow;
    };

    self.$GetParentNode = function (elmt) {
        return elmt.parentNode;
    };

    self.$HideElement = function (elmt) {
        self.$SetStyleDisplay(elmt, "none");
    };

    self.$HideElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$HideElement(elmts[i]);
        }
    };

    self.$ShowElement = function (elmt, show) {
        self.$SetStyleDisplay(elmt, show == false ? "none" : "");
    };

    self.$ShowElements = function (elmts) {
        for (var i = 0; i < elmts.length; i++) {
            self.$ShowElement(elmts[i]);
        }
    };

    self.$GetStylePosition = function (elmt) {
        return elmt.style.position;
    };

    self.$SetStylePosition = function (elmt, position) {
        elmt.style.position = position;
    };

    self.$GetStyleTop = function (elmt) {
        return parseInt(elmt.style.top, 10);
    };

    self.$SetStyleTop = function (elmt, top) {
        elmt.style.top = top + "px";
    };

    self.$GetStyleRight = function (elmt) {
        return parseInt(elmt.style.right, 10);
    };

    self.$SetStyleRight = function (elmt, right) {
        elmt.style.right = right + "px";
    };

    self.$GetStyleBottom = function (elmt) {
        return parseInt(elmt.style.bottom, 10);
    };

    self.$SetStyleBottom = function (elmt, bottom) {
        elmt.style.bottom = bottom + "px";
    };

    self.$GetStyleLeft = function (elmt) {
        return parseInt(elmt.style.left, 10);
    };

    self.$SetStyleLeft = function (elmt, left) {
        elmt.style.left = left + "px";
    };

    self.$GetStyleWidth = function (elmt) {
        return parseInt(elmt.style.width, 10);
    };

    self.$SetStyleWidth = function (elmt, width) {
        elmt.style.width = Math.max(width, 0) + "px";
    };

    self.$GetStyleHeight = function (elmt) {
        return parseInt(elmt.style.height, 10);
    };

    self.$SetStyleHeight = function (elmt, height) {
        elmt.style.height = Math.max(height, 0) + "px";
    };

    self.$GetStyleCssText = function (elmt) {
        return elmt.style.cssText;
    };

    self.$SetStyleCssText = function (elmt, cssText) {
        elmt.style.cssText = cssText;
    };

    self.$RemoveAttribute = function (elmt, attrbuteName) {
        elmt.removeAttribute(attrbuteName);
    };

    self.$GetBorderWidth = function (elmt) {
        return parseInt(elmt.style.borderWidth, 10);
    };

    self.$SetBorderWdith = function (elmt, width) {
        elmt.style.width = width + "px";
    };

    self.$GetStyleMarginLeft = function (elmt) {
        return parseInt(elmt.style.marginLeft, 10) || 0;
    };

    self.$SetStyleMarginLeft = function (elmt, marginLeft) {
        elmt.style.marginLeft = marginLeft + "px";
    };

    self.$GetStyleMarginTop = function (elmt) {
        return parseInt(elmt.style.marginTop, 10) || 0;
    };

    self.$SetStyleMarginTop = function (elmt, marginTop) {
        elmt.style.marginTop = marginTop + "px";
    };

    self.$GetStyleMarginBottom = function (elmt) {
        return parseInt(elmt.style.marginBottom, 10) || 0;
    };

    self.$SetStyleMarginBottom = function (elmt, marginBottom) {
        elmt.style.marginBottom = marginBottom + "px";
    };

    self.$GetStyleMarginRight = function (elmt) {
        return parseInt(elmt.style.marginRight, 10) || 0;
    };

    self.$SetStyleMarginRight = function (elmt, marginRight) {
        elmt.style.marginRight = marginRight + "px";
    };

    self.$GetStyleBorder = function (elmt) {
        return elmt.style.border;
    };

    self.$SetStyleBorder = function (elmt, border) {
        elmt.style.border = border;
    };

    self.$GetStyleBorderWidth = function (elmt) {
        return parseInt(elmt.style.borderWidth);
    };

    self.$SetStyleBorderWidth = function (elmt, borderWidth) {
        elmt.style.borderWidth = borderWidth + "px";
    };

    self.$GetStyleBorderStyle = function (elmt) {
        return elmt.style.borderStyle;
    };

    self.$SetStyleBorderStyle = function (elmt, borderStyle) {
        elmt.style.borderStyle = borderStyle;
    };

    self.$GetStyleBorderColor = function (elmt) {
        return elmt.style.borderColor;
    };

    self.$SetStyleBorderColor = function (elmt, borderColor) {
        elmt.style.borderColor = borderColor;
    };

    self.$GetStyleVibility = function (elmt) {
        return elmt.style.vibility;
    };

    self.$SetStyleVisibility = function (elmt, visibility) {
        elmt.style.visibility = visibility;
    };

    self.$GetStyleZIndex = function (elmt) {
        return parseInt(elmt.style.zIndex) || 0;
    };

    self.$SetStyleZIndex = function (elmt, zIndex) {
        elmt.style.zIndex = Math.ceil(zIndex);
    };

    self.$GetStyleBackgroundColor = function (elmt) {
        return elmt.style.backgroundColor;
    };

    self.$SetStyleBackgroundColor = function (elmt, backgroundColor) {
        elmt.style.backgroundColor = backgroundColor;
    };

    self.$GetStyleColor = function (elmt) {
        return elmt.style.color;
    };

    self.$SetStyleColor = function (elmt, color) {
        elmt.style.color = color;
    };

    self.$GetStyleBackgroundImage = function (elmt) {
        return elmt.style.backgroundImage;
    };

    self.$SetStyleBackgroundImage = function (elmt, backgroundImage) {
        elmt.style.backgroundImage = backgroundImage;
    };

    self.$CanClearClip = function () {
        //return !IsBrowserIE() || browserEngineVersion > 9 || (browserRuntimeVersion > 7 && !IsBrowserIeQuirks());
        return IsBrowserIE() && browserRuntimeVersion < 10;
    };

    self.$SetStyleClip = function (elmt, clip) {
        if (clip) {
            elmt.style.clip = "rect(" + Math.round(clip.$Top) + "px " + Math.round(clip.$Right) + "px " + Math.round(clip.$Bottom) + "px " + Math.round(clip.$Left) + "px)";
        }
        else {
            var cssText = self.$GetStyleCssText(elmt);
            var clipRegs = [
                new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
                new RegExp(/[\s]*cliptop: .*?[;]?/i),
                new RegExp(/[\s]*clipright: .*?[;]?/i),
                new RegExp(/[\s]*clipbottom: .*?[;]?/i),
                new RegExp(/[\s]*clipleft: .*?[;]?/i)
            ];

            var newCssText = BuildNewCss(cssText, clipRegs, "");

            $JssorUtils$.$SetStyleCssText(elmt, newCssText);
        }
    };

    self.$GetStyleZoom = function (elmt) {
        return elmt.style.zoom;
    };

    self.$SetStyleZoom = function (elmt, zoom) {
        return elmt.style.zoom = zoom;
    };

    self.$SetStyleClear = function (elmt, clear) {
        elmt.style.clear = clear;
    };

    self.$GetNow = function () {
        return new Date().getTime();
    };

    self.$AppendChild = function (elmt, child) {
        elmt.appendChild(child);
    };

    self.$AppendChildren = function (elmt, children) {
        each(children, function (child) {
            self.$AppendChild(elmt, child);
        });
    };

    self.$InsertBefore = function (elmt, child, refObject) {
        elmt.insertBefore(child, refObject);
    };

    self.$InsertAdjacentHtml = function (elmt, where, text) {
        elmt.insertAdjacentHTML(where, text);
    };

    self.$RemoveChild = function (elmt, child) {
        elmt.removeChild(child);
    };

    self.$RemoveChildren = function (elmt, children) {
        each(children, function (child) {
            self.$RemoveChild(elmt, child);
        });
    };

    self.$ClearChildren = function (elmt) {
        self.$RemoveChildren(elmt, self.$GetChildren(elmt));
    };

    self.$ParseInt = function (str, radix) {
        return parseInt(str, radix || 10);
    };

    self.$ParseFloat = function (str) {
        return parseFloat(str);
    };

    self.$IsChild = function (elmtA, elmtB) {
        var body = document.body;
        while (elmtB && elmtA != elmtB && body != elmtB) {
            try {
                elmtB = elmtB.parentNode;
            } catch (e) {
                // Firefox sometimes fires events for XUL elements, which throws
                // a "permission denied" error. so this is not a child.
                return false;
            }
        }
        return elmtA == elmtB;
    };

    self.$ToLowerCase = function (value) {
        if (value)
            value = value.toLowerCase();

        return value;
    };

    self.$CloneNode = function (elmt, deep) {
        return elmt.cloneNode(deep);
    };

    function LoadImageCallback(callback, image, abort) {
        //$JssorDebug$.$Execute(function () {
        //    Delay(self.$CreateCallback(null, function () {
        //        callback && callback(image, abort);
        //    }), 10000);
        //});

        image.onload = null;
        image.abort = null;

        if (callback)
            callback(image, abort);
    }

    self.$LoadImage = function (src, callback) {
        if (self.$IsBrowserOpera() && browserRuntimeVersion < 11.6 || !src) {
            LoadImageCallback(callback, null);
        }
        else {
            var image = new Image();
            image.onload = self.$CreateCallback(null, LoadImageCallback, callback, image);
            image.onabort = self.$CreateCallback(null, LoadImageCallback, callback, image, true);
            image.src = src;
        }
    };

    self.$LoadImages = function (imageElmts, mainImageElmt, callback) {

        var _ImageLoading = imageElmts.length + 1;

        function LoadImageCompleteEventHandler(image, abort) {
            _ImageLoading--;
            if (mainImageElmt && image && image.src == mainImageElmt.src)
                mainImageElmt = image;
            !_ImageLoading && callback && callback(mainImageElmt);
        }

        $JssorUtils$.$Each(imageElmts, function (imageElmt) {
            $JssorUtils$.$LoadImage(imageElmt.src, LoadImageCompleteEventHandler);
        });

        LoadImageCompleteEventHandler();
    };

    self.$BuildElement = function (template, tagName, replacer, createCopy) {
        if (createCopy)
            template = $JssorUtils$.$CloneNode(template, true);

        var templateHolders = $JssorUtils$.$GetElementsByTagName(template, tagName);
        for (var j = templateHolders.length - 1; j > -1; j--) {
            var templateHolder = templateHolders[j];
            var replaceItem = $JssorUtils$.$CloneNode(replacer, true);
            $JssorUtils$.$SetClassName(replaceItem, $JssorUtils$.$GetClassName(templateHolder));
            $JssorUtils$.$SetStyleCssText(replaceItem, $JssorUtils$.$GetStyleCssText(templateHolder));

            var thumbnailPlaceHolderParent = $JssorUtils$.$GetParentNode(templateHolder);
            $JssorUtils$.$InsertBefore(thumbnailPlaceHolderParent, replaceItem, templateHolder);
            $JssorUtils$.$RemoveChild(thumbnailPlaceHolderParent, templateHolder);
        }

        return template;
    };

    var _MouseDownButtons;
    var _MouseOverButtons = [];

    function JssorButtonEx(elmt) {
        var _Self = this;

        var _OriginClassName;

        var _IsMouseDown;   //class name 'dn'
        var _IsActive;      //class name 'av'

        function Highlight() {
            var className = _OriginClassName;

            if (_IsMouseDown) {
                className += 'dn';
            }
            else if (_IsActive) {
                className += "av";
            }

            $JssorUtils$.$SetClassName(elmt, className);
        }

        function OnMouseDown(event) {
            _MouseDownButtons.push(_Self);

            _IsMouseDown = true;

            Highlight();
        }

        _Self.$MouseUp = function () {
            ///	<summary>
            ///		Internal member function, do not use it.
            ///	</summary>
            ///	<private />

            _IsMouseDown = false;

            Highlight();
        };

        _Self.$Activate = function (activate) {
            _IsActive = activate;

            Highlight();
        };

        //JssorButtonEx Constructor
        {
            elmt = self.$GetElement(elmt);

            if (!_MouseDownButtons) {
                self.$AddEventBrowserMouseUp(function () {
                    var oldMouseDownButtons = _MouseDownButtons;
                    _MouseDownButtons = [];

                    each(oldMouseDownButtons, function (button) {
                        button.$MouseUp();
                    });
                });

                _MouseDownButtons = [];
            }

            _OriginClassName = self.$GetClassName(elmt);

            $JssorUtils$.$AddEvent(elmt, "mousedown", OnMouseDown);
        }
    }

    self.$Buttonize = function (elmt) {
        return new JssorButtonEx(elmt);
    };

    var StyleGetter = {
        $Opacity: self.$GetStyleOpacity,
        $Top: self.$GetStyleTop,
        $Left: self.$GetStyleLeft,
        $Width: self.$GetStyleWidth,
        $Height: self.$GetStyleHeight,
        $Position: self.$GetStylePosition,
        $Display: self.$GetStyleDisplay,
        $ZIndex: self.$GetStyleZIndex
    };

    //For Compression Only
    var _StyleSetterReserved = {
        $Opacity: self.$SetStyleOpacity,
        $Top: self.$SetStyleTop,
        $Left: self.$SetStyleLeft,
        $Width: self.$SetStyleWidth,
        $Height: self.$SetStyleHeight,
        $Display: self.$SetStyleDisplay,
        $Clip: self.$SetStyleClip,
        $MarginLeft: self.$SetStyleMarginLeft,
        $MarginTop: self.$SetStyleMarginTop,
        $Transform: self.$SetStyleTransform,
        $Position: self.$SetStylePosition,
        $ZIndex: self.$SetStyleZIndex
    };

    function GetStyleSetter() {
        return _StyleSetterReserved;
    }

    function GetStyleSetterEx() {
        GetStyleSetter();

        _StyleSetterReserved.$Transform = _StyleSetterReserved.$Transform;

        return _StyleSetterReserved;
    }

    self.$GetStyleSetter = GetStyleSetter;

    self.$GetStyleSetterEx = GetStyleSetterEx;

    self.$GetStyles = function (elmt, originStyles) {
        GetStyleSetter();

        var styles = {};

        each(originStyles, function (value, key) {
            if (StyleGetter[key]) {
                styles[key] = StyleGetter[key](elmt);
            }
        });

        return styles;
    };

    self.$SetStyles = function (elmt, styles) {
        var styleSetter = GetStyleSetter();

        each(styles, function (value, key) {
            styleSetter[key] && styleSetter[key](elmt, value);
        });
    };

    self.$SetStylesEx = function (elmt, styles) {
        GetStyleSetterEx();

        self.$SetStyles(elmt, styles);
    };

    $JssorMatrix$ = new function () {
        var _This = this;

        function Multiply(ma, mb) {
            var acs = ma[0].length;
            var rows = ma.length;
            var cols = mb[0].length;

            var matrix = [];

            for (var r = 0; r < rows; r++) {
                var row = matrix[r] = [];
                for (var c = 0; c < cols; c++) {
                    var unitValue = 0;

                    for (var ac = 0; ac < acs; ac++) {
                        unitValue += ma[r][ac] * mb[ac][c];
                    }

                    row[c] = unitValue;
                }
            }

            return matrix;
        }

        _This.$ScaleX = function (matrix, sx) {
            return _This.$ScaleXY(matrix, sx, 0);
        };

        _This.$ScaleY = function (matrix, sy) {
            return _This.$ScaleXY(matrix, 0, sy);
        };

        _This.$ScaleXY = function (matrix, sx, sy) {
            return Multiply(matrix, [[sx, 0], [0, sy]]);
        };

        _This.$TransformPoint = function (matrix, p) {
            var pMatrix = Multiply(matrix, [[p.x], [p.y]]);

            return new $JssorPoint$(pMatrix[0][0], pMatrix[1][0]);
        };
    };

    self.$CreateMatrix = function (alpha, scaleX, scaleY) {
        var cos = Math.cos(alpha);
        var sin = Math.sin(alpha);
        //var r11 = cos;
        //var r21 = sin;
        //var r12 = -sin;
        //var r22 = cos;

        //var m11 = cos * scaleX;
        //var m12 = -sin * scaleY;
        //var m21 = sin * scaleX;
        //var m22 = cos * scaleY;

        return [[cos * scaleX, -sin * scaleY], [sin * scaleX, cos * scaleY]];
    };

    self.$GetMatrixOffset = function (matrix, width, height) {
        var p1 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, -height / 2));
        var p2 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, -height / 2));
        var p3 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(width / 2, height / 2));
        var p4 = $JssorMatrix$.$TransformPoint(matrix, new $JssorPoint$(-width / 2, height / 2));

        return new $JssorPoint$(Math.min(p1.x, p2.x, p3.x, p4.x) + width / 2, Math.min(p1.y, p2.y, p3.y, p4.y) + height / 2);
    };
};

$JssorAnimator$ = function (delay, duration, options, elmt, fromStyles, toStyles) {
    delay = delay || 0;

    var _This = this;
    var _AutoPlay;
    var _Hiden;
    var _CombineMode;
    var _PlayToPosition;
    var _PlayDirection;
    var _NoStop;
    var _TimeStampLastFrame = 0;

    var _SubEasings;
    var _SubRounds;
    var _SubDurings;
    var _Callback;

    var _Position_Current = 0;
    var _Position_Display = 0;
    var _Hooked;

    var _Position_InnerBegin = delay;
    var _Position_InnerEnd = delay + duration;
    var _Position_OuterBegin;
    var _Position_OuterEnd;
    var _LoopLength;

    var _NestedAnimators = [];
    var _StyleSetter;

    function GetPositionRange(position, begin, end) {
        var range = 0;

        if (position < begin)
            range = -1;

        else if (position > end)
            range = 1;

        return range;
    }

    function GetInnerPositionRange(position) {
        return GetPositionRange(position, _Position_InnerBegin, _Position_InnerEnd);
    }

    function GetOuterPositionRange(position) {
        return GetPositionRange(position, _Position_OuterBegin, _Position_OuterEnd);
    }

    function Shift(offset) {
        _Position_OuterBegin += offset;
        _Position_OuterEnd += offset;
        _Position_InnerBegin += offset;
        _Position_InnerEnd += offset;

        _Position_Current += offset;
        _Position_Display += offset;

        $JssorUtils$.$Each(_NestedAnimators, function (animator) {
            animator, animator.$Shift(offset);
        });
    }

    function Locate(position, relative) {
        var offset = position - _Position_OuterBegin + delay * relative;

        Shift(offset);

        //$JssorDebug$.$Execute(function () {
        //    _This.$Position_InnerBegin = _Position_InnerBegin;
        //    _This.$Position_InnerEnd = _Position_InnerEnd;
        //    _This.$Position_OuterBegin = _Position_OuterBegin;
        //    _This.$Position_OuterEnd = _Position_OuterEnd;
        //});

        return _Position_OuterEnd;
    }

    function GoToPosition(positionOuter, force) {
        var trimedPositionOuter = positionOuter;

        if (_LoopLength && (trimedPositionOuter >= _Position_OuterEnd || trimedPositionOuter <= _Position_OuterBegin)) {
            trimedPositionOuter = ((trimedPositionOuter - _Position_OuterBegin) % _LoopLength + _LoopLength) % _LoopLength + _Position_OuterBegin;
        }

        if (!_Hooked || _NoStop || force || _Position_Current != trimedPositionOuter) {

            var positionToDisplay = Math.min(trimedPositionOuter, _Position_OuterEnd);
            positionToDisplay = Math.max(positionToDisplay, _Position_OuterBegin);

            if (!_Hooked || _NoStop || force || positionToDisplay != _Position_Display) {
                if (toStyles) {
                    var currentStyles = toStyles;

                    if (fromStyles) {
                        var interPosition = (positionToDisplay - _Position_InnerBegin) / (duration || 1);
                        if (options.$Optimize && $JssorUtils$.$IsBrowserChrome() && duration)
                            interPosition = Math.round(interPosition * duration / 16) / duration * 16;
                        if (options.$Reverse)
                            interPosition = 1 - interPosition;

                        currentStyles = {};

                        for (var key in toStyles) {
                            var round = _SubRounds[key] || 1;
                            var during = _SubDurings[key] || [0, 1];
                            var propertyInterPosition = (interPosition - during[0]) / during[1];
                            propertyInterPosition = Math.min(Math.max(propertyInterPosition, 0), 1);
                            propertyInterPosition = propertyInterPosition * round;
                            var floorPosition = Math.floor(propertyInterPosition);
                            if (propertyInterPosition != floorPosition)
                                propertyInterPosition -= floorPosition;

                            var easing = _SubEasings[key] || _SubEasings.$Default;
                            var easingValue = easing(propertyInterPosition);
                            var currentPropertyValue;
                            var value = fromStyles[key];
                            var toValue = toStyles[key];

                            if ($JssorUtils$.$IsNumeric(toValue)) {
                                currentPropertyValue = value + (toValue - value) * easingValue;
                            }
                            else {
                                currentPropertyValue = $JssorUtils$.$Extend({$Offset: {}}, fromStyles[key]);

                                $JssorUtils$.$Each(toValue.$Offset, function (rectX, n) {
                                    var offsetValue = rectX * easingValue;
                                    currentPropertyValue.$Offset[n] = offsetValue;
                                    currentPropertyValue[n] += offsetValue;
                                });
                            }
                            currentStyles[key] = currentPropertyValue;
                        }
                    }

                    if (fromStyles.$Zoom) {
                        currentStyles.$Transform = {
                            $Rotate: currentStyles.$Rotate || 0,
                            $Scale: currentStyles.$Zoom,
                            $OriginalWidth: options.$OriginalWidth,
                            $OriginalHeight: options.$OriginalHeight
                        };
                    }

                    if (toStyles.$Clip && options.$Move) {
                        var styleFrameNClipOffset = currentStyles.$Clip.$Offset;

                        var offsetY = (styleFrameNClipOffset.$Top || 0) + (styleFrameNClipOffset.$Bottom || 0);
                        var offsetX = (styleFrameNClipOffset.$Left || 0) + (styleFrameNClipOffset.$Right || 0);

                        currentStyles.$Left = (currentStyles.$Left || 0) + offsetX;
                        currentStyles.$Top = (currentStyles.$Top || 0) + offsetY;
                        currentStyles.$Clip.$Left -= offsetX;
                        currentStyles.$Clip.$Right -= offsetX;
                        currentStyles.$Clip.$Top -= offsetY;
                        currentStyles.$Clip.$Bottom -= offsetY;
                    }

                    if (currentStyles.$Clip && $JssorUtils$.$CanClearClip() && !currentStyles.$Clip.$Top && !currentStyles.$Clip.$Left && (currentStyles.$Clip.$Right == options.$OriginalWidth) && (currentStyles.$Clip.$Bottom == options.$OriginalHeight))
                        currentStyles.$Clip = null;

                    $JssorUtils$.$Each(currentStyles, function (value, key) {
                        _StyleSetter[key] && _StyleSetter[key](elmt, value);
                    });
                }

                _This.$OnInnerOffsetChange(_Position_Display - _Position_InnerBegin, positionToDisplay - _Position_InnerBegin);
            }

            _Position_Display = positionToDisplay;

            $JssorUtils$.$Each(_NestedAnimators, function (animator, i) {
                var nestedAnimator = positionOuter < _Position_Current ? _NestedAnimators[_NestedAnimators.length - i - 1] : animator;
                nestedAnimator.$GoToPosition(positionOuter, force);
            });

            var positionOld = _Position_Current;
            var positionNew = positionOuter;

            _Position_Current = trimedPositionOuter;
            _Hooked = true;

            _This.$OnPositionChange(positionOld, positionNew);
        }
    }

    function Join(animator, combineMode) {
        ///	<summary>
        ///		Combine another animator as nested animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        ///	<param name="combineMode" type="int">
        ///		0: parallel - place the animator parallel to this animator.
        ///		1: chain - chain the animator at the _Position_InnerEnd of this animator.
        ///	</param>
        $JssorDebug$.$Execute(function () {
            if (combineMode !== 0 && combineMode !== 1)
                $JssorDebug$.$Fail("Argument out of range, the value of 'combineMode' should be either 0 or 1.");
        });

        if (combineMode)
            animator.$Locate(_Position_OuterEnd, 1);

        _Position_OuterEnd = Math.max(_Position_OuterEnd, animator.$GetPosition_OuterEnd());
        _NestedAnimators.push(animator);
    }

    function PlayFrame() {
        if (_AutoPlay) {
            var now = $JssorUtils$.$GetNow();
            var timeOffset = Math.min(now - _TimeStampLastFrame, $JssorUtils$.$IsBrowserOpera() ? 80 : 20);
            var timePosition = _Position_Current + timeOffset * _PlayDirection;
            _TimeStampLastFrame = now;

            if (timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection)
                timePosition = _PlayToPosition;

            GoToPosition(timePosition);

            if (!_NoStop && timePosition * _PlayDirection >= _PlayToPosition * _PlayDirection) {
                Stop(_Callback);
            }
            else {
                $JssorUtils$.$Delay(PlayFrame, options.$Interval);
            }
        }
    }

    function PlayToPosition(toPosition, callback, noStop) {
        if (!_AutoPlay) {
            _AutoPlay = true;
            _NoStop = noStop
            _Callback = callback;
            toPosition = Math.max(toPosition, _Position_OuterBegin);
            toPosition = Math.min(toPosition, _Position_OuterEnd);
            _PlayToPosition = toPosition;
            _PlayDirection = _PlayToPosition < _Position_Current ? -1 : 1;
            _This.$OnStart();
            _TimeStampLastFrame = $JssorUtils$.$GetNow();
            PlayFrame();
        }
    }

    function Stop(callback) {
        if (_AutoPlay) {
            _NoStop = _AutoPlay = _Callback = false;
            _This.$OnStop();

            if (callback)
                callback();
        }
    }

    _This.$Play = function (positionLength, callback, noStop) {
        PlayToPosition(positionLength ? _Position_Current + positionLength : _Position_OuterEnd, callback, noStop);
    };

    _This.$PlayToPosition = function (position, callback, noStop) {
        PlayToPosition(position, callback, noStop);
    };

    _This.$PlayToBegin = function (callback, noStop) {
        PlayToPosition(_Position_OuterBegin, callback, noStop);
    };

    _This.$PlayToEnd = function (callback, noStop) {
        PlayToPosition(_Position_OuterEnd, callback, noStop);
    };

    _This.$Stop = function () {
        Stop();
    };

    _This.$Continue = function (toPosition) {
        PlayToPosition(toPosition);
    };

    _This.$GetPosition = function () {
        return _Position_Current;
    };

    _This.$GetPlayToPosition = function () {
        return _PlayToPosition;
    };

    _This.$GetPosition_Display = function () {
        return _Position_Display;
    };

    _This.$GoToPosition = GoToPosition;

    _This.$GoToBegin = function () {
        GoToPosition(_Position_OuterBegin, true);
    };

    _This.$GoToEnd = function () {
        GoToPosition(_Position_OuterEnd, true);
    };

    _This.$Move = function (offset) {
        GoToPosition(_Position_Current + offset);
    };

    _This.$CombineMode = function () {
        return _CombineMode;
    };

    _This.$GetDuration = function () {
        return duration;
    };

    _This.$IsPlaying = function () {
        return _AutoPlay;
    };

    _This.$IsOnTheWay = function () {
        return _Position_Current > _Position_InnerBegin && _Position_Current <= _Position_InnerEnd;
    };

    _This.$SetLoopLength = function (length) {
        _LoopLength = length;
    };

    _This.$Locate = Locate;

    _This.$Shift = Shift;

    _This.$Join = Join;

    _This.$Combine = function (animator) {
        ///	<summary>
        ///		Combine another animator parallel to this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 0);
    };

    _This.$Chain = function (animator) {
        ///	<summary>
        ///		Chain another animator at the _Position_InnerEnd of this animator
        ///	</summary>
        ///	<param name="animator" type="$JssorAnimator$">
        ///		An instance of $JssorAnimator$
        ///	</param>
        Join(animator, 1);
    };

    _This.$GetPosition_InnerBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerBegin;
    };

    _This.$GetPosition_InnerEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_InnerEnd;
    };

    _This.$GetPosition_OuterBegin = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterBegin;
    };

    _This.$GetPosition_OuterEnd = function () {
        ///	<summary>
        ///		Internal member function, do not use it.
        ///	</summary>
        ///	<private />
        ///	<returns type="int" />
        return _Position_OuterEnd;
    };

    _This.$OnPositionChange = $JssorUtils$.$EmptyFunction;
    _This.$OnStart = $JssorUtils$.$EmptyFunction;
    _This.$OnStop = $JssorUtils$.$EmptyFunction;
    _This.$OnInnerOffsetChange = $JssorUtils$.$EmptyFunction;
    _This.$Version = $JssorUtils$.$GetNow();

    //Constructor`  1
    {
        options = $JssorUtils$.$Extend({
            $Interval: 15
        }, options);

        //Sodo statement, for development time intellisence only
        $JssorDebug$.$Execute(function () {
            options = $JssorUtils$.$Extend({
                $LoopLength: undefined,
                $Setter: undefined,
                $Easing: undefined
            }, options);
        });

        _LoopLength = options.$LoopLength;

        _StyleSetter = $JssorUtils$.$Extend({}, $JssorUtils$.$GetStyleSetter(), options.$Setter);

        _Position_OuterBegin = _Position_InnerBegin = delay;
        _Position_OuterEnd = _Position_InnerEnd = delay + duration;

        var _SubRounds = options.$Round || {};
        var _SubDurings = options.$During || {};
        _SubEasings = $JssorUtils$.$Extend({$Default: $JssorUtils$.$IsFunction(options.$Easing) && options.$Easing || $JssorEasing$.$EaseSwing}, options.$Easing);
    }
};

function $JssorPlayerClass$() {

    var _SelfPlayer = this;
    var _PlayerControllers = [];

    function PlayerController(playerElement) {
        var _SelfPlayerController = this;
        var _PlayerInstance;
        var _PlayerInstantces = [];

        function OnPlayerInstanceDataAvailable(event) {
            var srcElement = $JssorUtils$.$GetEventSrcElement(event);
            _PlayerInstance = srcElement.pInstance;

            $JssorUtils$.$RemoveEvent(srcElement, "dataavailable", OnPlayerInstanceDataAvailable);
            $JssorUtils$.$Each(_PlayerInstantces, function (playerInstance) {
                if (playerInstance != _PlayerInstance) {
                    playerInstance.$Remove();
                }
            });

            playerElement.pTagName = _PlayerInstance.tagName;
            _PlayerInstantces = null;
        }

        function HandlePlayerInstance(playerInstanceElement) {
            var playerHandler;

            if (!playerInstanceElement.pInstance) {
                var playerHandlerAttribute = $JssorUtils$.$GetAttribute(playerInstanceElement, "pHandler");

                if ($JssorPlayer$[playerHandlerAttribute]) {
                    $JssorUtils$.$AddEvent(playerInstanceElement, "dataavailable", OnPlayerInstanceDataAvailable);
                    playerHandler = new $JssorPlayer$[playerHandlerAttribute](playerElement, playerInstanceElement);
                    _PlayerInstantces.push(playerHandler);

                    $JssorDebug$.$Execute(function () {
                        if ($JssorUtils$.$Type(playerHandler.$Remove) != "function") {
                            $JssorDebug$.$Fail("'pRemove' interface not implemented for player handler '" + playerHandlerAttribute + "'.");
                        }
                    });
                }
            }

            return playerHandler;
        }

        _SelfPlayerController.$InitPlayerController = function () {
            if (!playerElement.pInstance && !HandlePlayerInstance(playerElement)) {

                var playerInstanceElements = $JssorUtils$.$GetChildren(playerElement);

                $JssorUtils$.$Each(playerInstanceElements, function (playerInstanceElement) {
                    HandlePlayerInstance(playerInstanceElement);
                });
            }
        };
    }

    _SelfPlayer.$EVT_SWITCH = 21;

    _SelfPlayer.$FetchPlayers = function (elmt) {
        elmt = elmt || document.body;

        var playerElements = $JssorUtils$.$FindChildrenByAttribute(elmt, "player", null, true);

        $JssorUtils$.$Each(playerElements, function (playerElement) {
            if (!_PlayerControllers[playerElement.pId]) {
                playerElement.pId = _PlayerControllers.length;
                _PlayerControllers.push(new PlayerController(playerElement));
            }
            var playerController = _PlayerControllers[playerElement.pId];
            playerController.$InitPlayerController();
        });
    };
}
/* End */
;
;/* Start:"a:4:{s:4:"full";s:87:"/bitrix/templates/prostroy_default/assets/lib/jssor/jssor.slider.min.js?147567488959436";s:6:"source";s:71:"/bitrix/templates/prostroy_default/assets/lib/jssor/jssor.slider.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (g, f, b, d, c, e, z) {/*! Jssor */
    $Jssor$ = g.$Jssor$ = g.$Jssor$ || {};
    new (function () {
        this.$DebugMode = c;
        this.$Log = function (c, d) {
            var a = g.console || {}, b = this.$DebugMode;
            if (b && a.log)a.log(c); else b && d && alert(c)
        };
        this.$Error = function (b, d) {
            var c = g.console || {}, a = this.$DebugMode;
            if (a && c.error)c.error(b); else a && alert(b);
            if (a)throw d || new Error(b);
        };
        this.$Fail = function (a) {
            throw new Error(a);
        };
        this.$Assert = function (b, c) {
            var a = this.$DebugMode;
            if (a)if (!b)throw new Error("Assert failed " + c || "");
        };
        this.$Trace = function (c) {
            var a = g.console || {}, b = this.$DebugMode;
            b && a.log && a.log(c)
        };
        this.$Execute = function (b) {
            var a = this.$DebugMode;
            a && b()
        };
        this.$LiveStamp = function (b, c) {
            var a = f.createElement("DIV");
            a.setAttribute("id", c);
            b.$Live = a
        }
    });
    var m = function () {
        var b = this, a = {};
        b.$On = b.addEventListener = function (b, c) {
            if (typeof c != "function")return;
            if (!a[b])a[b] = [];
            a[b].push(c)
        };
        b.$Off = b.removeEventListener = function (e, d) {
            var b = a[e];
            if (typeof d != "function")return; else if (!b)return;
            for (var c = 0; c < b.length; c++)if (d == b[c]) {
                b.splice(c, 1);
                return
            }
        };
        b.$ClearEventListeners = function (b) {
            if (a[b])delete a[b]
        };
        b.$TriggerEvent = function (e) {
            var c = a[e], d = [];
            if (!c)return;
            for (var b = 1; b < arguments.length; b++)d.push(arguments[b]);
            for (var b = 0; b < c.length; b++)try {
                c[b].apply(g, d)
            } catch (f) {
            }
        }
    }, h;
    (function () {
        h = function (a, b) {
            this.x = typeof a == "number" ? a : 0;
            this.y = typeof b == "number" ? b : 0
        };
        var a = h.prototype;
        a.$Plus = function (a) {
            return new h(this.x + a.x, this.y + a.y)
        };
        a.$Minus = function (a) {
            return new h(this.x - a.x, this.y - a.y)
        };
        a.$Times = function (a) {
            return new h(this.x * a, this.y * a)
        };
        a.$Divide = function (a) {
            return new h(this.x / a, this.y / a)
        };
        a.$Negate = function () {
            return new h(-this.x, -this.y)
        };
        a.$DistanceTo = function (a) {
            return b.sqrt(b.pow(this.x - a.x, 2) + b.pow(this.y - a.y, 2))
        };
        a.$Apply = function (a) {
            return new h(a(this.x), a(this.y))
        };
        a.$Equals = function (a) {
            return a instanceof h && this.x === a.x && this.y === a.y
        };
        a.$ToString = function () {
            return "(" + this.x + "," + this.y + ")"
        }
    })();
    var l = g.$JssorEasing$ = {
        $EaseLinear: function (a) {
            return a
        }, $EaseGoBack: function (a) {
            return 1 - b.abs(2 - 1)
        }, $EaseSwing: function (a) {
            return -b.cos(a * b.PI) / 2 + .5
        }, $EaseInQuad: function (a) {
            return a * a
        }, $EaseOutQuad: function (a) {
            return -a * (a - 2)
        }, $EaseInOutQuad: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
        }, $EaseInCubic: function (a) {
            return a * a * a
        }, $EaseOutCubic: function (a) {
            return (a -= 1) * a * a + 1
        }, $EaseInOutCubic: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
        }, $EaseInQuart: function (a) {
            return a * a * a * a
        }, $EaseOutQuart: function (a) {
            return -((a -= 1) * a * a * a - 1)
        }, $EaseInOutQuart: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
        }, $EaseInQuint: function (a) {
            return a * a * a * a * a
        }, $EaseOutQuint: function (a) {
            return (a -= 1) * a * a * a * a + 1
        }, $EaseInOutQuint: function (a) {
            return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
        }, $EaseInSine: function (a) {
            return 1 - b.cos(a * b.PI / 2)
        }, $EaseOutSine: function (a) {
            return b.sin(a * b.PI / 2)
        }, $EaseInOutSine: function (a) {
            return -1 / 2 * (b.cos(b.PI * a) - 1)
        }, $EaseInExpo: function (a) {
            return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
        }, $EaseOutExpo: function (a) {
            return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
        }, $EaseInOutExpo: function (a) {
            return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
        }, $EaseInCirc: function (a) {
            return -(b.sqrt(1 - a * a) - 1)
        }, $EaseOutCirc: function (a) {
            return b.sqrt(1 - (a -= 1) * a)
        }, $EaseInOutCirc: function (a) {
            return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
        }, $EaseInElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
        }, $EaseOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .3, d = .075;
            return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
        }, $EaseInOutElastic: function (a) {
            if (!a || a == 1)return a;
            var c = .45, d = .1125;
            return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
        }, $EaseInBack: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        }, $EaseOutBack: function (a) {
            var b = 1.70158;
            return (a -= 1) * a * ((b + 1) * a + b) + 1
        }, $EaseInOutBack: function (a) {
            var b = 1.70158;
            return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
        }, $EaseInBounce: function (a) {
            return 1 - l.$EaseOutBounce(1 - a)
        }, $EaseOutBounce: function (a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
        }, $EaseInOutBounce: function (a) {
            return a < 1 / 2 ? l.$EaseInBounce(a * 2) * .5 : l.$EaseOutBounce(a * 2 - 1) * .5 + .5
        }, $EaseInWave: function (a) {
            return 1 - b.cos(a * b.PI * 2)
        }, $EaseOutWave: function (a) {
            return b.sin(a * b.PI * 2)
        }, $EaseOutJump: function (a) {
            return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
        }, $EaseInJump: function (a) {
            return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
        }
    }, i = g.$JssorDirection$ = {
        $TO_LEFT: 1,
        $TO_RIGHT: 2,
        $TO_TOP: 4,
        $TO_BOTTOM: 8,
        $HORIZONTAL: 3,
        $VERTICAL: 12,
        $LEFTRIGHT: 3,
        $TOPBOTOM: 12,
        $TOPLEFT: 5,
        $TOPRIGHT: 6,
        $BOTTOMLEFT: 9,
        $BOTTOMRIGHT: 10,
        $AROUND: 15,
        $GetDirectionHorizontal: function (a) {
            return a & 3
        },
        $GetDirectionVertical: function (a) {
            return a & 12
        },
        $ChessHorizontal: function (a) {
            return (~a & 3) + (a & 12)
        },
        $ChessVertical: function (a) {
            return (~a & 12) + (a & 3)
        },
        $IsToLeft: function (a) {
            return (a & 3) == 1
        },
        $IsToRight: function (a) {
            return (a & 3) == 2
        },
        $IsToTop: function (a) {
            return (a & 12) == 4
        },
        $IsToBottom: function (a) {
            return (a & 12) == 8
        },
        $IsHorizontal: function (a) {
            return (a & 3) > 0
        },
        $IsVertical: function (a) {
            return (a & 12) > 0
        }
    }, q = {
        $BACKSPACE: 8,
        $COMMA: 188,
        $DELETE: 46,
        $DOWN: 40,
        $END: 35,
        $ENTER: 13,
        $ESCAPE: 27,
        $HOME: 36,
        $LEFT: 37,
        $NUMPAD_ADD: 107,
        $NUMPAD_DECIMAL: 110,
        $NUMPAD_DIVIDE: 111,
        $NUMPAD_ENTER: 108,
        $NUMPAD_MULTIPLY: 106,
        $NUMPAD_SUBTRACT: 109,
        $PAGE_DOWN: 34,
        $PAGE_UP: 33,
        $PERIOD: 190,
        $RIGHT: 39,
        $SPACE: 32,
        $TAB: 9,
        $UP: 38
    }, o, n = {
        $UNKNOWN: 0,
        $IE: 1,
        $FIREFOX: 2,
        $SAFARI: 3,
        $CHROME: 4,
        $OPERA: 5
    }, y = 1, u = 2, w = 3, v = 4, x = 5, j, a = g.$JssorUtils$ = new function () {
        var i = this, m = n.$UNKNOWN, j = 0, q = 0, P = 0, t = 0, cb = navigator.appName, k = navigator.userAgent;

        function D() {
            if (!m)if (cb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                var d = k.indexOf("MSIE");
                m = n.$IE;
                q = parseFloat(k.substring(d + 5, k.indexOf(";", d)));
                /*@cc_on P=@_jscript_version@*/
                ;
                j = f.documentMode || q
            } else if (cb == "Netscape" && !!g.addEventListener) {
                var c = k.indexOf("Firefox"), a = k.indexOf("Safari"), h = k.indexOf("Chrome"), b = k.indexOf("AppleWebKit");
                if (c >= 0) {
                    m = n.$FIREFOX;
                    j = parseFloat(k.substring(c + 8))
                } else if (a >= 0) {
                    var i = k.substring(0, a).lastIndexOf("/");
                    m = h >= 0 ? n.$CHROME : n.$SAFARI;
                    j = parseFloat(k.substring(i + 1, a))
                }
                if (b >= 0)t = parseFloat(k.substring(b + 12))
            } else {
                var e = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
                if (e) {
                    m = n.$OPERA;
                    j = parseFloat(e[2])
                }
            }
        }

        function l() {
            D();
            return m == y
        }

        function G() {
            return l() && (j < 6 || f.compatMode == "BackCompat")
        }

        function V() {
            D();
            return m == u
        }

        function M() {
            D();
            return m == w
        }

        function hb() {
            D();
            return m == v
        }

        function ib() {
            D();
            return m == x
        }

        function R() {
            return M() && t > 534 && t < 535
        }

        function eb() {
            return M() && t < 535
        }

        function s() {
            return l() && j < 9
        }

        var B;

        function r(a) {
            if (!B) {
                p(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
                    if (!i.$IsUndefined(a.style[b])) {
                        B = b;
                        return c
                    }
                });
                B = B || "transform"
            }
            return B
        }

        function gb(a, b) {
            return b && a != f.body ? f.body : a.offsetParent
        }

        function ab(a) {
            return Object.prototype.toString.call(a)
        }

        var J;

        function p(a, c) {
            if (ab(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (c(a[b], b, a))break
            } else for (var d in a)if (c(a[d], d, a))break
        }

        function jb() {
            if (!J) {
                J = {};
                p(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    J["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return J
        }

        function A(a) {
            return a == d ? String(a) : jb()[ab(a)] || "object"
        }

        function kb(a) {
            if (!a || A(a) !== "object" || a.nodeType || i.$IsWindow(a))return e;
            var b = Object.prototype.hasOwnProperty;
            try {
                if (a.constructor && !b.call(a, "constructor") && !b.call(a.constructor.prototype, "isPrototypeOf"))return e
            } catch (d) {
                return e
            }
            var c;
            for (c in a);
            return c === z || b.call(a, c)
        }

        function bb(b, a) {
            setTimeout(b, a || 0)
        }

        function I(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            p(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function W(b, a) {
            if (j < 9)b.style.filter = a
        }

        function fb(b, a, c) {
            if (P < 9) {
                var e = b.style.filter, g = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), f = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "", d = I(e, [g], f);
                W(b, d);
                i.$SetStyleMarginTop(b, c.y);
                i.$SetStyleMarginLeft(b, c.x)
            }
        }

        i.$IsBrowserIE = l;
        i.$IsBrowserIeQuirks = G;
        i.$IsBrowserFireFox = V;
        i.$IsBrowserSafari = M;
        i.$IsBrowserChrome = hb;
        i.$IsBrowserOpera = ib;
        i.$IsBrowserBadTransform = R;
        i.$IsBrowserSafeHWA = eb;
        i.$IsBrowserIe9Earlier = s;
        i.$GetBrowserVersion = function () {
            return j
        };
        i.$GetBrowserEngineVersion = function () {
            return q || j
        };
        i.$GetWebKitVersion = function () {
            return t
        };
        i.$Delay = bb;
        i.$GetElement = function (a) {
            if (i.$IsString(a))a = f.getElementById(a);
            return a
        };
        i.$GetElementPosition = function (a) {
            a = i.$GetElement(a);
            var b = new h;
            while (a) {
                b.x += a.offsetLeft;
                b.y += a.offsetTop;
                var c = i.$GetElementStyle(a).position == "fixed";
                if (c)b = b.$Plus(i.$GetPageScroll(g));
                a = gb(a, c)
            }
            return b
        };
        i.$GetElementSize = function (a) {
            a = i.$GetElement(a);
            return new h(a.clientWidth, a.clientHeight)
        };
        i.$GetElementStyle = function (a) {
            a = i.$GetElement(a);
            return a.currentStyle ? a.currentStyle : g.getComputedStyle ? g.getComputedStyle(a, "") : void 0
        };
        i.$GetEvent = function (a) {
            return a ? a : g.event
        };
        i.$GetEventDstElement = function (a) {
            a = i.$GetEvent(a);
            return a.relatedTarget || a.toElement
        };
        i.$GetMousePosition = function (a) {
            a = i.$GetEvent(a);
            var b = new h;
            if (a.type == "DOMMouseScroll" && V() && j < 3) {
                b.x = a.screenX;
                b.y = a.screenY
            } else if (typeof a.pageX == "number") {
                b.x = a.pageX;
                b.y = a.pageY
            } else if (typeof a.clientX == "number") {
                b.x = a.clientX + f.body.scrollLeft + f.documentElement.scrollLeft;
                b.y = a.clientY + f.body.scrollTop + f.documentElement.scrollTop
            }
            return b
        };
        i.$GetMouseScroll = function (a) {
            a = i.$GetEvent(a);
            var c = 0;
            if (typeof a.wheelDelta == "number")c = a.wheelDelta; else if (typeof a.detail == "number")c = a.detail * -1;
            return c ? c / b.abs(c) : 0
        };
        i.$GetPageScroll = function (b) {
            var a = new h, c = b.document.documentElement || {}, d = b.document.body || {};
            if (typeof b.pageXOffset == "number") {
                a.x = b.pageXOffset;
                a.y = b.pageYOffset
            } else if (d.scrollLeft || d.scrollTop) {
                a.x = d.scrollLeft;
                a.y = d.scrollTop
            } else if (c.scrollLeft || c.scrollTop) {
                a.x = c.scrollLeft;
                a.y = c.scrollTop
            }
            return a
        };
        i.$GetWindowSize = function (c) {
            var a = new h, b = G() ? c.document.body : c.document.documentElement;
            a.x = b.clientWidth;
            a.y = b.clientHeight;
            return a
        };
        i.$GetStyleOpacity = function (b) {
            if (l() && q < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? parseFloat(a[1]) / 100 : 1
            } else return parseFloat(b.style.opacity || "1")
        };
        i.$SetStyleOpacity = i.$setElementOpacity = function (c, a, f) {
            if (l() && q < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = I(h, [i], d);
                W(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        };
        function O(g, c) {
            var f = c.$Rotate || 0, e = c.$Scale || 1;
            if (s()) {
                var k = i.$CreateMatrix(f / 180 * b.PI, e, e);
                fb(g, !f && e == 1 ? d : k, i.$GetMatrixOffset(k, c.$OriginalWidth, c.$OriginalHeight))
            } else {
                var h = r(g);
                if (h) {
                    var j = "rotate(" + f % 360 + "deg) scale(" + e + ")";
                    if (a.$IsBrowserChrome() && t > 535)j += " perspective(2000px)";
                    g.style[h] = j
                }
            }
        }

        i.$SetStyleTransform = function (b, a) {
            if (R())bb(i.$CreateCallback(d, O, b, a)); else O(b, a)
        };
        i.$SetStyleTransformOrigin = function (b, c) {
            var a = r(b);
            if (a)b.style[a + "Origin"] = c
        };
        i.$SetStyleScale = function (a, c) {
            if (l() && q < 9 || q < 10 && G())a.style.zoom = c == 1 ? "" : c; else {
                var b = r(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = I(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        i.$EnableHWA = function (a) {
            if (!a.style[r(a)] || a.style[r(a)] == "none")a.style[r(a)] = "perspective(2000px)"
        };
        i.$DisableHWA = function (a) {
            a.style[r(a)] = "none"
        };
        i.$GetStyleFloat = function (a) {
            return l() ? a.style.styleFloat : a.style.cssFloat
        };
        i.$SetStyleFloat = function (b, a) {
            if (l())b.style.styleFloat = a; else b.style.cssFloat = a
        };
        var Y = 0, X = 0, E;

        function db(g) {
            var f = c, a = G() ? g.document.body : g.document.documentElement;
            if (a) {
                var d = a.offsetWidth - Y, b = a.offsetHeight - X;
                if (d || b) {
                    Y += d;
                    X += b
                } else f = e
            }
            f && p(E, function (a) {
                a()
            })
        }

        i.$OnWindowResize = function (b, a) {
            if (l() && q < 9)if (!E) {
                E = [a];
                a = i.$CreateCallback(d, db, b)
            } else {
                E.push(a);
                return
            }
            i.$AddEvent(b, "resize", a)
        };
        i.$AddEvent = function (a, c, d, b) {
            a = i.$GetElement(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        i.$RemoveEvent = function (a, c, d, b) {
            a = i.$GetElement(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        i.$FireEvent = function (c, b) {
            var a;
            if (f.createEvent) {
                a = f.createEvent("HTMLEvents");
                a.initEvent(b, e, e);
                c.dispatchEvent(a)
            } else {
                var d = "on" + b;
                a = f.createEventObject();
                c.fireEvent(d, a)
            }
        };
        i.$AddEventBrowserMouseUp = function (b, a) {
            i.$AddEvent(s() ? f : g, "mouseup", b, a)
        };
        i.$RemoveEventBrowserMouseUp = function (b, a) {
            i.$RemoveEvent(s() ? f : g, "mouseup", b, a)
        };
        i.$AddEventBrowserMouseDown = function (b, a) {
            i.$AddEvent(s() ? f : g, "mousedown", b, a)
        };
        i.$RemoveEventBrowserMouseDown = function (b, a) {
            i.$RemoveEvent(s() ? f : g, "mousedown", b, a)
        };
        i.$CancelEvent = function (a) {
            a = i.$GetEvent(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = e
        };
        i.$StopEvent = function (a) {
            a = i.$GetEvent(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        i.$CreateCallback = function (e, d) {
            for (var b = [], a = 2; a < arguments.length; a++)b.push(arguments[a]);
            var c = function () {
                for (var c = b.concat([]), a = 0; a < arguments.length; a++)c.push(arguments[a]);
                return d.apply(e, c)
            };
            return c
        };
        var K;
        i.$FreeElement = function (b) {
            if (!K)K = i.$CreateDivElement();
            if (b) {
                a.$AppendChild(K, b);
                a.$ClearInnerHtml(K)
            }
        };
        i.$SetInnerText = function (a, c) {
            var b = f.createTextNode(c);
            i.$ClearInnerHtml(a);
            a.appendChild(b)
        };
        i.$GetInnerText = function (a) {
            return a.textContent || a.innerText
        };
        i.$GetInnerHtml = function (a) {
            return a.innerHTML
        };
        i.$SetInnerHtml = function (a, b) {
            a.innerHTML = b
        };
        i.$ClearInnerHtml = function (a) {
            a.innerHTML = ""
        };
        i.$EncodeHtml = function (b) {
            var a = i.$CreateDivElement();
            i.$SetInnerText(a, b);
            return i.$GetInnerHtml(a)
        };
        i.$DecodeHtml = function (b) {
            var a = i.$CreateDivElement();
            i.$SetInnerHtml(a, b);
            return i.$GetInnerText(a)
        };
        i.$SelectElement = function (c) {
            var b;
            if (g.getSelection)b = g.getSelection();
            var a = d;
            if (f.createRange) {
                a = f.createRange();
                a.selectNode(c)
            } else {
                a = f.body.createTextRange();
                a.moveToElementText(c);
                a.select()
            }
            b && b.addRange(a)
        };
        i.$DeselectElements = function () {
            if (f.selection)f.selection.empty(); else g.getSelection && g.getSelection().removeAllRanges()
        };
        i.$GetChildren = function (c) {
            for (var b = [], a = c.firstChild; a; a = a.nextSibling)a.nodeType == 1 && b.push(a);
            return b
        };
        function N(a, c, b, f) {
            if (!b)b = "u";
            for (a = a ? a.firstChild : d; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.getAttribute(b) == c)return a;
                if (f) {
                    var e = N(a, c, b, f);
                    if (e)return e
                }
            }
        }

        i.$FindFirstChildByAttribute = N;
        function S(a, c, e) {
            for (a = a ? a.firstChild : d; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (e) {
                    var b = S(a, c, e);
                    if (b)return b
                }
            }
        }

        i.$FindFirstChildByTag = S;
        function T(a, e, g) {
            var b = [];
            for (a = a ? a.firstChild : d; a; a = a.nextSibling)if (a.nodeType == 1) {
                (!e || a.tagName == e) && b.push(a);
                if (g) {
                    var f = T(a, e, c);
                    if (f.length)b = b.concat(f)
                }
            }
            return b
        }

        i.$FindChildrenByTag = T;
        i.$GetElementsByTagName = function (b, a) {
            return b.getElementsByTagName(a)
        };
        i.$Extend = function (c) {
            for (var b = 1; b < arguments.length; b++) {
                var a = arguments[b];
                if (a)for (var d in a)c[d] = a[d]
            }
            return c
        };
        i.$Unextend = function (b, d) {
            var c = {};
            for (var a in b)if (b[a] != d[a])c[a] = b[a];
            return c
        };
        i.$IsUndefined = function (a) {
            return A(a) == "undefined"
        };
        i.$IsFunction = function (a) {
            return A(a) == "function"
        };
        i.$IsArray = Array.isArray || function (a) {
                return A(a) == "array"
            };
        i.$IsString = function (a) {
            return A(a) == "string"
        };
        i.$IsNumeric = function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        };
        i.$IsWindow = function (a) {
            return a != d && a == a.window
        };
        i.$Type = A;
        i.$Each = p;
        i.$IsPlainObject = kb;
        i.$CreateDivElement = function (a) {
            return i.$CreateElement("DIV", a)
        };
        i.$CreateSpanElement = function (a) {
            return i.$CreateElement("SPAN", a)
        };
        i.$CreateElement = function (b, a) {
            a = a || f;
            return a.createElement(b)
        };
        i.$EmptyFunction = function () {
        };
        i.$GetAttribute = function (a, b) {
            return a.getAttribute(b)
        };
        i.$SetAttribute = function (b, c, a) {
            b.setAttribute(c, a)
        };
        i.$GetClassName = function (a) {
            return a.className
        };
        i.$SetClassName = function (b, a) {
            b.className = a ? a : ""
        };
        i.$GetStyleCursor = function (a) {
            return a.style.cursor
        };
        i.$SetStyleCursor = function (b, a) {
            b.style.cursor = a
        };
        i.$GetStyleDisplay = function (a) {
            return a.style.display
        };
        i.$SetStyleDisplay = function (b, a) {
            b.style.display = a || ""
        };
        i.$GetStyleOverflow = function (a) {
            return a.style.overflow
        };
        i.$SetStyleOverflow = function (b, a) {
            b.style.overflow = a
        };
        i.$GetStyleOverflowX = function (a) {
            return a.style.overflowX
        };
        i.$SetStyleOverflowX = function (b, a) {
            b.style.overflowX = a
        };
        i.$GetStyleOverflowY = function (a) {
            return a.style.overflowY
        };
        i.$SetStyleOverflowY = function (b, a) {
            b.style.overflowY = a
        };
        i.$GetParentNode = function (a) {
            return a.parentNode
        };
        i.$HideElement = function (a) {
            i.$SetStyleDisplay(a, "none")
        };
        i.$HideElements = function (b) {
            for (var a = 0; a < b.length; a++)i.$HideElement(b[a])
        };
        i.$ShowElement = function (a, b) {
            i.$SetStyleDisplay(a, b == e ? "none" : "")
        };
        i.$ShowElements = function (b) {
            for (var a = 0; a < b.length; a++)i.$ShowElement(b[a])
        };
        i.$GetStylePosition = function (a) {
            return a.style.position
        };
        i.$SetStylePosition = function (b, a) {
            b.style.position = a
        };
        i.$GetStyleTop = function (a) {
            return parseInt(a.style.top, 10)
        };
        i.$SetStyleTop = function (a, b) {
            a.style.top = b + "px"
        };
        i.$GetStyleRight = function (a) {
            return parseInt(a.style.right, 10)
        };
        i.$SetStyleRight = function (b, a) {
            b.style.right = a + "px"
        };
        i.$GetStyleBottom = function (a) {
            return parseInt(a.style.bottom, 10)
        };
        i.$SetStyleBottom = function (b, a) {
            b.style.bottom = a + "px"
        };
        i.$GetStyleLeft = function (a) {
            return parseInt(a.style.left, 10)
        };
        i.$SetStyleLeft = function (a, b) {
            a.style.left = b + "px"
        };
        i.$GetStyleWidth = function (a) {
            return parseInt(a.style.width, 10)
        };
        i.$SetStyleWidth = function (c, a) {
            c.style.width = b.max(a, 0) + "px"
        };
        i.$GetStyleHeight = function (a) {
            return parseInt(a.style.height, 10)
        };
        i.$SetStyleHeight = function (c, a) {
            c.style.height = b.max(a, 0) + "px"
        };
        i.$GetStyleCssText = function (a) {
            return a.style.cssText
        };
        i.$SetStyleCssText = function (b, a) {
            b.style.cssText = a
        };
        i.$RemoveAttribute = function (b, a) {
            b.removeAttribute(a)
        };
        i.$GetBorderWidth = function (a) {
            return parseInt(a.style.borderWidth, 10)
        };
        i.$SetBorderWdith = function (b, a) {
            b.style.width = a + "px"
        };
        i.$GetStyleMarginLeft = function (a) {
            return parseInt(a.style.marginLeft, 10) || 0
        };
        i.$SetStyleMarginLeft = function (b, a) {
            b.style.marginLeft = a + "px"
        };
        i.$GetStyleMarginTop = function (a) {
            return parseInt(a.style.marginTop, 10) || 0
        };
        i.$SetStyleMarginTop = function (b, a) {
            b.style.marginTop = a + "px"
        };
        i.$GetStyleMarginBottom = function (a) {
            return parseInt(a.style.marginBottom, 10) || 0
        };
        i.$SetStyleMarginBottom = function (b, a) {
            b.style.marginBottom = a + "px"
        };
        i.$GetStyleMarginRight = function (a) {
            return parseInt(a.style.marginRight, 10) || 0
        };
        i.$SetStyleMarginRight = function (b, a) {
            b.style.marginRight = a + "px"
        };
        i.$GetStyleBorder = function (a) {
            return a.style.border
        };
        i.$SetStyleBorder = function (b, a) {
            b.style.border = a
        };
        i.$GetStyleBorderWidth = function (a) {
            return parseInt(a.style.borderWidth)
        };
        i.$SetStyleBorderWidth = function (b, a) {
            b.style.borderWidth = a + "px"
        };
        i.$GetStyleBorderStyle = function (a) {
            return a.style.borderStyle
        };
        i.$SetStyleBorderStyle = function (b, a) {
            b.style.borderStyle = a
        };
        i.$GetStyleBorderColor = function (a) {
            return a.style.borderColor
        };
        i.$SetStyleBorderColor = function (b, a) {
            b.style.borderColor = a
        };
        i.$GetStyleVibility = function (a) {
            return a.style.vibility
        };
        i.$SetStyleVisibility = function (b, a) {
            b.style.visibility = a
        };
        i.$GetStyleZIndex = function (a) {
            return parseInt(a.style.zIndex) || 0
        };
        i.$SetStyleZIndex = function (c, a) {
            c.style.zIndex = b.ceil(a)
        };
        i.$GetStyleBackgroundColor = function (a) {
            return a.style.backgroundColor
        };
        i.$SetStyleBackgroundColor = function (b, a) {
            b.style.backgroundColor = a
        };
        i.$GetStyleColor = function (a) {
            return a.style.color
        };
        i.$SetStyleColor = function (b, a) {
            b.style.color = a
        };
        i.$GetStyleBackgroundImage = function (a) {
            return a.style.backgroundImage
        };
        i.$SetStyleBackgroundImage = function (b, a) {
            b.style.backgroundImage = a
        };
        i.$CanClearClip = function () {
            return l() && j < 10
        };
        i.$SetStyleClip = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)"; else {
                var g = i.$GetStyleCssText(d), f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = I(g, f, "");
                a.$SetStyleCssText(d, e)
            }
        };
        i.$GetStyleZoom = function (a) {
            return a.style.zoom
        };
        i.$SetStyleZoom = function (a, b) {
            return a.style.zoom = b
        };
        i.$SetStyleClear = function (b, a) {
            b.style.clear = a
        };
        i.$GetNow = function () {
            return +new Date
        };
        i.$AppendChild = function (b, a) {
            b.appendChild(a)
        };
        i.$AppendChildren = function (b, a) {
            p(a, function (a) {
                i.$AppendChild(b, a)
            })
        };
        i.$InsertBefore = function (c, b, a) {
            c.insertBefore(b, a)
        };
        i.$InsertAdjacentHtml = function (b, a, c) {
            b.insertAdjacentHTML(a, c)
        };
        i.$RemoveChild = function (b, a) {
            b.removeChild(a)
        };
        i.$RemoveChildren = function (b, a) {
            p(a, function (a) {
                i.$RemoveChild(b, a)
            })
        };
        i.$ClearChildren = function (a) {
            i.$RemoveChildren(a, i.$GetChildren(a))
        };
        i.$ParseInt = function (b, a) {
            return parseInt(b, a || 10)
        };
        i.$ParseFloat = function (a) {
            return parseFloat(a)
        };
        i.$IsChild = function (b, a) {
            var c = f.body;
            while (a && b != a && c != a)try {
                a = a.parentNode
            } catch (d) {
                return e
            }
            return b == a
        };
        i.$ToLowerCase = function (a) {
            if (a)a = a.toLowerCase();
            return a
        };
        i.$CloneNode = function (b, a) {
            return b.cloneNode(a)
        };
        function L(b, a, c) {
            a.onload = d;
            a.abort = d;
            b && b(a, c)
        }

        i.$LoadImage = function (e, b) {
            if (i.$IsBrowserOpera() && j < 11.6 || !e)L(b, d); else {
                var a = new Image;
                a.onload = i.$CreateCallback(d, L, b, a);
                a.onabort = i.$CreateCallback(d, L, b, a, c);
                a.src = e
            }
        };
        i.$LoadImages = function (e, b, f) {
            var d = e.length + 1;

            function c(a) {
                d--;
                if (b && a && a.src == b.src)b = a;
                !d && f && f(b)
            }

            a.$Each(e, function (b) {
                a.$LoadImage(b.src, c)
            });
            c()
        };
        i.$BuildElement = function (d, k, j, i) {
            if (i)d = a.$CloneNode(d, c);
            for (var h = a.$GetElementsByTagName(d, k), f = h.length - 1; f > -1; f--) {
                var b = h[f], e = a.$CloneNode(j, c);
                a.$SetClassName(e, a.$GetClassName(b));
                a.$SetStyleCssText(e, a.$GetStyleCssText(b));
                var g = a.$GetParentNode(b);
                a.$InsertBefore(g, e, b);
                a.$RemoveChild(g, b)
            }
            return d
        };
        var C;

        function lb(b) {
            var g = this, h, d, j;

            function f() {
                var c = h;
                if (d)c += "dn"; else if (j)c += "av";
                a.$SetClassName(b, c)
            }

            function k() {
                C.push(g);
                d = c;
                f()
            }

            g.$MouseUp = function () {
                d = e;
                f()
            };
            g.$Activate = function (a) {
                j = a;
                f()
            };
            b = i.$GetElement(b);
            if (!C) {
                i.$AddEventBrowserMouseUp(function () {
                    var a = C;
                    C = [];
                    p(a, function (a) {
                        a.$MouseUp()
                    })
                });
                C = []
            }
            h = i.$GetClassName(b);
            a.$AddEvent(b, "mousedown", k)
        }

        i.$Buttonize = function (a) {
            return new lb(a)
        };
        var Z = {
            $Opacity: i.$GetStyleOpacity,
            $Top: i.$GetStyleTop,
            $Left: i.$GetStyleLeft,
            $Width: i.$GetStyleWidth,
            $Height: i.$GetStyleHeight,
            $Position: i.$GetStylePosition,
            $Display: i.$GetStyleDisplay,
            $ZIndex: i.$GetStyleZIndex
        }, F = {
            $Opacity: i.$SetStyleOpacity,
            $Top: i.$SetStyleTop,
            $Left: i.$SetStyleLeft,
            $Width: i.$SetStyleWidth,
            $Height: i.$SetStyleHeight,
            $Display: i.$SetStyleDisplay,
            $Clip: i.$SetStyleClip,
            $MarginLeft: i.$SetStyleMarginLeft,
            $MarginTop: i.$SetStyleMarginTop,
            $Transform: i.$SetStyleTransform,
            $Position: i.$SetStylePosition,
            $ZIndex: i.$SetStyleZIndex
        };

        function H() {
            return F
        }

        function U() {
            H();
            F.$Transform = F.$Transform;
            return F
        }

        i.$GetStyleSetter = H;
        i.$GetStyleSetterEx = U;
        i.$GetStyles = function (c, b) {
            H();
            var a = {};
            p(b, function (d, b) {
                if (Z[b])a[b] = Z[b](c)
            });
            return a
        };
        i.$SetStyles = function (c, b) {
            var a = H();
            p(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        i.$SetStylesEx = function (b, a) {
            U();
            i.$SetStyles(b, a)
        };
        o = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.$ScaleX = function (b, c) {
                return a.$ScaleXY(b, c, 0)
            };
            a.$ScaleY = function (b, c) {
                return a.$ScaleXY(b, 0, c)
            };
            a.$ScaleXY = function (a, c, d) {
                return b(a, [[c, 0], [0, d]])
            };
            a.$TransformPoint = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return new h(a[0][0], a[1][0])
            }
        };
        i.$CreateMatrix = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return [[e * a, -f * c], [f * a, e * c]]
        };
        i.$GetMatrixOffset = function (d, c, a) {
            var e = o.$TransformPoint(d, new h(-c / 2, -a / 2)), f = o.$TransformPoint(d, new h(c / 2, -a / 2)), g = o.$TransformPoint(d, new h(c / 2, a / 2)), i = o.$TransformPoint(d, new h(-c / 2, a / 2));
            return new h(b.min(e.x, f.x, g.x, i.x) + c / 2, b.min(e.y, f.y, g.y, i.y) + a / 2)
        }
    };
    j = function (n, m, g, O, z, x) {
        n = n || 0;
        var f = this, r, K, o, p, y, A = 0, C, M, L, D, j = 0, t = 0, E, k = n, s = n + m, i, h, q, u = [], B;

        function I(b) {
            i += b;
            h += b;
            k += b;
            s += b;
            j += b;
            t += b;
            a.$Each(u, function (a) {
                a, a.$Shift(b)
            })
        }

        function N(a, b) {
            var c = a - i + n * b;
            I(c);
            return h
        }

        function w(w, G) {
            var n = w;
            if (q && (n >= h || n <= i))n = ((n - i) % q + q) % q + i;
            if (!E || y || G || j != n) {
                var p = b.min(n, h);
                p = b.max(p, i);
                if (!E || y || G || p != t) {
                    if (x) {
                        var e = x;
                        if (z) {
                            var s = (p - k) / (m || 1);
                            if (g.$Optimize && a.$IsBrowserChrome() && m)s = b.round(s * m / 16) / m * 16;
                            if (g.$Reverse)s = 1 - s;
                            e = {};
                            for (var o in x) {
                                var R = M[o] || 1, J = L[o] || [0, 1], l = (s - J[0]) / J[1];
                                l = b.min(b.max(l, 0), 1);
                                l = l * R;
                                var H = b.floor(l);
                                if (l != H)l -= H;
                                var Q = C[o] || C.$Default, I = Q(l), r, K = z[o], F = x[o];
                                if (a.$IsNumeric(F))r = K + (F - K) * I; else {
                                    r = a.$Extend({$Offset: {}}, z[o]);
                                    a.$Each(F.$Offset, function (c, b) {
                                        var a = c * I;
                                        r.$Offset[b] = a;
                                        r[b] += a
                                    })
                                }
                                e[o] = r
                            }
                        }
                        if (z.$Zoom)e.$Transform = {
                            $Rotate: e.$Rotate || 0,
                            $Scale: e.$Zoom,
                            $OriginalWidth: g.$OriginalWidth,
                            $OriginalHeight: g.$OriginalHeight
                        };
                        if (x.$Clip && g.$Move) {
                            var v = e.$Clip.$Offset, D = (v.$Top || 0) + (v.$Bottom || 0), A = (v.$Left || 0) + (v.$Right || 0);
                            e.$Left = (e.$Left || 0) + A;
                            e.$Top = (e.$Top || 0) + D;
                            e.$Clip.$Left -= A;
                            e.$Clip.$Right -= A;
                            e.$Clip.$Top -= D;
                            e.$Clip.$Bottom -= D
                        }
                        if (e.$Clip && a.$CanClearClip() && !e.$Clip.$Top && !e.$Clip.$Left && e.$Clip.$Right == g.$OriginalWidth && e.$Clip.$Bottom == g.$OriginalHeight)e.$Clip = d;
                        a.$Each(e, function (b, a) {
                            B[a] && B[a](O, b)
                        })
                    }
                    f.$OnInnerOffsetChange(t - k, p - k)
                }
                t = p;
                a.$Each(u, function (b, c) {
                    var a = w < j ? u[u.length - c - 1] : b;
                    a.$GoToPosition(w, G)
                });
                var P = j, N = w;
                j = n;
                E = c;
                f.$OnPositionChange(P, N)
            }
        }

        function F(a, c) {
            c && a.$Locate(h, 1);
            h = b.max(h, a.$GetPosition_OuterEnd());
            u.push(a)
        }

        function H() {
            if (r) {
                var d = a.$GetNow(), e = b.min(d - A, a.$IsBrowserOpera() ? 80 : 20), c = j + e * p;
                A = d;
                if (c * p >= o * p)c = o;
                w(c);
                if (!y && c * p >= o * p)J(D); else a.$Delay(H, g.$Interval)
            }
        }

        function v(d, e, g) {
            if (!r) {
                r = c;
                y = g;
                D = e;
                d = b.max(d, i);
                d = b.min(d, h);
                o = d;
                p = o < j ? -1 : 1;
                f.$OnStart();
                A = a.$GetNow();
                H()
            }
        }

        function J(a) {
            if (r) {
                y = r = D = e;
                f.$OnStop();
                a && a()
            }
        }

        f.$Play = function (a, b, c) {
            v(a ? j + a : h, b, c)
        };
        f.$PlayToPosition = function (b, a, c) {
            v(b, a, c)
        };
        f.$PlayToBegin = function (a, b) {
            v(i, a, b)
        };
        f.$PlayToEnd = function (a, b) {
            v(h, a, b)
        };
        f.$Stop = function () {
            J()
        };
        f.$Continue = function (a) {
            v(a)
        };
        f.$GetPosition = function () {
            return j
        };
        f.$GetPlayToPosition = function () {
            return o
        };
        f.$GetPosition_Display = function () {
            return t
        };
        f.$GoToPosition = w;
        f.$GoToBegin = function () {
            w(i, c)
        };
        f.$GoToEnd = function () {
            w(h, c)
        };
        f.$Move = function (a) {
            w(j + a)
        };
        f.$CombineMode = function () {
            return K
        };
        f.$GetDuration = function () {
            return m
        };
        f.$IsPlaying = function () {
            return r
        };
        f.$IsOnTheWay = function () {
            return j > k && j <= s
        };
        f.$SetLoopLength = function (a) {
            q = a
        };
        f.$Locate = N;
        f.$Shift = I;
        f.$Join = F;
        f.$Combine = function (a) {
            F(a, 0)
        };
        f.$Chain = function (a) {
            F(a, 1)
        };
        f.$GetPosition_InnerBegin = function () {
            return k
        };
        f.$GetPosition_InnerEnd = function () {
            return s
        };
        f.$GetPosition_OuterBegin = function () {
            return i
        };
        f.$GetPosition_OuterEnd = function () {
            return h
        };
        f.$OnPositionChange = a.$EmptyFunction;
        f.$OnStart = a.$EmptyFunction;
        f.$OnStop = a.$EmptyFunction;
        f.$OnInnerOffsetChange = a.$EmptyFunction;
        f.$Version = a.$GetNow();
        g = a.$Extend({$Interval: 15}, g);
        q = g.$LoopLength;
        B = a.$Extend({}, a.$GetStyleSetter(), g.$Setter);
        i = k = n;
        h = s = n + m;
        var M = g.$Round || {}, L = g.$During || {};
        C = a.$Extend({$Default: a.$IsFunction(g.$Easing) && g.$Easing || l.$EaseSwing}, g.$Easing)
    };
    var r, k = g.$JssorSlideshowFormations$ = {};
    new function () {
        var u = 0, o = 1, w = 2, v = 3, I = 1, H = 2, J = 4, G = 8, O = 256, P = 512, N = 1024, M = 2048, z = M + I, y = M + H, E = P + I, C = P + H, D = O + J, A = O + G, B = N + J, F = N + G;

        function S(a) {
            return (a & H) == H
        }

        function T(a) {
            return (a & J) == J
        }

        function x(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        k.$FormationStraight = function (f) {
            for (var d = f.$Cols, e = f.$Rows, k = f.$Assembly, l = f.$Count, j = [], a = 0, b = 0, h = d - 1, i = e - 1, g = l - 1, c, b = 0; b < e; b++)for (a = 0; a < d; a++) {
                switch (k) {
                    case z:
                        c = g - (a * e + (i - b));
                        break;
                    case B:
                        c = g - (b * d + (h - a));
                        break;
                    case E:
                        c = g - (a * e + b);
                    case D:
                        c = g - (b * d + a);
                        break;
                    case y:
                        c = a * e + b;
                        break;
                    case A:
                        c = b * d + (h - a);
                        break;
                    case C:
                        c = a * e + (i - b);
                        break;
                    default:
                        c = b * d + a
                }
                x(j, c, [b, a])
            }
            return j
        };
        k.$FormationSwirl = function (e) {
            var l = e.$Cols, m = e.$Rows, q = e.$Assembly, k = e.$Count, p = [], n = [], i = 0, a = 0, b = 0, f = l - 1, g = m - 1, h, d, j = 0;
            switch (q) {
                case z:
                    a = f;
                    b = 0;
                    d = [w, o, v, u];
                    break;
                case B:
                    a = 0;
                    b = g;
                    d = [u, v, o, w];
                    break;
                case E:
                    a = f;
                    b = g;
                    d = [v, o, w, u];
                    break;
                case D:
                    a = f;
                    b = g;
                    d = [o, v, u, w];
                    break;
                case y:
                    a = 0;
                    b = 0;
                    d = [w, u, v, o];
                    break;
                case A:
                    a = f;
                    b = 0;
                    d = [o, w, u, v];
                    break;
                case C:
                    a = 0;
                    b = g;
                    d = [v, u, w, o];
                    break;
                default:
                    a = 0;
                    b = 0;
                    d = [u, w, o, v]
            }
            i = 0;
            while (i < k) {
                h = b + "," + a;
                if (a >= 0 && a < l && b >= 0 && b < m && !n[h]) {
                    n[h] = c;
                    x(p, i++, [b, a])
                } else switch (d[j++ % d.length]) {
                    case u:
                        a--;
                        break;
                    case w:
                        b--;
                        break;
                    case o:
                        a++;
                        break;
                    case v:
                        b++
                }
                switch (d[j % d.length]) {
                    case u:
                        a++;
                        break;
                    case w:
                        b++;
                        break;
                    case o:
                        a--;
                        break;
                    case v:
                        b--
                }
            }
            return p
        };
        k.$FormationZigZag = function (d) {
            var k = d.$Cols, l = d.$Rows, n = d.$Assembly, j = d.$Count, h = [], i = 0, a = 0, b = 0, e = k - 1, f = l - 1, m, c, g = 0;
            switch (n) {
                case z:
                    a = e;
                    b = 0;
                    c = [w, o, v, o];
                    break;
                case B:
                    a = 0;
                    b = f;
                    c = [u, v, o, v];
                    break;
                case E:
                    a = e;
                    b = f;
                    c = [v, o, w, o];
                    break;
                case D:
                    a = e;
                    b = f;
                    c = [o, v, u, v];
                    break;
                case y:
                    a = 0;
                    b = 0;
                    c = [w, u, v, u];
                    break;
                case A:
                    a = e;
                    b = 0;
                    c = [o, w, u, w];
                    break;
                case C:
                    a = 0;
                    b = f;
                    c = [v, u, w, u];
                    break;
                default:
                    a = 0;
                    b = 0;
                    c = [u, w, o, w]
            }
            i = 0;
            while (i < j) {
                m = b + "," + a;
                if (a >= 0 && a < k && b >= 0 && b < l && typeof h[m] == "undefined") {
                    x(h, i++, [b, a]);
                    switch (c[g % c.length]) {
                        case u:
                            a++;
                            break;
                        case w:
                            b++;
                            break;
                        case o:
                            a--;
                            break;
                        case v:
                            b--
                    }
                } else {
                    switch (c[g++ % c.length]) {
                        case u:
                            a--;
                            break;
                        case w:
                            b--;
                            break;
                        case o:
                            a++;
                            break;
                        case v:
                            b++
                    }
                    switch (c[g++ % c.length]) {
                        case u:
                            a++;
                            break;
                        case w:
                            b++;
                            break;
                        case o:
                            a--;
                            break;
                        case v:
                            b--
                    }
                }
            }
            return h
        };
        k.$FormationStraightStairs = function (h) {
            var l = h.$Cols, m = h.$Rows, e = h.$Assembly, k = h.$Count, i = [], j = 0, c = 0, d = 0, f = l - 1, g = m - 1, o = k - 1;
            switch (e) {
                case z:
                case C:
                case E:
                case y:
                    var a = 0, b = 0;
                    break;
                case A:
                case B:
                case D:
                case F:
                    var a = f, b = 0;
                    break;
                default:
                    e = F;
                    var a = f, b = 0
            }
            c = a;
            d = b;
            while (j < k) {
                if (T(e) || S(e))x(i, o - j++, [d, c]); else x(i, j++, [d, c]);
                switch (e) {
                    case z:
                    case C:
                        c--;
                        d++;
                        break;
                    case E:
                    case y:
                        c++;
                        d--;
                        break;
                    case A:
                    case B:
                        c--;
                        d--;
                        break;
                    case F:
                    case D:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > g) {
                    switch (e) {
                        case z:
                        case C:
                            a++;
                            break;
                        case A:
                        case B:
                        case E:
                        case y:
                            b++;
                            break;
                        case F:
                        case D:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > g) {
                        switch (e) {
                            case z:
                            case C:
                                a = f;
                                b++;
                                break;
                            case E:
                            case y:
                                b = g;
                                a++;
                                break;
                            case A:
                            case B:
                                b = g;
                                a--;
                                break;
                            case F:
                            case D:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > g)b = g; else if (b < 0)b = 0; else if (a > f)a = f; else if (a < 0)a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return i
        };
        k.$FormationSquare = function (h) {
            var a = h.$Cols || 1, c = h.$Rows || 1, i = [], d, e, f, g, j;
            f = a < c ? (c - a) / 2 : 0;
            g = a > c ? (a - c) / 2 : 0;
            j = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)for (e = 0; e < c; e++)x(i, j - b.min(d + 1 + f, e + 1 + g, a - d + f, c - e + g), [e, d]);
            return i
        };
        k.$FormationRectangle = function (f) {
            var d = f.$Cols || 1, e = f.$Rows || 1, g = [], a, c, h;
            h = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)for (c = 0; c < e; c++)x(g, h - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return g
        };
        k.$FormationRandom = function (d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)for (a = 0; a < d.$Cols; a++)x(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        k.$FormationCircle = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)x(g, b.round(b.sqrt(b.pow(c - h, 2) + b.pow(a - i, 2))), [a, c]);
            return g
        };
        k.$FormationCross = function (d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, g = [], a, h = e / 2 - .5, i = f / 2 - .5, c = 0; c < e; c++)for (a = 0; a < f; a++)x(g, b.round(b.min(b.abs(c - h), b.abs(a - i))), [a, c]);
            return g
        };
        k.$FormationRectangleCross = function (f) {
            for (var g = f.$Cols || 1, h = f.$Rows || 1, i = [], a, d = g / 2 - .5, e = h / 2 - .5, j = b.max(d, e) + 1, c = 0; c < g; c++)for (a = 0; a < h; a++)x(i, b.round(j - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return i
        };
        function Q(a) {
            var b = a.$Formation(a);
            return a.$Reverse ? b.reverse() : b
        }

        function K(g, f) {
            var d = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: e,
                $SlideOut: e,
                $FlyDirection: 0,
                $Reverse: e,
                $Formation: k.$FormationRandom,
                $Assembly: F,
                $ChessMode: {$Column: 0, $Row: 0},
                $Easing: l.$EaseSwing,
                $Round: {},
                $Blocks: [],
                $During: {}
            };
            a.$Extend(d, g);
            d.$Count = d.$Cols * d.$Rows;
            if (a.$IsFunction(d.$Easing))d.$Easing = {$Default: d.$Easing};
            d.$FramesCount = b.ceil(d.$Duration / d.$Interval);
            d.$EasingInstance = R(d);
            d.$GetBlocks = function (b, a) {
                b /= d.$Cols;
                a /= d.$Rows;
                var f = b + "x" + a;
                if (!d.$Blocks[f]) {
                    d.$Blocks[f] = {$Width: b, $Height: a};
                    for (var c = 0; c < d.$Cols; c++)for (var e = 0; e < d.$Rows; e++)d.$Blocks[f][e + "," + c] = {
                        $Top: e * a,
                        $Right: c * b + b,
                        $Bottom: e * a + a,
                        $Left: c * b
                    }
                }
                return d.$Blocks[f]
            };
            if (d.$Brother) {
                d.$Brother = K(d.$Brother, f);
                d.$SlideOut = c
            }
            return d
        }

        function R(d) {
            var c = d.$Easing;
            if (!c.$Default)c.$Default = l.$EaseSwing;
            var e = d.$FramesCount, f = c.$Cache;
            if (!f) {
                var g = a.$Extend({}, d.$Easing, d.$Round);
                f = c.$Cache = {};
                a.$Each(g, function (n, l) {
                    var g = c[l] || c.$Default, j = d.$Round[l] || 1;
                    if (!a.$IsArray(g.$Cache))g.$Cache = [];
                    var h = g.$Cache[e] = g.$Cache[e] || [];
                    if (!h[j]) {
                        h[j] = [0];
                        for (var k = 1; k <= e; k++) {
                            var i = k / e * j, m = b.floor(i);
                            if (i != m)i -= m;
                            h[j][k] = g(i)
                        }
                    }
                    f[l] = h
                })
            }
            return f
        }

        function L(D, k, f, y, m, l) {
            var B = this, v, w = {}, p = {}, o = [], h, g, t, r = f.$ChessMode.$Column || 0, s = f.$ChessMode.$Row || 0, j = f.$GetBlocks(m, l), q = Q(f), E = q.length - 1, u = f.$Duration + f.$Delay * E, z = y + u, n = f.$SlideOut, A;
            z += a.$IsBrowserChrome() ? 260 : 50;
            B.$EndTime = z;
            B.$ShowFrame = function (c) {
                c -= y;
                var d = c < u;
                if (d || A) {
                    A = d;
                    if (!n)c = u - c;
                    var e = b.ceil(c / f.$Interval);
                    a.$Each(p, function (c, f) {
                        var d = b.max(e, c.$Min);
                        d = b.min(d, c.length - 1);
                        if (c.$LastFrameIndex != d) {
                            if (!c.$LastFrameIndex && !n)a.$ShowElement(o[f]); else d == c.$Max && n && a.$HideElement(o[f]);
                            c.$LastFrameIndex = d;
                            a.$SetStylesEx(o[f], c[d])
                        }
                    })
                }
            };
            function x(b) {
                a.$DisableHWA(b);
                var c = a.$GetChildren(b);
                a.$Each(c, function (a) {
                    x(a)
                })
            }

            k = a.$CloneNode(k, c);
            x(k);
            if (a.$IsBrowserIe9Earlier()) {
                var F = !k["no-image"], C = a.$FindChildrenByTag(k, d, c);
                a.$Each(C, function (b) {
                    (F || b["jssor-slider"]) && a.$SetStyleOpacity(b, a.$GetStyleOpacity(b), c)
                })
            }
            a.$Each(q, function (d, k) {
                a.$Each(d, function (N) {
                    var S = N[0], R = N[1], z = S + "," + R, u = e, x = e, A = e;
                    if (r && R % 2) {
                        if (i.$IsHorizontal(r))u = !u;
                        if (i.$IsVertical(r))x = !x;
                        if (r & 16)A = !A
                    }
                    if (s && S % 2) {
                        if (i.$IsHorizontal(s))u = !u;
                        if (i.$IsVertical(s))x = !x;
                        if (s & 16)A = !A
                    }
                    f.$Top = f.$Top || f.$Clip & 4;
                    f.$Bottom = f.$Bottom || f.$Clip & 8;
                    f.$Left = f.$Left || f.$Clip & 1;
                    f.$Right = f.$Right || f.$Clip & 2;
                    var G = x ? f.$Bottom : f.$Top, D = x ? f.$Top : f.$Bottom, F = u ? f.$Right : f.$Left, E = u ? f.$Left : f.$Right;
                    f.$Clip = G || D || F || E;
                    t = {};
                    g = {$Top: 0, $Left: 0, $Opacity: 1, $Width: m, $Height: l};
                    h = a.$Extend({}, g);
                    v = a.$Extend({}, j[z]);
                    if (f.$Opacity)g.$Opacity = 2 - f.$Opacity;
                    if (f.$ZIndex) {
                        g.$ZIndex = f.$ZIndex;
                        h.$ZIndex = 0
                    }
                    var Q = f.$Cols * f.$Rows > 1 || f.$Clip;
                    if (f.$Zoom || f.$Rotate) {
                        var P = c;
                        if (a.$IsBrowserIE() && a.$GetBrowserEngineVersion() < 9)if (f.$Cols * f.$Rows > 1)P = e; else Q = e;
                        if (P) {
                            g.$Zoom = f.$Zoom ? f.$Zoom - 1 : 1;
                            h.$Zoom = 1;
                            if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera())g.$Zoom = b.min(g.$Zoom, 2);
                            var K = f.$Rotate;
                            if (K == c)K = 1;
                            g.$Rotate = K * 360 * (A ? -1 : 1);
                            h.$Rotate = 0
                        }
                    }
                    if (Q) {
                        if (f.$Clip) {
                            var y = f.$ScaleClip || 1, o = v.$Offset = {};
                            if (G && D) {
                                o.$Top = j.$Height / 2 * y;
                                o.$Bottom = -o.$Top
                            } else if (G)o.$Bottom = -j.$Height * y; else if (D)o.$Top = j.$Height * y;
                            if (F && E) {
                                o.$Left = j.$Width / 2 * y;
                                o.$Right = -o.$Left
                            } else if (F)o.$Right = -j.$Width * y; else if (E)o.$Left = j.$Width * y
                        }
                        t.$Clip = v;
                        h.$Clip = j[z]
                    }
                    if (f.$FlyDirection) {
                        var q = f.$FlyDirection;
                        if (!u)q = i.$ChessHorizontal(q);
                        if (!x)q = i.$ChessVertical(q);
                        var M = f.$ScaleHorizontal || 1, O = f.$ScaleVertical || 1;
                        if (i.$IsToLeft(q))g.$Left += m * M; else if (i.$IsToRight(q))g.$Left -= m * M;
                        if (i.$IsToTop(q))g.$Top += l * O; else if (i.$IsToBottom(q))g.$Top -= l * O
                    }
                    a.$Each(g, function (b, c) {
                        if (a.$IsNumeric(b))if (b != h[c])t[c] = b - h[c]
                    });
                    w[z] = n ? h : g;
                    var L = b.round(k * f.$Delay / f.$Interval);
                    p[z] = new Array(L);
                    p[z].$Min = L;
                    for (var C = f.$FramesCount, J = 0; J <= C; J++) {
                        var d = {};
                        a.$Each(t, function (g, c) {
                            var m = f.$EasingInstance[c] || f.$EasingInstance.$Default, l = m[f.$Round[c] || 1], k = f.$During[c] || [0, 1], e = (J / C - k[0]) / k[1] * C;
                            e = b.round(b.min(C, b.max(e, 0)));
                            var j = l[e];
                            if (a.$IsNumeric(g))d[c] = h[c] + g * j; else {
                                var i = d[c] = a.$Extend({}, h[c]);
                                i.$Offset = [];
                                a.$Each(g.$Offset, function (c, b) {
                                    var a = c * j;
                                    i.$Offset[b] = a;
                                    i[b] += a
                                })
                            }
                        });
                        if (h.$Zoom)d.$Transform = {
                            $Rotate: d.$Rotate || 0,
                            $Scale: d.$Zoom,
                            $OriginalWidth: m,
                            $OriginalHeight: l
                        };
                        if (d.$Clip && f.$Move) {
                            var B = d.$Clip.$Offset, I = (B.$Top || 0) + (B.$Bottom || 0), H = (B.$Left || 0) + (B.$Right || 0);
                            d.$Left = (d.$Left || 0) + H;
                            d.$Top = (d.$Top || 0) + I;
                            d.$Clip.$Left -= H;
                            d.$Clip.$Right -= H;
                            d.$Clip.$Top -= I;
                            d.$Clip.$Bottom -= I
                        }
                        d.$ZIndex = d.$ZIndex || 1;
                        p[z].push(d)
                    }
                })
            });
            q.reverse();
            a.$Each(q, function (b) {
                a.$Each(b, function (d) {
                    var g = d[0], f = d[1], e = g + "," + f, b = k;
                    if (f || g)b = a.$CloneNode(k, c);
                    a.$SetStyles(b, w[e]);
                    a.$SetStyleOverflow(b, "hidden");
                    a.$SetStylePosition(b, "absolute");
                    D.$AddClipElement(b);
                    o[e] = b;
                    a.$ShowElement(b, n)
                })
            })
        }

        g.$JssorSlideshowRunner$ = function (h, l, i, n, p) {
            var e = this, o, f, c, s = 0, r = n.$TransitionsOrder, k, g = 16;

            function q() {
                var a = this, b = 0;
                j.call(a, 0, o);
                a.$OnPositionChange = function (d, a) {
                    if (a - b > g) {
                        b = a;
                        c && c.$ShowFrame(a);
                        f && f.$ShowFrame(a)
                    }
                };
                a.$Transition = k
            }

            e.$GetTransition = function (f) {
                var c = 0, e = n.$Transitions, d = e.length;
                if (r) {
                    if (d > f && (a.$IsBrowserChrome() || a.$IsBrowserSafari() || a.$IsBrowserFireFox()))d -= d % f;
                    c = s++ % d
                } else c = b.floor(b.random() * d);
                e[c] && (e[c].$Index = c);
                return e[c]
            };
            e.$Initialize = function (w, x, n, p, a) {
                k = a;
                a = K(a, g);
                var m = p.$Item, j = n.$Item;
                m["no-image"] = !p.$Image;
                j["no-image"] = !n.$Image;
                var q = m, r = j, v = a, d = a.$Brother || K({}, g);
                if (!a.$SlideOut) {
                    q = j;
                    r = m
                }
                var s = d.$Shift || 0;
                f = new L(h, r, d, b.max(s - d.$Interval, 0), l, i);
                c = new L(h, q, v, b.max(d.$Interval - s, 0), l, i);
                f.$ShowFrame(0);
                c.$ShowFrame(0);
                o = b.max(f.$EndTime, c.$EndTime);
                e.$Index = w
            };
            e.$Clear = function () {
                h.$Clear();
                f = d;
                c = d
            };
            e.$GetProcessor = function () {
                var a = d;
                if (c)a = new q;
                return a
            };
            if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera() || p && a.$GetWebKitVersion < 537)g = 32;
            m.call(e);
            j.call(e, -1e7, 1e7)
        };
        function n(o, Wb) {
            var k = this;

            function rc() {
                var a = this;
                j.call(a, -1e8, 2e8);
                a.$GetCurrentSlideInfo = function () {
                    var c = a.$GetPosition_Display(), d = b.floor(c), f = v(d), e = c - b.floor(c);
                    return {$Index: f, $VirtualIndex: d, $Position: e}
                };
                a.$OnPositionChange = function (d, a) {
                    var e = b.floor(a);
                    if (e != a && a > d)e++;
                    Lb(e, c);
                    k.$TriggerEvent(n.$EVT_POSITION_CHANGE, v(a), v(d), a, d)
                }
            }

            function qc() {
                var b = this;
                j.call(b, 0, 0, {$LoopLength: t});
                a.$Each(B, function (a) {
                    i.$Loop && a.$SetLoopLength(t);
                    b.$Chain(a);
                    a.$Shift(rb / Rb)
                })
            }

            function pc() {
                var a = this, b = Kb.$Elmt;
                j.call(a, -1, 2, {
                    $Easing: l.$EaseLinear,
                    $Setter: {$Position: Qb},
                    $LoopLength: t
                }, b, {$Position: 1}, {$Position: -1});
                a.$Wrapper = b
            }

            function ec(o, m) {
                var a = this, f, g, h, l, b;
                j.call(a, -1e8, 2e8);
                a.$OnStart = function () {
                    M = c;
                    Q = d;
                    k.$TriggerEvent(n.$EVT_SWIPE_START, v(x.$GetPosition()), x.$GetPosition())
                };
                a.$OnStop = function () {
                    M = e;
                    l = e;
                    var a = x.$GetCurrentSlideInfo();
                    k.$TriggerEvent(n.$EVT_SWIPE_END, v(x.$GetPosition()), x.$GetPosition());
                    !a.$Position && tc(a.$VirtualIndex, r)
                };
                a.$OnPositionChange = function (d, c) {
                    var a;
                    if (l)a = b; else {
                        a = g;
                        if (h)a = i.$SlideEasing(c / h) * (g - f) + f
                    }
                    x.$GoToPosition(a)
                };
                a.$PlayCarousel = function (b, d, c, e) {
                    f = b;
                    g = d;
                    h = c;
                    x.$GoToPosition(b);
                    a.$GoToPosition(0);
                    a.$PlayToPosition(c, e)
                };
                a.$StandBy = function (e) {
                    l = c;
                    b = e;
                    a.$Play(e, d, c)
                };
                a.$SetStandByPosition = function (a) {
                    b = a
                };
                a.$MoveCarouselTo = function (a) {
                    x.$GoToPosition(a)
                };
                x = new rc;
                x.$Combine(o);
                x.$Combine(m)
            }

            function fc() {
                var c = this, b = Pb();
                a.$SetStyleZIndex(b, 0);
                c.$Elmt = b;
                c.$AddClipElement = function (c) {
                    a.$AppendChild(b, c);
                    a.$ShowElement(b)
                };
                c.$Clear = function () {
                    a.$HideElement(b);
                    a.$ClearInnerHtml(b)
                }
            }

            function oc(p, o) {
                var f = this, s, w, G, x, g, y = [], X, q, bb, F, T, E, l, u, h, hb;
                j.call(f, -C, C + 1, {$SlideItemAnimator: c});
                function D(a) {
                    w && w.$Revert();
                    s && s.$Revert();
                    ab(p, a);
                    s = new H.$Class(p, H, 1);
                    w = new H.$Class(p, H);
                    w.$GoToBegin();
                    s.$GoToBegin()
                }

                function db() {
                    s.$Version < H.$Version && D()
                }

                function M(o, q, m) {
                    if (!F) {
                        F = c;
                        if (g && m) {
                            var d = m.width, b = m.height, l = d, j = b;
                            if (d && b && i.$FillMode) {
                                if (i.$FillMode & 3) {
                                    var h = e, p = L / K * b / d;
                                    if (i.$FillMode & 1)h = p > 1; else if (i.$FillMode & 2)h = p < 1;
                                    l = h ? d * K / b : L;
                                    j = h ? K : b * L / d
                                }
                                a.$SetStyleWidth(g, l);
                                a.$SetStyleHeight(g, j);
                                a.$SetStyleTop(g, (K - j) / 2);
                                a.$SetStyleLeft(g, (L - l) / 2)
                            }
                            a.$SetStylePosition(g, "absolute");
                            k.$TriggerEvent(n.$EVT_LOAD_END, Ub)
                        }
                    }
                    a.$HideElement(q);
                    o && o(f)
                }

                function cb(b, c, d, e) {
                    if (e == Q && r == o && N)if (!sc) {
                        var a = v(b);
                        z.$Initialize(a, o, c, f, d);
                        c.$HideContentForSlideshow();
                        U.$Locate(a, 1);
                        U.$GoToPosition(a);
                        A.$PlayCarousel(b, b, 0)
                    }
                }

                function eb(b) {
                    if (b == Q && r == o) {
                        if (!l) {
                            var a = d;
                            if (z)if (z.$Index == o)a = z.$GetProcessor(); else z.$Clear();
                            db();
                            l = new mc(o, a, f.$GetCaptionSliderIn(), f.$GetCaptionSliderOut());
                            l.$SetPlayer(h)
                        }
                        !l.$IsPlaying() && l.$Replay()
                    }
                }

                function W(e, c) {
                    if (e == o) {
                        if (e != c)B[c] && B[c].$ParkOut();
                        h && h.$Enable();
                        var j = Q = a.$GetNow();
                        f.$LoadImage(a.$CreateCallback(d, eb, j))
                    } else {
                        var g = b.abs(o - e);
                        (!T || g <= i.$LazyLoading || t - g <= i.$LazyLoading) && f.$LoadImage()
                    }
                }

                function fb() {
                    if (r == o && l) {
                        l.$Stop();
                        h && h.$Quit();
                        h && h.$Disable();
                        l.$OpenSlideshowPanel()
                    }
                }

                function gb() {
                    r == o && l && l.$Stop()
                }

                function S(b) {
                    if (P)a.$CancelEvent(b); else k.$TriggerEvent(n.$EVT_CLICK, o, b)
                }

                function R() {
                    h = u.pInstance;
                    l && l.$SetPlayer(h)
                }

                f.$LoadImage = function (e, b) {
                    b = b || x;
                    if (y.length && !F) {
                        a.$ShowElement(b);
                        if (!bb) {
                            bb = c;
                            k.$TriggerEvent(n.$EVT_LOAD_START);
                            a.$Each(y, function (b) {
                                if (!b.src) {
                                    b.src = a.$GetAttribute(b, "src2");
                                    a.$SetStyleDisplay(b, b["display-origin"])
                                }
                            })
                        }
                        a.$LoadImages(y, g, a.$CreateCallback(d, M, e, b))
                    } else M(e, b)
                };
                f.$GoForNextSlide = function () {
                    if (z) {
                        var b = z.$GetTransition(t);
                        if (b) {
                            var f = Q = a.$GetNow(), c = o + 1, e = B[v(c)];
                            return e.$LoadImage(a.$CreateCallback(d, cb, c, e, b, f), x)
                        }
                    }
                    V(r + i.$AutoPlaySteps)
                };
                f.$TryActivate = function () {
                    W(o, o)
                };
                f.$ParkOut = function () {
                    h && h.$Quit();
                    h && h.$Disable();
                    f.$UnhideContentForSlideshow();
                    l && l.$Abort();
                    l = d;
                    D()
                };
                f.$StampSlideItemElements = function (a) {
                    a = hb + "_" + a
                };
                f.$HideContentForSlideshow = function () {
                    a.$HideElement(p)
                };
                f.$UnhideContentForSlideshow = function () {
                    a.$ShowElement(p)
                };
                f.$EnablePlayer = function () {
                    h && h.$Enable()
                };
                function ab(b, f, d) {
                    d = d || 0;
                    if (!E) {
                        if (b.tagName == "IMG") {
                            y.push(b);
                            if (!b.src) {
                                T = c;
                                b["display-origin"] = a.$GetStyleDisplay(b);
                                a.$HideElement(b)
                            }
                        }
                        a.$IsBrowserIe9Earlier() && a.$SetStyleZIndex(b, a.$GetStyleZIndex(b) + 1);
                        if (a.$GetWebKitVersion() > 0)(!I || a.$GetWebKitVersion() < 534 || !Z) && a.$EnableHWA(b)
                    }
                    var h = a.$GetChildren(b);
                    a.$Each(h, function (h) {
                        var j = a.$GetAttribute(h, "u");
                        if (j == "player" && !u) {
                            u = h;
                            if (u.pInstance)R(); else a.$AddEvent(u, "dataavailable", R)
                        }
                        if (j == "caption") {
                            if (!a.$IsBrowserIE() && !f) {
                                var i = a.$CloneNode(h, c);
                                a.$InsertBefore(b, i, h);
                                a.$RemoveChild(b, h);
                                h = i;
                                f = c
                            }
                        } else if (!E && !d && !g && a.$GetAttribute(h, "u") == "image") {
                            g = h;
                            if (g) {
                                if (g.tagName == "A") {
                                    X = g;
                                    a.$SetStyles(X, O);
                                    q = a.$CloneNode(g, e);
                                    a.$AddEvent(q, "click", S);
                                    a.$SetStyles(q, O);
                                    a.$SetStyleDisplay(q, "block");
                                    a.$SetStyleOpacity(q, 0);
                                    a.$SetStyleBackgroundColor(q, "#000");
                                    g = a.$FindFirstChildByTag(g, "IMG")
                                }
                                g.border = 0;
                                a.$SetStyles(g, O)
                            }
                        }
                        ab(h, f, d + 1)
                    })
                }

                f.$OnInnerOffsetChange = function (c, b) {
                    var a = C - b;
                    Qb(G, a)
                };
                f.$GetCaptionSliderIn = function () {
                    return s
                };
                f.$GetCaptionSliderOut = function () {
                    return w
                };
                f.$Index = o;
                m.call(f);
                var J = a.$FindFirstChildByAttribute(p, "thumb");
                if (J) {
                    f.$Thumb = a.$CloneNode(J, c);
                    a.$HideElement(J)
                }
                a.$ShowElement(p);
                x = a.$CloneNode(Y, c);
                a.$SetStyleZIndex(x, 1e3);
                a.$AddEvent(p, "click", S);
                D(c);
                E = c;
                f.$Image = g;
                f.$Link = q;
                f.$Item = p;
                f.$Wrapper = G = p;
                a.$AppendChild(G, x);
                k.$On(203, W);
                k.$On(22, gb);
                k.$On(24, fb)
            }

            function mc(h, q, v, u) {
                var b = this, m = 0, x = 0, o, g, d, f, l, s, w, t, p = B[h];
                j.call(b, 0, 0);
                function y() {
                    a.$ClearChildren(J);
                    Vb && l && p.$Link && a.$AppendChild(J, p.$Link);
                    a.$ShowElement(J, l || !p.$Image)
                }

                function A() {
                    if (s) {
                        s = e;
                        k.$TriggerEvent(n.$EVT_ROLLBACK_END, h, d, m, g, d, f);
                        b.$GoToPosition(g)
                    }
                    b.$Replay()
                }

                function C(a) {
                    t = a;
                    b.$Stop();
                    b.$Replay()
                }

                b.$Replay = function () {
                    var a = b.$GetPosition_Display();
                    if (!F && !M && !t && (a != d || N && (!Nb || S)) && r == h) {
                        if (!a) {
                            if (o && !l) {
                                l = c;
                                b.$OpenSlideshowPanel(c);
                                k.$TriggerEvent(n.$EVT_SLIDESHOW_START, h, m, x, o, f)
                            }
                            y()
                        }
                        var e, i = n.$EVT_STATE_CHANGE;
                        if (a == f) {
                            d == f && b.$GoToPosition(g);
                            return p.$GoForNextSlide()
                        } else if (a == d)e = f; else if (a == g)e = d; else if (!a)e = g; else if (a > d) {
                            s = c;
                            e = d;
                            i = n.$EVT_ROLLBACK_START
                        } else e = b.$GetPlayToPosition();
                        k.$TriggerEvent(i, h, a, m, g, d, f);
                        b.$PlayToPosition(e, A)
                    }
                };
                b.$Abort = function () {
                    z && z.$Index == h && z.$Clear();
                    var a = b.$GetPosition_Display();
                    a < f && k.$TriggerEvent(n.$EVT_STATE_CHANGE, h, -a - 1, m, g, d, f)
                };
                b.$OpenSlideshowPanel = function (b) {
                    q && a.$SetStyleOverflow(cb, b && q.$Transition.$Outside ? "" : "hidden")
                };
                b.$OnInnerOffsetChange = function (b, a) {
                    if (l && a >= o) {
                        l = e;
                        y();
                        p.$UnhideContentForSlideshow();
                        z.$Clear();
                        k.$TriggerEvent(n.$EVT_SLIDESHOW_END, h, m, x, o, f)
                    }
                    k.$TriggerEvent(n.$EVT_PROGRESS_CHANGE, h, a, m, g, d, f)
                };
                b.$SetPlayer = function (a) {
                    if (a && !w) {
                        w = a;
                        a.$On($JssorPlayer$.$EVT_SWITCH, C)
                    }
                };
                q && b.$Chain(q);
                o = b.$GetPosition_OuterEnd();
                b.$GetPosition_OuterEnd();
                b.$Chain(v);
                g = v.$GetPosition_OuterEnd();
                d = g + i.$AutoPlayInterval;
                u.$Shift(d);
                b.$Combine(u);
                f = b.$GetPosition_OuterEnd()
            }

            function Qb(c, g) {
                var f = w > 0 ? w : i.$PlayOrientation, d = b.round(vb * g * (f & 1)), e = b.round(wb * g * (f >> 1 & 1));
                if (a.$IsBrowserIE() && a.$GetBrowserVersion() >= 10 && a.$GetBrowserVersion() < 11)c.style.msTransform = "translate(" + d + "px, " + e + "px)"; else if (a.$IsBrowserChrome() && a.$GetBrowserVersion() >= 30) {
                    c.style.WebkitTransition = "transform 0s";
                    c.style.WebkitTransform = "translate3d(" + d + "px, " + e + "px, 0px) perspective(2000px)"
                } else {
                    a.$SetStyleLeft(c, d);
                    a.$SetStyleTop(c, e)
                }
            }

            function lc(a) {
                P = 0;
                !G && ic() && kc(a)
            }

            function kc(b) {
                kb = M;
                F = c;
                ub = e;
                Q = d;
                a.$AddEvent(f, hb, Sb);
                a.$GetNow();
                Db = A.$GetPlayToPosition();
                A.$Stop();
                if (!kb)w = 0;
                if (I) {
                    var h = b.touches[0];
                    pb = h.clientX;
                    qb = h.clientY
                } else {
                    var g = a.$GetMousePosition(b);
                    pb = g.x;
                    qb = g.y;
                    a.$CancelEvent(b)
                }
                E = 0;
                X = 0;
                bb = 0;
                D = x.$GetPosition();
                k.$TriggerEvent(n.$EVT_DRAG_START, v(D), D, b)
            }

            function Sb(e) {
                if (F && (!a.$IsBrowserIe9Earlier() || e.button)) {
                    var f;
                    if (I) {
                        var n = e.touches;
                        if (n && n.length > 0)f = new h(n[0].clientX, n[0].clientY)
                    } else f = a.$GetMousePosition(e);
                    if (f) {
                        var l = f.x - pb, m = f.y - qb;
                        if (b.floor(D) != D)w = i.$PlayOrientation & G;
                        if ((l || m) && !w) {
                            if (G == 3)if (b.abs(m) > b.abs(l))w = 2; else w = 1; else w = G;
                            if (I && w == 1 && b.abs(m) - b.abs(l) > 3)ub = c
                        }
                        if (w) {
                            var d = m, k = wb;
                            if (w == 1) {
                                d = l;
                                k = vb
                            }
                            if (!i.$Loop) {
                                if (d > 0) {
                                    var g = k * r, j = d - g;
                                    if (j > 0)d = g + b.sqrt(j) * 5
                                }
                                if (d < 0) {
                                    var g = k * (t - C - r), j = -d - g;
                                    if (j > 0)d = -g - b.sqrt(j) * 5
                                }
                            }
                            if (E - X < -2)bb = 1; else if (E - X > 2)bb = 0;
                            X = E;
                            E = d;
                            mb = D - E / k / (gb || 1);
                            if (E && w && !ub) {
                                a.$CancelEvent(e);
                                if (!M)A.$StandBy(mb); else A.$SetStandByPosition(mb)
                            } else a.$IsBrowserIe9Earlier() && a.$CancelEvent(e)
                        }
                    }
                } else zb(e)
            }

            function zb(h) {
                gc();
                if (F) {
                    F = e;
                    a.$GetNow();
                    a.$RemoveEvent(f, hb, Sb);
                    P = E;
                    P && a.$CancelEvent(h);
                    A.$Stop();
                    var d = x.$GetPosition();
                    k.$TriggerEvent(n.$EVT_DRAG_END, v(d), d, v(D), D, h);
                    var c = b.floor(D);
                    if (b.abs(E) >= i.$MinDragOffsetToSlide) {
                        c = b.floor(d);
                        c += bb
                    }
                    if (!i.$Loop)c = b.min(t - C, b.max(c, 0));
                    var g = b.abs(c - d);
                    g = 1 - b.pow(1 - g, 5);
                    if (!P && kb)A.$Continue(Db); else if (d == c) {
                        nb.$EnablePlayer();
                        nb.$TryActivate()
                    } else A.$PlayCarousel(d, c, g * Mb)
                }
            }

            function dc(a) {
                B[r];
                r = v(a);
                nb = B[r];
                Lb(a);
                return r
            }

            function tc(a, b) {
                w = 0;
                dc(a);
                k.$TriggerEvent(n.$EVT_PARK, v(a), b)
            }

            function Lb(b, c) {
                a.$Each(R, function (a) {
                    a.$SetCurrentIndex(v(b), b, c)
                })
            }

            function ic() {
                var a = n.$DragRegistry || 0;
                n.$DragRegistry |= i.$DragOrientation;
                return G = i.$DragOrientation & ~a
            }

            function gc() {
                if (G) {
                    n.$DragRegistry &= ~i.$DragOrientation;
                    G = 0
                }
            }

            function Pb() {
                var b = a.$CreateDivElement();
                a.$SetStyles(b, O);
                a.$SetStylePosition(b, "absolute");
                return b
            }

            function v(a) {
                return (a % t + t) % t
            }

            function ac(b, a) {
                V(b, i.$SlideDuration, a)
            }

            function tb() {
                a.$Each(R, function (a) {
                    a.$Show(a.$Options.$ChanceToShow > S)
                })
            }

            function Yb(b) {
                b = a.$GetEvent(b);
                var c = b.target ? b.target : b.srcElement, d = b.relatedTarget ? b.relatedTarget : b.toElement;
                if (!a.$IsChild(o, c) || a.$IsChild(o, d))return;
                S = 1;
                tb();
                B[r].$TryActivate()
            }

            function Xb() {
                S = 0;
                tb()
            }

            function Zb() {
                O = {$Width: L, $Height: K, $Top: 0, $Left: 0};
                a.$Each(T, function (b) {
                    a.$SetStyles(b, O);
                    a.$SetStylePosition(b, "absolute");
                    a.$SetStyleOverflow(b, "hidden");
                    a.$HideElement(b)
                });
                a.$SetStyles(Y, O)
            }

            function eb(b, a) {
                V(b, a, c)
            }

            function V(h, g, l) {
                if (Jb && (!F || i.$NaviQuitDrag)) {
                    M = c;
                    F = e;
                    A.$Stop();
                    if (a.$IsUndefined(g))g = Mb;
                    var f = Ab.$GetPosition_Display(), d = h;
                    if (l) {
                        d = f + h;
                        if (h > 0)d = b.ceil(d); else d = b.floor(d)
                    }
                    if (!i.$Loop)d = b.max(0, b.min(d, t - C));
                    var k = (d - f) % t;
                    d = f + k;
                    var j = f == d ? 0 : g * b.abs(k);
                    j = b.min(j, g * C * 1.5);
                    A.$PlayCarousel(f, d, j)
                }
            }

            k.$PlayTo = V;
            k.$GoTo = function (a) {
                V(a, 0)
            };
            k.$Next = function () {
                eb(1)
            };
            k.$Prev = function () {
                eb(-1)
            };
            k.$Pause = function () {
                N = e
            };
            k.$Play = function () {
                if (!N) {
                    N = c;
                    B[r] && B[r].$TryActivate()
                }
            };
            k.$SetSlideshowTransitions = function (a) {
                i.$SlideshowOptions.$Transitions = a
            };
            k.$SetCaptionTransitions = function (b) {
                H.$CaptionTransitions = b;
                H.$Version = a.$GetNow()
            };
            k.$SlidesCount = function () {
                return T.length
            };
            k.$CurrentIndex = function () {
                return r
            };
            k.$IsAutoPlaying = function () {
                return N
            };
            k.$IsDragging = function () {
                return F
            };
            k.$IsSliding = function () {
                return M
            };
            k.$IsMouseOver = function () {
                return !S
            };
            k.$LastDragSucceded = function () {
                return P
            };
            k.$GetOriginalWidth = function () {
                return a.$GetStyleWidth(u || o)
            };
            k.$GetOriginalHeight = function () {
                return a.$GetStyleHeight(u || o)
            };
            k.$GetScaleWidth = function () {
                return a.$GetStyleWidth(o)
            };
            k.$GetScaleHeight = function () {
                return a.$GetStyleHeight(o)
            };
            k.$SetScaleWidth = function (c) {
                if (!u) {
                    var b = a.$CloneNode(o, e);
                    a.$RemoveAttribute(b, "id");
                    a.$SetStylePosition(b, "relative");
                    a.$SetStyleTop(b, 0);
                    a.$SetStyleLeft(b, 0);
                    a.$SetStyleOverflow(b, "visible");
                    u = a.$CloneNode(o, e);
                    a.$RemoveAttribute(u, "id");
                    a.$SetStyleCssText(u, "");
                    a.$SetStylePosition(u, "absolute");
                    a.$SetStyleTop(u, 0);
                    a.$SetStyleLeft(u, 0);
                    a.$SetStyleWidth(u, a.$GetStyleWidth(o));
                    a.$SetStyleHeight(u, a.$GetStyleHeight(o));
                    a.$SetStyleTransformOrigin(u, "0 0");
                    a.$AppendChild(u, b);
                    var d = a.$GetChildren(o);
                    a.$AppendChild(o, u);
                    a.$AppendChildren(b, d);
                    a.$ShowElement(b);
                    a.$ShowElement(u)
                }
                gb = c / a.$GetStyleWidth(u);
                a.$SetStyleScale(u, gb);
                a.$SetStyleWidth(o, c);
                a.$SetStyleHeight(o, gb * a.$GetStyleHeight(u))
            };
            k.$GetVirtualIndex = function (a) {
                var d = b.ceil(v(rb / Rb)), c = v(a - r + d);
                if (c > C) {
                    if (a - r > t / 2)a -= t; else if (a - r <= -t / 2)a += t
                } else a = r + c - d;
                return a
            };
            m.call(this);
            k.$Elmt = o = a.$GetElement(o);
            var i = a.$Extend({
                $FillMode: 0,
                $LazyLoading: 1,
                $StartIndex: 0,
                $AutoPlay: e,
                $Loop: c,
                $NaviQuitDrag: c,
                $AutoPlaySteps: 1,
                $AutoPlayInterval: 3e3,
                $PauseOnHover: 3,
                $HwaMode: 1,
                $SlideDuration: 500,
                $SlideEasing: l.$EaseOutQuad,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $DisplayPieces: 1,
                $ParkingPosition: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 1
            }, Wb), ab = i.$SlideshowOptions, H = a.$Extend({
                $Class: s,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, i.$CaptionSliderOptions), ob = i.$NavigatorOptions, jb = i.$DirectionNavigatorOptions, W = i.$ThumbnailNavigatorOptions, db = i.$UISearchMode, u, y = a.$FindFirstChildByAttribute(o, "slides", d, db), Y = a.$FindFirstChildByAttribute(o, "loading", d, db) || a.$CreateDivElement(f), Gb = a.$FindFirstChildByAttribute(o, "navigator", d, db), Cb = a.$FindFirstChildByAttribute(o, "thumbnavigator", d, db), cc = a.$GetStyleWidth(y), bc = a.$GetStyleHeight(y);
            if (!i.$Loop)i.$ParkingPosition = 0;
            if (i.$DisplayPieces > 1 || i.$ParkingPosition)i.$DragOrientation &= i.$PlayOrientation;
            var O, T = a.$GetChildren(y), r = -1, nb, t = T.length, L = i.$SlideWidth || cc, K = i.$SlideHeight || bc, Ob = i.$SlideSpacing, vb = L + Ob, wb = K + Ob, Rb = i.$PlayOrientation == 1 ? vb : wb, C = b.min(i.$DisplayPieces, t), cb, w, G, ub, I, R = [], Tb, Eb, Ib, Vb, sc, N, Nb = i.$PauseOnHover, Mb = i.$SlideDuration, lb, Z, rb, Jb = C < t, jc = Jb && i.$DragOrientation, P, S = 1, M, F, Q, pb = 0, qb = 0, E, X, bb, Ab, x, U, A, Kb = new fc, gb;
            N = i.$AutoPlay;
            k.$Options = Wb;
            Zb();
            o["jssor-slider"] = c;
            a.$SetStyleZIndex(y, a.$GetStyleZIndex(y));
            a.$SetStylePosition(y, "absolute");
            cb = a.$CloneNode(y);
            a.$InsertBefore(a.$GetParentNode(y), cb, y);
            if (ab) {
                Vb = ab.$ShowLink;
                lb = ab.$Class;
                Z = C == 1 && t > 1 && lb && (!a.$IsBrowserIE() || a.$GetBrowserVersion() >= 8)
            }
            rb = Z || C >= t ? 0 : i.$ParkingPosition;
            var sb = y, B = [], z, J, yb = "mousedown", hb = "mousemove", Bb = "mouseup", fb, D, kb, Db, mb;
            if (g.navigator.msPointerEnabled) {
                yb = "MSPointerDown";
                hb = "MSPointerMove";
                Bb = "MSPointerUp";
                fb = "MSPointerCancel";
                if (i.$DragOrientation) {
                    var xb = "none";
                    if (i.$DragOrientation == 1)xb = "pan-y"; else if (i.$DragOrientation == 2)xb = "pan-x";
                    a.$SetAttribute(sb.style, "-ms-touch-action", xb)
                }
            } else if ("ontouchstart" in g || "createTouch" in f) {
                I = c;
                yb = "touchstart";
                hb = "touchmove";
                Bb = "touchend";
                fb = "touchcancel"
            }
            U = new pc;
            if (Z)z = new lb(Kb, L, K, ab, I);
            a.$AppendChild(cb, U.$Wrapper);
            a.$SetStyleOverflow(y, "hidden");
            J = Pb();
            a.$SetStyleBackgroundColor(J, "#000");
            a.$SetStyleOpacity(J, 0);
            a.$InsertBefore(sb, J, sb.firstChild);
            for (var ib = 0; ib < T.length; ib++) {
                var nc = T[ib], Ub = new oc(nc, ib);
                B.push(Ub)
            }
            a.$HideElement(Y);
            Ab = new qc;
            A = new ec(Ab, U);
            if (jc) {
                a.$AddEvent(y, yb, lc);
                a.$AddEvent(f, Bb, zb);
                fb && a.$AddEvent(f, fb, zb)
            }
            Nb &= I ? 2 : 1;
            if (Gb && ob) {
                Tb = new ob.$Class(Gb, ob);
                R.push(Tb)
            }
            if (jb) {
                Eb = new jb.$Class(o, jb, i.$UISearchMode);
                R.push(Eb)
            }
            if (Cb && W) {
                W.$StartIndex = i.$StartIndex;
                Ib = new W.$Class(Cb, W);
                R.push(Ib)
            }
            a.$Each(R, function (a) {
                a.$Reset(t, B, Y);
                a.$On(p.$NAVIGATIONREQUEST, ac)
            });
            a.$AddEvent(o, "mouseout", Yb);
            a.$AddEvent(o, "mouseover", Xb);
            tb();
            i.$ArrowKeyNavigation && a.$AddEvent(f, "keydown", function (a) {
                if (a.keyCode == q.$LEFT)eb(-1); else a.keyCode == q.$RIGHT && eb(1)
            });
            k.$SetScaleWidth(k.$GetOriginalWidth());
            A.$PlayCarousel(i.$StartIndex, i.$StartIndex, 0)
        }

        n.$EVT_CLICK = 21;
        n.$EVT_DRAG_START = 22;
        n.$EVT_DRAG_END = 23;
        n.$EVT_SWIPE_START = 24;
        n.$EVT_SWIPE_END = 25;
        n.$EVT_LOAD_START = 26;
        n.$EVT_LOAD_END = 27;
        n.$EVT_POSITION_CHANGE = 202;
        n.$EVT_PARK = 203;
        n.$EVT_SLIDESHOW_START = 206;
        n.$EVT_SLIDESHOW_END = 207;
        n.$EVT_PROGRESS_CHANGE = 208;
        n.$EVT_STATE_CHANGE = 209;
        n.$EVT_ROLLBACK_START = 210;
        n.$EVT_ROLLBACK_END = 211;
        g.$JssorSlider$ = r = n
    };
    var p = {$NAVIGATIONREQUEST: 1, $INDEXCHANGE: 2, $RESET: 3};
    g.$JssorNavigator$ = function (e, B) {
        var g = this;
        m.call(g);
        e = a.$GetElement(e);
        var s, t, r, q, k = 0, f, l, j, x, y, i, h, o, n, A = [], z = [];

        function w(a) {
            a != -1 && z[a].$Activate(a == k)
        }

        function u(a) {
            g.$TriggerEvent(p.$NAVIGATIONREQUEST, a * l)
        }

        g.$Elmt = e;
        g.$GetCurrentIndex = function () {
            return q
        };
        g.$SetCurrentIndex = function (a) {
            if (a != q) {
                var d = k, c = b.floor(a / l);
                k = c;
                q = a;
                w(d);
                w(c)
            }
        };
        g.$Show = function (b) {
            a.$ShowElement(e, b)
        };
        var v;
        g.$Reset = function (E) {
            if (!v) {
                s = b.ceil(E / l);
                k = 0;
                var q = o + x, w = n + y, p = b.ceil(s / j) - 1;
                t = o + q * (!i ? p : j - 1);
                r = n + w * (i ? p : j - 1);
                a.$SetStyleWidth(e, t);
                a.$SetStyleHeight(e, r);
                f.$AutoCenter & 1 && a.$SetStyleLeft(e, (a.$GetStyleWidth(a.$GetParentNode(e)) - t) / 2);
                f.$AutoCenter & 2 && a.$SetStyleTop(e, (a.$GetStyleHeight(a.$GetParentNode(e)) - r) / 2);
                for (var g = 0; g < s; g++) {
                    var D = a.$CreateSpanElement();
                    a.$SetInnerText(D, g + 1);
                    var m = a.$BuildElement(h, "NumberTemplate", D, c);
                    a.$SetStylePosition(m, "absolute");
                    var B = g % (p + 1);
                    a.$SetStyleLeft(m, !i ? q * B : g % j * q);
                    a.$SetStyleTop(m, i ? w * B : b.floor(g / (p + 1)) * w);
                    a.$AppendChild(e, m);
                    A[g] = m;
                    f.$ActionMode & 1 && a.$AddEvent(m, "click", a.$CreateCallback(d, u, g));
                    f.$ActionMode & 2 && a.$AddEvent(m, "mouseover", a.$CreateCallback(d, u, g));
                    z[g] = a.$Buttonize(m)
                }
                v = c
            }
        };
        g.$Options = f = a.$Extend({$SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1}, B);
        h = a.$FindFirstChildByAttribute(e, "prototype");
        o = a.$GetStyleWidth(h);
        n = a.$GetStyleHeight(h);
        a.$RemoveChild(e, h);
        l = f.$Steps || 1;
        j = f.$Lanes || 1;
        x = f.$SpacingX;
        y = f.$SpacingY;
        i = f.$Orientation - 1
    };
    g.$JssorDirectionNavigator$ = function (i, t, o) {
        var e = this;
        m.call(e);
        var b = a.$FindFirstChildByAttribute(i, "arrowleft", d, o), f = a.$FindFirstChildByAttribute(i, "arrowright", d, o), g, h, j, n = a.$GetStyleWidth(i), l = a.$GetStyleHeight(i), r = a.$GetStyleWidth(b), q = a.$GetStyleHeight(b);

        function k(a) {
            e.$TriggerEvent(p.$NAVIGATIONREQUEST, a, c)
        }

        e.$GetCurrentIndex = function () {
            return g
        };
        e.$SetCurrentIndex = function (b, a, c) {
            if (c)g = a; else g = b
        };
        e.$Show = function (c) {
            a.$ShowElement(b, c);
            a.$ShowElement(f, c)
        };
        var s;
        e.$Reset = function (c) {
            g = 0;
            if (!s) {
                if (h.$AutoCenter & 1) {
                    a.$SetStyleLeft(b, (n - r) / 2);
                    a.$SetStyleLeft(f, (n - r) / 2)
                }
                if (h.$AutoCenter & 2) {
                    a.$SetStyleTop(b, (l - q) / 2);
                    a.$SetStyleTop(f, (l - q) / 2)
                }
                a.$AddEvent(b, "click", a.$CreateCallback(d, k, -j));
                a.$AddEvent(f, "click", a.$CreateCallback(d, k, j));
                a.$Buttonize(b);
                a.$Buttonize(f)
            }
        };
        e.$Options = h = a.$Extend({$Steps: 1}, t);
        j = h.$Steps
    };
    g.$JssorThumbnailNavigator$ = function (i, A) {
        var h = this, x, l, d, u = [], y, w, f, n, o, t, s, k, q, g, j;
        m.call(h);
        i = a.$GetElement(i);
        function z(n, e) {
            var g = this, b, m, k;

            function o() {
                m.$Activate(l == e)
            }

            function i() {
                if (!q.$LastDragSucceded()) {
                    var a = (f - e % f) % f, b = q.$GetVirtualIndex((e + a) / f), c = b * f - a;
                    h.$TriggerEvent(p.$NAVIGATIONREQUEST, c)
                }
            }

            g.$Index = e;
            g.$Highlight = o;
            k = n.$Thumb || n.$Image || a.$CreateDivElement();
            g.$Wrapper = b = a.$BuildElement(j, "ThumbnailTemplate", k, c);
            m = a.$Buttonize(b);
            d.$ActionMode & 1 && a.$AddEvent(b, "click", i);
            d.$ActionMode & 2 && a.$AddEvent(b, "mouseover", i)
        }

        h.$GetCurrentIndex = function () {
            return l
        };
        h.$SetCurrentIndex = function (c, d, e) {
            var a = l;
            l = c;
            a != -1 && u[a].$Highlight();
            u[c].$Highlight();
            !e && q.$PlayTo(q.$GetVirtualIndex(b.floor(d / f)))
        };
        h.$Show = function (b) {
            a.$ShowElement(i, b)
        };
        var v;
        h.$Reset = function (F, D) {
            if (!v) {
                x = F;
                b.ceil(x / f);
                l = -1;
                k = b.min(k, D.length);
                var h = d.$Orientation & 1, p = t + (t + n) * (f - 1) * (1 - h), m = s + (s + o) * (f - 1) * h, C = p + (p + n) * (k - 1) * h, A = m + (m + o) * (k - 1) * (1 - h);
                a.$SetStylePosition(g, "absolute");
                a.$SetStyleOverflow(g, "hidden");
                d.$AutoCenter & 1 && a.$SetStyleLeft(g, (y - C) / 2);
                d.$AutoCenter & 2 && a.$SetStyleTop(g, (w - A) / 2);
                a.$SetStyleWidth(g, C);
                a.$SetStyleHeight(g, A);
                var j = [];
                a.$Each(D, function (l, e) {
                    var i = new z(l, e), d = i.$Wrapper, c = b.floor(e / f), k = e % f;
                    a.$SetStyleLeft(d, (t + n) * k * (1 - h));
                    a.$SetStyleTop(d, (s + o) * k * h);
                    if (!j[c]) {
                        j[c] = a.$CreateDivElement();
                        a.$AppendChild(g, j[c])
                    }
                    a.$AppendChild(j[c], d);
                    u.push(i)
                });
                var E = a.$Extend({
                    $AutoPlay: e,
                    $NaviQuitDrag: e,
                    $SlideWidth: p,
                    $SlideHeight: m,
                    $SlideSpacing: n * h + o * (1 - h),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 3,
                    $PlayOrientation: d.$Orientation,
                    $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation
                }, d);
                q = new r(i, E);
                v = c
            }
        };
        h.$Options = d = a.$Extend({
            $SpacingX: 3,
            $SpacingY: 3,
            $DisplayPieces: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, A);
        y = a.$GetStyleWidth(i);
        w = a.$GetStyleHeight(i);
        g = a.$FindFirstChildByAttribute(i, "slides");
        j = a.$FindFirstChildByAttribute(g, "prototype");
        a.$RemoveChild(g, j);
        f = d.$Lanes || 1;
        n = d.$SpacingX;
        o = d.$SpacingY;
        t = a.$GetStyleWidth(j);
        s = a.$GetStyleHeight(j);
        k = d.$DisplayPieces
    };
    function s() {
        j.call(this, 0, 0);
        this.$Revert = a.$EmptyFunction
    }

    g.$JssorCaptionSlider$ = function (p, k, g) {
        var d = this, h, f = k.$CaptionTransitions, o = {
            $Transition: "t",
            $Delay: "d",
            $Duration: "du",
            $ScaleHorizontal: "x",
            $ScaleVertical: "y",
            $Rotate: "r",
            $Zoom: "z",
            $Opacity: "f",
            $BeginTime: "b"
        }, e = {
            $Default: function (b, a) {
                if (!isNaN(a.$Value))b = a.$Value; else b *= a.$Percent;
                return b
            }, $Opacity: function (b, a) {
                return this.$Default(b - 1, a)
            }
        };
        e.$Zoom = e.$Opacity;
        j.call(d, 0, 0);
        function m(r, n) {
            var l = [], i, j = [], c = [];

            function h(c, d) {
                var b = {};
                a.$Each(o, function (g, h) {
                    var e = a.$GetAttribute(c, g + (d || ""));
                    if (e) {
                        var f = {};
                        if (g == "t")f.$Value = e; else if (e.indexOf("%") + 1)f.$Percent = a.$ParseFloat(e) / 100; else f.$Value = a.$ParseFloat(e);
                        b[h] = f
                    }
                });
                return b
            }

            function p() {
                return f[b.floor(b.random() * f.length)]
            }

            function d(g) {
                var h;
                if (g == "*")h = p(); else if (g) {
                    var e = f[a.$ParseInt(g)] || f[g];
                    if (a.$IsArray(e)) {
                        if (g != i) {
                            i = g;
                            c[g] = 0;
                            j[g] = e[b.floor(b.random() * e.length)]
                        } else c[g]++;
                        e = j[g];
                        if (a.$IsArray(e)) {
                            e = e.length && e[c[g] % e.length];
                            if (a.$IsArray(e))e = e[b.floor(b.random() * e.length)]
                        }
                    }
                    h = e;
                    if (a.$IsString(h))h = d(h)
                }
                return h
            }

            var q = a.$GetChildren(r);
            a.$Each(q, function (b) {
                var c = [];
                c.$Elmt = b;
                var f = a.$GetAttribute(b, "u") == "caption";
                a.$Each(g ? [0, 3] : [2], function (o, p) {
                    if (f) {
                        var l, i;
                        if (o != 2 || !a.$GetAttribute(b, "t3")) {
                            i = h(b, o);
                            if (o == 2 && !i.$Transition) {
                                i.$Delay = i.$Delay || {$Value: 0};
                                i = a.$Extend(h(b, 0), i)
                            }
                        }
                        if (i && i.$Transition) {
                            l = d(i.$Transition.$Value);
                            if (l) {
                                var j = a.$Extend({$Delay: 0, $ScaleHorizontal: 1, $ScaleVertical: 1}, l);
                                a.$Each(i, function (c, a) {
                                    var b = (e[a] || e.$Default).apply(e, [j[a], i[a]]);
                                    if (!isNaN(b))j[a] = b
                                });
                                if (!p)if (i.$BeginTime)j.$BeginTime = i.$BeginTime.$Value || 0; else if ((g ? k.$PlayInMode : k.$PlayOutMode) & 2)j.$BeginTime = 0
                            }
                        }
                        c.push(j)
                    }
                    if (n % 2 && !p)c.$Children = m(b, n + 1)
                });
                l.push(c)
            });
            return l
        }

        function n(E, d, F) {
            var h = {
                $Easing: d.$Easing,
                $Round: d.$Round,
                $During: d.$During,
                $Reverse: g && !F,
                $Optimize: c
            }, k = E, y = a.$GetParentNode(E), o = a.$GetStyleWidth(k), n = a.$GetStyleHeight(k), u = a.$GetStyleWidth(y), t = a.$GetStyleHeight(y), f = {}, l = {}, m = d.$ScaleClip || 1;
            if (d.$Opacity)f.$Opacity = 2 - d.$Opacity;
            h.$OriginalWidth = o;
            h.$OriginalHeight = n;
            if (d.$Zoom || d.$Rotate) {
                f.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                if (a.$IsBrowserIe9Earlier() || a.$IsBrowserOpera())f.$Zoom = b.min(f.$Zoom, 2);
                l.$Zoom = 1;
                var s = d.$Rotate || 0;
                if (s == c)s = 1;
                f.$Rotate = s * 360;
                l.$Rotate = 0
            } else if (d.$Clip) {
                var z = {
                    $Top: 0,
                    $Right: o,
                    $Bottom: n,
                    $Left: 0
                }, D = a.$Extend({}, z), e = D.$Offset = {}, C = d.$Clip & 4, v = d.$Clip & 8, A = d.$Clip & 1, x = d.$Clip & 2;
                if (C && v) {
                    e.$Top = n / 2 * m;
                    e.$Bottom = -e.$Top
                } else if (C)e.$Bottom = -n * m; else if (v)e.$Top = n * m;
                if (A && x) {
                    e.$Left = o / 2 * m;
                    e.$Right = -e.$Left
                } else if (A)e.$Right = -o * m; else if (x)e.$Left = o * m;
                h.$Move = d.$Move;
                f.$Clip = D;
                l.$Clip = z
            }
            var p = d.$FlyDirection, q = 0, r = 0, w = d.$ScaleHorizontal, B = d.$ScaleVertical;
            if (i.$IsToLeft(p))q -= u * w; else if (i.$IsToRight(p))q += u * w;
            if (i.$IsToTop(p))r -= t * B; else if (i.$IsToBottom(p))r += t * B;
            if (q || r || h.$Move) {
                f.$Left = q + a.$GetStyleLeft(k);
                f.$Top = r + a.$GetStyleTop(k)
            }
            var G = d.$Duration;
            l = a.$Extend(l, a.$GetStyles(k, f));
            h.$Setter = a.$GetStyleSetterEx();
            return new j(d.$Delay, G, h, k, l, f)
        }

        function l(b, c) {
            a.$Each(c, function (c) {
                var f, i = c.$Elmt, e = c[0], j = c[1];
                if (e) {
                    f = n(i, e);
                    b = f.$Locate(a.$IsUndefined(e.$BeginTime) ? b : e.$BeginTime, 1)
                }
                b = l(b, c.$Children);
                if (j) {
                    var g = n(i, j, 1);
                    g.$Locate(b, 1);
                    d.$Combine(g);
                    h.$Combine(g)
                }
                f && d.$Combine(f)
            });
            return b
        }

        d.$Revert = function () {
            d.$GoToPosition(d.$GetPosition_OuterEnd() * (g || 0));
            h.$GoToBegin()
        };
        h = new j(0, 0);
        l(0, m(p, 1))
    }
})(window, document, Math, null, true, false)
/* End */
;
;/* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/prostroy_default/assets/lib/fancybox/jquery.fancybox.pack.js?147567488923135";s:6:"source";s:78:"/bitrix/templates/prostroy_default/assets/lib/fancybox/jquery.fancybox.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function (r, G, f, v) {
    var J = f("html"), n = f(r), p = f(G), b = f.fancybox = function () {
        b.open.apply(this, arguments)
    }, I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function (a) {
        return a && a.hasOwnProperty && a instanceof f
    }, q = function (a) {
        return a && "string" === f.type(a)
    }, E = function (a) {
        return q(a) && 0 < a.indexOf("%")
    }, l = function (a, d) {
        var e = parseInt(a, 10) || 0;
        d && E(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }, w = function (a, b) {
        return l(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var k = {}, g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, k,
                    c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g &&
                k.isDom) && (m = "inline", j = c));
                f.extend(k, {href: g, type: m, content: j, title: h, selector: l});
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function () {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current ||
            b._afterZoomOut(a))
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer)
            }, e = function () {
                d();
                b.current && b.player.isActive && (b.player.timer =
                    setTimeout(b.next, b.current.playSpeed))
            }, c = function () {
                d();
                p.unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1))b.player.isActive = !0, p.bind({
                    "onCancel.player beforeClose.player": c,
                    "onUpdate.player": e,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function (a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
        },
        reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        },
        update: function (a) {
            var d =
                a && a.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function () {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")),
                b.update())
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function (a) {
                if (27 === (a.which || a.keyCode))a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function () {
            var a = b.current && b.current.locked || !1, d = {
                x: n.scrollLeft(),
                y: n.scrollTop()
            };
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function () {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        },
        bindEvents: function () {
            var a = b.current, d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
                var c = e.which || e.keyCode, k = e.target || e.srcElement;
                if (27 === c && b.coming)return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
                    if (1 < a.group.length && k[c] !== v)return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, k))return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");)j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) &&
                    (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k)b.prev(0 < g ? "down" : "left"); else if (0 > g || 0 > k)b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e)return !1;
                c.helpers && f.each(c.helpers, function (d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
                        {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function (a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e)return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
                mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad"))b.coming = null; else {
                c = d.type;
                e = d.href;
                if (!c)return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c)d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length)return b._error("content")
                } else if (!e)return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function () {
                this.onload =
                    this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href, error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                }, success: function (d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {
                }
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function () {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload,
                e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1)f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)if (!1 === b.trigger("afterLoad", a, d))a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents();
                e = a.content;
                c = a.type;
                k = a.scrolling;
                f.extend(b, {
                    wrap: a.wrap, skin: a.skin,
                    outer: a.outer, inner: a.inner, current: a, previous: d
                });
                g = a.href;
                switch (c) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                            f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case "image":
                        e = a.tpl.image.replace("{href}",
                            g);
                        break;
                    case "swf":
                        e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                            e += '<param name="' + a + '" value="' + b + '"></param>';
                            h += " " + a + '="' + b + '"'
                        }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }
                (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === k ? "scroll" :
                    "no" === k ? "hidden" : k);
                b._setDimension();
                b.reposition();
                b.isOpen = !1;
                b.coming = null;
                b.bindEvents();
                if (b.isOpened) {
                    if (d.prevMethod)b.transitions[d.prevMethod]()
                } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                b._preloadImages()
            }
        },
        _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ?
                h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content, h.autoHeight && 1 === H.data("ready"))try {
                    H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
                } catch (G) {
                }
            } else if (h.autoWidth ||
                h.autoHeight)g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight &&
            "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(); else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: {width: w(a), height: w(y)},
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = {
                position: "absolute",
                top: c[0],
                left: c[3]
            };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function () {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                    b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function (a) {
            a =
                a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) :
                (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked)c.top -= m.y, c.left -= m.x;
            return c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        }, step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace, h = c.skinSpace;
            if ("width" === f || "height" === f)e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" ===
            f ? c : c - g * e - h * e))
        }, zoomIn: function () {
            var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({opacity: 1}, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        }, zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {opacity: 0.1};
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c,
                {
                    duration: "none" === d ? 0 : a.closeSpeed,
                    easing: a.closeEasing,
                    step: e ? this.step : null,
                    complete: b._afterZoomOut
                })
        }, changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {opacity: 1}, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        }, changeOut: function () {
            var a =
                b.previous, d = a.prevEffect, e = {opacity: 0.1}, c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0},
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay =
                f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay"))return b.isActive ?
                    b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {overlay: null, fixed: !1})
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
            p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function (a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function () {
                return "fixed" ===
                    f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (a) {
            var d =
                b.current, e = d.title, c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case "inside":
                        c = b.skin;
                        break;
                    case "outside":
                        c = b.wrap;
                        break;
                    case "over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function (a) {
        var d,
            e = f(this), c = this.selector || "", k = function (g) {
                var h = f(this).blur(), j = d, k, l;
                !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
            };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c +
            ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function () {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 ===
                d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")});
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
/* End */
;
;/* Start:"a:4:{s:4:"full";s:92:"/bitrix/templates/prostroy_default/assets/lib/scrollto/jquery.scrollTo.min.js?14756748892910";s:6:"source";s:77:"/bitrix/templates/prostroy_default/assets/lib/scrollto/jquery.scrollTo.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.12
 */
;(function (a) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], a)
    } else {
        a(jQuery)
    }
}(function ($) {
    var j = $.scrollTo = function (a, b, c) {
        return $(window).scrollTo(a, b, c)
    };
    j.defaults = {axis: 'xy', duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1, limit: true};
    j.window = function (a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function () {
        return this.map(function () {
            var a = this, isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin)return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function (f, g, h) {
        if (typeof g == 'object') {
            h = g;
            g = 0
        }
        if (typeof h == 'function')h = {onAfter: h};
        if (f == 'max')f = 9e9;
        h = $.extend({}, j.defaults, h);
        g = g || h.duration;
        h.queue = h.queue && h.axis.length > 1;
        if (h.queue)g /= 2;
        h.offset = both(h.offset);
        h.over = both(h.over);
        return this._scrollable().each(function () {
            if (f == null)return;
            var d = this, $elem = $(d), targ = f, toff, attr = {}, win = $elem.is('html,body');
            switch (typeof targ) {
                case'number':
                case'string':
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = win ? $(targ) : $(targ, this);
                    if (!targ.length)return;
                case'object':
                    if (targ.is || targ.style)toff = (targ = $(targ)).offset()
            }
            var e = $.isFunction(h.offset) && h.offset(d, targ) || h.offset;
            $.each(h.axis.split(''), function (i, a) {
                var b = a == 'x' ? 'Left' : 'Top', pos = b.toLowerCase(), key = 'scroll' + b, old = d[key], max = j.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (h.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += e[pos] || 0;
                    if (h.over[pos])attr[key] += targ[a == 'x' ? 'width' : 'height']() * h.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (h.limit && /^\d+$/.test(attr[key]))attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && h.queue) {
                    if (old != attr[key])animate(h.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(h.onAfter);
            function animate(a) {
                $elem.animate(attr, g, h.easing, a && function () {
                        a.call(this, targ, h)
                    })
            }
        }).end()
    };
    j.max = function (a, b) {
        var c = b == 'x' ? 'Width' : 'Height', scroll = 'scroll' + c;
        if (!$(a).is('html,body'))return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c, html = a.ownerDocument.documentElement, body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };
    function both(a) {
        return $.isFunction(a) || typeof a == 'object' ? a : {top: a, left: a}
    };
    return j
}));

$.easing.elasout = function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;
    if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
    }
    else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};
/* End */
;
;/* Start:"a:4:{s:4:"full";s:71:"/bitrix/templates/prostroy_default/js/jquery.treeview.js?14763608178764";s:6:"source";s:56:"/bitrix/templates/prostroy_default/js/jquery.treeview.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * Treeview 1.5pre - jQuery plugin to hide and show branches of a tree
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 * http://docs.jquery.com/Plugins/Treeview
 *
 * Copyright (c) 2007 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.treeview.js 5759 2008-07-01 07:50:28Z joern.zaefferer $
 *
 */

;(function ($) {

    // TODO rewrite as a widget, removing all the extra plugins
    $.extend($.fn, {
        swapClass: function (c1, c2) {
            var c1Elements = this.filter('.' + c1);
            this.filter('.' + c2).removeClass(c2).addClass(c1);
            c1Elements.removeClass(c1).addClass(c2);
            return this;
        },
        replaceClass: function (c1, c2) {
            return this.filter('.' + c1).removeClass(c1).addClass(c2).end();
        },
        hoverClass: function (className) {
            className = className || "hover";
            return this.hover(function () {
                $(this).addClass(className);
            }, function () {
                $(this).removeClass(className);
            });
        },
        heightToggle: function (animated, callback) {
            animated ?
                this.animate({height: "toggle"}, animated, callback) :
                this.each(function () {
                    jQuery(this)[jQuery(this).is(":hidden") ? "show" : "hide"]();
                    if (callback)
                        callback.apply(this, arguments);
                });
        },
        heightHide: function (animated, callback) {
            if (animated) {
                this.animate({height: "hide"}, animated, callback);
            } else {
                this.hide();
                if (callback)
                    this.each(callback);
            }
        },
        prepareBranches: function (settings) {
            if (!settings.prerendered) {
                // mark last tree items
                this.filter(":last-child:not(ul)").addClass(CLASSES.last);
                // collapse whole tree, or only those marked as closed, anyway except those marked as open
                this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide();
            }
            // return all items with sublists
            return this.filter(":has(>ul)");
        },
        applyClasses: function (settings, toggler) {
            // TODO use event delegation
            this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview", function (event) {
                // don't handle click events on children, eg. checkboxes
                if (this == event.target)
                    toggler.apply($(this).next());
            }).add($("a", this)).hoverClass();

            if (!settings.prerendered) {
                // handle closed ones first
                this.filter(":has(>ul:hidden)")
                    .addClass(CLASSES.expandable)
                    .replaceClass(CLASSES.last, CLASSES.lastExpandable);

                // handle open ones
                this.not(":has(>ul:hidden)")
                    .addClass(CLASSES.collapsable)
                    .replaceClass(CLASSES.last, CLASSES.lastCollapsable);

                // create hitarea if not present
                var hitarea = this.find("div." + CLASSES.hitarea);
                if (!hitarea.length)
                    hitarea = this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea);
                hitarea.removeClass().addClass(CLASSES.hitarea).each(function () {
                    var classes = "";
                    $.each($(this).parent().attr("class").split(" "), function () {
                        classes += this + "-hitarea ";
                    });
                    $(this).addClass(classes);
                })
            }

            // apply event to hitarea
            this.find("div." + CLASSES.hitarea).click(toggler);
        },
        treeview: function (settings) {

            settings = $.extend({
                cookieId: "treeview"
            }, settings);

            if (settings.toggle) {
                var callback = settings.toggle;
                settings.toggle = function () {
                    return callback.apply($(this).parent()[0], arguments);
                };
            }

            // factory for treecontroller
            function treeController(tree, control) {
                // factory for click handlers
                function handler(filter) {
                    return function () {
                        // reuse toggle event handler, applying the elements to toggle
                        // start searching for all hitareas
                        toggler.apply($("div." + CLASSES.hitarea, tree).filter(function () {
                            // for plain toggle, no filter is provided, otherwise we need to check the parent element
                            return filter ? $(this).parent("." + filter).length : true;
                        }));
                        return false;
                    };
                }

                // click on first element to collapse tree
                $("a:eq(0)", control).click(handler(CLASSES.collapsable));
                //$("a:eq(0)", control).on("click", function(){handler(CLASSES.collapsable)});
                // click on second to expand tree
                $("a:eq(1)", control).click(handler(CLASSES.expandable));
                //$("a:eq(1)", control).on("click", function(){handler(CLASSES.expandable)});
                // click on third to toggle tree
                $("a:eq(2)", control).click(handler());
            }

            // handle toggle event
            function toggler() {
                $(this)
                    .parent()
                    // swap classes for hitarea
                    .find(">.hitarea")

                    .swapClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea)
                    .swapClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea)
                    .end()
                    // swap classes for parent li

                    .swapClass(CLASSES.collapsable, CLASSES.expandable)
                    .swapClass(CLASSES.lastCollapsable, CLASSES.lastExpandable)

                    // find child lists
                    .find(">ul")
                    // toggle them
                    .heightToggle(settings.animated, settings.toggle);
                if (settings.unique) {
                    $(this).parent()
                        .siblings()
                        // swap classes for hitarea
                        .find(">.hitarea")
                        .replaceClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea)
                        .replaceClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea)
                        .end()
                        .replaceClass(CLASSES.collapsable, CLASSES.expandable)
                        .replaceClass(CLASSES.lastCollapsable, CLASSES.lastExpandable)
                        .find(">ul")
                        .heightHide(settings.animated, settings.toggle);
                }
            }

            this.data("toggler", toggler);

            function serialize() {
                function binary(arg) {
                    return arg ? 1 : 0;
                }

                var data = [];
                branches.each(function (i, e) {
                    data[i] = $(e).is(":has(>ul:visible)") ? 1 : 0;
                });
                $.cookie(settings.cookieId, data.join(""), settings.cookieOptions);
            }

            function deserialize() {
                var stored = $.cookie(settings.cookieId);
                if (stored) {
                    var data = stored.split("");
                    branches.each(function (i, e) {
                        $(e).find(">ul")[parseInt(data[i]) ? "show" : "hide"]();
                    });
                }
            }

            // add treeview class to activate styles
            this.addClass("treeview");

            // prepare branches and find all tree items with child lists
            var branches = this.find("li").prepareBranches(settings);

            switch (settings.persist) {
                case "cookie":
                    var toggleCallback = settings.toggle;
                    settings.toggle = function () {
                        serialize();
                        if (toggleCallback) {
                            toggleCallback.apply(this, arguments);
                        }
                    };
                    deserialize();
                    break;
                case "location":
                    //alert(location.href); вместо menulink было location.href
                    var current = this.find("a").filter(function () {
                        //return this.href.toLowerCase() == menulink.toLowerCase();
                    });
                    if (current.length) {
                        // TODO update the open/closed classes
                        var items = current.addClass("selected").parents("ul, li").add(current.next()).show();
                        if (settings.prerendered) {
                            // if prerendered is on, replicate the basic class swapping
                            items.filter("li")
                                .swapClass(CLASSES.collapsable, CLASSES.expandable)
                                .swapClass(CLASSES.lastCollapsable, CLASSES.lastExpandable)
                                .find(">.hitarea")
                                .swapClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea)
                                .swapClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea);
                        }
                    }
                    break;
            }

            branches.applyClasses(settings, toggler);

            // if control option is set, create the treecontroller and show it
            if (settings.control) {
                treeController(this, settings.control);
                $(settings.control).show();
            }

            return this;
        }
    });

    // classes used by the plugin
    // need to be styled via external stylesheet, see first example
    $.treeview = {};
    var CLASSES = ($.treeview.classes = {
        open: "open",
        closed: "closed",
        expandable: "expandable",
        expandableHitarea: "expandable-hitarea",
        lastExpandableHitarea: "lastExpandable-hitarea",
        collapsable: "collapsable",
        collapsableHitarea: "collapsable-hitarea",
        lastCollapsableHitarea: "lastCollapsable-hitarea",
        lastCollapsable: "lastCollapsable",
        lastExpandable: "lastExpandable",
        last: "last",
        hitarea: "hitarea"
    });

})(jQuery);
/* End */
;
;/* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/prostroy_default/assets/js/popup/script.js?14756748894442";s:6:"source";s:60:"/bitrix/templates/prostroy_default/assets/js/popup/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGOPRO_PopupPrefix = 'rsgppopup_',
    RSGOPRO_DivsLeft = '<div class="outer"><div class="inner">',
    RSGOPRO_DivsRight = '</div></div>',
    RSGOPRO_ParentsObj;

function RSGoPro_OnOfferChangePopup($elementObj) {
    var finedOfferID = $elementObj.find('.js-add2basketpid').val();
    var element_id = $elementObj.data('elementid');
    if (finedOfferID > 0) {
        // image
        if (RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].IMAGES[0].src &&
            RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].IMAGES[0].src.indexOf("redsign_devfunc_nophoto") < 0 &&
            $elementObj.find('.pic img').length > 0) {
            $elementObj.find('.pic img').attr('src', RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].IMAGES[0].src);
        }
    }
}

function RSGoProPricesJScrollPaneReinitialize() {
    setTimeout(function () { // fix for slow shit
        var pane2api;
        $('.prs_jscrollpane').parents('.prices').removeClass('jspHasScroll');
        $('.prs_jscrollpane').each(function (i) {
            pane2api = $(this).data('jsp');
            pane2api.reinitialise();
            if ($(this).hasClass('jspScrollable')) {
                $(this).parents('.prices').addClass('jspHasScroll');
            }
        });
    }, 50);
}

function RSGoPro_FixPreviewText(element_id) {
    var max_h1 = 350;
    var line_h = 18;
    var h1 = $('#' + RSGOPRO_PopupPrefix + element_id).find('.block.right').outerHeight(true);
    if (h1 != null) {
        if (h1 > max_h1) {
            var $text = $('#' + RSGOPRO_PopupPrefix + element_id).find('.description').find('.text');
            var res = Math.floor(($text.outerHeight(true) - (h1 - max_h1)) / line_h) * line_h;
            $text.css('maxHeight', res + 'px');
        }
    }
}

function RSGoPro_GoPopup(element_id, $parentsObj) {
    element_id = parseInt(element_id);
    RSGOPRO_ParentsObj = $parentsObj;
    if (element_id > 0) {
        if ($('#' + RSGOPRO_PopupPrefix + element_id).length > 0) {
            RSGoPro_ShowPopup(element_id);
        } else {
            RSGoPro_AddPopup(element_id);
        }
    } else {
        console.warn('GoPopup: element_id is empty');
    }
}

function RSGoPro_ShowPopup(element_id) {
    RSGoPro_ChangePosition(element_id);
    $('#' + RSGOPRO_PopupPrefix + element_id).fadeIn("fast", function () {
        // Animation complete
        RSGoPro_FixPreviewText(element_id);
        RSGoPro_SetSet();
        //RSGoProPricesJScrollPaneReinitialize();
        RSGoPro_ScrollReinit('.elementpopupinner .prs_jscrollpane', 1);
    });
}

function RSGoPro_HidePopup(element_id) {
    $('#' + RSGOPRO_PopupPrefix + element_id).fadeOut("fast", function () {
        // Animation complete
    });
}
function RSGoPro_ChangePosition(element_id) {
    var $jsPos;
    if (RSGOPRO_ParentsObj.find('td.name').outerWidth(true) > 5) {
        $jsPos = RSGOPRO_ParentsObj.find('.js-position');
    } else {
        $jsPos = RSGOPRO_ParentsObj.parents('.artables').find('.js-name' + element_id).find('.js-position');
    }
    var pos_left = $jsPos.position().left + $jsPos.outerWidth(true) + 20; // 20 - td padding
    $('#' + RSGOPRO_PopupPrefix + element_id).css({'top': $jsPos.position().top + 'px', 'left': pos_left + 'px'});
}

function RSGoPro_HideAllPopup() {
    $('.rsgppopup:visible').fadeOut("fast", function () {
        // Animation complete
    });
}

function RSGoPro_AddPopup(element_id, $parentsObj) {
    var url_begin = $('.js-element[data-elementid="' + element_id + '"]').attr('data-detail');
    console.log(url_begin);
    var url = url_begin + '?AJAX_CALL=Y&action=rsgppopup&element_id=' + element_id + '';
    var html = '<div id="' + RSGOPRO_PopupPrefix + element_id + '" class="rsgppopup" style="display:none;">' + RSGOPRO_DivsLeft + '<div class="loading"></div>' + RSGOPRO_DivsRight + '</div>';
    $('body').append(html);
    RSGoPro_ShowPopup(element_id);
    $.ajax({
        url: url
    }).done(function (data) {
        $('#' + RSGOPRO_PopupPrefix + element_id).find('.inner').html(data);
        RSGoPro_SetSet();
        RSGoPro_FixPreviewText(element_id);
        if ($('.elementpopupinner .prs_jscrollpane').length > 0) {
            RSGoPro_ScrollInit('.elementpopupinner .prs_jscrollpane');
            $(window).resize(function () {
                RSGoPro_ScrollReinit('.elementpopupinner .prs_jscrollpane', 1);
            });
        }
    }).fail(function () {
        console.warn('Popup: wrong ajax request');
    });
}

$(document).ready(function () {

    // listeners
    $(document).on('keydown', function (e) {
        if (e.keyCode == 27) { // esc
            RSGoPro_HideAllPopup();
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).parents('.rsgppopup').length > 0) {

        } else {
            RSGoPro_HideAllPopup();
        }
    });

    // window.resize
    $(window).resize(function () {
        RSGoPro_HideAllPopup();
    });

    // change offer
    $(document).on('RSGoProOnOfferChange', function (e, elementObj) {
        RSGoPro_OnOfferChangePopup(elementObj);
    });

});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:74:"/bitrix/templates/prostroy_default/assets/js/jscrollpane.js?14756748897176";s:6:"source";s:59:"/bitrix/templates/prostroy_default/assets/js/jscrollpane.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_JSPParentSelector = '.scrollp';
var RSGoPro_JSPScrollSelector = '.scroll';
var RSGoPro_JSPAllChildrensSelector = '.scrollinner';
var RSGoPro_JSPOneChildrenSelector = '.scrollitem';
var RSGoPro_JSPButtonsSelector = '.scrollbtn';
var RSGoPro_SimpleScrollScrollSpeed = 500;

(function ($) {
    $.fn.hasScrollBarY = function () {
        var divnode = this.get(0);
        if (divnode.scrollHeight > divnode.clientHeight)
            return true;
    }
    $.fn.hasScrollBarX = function () {
        var divnode = this.get(0);
        if (divnode.scrollWidth > divnode.clientWidth)
            return true;
    }
})(jQuery);

function RSGoPro_JSPInit(selector) {
    var $scroll = $(selector);
    if ($scroll.length > 0) {
        $scroll.parents(RSGoPro_JSPParentSelector).addClass('jsp');
        $scroll.jScrollPane({animateScroll: true, mouseWheelSpeed: 30, verticalGutter: 0});
        $scroll.each(function (i) {
            if ($(this).hasClass('jspScrollable')) {
                $(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
            }
        });
    }
}
function RSGoPro_JSPReinit(selector, needDestroy) {
    var $scroll = $(selector);
    if ($scroll.length > 0) {
        if ($scroll.parents(RSGoPro_JSPParentSelector).hasClass('horizontal')) {
            var count = 0, elemWidth = 0;
            $scroll.each(function (i) {
                count = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).length;
                elemWidth = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerWidth(true);
                $(this).find(RSGoPro_JSPAllChildrensSelector).css({width: (count * elemWidth) + 'px'});
            });
        }
        if (needDestroy) {
            $scroll.data('jsp').destroy();
            RSGoPro_JSPInit(selector);
        } else {
            var pane2api;
            setTimeout(function () { // fix for slow shit
                $scroll.parents(RSGoPro_JSPParentSelector).removeClass('jspHasScroll');
                $scroll.each(function (i) {
                    pane2api = $(this).data('jsp');
                    pane2api.reinitialise();
                    if ($(this).hasClass('jspScrollable')) {
                        $(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
                    }
                });
            }, 50);
        }
    }
}

function RSGoPro_SimpleScrollInit(selector) {
    var $scroll = $(selector);
    if ($scroll.length > 0) {
        var count = 0, elemWidth = 0;
        if ($scroll.parents(RSGoPro_JSPParentSelector).hasClass('horizontal')) {
            $scroll.each(function (i) {
                count = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).length;
                elemSize = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerWidth(true);
                $(this).css({
                    overflowX: 'auto',
                    overflowY: 'hidden'
                }).find(RSGoPro_JSPAllChildrensSelector).css({width: (count * elemSize) + 'px'});
                if ($(this).hasScrollBarX()) {
                    $(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
                }
            });
        } else {
            $scroll.each(function (i) {
                count = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).length;
                elemSize = $(this).find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerHeight(true);
                //$(this).css({overflowX:'hidden',overflowY:'auto'}).find(RSGoPro_JSPAllChildrensSelector).css({width:(count*elemSize)+'px'});
                if ($(this).hasScrollBarY()) {
                    $(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
                }
            });
        }
        $scroll.parents(RSGoPro_JSPParentSelector).addClass('simple');
    }
}
function RSGoPro_SimpleScrollReinit(selector) {
    $(selector).each(function (i) {
        if ($(this).hasScrollBarY()) {
            $(this).parents(RSGoPro_JSPParentSelector).addClass('jspHasScroll');
        }
    });
}

function RSGoPro_ScrollInit(selector) {
    if (RSDevFunc_PHONETABLET) // this is tablet or phone
    {
        // init
        RSGoPro_SimpleScrollInit(selector);
    } else { // this is PC
        // init
        RSGoPro_JSPInit(selector);
    }
}
function RSGoPro_ScrollReinit(selector, needDestroy) {
    if (RSDevFunc_PHONETABLET) // this is tablet or phone
    {
        // reinit
        RSGoPro_SimpleScrollReinit(selector);
    } else {
        // reinit
        RSGoPro_JSPReinit(selector, needDestroy);
    }
}
function RSGoPro_ScrollPressButton($btn) {
    var $scroll = $btn.parents(RSGoPro_JSPParentSelector).find(RSGoPro_JSPScrollSelector);
    if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal')) {
        var elemSize = $scroll.find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerWidth(true);
    } else {
        var elemSize = $scroll.find(RSGoPro_JSPAllChildrensSelector).find(RSGoPro_JSPOneChildrenSelector).filter(':first').outerHeight(true);
    }
    if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp')) {
        $scroll.data('jsp').scrollByX(-(elemSize));
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple')) {
        $scroll.stop().scrollTo({top: '+=0px', left: '-=' + (elemSize)}, RSGoPro_SimpleScrollScrollSpeed);
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp')) {
        $scroll.data('jsp').scrollByX((elemSize));
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('horizontal') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple')) {
        $scroll.stop().scrollTo({top: '+=0px', left: '+=' + (elemSize)}, RSGoPro_SimpleScrollScrollSpeed);
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp')) {
        $scroll.data('jsp').scrollByY(-(elemSize));
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('prev') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple')) {
        $scroll.stop().scrollTo({top: '-=' + (elemSize), left: '+=0px'}, RSGoPro_SimpleScrollScrollSpeed);
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('jsp')) {
        $scroll.data('jsp').scrollByY((elemSize));
    } else if ($btn.parents(RSGoPro_JSPParentSelector).hasClass('vertical') && $btn.hasClass('next') && $btn.parents(RSGoPro_JSPParentSelector).hasClass('simple')) {
        $scroll.stop().scrollTo({top: '+=' + (elemSize), left: '+=0px'}, RSGoPro_SimpleScrollScrollSpeed);
    }
}
function RSGoPro_ScrollGoToElement($element) {
    var $scroll = $element.parents(RSGoPro_JSPParentSelector).find(RSGoPro_JSPScrollSelector);
    if ($element.parents(RSGoPro_JSPParentSelector).hasClass('jsp')) {
        $scroll.data('jsp').scrollToElement($element, false);
    } else if ($element.parents(RSGoPro_JSPParentSelector).hasClass('simple')) {
        $scroll.stop().scrollTo($element, RSGoPro_SimpleScrollScrollSpeed);
    }
}


$(document).ready(function () {

    // press button
    $(document).on('click', RSGoPro_JSPParentSelector + ' ' + RSGoPro_JSPButtonsSelector, function () {
        var $btn = $(this);
        if ($btn.parents(RSGoPro_JSPParentSelector).length > 0) {
            RSGoPro_ScrollPressButton($btn);
        }
        return false;
    });

});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:75:"/bitrix/templates/prostroy_default/assets/js/glass/script.js?14756748893907";s:6:"source";s:60:"/bitrix/templates/prostroy_default/assets/js/glass/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var GLASS_magnify;
var $GLASS_glass;

var GLASS_uip = {
    fadeDelay: 200,
    native_width: 0,
    native_height: 0,
    mouse_x: 0,
    mouse_y: 0,
    lupa: ""
};

// ���������� ��������� �������
var GLASS_mouseMove = function (e) {
    // �������� ������� �� ���� �������� ����� � ������
    var GLASS_magnify_offset = GLASS_uip.cur_img.offset();
    GLASS_uip.mouse_x = e.pageX - GLASS_magnify_offset.left;
    GLASS_uip.mouse_y = e.pageY - GLASS_magnify_offset.top;

    if (GLASS_uip.mouse_x < GLASS_uip.cur_img.width() && GLASS_uip.mouse_y < GLASS_uip.cur_img.height() && GLASS_uip.mouse_x > 0 && GLASS_uip.mouse_y > 0) { // ���� ������� ������� ��������� ������
        GLASS_magnify(e);
    } else { // ����� ��������
        GLASS_uip.lupa.hide();
    }
    return;
};

var GLASS_magnify = function (e) {
    var rx = Math.round(GLASS_uip.mouse_x / GLASS_uip.cur_img.width() * GLASS_uip.native_width - GLASS_uip.lupa.width() / 2) * -1;
    var ry = Math.round(GLASS_uip.mouse_y / GLASS_uip.cur_img.height() * GLASS_uip.native_height - GLASS_uip.lupa.height() / 2) * -1;
    var bg_pos = rx + "px " + ry + "px";
    var glasspop_top = e.pageY - GLASS_uip.cur_img.offset().top - GLASS_uip.lupa.height() / 2;
    var glasspop_left = e.pageX - GLASS_uip.cur_img.offset().left - GLASS_uip.lupa.width() / 2;

    // ������ ����������� ���������� �������� css ��������� ����
    GLASS_uip.lupa.css({
        left: glasspop_left,
        top: glasspop_top,
        backgroundPosition: bg_pos
    });
    return;
};

$(document).ready(function () {

    if (!RSDevFunc_PHONETABLET) {
        // hide glass on mouseleave
        $(document).on('mouseleave', '.glass_lupa', function () {
            $GLASS_glass = $(this).parents('.glass');
            $GLASS_glass.find('.glass_lupa').removeClass('active').fadeOut(GLASS_uip.fadeDelay);
            $GLASS_glass.find('.js_picture_glass').unbind('mousemove');
        });

        // hide/show glass when mouseleave
        $(document).on('mouseleave', '.glass', function () {
            if (GLASS_uip.lupa.length)
                GLASS_uip.lupa.fadeOut(GLASS_uip.fadeDelay);
        });

        // show glass on mouseenter
        $(document).on('mouseenter', '.js_picture_glass', function () {
            $GLASS_glass = $(this).parents('.glass');
            GLASS_uip.lupa = $GLASS_glass.find('.glass_lupa');
            GLASS_uip.lupa.addClass('active');
            // �������� ������� ��� �����������
            $(this).parents('.glass').find('.js_picture_glass').on('mousemove', function () {
                GLASS_uip.cur_img = $GLASS_glass.find('.js_picture_glass'); // ������� �����������
                GLASS_uip.lupa.fadeIn(GLASS_uip.fadeDelay); // ������� ��������� ����
                var src = GLASS_uip.cur_img.attr('src'); // ���������� ���� �� ��������
                if (src) // ���� ���������� src, ������������� ��� ��� ����
                {
                    GLASS_uip.lupa.css({
                        'background-image': 'url(' + src + ')',
                        'background-repeat': 'no-repeat'
                    });
                }

                if (!GLASS_uip.cur_img.data('GLASS_native_width') || GLASS_uip.cur_img.data('src') != src) {
                    var image_object = new Image();
                    image_object.onload = function () {
                        // ���������� �������� ������� ��������
                        GLASS_uip.native_width = image_object.width;
                        GLASS_uip.native_height = image_object.height;
                        // ���������� ��� ������
                        GLASS_uip.cur_img.data('GLASS_native_width', GLASS_uip.native_width);
                        GLASS_uip.cur_img.data('GLASS_native_height', GLASS_uip.native_height);
                        GLASS_uip.cur_img.data('src', src);
                        // �������� ������� mouseMove � ���������� ����� ����
                        GLASS_mouseMove.apply(this, arguments);
                        GLASS_uip.lupa.on('mousemove', GLASS_mouseMove);
                    };
                    image_object.src = src;
                    return;
                } else {
                    // �������� �������� ������� �����������
                    GLASS_uip.native_width = GLASS_uip.cur_img.data('GLASS_native_width');
                    GLASS_uip.native_height = GLASS_uip.cur_img.data('GLASS_native_height');
                }
                // �������� ������� mouseMove � ���������� ����� ����
                GLASS_mouseMove.apply(this, arguments);
                GLASS_uip.lupa.on('mousemove', GLASS_mouseMove);
            });
        });
    }

});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/prostroy_default/assets/js/script.js?147567488916634";s:6:"source";s:54:"/bitrix/templates/prostroy_default/assets/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function ($) {
    $.fn.setHtmlByUrl = function (options) {
        var settings = $.extend({
            'url': ''
        }, options);
        return this.each(function () {
            if ('' != settings.url) {
                var $this = $(this);
                $.ajax({
                    type: 'GET',
                    dataType: 'html',
                    url: settings.url,
                    beforeSend: function () {
                        if ('localStorage' in window && window['localStorage'] !== null) {
                            data = localStorage.getItem(settings.url);
                            if (data) {
                                localStorage.setItem(settings.url, data);
                                $this.append(data);
                                return false;
                            }
                            return true;
                        }
                    },
                    success: function (data) {
                        localStorage.setItem(settings.url, data);
                        $this.append(data);
                    },
                });
            }
        });
    };
})(jQuery);

var RSGoPro_AJAXPAGES_processing = false;

function RSGoPro_PutJSon(json, $linkObj, ajaxpagesid) {
    if (json.TYPE == 'OK') {
        if (ajaxpagesid && ajaxpagesid == json.IDENTIFIER) {
            if (json.HTML.catalognames) {
                $('#' + ajaxpagesid).find('.names > tbody > tr:last').after(json.HTML.catalognames);
            }
            if (json.HTML.catalogproducts) {
                $('#' + ajaxpagesid).find('.products > tbody > tr:last').after(json.HTML.catalogproducts);
            }
            if (json.HTML.showcaseview) {
                $('#' + ajaxpagesid).find('#showcaseview').append(json.HTML.showcaseview);
            }
            if ($linkObj && json.HTML.catalogajaxpages) {
                $linkObj.parents('.ajaxpages').replaceWith(json.HTML.catalogajaxpages);
            } else if ($linkObj) {
                $linkObj.parents('.ajaxpages').remove();
            }
        } else {
            console.warn('PutJSon -> no ajaxpages');
        }
        if (json.HTMLBYID) {
            for (var key in json.HTMLBYID) {
                if ($('#' + key)) {
                    $('#' + key).html(json.HTMLBYID[key]);
                }
            }
        }
    } else {
        console.warn('PutJSon -> request return error');
    }
}

// AjaxPages
function RSGoPro_AjaxPages(linkObj) {
    if (linkObj.parent().hasClass('animation')) {
        linkObj.parent().removeClass('animation');
        // if that was table - repaint lines
        var $div = $('#' + linkObj.data('ajaxpagesid'));
        if ($div.length > 0 && $div.find('.artables').length > 0 && $div.find('.artables .names > tbody > tr').length > 1) {
            var id = 0;
            $div.find('.artables .names > tbody > tr').each(function (i) {
                id = $(this).data('elementid');
                if (i % 2 == 0) {
                    $(this).addClass('even');
                    $div.find('.artables .products tr.js-elementid' + id).addClass('even');
                } else {
                    $(this).removeClass('even');
                    $div.find('.artables .products tr.js-elementid' + id).removeClass('even');
                }
            });
        }
        // /if that was table - repaint lines
    } else {
        linkObj.parent().addClass('animation');
    }
}

// Area2Darken
function RSGoPro_Area2Darken(areaObj, anim, options) {
    var opt = $.extend({
        'progressLeft': false,
        'progressTop': false,
    }, options);
    if (!areaObj.hasClass('areadarken')) {
        areaObj.addClass('areadarken').css({"position": "relative"}).append('<div class="area2darken"></div>');
        if (anim == 'animashka') {
            areaObj.find('.area2darken').append('<i class="icon animashka"></i>');
            if (opt.progressTop) {
                areaObj.find('.animashka').css({'top': opt.progressTop});
            }
        }
    } else {
        areaObj.removeClass('areadarken').removeAttr('style').find('.area2darken').remove();
    }
}

function RSGoPro_SetSet() {
    RSGoPro_SetFavorite();
    RSGoPro_SetCompared();
    RSGoPro_SetInBasket();
    RSGoPro_TIMER();
}
// set favorite
function RSGoPro_SetFavorite() {
    $('.add2favorite').removeClass('in');
    for (element_id in RSGoPro_FAVORITE) {
        if (RSGoPro_FAVORITE[element_id] == 'Y' && $('.js-elementid' + element_id).find('.add2favorite').length > 0) {
            $('.js-elementid' + element_id).find('.add2favorite').addClass('in');
        }
    }
}

// set compare
function RSGoPro_SetCompared() {
    $('.add2compare').removeClass('in').html('<i class="icon pngicons"></i>' + BX.message('RSGOPRO_JS_COMPARE'));
    ;
    for (element_id in RSGoPro_COMPARE) {
        if (RSGoPro_COMPARE[element_id] == 'Y' && $('.js-elementid' + element_id).find('.add2compare').length > 0) {
            $('.js-elementid' + element_id).find('.add2compare').addClass('in').html('<i class="icon pngicons"></i>' + BX.message('RSGOPRO_JS_COMPARE_IN'));
        }
    }
}

// set in basket
function RSGoPro_SetInBasket() {
    $('.add2basketform').removeClass('in');
    for (element_id in RSGoPro_INBASKET) {
        if (RSGoPro_INBASKET[element_id] == 'Y' && $(".js-add2basketpid[value='" + element_id + "']").length > 0) {
            $('.js-add2basketpid[value="' + element_id + '"]').parents('.add2basketform').addClass('in');
        }
        if (parseInt(RSGoPro_INBASKET[element_id]) > 0 && $('.products').find('.js-add2basketform' + RSGoPro_INBASKET[element_id]).length > 0) {
            $('.products').find('.js-add2basketform' + RSGoPro_INBASKET[element_id]).addClass('in');
        }
    }
}

// AJAXPAGES
function RSGoPro_AJAXPAGESAuto() {
    $('.ajaxpages.auto').each(function (i) {
        var porog = 200,
            $ajaxpObj = $(this);
        var ajaxpOffsetTop = $ajaxpObj.offset().top,
            window_height = $(window).height();
        if (porog > (ajaxpOffsetTop - window.pageYOffset - window_height) && !RSGoPro_AJAXPAGES_processing && !$ajaxpObj.hasClass('')) {
            $ajaxpObj.find('a').trigger('click');
        }
    });
}

// TIMER
function RSGoPro_TIMER() {
    $('.timer').timer({
        reInit: true,
    });
    $('.timer').timer({
        days: ".result-day",
        hours: ".result-hour",
        minute: ".result-minute",
        second: ".result-second",
        blockTime: ".val",
        linePercent: ".progress",
        textLinePercent: ".num_percent",
    });
}

function timerCanDelete() {

}

// phone mask
function RSGoPro_InitMaskPhone() {
    if ($('.maskPhone').length > 0) {
        $(".maskPhone").mask("+7 (999) 999-9999");
    }
}

$(document).ready(function () {

    $(window).resize(function () {
        var left_B = $('.catalogmenu2 li ul.first').height();
        var right_B = $('.aroundjssorslider1').height();

        if (left_B < right_B && screen.width > 100) {
            $('.aroundjssorslider1').css('min-height', 'auto');
        }
    });

    $(document).on('RSGoProOnOfferChange', function (e, obj) {
        if ($(obj).find('.timers').length > 0) {
            if ($(obj).find('.intimer').data('autoreuse') == 'N') {
                var dateNowOfferChange = new Date;
                dateNowOfferChange = (Date.parse(dateNowOfferChange)) / 1000;
                var dateFromOfferChange = $(obj).find('.timer').data('datefrom');
                var dateToOfferChange = $(obj).find('.intimer').data('dateto');
                if ((dateToOfferChange - dateNowOfferChange) < 0) {
                    $(obj).find('.timers').css('display', 'none');
                    $(obj).removeClass('da2 qb');
                    $(obj).find('.price').removeClass('new');
                }
            }
        }
    });
    // Click protection
    $(document).on('click', '.click_protection', function (e) {
        e.stopImmediatePropagation();
        console.warn('Click protection');
        return false;
    });
    // /Click protection

    // a -> submit form
    $(document).on('click', 'form a.submit', function () {
        $(this).parents('form').find('input[type="submit"]').trigger('click');
        return false;
    });
    // /a -> submit form

    // AJAX -> add2basket
    $(document).on('submit', '.add2basketform', function () {
        var $formObj = $(this);
        var id = parseInt($formObj.find('.js-add2basketpid').val());
        var url = $formObj.parents('.js-element').data('detail');
        if (id > 0) {
            var seriData = $(this).serialize();
            var url = url + '?' + seriData + '&AJAX_CALL=Y&action=add2basket';
            RSGoPro_Area2Darken($formObj);
            RSGoPro_Area2Darken($('#header').find('.basketinhead'));
            $.getJSON(url, {}, function (json) {
                if (json.TYPE == 'OK') {
                    RSGoPro_INBASKET[id] = "Y";
                    RSGoPro_SetInBasket();
                    RSGoPro_PutJSon(json);
                } else {
                    console.warn('add2basket - error responsed');
                }
            }).fail(function (data) {
                console.warn('add2basket - can\'t load json');
            }).always(function () {
                RSGoPro_Area2Darken($formObj);
                RSGoPro_Area2Darken($('#header').find('.basketinhead'));
            });
        } else if ($formObj.parents('.elementpopup').length < 1) {
            // id = 0 -> Show popup (if PC)
            if (!RSDevFunc_PHONETABLET) {
                RSGoPro_GoPopup($formObj.parents('.js-element').data('elementid'), $formObj.parents('.js-element'));
            } else {
                if ($formObj.parents('.js-element').find('.js-detaillink').length > 0) {
                    window.location = 'http://' + window.location.hostname + $formObj.parents('.js-element').find('.js-detaillink').attr('href')
                } else {
                    console.warn('fail redirect - can\'t find link');
                }
            }
        } else {
            console.warn('add product to basket failed');
        }
        return false;
    });

    // AJAX -> add2compare
    $(document).on('click', '.add2compare', function () {
        var $linkObj = $(this);
        var id = parseInt($linkObj.parents('.js-element').data('elementid'));
        var action = '';
        var url = $linkObj.parents('.js-element').data('detail');
        if (id > 0) {
            RSGoPro_Area2Darken($('.add2compare'));
            if (RSGoPro_COMPARE[id] == 'Y') { // delete from compare
                action = 'DELETE_FROM_COMPARE_LIST';
            } else {
                action = 'ADD_TO_COMPARE_LIST';
            }
            var url = url + '?AJAX_CALL=Y&action=' + action + '&id=' + id;
            $.getJSON(url, {}, function (json) {
                if (json.TYPE == "OK") {
                    RSGoPro_PutJSon(json);
                    if (action == 'DELETE_FROM_COMPARE_LIST') { // delete from compare
                        delete RSGoPro_COMPARE[id];
                    } else { // add to compare
                        RSGoPro_COMPARE[id] = 'Y';
                    }
                } else {
                    console.warn('compare - error responsed');
                }
            }).fail(function (data) {
                console.warn('compare - fail request');
            }).always(function () {
                RSGoPro_Area2Darken($('.add2compare'));
                RSGoPro_SetCompared();
            });
        }
        return false;
    });

    // AJAX -> add2favorite
    $(document).on('click', '.add2favorite', function () {
        var $linkObj = $(this);
        var id = parseInt($linkObj.parents('.js-element').data('elementid'));
        var url = $linkObj.parents('.js-element').data('detail');
        if (id > 0) {
            RSGoPro_Area2Darken($('.add2favorite'));
            var url = url + '?AJAX_CALL=Y&action=add2favorite&id=' + id;
            $.getJSON(url, {}, function (json) {
                if (json.TYPE == "OK") {
                    RSGoPro_PutJSon(json);
                    if (RSGoPro_FAVORITE[id] == 'Y') { // remove from favorite
                        delete RSGoPro_FAVORITE[id];
                    } else { // add to favorite
                        RSGoPro_FAVORITE[id] = 'Y';
                    }
                } else {
                    console.warn('favorite - error responsed');
                }
            }).fail(function (data) {
                console.warn('favorite - fail request');
            }).always(function () {
                RSGoPro_Area2Darken($('.add2favorite'));
                RSGoPro_SetFavorite();
            });
        }
        return false;
    });

    // AJAXPAGES
    $(document).on('click', '.ajaxpages a', function () {
        var $linkObj = $(this);
        var ajaxurl = $linkObj.data('ajaxurl');
        var ajaxpagesid = $linkObj.data('ajaxpagesid');
        var navpagenomer = $linkObj.data('navpagenomer');
        var navpagecount = $linkObj.data('navpagecount');
        var navnum = $linkObj.data('navnum');
        var nextpagenomer = parseInt(navpagenomer) + 1;
        var url = '';

        if ($('#' + ajaxpagesid).length > 0 && navpagenomer < navpagecount && parseInt(navnum) > 0 && ajaxurl != "") {
            RSGoPro_AJAXPAGES_processing = true;
            RSGoPro_AjaxPages($linkObj);
            if (ajaxurl.indexOf("?") < 1) {
                url = ajaxurl + '?ajaxpages=Y&ajaxpagesid=' + ajaxpagesid + '&PAGEN_' + navnum + '=' + nextpagenomer;
            } else {
                url = ajaxurl + '&ajaxpages=Y&ajaxpagesid=' + ajaxpagesid + '&PAGEN_' + navnum + '=' + nextpagenomer;
            }
            $.getJSON(url, {}, function (json) {
                RSGoPro_PutJSon(json, $linkObj, ajaxpagesid);
            }).fail(function (json) {
                console.warn('ajaxpages - error responsed');
            }).always(function () {
                setTimeout(function () { // fix for slow shit
                    RSGoPro_AJAXPAGES_processing = false;
                    RSGoPro_AjaxPages($linkObj);
                }, 50);
            });
        } else {
            if (!($('#' + ajaxpagesid).length > 0)) {
                console.warn('AJAXPAGES: ajaxpages -> empty DOM element');
            }
            if (!(navpagenomer < navpagecount)) {
                console.warn('AJAXPAGES: ajaxpages -> navpagenomer !< navpagecount');
            }
            if (!(parseInt(navnum) > 0)) {
                console.warn('AJAXPAGES: ajaxpages -> parseInt(navnum)!>0');
            }
            if (!(ajaxurl != "")) {
                console.warn('AJAXPAGES: ajaxpages -> ajaxurl is empty');
            }
        }
        return false;
    });
    //$(window).resize(function(){
    $(window).scroll(function () {
        RSGoPro_AJAXPAGESAuto();
    });
    // /AJAXPAGES

    // price table scroll
    $(document).on('click', '.prices .arrowtop', function () {
        var $arrow = $(this);
        if ($arrow.parent().find('tr').length > 3 && !$(this).parent().find('tr:first').is(':visible')) {
            $arrow.parent().find('tr').each(function (i) {
                if (!$(this).hasClass('noned')) {
                    $arrow.parent().find('tr:eq(' + (i - 1) + ')').removeClass('noned');
                    $arrow.parent().find('tr:eq(' + (i + 2) + ')').addClass('noned');
                    return false;
                }
            });
        }
        return false;
    });
    $(document).on('click', '.prices .arrowbot', function () {
        var $arrow = $(this);
        if ($arrow.parent().find('tr').length > 3 && !$(this).parent().find('tr:last').is(':visible')) {
            $arrow.parent().find('tr').each(function (i) {
                if (!$(this).hasClass('noned')) {
                    $(this).addClass('noned');
                    $arrow.parent().find('tr:eq(' + (i + 3) + ')').removeClass('noned');
                    return false;
                }
            });
        }
        return false;
    });

    // disableSelection
    $(document).on('mouseenter mouseleave', '.prices .arrowtop, .prices .arrowbot, .js-minus, .js-plus', function () {
        $('html').toggleClass('disableSelection');
    });

    // quantity
    $(document).on('click', '.js-minus', function () {

        var $btn = $(this),
            $input = $btn.parent().find('.js-quantity'),
            ratio = parseFloat($btn.parent().find('.js-quantity').data('ratio')),
            ration2 = ratio.toString().split('.', 2)[1],
            length = 0,
            val = parseFloat($input.val());

        if (ration2 !== undefined) {
            length = ration2.length;
        }
        if (val > ratio) {
            $input.val((val - ratio).toFixed(length));
        }

        $input.trigger('change');

        return false;
    });
    $(document).on('click', '.js-plus', function () {

        var $btn = $(this),
            $input = $btn.parent().find('.js-quantity'),
            ratio = parseFloat($input.data('ratio')),
            ration2 = ratio.toString().split('.', 2)[1],
            length = 0,
            val = parseFloat($input.val());

        if (ration2 !== undefined) {
            length = ration2.length;
        }
        $input.val((val + ratio).toFixed(length));

        $input.trigger('change');

        return false;
    });
    $(document).on('blur', '.js-quantity', function () {
        var $input = $(this),
            ratio = parseFloat($input.data('ratio')),
            ration2 = ratio.toString().split('.', 2)[1],
            length = 0;
        if (ration2 !== undefined) {
            length = ration2.length;
        }
        var val = parseFloat($input.val());
        if (val > 0) {
            $input.val((ratio * (Math.floor(val / ratio))).toFixed(length));
        } else {
            $input.val(ratio);
        }
    });

    // fancybox -> all
    var RSGoPro_FancyOptions1 = {}, RSGoPro_FancyOptions2 = {};
    RSGoPro_FancyOptions1 = {
        maxWidth: 900,
        maxHeight: 600,
        minWidth: 250,
        minHeight: 100,
        fitToView: true,
        autoSize: true,
        openEffect: 'none',
        closeEffect: 'none',
        padding: 20,
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="icon pngicons"></i></a>',
        },
        helpers: {
            title: {
                type: 'inside',
                position: 'top'
            }
        },
        beforeLoad: function () {
            RSGoPro_HideAllPopup();
        },
        beforeShow: function () {
            $('.fancybox-wrap').css({marginLeft: '-10000px'});
            $(document).trigger('RSGoProOnFancyBeforeShow');
        },
        afterShow: function () {
            setTimeout(function () {
                $.fancybox.toggle();
            }, 50);
            setTimeout(function () {
                $('.fancybox-wrap').css({marginLeft: '0px'});
                RSGoPro_InitMaskPhone();
            }, 75);
        }
    };
    $('.fancyajax:not(.big)').fancybox(RSGoPro_FancyOptions1);
    RSGoPro_FancyOptions2 = $.extend({}, RSGoPro_FancyOptions1);
    ;
    RSGoPro_FancyOptions2.width = '80%';
    RSGoPro_FancyOptions2.height = '80%';
    RSGoPro_FancyOptions2.autoSize = false;
    RSGoPro_FancyOptions2.autoHeight = true;
    $('.fancyajax.big').fancybox(RSGoPro_FancyOptions2);

    RSGoPro_InitMaskPhone();

    $(document).on('focus blur', '.dropdown-block .bx-ui-sls-fake', function () {
        $(this).parents('.dropdown-block').toggleClass('focus');
    });

});

/* End */
;
;/* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/prostroy_default/assets/js/offers.js?147567488918318";s:6:"source";s:54:"/bitrix/templates/prostroy_default/assets/js/offers.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_OffersExt_timeout_id = 0,
    RSGoPro_ajaxTimeout = 0,
    RSGoPro_ajaxTimeoutTime = 1000;

function RSGoPro_OffersExt_ChangeHTML($product) {
    var element_id = $product.data('elementid');
    if (RSGoPro_OFFERS[element_id]) {
        // get all selected values
        var arrFullChosed = new Object();
        $product.find('.div_option.selected').each(function (index1) {
            var $optionObj = $(this);
            var code = $optionObj.parents('.offer_prop').data('code');
            var value = $optionObj.data('value');
            arrFullChosed[code] = value;
        });

        // get offerID (key=ID)
        var finedOfferID = 0;
        var all_prop_true2 = true;
        for (offerID in RSGoPro_OFFERS[element_id].OFFERS) {
            all_prop_true2 = true;
            for (pCode in arrFullChosed) {
                if (arrFullChosed[pCode] != RSGoPro_OFFERS[element_id].OFFERS[offerID].PROPERTIES[pCode]) {
                    all_prop_true2 = false;
                    break;
                }
            }
            if (all_prop_true2) {
                finedOfferID = offerID;
                break;
            }
        }

        // article
        if ($product.find('.offer_article')) {
            if (RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].ARTICLE) {
                $product.find('.offer_article').html(RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].ARTICLE).parent().css('visibility', 'visible');
            } else if ($product.find('.offer_article').data('prodarticle')) {
                $product.find('.offer_article').html($product.find('.offer_article').data('prodarticle')).parent().css('visibility', 'visible');
            } else {
                $product.find('.offer_article').parent().css('visibility', 'hidden');
            }
        }

        // set ratio
        if (RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_RATIO && $product.find('.js-quantity')) {
            $product.find('.js-quantity').data('ratio', RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_RATIO);
            $product.find('.js-quantity').val($product.find('.js-quantity').data('ratio'));
        }
        if (RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_NAME && $product.find('.js-measurename')) {
            $product.find('.js-measurename').html(RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CATALOG_MEASURE_NAME);
        }

        // set price
        if (!!RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].PRICE_MATRIX) {
            RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].PRICE_MATRIX);
        } else if (RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].PRICES) {

            var PRICES = RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].PRICES;

            for (var PRICE_CODE in PRICES) {

                if ($product.find('.price_pdv_' + PRICE_CODE)) {
                    $product.find('.price_pdv_' + PRICE_CODE).removeClass('new').html(PRICES[PRICE_CODE].PRINT_DISCOUNT_VALUE);
                    if (parseInt(PRICES[PRICE_CODE].DISCOUNT_DIFF) > 0) {
                        $product.find('.price_pdv_' + PRICE_CODE).addClass('new');
                    }
                }

                if ($product.find('.price_pd_' + PRICE_CODE)) {
                    if (parseInt(PRICES[PRICE_CODE].DISCOUNT_DIFF) > 0) {
                        $product.find('.price_pd_' + PRICE_CODE).html(PRICES[PRICE_CODE].PRINT_DISCOUNT);
                    } else {
                        $product.find('.price_pd_' + PRICE_CODE).html('');
                    }
                }

                if ($product.find('.price_pv_' + PRICE_CODE)) {
                    if (parseInt(PRICES[PRICE_CODE].DISCOUNT_DIFF) > 0) {
                        $product.find('.price_pv_' + PRICE_CODE).html(PRICES[PRICE_CODE].PRINT_VALUE);
                    } else {
                        $product.find('.price_pv_' + PRICE_CODE).html('');
                    }
                }
            }
        }

        var SKUProps = RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].DISPLAY_PROPERTIES;
        for (var SKUProp in SKUProps) {
            $product.find('.prop_num' + SKUProp).find('.val_prop_sku').html(SKUProps[SKUProp].DISPLAY_VALUE);
        }

        // daysarticle & quickbuy
        $product.removeClass('qb da2');
        $product.find('.timers .timer').hide();
        if (RSGoPro_OFFERS[element_id].ELEMENT.QUICKBUY || RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].QUICKBUY) {
            $product.addClass('qb');
            if ($product.find('.timers .qb.js-timer_id' + element_id).length > 0) {
                $product.find('.timers .qb.js-timer_id' + element_id).css('display', 'inline-block');
            } else if ($product.find('.timers .qb.js-timer_id' + finedOfferID).length > 0) {
                $product.find('.timers .qb.js-timer_id' + finedOfferID).css('display', 'inline-block');
            }
        }
        if (RSGoPro_OFFERS[element_id].ELEMENT.DAYSARTICLE2 || RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].DAYSARTICLE2) {
            $product.removeClass('qb').addClass('da2');
            if ($product.find('.timers .da2.js-timer_id' + element_id).length > 0) {
                $product.find('.timers .timer').hide();
                $product.find('.timers .da2.js-timer_id' + element_id).css('display', 'inline-block');
            } else if ($product.find('.timers .da2.js-timer_id' + finedOfferID).length > 0) {
                $product.find('.timers .timer').hide();
                $product.find('.timers .da2.js-timer_id' + finedOfferID).css('display', 'inline-block');
            }
        }


        // change product id
        $product.find('.js-add2basketpid').val(finedOfferID);
        if (RSGoPro_OFFERS[element_id].OFFERS[finedOfferID].CAN_BUY) {
            $product.find('.add2basketform').removeClass('cantbuy');
        } else {
            $product.find('.add2basketform').addClass('cantbuy');
        }

        // stores
        if ($product.find('.stores') && finedOfferID > 0 && $product.find('.stores').find('.popupstores')) {
            if (RSGoPro_STOCK[element_id]) {
                if ($product.find('.stores').hasClass('gopro_20')) {
                    // change stores
                    for (storeID in RSGoPro_STOCK[element_id].JS.SKU[finedOfferID]) {
                        var stores = RSGoPro_STOCK[element_id].JS.SKU[finedOfferID];
                        var quantity = stores[storeID];
                        if (RSGoPro_STOCK[element_id].USE_MIN_AMOUNT == true) {
                            if (quantity < 1) {
                                $product.find('.stores').find('.store_' + storeID).find('.amount').css('color', '#ff0000').html(RSGoPro_STOCK[element_id].MESSAGE_EMPTY);
                            } else if (quantity < RSGoPro_STOCK[element_id].MIN_AMOUNT) {
                                $product.find('.stores').find('.store_' + storeID).find('.amount').css('color', '').html(RSGoPro_STOCK[element_id].MESSAGE_LOW);
                            } else {
                                $product.find('.stores').find('.store_' + storeID).find('.amount').css('color', '#00cc00').html(RSGoPro_STOCK[element_id].MESSAGE_ISSET);
                            }
                        } else {
                            $product.find('.stores').find('.store_' + storeID).find('.amount').html(quantity);
                        }
                        if (RSGoPro_STOCK[element_id].SHOW_EMPTY_STORE == false && quantity < 1) {
                            $product.find('.stores').find('.store_' + storeID).hide();
                        } else {
                            $product.find('.stores').find('.store_' + storeID).show();
                        }
                    }
                } else {
                    console.warn('OffersExt_ChangeHTML -> old stores template version');
                    // change stores
                    $product.find('.stores').find('.genamount').removeClass('cantopen');
                    $product.find('.stores').find('.popupstores').find('.offerstore').hide();
                    if ($product.find('.stores').find('.popupstores').find('.offer_' + finedOfferID).length > 0) {
                        $product.find('.stores').find('.popupstores').find('.offer_' + finedOfferID).show();
                    } else {
                        $product.find('.stores').find('.genamount').addClass('cantopen');
                    }
                }

                // change general
                var divDelivery = $product.find('.div_option.selected');
                var delivery = divDelivery.data('col');

                if (RSGoPro_STOCK[element_id].QUANTITY[element_id]) {
                    var quantity = parseInt(RSGoPro_STOCK[element_id].QUANTITY[finedOfferID]);
                    if (RSGoPro_STOCK[element_id].USE_MIN_AMOUNT == true) {

                        if (quantity < 1) {
                            $product.find('.stores').find('.genamount span').css('color', '#ff0000').html(RSGoPro_STOCK[element_id].MESSAGE_EMPTY);
                        } else if (quantity < RSGoPro_STOCK[element_id].MIN_AMOUNT) {
                            $product.find('.stores').find('.genamount span').css('color', '').html(RSGoPro_STOCK[element_id].MESSAGE_LOW);
                        } else {
                            $product.find('.stores').find('.genamount span').css('color', '#00cc00').html(RSGoPro_STOCK[element_id].MESSAGE_ISSET);
                        }
                    } else {
                        if (quantity < 1) {
                            $product.find('.stores').find('.genamount span').css('color', '#ff0000').html(delivery);
                        } else {
                            $product.find('.stores').find('.genamount span').css('color', '#00cc00').html('Есть');
                        }

                    }
                }
            } else {
                console.warn('OffersExt_ChangeHTML -> store not found');
            }
        }

        // set buttons "in basket" and "not in basket"
        RSGoPro_SetInBasket();

        // event
        $(document).trigger('RSGoProOnOfferChange', [$product]);

    }
}

function RSGoPro_OffersExt_PropChanged($optionObj) {
    var element_id = $optionObj.parents('.js-element').data('elementid');
    var CURRENT_PROP_CODE = $optionObj.parents('.offer_prop').data('code');
    var value = $optionObj.data('value');
    if (RSGoPro_OFFERS[element_id] && !$optionObj.hasClass('disabled')) {
        // change styles
        $optionObj.parents('.offer_prop').removeClass('opened').addClass('closed');
        $optionObj.parents('.offer_prop').find('.div_option').removeClass('selected');
        $optionObj.addClass('selected');

        // set current value
        if ($optionObj.parents('.offer_prop').hasClass('color')) { // color
            $optionObj.parents('.offer_prop').find('.div_selected span').css({'backgroundImage': $optionObj.find('span').css('backgroundImage')});
            $optionObj.parents('.offer_prop').find('.div_selected span').attr('title', $optionObj.data('value'));
        } else {
            $optionObj.parents('.offer_prop').find('.div_selected span').html(value);
        }

        var next_index = 0;
        var NEXT_PROP_CODE = '';
        var PROP_CODE = '';

        // get current values
        var arCurrentValues = new Object();
        for (index in RSGoPro_OFFERS[element_id].SORT_PROPS) {
            PROP_CODE = RSGoPro_OFFERS[element_id].SORT_PROPS[index];
            arCurrentValues[PROP_CODE] = $optionObj.parents('.js-element').find('.prop_' + PROP_CODE).find('.div_option.selected').data('value');
            // save next prop_code
            if (PROP_CODE == CURRENT_PROP_CODE) {
                var next_index = parseInt(index) + 1;
                if (RSGoPro_OFFERS[element_id].SORT_PROPS[next_index])
                    NEXT_PROP_CODE = RSGoPro_OFFERS[element_id].SORT_PROPS[next_index];
                else
                    NEXT_PROP_CODE = false;
                break;
            }
        }

        // get enabled values for next property
        if (NEXT_PROP_CODE) {
            var allPropTrue1 = true;
            var arNextEnabledProps = new Array();
            for (offerID in RSGoPro_OFFERS[element_id].OFFERS) {
                allPropTrue1 = true;
                for (pCode1 in arCurrentValues) {
                    if (arCurrentValues[pCode1] != RSGoPro_OFFERS[element_id].OFFERS[offerID].PROPERTIES[pCode1]) {
                        allPropTrue1 = false;
                    }
                }
                if (allPropTrue1) {
                    arNextEnabledProps.push(RSGoPro_OFFERS[element_id].OFFERS[offerID].PROPERTIES[NEXT_PROP_CODE]);
                }
            }

            // disable and enable values for NEXT_PROP_CODE
            $optionObj.parents('.js-element').find('.prop_' + NEXT_PROP_CODE).find('.div_option').each(function (i) {
                var $option = $(this);
                var emptyInEnabled = true;
                for (inden in arNextEnabledProps) {
                    if ($option.data('value') == arNextEnabledProps[inden]) {
                        emptyInEnabled = false;
                        break;
                    }
                }
                $option.addClass('disabled');
                if (!emptyInEnabled)
                    $option.removeClass('disabled');
            });

            // call itself
            var nextOptionObj;
            if (!$optionObj.parents('.js-element').find('.prop_' + NEXT_PROP_CODE).find('.div_option.selected').hasClass('disabled')) {
                nextOptionObj = $optionObj.parents('.js-element').find('.prop_' + NEXT_PROP_CODE).find('.div_option.selected');
            } else {
                nextOptionObj = $optionObj.parents('.js-element').find('.prop_' + NEXT_PROP_CODE).find('.div_option:not(.disabled):first');
            }
            RSGoPro_OffersExt_PropChanged(nextOptionObj);
        } else {
            RSGoPro_OffersExt_ChangeHTML($optionObj.parents('.js-element'));
        }
    }
}

function RSGoPro_SetPrice($product) {
    var element_id = $product.data('elementid'),
        iOfferId = $product.find('.js-add2basketpid').val();

    if (RSGoPro_OFFERS[element_id]) {
        if (
            !!RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX && !!RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX
        ) {
            RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX);
        } else if (!!RSGoPro_OFFERS[element_id].ELEMENT.PRICE_MATRIX) {
            RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].ELEMENT.PRICE_MATRIX);
        }
    }
}

function RSGoPro_SetPriceMatrix($product, matrix) {
    console.log('RSGoPro_SetPriceMatrix');
    var iQuantity = $product.find('.js-quantity').val();

    for (var row in matrix.ROWS) {

        if (
            (matrix.ROWS[row].QUANTITY_FROM == 0 || matrix.ROWS[row].QUANTITY_FROM <= iQuantity) &&
            (matrix.ROWS[row].QUANTITY_TO == 0 || matrix.ROWS[row].QUANTITY_TO >= iQuantity)
        ) {

            for (var col in matrix.COLS) {

                if (!!matrix.MATRIX[col][row]) {

                    if ($product.find('.price_pdv_' + matrix.COLS[col].NAME)) {
                        $product.find('.price_pdv_' + matrix.COLS[col].NAME).removeClass('new').html(matrix.MATRIX[col][row].PRINT_DISCOUNT_VALUE);

                        if (parseInt(matrix.MATRIX[col][row].DISCOUNT_DIFF) > 0) {
                            $product.find('.price_pdv_' + matrix.COLS[col].NAME).addClass('new');
                        }
                    }

                    if ($product.find('.price_pd_' + matrix.COLS[col].NAME)) {
                        if (parseInt(matrix.MATRIX[col][row].DISCOUNT_DIFF) > 0) {
                            $product.find('.price_pd_' + matrix.COLS[col].NAME).html(matrix.MATRIX[col][row].PRINT_DISCOUNT_DIFF);
                        } else {
                            $product.find('.price_pd_' + matrix.COLS[col].NAME).html('');
                        }
                    }

                    if ($product.find('.price_pv_' + matrix.COLS[col].NAME)) {
                        if (parseInt(matrix.MATRIX[col][row].DISCOUNT_DIFF) > 0) {
                            $product.find('.price_pv_' + matrix.COLS[col].NAME).html(matrix.MATRIX[col][row].PRIN_VALUE);
                        } else {
                            $product.find('.price_pv_' + matrix.COLS[col].NAME).html('');
                        }
                    }

                }
            }
            break;
        }
    }
}

// prop select -> click
$(document).on('click', '.div_option', function (e) {
    e.stopPropagation();
    clearTimeout(RSGoPro_OffersExt_timeout_id);

    var $option = $(this),
        $product = $option.closest('.js-element'),
        url_begin = $product.data('detail');

    if (!$option.hasClass('disabled')) {

        var element_id = $product.data('elementid');

        if (element_id > 0) {

            var propCode = $option.parents('.offer_prop').data('code'),
                value = $option.data('value');

            if (RSGoPro_OFFERS[element_id]) {
                RSGoPro_OffersExt_PropChanged($option);
            } else {
                RSGoPro_Area2Darken($product, 'animashka');
                var url = url_begin + '?AJAX_CALL=Y&action=get_element_json&id=' + element_id;

                $.getJSON(url, {}, function (json) {
                    RSGoPro_OFFERS[element_id] = json;
                    RSGoPro_OffersExt_PropChanged($option);
                    RSGoPro_Area2Darken($product);
                }).fail(function (data) {
                    console.warn('Get element JSON -> fail request');
                    RSGoPro_Area2Darken($product);
                });
            }
        } else {
            console.warn('Get element JSON -> element_id is empty');
        }
    }
    return false;
});

$(document).on('change', '.js-element .js-quantity.js-use_count', function () {
    console.log('on change');
    clearTimeout(RSGoPro_OffersExt_timeout_id);
    clearTimeout(RSGoPro_ajaxTimeout);

    var $input = $(this),
        $product = $input.closest('.js-element'),
        url_begin = $product.data('detail'),
        element_id = $product.data('elementid');

    if (element_id > 0) {

        if (RSGoPro_OFFERS[element_id]) {

            var iOfferId = $product.find('.js-add2basketpid').val();

            if (
                !!RSGoPro_OFFERS[element_id].OFFERS && !!RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX
            ) {
                RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX);
            } else if (!!RSGoPro_OFFERS[element_id].ELEMENT.PRICE_MATRIX) {
                RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].ELEMENT.PRICE_MATRIX);
            }

        } else {
            var url = url_begin + '?AJAX_CALL=Y&action=get_element_json&id=' + element_id;

            RSGoPro_ajaxTimeout = setTimeout(function () {
                RSGoPro_Area2Darken($product, 'animashka');

                $.ajax({
                    type: 'POST',
                    url: url,
                    dataType: 'json',
                    success: function (json) {

                        RSGoPro_OFFERS[element_id] = json;

                        var iOfferId = $product.find('.js-add2basketpid').val();

                        if (RSGoPro_OFFERS[element_id]) {

                            if (
                                !!RSGoPro_OFFERS[element_id].OFFERS && !!RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX
                            ) {
                                RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].OFFERS[iOfferId].PRICE_MATRIX);
                            } else if (!!RSGoPro_OFFERS[element_id].ELEMENT.PRICE_MATRIX) {
                                RSGoPro_SetPriceMatrix($product, RSGoPro_OFFERS[element_id].ELEMENT.PRICE_MATRIX);
                            }
                        }
                    },
                    error: function () {
                        console.warn('Get element JSON -> fail request');
                    },
                    complete: function () {
                        RSGoPro_Area2Darken($product);
                    }
                });
            }, RSGoPro_ajaxTimeoutTime);
        }
    } else {
        console.warn('Get element JSON -> element_id is empty');
    }

    return false;
});

$(document).on('click', '.div_selected', function (e) {
    $('.offer_prop.opened:not(.prop_' + $(this).parents('.offer_prop').data('code') + ')').removeClass('opened').addClass('closed');
    if ($(this).parents('.offer_prop').hasClass('closed')) { // was closed
        $(this).parents('.offer_prop').removeClass('closed').addClass('opened');
    } else { // was opened
        $(this).parents('.offer_prop').removeClass('opened').addClass('closed');
    }
    return false;
});

// close prop select by click outside
$(document).on('click', function (e) {
    if ($(e.target).parents('.offer_prop').length > 0 && !$(e.target).parents('.offer_prop').hasClass('color')) {

    } else {
        $('.offer_prop').removeClass('opened').addClass('closed');
    }
});

/* End */
;
;/* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/prostroy_default/assets/js/timer.js?14756748897693";s:6:"source";s:53:"/bitrix/templates/prostroy_default/assets/js/timer.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($) {

    $.fn.timer = function (options) {

        options = $.extend({
            days: ".days", //класс куда будут вставлены дни
            hours: ".hours", //часы
            minute: ".minute", //минуты
            second: ".second", //секунды
            blockTime: ".timer__item", //блок в котором время + надпись (например 10 дн)
            linePercent: ".progress_bar", //Шкала с процентами
            textLinePercent: ".progress_text", //блок в который будут всталяться проценты
            reInit: false,
        }, options);

        var copyOptions = options;
        console.log('init');
        var timers = this;
        if ($(this).length < 1) {
            return false;
        }
        if (options.reInit) {
            $(timers).each(function () {
                $(this).removeClass('runTimer');
                if (typeof initTimerSet == 'undefined') {
                    return false;
                }
                else {

                    clearInterval(initTimerSet);
                }
            });
            return false;
        }
        else {
            $(timers).each(function () {
                if (!$(this).hasClass('runTimer')) {
                    $(this).addClass('runTimer');
                }
            });

            var sec = 1;
            var dateDateNow = Date.parse(new Date()) / 1000;
            var dateNow = BX.message('SERVER_TIME');
            blockStyle = $(options.minute).closest(options.blockTime).css('display');
            var timer = function () {
                dateNow = parseInt(dateNow) + sec;
                $('.runTimer').each(function () {
                    var timerHtml = $(this);
                    var dataTimer = $(this).data('timer');
                    limit = dataTimer.DATE_TO - dataTimer.DATE_FROM;
                    gone = dataTimer.DATE_TO - dateNow;
                    if (gone < 1 && dataTimer.AUTO_RENEWAL == 'Y') {
                        for (lim = 0; lim < 200; lim++) {
                            newdateTo = (lim * limit + dataTimer.DATE_TO) - dateNow;
                            if (newdateTo > 0) {
                                gone = newdateTo;
                                break;
                            }
                        }
                    }
                    if (gone > 0) {

                        var days = parseInt((gone / (60 * 60 )) / 24);
                        if (days < 10) {
                            days = '0' + days;
                        }
                        days = days.toString();
                        var hourse = parseInt(gone / (60 * 60 ));
                        var hours = parseInt((gone / (60 * 60 )) % 24);
                        if (hours < 10) {
                            hours = '0' + hours;
                        }
                        hours = hours.toString();
                        var minutes = parseInt(gone / (60)) % 60;
                        if (minutes < 10) {
                            minutes = '0' + minutes;
                        }
                        minutes = minutes.toString();
                        var seconds = parseInt(gone) % 60;
                        if (seconds < 10) {
                            seconds = '0' + seconds;
                        }
                        seconds = seconds.toString();


                        //Расчет процентов
                        var widthTimerPerc = false;

                        if (!!dataTimer.DINAMICA_DATA) {
                            if (dataTimer.DINAMICA_DATA == 'evenly') {
                                widthTimerPerc = Math.floor(100 - ((gone / limit) * 100));

                                timerHtml.find(options.linePercent).css('width', widthTimerPerc + '%');
                                timerHtml.find(options.textLinePercent).text(widthTimerPerc);
                            }
                            else {
                                var prevPerc = false;
                                var firstPerc = false;

                                for (var timePerc in dataTimer.DINAMICA_DATA) {
                                    if (!prevPerc) {
                                        prevPerc = timePerc;
                                        firstPerc = timePerc;
                                    }
                                    if (prevPerc < hourse && hourse < timePerc) {
                                        widthTimerPerc = dataTimer.DINAMICA_DATA[timePerc];
                                        break;
                                    }
                                    prevPerc = timePerc;
                                }
                                if (!widthTimerPerc) {
                                    if (hourse > prevPerc) {
                                        widthTimerPerc = dataTimer.DINAMICA_DATA[prevPerc];
                                    }
                                    else if (hourse < prevPerc) {
                                        widthTimerPerc = dataTimer.DINAMICA_DATA[firstPerc];
                                    }
                                }
                                if (widthTimerPerc) {

                                    timerHtml.find(options.linePercent).css('width', widthTimerPerc + '%');
                                    timerHtml.find(options.textLinePercent).text(widthTimerPerc);

                                }
                            }
                        }
                        else {
                            widthTimerPerc = Math.floor((gone / limit) * 100);

                            timerHtml.find(options.linePercent).css('width', widthTimerPerc + '%');
                            timerHtml.find(options.textLinePercent).text(widthTimerPerc);
                        }
                        // Прячем дни или секунды в зависимости от оставшегося времени
                        if (days < 1) {
                            timerHtml.find(options.days).closest(options.blockTime).css('display', 'none');
                            timerHtml.find(options.second).closest(options.blockTime).css('display', blockStyle);
                        }
                        else if (days > 0) {
                            timerHtml.find(options.days).closest(options.blockTime).css('display', blockStyle);
                            timerHtml.find(options.second).closest(options.blockTime).css('display', 'none');
                        }
                        //Вставляем время в блоки
                        timerHtml.find(options.second).text(seconds);
                        //if(seconds == 59){
                        timerHtml.find(options.minute).text(minutes);
                        //if(minutes == 59){
                        timerHtml.find(options.hours).text(hours);
                        //if(hours == 23){
                        timerHtml.find(options.days).text(days);
                        /*}
                         }
                         }*/

                    }
                    else {
                        timerCanDelete(timerHtml);
                    }
                });
            };


        }

        return initTimerSet = setInterval(function () {
            timer();
        }, 1000);
    }

})(jQuery);
/* End */
;
;/* Start:"a:4:{s:4:"full";s:90:"/bitrix/templates/prostroy_default/components/bitrix/menu/catalog/script.js?14756748892782";s:6:"source";s:75:"/bitrix/templates/prostroy_default/components/bitrix/menu/catalog/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSGoPro_MenuTO = 0;
var RSGoPro_MenuElemHover = false;

function RSGoPro_ElementInMenuPos($liObj) {
    var l = 250;
    var $searchObj;
    if (!$liObj.hasClass('first')) {
        $searchObj = $liObj.parents('li.first');
    } else {
        $searchObj = $liObj;
    }
    if ($searchObj.find('.elementinmenu').length > 0) {
        var c = $('.catalogmenu').find('li.hover').length - 2;
        if ($('.catalogmenu').find('li.hover:last').parent().find('ul').length < 1) {
            c = c - 1;
        }
        if ($('.centering:first').width() < 1260) {
            c = c + 5;
        }
        if (c > 2) {
            $('.catalogmenu').find('li.first.hover').parent().find('.elementinmenu').css({'display': 'none'});
        } else {
            $('.catalogmenu').find('li.first.hover').parent().find('.elementinmenu').css({
                'display': 'block',
                'left': (c * l - 2) + 'px'
            });
        }
    }
}

$(document).ready(function () {

    $('.catalogmenu').on('mouseenter', function () {
        $(this).addClass('hover');
    }).on('mouseleave', function () {
        $(this).removeClass('hover');
    });

    var timeoutHover = {};
    $('.catalogmenu a').on('click', function (e) {
        var $link = $(this);
        if (!$link.hasClass('hover')) {
            e.preventDefault();
            $link.addClass('hover');
        }
    }).on('mouseenter', function () {
        var $link = $(this);
        $link.parent().parent().find('a.hover').removeClass('hover');
        timeoutHover[$link.index()] = setTimeout(function () {
            $link.addClass('hover');
        }, 150);
    }).on('mouseleave', function () {
        var $link = $(this);
        clearTimeout(timeoutHover[$link.index()]);
        timeoutHover[$link.index()] = setTimeout(function () {
            $link.removeClass('hover');
        }, 2);
    });

    $('.catalogmenu li').on('mouseenter', function () {
        var $liObj = $(this);
        $liObj.parent().find('li.hover').removeClass('hover');
        setTimeout(function () {
            $liObj.addClass('hover');
            RSGoPro_ElementInMenuPos($liObj);
        }, 2);
    }).on('mouseleave', function () {
        var $liObj = $(this);
        setTimeout(function () {
            if (!RSGoPro_MenuElemHover) {
                $liObj.removeClass('hover')
            }
            RSGoPro_ElementInMenuPos($liObj);
        }, 2);
    });

    $('.catalogmenu .elementinmenu').on('mouseenter', function () {
        RSGoPro_MenuElemHover = true;
    }).on('mouseleave', function () {
        RSGoPro_MenuElemHover = false;
    });

    if (RSDevFunc_PHONETABLET) {
        $('.catalogmenusmall a.parent').on('click', function () {
            if ($(this).parent().find('ul').hasClass('noned')) {
                $(this).parent().find('ul').removeClass('noned');
                return false;
            }
        });
        $(document).on('click', function () {
            var $obj = $(this);
            if (!$('.catalogmenusmall ul.first').hasClass('noned')) {
                $('.catalogmenusmall ul.first').addClass('noned');
            }
        });
    } else {
        $('.catalogmenusmall li.parent').on('mouseenter', function () {
            $(this).find('ul').removeClass('noned');
        }).on('mouseleave', function () {
            $(this).find('ul').addClass('noned');
        });
    }
});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:78:"/bitrix/templates/prostroy_default/js/jquery.maskedinput.min.js?14756748894274";s:6:"source";s:63:"/bitrix/templates/prostroy_default/js/jquery.maskedinput.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 jQuery Masked Input Plugin
 Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.4.0
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function (a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a))return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)if (j[c]) {
                            if (!(n > d && j[c].test(C[d])))break;
                            C[c] = C[d], C[d] = p(d), d = q(d)
                        }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)if (j[b]) {
                        if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e)))break;
                        c = e
                    }
                }

                function u() {
                    var a = B.val(), b = B.caret();
                    if (a.length < o.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--;
                        if (0 === b.begin)for (; b.begin < l && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function () {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0, d = 0; n > b; b++)if (j[b]) {
                        for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) {
                            C[b] = c, f = b;
                            break
                        }
                        if (d > e.length) {
                            y(b + 1, n);
                            break
                        }
                    } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }

                var B = a(this), C = a.map(c.split(""), function (a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0
                }), D = C.join(""), E = B.val();
                B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function () {
                            z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a)
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/prostroy_default/js/timer.js?14756748897693";s:6:"source";s:46:"/bitrix/templates/prostroy_default/js/timer.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function ($) {

    $.fn.timer = function (options) {

        options = $.extend({
            days: ".days", //класс куда будут вставлены дни
            hours: ".hours", //часы
            minute: ".minute", //минуты
            second: ".second", //секунды
            blockTime: ".timer__item", //блок в котором время + надпись (например 10 дн)
            linePercent: ".progress_bar", //Шкала с процентами
            textLinePercent: ".progress_text", //блок в который будут всталяться проценты
            reInit: false,
        }, options);

        var copyOptions = options;
        console.log('init');
        var timers = this;
        if ($(this).length < 1) {
            return false;
        }
        if (options.reInit) {
            $(timers).each(function () {
                $(this).removeClass('runTimer');
                if (typeof initTimerSet == 'undefined') {
                    return false;
                }
                else {

                    clearInterval(initTimerSet);
                }
            });
            return false;
        }
        else {
            $(timers).each(function () {
                if (!$(this).hasClass('runTimer')) {
                    $(this).addClass('runTimer');
                }
            });

            var sec = 1;
            var dateDateNow = Date.parse(new Date()) / 1000;
            var dateNow = BX.message('SERVER_TIME');
            blockStyle = $(options.minute).closest(options.blockTime).css('display');
            var timer = function () {
                dateNow = parseInt(dateNow) + sec;
                $('.runTimer').each(function () {
                    var timerHtml = $(this);
                    var dataTimer = $(this).data('timer');
                    limit = dataTimer.DATE_TO - dataTimer.DATE_FROM;
                    gone = dataTimer.DATE_TO - dateNow;
                    if (gone < 1 && dataTimer.AUTO_RENEWAL == 'Y') {
                        for (lim = 0; lim < 200; lim++) {
                            newdateTo = (lim * limit + dataTimer.DATE_TO) - dateNow;
                            if (newdateTo > 0) {
                                gone = newdateTo;
                                break;
                            }
                        }
                    }
                    if (gone > 0) {

                        var days = parseInt((gone / (60 * 60 )) / 24);
                        if (days < 10) {
                            days = '0' + days;
                        }
                        days = days.toString();
                        var hourse = parseInt(gone / (60 * 60 ));
                        var hours = parseInt((gone / (60 * 60 )) % 24);
                        if (hours < 10) {
                            hours = '0' + hours;
                        }
                        hours = hours.toString();
                        var minutes = parseInt(gone / (60)) % 60;
                        if (minutes < 10) {
                            minutes = '0' + minutes;
                        }
                        minutes = minutes.toString();
                        var seconds = parseInt(gone) % 60;
                        if (seconds < 10) {
                            seconds = '0' + seconds;
                        }
                        seconds = seconds.toString();


                        //Расчет процентов
                        var widthTimerPerc = false;

                        if (!!dataTimer.DINAMICA_DATA) {
                            if (dataTimer.DINAMICA_DATA == 'evenly') {
                                widthTimerPerc = Math.floor(100 - ((gone / limit) * 100));

                                timerHtml.find(options.linePercent).css('width', widthTimerPerc + '%');
                                timerHtml.find(options.textLinePercent).text(widthTimerPerc);
                            }
                            else {
                                var prevPerc = false;
                                var firstPerc = false;

                                for (var timePerc in dataTimer.DINAMICA_DATA) {
                                    if (!prevPerc) {
                                        prevPerc = timePerc;
                                        firstPerc = timePerc;
                                    }
                                    if (prevPerc < hourse && hourse < timePerc) {
                                        widthTimerPerc = dataTimer.DINAMICA_DATA[timePerc];
                                        break;
                                    }
                                    prevPerc = timePerc;
                                }
                                if (!widthTimerPerc) {
                                    if (hourse > prevPerc) {
                                        widthTimerPerc = dataTimer.DINAMICA_DATA[prevPerc];
                                    }
                                    else if (hourse < prevPerc) {
                                        widthTimerPerc = dataTimer.DINAMICA_DATA[firstPerc];
                                    }
                                }
                                if (widthTimerPerc) {

                                    timerHtml.find(options.linePercent).css('width', widthTimerPerc + '%');
                                    timerHtml.find(options.textLinePercent).text(widthTimerPerc);

                                }
                            }
                        }
                        else {
                            widthTimerPerc = Math.floor((gone / limit) * 100);

                            timerHtml.find(options.linePercent).css('width', widthTimerPerc + '%');
                            timerHtml.find(options.textLinePercent).text(widthTimerPerc);
                        }
                        // Прячем дни или секунды в зависимости от оставшегося времени
                        if (days < 1) {
                            timerHtml.find(options.days).closest(options.blockTime).css('display', 'none');
                            timerHtml.find(options.second).closest(options.blockTime).css('display', blockStyle);
                        }
                        else if (days > 0) {
                            timerHtml.find(options.days).closest(options.blockTime).css('display', blockStyle);
                            timerHtml.find(options.second).closest(options.blockTime).css('display', 'none');
                        }
                        //Вставляем время в блоки
                        timerHtml.find(options.second).text(seconds);
                        //if(seconds == 59){
                        timerHtml.find(options.minute).text(minutes);
                        //if(minutes == 59){
                        timerHtml.find(options.hours).text(hours);
                        //if(hours == 23){
                        timerHtml.find(options.days).text(days);
                        /*}
                         }
                         }*/

                    }
                    else {
                        timerCanDelete(timerHtml);
                    }
                });
            };


        }

        return initTimerSet = setInterval(function () {
            timer();
        }, 1000);
    }

})(jQuery);
/* End */
;
;/* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?14756741756196";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t) {
    var e = this;
    this.arParams = {
        AJAX_PAGE: t.AJAX_PAGE,
        CONTAINER_ID: t.CONTAINER_ID,
        INPUT_ID: t.INPUT_ID,
        MIN_QUERY_LEN: parseInt(t.MIN_QUERY_LEN)
    };
    if (t.WAIT_IMAGE)this.arParams.WAIT_IMAGE = t.WAIT_IMAGE;
    if (t.MIN_QUERY_LEN <= 0)t.MIN_QUERY_LEN = 1;
    this.cache = [];
    this.cache_key = null;
    this.startText = "";
    this.running = false;
    this.currentRow = -1;
    this.RESULT = null;
    this.CONTAINER = null;
    this.INPUT = null;
    this.WAIT = null;
    this.ShowResult = function (t) {
        if (BX.type.isString(t)) {
            e.RESULT.innerHTML = t
        }
        e.RESULT.style.display = e.RESULT.innerHTML !== "" ? "block" : "none";
        var s = e.adjustResultNode();
        var i;
        var r;
        var n = BX.findChild(e.RESULT, {tag: "table", "class": "title-search-result"}, true);
        if (n) {
            r = BX.findChild(n, {tag: "th"}, true)
        }
        if (r) {
            var a = BX.pos(n);
            a.width = a.right - a.left;
            var l = BX.pos(r);
            l.width = l.right - l.left;
            r.style.width = l.width + "px";
            e.RESULT.style.width = s.width + l.width + "px";
            e.RESULT.style.left = s.left - l.width - 1 + "px";
            if (a.width - l.width > s.width)e.RESULT.style.width = s.width + l.width - 1 + "px";
            a = BX.pos(n);
            i = BX.pos(e.RESULT);
            if (i.right > a.right) {
                e.RESULT.style.width = a.right - a.left + "px"
            }
        }
        var o;
        if (n)o = BX.findChild(e.RESULT, {"class": "title-search-fader"}, true);
        if (o && r) {
            i = BX.pos(e.RESULT);
            o.style.left = i.right - i.left - 18 + "px";
            o.style.width = 18 + "px";
            o.style.top = 0 + "px";
            o.style.height = i.bottom - i.top + "px";
            o.style.display = "block"
        }
    };
    this.onKeyPress = function (t) {
        var s = BX.findChild(e.RESULT, {tag: "table", "class": "title-search-result"}, true);
        if (!s)return false;
        var i;
        var r = s.rows.length;
        switch (t) {
            case 27:
                e.RESULT.style.display = "none";
                e.currentRow = -1;
                e.UnSelectAll();
                return true;
            case 40:
                if (e.RESULT.style.display == "none")e.RESULT.style.display = "block";
                var n = -1;
                for (i = 0; i < r; i++) {
                    if (!BX.findChild(s.rows[i], {"class": "title-search-separator"}, true)) {
                        if (n == -1)n = i;
                        if (e.currentRow < i) {
                            e.currentRow = i;
                            break
                        } else if (s.rows[i].className == "title-search-selected") {
                            s.rows[i].className = ""
                        }
                    }
                }
                if (i == r && e.currentRow != i)e.currentRow = n;
                s.rows[e.currentRow].className = "title-search-selected";
                return true;
            case 38:
                if (e.RESULT.style.display == "none")e.RESULT.style.display = "block";
                var a = -1;
                for (i = r - 1; i >= 0; i--) {
                    if (!BX.findChild(s.rows[i], {"class": "title-search-separator"}, true)) {
                        if (a == -1)a = i;
                        if (e.currentRow > i) {
                            e.currentRow = i;
                            break
                        } else if (s.rows[i].className == "title-search-selected") {
                            s.rows[i].className = ""
                        }
                    }
                }
                if (i < 0 && e.currentRow != i)e.currentRow = a;
                s.rows[e.currentRow].className = "title-search-selected";
                return true;
            case 13:
                if (e.RESULT.style.display == "block") {
                    for (i = 0; i < r; i++) {
                        if (e.currentRow == i) {
                            if (!BX.findChild(s.rows[i], {"class": "title-search-separator"}, true)) {
                                var l = BX.findChild(s.rows[i], {tag: "a"}, true);
                                if (l) {
                                    window.location = l.href;
                                    return true
                                }
                            }
                        }
                    }
                }
                return false
        }
        return false
    };
    this.onTimeout = function () {
        e.onChange(function () {
            setTimeout(e.onTimeout, 500)
        })
    };
    this.onChange = function (t) {
        if (e.running)return;
        e.running = true;
        if (e.INPUT.value != e.oldValue && e.INPUT.value != e.startText) {
            e.oldValue = e.INPUT.value;
            if (e.INPUT.value.length >= e.arParams.MIN_QUERY_LEN) {
                e.cache_key = e.arParams.INPUT_ID + "|" + e.INPUT.value;
                if (e.cache[e.cache_key] == null) {
                    if (e.WAIT) {
                        var s = BX.pos(e.INPUT);
                        var i = s.bottom - s.top - 2;
                        e.WAIT.style.top = s.top + 1 + "px";
                        e.WAIT.style.height = i + "px";
                        e.WAIT.style.width = i + "px";
                        e.WAIT.style.left = s.right - i + 2 + "px";
                        e.WAIT.style.display = "block"
                    }
                    BX.ajax.post(e.arParams.AJAX_PAGE, {
                        ajax_call: "y",
                        INPUT_ID: e.arParams.INPUT_ID,
                        q: e.INPUT.value,
                        l: e.arParams.MIN_QUERY_LEN
                    }, function (s) {
                        e.cache[e.cache_key] = s;
                        e.ShowResult(s);
                        e.currentRow = -1;
                        e.EnableMouseEvents();
                        if (e.WAIT)e.WAIT.style.display = "none";
                        if (!!t)t();
                        e.running = false
                    });
                    return
                } else {
                    e.ShowResult(e.cache[e.cache_key]);
                    e.currentRow = -1;
                    e.EnableMouseEvents()
                }
            } else {
                e.RESULT.style.display = "none";
                e.currentRow = -1;
                e.UnSelectAll()
            }
        }
        if (!!t)t();
        e.running = false
    };
    this.UnSelectAll = function () {
        var t = BX.findChild(e.RESULT, {tag: "table", "class": "title-search-result"}, true);
        if (t) {
            var s = t.rows.length;
            for (var i = 0; i < s; i++)t.rows[i].className = ""
        }
    };
    this.EnableMouseEvents = function () {
        var t = BX.findChild(e.RESULT, {tag: "table", "class": "title-search-result"}, true);
        if (t) {
            var s = t.rows.length;
            for (var i = 0; i < s; i++)if (!BX.findChild(t.rows[i], {"class": "title-search-separator"}, true)) {
                t.rows[i].id = "row_" + i;
                t.rows[i].onmouseover = function (t) {
                    if (e.currentRow != this.id.substr(4)) {
                        e.UnSelectAll();
                        this.className = "title-search-selected";
                        e.currentRow = this.id.substr(4)
                    }
                };
                t.rows[i].onmouseout = function (t) {
                    this.className = "";
                    e.currentRow = -1
                }
            }
        }
    };
    this.onFocusLost = function (t) {
        setTimeout(function () {
            e.RESULT.style.display = "none"
        }, 250)
    };
    this.onFocusGain = function () {
        if (e.RESULT.innerHTML.length)e.ShowResult()
    };
    this.onKeyDown = function (t) {
        if (!t)t = window.event;
        if (e.RESULT.style.display == "block") {
            if (e.onKeyPress(t.keyCode))return BX.PreventDefault(t)
        }
    };
    this.adjustResultNode = function () {
        var t;
        var s = BX.findParent(e.CONTAINER, BX.is_fixed);
        if (!!s) {
            e.RESULT.style.position = "fixed";
            e.RESULT.style.zIndex = BX.style(s, "z-index") + 2;
            t = BX.pos(e.CONTAINER, true)
        } else {
            e.RESULT.style.position = "absolute";
            t = BX.pos(e.CONTAINER)
        }
        t.width = t.right - t.left;
        e.RESULT.style.top = t.bottom + 2 + "px";
        e.RESULT.style.left = t.left + "px";
        e.RESULT.style.width = t.width + "px";
        return t
    };
    this._onContainerLayoutChange = function () {
        if (e.RESULT.style.display !== "none" && e.RESULT.innerHTML !== "") {
            e.adjustResultNode()
        }
    };
    this.Init = function () {
        this.CONTAINER = document.getElementById(this.arParams.CONTAINER_ID);
        BX.addCustomEvent(this.CONTAINER, "OnNodeLayoutChange", this._onContainerLayoutChange);
        this.RESULT = document.body.appendChild(document.createElement("DIV"));
        this.RESULT.className = "title-search-result";
        this.INPUT = document.getElementById(this.arParams.INPUT_ID);
        this.startText = this.oldValue = this.INPUT.value;
        BX.bind(this.INPUT, "focus", function () {
            e.onFocusGain()
        });
        BX.bind(this.INPUT, "blur", function () {
            e.onFocusLost()
        });
        if (BX.browser.IsSafari() || BX.browser.IsIE())this.INPUT.onkeydown = this.onKeyDown; else this.INPUT.onkeypress = this.onKeyDown;
        if (this.arParams.WAIT_IMAGE) {
            this.WAIT = document.body.appendChild(document.createElement("DIV"));
            this.WAIT.style.backgroundImage = "url('" + this.arParams.WAIT_IMAGE + "')";
            if (!BX.browser.IsIE())this.WAIT.style.backgroundRepeat = "none";
            this.WAIT.style.display = "none";
            this.WAIT.style.position = "absolute";
            this.WAIT.style.zIndex = "1100"
        }
        BX.bind(this.INPUT, "bxchange", function () {
            e.onChange()
        })
    };
    BX.ready(function () {
        e.Init(t)
    })
}
/* End */
;
;/* Start:"a:4:{s:4:"full";s:98:"/bitrix/templates/prostroy_default/components/bitrix/search.title/inheader/script.js?1475674889722";s:6:"source";s:84:"/bitrix/templates/prostroy_default/components/bitrix/search.title/inheader/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function RSGoPro_SearchTitle() {
    if ($('.title-search-result').length > 0 && $('.title-search-result').is(':visible')) {
        var trueH = 32, needAdd = false;
        $('.title-search-result').find('.item.catitem').each(function (i) {
            if ($(this).outerHeight() > trueH) {
                needAdd = true;
                return false;
            }
        });
        if ($('.title-search-result').find('.stitle').hasClass('twolines') && !needAdd) {
            $('.title-search-result').find('.stitle').removeClass('twolines');
        } else if (!$('.title-search-result').find('.stitle').hasClass('twolines') && needAdd) {
            $('.title-search-result').find('.stitle').addClass('twolines');
        }
    }
}

$(document).ready(function () {

    setInterval(RSGoPro_SearchTitle, 500);

});
/* End */
;
;/* Start:"a:4:{s:4:"full";s:94:"/bitrix/templates/prostroy_default/components/redsign/easycart/gopro/script.js?147567488914807";s:6:"source";s:78:"/bitrix/templates/prostroy_default/components/redsign/easycart/gopro/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var RSEC_MODULE_IS_HERE = true,
    RSEC_BX_COOKIE_PREFIX = 'BITRIX_SM_',
    RSEC_flag_tension_line = false,
    RSEC_ec_start_coordY = 0,
    RSEC_ec_start_height,
    RSEC_ec_start_height2;

function RSEC_BlockTab() {
    if ($('#rs_easycart').find('.rsec_tabs').find('.rsec_block').length < 1) {
        $('#rs_easycart').find('.rsec_tabs').css({"position": "relative"}).append('<div class="rsec_block"><i class="rsec_ikonka"></i></div>');
    }
}
function RSEC_UnBlockTab() {
    $('#rs_easycart').find('.rsec_tabs').css({"position": "static"}).find('.rsec_block').remove();
}

function RSEC_SetHeight() {
    var defaultHeight = 200,
        savedHeight = parseInt($.cookie(RSEC_BX_COOKIE_PREFIX + 'RSEC_HEIGHT'));
    maxHeight = $('#rs_easycart').find('.rsec.rsec_headers').offset().top - window.pageYOffset - 50;
    if (savedHeight > 50) {
        if (savedHeight < maxHeight) {
            $('#rs_easycart').find('.rsec_content .rsec_tabs').css({'height': savedHeight + 'px'});
        }
    } else {
        $('#rs_easycart').find('.rsec_content .rsec_tabs').css({'height': defaultHeight + 'px'});
    }
}

function RSEC_HideEasyCart() {
    $('#rs_easycart').find('.rsec_content').removeClass('open');
    $('#rs_easycart').find('.rsec_tab').removeClass('selected');
    $('#rs_easycart').find('.rsec_changer').removeClass('selected');
}

function RSEC_SwitchTab($link) {
    var wasOpened = $('#rs_easycart').find('.rsec_content').hasClass('open');
    var tabWasOpened = $($link.attr('href')).hasClass('selected');
    RSEC_SetHeight();
    if (wasOpened && tabWasOpened) {
        RSEC_HideEasyCart();
    } else if (wasOpened && !tabWasOpened) {
        $('#rs_easycart').find('.rsec_tab').removeClass('selected');
        $($link.attr('href')).addClass('selected');
        $('#rs_easycart').find('.rsec_changer').removeClass('selected');
        $link.addClass('selected');
        $('#rs_easycart').find('.rsec_content').addClass('open');
    } else {
        $('#rs_easycart').find('.rsec_tab').removeClass('selected');
        $($link.attr('href')).addClass('selected');
        $('#rs_easycart').find('.rsec_changer').removeClass('selected');
        $link.addClass('selected');
        $('#rs_easycart').find('.rsec_content').addClass('open');
    }
}

// VIEWED
function RSEC_VIEWED_Refresh() {

}

// COMPARE
function RSEC_COMPARE_Refresh() {
    $(document).trigger('RSEC_BeforeCompareRefresh')
    var url = $('#rs_easycart').data('serviceurl');
    var data = '';
    if (url.indexOf('?', 0) > 0) {
        url = url + '&rsec_ajax_post=Y&rsec_mode=compare';
    } else {
        url = url + '?rsec_ajax_post=Y&rsec_mode=compare';
    }
    $('#rs_easycart').find('#rsec_compare').find('form').find('input[name^="DELETE_"]').each(function () {
        if ($(this).is(':checked')) {
            data = data + $(this).attr('name') + '=' + $(this).val() + '&';
        }
    });
    RSEC_BlockTab();
    $.ajax({
        type: 'POST',
        url: url,
        data: data
    }).done(function (response) {
        $('#rs_easycart').find('#rsec_compare').html(response);
        setTimeout(function () {
            $(document).trigger('RSEC_AfterCompareRefreshDone');
        }, 50);
    }).fail(function () {
        console.warn('RSEasyCart -> Compare -> error');
        $(document).trigger('RSEC_AfterCompareRefreshError');
    }).always(function () {
        if ($('#rs_easycart').find('#rsec_compare').find('.rsec_jsline').length > 0) {
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').removeClass('rsec_changer_hide');
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').find('.rsec_cnt').html($('#rs_easycart').find('#rsec_compare').find('.rsec_jsline').length);
        } else {
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').removeClass('rsec_changer_hide');
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').find('.rsec_cnt').html(0);
            //$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_compare').addClass('rsec_changer_hide');
            //RSEC_HideEasyCart();
        }
        RSEC_UnBlockTab();
        $(document).trigger('RSEC_AfterCompareRefresh');
    });
}

// FAVORITE
function RSEC_FAVORITE_Refresh() {
    $(document).trigger('RSEC_BeforeFavoriteRefresh');
    var url = $('#rs_easycart').data('serviceurl');
    var data = '';
    if (url.indexOf('?', 0) > 0) {
        url = url + '&rsec_ajax_post=Y&rsec_mode=favorite';
    } else {
        url = url + '?rsec_ajax_post=Y&rsec_mode=favorite';
    }
    $('#rs_easycart').find('#rsec_favorite').find('form').find('input[name^="DELETE_"]').each(function () {
        if ($(this).is(':checked')) {
            data = data + $(this).attr('name') + '=' + $(this).val() + '&';
        }
    });
    if ($('#rs_easycart').find('#rsec_favorite').find('#rsec_indent').length > 0) {
        data = data + $('#rs_easycart').find('#rsec_favorite').find('#rsec_indent').attr('name') + '=' + $('#rs_easycart').find('#rsec_favorite').find('#rsec_indent').val() + '&';
    }
    RSEC_BlockTab();
    $.ajax({
        type: 'POST',
        url: url,
        data: data
    }).done(function (response) {
        $('#rs_easycart').find('#rsec_favorite').html(response);
        setTimeout(function () {
            $(document).trigger('RSEC_AfterFavoriteRefreshDone');
        }, 50);
    }).fail(function () {
        console.warn('RSEasyCart -> Favorite -> error');
        $(document).trigger('RSEC_AfterFavoriteRefreshError');
    }).always(function () {
        if ($('#rs_easycart').find('#rsec_favorite').find('.rsec_jsline').length > 0) {
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').removeClass('rsec_changer_hide');
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').find('.rsec_cnt').html($('#rs_easycart').find('#rsec_favorite').find('.rsec_jsline').length);
        } else {
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').removeClass('rsec_changer_hide');
            $('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').find('.rsec_cnt').html(0);
            //$('#rs_easycart').find('.rsec_headers').find('.rsec_changer.rsec_favorite').addClass('rsec_changer_hide');
            //RSEC_HideEasyCart();
        }
        RSEC_UnBlockTab();
        $(document).trigger('RSEC_AfterFavoriteRefresh');
    });
}

// BASKET
function RSEC_BASKET_Refresh() {
    $(document).trigger('RSEC_BeforeBasketRefresh');
    if ($('#rs_easycart').find('#rsec_basket').find('form').length > 0) {
        var url = $('#rs_easycart').find('#rsec_basket').find('form').attr('action');
        var data = $('#rs_easycart').find('#rsec_basket').find('form').serialize();
    } else {
        var url = $('#rs_easycart').data('serviceurl');
        var data = '';
    }

    if (url.indexOf('?', 0) > 0) {
        url = url + '&rsec_ajax_post=Y&rsec_mode=basket';
    } else {
        url = url + '?rsec_ajax_post=Y&rsec_mode=basket';
    }
    RSEC_BlockTab();

    $.ajax({
        type: 'POST',
        url: url,
        data: data,
    }).done(function (response) {
        $('#rs_easycart').find('#rsec_basket').html(response);
        setTimeout(function () {
            if ($('#rs_easycart').find('#rsec_basket').find('.rsec_take_normalCount').length > 0) {
                $('#rs_easycart').find('.rsec_normalCount').html($('#rs_easycart').find('#rsec_basket').find('.rsec_take_normalCount').html());
                $('#rs_easycart').find('.rsec_allSum_FORMATED').html($('#rs_easycart').find('#rsec_basket').find('.rsec_take_allSum_FORMATED').html());
            } else {
                $('#rs_easycart').find('.rsec_normalCount').html('0');
                $('#rs_easycart').find('.rsec_allSum_FORMATED').html('0');
            }
            $(document).trigger('RSEC_AfterBasketRefreshDone');
        }, 50);
    }).fail(function () {
        console.warn('RSEasyCart -> Basket -> error');
        $(document).trigger('RSEC_AfterBasketRefreshError');
    }).always(function () {
        RSEC_UnBlockTab();
        $(document).trigger('RSEC_AfterBasketRefresh');
    });
}

$(document).ready(function () {

    // easycart is here
    RSEC_MODULE_IS_HERE = true;

    // add padding for body
    if ($('#rs_easycart').hasClass('addbodypadding')) {
        $('body').css('padding-bottom', '40px');
    }

    // tab switcher
    $(document).on('click', '#rs_easycart .rsec_headers .rsec_changer', function () {
        RSEC_SwitchTab($(this));
        return false;
    });

    // close by outside click
    $(document).on('click', function (e) {
        if ($(e.target).parents('#rs_easycart').length > 0) {

        } else {
            RSEC_HideEasyCart();
        }
    });

    // close by close button
    $(document).on('click', '#rs_easycart a.rsec_close', function (e) {
        RSEC_HideEasyCart();
        return false;
    });

    // easycart resize
    $(document).on('mousedown', '.rsec_tyanya', function (e) {
        RSEC_flag_tension_line = true;
        $('html').addClass('rsec_disableSelection');
        RSEC_ec_start_coordY = e.pageY;
        RSEC_ec_start_height = $('#rs_easycart').find('.rsec_tabs').height();
    });
    $(document).on('mouseup', function () {
        if (RSEC_flag_tension_line) {
            RSEC_flag_tension_line = false;
            $('html').removeClass('rsec_disableSelection');
        }
    });
    $(document).mousemove(function (e) {
        RSEC_ec_cur_height = $('#rs_easycart').find('.rsec_tabs').height();
        if (RSEC_flag_tension_line && (RSEC_ec_start_height + RSEC_ec_start_coordY - e.pageY) > 100) {
            $.cookie(RSEC_BX_COOKIE_PREFIX + 'RSEC_HEIGHT', (RSEC_ec_start_height + RSEC_ec_start_coordY - e.pageY), '/');
            RSEC_SetHeight();
        }
    });

    // quantity
    $(document).on('click', '#rs_easycart .rsec_minus', function () {
        var $btn = $(this);
        var ratio = parseFloat($btn.parent().find('.rsec_quantity').data('ratio'));
        var ration2 = ratio.toString().split('.', 2)[1];
        var length = 0;
        if (ration2 !== undefined) {
            length = ration2.length;
        }
        var val = parseFloat($btn.parent().find('.rsec_quantity').val());
        if (val > ratio) {
            $btn.parent().find('.rsec_quantity').val((val - ratio).toFixed(length));
        }
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_plus', function () {
        var $btn = $(this);
        var ratio = parseFloat($btn.parent().find('.rsec_quantity').data('ratio'));
        var ration2 = ratio.toString().split('.', 2)[1];
        var length = 0;
        if (ration2 !== undefined) {
            length = ration2.length;
        }
        var val = parseFloat($btn.parent().find('.rsec_quantity').val());
        $btn.parent().find('.rsec_quantity').val((val + ratio).toFixed(length));
        return false;
    });
    $(document).on('blur', '#rs_easycart .rsec_quantity', function () {
        var $input = $(this);
        var ratio = parseFloat($input.data('ratio'));
        var ration2 = ratio.toString().split('.', 2)[1];
        var length = 0;
        if (ration2 !== undefined) {
            length = ration2.length;
        }
        var val = parseFloat($input.val());
        if (val > 0) {
            $input.val((ratio * (Math.floor(val / ratio))).toFixed(length));
        } else {
            $input.val(ratio);
        }
    });
    $(document).on('mouseenter', '#rs_easycart .rsec_quantity', function () {
        $('html').addClass('rsec_disableSelection');
    }).on('mouseleave', '#rs_easycart .rsec_quantity', function () {
        $('html').removeClass('rsec_disableSelection');
    });

    // VIEWED
    //

    // COMPARE
    $(document).on('click', '#rs_easycart .rsec_thistab_compare .rsec_delall', function () {
        $(this).parents('form').find('input[name^="DELETE_"]').attr('checked', true);
        RSEC_COMPARE_Refresh();
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_compare .rsec_delete', function () {
        $(this).parents('.rsec_jsline').find('input[name^="DELETE_"]').attr('checked', true);
        RSEC_COMPARE_Refresh();
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_compare .rsec_delsome', function () {
        RSEC_COMPARE_Refresh();
        return false;
    });

    // FAVORITE
    $(document).on('click', '#rs_easycart .rsec_thistab_favorite .rsec_delall', function () {
        $(this).parents('form').find('input[name^="DELETE_"]').attr('checked', true);
        RSEC_FAVORITE_Refresh();
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_favorite .rsec_delete', function () {
        $(this).parents('.rsec_jsline').find('input[name^="DELETE_"]').attr('checked', true);
        RSEC_FAVORITE_Refresh();
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_favorite .rsec_delsome', function () {
        RSEC_FAVORITE_Refresh();
        return false;
    });

    // BASKET
    var RSEC_BASKET_timeout = 0,
        RSEC_BASKET_delay = 1200;
    $(document).on('click', '#rs_easycart .rsec_thistab_basket .rsec_plus, #rs_easycart .rsec_thistab_basket .rsec_minus', function () {
        clearTimeout(RSEC_BASKET_timeout);
        RSEC_BASKET_timeout = setTimeout(function () {
            RSEC_BASKET_Refresh();
        }, RSEC_BASKET_delay);
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_basket .rsec_delall', function () {
        $(this).parents('form').find('input[name^="DELETE_"]').attr('checked', true);
        RSEC_BASKET_Refresh();
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_basket .rsec_delete', function () {
        $(this).parents('.rsec_jsline').find('input[name^="DELETE_"]').attr('checked', true);
        RSEC_BASKET_Refresh();
        return false;
    });
    $(document).on('click', '#rs_easycart .rsec_thistab_basket .rsec_refresh, #rs_easycart .rsec_thistab_basket .rsec_delsome, #rs_easycart .rsec_thistab_basket .rsec_coup', function () {
        RSEC_BASKET_Refresh();
        return false;
    });

    // universal ajax handler
    if ($('#rs_easycart').find('.rsec_universalhandler').length > 0) {
        var ajaxFinderCompare_add = '',
            ajaxFinderCompare_remove = '',
            ajaxFinderFavorite = '',
            ajaxFinderBasket = '';
        // COMPARE
        if ($('#rs_easycart').find('#rsec_compare').hasClass('rsec_universalhandler')) {
            ajaxFinderCompare_add = $('#rs_easycart').find('#rsec_compare').data('ajaxfinder_add');
        }
        if ($('#rs_easycart').find('#rsec_compare').hasClass('rsec_universalhandler')) {
            ajaxFinderCompare_remove = $('#rs_easycart').find('#rsec_compare').data('ajaxfinder_remove');
        }

        // FAVORITE
        if ($('#rs_easycart').find('#rsec_favorite').hasClass('rsec_universalhandler')) {
            ajaxFinderFavorite = $('#rs_easycart').find('#rsec_favorite').data('ajaxfinder');
        }

        // BASKET
        if ($('#rs_easycart').find('#rsec_basket').hasClass('rsec_universalhandler')) {
            ajaxFinderBasket = $('#rs_easycart').find('#rsec_basket').data('ajaxfinder');
        }

        if (ajaxFinderCompare_add != '' || ajaxFinderCompare_remove != '' || ajaxFinderFavorite != '' || ajaxFinderBasket != '') {
            $(document).ajaxSuccess(function (event, xhr, settings) {
                // COMPARE
                if ((ajaxFinderCompare_add != '' && settings.url.indexOf(ajaxFinderCompare_add, 0) > 0) || (ajaxFinderCompare_remove != '' && settings.url.indexOf(ajaxFinderCompare_remove, 0) > 0)) {
                    RSEC_COMPARE_Refresh();
                }
                // FAVORITE
                if (ajaxFinderFavorite != '' && settings.url.indexOf(ajaxFinderFavorite, 0) > 0) {
                    RSEC_FAVORITE_Refresh();
                }
                // BASKET
                if (ajaxFinderBasket != '' && settings.url.indexOf(ajaxFinderBasket, 0) > 0) {
                    RSEC_BASKET_Refresh();
                }
            });
        }
    }

});
/* End */
;;/* /bitrix/templates/prostroy_default/assets/lib/jquery-1.11.2.min.js?147567488995935*/
;/* /bitrix/templates/prostroy_default/assets/lib/jquery.mousewheel.min.js?14756748892737*/
;/* /bitrix/templates/prostroy_default/assets/lib/jquery.cookie.js?14756748893121*/
;/* /bitrix/templates/prostroy_default/assets/lib/jquery.maskedinput.min.js?14756748894274*/
;/* /bitrix/templates/prostroy_default/assets/lib/owl/owl.carousel.min.js?147567488940401*/
;/* /bitrix/templates/prostroy_default/assets/lib/jscrollpane/jquery.jscrollpane.min.js?147567488914107*/
;/* /bitrix/templates/prostroy_default/assets/lib/jssor/jssor.core.js?14756748897022*/
;/* /bitrix/templates/prostroy_default/assets/lib/jssor/jssor.utils.js?147567488989613*/
;/* /bitrix/templates/prostroy_default/assets/lib/jssor/jssor.slider.min.js?147567488959436*/
;/* /bitrix/templates/prostroy_default/assets/lib/fancybox/jquery.fancybox.pack.js?147567488923135*/
;/* /bitrix/templates/prostroy_default/assets/lib/scrollto/jquery.scrollTo.min.js?14756748892910*/
;/* /bitrix/templates/prostroy_default/js/jquery.treeview.js?14763608178764*/
;/* /bitrix/templates/prostroy_default/assets/js/popup/script.js?14756748894442*/
;/* /bitrix/templates/prostroy_default/assets/js/jscrollpane.js?14756748897176*/
;/* /bitrix/templates/prostroy_default/assets/js/glass/script.js?14756748893907*/
;/* /bitrix/templates/prostroy_default/assets/js/script.js?147567488916634*/
;/* /bitrix/templates/prostroy_default/assets/js/offers.js?147567488918318*/
;/* /bitrix/templates/prostroy_default/assets/js/timer.js?14756748897693*/
;/* /bitrix/templates/prostroy_default/components/bitrix/menu/catalog/script.js?14756748892782*/
;/* /bitrix/templates/prostroy_default/js/jquery.maskedinput.min.js?14756748894274*/
;/* /bitrix/templates/prostroy_default/js/timer.js?14756748897693*/
;/* /bitrix/components/bitrix/search.title/script.min.js?14756741756196*/
;/* /bitrix/templates/prostroy_default/components/bitrix/search.title/inheader/script.js?1475674889722*/
;/* /bitrix/templates/prostroy_default/components/redsign/easycart/gopro/script.js?147567488914807*/

//# sourceMappingURL=template_d42cc00df5a621903f90e7cfd691a4b7.map.js