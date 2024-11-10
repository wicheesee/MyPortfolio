var AutoTyping2 = function (e) {
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
    }([function (e, t, r) {
        "use strict";
        r.r(t);
        t.default = class {
            constructor(e, t, { typeSpeed: r = 150, deleteSpeed: n = 150, waitBeforeDelete: i = 1000, waitBetweenWords: o = 1000 } = {}) {
                this.selector = e;
                this.text = t;
                this.typeSpeed = r;
                this.deleteSpeed = n;
                this.waitBeforeDelete = i;
                this.waitBetweenWords = o;
                this.el = document.querySelector(e);
                this.el.style.position = 'absolute'; // Menjaga posisi tetap
            }
            async start() {
                let index = 0; // Variabel indeks untuk melacak posisi teks
                while (true) { // Perulangan tak terbatas
                    const t = this.text[index];
                    await this.writeText(t);
                    await new Promise(resolve => setTimeout(resolve, this.waitBeforeDelete));
                    await this.deleteText();
                    await new Promise(resolve => setTimeout(resolve, this.waitBetweenWords));
                    index = (index + 1) % this.text.length; // Reset indeks ke 0 setelah akhir array
                }
            }
            async writeText(text) {
                for (let i = 0; i < text.length; i++) {
                    this.el.textContent += text[i]; // Menggunakan textContent untuk mempertahankan spasi
                    await new Promise(resolve => setTimeout(resolve, this.typeSpeed));
                }
            }
            async deleteText() {
                while (this.el.textContent.length > 0) { // Menggunakan textContent
                    this.el.textContent = this.el.textContent.slice(0, -1);
                    await new Promise(resolve => setTimeout(resolve, this.deleteSpeed));
                }
            }
        };
    }]).default;
    
    // Menginisialisasi AutoTyping2 dengan teks yang ingin ditampilkan dan pengaturan kecepatan
    const exampleText2 = ["Hardworker, Dedicated, Curious.","Hardworker, Dedicated, Curious."];
    const exampleTyping2 = new AutoTyping2("#text2", exampleText2, {
        typeSpeed: 100,
        deleteSpeed: 100,
        waitBeforeDelete: 1000,
        waitBetweenWords: 500,
    });
    exampleTyping2.start();
    