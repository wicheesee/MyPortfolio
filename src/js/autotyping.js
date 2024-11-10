var AutoTyping = function (e) {
        var t = {};
        function r(n) {
            if (t[n]) return t[n].exports;
            var i = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        r.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 0))
        );
    }([
        function (e, t, r) {
            "use strict";
            r.r(t);
            t.default = class {
                constructor(e, t, { waitBeforeDelete: n = 1000, waitBetweenWords: i = 2000, writeWhole: l = !1 } = {}) {
                    this.selector = e;
                    this.text = t;
                    this.waitBeforeDelete = n;
                    this.waitBetweenWords = i;
                    this.writeWhole = l;
                    this.el = document.querySelector(e);
                }
                async start() {
                    this.el;
                    for (let e = 0; e < this.text.length; e++) {
                        const t = this.text[e];
                        await this.replaceText(t);
                        e == this.text.length - 1 && (e = -1); // Loop back to start
                    }
                }
                replaceText(e) {
                    return new Promise((t) => {
                        this.el.innerText = e;
                        setTimeout(() => t(), this.waitBetweenWords);
                    });
                }
            };
        },
    ]).default;
    
    // Initialize the auto-typing with no backspace effect
    new AutoTyping("#emoji", ["❤️", "👋", "💕", "🙌", "💗"], {
        waitBeforeDelete: 1000,
        waitBetweenWords: 1000,
        writeWhole: true,
    }).start();
    