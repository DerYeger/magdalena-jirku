(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{561:function(t,e,n){"use strict";function r(title,t){var image="https://magdalena-jirku.at/og-logo.png",e="".concat(title," · Magdalena Jirku");return[{hid:"description",name:"description",content:t},{hid:"twitter:title",name:"twitter:title",content:e},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:e},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"og:title",property:"og:title",content:e},{hid:"og:description",property:"og:description",content:t},{hid:"og:image",property:"og:image",content:image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:image},{hid:"og:image:alt",property:"og:image:alt",content:e}]}n.d(e,"a",(function(){return r}))},564:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return l}));var r=n(134),o={text:"mdi-home",to:r.c.home.to},c={text:r.c.hobby.title,to:r.c.hobby.to},d={text:r.c.projects.title,to:r.c.projects.to},m={text:r.c.about.title,to:r.c.about.to};function l(t,e){var n;return{text:null!==(n=t.shortTitle)&&void 0!==n?n:t.title,to:Object(r.a)(t,e).path}}},605:function(t,e,n){"use strict";n.r(e);var r=n(34),o=n(15),c=(n(65),n(48)),d=n(134),m=n(564),meta=n(561),l=Object(c.a)({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r("".concat(n.i18n.locale,"/about")).fetch();case 3:return o=e.sent,e.abrupt("return",{document:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){var title=this.$t(d.c.about.title),t=this.$t("meta.description");return{title:title,meta:Object(r.a)(Object(meta.a)(title,t))}},mounted:function(){this.$store.commit("setBreadcrumbs",[m.d,m.a])}}),h=n(35),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("nuxt-content",{attrs:{document:t.document}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);