"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{489:function(e,n,t){t.d(n,{$:function(){return r}});var r="7eb5059eee6f318692a5fcd674d6cc43"},42:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r,a,i,c,o=t(861),s=t(439),u=t(757),l=t.n(u),d=t(243),f=t(489),p=function(){var e=(0,o.Z)(l().mark((function e(n){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(n,"/reviews"),e.next=3,d.Z.get(t,{params:{api_key:f.$}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=p,h=t(966),v=t(686),x=t(791),g=t(689),Z=t(168),w=t(444),j=w.ZP.ul(r||(r=(0,Z.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n"]))),k=w.ZP.li(a||(a=(0,Z.Z)(["\n\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 1rem;\n    margin-right: 1rem;\n    text-decoration: none;\n    color: black;\n    font-size: 1.2rem;\n"]))),b=w.ZP.h3(i||(i=(0,Z.Z)(["\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n"]))),y=w.ZP.p(c||(c=(0,Z.Z)(["\n    text-align: center;\n    font-size: 1.2rem;\n    margin-bottom: 1rem;\n"]))),_=t(184),P=function(){var e=(0,g.UO)().movieId,n=(0,x.useState)(null),t=(0,s.Z)(n,2),r=t[0],a=t[1],i=(0,x.useState)(""),c=(0,s.Z)(i,2),u=c[0],d=c[1],f=(0,x.useState)("idle"),p=(0,s.Z)(f,2),Z=p[0],w=p[1];return(0,x.useEffect)((function(){if(e){w("pending");var n=function(){var n=(0,o.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m(e);case 3:0===(t=n.sent).length&&(w("idle"),v.Report.info("No reviews found")),0!==t.length&&(a(t),w("resolved")),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),d(n.t0),w("rejected");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[e]),"idle"===Z?(0,_.jsx)(_.Fragment,{children:" "}):"pending"===Z?(0,_.jsx)(h.a,{}):"rejected"===Z?(0,_.jsx)("p",{children:u}):"resolved"===Z?(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(j,{children:r.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,_.jsxs)(k,{children:[(0,_.jsx)(b,{children:t}),(0,_.jsx)(y,{children:r})]},n)}))})}):void 0}}}]);
//# sourceMappingURL=42.4397a2e2.chunk.js.map