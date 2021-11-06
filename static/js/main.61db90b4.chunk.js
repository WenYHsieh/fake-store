(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{60:function(n,t,e){"use strict";e.r(t);var o,r,i,c,a,d,s,l,p=e(0),u=e.n(p),b=e(26),h=e.n(b),f=e(5),g=e(3),j=e(4),x=e(14),O=e.n(x),w=O.a.create({baseURL:"https://fakestoreapi.com"}),m=e(1),v=j.a.div(o||(o=Object(g.a)(["\n  width: 180px;\n  height: 200px;\n  border: 1px solid gray;\n  margin: 20px 10px;\n  overflow: hidden;\n  &:before {\n    content: '';\n    background-color: none;\n    transition: 0.5s;\n  }\n  &:hover {\n    cursor: pointer;\n    &:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: rgba(255, 255, 255, 0.3);\n    }\n  }\n  position: relative;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n"]))),y=j.a.img(r||(r=Object(g.a)(["\n  width: 100%;\n  object-fit: cover;\n  ","\n"])),(function(n){return n.$isInfoWindow&&"\n    width: 50%\n  "})),I=j.a.div(i||(i=Object(g.a)(["\n  width: 100%;\n  height: 20px;\n  color: black;\n  font-weight: bold;\n  padding: 5px;\n  ",";\n"])),(function(n){return!n.$isInfoWindow&&"\n    width: 100%;\n    height: 35px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: wrap;\n    position: absolute;\n    bottom: 10px;\n    padding: 3px;\n    background-color: rgba(0, 0, 0, 0.6);\n    color: white;\n  "})),k=j.a.div(c||(c=Object(g.a)(["\n  width: 450px;\n  height: 500px;\n  border: 1px solid gray;\n  position: fixed;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background-color: white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: none;\n  padding: 10px;\n  ","\n"])),(function(n){return n.$isProductInfoOpen&&"display:block;z-index: 10;"})),$=j.a.div(a||(a=Object(g.a)(["\n  ","\n"])),(function(n){return n.$isInfoWindow&&"\n    padding:10px;\n    height: 50%;\n    display: flex;\n    border-bottom: 1px solid gray\n    \n  "})),P=j.a.div(d||(d=Object(g.a)(["\n  width: 80%;\n  height: 30%;\n  margin: 20px auto 0px auto;\n  overflow: scroll;\n"]))),C=j.a.div(s||(s=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-left: 10px;\n  color: gray;\n"]))),A=j.a.div(l||(l=Object(g.a)(["\n  width: 10px;\n  height: 10px;\n  margin-bottom: 10px;\n  position: relative;\n  top: 5px;\n  left: 10px;\n  transition: 0.5s;\n  font-size: 20px;\n  &:hover {\n    cursor: pointer;\n    color: gray;\n  }\n"])));function S(n){var t=n.product,e=n.setIsProductInfoOpen,o=n.isProductInfoOpen,r=Object(p.useState)(null),i=Object(f.a)(r,2),c=i[0],a=i[1],d=function(n){if("boolean"===typeof n)return e(!1);a(parseInt(n.target.id)),e(!o)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(v,{onClick:function(n){d(n)},id:t.id,children:[Object(m.jsx)(y,{src:t.image}),Object(m.jsx)(I,{id:t.id,children:t.title})]}),Object(m.jsxs)(k,{$isProductInfoOpen:o&&t.id===c,children:[Object(m.jsx)(A,{onClick:function(){return d(!1)},children:"X"}),Object(m.jsxs)($,{$isInfoWindow:!0,children:[Object(m.jsx)(y,{src:t.image,$isInfoWindow:!0}),Object(m.jsxs)(C,{children:[Object(m.jsx)(I,{$isInfoWindow:!0,children:t.title}),Object(m.jsxs)("div",{children:["Price: $ ",t.price,Object(m.jsx)("br",{}),"In stock: ",t.rating.count]})]})]}),Object(m.jsx)(P,{$isInfoWindow:!0,children:t.description})]})]})}var W,z,L,E,M,D,F,J,R,N,T,U,K,B,H,X,Y=e(30),_=e(7);function q(n){var t=n.setIsLoading,e=Object(p.useState)([]),o=Object(f.a)(e,2),r=o[0],i=o[1],c=[0,160,250,30,312,367,486,535,662,669],a=Object(p.useState)(0),d=Object(f.a)(a,2),s=d[0],l=d[1],u=[];Object(p.useEffect)((function(){t(!0),c.forEach((function(n){(function(n){return O.a.get("https://picsum.photos/id/".concat(n,"/info"))})(n).then((function(t){u.push({id:n,url:t.data.download_url})})).catch((function(){}))})),i(u),t(!1)}),[]);return{adIdArr:c,handleCurrentAd:function(n){n.target.getAttribute("id")&&l(parseInt(n.target.getAttribute("id")));var t=c.indexOf(s);"left"!==n.target.getAttribute("name")&&"left"!==n.target.parentNode.getAttribute("name")||l(t>0?parseInt(c[t-1]):parseInt(c[9])),"right"!==n.target.getAttribute("name")&&"right"!==n.target.parentNode.getAttribute("name")||l(t<9?parseInt(c[t+1]):parseInt(c[0]))},productAds:r,currentAd:s}}function G(n){var t=n.setProductInfos,e=n.setIsLoading;return{handleFilter:function(n){var o,r=n.target.getAttribute("name");e(!0),(o=r,w.get("products/category/".concat(o))).then((function(n){t(n.data),e(!1)})).catch((function(){e(!1),alert("Oops, something went wrong!")}))}}}var Q=j.a.div(W||(W=Object(g.a)(["\n  background-color: #f4f5f4;\n"]))),V=j.a.div(z||(z=Object(g.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]))),Z=j.a.div(L||(L=Object(g.a)(["\n  background-color: #e2e2e2;\n  padding: 20px 10px;\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  ","\n"])),(function(n){return!n.$isProductInfoOpen&&"z-index: 3;"})),nn=j.a.input(E||(E=Object(g.a)(["\n  width: 80%;\n  height: 40px;\n  padding: 0px;\n  color: black;\n  border: none;\n  padding-left: 10px;\n  &:focus {\n    outline: none;\n  }\n"]))),tn=j.a.div(M||(M=Object(g.a)(["\n  height: 50vh;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  position: relative;\n"]))),en=j.a.img(D||(D=Object(g.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  margin: 0 auto;\n"]))),on=j.a.div(F||(F=Object(g.a)(["\n  position: absolute;\n  bottom: 10px;\n  display: flex;\n"]))),rn=j.a.div(J||(J=Object(g.a)(["\n  width: 10px;\n  height: 10px;\n  margin: 0 5px;\n  border-radius: 50%;\n  background-color: #e2e2e2;\n  &:hover {\n    cursor: pointer;\n    background-color: gray;\n  }\n  ","\n"])),(function(n){return n.$active&&"background-color: gray;"})),cn=j.a.div(R||(R=Object(g.a)(["\n  background-color: #e2e2e2;\n  height: 5vh;\n  margin: 10px 0px;\n  padding: 10px;\n  line-height: 5vh;\n  color: gray;\n  font-weight: bold;\n  text-align: center;\n  font-size: 20px;\n"]))),an=j.a.div(N||(N=Object(g.a)(["\n  display: flex;\n  @media screen and (max-width: 500px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),dn=j.a.div(T||(T=Object(g.a)(["\n  margin: 10px 20px 0px 0px;\n"]))),sn=j.a.div(U||(U=Object(g.a)(["\n  width: 150px;\n  padding: 10px;\n  height: 30px;\n  text-align: center;\n  color: gray;\n  line-height: 30px;\n  &:hover {\n    cursor: pointer;\n    background-color: #e2e2e2;\n  }\n"]))),ln=j.a.div(K||(K=Object(g.a)(["\n  display: flex;\n  width: 90%;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),pn=j.a.div(B||(B=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n  ","\n"])),(function(n){return n.$isProductInfoOpen&&"display:block"})),un=Object(j.a)(Y.a)(H||(H=Object(g.a)(["\n  width: 30px;\n  height: 40px;\n  padding: 0 10px;\n  background-color: white;\n  ","\n  ","\n  ","\n  ","\n"])),(function(n){return(n.$arrowLeft||n.$arrowRight)&&"\n    position:absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    background-color: rgba(0,0,0,0.1);\n    padding:10px;\n    transition: .5s;\n    &:hover{\n      color: #f4f5f4;\n      background-color: rgba(0,0,0,0.3);\n    }\n  "}),(function(n){return n.$arrowRight&&"\n    right: 10px;\n  "}),(function(n){return n.$arrowLeft&&"\n    left: 10px;\n  "}),(function(n){return n.$arrowUp&&"  \n    position: fixed;\n    bottom: 150px;\n    right: 20px;\n    background-color: transparent\n  "})),bn=j.a.div(X||(X=Object(g.a)(["\n  background-color: rgba(0, 0, 0, 0.3);\n  color: white;\n  font-size: 40px;\n  position: fixed;\n  padding: 10px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 20;\n"])));var hn=function(){var n=Object(p.useState)(!1),t=Object(f.a)(n,2),e=t[0],o=t[1],r=Object(p.useState)([]),i=Object(f.a)(r,2),c=i[0],a=i[1],d=function(){var n=new Date("Jan 1, 2022 0:0:0").getTime(),t=Object(p.useState)(""),e=Object(f.a)(t,2),o=e[0],r=e[1];return Object(p.useEffect)((function(){var t=setInterval((function(){var e=(new Date).getTime(),o=n-e,i=Math.floor(o/864e5),c=Math.floor(o%864e5/36e5),a=Math.floor(o%36e5/6e4),d=Math.floor(o%6e4/1e3);r("".concat(i,"d ").concat(c,"h ").concat(a,"m ").concat(d,"s")),o<0&&(clearInterval(t),r("Happy new year~"))}),1e3);return function(){return clearInterval(t)}}),[n]),{countDown:o}}(),s=d.countDown,l=Object(p.useState)(!1),u=Object(f.a)(l,2),b=u[0],h=u[1],g=function(n){var t=n.productInfos,e=Object(p.useState)(""),o=Object(f.a)(e,2),r=o[0],i=o[1],c=Object(p.useState)([]),a=Object(f.a)(c,2),d=a[0],s=a[1];return{handleKeyWordChange:function(n){i(n.target.value)},handleSearch:function(){s(t.filter((function(n){return-1!==n.title.toLowerCase().indexOf(r.toLowerCase())})))},handleClearSearch:function(){i("")},keyWord:r,filteredProducts:d}}({productInfos:c}),j=g.handleKeyWordChange,x=g.handleSearch,O=g.handleClearSearch,v=g.keyWord,y=g.filteredProducts,I=q({setIsLoading:h}),k=I.adIdArr,$=I.handleCurrentAd,P=I.productAds,C=I.currentAd,A=G({setProductInfos:a,setIsLoading:h}).handleFilter;return Object(p.useEffect)((function(){h(!0),w.get("products").then((function(n){a(n.data),h(!1)})).catch((function(){h(!1),alert("Oops, something went wrong!")}))}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(Q,{children:Object(m.jsxs)(V,{children:[b&&Object(m.jsx)(bn,{children:" Now Loading ..."}),Object(m.jsxs)(Z,{$isProductInfoOpen:e,children:[Object(m.jsx)(un,{icon:_.d,size:"lg",color:"gray",onClick:x}),Object(m.jsx)(nn,{placeholder:"please input keyword ...",onChange:function(n){j(n)},value:v}),Object(m.jsx)(un,{icon:_.e,size:"lg",color:"gray",onClick:O})]}),Object(m.jsxs)(tn,{onClick:function(n){$(n)},children:[Object(m.jsx)(un,{icon:_.b,size:"5x",color:"gray",$arrowLeft:!0,name:"left"}),Object(m.jsx)(en,{src:0!==P.length?P.find((function(n){return n.id===C})).url:null}),Object(m.jsx)(on,{children:k.map((function(n){return Object(m.jsx)(rn,{id:n,$active:n===C},n)}))}),Object(m.jsx)(un,{icon:_.c,size:"5x",color:"gray",$arrowRight:!0,name:"right"})]}),Object(m.jsx)(cn,{children:s}),Object(m.jsxs)(an,{children:[Object(m.jsxs)(dn,{onClick:function(n){A(n)},children:[Object(m.jsx)(sn,{name:"electronics",children:"Electronics"}),Object(m.jsx)(sn,{name:"jewelery",children:" Jewelery"}),Object(m.jsx)(sn,{name:"men's clothing",children:"Men's clothing"}),Object(m.jsx)(sn,{name:"women's clothing",children:"Women's clothing"})]}),Object(m.jsx)(ln,{children:0===y.length?c.map((function(n){return Object(m.jsx)(S,{product:n,isProductInfoOpen:e,setIsProductInfoOpen:o},n.id)})):y.map((function(n){return Object(m.jsx)(S,{product:n,isProductInfoOpen:e,setIsProductInfoOpen:o},n.id)}))})]}),Object(m.jsx)(pn,{$isProductInfoOpen:e}),Object(m.jsx)(un,{icon:_.a,size:"8x",color:"gray",$arrowUp:!0,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})]})})})};h.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(hn,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.61db90b4.chunk.js.map