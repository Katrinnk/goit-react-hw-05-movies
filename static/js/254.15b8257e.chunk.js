"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[254],{913:function(e,t,n){n.d(t,{Hg:function(){return u},TP:function(){return d},lk:function(){return p},tx:function(){return m},zv:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="109bcd47cacae0c8d94626fc0a0277fa";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},254:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(913),u=n(510),o=n(867),p=(0,o.zo)("div")((function(){return{"& img":{width:"90vh"}}})),l=n(184),d=function(e){var t=e.movie;return(0,l.jsxs)(p,{className:"card",children:[(0,l.jsx)("img",{className:"card-img-top",src:t.backdrop_path?"https://image.tmdb.org/t/p/w500/".concat(t.backdrop_path):"https://cdn2.iconfinder.com/data/icons/admin-tools-2/25/image2-1024.png",alt:t.title}),(0,l.jsxs)("div",{className:"card-body",children:[(0,l.jsx)("h2",{className:"card-title",children:t.title}),(0,l.jsxs)("p",{className:"card-text",children:["Release date: ",t.release_date]}),(0,l.jsx)("h3",{className:"card-title",children:"Overview"}),(0,l.jsx)("p",{className:"card-text",children:t.overview}),(0,l.jsx)("h4",{className:"card-title",children:"Genres"}),(0,l.jsx)("ul",{children:t.genres.map((function(e){return(0,l.jsx)("li",{className:"card-text",children:e.name},e.id)}))})]})]})},f=n(791),h=n(689),v=n(87),m=(0,o.zo)("div")((function(){return{marginBottom:"20px","& a":{textDecoration:"none",color:"black",fontSize:"20px",marginLeft:"20px","&.active":{textDecoration:"underline"}}}})),x=function(){var e,t=(0,h.UO)().movieId,n=(0,f.useState)(null),c=(0,a.Z)(n,2),o=c[0],p=c[1],x=(0,f.useState)(""),j=(0,a.Z)(x,2),k=j[0],w=j[1],b=(0,f.useState)(!1),g=(0,a.Z)(b,2),y=g[0],Z=g[1],_=(0,h.s0)(),N=(0,h.TH)(),S=(0,f.useRef)(null!==(e=N.state)&&void 0!==e?e:"/movies");(0,f.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),w(""),e.next=5,(0,i.TP)(t);case 5:n=e.sent,r=n.data,p(r),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),a=e.t0.message,w(a);case 14:return e.prev=14,Z(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{className:"btn btn-outline-secondary mb-3",onClick:function(){_(S.current)},children:"\u2b05 Go back"}),k&&(0,l.jsx)("h1",{children:k}),y&&(0,l.jsx)(u.Z,{}),o&&(0,l.jsx)(d,{movie:o}),(0,l.jsxs)(m,{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)(v.OL,{to:"cast",children:"Cast"}),(0,l.jsx)(v.OL,{to:"reviews",children:"Reviews"})]}),(0,l.jsx)(f.Suspense,{fallback:(0,l.jsx)(u.Z,{}),children:(0,l.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=254.15b8257e.chunk.js.map