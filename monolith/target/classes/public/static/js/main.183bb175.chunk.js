(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),o=n.n(c),l=n(11),i=n.n(l),s=n(66),u=n.n(s),m=(n(105),n(15)),d=n(16),f=n(18),h=n(17),p=n(19),E=(n(106),n(7)),O=n(13),y=n(31),b={list:[],stocks:[]},g="ARTICLE_LOADED",v="STOCK_LOADED";function j(){return function(e){return i.a.get("/mono/internal/articles").then(function(t){return e({type:g,payload:t.data})})}}function k(){return function(e){return i.a.get("/stock/api").then(function(t){return e({type:v,payload:t.data})})}}var C={currentOrder:{},orders:[]},N="CURRENT_ORDER_LOADED",w="CURRENT_ORDER_MODIFY",A="ORDERS_LOADED";function L(){return function(e){return i.a.get("/mono/internal/orders/current").then(function(t){return e({type:N,payload:t.data})})}}function x(){return function(e){return i.a.get("/mono/internal/orders/history").then(function(t){return e({type:A,payload:t.data})})}}function D(e,t){return function(n){return i.a.post("/mono/internal/orders/".concat(e.id,"/add-article"),{articleId:t.id,quantity:1}).then(function(){return n(L())})}}function F(e,t){return function(n){return i.a.delete("/mono/internal/orders/".concat(e.id,"/order-lines/").concat(t.id)).then(function(){return n(L())})}}function S(e){return console.log("payment"),function(t){return i.a.post("/mono/internal/orders/"+e.id+"/pay").then(function(){return t({type:w})}).then(function(){return t(L())})}}var R=n(27),T=n(28),I=n(137),M=n(133),B=n(134),_=n(135),K=function(e){var t=e.article,n=e.stock,r=e.onArticleClicked;return a.a.createElement("div",{className:"card",key:t.id,style:{marginTop:"0.8rem",marginBottom:"0.8rem"}},a.a.createElement(I.a,{as:"li",style:{margin:"0.8rem"}},a.a.createElement("img",{width:64,height:64,className:"mr-3",src:t.image,alt:t.name}),a.a.createElement(I.a.Body,null,a.a.createElement("h5",null,t.name," ",a.a.createElement("small",null,"(",n,")")),a.a.createElement("p",null,t.description),a.a.createElement(M.a,null,a.a.createElement(B.a,null,a.a.createElement(_.a,{className:"float-right",size:"sm",onClick:function(){r(t)},style:{minWidth:"6rem"}},t.price," \u20ac ",a.a.createElement(R.a,{icon:T.a})))))))};var P=Object(E.d)(Object(O.b)(function(e){return{currentOrder:e.order.currentOrder}},function(e){return Object(E.b)({fetchCurrentOrder:L},e)}),function(e){return function(t){function n(e){var t;return Object(m.a)(this,n),(t=Object(f.a)(this,Object(h.a)(n).call(this,e))).state={hasFetchOrder:!1},t}return Object(p.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchCurrentOrder().then(function(){return e.setState({hasFetchOrder:!0})})}},{key:"render",value:function(){return a.a.createElement(e,Object.assign({currentOrder:this.props.currentOrder},this.props))}}]),n}(a.a.Component)}),z=n(23),H=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onArticleClicked=function(e){var t=n.props;(0,t.addArticleToOrder)(t.currentOrder,e).then(function(){z.toast.success("Article added to cart.")}).catch(function(e){z.toast.error(e)})},n.getArticleStock=function(e){var t=n.props.stocks,r="-";return t.forEach(function(t){t.articleId===e&&(r=t.stock)}),r},n.state={hasFetchArticles:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchArticles().then(function(){return e.setState({hasFetchArticles:!0})}),this.props.fetchArticlesStocks()}},{key:"render",value:function(){var e=this,t=this.props.articles,n=this.state.hasFetchArticles;return a.a.createElement("div",null,n&&a.a.createElement("section",null,a.a.createElement(M.a,{className:"justify-content-md-center"},a.a.createElement(B.a,{xs:6},a.a.createElement("ul",{className:"list-unstyled"},t.map(function(t){return a.a.createElement(K,{key:t.id,article:t,stock:e.getArticleStock(t.id),onArticleClicked:e.onArticleClicked})}))))))}}]),t}(a.a.Component);var W=Object(E.d)(Object(O.b)(function(e){return{articles:e.article.list,stocks:e.article.stocks,currentOrder:e.order.currentOrder}},function(e){return Object(E.b)({fetchArticles:j,fetchArticlesStocks:k,addArticleToOrder:D},e)}),P)(H),Y=n(70);function J(){return function(){return i.a.post("http://localhost:8080/perform_logout").finally(function(){return window.location.replace("http://localhost:8080/login")})}}var U=Object(E.c)({article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(y.a)({},e,{list:t.payload});case v:return Object(y.a)({},e,{stocks:t.payload});default:return e}},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(y.a)({},e,{currentOrder:t.payload});case A:return Object(y.a)({},e,{orders:t.payload});case w:default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return arguments.length>1&&arguments[1],e}}),q=function(){return Object(E.e)(U,Object(E.d)(Object(E.a)(Y.a)))},G=n(41),Z=n(71),Q=n.n(Z),X=n(51),$=n(33),V=n(136),ee=n(42);function te(){var e=Object(G.a)(["\n  background-color: #222;\n  padding: 20px;\n  font-size: 2em;\n  color: #fff;\n"]);return te=function(){return e},e}function ne(){var e=Object(G.a)(["\n  background-color: #222;\n  height: 120px;\n  padding: 20px;\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n\n  .redux-logo {\n    animation: "," infinite 20s linear;\n    height: 80px;\n  }\n"]);return ne=function(){return e},e}function re(){var e=Object(G.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return re=function(){return e},e}var ae=Object($.b)(re()),ce=X.a.div(ne(),ae),oe=X.a.div(te()),le=Object(O.b)(null,function(e){return Object(E.b)({performLogout:J},e)})(function(e){var t=e.performLogout;return a.a.createElement(r.Fragment,null,a.a.createElement(ce,null,a.a.createElement("img",{src:Q.a,className:"redux-logo",alt:"logo"}),a.a.createElement(oe,null,"HOMicS: Market Place Project")),a.a.createElement(V.a,{variant:"tabs"},a.a.createElement(V.a.Item,null,a.a.createElement(ee.LinkContainer,{to:"/articles"},a.a.createElement(V.a.Link,{eventKey:1},"Articles"))),a.a.createElement(V.a.Item,null,a.a.createElement(ee.LinkContainer,{to:"/cart"},a.a.createElement(V.a.Link,{eventKey:2},"Cart"))),a.a.createElement(V.a.Item,null,a.a.createElement(ee.LinkContainer,{to:"/history"},a.a.createElement(V.a.Link,{eventKey:3},"History"))),a.a.createElement(V.a.Item,null,a.a.createElement(V.a.Link,{href:"/stats/stat-order"},"Stats micro")),a.a.createElement(V.a.Item,null,a.a.createElement(V.a.Item,null,a.a.createElement(V.a.Link,{href:"/user/userActivity"},"User Activity micro"))),a.a.createElement(V.a.Item,null,a.a.createElement(V.a.Link,{onClick:t},"Logout"))))}),ie=function(e){function t(){var e,n;Object(m.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).onRemoveClick=function(e,t){console.log(t),n.props.deleteOrderLine(e,t)},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props.order;return a.a.createElement("section",null,a.a.createElement(M.a,{className:"justify-content-md-center"},a.a.createElement(B.a,{xs:6},a.a.createElement("ul",{className:"list-unstyled"},t.orderLines.map(function(n){return a.a.createElement("div",{className:"card",key:n.article.id,style:{marginTop:"0.8rem",marginBottom:"0.8rem"}},a.a.createElement(I.a,{as:"li",style:{margin:"0.8rem"}},a.a.createElement("img",{width:64,height:64,className:"mr-3",src:n.article.image,alt:n.article.name}),a.a.createElement(I.a.Body,null,a.a.createElement(M.a,null,a.a.createElement(B.a,null,a.a.createElement("h5",null,n.article.name,a.a.createElement("small",null," (x ",n.quantity,")"))),a.a.createElement(B.a,null,a.a.createElement("span",{className:"float-right",size:"sm"},a.a.createElement(R.a,{icon:T.c,onClick:function(){return e.onRemoveClick(t,n)}})))),a.a.createElement("p",null,n.article.description))))})))))}}]),t}(a.a.Component);var se=Object(O.b)(function(e){return{}},function(e){return Object(E.b)({deleteOrderLine:F},e)})(ie),ue=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).onPayOrderClick=function(){var e=n.props,t=e.order;(0,e.payOrder)(t).then(function(){z.toast.success("Order Payed")}).catch(function(e){e&&e.response&&e.response.data&&e.response.data.message&&z.toast.error(e.response.data.message)})},n.state={hasFetchCurrentOrder:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchCurrentOrder().then(function(){return e.setState({hasFetchCurrentOrder:!0})})}},{key:"render",value:function(){var e=this.props.order,t=this.state.hasFetchCurrentOrder;return a.a.createElement("div",null,t&&e.orderLines.length>0&&a.a.createElement(r.Fragment,null,a.a.createElement(se,{order:e}),a.a.createElement(M.a,{className:"justify-content-md-center"},a.a.createElement(B.a,{xs:6},a.a.createElement(_.a,{variant:"primary",onClick:this.onPayOrderClick,className:"float-right"},a.a.createElement(R.a,{icon:T.b})," Pay Order")))),t&&0===e.orderLines.length&&a.a.createElement(M.a,{className:"justify-content-md-center",style:{marginTop:"1rem"}},a.a.createElement("p",null,"Your cart is empty.")))}}]),t}(a.a.Component);var me=Object(O.b)(function(e){return{order:e.order.currentOrder}},function(e){return Object(E.b)({fetchCurrentOrder:L,payOrder:S},e)})(ue);var de=function(e){var t=e.orders;return a.a.createElement("section",null,a.a.createElement(M.a,{className:"justify-content-md-center"},a.a.createElement(B.a,{xs:6},a.a.createElement("ul",{className:"list-unstyled"},t.map(function(e){return a.a.createElement("div",{className:"card",key:e.id,style:{marginTop:"0.8rem",marginBottom:"0.8rem"}},a.a.createElement(I.a,{as:"li",style:{margin:"0.8rem"}},a.a.createElement(I.a.Body,null,a.a.createElement(M.a,null,a.a.createElement(B.a,null,a.a.createElement("h5",null,"Order : ",e.id,"  [",e.status,"]")),a.a.createElement(B.a,null,a.a.createElement("span",{className:"float-right",size:"sm"},e.totalPrice," \u20ac"))),a.a.createElement(M.a,null,a.a.createElement(B.a,null,e.orderLines.map(function(e){return a.a.createElement("img",{key:e.id,width:64,height:64,className:"mr-3",src:e.article.image,alt:e.article.name})}))))))})))))},fe=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).state={hasFetchOrders:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchOrdersHistory().then(function(){return e.setState({hasFetchOrders:!0})})}},{key:"render",value:function(){var e=this.props.orders,t=this.state.hasFetchOrders;return a.a.createElement("div",null,t&&a.a.createElement(r.Fragment,null,a.a.createElement(de,{orders:e})),t&&0===e.length&&a.a.createElement(M.a,{className:"justify-content-md-center"},a.a.createElement(B.a,{md:"auto"},a.a.createElement("p",null," Your don't have any orders."))))}}]),t}(a.a.Component);var he=Object(O.b)(function(e){return{orders:e.order.orders}},function(e){return Object(E.b)({fetchOrdersHistory:x},e)})(fe),pe=n(63),Ee=n(65),Oe=n(35),ye=(n(131),n(75)),be=n.n(ye),ge=function(){return a.a.createElement("div",null,a.a.createElement("img",{alt:"404",src:be.a,style:{width:400,height:400,display:"block",margin:"auto",position:"relative"}}))},ve=q(),je=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(O.a,{store:ve},a.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossOrigin:"anonymous"}),a.a.createElement(z.ToastContainer,{autoClose:5e3}),a.a.createElement(pe.a,{basename:"/mono"},a.a.createElement("div",null,a.a.createElement(le,null),a.a.createElement(Ee.a,null,a.a.createElement(Oe.a,{path:"/cart",component:me}),a.a.createElement(Oe.a,{path:"/history",component:he}),a.a.createElement(Oe.a,{path:"/articles",component:W}),a.a.createElement(Oe.a,{component:ge})))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.defaults.baseURL="/",i.a.defaults.withCredentials=!0,i.a.defaults.xsrfHeaderName="X-CSRFTOKEN",i.a.defaults.xsrfCookieName="csrftoken",i.a.defaults.paramsSerializer=function(e){return u.a.stringify(e,{arrayFormat:"brackets"})},o.a.render(a.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,n){e.exports=n.p+"static/media/logo.5ae1af16.svg"},75:function(e,t,n){e.exports=n.p+"static/media/404.e71f3240.png"},76:function(e,t,n){e.exports=n(132)}},[[76,1,2]]]);
//# sourceMappingURL=main.183bb175.chunk.js.map