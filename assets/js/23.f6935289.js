(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{225:function(e,t,r){"use strict";r.r(t);var s=r(28),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"浏览器eventloop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器eventloop"}},[e._v("#")]),e._v(" 浏览器eventLoop")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("微任务")]),e._v(" "),r("p",[e._v("promise.then、MutationObserver（监听dom变化，等待本轮dom变化完成后会执行）、process.nextTick。")])]),e._v(" "),r("li",[r("p",[e._v("宏任务")]),e._v(" "),r("p",[e._v("script、ajax、事件、requestFrameAnimation、setTimeout、setInterval、setImmediate（ie）、I/O操作、UI rendering。")])])]),e._v(" "),r("p",[e._v("js是单线程的，当script执行完毕后，会先将微任务队列清空，清空后会执行宏任务；宏任务执行完毕后再次清空微任务，无限循环，直到浏览器关闭销毁。")]),e._v(" "),r("h3",{attrs:{id:"node事件环"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node事件环"}},[e._v("#")]),e._v(" Node事件环")]),e._v(" "),r("p",[e._v("给每个宏任务都配置一个队列 timer poll check(每个执行完后清空一次微任务)")])])}),[],!1,null,null,null);t.default=n.exports}}]);