"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[272],{272:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),i=r(757),u=r.n(i),s=r(243),c=r(489),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",e.next=3,s.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:c.$,query:t}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=o,h=r(966),p=r(686),d=r(791),v=r(87),f=r(689),x=r(184),j=function(){var e,t=(0,d.useState)(null),r=(0,a.Z)(t,2),i=r[0],s=r[1],c=(0,v.useSearchParams)(),o=(0,a.Z)(c,2),j=o[0],m=o[1],g=(0,d.useState)("idle"),k=(0,a.Z)(g,2),b=k[0],w=k[1],C=(0,d.useState)(""),y=(0,a.Z)(C,2),S=y[0],Z=y[1],_=(0,f.TH)(),M=null!==(e=j.get("name"))&&void 0!==e?e:"",L=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w("pending"),""!==M){e.next=5;break}return p.Report.info("Please enter your search query"),w("idle"),e.abrupt("return");case 5:return e.prev=5,e.next=8,l(M);case 8:if(0!==(t=e.sent).length){e.next=13;break}return w("idle"),p.Report.failure("No results found"),e.abrupt("return");case 13:0!==t.length&&(s(t),w("resolved")),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),Z(e.t0),w("rejected");case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(){return e.apply(this,arguments)}}(),q=(0,d.useMemo)((function(){return i?i.filter((function(e){return e.title.toLowerCase().includes(M.toLowerCase().trim())})):null}),[i,M]),P=function(e){m(e?{name:e}:{},{keep:!0,replace:!0})};return"idle"===b?(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Movies"}),(0,x.jsx)("input",{type:"text",value:M||"",onChange:function(e){return P(e.target.value||void 0)}}),(0,x.jsx)("button",{onClick:L,children:"Search"}),(0,x.jsx)(f.j3,{})]}):"pending"===b?(0,x.jsx)(h.a,{}):"rejected"===b?(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Movies"}),(0,x.jsx)("input",{type:"text",value:M||"",onChange:function(e){return P(e.target.value||void 0)}}),(0,x.jsx)("button",{onClick:L,children:"Search"}),(0,x.jsx)("h2",{children:S}),(0,x.jsx)(f.j3,{})]}):"resolved"===b?(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"Movies"}),(0,x.jsx)("input",{type:"text",value:M||"",onChange:function(e){return P(e.target.value||void 0)}}),(0,x.jsx)("button",{onClick:L,children:"Search"}),q&&i.map((function(e){return(0,x.jsxs)("li",{children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title}),(0,x.jsx)(v.Link,{to:"/movies/".concat(e.id),state:{from:_},children:e.title})]},e.id)})),(0,x.jsx)(f.j3,{})]}):void 0}}}]);
//# sourceMappingURL=272.972d7697.chunk.js.map