"use strict";

webpackJsonp([1], { "+Z++": function Z(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "CourseVideo" }, [i("el-row", [i("el-col", { attrs: { span: 19 } }, [i("el-row", { staticClass: "slide" }, [i("p", { staticClass: "SlideTitle" }, [e._v(" 第一章  课件一\n          "), i("router-link", { attrs: { to: "/CourseWare" } }, [i("button", [e._v("在线課件")])])], 1), e._v(" "), i("div", { staticClass: "Video" }, [i("my-video", { attrs: { sources: e.video.sources, options: e.video.options } })], 1)])], 1), e._v(" "), i("el-col", { attrs: { span: 5 } }, [i("el-tabs", [i("el-tab-pane", { attrs: { label: "课程大纲" } }, [i("el-menu", { staticClass: "el-menu-vertical-demo menuList", attrs: { "default-active": "1", router: !0 } }, e._l(e.sections, function (t) {
        return i("el-submenu", { key: t.id, staticClass: "submenu", attrs: { index: t.id } }, [i("template", { attrs: { slot: "title" }, slot: "title" }, [e._v(e._s(t.title))]), e._v(" "), i("el-menu-item-group", e._l(t.lists, function (t, s) {
          return i("el-menu-item", { staticClass: "menuItem", attrs: { index: /CourseWare/ + t.id }, on: { click: function click(t) {
                e.selectSection(e.$route.params.section);
              } } }, [e._v(e._s(t.list))]);
        }))], 2);
      }))], 1), e._v(" "), i("el-tab-pane", { attrs: { label: "课程要点" } })], 1)], 1)], 1)], 1);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, "1f4l": function f4l(e, t, i) {
    "use strict";
    function s(e) {
      i("oLP6");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("nngy"),
        a = i.n(n),
        o = i("7xyu"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, "data-v-34097e6d", null);t.default = r.exports;
  }, "2PH0": function PH0(e, t) {}, "3Ypd": function Ypd(e, t, i) {
    "use strict";
    function s(e) {
      i("Ion7");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("buPS"),
        a = i.n(n),
        o = i("jf1C"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, "data-v-d39bec8c", null);t.default = r.exports;
  }, "5Ne2": function Ne2(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("V8Yx"),
        n = i.n(s),
        a = i("r3Np"),
        o = i("46Yf"),
        l = o(n.a, a.a, !1, null, null, null);t.default = l.exports;
  }, "69Cz": function Cz(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "background" }, [i("div", { staticClass: "header" }, [i("div", { staticClass: "container" }, [i("el-menu", { staticClass: "menu", attrs: { mode: "horizontal", router: !0 } }, [i("el-menu-item", { attrs: { index: this.VideoSrc } }, [e._v("视频管理")]), e._v(" "), i("el-menu-item", { attrs: { index: this.CourseWareSrc } }, [e._v("课件管理")])], 1), e._v(" "), e._m(0)], 1)]), e._v(" "), i("div", { staticClass: "container" }, [i("div", { staticClass: "NavMenu" }, e._l(e.sections, function (t) {
        return i("div", { staticClass: "NavMenuSection", attrs: { index: t.id } }, [e._v("\n    " + e._s(t.title) + "\n  ")]);
      })), e._v(" "), e._m(1)])]);
    },
        n = [function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "user" }, [i("img", { attrs: { src: "/static/images/logo.png" } }), e._v("\n        你好！"), i("br"), e._v("\n        麦冬"), i("br"), e._v(" "), i("a", [e._v("退出")]), e._v(" "), i("a", [e._v("修改密码")])]);
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "NavMenuContent" }, [i("div", { staticClass: "title" }, [e._v(" {{}}")])]);
    }],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, "7Bnh": function Bnh(e, t) {}, "7CiN": function CiN(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("el-menu-collapse-transition", [i("ul", { key: +e.collapse, staticClass: "el-menu", class: { "el-menu--horizontal": "horizontal" === e.mode, "el-menu--dark": "dark" === e.theme, "el-menu--collapse": e.collapse } }, [e._t("default")], 2)]);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, "7xyu": function xyu(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "Top" }, [e._m(0), e._v(" "), i("div", { staticClass: "teachPoint" }, [i("ul", e._l(e.teachPoints, function (t) {
        return i("li", { key: t, domProps: { textContent: e._s(t) } }, [e._v(e._s(t))]);
      }))]), e._v(" "), e._m(1)]);
    },
        n = [function () {
      var e = this,
          t = e.$createElement,
          s = e._self._c || t;return s("div", { staticClass: "HeadBackground", attrs: { id: "headbackground" } }, [s("img", { staticStyle: { display: "none" }, attrs: { src: i("d+Yd") } }), e._v(" "), s("div", { staticClass: "right" }, [s("img", { attrs: { src: i("Z2Ou") } }), e._v(" "), s("h1", [e._v("针灸学")]), e._v(" "), s("p", [e._v("国家级精品资源共享课程《针灸学》 依托天津中医药大学国家级重点学科\n          ，教学示范中心及国内最大的针灸临床教学基地，由石学敏院士衔领国家\n          级教学团队系统讲授，课程包括经络腧穴学，刺灸法及针灸临床应用，体现\n          了多元化的教学方法，展现了针灸名家的学术思想和临床经验")]), e._v(" "), s("button", { attrs: { type: "text" } }, [e._v("开始学习")])])]);
    }, function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "CourseIntroduction" }, [i("p", [e._v("针灸学课程介绍 针灸是中医学的重要治疗手段之一，《针灸学》是中医类专业课程体系中的重要板块和主干课程。授课对象是中医学院的中医专业、中西医结合专业、中医骨伤专业、心理学专业、美容\n      专业等五、七年制本科、本硕连读研究生、专科等各个不同层次的学生。《针灸学》课程既是中医针灸基础课，也是中医针灸基础理论课与临床课之间的桥梁课程，其教学质量是保证毕业\n      生针灸诊疗技能达标的关键，是国内外中医师执业资格考试的必考...")])]);
    }],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, DICR: function DICR(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "app", components: {} };
  }, ET7B: function ET7B(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("ZZb6"),
        n = i.n(s),
        a = i("fWVB"),
        o = i("46Yf"),
        l = o(n.a, a.a, !1, null, null, null);t.default = l.exports;
  }, GGkg: function GGkg(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("1f4l"),
        a = s(n),
        o = i("quW5"),
        l = s(o),
        c = i("fTiX"),
        r = s(c);t.default = { name: "index", components: { HeadNav: a.default, TeacherNav: l.default, CourseNav: r.default } };
  }, Gfes: function Gfes(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "ElTabPane", componentName: "ElTabPane", props: { label: String, labelContent: Function, name: String, closable: Boolean, disabled: Boolean }, data: function data() {
        return { index: null };
      }, computed: { isClosable: function isClosable() {
          return this.closable || this.$parent.closable;
        }, active: function active() {
          return this.$parent.currentName === (this.name || this.index);
        } }, mounted: function mounted() {
        this.$parent.addPanes(this);
      }, destroyed: function destroyed() {
        this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el), this.$parent.removePanes(this);
      }, watch: { label: function label() {
          this.$parent.$forceUpdate();
        } } };
  }, Ion7: function Ion7(e, t) {}, J9aY: function J9aY(e, t) {}, L1kL: function L1kL(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("ZsZ8"),
        n = i.n(s),
        a = i("V4hN"),
        o = i("46Yf"),
        l = o(n.a, a.a, !1, null, null, null);t.default = l.exports;
  }, M93x: function M93x(e, t, i) {
    "use strict";
    function s(e) {
      i("Y3sD");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("DICR"),
        a = i.n(n),
        o = i("SP8i"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, null, null);t.default = r.exports;
  }, MQkY: function MQkY(e, t, i) {
    e.exports = i.p + "static/images/left.png";
  }, NBUM: function NBUM(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "TeacherNav" }, [i("div", { staticClass: "center" }, [i("h2", [e._v("负责人&教授")]), e._v(" "), i("el-row", { staticClass: "clearfix" }, [i("el-col", { attrs: { span: 10 } }, e._l(e.teachernames, function (t) {
        return i("div", { staticClass: "leftbox" }, [i("div", { staticClass: "smallbox" }, [i("strong", [e._v(e._s(t.name))]), i("br"), e._v(" "), i("span", [e._v(e._s(t.professionaltitles))])])]);
      })), e._v(" "), i("el-col", { attrs: { span: 4 } }, [i("div", { staticClass: "mainbox" }, [i("div", { staticClass: "smallbox" }, [i("strong", [e._v("孟宪军")]), i("br"), e._v(" "), i("span", [e._v("负责人")])])])]), e._v(" "), i("el-col", { attrs: { span: 10 } }, e._l(e.teachernames, function (t) {
        return i("div", { staticClass: "rightbox" }, [i("div", { staticClass: "smallbox" }, [i("strong", [e._v(e._s(t.name))]), i("br"), e._v(" "), i("span", [e._v(e._s(t.professionaltitles))])])]);
      }))], 1)], 1), e._v(" "), e._m(0)]);
    },
        n = [function () {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("small", [i("div", { staticClass: "margin" }, [e._v("所属学校  广州中医药大学")]), e._v(" "), i("div", { staticClass: "margin" }, [i("div", { staticClass: "marginright" }, [e._v(" 负责人")]), e._v("  张宏")]), e._v(" "), i("div", { staticClass: "margin" }, [i("div", { staticClass: "marginright" }, [e._v("课程类型")]), e._v("  测实结合")]), e._v(" "), i("div", { staticClass: "margin" }, [i("div", { staticClass: "marginright" }, [e._v("课程性质")]), e._v("  专业课")]), e._v(" "), i("div", { staticClass: "margin" }, [i("div", { staticClass: "marginright" }, [e._v("学科门类")]), e._v("  医学类")]), e._v(" "), i("div", { staticClass: "margin" }, [i("div", { staticClass: "marginright" }, [e._v("结合专业")]), e._v("  针灸，中医，康复等")])]);
    }],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, NHnr: function NHnr(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }var n = i("MVSX"),
        a = s(n),
        o = i("M93x"),
        l = s(o),
        c = i("YaEn"),
        r = s(c),
        u = i("HrAA"),
        d = s(u);i("Xcu2"), a.default.config.productionTip = !1, a.default.use(d.default);new a.default({ el: "#app", router: r.default, template: "<App/>", components: { App: l.default } });
  }, NyQD: function NyQD(e, t) {}, PjtD: function PjtD(e, t, i) {
    "use strict";
    function s(e) {
      i("mpNK");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("GGkg"),
        a = i.n(n),
        o = i("fUNi"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, null, null);t.default = r.exports;
  }, SP8i: function SP8i(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { attrs: { id: "app" } }, [i("router-view")], 1);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, V4hN: function V4hN(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("li", { staticClass: "el-menu-item-group" }, [i("div", { staticClass: "el-menu-item-group__title", style: { paddingLeft: e.levelPadding + "px" } }, [e.$slots.title ? e._t("title") : [e._v(e._s(e.title))]], 2), e._v(" "), i("ul", [e._t("default")], 2)]);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, V8Yx: function V8Yx(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "ElTag", props: { text: String, closable: Boolean, type: String, hit: Boolean, closeTransition: Boolean, color: String }, methods: { handleClose: function handleClose(e) {
          this.$emit("close", e);
        } } };
  }, VgxF: function VgxF(e, t, i) {
    e.exports = i.p + "static/images/right.png";
  }, Xcu2: function Xcu2(e, t) {}, Y3sD: function Y3sD(e, t) {}, YBun: function YBun(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("iTEc"),
        a = s(n),
        o = i("cigS"),
        l = (s(o), i("MVSX")),
        c = (s(l), i("n+cQ")),
        r = s(c),
        u = i("L1kL"),
        d = s(u),
        v = i("ET7B"),
        m = s(v),
        h = i("tPTL"),
        g = s(h);t.default = { components: { ElMenuItem: m.default, ElMenuItemGroup: d.default, ElCol: r.default, ElRow: a.default, myVideo: g.default }, name: "Top", data: function data() {
        return { sections: [{ id: "1", title: "第一章", lists: [{ id: "1-1", list: "课件一" }, { id: "1-2", list: "课件二" }] }, { id: "2", title: "第二章", lists: [{ id: "2-1", list: "课件一" }, { id: "2-2", list: "课件二" }] }, { id: "3", title: "第三章", lists: [{ id: "3-1", list: "课件一" }, { id: "3-2", list: "课件二" }] }, { id: "4", title: "第四章", lists: [{ id: "4-1", list: "课件一" }, { id: "4-2", list: "课件二" }] }, { id: "5", title: "第五章", lists: [{ id: "5-1", list: "课件一" }, { id: "5-2", list: "课件二" }] }], video: { sources: [{ src: "../static/video/1.mp4", type: "video/mp4" }], options: { autoplay: !1, volume: .6, poster: "http://covteam.u.qiniudn.com/poster.png" } }, sources: [{ src: "/static/video/1.mp4", type: "video/mp4" }], options: { autoplay: !1, volume: .6, poster: "http://covteam.u.qiniudn.com/poster.png" }, src: "../static/images/1.jpg", selectItem: 0 };
      }, mounted: function mounted() {}, methods: { selectSection: function selectSection(e) {
          var t = this;this.Images = [], this.sectionImages.forEach(function (i) {
            i.id == e && (t.Images = i.Images, console.log(i.id));
          });
        }, prev: function prev() {
          if (console.log(this.Images), this.selectItem > 0 && this.selectItem < this.Images.length) {
            this.showIsActive(), this.showImage(this.selectItem - 1), document.getElementsByTagName("li")[this.selectItem].focus();var e = document.querySelectorAll("div[class='center']"),
                t = e[0].clientWidth,
                i = (t - 80) / 200;if (this.selectItem > i) for (var s = this.selectItem; s < this.Images.length - 1; s++) {
              this.Images[s].isActive = !0;
            }
          } else document.getElementsByTagName("li")[this.selectItem].focus(), console.log(this.selectItem);
        }, next: function next() {
          if (this.selectItem < this.Images.length - 1) {
            this.showIsActive(), this.showImage(this.selectItem + 1), document.getElementsByTagName("li")[this.selectItem].focus();var e = document.querySelectorAll("div[class='center']"),
                t = e[0].clientWidth,
                i = (t - 80) / 200;if (this.selectItem > i) for (var s = 0; s < this.Images.length - 5; s++) {
              this.Images[s].isActive = !0;
            }
          } else document.getElementsByTagName("li")[this.selectItem].focus(), console.log(this.selectItem);
        }, showImage: function showImage(e) {
          this.selectItem = e, this.src = this.Images[e].ImageSrc;for (var t = 0; t < this.Images.length; t++) {
            this.Images[t].isActive = !1;
          }
        }, showIsActive: function showIsActive() {
          for (var e = 0; e < this.Images.length; e++) {
            this.Images[e].isActive = !1;
          }
        } } };
  }, YaEn: function YaEn(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("MVSX"),
        a = s(n),
        o = i("cigS"),
        l = s(o),
        c = i("3Ypd"),
        r = s(c),
        u = i("YmNg"),
        d = s(u),
        v = i("PjtD"),
        m = s(v),
        h = i("oE6i"),
        g = s(h);a.default.use(l.default), t.default = new l.default({ routes: [{ path: "/", name: "index", component: m.default }, { path: "/CourseWare/:section", component: r.default }, { path: "/CourseWare/:section", component: r.default, redirect: "/CourseWare/:section" }, { path: "/CourseVideo", component: d.default }, { path: "/Background/:type/:section", name: "Background", component: g.default }, { path: "/Background/:type/:section", component: g.default, redirect: "/Background/:type/:section" }] });
  }, YmNg: function YmNg(e, t, i) {
    "use strict";
    function s(e) {
      i("2PH0");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("YBun"),
        a = i.n(n),
        o = i("+Z++"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, "data-v-0c9fa9e4", null);t.default = r.exports;
  }, Z2Ou: function Z2Ou(e, t, i) {
    e.exports = i.p + "static/images/logo.png";
  }, ZZb6: function ZZb6(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("ZNOM"),
        a = s(n),
        o = i("ejYv"),
        l = s(o);t.default = { name: "ElMenuItem", componentName: "ElMenuItem", mixins: [a.default, l.default], props: { index: { type: String, required: !0 }, route: { type: Object, required: !1 }, disabled: { type: Boolean, required: !1 } }, computed: { active: function active() {
          return this.index === this.rootMenu.activeIndex;
        } }, methods: { handleClick: function handleClick() {
          this.dispatch("ElMenu", "item-click", this), this.$emit("click", this);
        } }, created: function created() {
        this.parentMenu.addItem(this), this.rootMenu.addItem(this);
      }, beforeDestroy: function beforeDestroy() {
        this.parentMenu.removeItem(this), this.rootMenu.removeItem(this);
      } };
  }, ZsZ8: function ZsZ8(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "ElMenuItemGroup", componentName: "ElMenuItemGroup", inject: ["rootMenu"], props: { title: { type: String } }, data: function data() {
        return { paddingLeft: 20 };
      }, computed: { levelPadding: function levelPadding() {
          var e = 10,
              t = this.$parent;if (this.rootMenu.collapse) return 20;for (; t && "ElMenu" !== t.$options.componentName;) {
            "ElSubmenu" === t.$options.componentName && (e += 20), t = t.$parent;
          }return 10 === e && (e = 20), e;
        } } };
  }, buPS: function buPS(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("iTEc"),
        a = s(n),
        o = i("cigS"),
        l = (s(o), i("MVSX")),
        c = (s(l), i("n+cQ")),
        r = s(c),
        u = i("L1kL"),
        d = s(u),
        v = i("ET7B"),
        m = s(v);t.default = { components: { ElMenuItem: m.default, ElMenuItemGroup: d.default, ElCol: r.default, ElRow: a.default }, name: "Top", data: function data() {
        return { sections: [{ id: "1", title: "第一章", lists: [{ id: "1-1", list: "课件一" }, { id: "1-2", list: "课件二" }] }, { id: "2", title: "第二章", lists: [{ id: "2-1", list: "课件一" }, { id: "2-2", list: "课件二" }] }, { id: "3", title: "第三章", lists: [{ id: "3-1", list: "课件一" }, { id: "3-2", list: "课件二" }] }, { id: "4", title: "第四章", lists: [{ id: "4-1", list: "课件一" }, { id: "4-2", list: "课件二" }] }, { id: "5", title: "第五章", lists: [{ id: "5-1", list: "课件一" }, { id: "5-2", list: "课件二" }] }], sectionImages: [{ id: "1-1", Images: [{ id: "1-1-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "1-1-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "1-1-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "1-1-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "1-1-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "1-1-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "1-2", Images: [{ id: "1-2-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "1-2-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "1-2-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "1-2-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "1-2-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "1-2-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "2-1", Images: [{ id: "2-1-0", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "2-1-1", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "2-1-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "2-1-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "2-1-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "2-1-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "2-2", Images: [{ id: "2-2-0", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "2-2-1", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "2-2-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "2-2-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "2-2-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "2-2-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "3-1", Images: [{ id: "3-1-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "3-1-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "3-1-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "3-1-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "3-1-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "3-1-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "3-2", Images: [{ id: "3-2-0", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "3-2-1", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "3-2-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "3-2-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "3-2-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "3-2-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "4-1", Images: [{ id: "4-1-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "4-1-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "4-1-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "4-1-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "4-1-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "4-1-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "4-2", Images: [{ id: "4-2-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "4-2-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "4-2-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "4-2-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "4-2-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "4-2-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "5-1", Images: [{ id: "5-1-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "5-1-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "5-1-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "5-1-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "5-1-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "5-1-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }, { id: "5-2", Images: [{ id: "5-2-0", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "5-2-1", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "5-2-2", isActive: !1, ImageSrc: "../static/images/3.jpg" }, { id: "5-2-3", isActive: !1, ImageSrc: "../static/images/1.jpg" }, { id: "5-2-4", isActive: !1, ImageSrc: "../static/images/2.jpg" }, { id: "5-2-5", isActive: !1, ImageSrc: "../static/images/3.jpg" }] }], Images: [], src: "../static/images/1.jpg", selectItem: 0 };
      }, mounted: function mounted() {
        document.getElementsByTagName("li")[0].focus(), this.Images = this.sectionImages[0].Images;
      }, methods: { selectSection: function selectSection(e) {
          var t = this;this.Images = [], this.sectionImages.forEach(function (i) {
            i.id == e && (t.Images = i.Images, console.log(i.id));
          });
        }, prev: function prev() {
          if (console.log(this.Images), this.selectItem > 0 && this.selectItem < this.Images.length) {
            this.showIsActive(), this.showImage(this.selectItem - 1), document.getElementsByTagName("li")[this.selectItem].focus();var e = document.querySelectorAll("div[class='center']"),
                t = e[0].clientWidth,
                i = (t - 80) / 200;if (this.selectItem > i) for (var s = this.selectItem; s < this.Images.length - 1; s++) {
              this.Images[s].isActive = !0;
            }
          } else document.getElementsByTagName("li")[this.selectItem].focus(), console.log(this.selectItem);
        }, next: function next() {
          if (this.selectItem < this.Images.length - 1) {
            this.showIsActive(), this.showImage(this.selectItem + 1), document.getElementsByTagName("li")[this.selectItem].focus();var e = document.querySelectorAll("div[class='center']"),
                t = e[0].clientWidth,
                i = (t - 80) / 200;if (this.selectItem > i) for (var s = 0; s < this.Images.length - 5; s++) {
              this.Images[s].isActive = !0;
            }
          } else document.getElementsByTagName("li")[this.selectItem].focus(), console.log(this.selectItem);
        }, showImage: function showImage(e) {
          this.selectItem = e, this.src = this.Images[e].ImageSrc;for (var t = 0; t < this.Images.length; t++) {
            this.Images[t].isActive = !1;
          }
        }, showIsActive: function showIsActive() {
          for (var e = 0; e < this.Images.length; e++) {
            this.Images[e].isActive = !1;
          }
        } } };
  }, "d+Yd": function dYd(e, t, i) {
    e.exports = i.p + "static/images/1.jpg";
  }, "e/TW": function eTW(e, t) {}, fTiX: function fTiX(e, t, i) {
    "use strict";
    function s(e) {
      i("7Bnh");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("nL8R"),
        a = i.n(n),
        o = i("h3gS"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, "data-v-1a3dbf52", null);t.default = r.exports;
  }, fUNi: function fUNi(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { attrs: { id: "index" } }, [i("HeadNav"), e._v(" "), i("TeacherNav"), e._v(" "), i("CourseNav")], 1);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, fWVB: function fWVB(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("li", { staticClass: "el-menu-item", class: { "is-active": e.active, "is-disabled": e.disabled }, style: e.paddingStyle, on: { click: e.handleClick } }, [e.$parent === e.rootMenu && e.rootMenu.collapse ? i("el-tooltip", { attrs: { effect: "dark", placement: "right" } }, [i("div", { attrs: { slot: "content" }, slot: "content" }, [e._t("title")], 2), e._v(" "), i("div", { staticStyle: { position: "absolute", left: "0", top: "0", height: "100%", width: "100%", display: "inline-block", "box-sizing": "border-box", padding: "0 20px" } }, [e._t("default")], 2)]) : [e._t("default"), e._v(" "), e._t("title")]], 2);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, ggYP: function ggYP(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("wwRj"),
        n = i.n(s),
        a = i("7CiN"),
        o = i("46Yf"),
        l = o(n.a, a.a, !1, null, null, null);t.default = l.exports;
  }, h3gS: function h3gS(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { staticClass: "CourseNav" }, [i("div", { staticClass: "mainbox" }, [i("el-row", [i("h1", [e._v("课程大纲")]), e._v(" "), i("router-link", { attrs: { to: "/CourseWare/1-1" } }, [i("button", [e._v("在线课件"), i("b", [e._v("->")])])])], 1), i("br"), e._v(" "), e._l(e.CourseCurrentSection, function (t) {
        return i("div", { staticClass: "Coursesection" }, [e._l(t.section, function (t) {
          return i("p", [e._v("\n      " + e._s(t) + "\n    ")]);
        }), e._v("\n    教学内容：" + e._s(t.teachingcontent) + "\n    "), i("h2", [e._v(e._s(t.week))])], 2);
      }), e._v(" "), i("el-pagination", { staticClass: "el-pagination", attrs: { "page-size": this.PageSize, small: "", layout: "prev, pager, next", total: this.coursesections.length }, on: { "current-change": e.handleCurrentChange } })], 2)]);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, hHj4: function hHj4(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("Gfes"),
        n = i.n(s),
        a = i("pd9j"),
        o = i("46Yf"),
        l = o(n.a, a.a, !1, null, null, null);t.default = l.exports;
  }, "hM/t": function hMT(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("5Ne2"),
        a = s(n),
        o = i("hHj4"),
        l = s(o),
        c = i("ggYP"),
        r = s(c),
        u = i("ET7B"),
        d = s(u);t.default = { components: { ElMenuItem: d.default, ElMenu: r.default, ElTabPane: l.default, ElTag: a.default }, name: "Background", data: function data() {
        return { VideoSrc: "/Background/VideoManager/1-1", CourseWareSrc: "/Background/CourseWareManager/1-1", sections: [{ id: "1", title: "第一章", name: "绪论", lists: [{ id: "1-1", list: "课件一" }, { id: "1-2", list: "课件二" }] }, { id: "2", title: "第二章", lists: [{ id: "2-1", list: "课件一" }, { id: "2-2", list: "课件二" }] }, { id: "3", title: "第三章", lists: [{ id: "3-1", list: "课件一" }, { id: "3-2", list: "课件二" }] }, { id: "4", title: "第四章", lists: [{ id: "4-1", list: "课件一" }, { id: "4-2", list: "课件二" }] }, { id: "5", title: "第五章", lists: [{ id: "5-1", list: "课件一" }, { id: "5-2", list: "课件二" }] }] };
      } };
  }, jf1C: function jf1C(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          s = e._self._c || t;return s("div", { staticClass: "CourseWare" }, [s("el-row", [s("el-col", { attrs: { span: 19 } }, [s("el-row", { staticClass: "slide" }, [s("p", { staticClass: "SlideTitle" }, [e._v(" 第一章  课件一\n          "), s("router-link", { attrs: { to: "/CourseVideo" } }, [s("button", [e._v("在线课题")])])], 1), e._v(" "), s("div", { staticClass: "SlideImage" }, [s("img", { attrs: { src: this.src } })])]), e._v(" "), s("el-row", { staticClass: "SlideSelectImage" }, [s("div", { staticClass: "left" }, [s("img", { attrs: { src: i("MQkY") }, on: { click: function click(t) {
            e.prev();
          } } })]), e._v(" "), s("div", { staticClass: "right" }, [s("img", { attrs: { src: i("VgxF") }, on: { click: function click(t) {
            e.next();
          } } })]), e._v(" "), s("div", { staticClass: "center" }, [s("ul", e._l(e.Images, function (t, i) {
        return s("li", { class: { show: t.isActive }, attrs: { tabindex: i } }, [s("img", { attrs: { src: t.ImageSrc, index: t.id }, on: { click: function click(t) {
              e.showImage(i);
            } } })]);
      }))])])], 1), e._v(" "), s("el-col", { attrs: { span: 5 } }, [s("el-menu", { staticClass: "el-menu-vertical-demo menuList", attrs: { "default-active": "1", router: !0 } }, e._l(e.sections, function (t) {
        return s("el-submenu", { staticClass: "submenu", attrs: { index: t.id } }, [s("template", { attrs: { slot: "title" }, slot: "title" }, [e._v(e._s(t.title))]), e._v(" "), s("el-menu-item-group", e._l(t.lists, function (t, i) {
          return s("el-menu-item", { staticClass: "menuItem", attrs: { index: /CourseWare/ + t.id }, on: { click: function click(t) {
                e.selectSection(e.$route.params.section);
              } } }, [e._v(e._s(t.list))]);
        }))], 2);
      }))], 1)], 1)], 1);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, klp4: function klp4(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = function s(e) {
      return "x" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x") ? e.pageX : e.pageY;
    },
        n = function n(e) {
      return e = Math.floor(e), e < 10 ? "0" + e : e + "";
    },
        a = function a(e) {
      var t = 0;return t = Math.floor(e / 60), e -= 60 * t, n(t) + ":" + n(e);
    };t.default = { props: { sources: Array, options: { type: Object, default: function _default() {
            return { autoplay: !1, volume: .9, poster: "" };
          } } }, data: function data() {
        return { $video: null, video: { $videoSlider: null, len: 0, current: 0, loaded: 0, moving: !1, displayTime: "00:00", pos: { start: 0, width: 0, innerWidth: 0, current: 0 } }, volume: { $volBox: null, muted: !1, percent: 60, moving: !1, pos: { start: 0, width: 0, innerWidth: 0, current: 0 } }, player: { $player: null, pos: null }, tmp: { contrlHideTimer: null }, state: { contrlShow: !0, vol: .5, currentTime: 0, fullScreen: !1, playing: !1 } };
      }, ready: function ready() {
        this.init();
      }, mounted: function mounted() {
        this.init();
      }, beforeDestroy: function beforeDestroy() {
        document.body.removeEventListener("mousemove", this.mouseMoveAction), document.body.removeEventListener("mouseup", this.mouseUpAction);
      }, methods: { init: function init() {
          this.$video = this.$el.getElementsByTagName("video")[0], this.initCore(), this.options.autoplay && this.play(), document.body.addEventListener("mousemove", this.mouseMoveAction, !1), document.body.addEventListener("mouseup", this.mouseUpAction, !1);
        }, initCore: function initCore() {
          this.initVol(), this.initVideo(), this.initPlayer();var e = this.options.volume || .9;this.setVol(e);
        }, initPlayer: function initPlayer() {
          var e = this.$el.getElementsByClassName("__cov-video-container")[0];this.player.pos = e.getBoundingClientRect(), this.player.$player = e;
        }, initVol: function initVol() {
          var e = this.$el.getElementsByClassName("__cov-contrl-vol-slider")[0],
              t = e.getElementsByClassName("__cov-contrl-vol-inner")[0];this.volume.$volBox = e, this.volume.pos.innerWidth = t.getBoundingClientRect().width, this.volume.pos.start = e.getBoundingClientRect().left, this.volume.pos.width = e.getBoundingClientRect().width - this.volume.pos.innerWidth;
        }, initVideo: function initVideo() {
          var e = this.$el.getElementsByClassName("__cov-contrl-video-slider")[0],
              t = e.getElementsByClassName("__cov-contrl-video-inner")[0];this.$videoSlider = e, this.video.pos.start = e.getBoundingClientRect().left, this.video.pos.innerWidth = t.getBoundingClientRect().width, this.video.pos.width = e.getBoundingClientRect().width - this.video.pos.innerWidth, this.getTime();
        }, mouseEnterVideo: function mouseEnterVideo() {
          this.tmp.contrlHideTimer && (clearTimeout(this.tmp.contrlHideTimer), this.tmp.contrlHideTimer = null), this.state.contrlShow = !0;
        }, mouseLeaveVideo: function mouseLeaveVideo(e) {
          var t = this;this.tmp.contrlHideTimer && clearTimeout(this.tmp.contrlHideTimer), this.tmp.contrlHideTimer = setTimeout(function () {
            t.state.contrlShow = !1, t.tmp.contrlHideTimer = null;
          }, 2e3);
        }, toggleContrlShow: function toggleContrlShow() {
          this.state.contrlShow = !this.state.contrlShow;
        }, getTime: function getTime() {
          var e = this;this.$video.addEventListener("durationchange", function (e) {
            console.log(e);
          }), this.$video.addEventListener("progress", function (t) {
            0 != e.$video.buffered.length && (e.video.loaded = 100 * (e.$video.buffered.end(0) / e.$video.duration - 1));
          }), this.video.len = this.$video.duration;
        }, setVideoByTime: function setVideoByTime(e) {
          this.$video.currentTime = Math.floor(e * this.video.len);
        }, play: function play() {
          var e = this;this.state.playing = !this.state.playing, this.$video && (this.state.playing ? (this.$video.play(), this.mouseLeaveVideo(), this.$video.addEventListener("timeupdate", this.timeline), this.$video.addEventListener("ended", function (t) {
            e.state.playing = !1, e.video.pos.current = 0, e.$video.currentTime = 0;
          })) : this.$video.pause());
        }, timeline: function timeline() {
          var e = this.$video.currentTime / this.$video.duration;this.video.pos.current = (this.video.pos.width * e).toFixed(3), this.video.displayTime = a(this.$video.duration - this.$video.currentTime);
        }, volMove: function volMove(e) {
          this.initVol(), this.volume.moving = !0;
        }, videoMove: function videoMove(e) {
          this.initVideo(), this.video.moving = !0;
        }, slideClick: function slideClick(e) {
          this.videoSlideMove(e);
        }, volSlideClick: function volSlideClick(e) {
          this.volSlideMove(e);
        }, volMuted: function volMuted() {
          this.$video.muted = !this.$video.muted, this.volume.muted = this.$video.muted;
        }, setVol: function setVol(e) {
          this.$video && (this.volume.pos.current = e * this.volume.pos.width, this.volume.percent = 100 * e, this.$video.volume = e);
        }, fullScreen: function fullScreen() {
          this.state.fullScreen ? (this.state.fullScreen = !1, document.webkitCancelFullScreen()) : (this.state.fullScreen = !0, this.$video.webkitRequestFullScreen()), setTimeout(this.initVideo, 200);
        }, mouseMoveAction: function mouseMoveAction(e) {
          this.volume.moving && this.volSlideMove(e), this.video.moving && this.videoSlideMove(e), this.contrlHider(e);
        }, contrlHider: function contrlHider(e) {
          var t = s(e, "x"),
              i = s(e, "y");if (this.player.pos) return t > this.player.pos.left && t < this.player.pos.left + this.player.pos.width && i > this.player.pos.top + .6 * this.player.pos.height && i < this.player.pos.top + this.player.pos.height ? this.mouseEnterVideo() : this.mouseLeaveVideo();
        }, volSlideMove: function volSlideMove(e) {
          var t = s(e) - this.volume.pos.start;t > 0 && t < this.volume.pos.width && this.setVol(t / this.volume.pos.width);
        }, videoSlideMove: function videoSlideMove(e) {
          var t = s(e) - this.video.pos.start;t > 0 && t < this.video.pos.width && (this.video.pos.current = t, this.setVideoByTime(t / this.video.pos.width));
        }, mouseUpAction: function mouseUpAction(e) {
          this.volume.moving = !1, this.video.moving = !1;
        } } };
  }, mpNK: function mpNK(e, t) {}, nL8R: function nL8R(e, t, i) {
    "use strict";
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("MVSX"),
        a = s(n),
        o = i("iTEc"),
        l = s(o),
        c = i("n+cQ"),
        r = s(c);t.default = { components: { ElCol: r.default, ElRow: l.default }, name: "CourseNav", data: function data() {
        return { coursesections: [{ week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }, { week: "第一周针灸基础理论", teachingcontent: "经络系统的组成和……", section: ["1.1.0针灸基础理论（上）", "1.2.0针灸基础理论（下）"] }], CourseCurrentSection: [], PageSize: 0 };
      }, mounted: function mounted() {
        var e = { src: "../static/images/3.jpg" };this.getImgNaturalFimensions(e);var t = {};console.log(e), t = this.getImgNaturalFimensions(e);var i = document.body.clientWidth,
            s = parseInt(t.nHeight / t.nWidth * i);this.setClassSize("CourseNav", s), console.log(s), this.PageSize = s >= 900 ? 9 : 6, this.handleCurrentChange(1);
      }, methods: { getImgNaturalFimensions: function getImgNaturalFimensions(e) {
          var t = new Image();return t.src = e.src, this.onload(t);
        }, onload: function onload(e) {
          var t = 0,
              i = 0;return t = e.width, i = e.height, { nWidth: t, nHeight: i };
        }, setClassSize: function setClassSize(e, t) {
          document.getElementsByClassName(e)[0].style.height = t + "px";
        }, handleCurrentChange: function handleCurrentChange(e) {
          for (var t = (e - 1) * this.PageSize, i = this.coursesections.length - t, s = 0, n = this.CourseCurrentSection.length, o = 0; o < n; o++) {
            this.CourseCurrentSection[o] = [], this.CourseCurrentSection.length--;
          }if (i > this.PageSize) {
            for (var l = t + this.PageSize; t < l; t++) {
              a.default.set(this.CourseCurrentSection, s, this.coursesections[t]), s++;
            }console.log(this.CourseCurrentSection);
          } else {
            for (; t < this.coursesections.length; t++) {
              a.default.set(this.CourseCurrentSection, s, this.coursesections[t]), s++;
            }console.log(this.CourseCurrentSection);
          }
        } } };
  }, nejl: function nejl(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("n+cQ"),
        n = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(s);t.default = { components: { ElCol: n.default }, name: "Body", data: function data() {
        return { teachernames: [{ name: "张宪军", professionaltitles: "中医副教授" }] };
      }, mounted: function mounted() {
        var e = { src: "../static/images/2.jpg" };this.getImgNaturalFimensions(e);var t = {};t = this.getImgNaturalFimensions(e);var i = document.body.clientWidth,
            s = parseInt(t.nHeight / t.nWidth * i);this.setClassSize("TeacherNav", s);
      }, methods: { getImgNaturalFimensions: function getImgNaturalFimensions(e) {
          var t = new Image();return t.src = e.src, this.onload(t);
        }, onload: function onload(e) {
          var t = 0,
              i = 0;return t = e.width, i = e.height, { nWidth: t, nHeight: i };
        }, setClassSize: function setClassSize(e, t) {
          document.getElementsByClassName(e)[0].style.height = t + "px";
        } } };
  }, nngy: function nngy(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { name: "Top", data: function data() {
        return { teachPoints: ["经络系统", "腧穴主治特点", "腧穴定位方法", "经脉循行", "刺针起源于发展", "进针法", "行针手法", "补泻手法", "拔罐法"] };
      }, mounted: function mounted() {
        var e = document.getElementsByTagName("img")[0],
            t = {};t = this.getImgNaturalFimensions(e);var i = document.body.clientWidth,
            s = parseInt(t.nHeight / t.nWidth * i);this.setClassSize("HeadBackground", s);
      }, methods: { getImgNaturalFimensions: function getImgNaturalFimensions(e, t) {
          var i = 0,
              s = 0;if (e.naturalWidth) return i = e.naturalWidth, s = e.naturalHeight, { nWidth: i, nHeight: s };var n = new Image();return n.src = e.src, this.onload(n);
        }, onload: function onload(e) {
          var t = 0,
              i = 0;return t = e.width, i = e.height, { nWidth: t, nHeight: i };
        }, setClassSize: function setClassSize(e, t) {
          document.getElementsByClassName(e)[0].style.height = t + "px";
        } } };
  }, oE6i: function oE6i(e, t, i) {
    "use strict";
    function s(e) {
      i("NyQD");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("hM/t"),
        a = i.n(n),
        o = i("69Cz"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, "data-v-0ea9daa0", null);t.default = r.exports;
  }, oLP6: function oLP6(e, t) {}, pd9j: function pd9j(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement;return (e._self._c || t)("div", { directives: [{ name: "show", rawName: "v-show", value: e.active, expression: "active" }], staticClass: "el-tab-pane" }, [e._t("default")], 2);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, quW5: function quW5(e, t, i) {
    "use strict";
    function s(e) {
      i("J9aY");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("nejl"),
        a = i.n(n),
        o = i("NBUM"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, "data-v-cf89cef2", null);t.default = r.exports;
  }, qxU2: function qxU2(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("div", { attrs: { id: "app" } }, [i("div", { staticClass: "container" }, [i("div", { staticClass: "__cov-video-container", on: { mouseenter: e.mouseEnterVideo, mouseleave: e.mouseLeaveVideo } }, [i("video", { staticClass: "__cov-video", class: { "hide-cursor": !e.state.contrlShow }, attrs: { poster: e.options.poster } }, e._l(e.sources, function (e) {
        return i("source", { attrs: { src: e.src, type: e.type } });
      })), e._v(" "), i("div", { directives: [{ name: "show", rawName: "v-show", value: e.state.contrlShow, expression: "state.contrlShow" }], staticClass: "__cov-contrl-content", attrs: { transition: "fade" } }, [i("button", { staticClass: "__cov-contrl-play-btn", on: { click: e.play } }, [i("svg", { directives: [{ name: "show", rawName: "v-show", value: !e.state.playing, expression: "!state.playing" }], staticClass: "__cov-contrl-play-btn-icon", attrs: { viewBox: "0 0 47 57", version: "1.1", xmlns: "http://www.w3.org/2000/svg" } }, [i("title", [e._v("Triangle 1")]), e._v(" "), i("desc", [e._v("Created with Sketch.")]), e._v(" "), i("defs"), e._v(" "), i("g", { attrs: { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" } }, [i("polygon", { attrs: { id: "Triangle-1", stroke: "#FFFFFF", fill: "#FFFFFF", points: "1 56 1 1 47 28.5" } })])]), e._v(" "), i("svg", { directives: [{ name: "show", rawName: "v-show", value: e.state.playing, expression: "state.playing" }], staticClass: "__cov-contrl-play-btn-icon", attrs: { viewBox: "0 0 15 22", version: "1.1", xmlns: "http://www.w3.org/2000/svg" } }, [i("title", [e._v("Combined Shape")]), e._v(" "), i("desc", [e._v("Created with Sketch.")]), e._v(" "), i("defs", [i("path", { attrs: { d: "M0,0.979149244 L5,0.979149244 L5,22 L0,22 L0,0.979149244 Z M10,0.979149244 L15,0.979149244 L15,22 L10,22 L10,0.979149244 Z", id: "path-1" } }), e._v(" "), i("mask", { attrs: { id: "mask-2", maskContentUnits: "userSpaceOnUse", maskUnits: "objectBoundingBox", x: "0", y: "0", width: "15", height: "21.0208508", fill: "white" } }, [i("use", { attrs: { "xlink:href": "#path-1" } })])]), e._v(" "), i("g", { attrs: { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" } }, [i("use", { attrs: { id: "Combined-Shape", stroke: "#FFFFFF", mask: "url(#mask-2)", "stroke-width": "2", fill: "#FFFFFF", "xlink:href": "#path-1" } })])])]), e._v(" "), i("div", { staticClass: "__cov-contrl-video-slider", on: { click: e.slideClick, mousedown: e.videoMove } }, [i("div", { staticClass: "__cov-contrl-video-inner", style: { transform: "translate3d(" + e.video.pos.current + "px, 0, 0)" } }), e._v(" "), i("div", { staticClass: "__cov-contrl-video-rail" }, [i("div", { staticClass: "__cov-contrl-video-rail-inner", style: { transform: "translate3d(" + e.video.loaded + "%, 0, 0)" } })])]), e._v(" "), i("div", { staticClass: "__cov-contrl-video-time" }, [i("span", { staticClass: "__cov-contrl-video-time-text" }, [e._v(e._s(e.video.displayTime))])]), e._v(" "), i("div", { staticClass: "__cov-contrl-vol-box" }, [i("button", { staticClass: "__cov-contrl-play-btn", on: { click: e.volMuted } }, [i("svg", { staticClass: "__cov-contrl-vol-btn-icon", attrs: { viewBox: "0 0 41 44", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" } }, [i("title", [e._v("vol")]), e._v(" "), i("desc", [e._v("Created with Sketch.")]), e._v(" "), i("defs", [i("path", { attrs: { d: "M8.61522369,12 L20,0.615223689 L20,37.3847763 L8.61522369,26 L1.99201702,26 C0.891856397,26 0,25.1029399 0,23.9941413 L0,14.0058587 C0,12.8980535 0.900176167,12 1.99201702,12 L8.61522369,12 L8.61522369,12 Z", id: "cov-vol" } })]), e._v(" "), i("g", { attrs: { id: "Page-1", stroke: "none", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" } }, [i("g", { attrs: { id: "vol", transform: "translate(2.000000, 3.000000)" } }, [i("g", { attrs: { id: "cov-vol-icon" } }, [i("g", { attrs: { id: "Combined-Shape-Clipped" } }, [i("path", { directives: [{ name: "show", rawName: "v-show", value: e.volume.percent > 1 && !e.volume.muted, expression: "volume.percent > 1 && !volume.muted" }], attrs: { d: "M25,29.5538997 C28.4589093,27.6757536 31.2629093,23.2984641 31.2629093,19.7769499 C31.2629093,16.2554357 28.4589093,11.8781461 25,10", id: "vol-range-2", stroke: "#FFFFFF" } }), e._v(" "), i("path", { directives: [{ name: "show", rawName: "v-show", value: e.volume.percent > 70 && !e.volume.muted, expression: "volume.percent > 70 && !volume.muted" }], attrs: { d: "M28,35.5538997 C33.5816016,32.5231573 38.1063837,25.4595762 38.1063837,19.7769499 C38.1063837,14.0943235 33.5816016,7.03074247 28,4", id: "vol-range-2", stroke: "#FFFFFF" } }), e._v(" "), i("mask", { attrs: { id: "mask-2", fill: "white" } }, [i("use", { attrs: { "xlink:href": "#cov-vol" } })]), e._v(" "), i("use", { attrs: { id: "vol-path", stroke: "#FFFFFF", "stroke-width": "3", "xlink:href": "#cov-vol" } }), e._v(" "), i("g", { attrs: { id: "Combined-Shape", mask: "url(#mask-2)", stroke: "#FFFFFF", "stroke-width": "2", fill: "#FFFFFF" } }, [i("path", { attrs: { d: "M8.61522369,12 L20,0.615223689 L20,37.3847763 L8.61522369,26 L1.99201702,26 C0.891856397,26 0,25.1029399 0,23.9941413 L0,14.0058587 C0,12.8980535 0.900176167,12 1.99201702,12 L8.61522369,12 L8.61522369,12 Z", id: "cov-vol" } })])])])])])])]), e._v(" "), i("div", { staticClass: "__cov-contrl-vol-slider", on: { click: e.volSlideClick, mousedown: e.volMove } }, [i("div", { staticClass: "__cov-contrl-vol-inner", style: { transform: "translate3d(" + e.volume.pos.current + "px, 0, 0)" } }), e._v(" "), i("div", { staticClass: "__cov-contrl-vol-rail" })])]), e._v(" "), i("button", { staticClass: "__cov-contrl-play-btn", on: { click: e.fullScreen } }, [i("svg", { staticClass: "__cov-contrl-vol-btn-icon", attrs: { viewBox: "0 0 33 33", version: "1.1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink" } }, [i("defs"), e._v(" "), i("g", { attrs: { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" } }, [i("path", { attrs: { d: "M31.1682064,22 L31.1682064,31.0073537 L22,31.0073537 M22,1 L31.0073537,1 L31.0073537,10.1682064 M1,10.0073537 L1,1 L10.1682064,1 M10.0073537,31.1682064 L1,31.1682064 L1,22", id: "Combined-Shape", stroke: "#FFFFFF", "stroke-width": "2" } })])])])])])])]);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, r3Np: function r3Np(e, t, i) {
    "use strict";
    var s = function s() {
      var e = this,
          t = e.$createElement,
          i = e._self._c || t;return i("transition", { attrs: { name: e.closeTransition ? "" : "el-zoom-in-center" } }, [i("span", { staticClass: "el-tag", class: [e.type ? "el-tag--" + e.type : "", { "is-hit": e.hit }], style: { backgroundColor: e.color } }, [e._t("default"), e._v(" "), e.closable ? i("i", { staticClass: "el-tag__close el-icon-close", on: { click: e.handleClose } }) : e._e()], 2)]);
    },
        n = [],
        a = { render: s, staticRenderFns: n };t.a = a;
  }, tPTL: function tPTL(e, t, i) {
    "use strict";
    function s(e) {
      i("e/TW");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = i("klp4"),
        a = i.n(n),
        o = i("qxU2"),
        l = i("46Yf"),
        c = s,
        r = l(a.a, o.a, !1, c, null, null);t.default = r.exports;
  }, wwRj: function wwRj(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i("ejYv"),
        n = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(s),
        a = i("Geyd");t.default = { name: "ElMenu", componentName: "ElMenu", mixins: [n.default], provide: function provide() {
        return { rootMenu: this };
      }, components: { "el-menu-collapse-transition": { functional: !0, render: function render(e, t) {
            return e("transition", { props: { mode: "out-in" }, on: { beforeEnter: function beforeEnter(e) {
                  e.style.opacity = .2;
                }, enter: function enter(e) {
                  (0, a.addClass)(e, "el-opacity-transition"), e.style.opacity = 1;
                }, afterEnter: function afterEnter(e) {
                  (0, a.removeClass)(e, "el-opacity-transition"), e.style.opacity = "";
                }, beforeLeave: function beforeLeave(e) {
                  e.dataset || (e.dataset = {}), (0, a.hasClass)(e, "el-menu--collapse") && ((0, a.removeClass)(e, "el-menu--collapse"), e.dataset.oldOverflow = e.style.overflow, e.dataset.scrollWidth = e.scrollWidth, (0, a.addClass)(e, "el-menu--collapse")), e.style.width = e.scrollWidth + "px", e.style.overflow = "hidden";
                }, leave: function leave(e) {
                  (0, a.hasClass)(e, "el-menu--collapse") ? ((0, a.addClass)(e, "horizontal-collapse-transition"), e.style.width = e.dataset.scrollWidth + "px") : ((0, a.addClass)(e, "horizontal-collapse-transition"), e.style.width = "64px");
                }, afterLeave: function afterLeave(e) {
                  (0, a.removeClass)(e, "horizontal-collapse-transition"), (0, a.hasClass)(e, "el-menu--collapse") ? e.style.width = e.dataset.scrollWidth + "px" : e.style.width = "64px", e.style.overflow = e.dataset.oldOverflow;
                } } }, t.children);
          } } }, props: { mode: { type: String, default: "vertical" }, defaultActive: { type: String, default: "" }, defaultOpeneds: Array, theme: { type: String, default: "light" }, uniqueOpened: Boolean, router: Boolean, menuTrigger: { type: String, default: "hover" }, collapse: Boolean }, data: function data() {
        return { activeIndex: this.defaultActive, openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [], items: {}, submenus: {} };
      }, watch: { defaultActive: function defaultActive(e) {
          var t = this.items[e];t ? (this.activeIndex = t.index, this.initOpenedMenu()) : this.activeIndex = "";
        }, defaultOpeneds: function defaultOpeneds(e) {
          this.openedMenus = e;
        }, collapse: function collapse(e) {
          e && (this.openedMenus = []);
        } }, methods: { addItem: function addItem(e) {
          this.$set(this.items, e.index, e);
        }, removeItem: function removeItem(e) {
          delete this.items[e.index];
        }, addSubmenu: function addSubmenu(e) {
          this.$set(this.submenus, e.index, e);
        }, removeSubmenu: function removeSubmenu(e) {
          delete this.submenus[e.index];
        }, openMenu: function openMenu(e, t) {
          var i = this.openedMenus;-1 === i.indexOf(e) && (this.uniqueOpened && (this.openedMenus = i.filter(function (e) {
            return -1 !== t.indexOf(e);
          })), this.openedMenus.push(e));
        }, closeMenu: function closeMenu(e) {
          this.openedMenus.splice(this.openedMenus.indexOf(e), 1);
        }, handleSubmenuClick: function handleSubmenuClick(e) {
          var t = e.index,
              i = e.indexPath;-1 !== this.openedMenus.indexOf(t) ? (this.closeMenu(t), this.$emit("close", t, i)) : (this.openMenu(t, i), this.$emit("open", t, i));
        }, handleItemClick: function handleItemClick(e) {
          var t = e.index,
              i = e.indexPath;this.activeIndex = e.index, this.$emit("select", t, i, e), ("horizontal" === this.mode || this.collapse) && (this.openedMenus = []), this.router && this.routeToItem(e);
        }, initOpenedMenu: function initOpenedMenu() {
          var e = this,
              t = this.activeIndex,
              i = this.items[t];if (i && "horizontal" !== this.mode && !this.collapse) {
            i.indexPath.forEach(function (t) {
              var i = e.submenus[t];i && e.openMenu(t, i.indexPath);
            });
          }
        }, routeToItem: function routeToItem(e) {
          var t = e.route || e.index;try {
            this.$router.push(t);
          } catch (e) {
            console.error(e);
          }
        } }, mounted: function mounted() {
        this.initOpenedMenu(), this.$on("item-click", this.handleItemClick), this.$on("submenu-click", this.handleSubmenuClick);
      } };
  } }, ["NHnr"]);
//# sourceMappingURL=app.2d5b0449baae437fef86.js.map
//# sourceMappingURL=app.2d5b0449baae437fef86.js.map