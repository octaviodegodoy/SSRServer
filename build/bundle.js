!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=23)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(u,o){try{var a=t[u](o),l=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var u=t.FETCH_USERS="fetch_users",o=(t.fetchUsers=function(){return e=n(regeneratorRuntime.mark(function e(t,r,n){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/users");case 2:o=e.sent,t({type:u,payload:o});case 4:case"end":return e.stop()}},e,void 0)})),function(t,r,n){return e.apply(this,arguments)};var e},t.FETCH_CURRENT_USER="fetch_current_user");t.fetchCurrentUser=function(){return e=n(regeneratorRuntime.mark(function e(t,r,n){var u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.get("/current_user");case 2:u=e.sent,t({type:o,payload:u});case 4:case"end":return e.stop()}},e,void 0)})),function(t,r,n){return e.apply(this,arguments)};var e}},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=(l(r(0)),l(r(19))),o=l(r(18)),a=l(r(17));function l(e){return e&&e.__esModule?e:{default:e}}t.default=[n({},a.default,{routes:[n({},u.default,{path:"/",exact:!0}),n({},o.default,{path:"/users"})]})]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1];switch(t.type){case n.FETCH_CURRENT_USER:return t.payload.data||!1;default:return e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case n.FETCH_USERS:return t.payload.data;default:return e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),u=a(r(8)),o=a(r(7));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.combineReducers)({users:u.default,auth:o.default})},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),u=l(r(11)),o=l(r(10)),a=l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=o.default.create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:e.get("cookie")||""}});return(0,n.createStore)(a.default,{},(0,n.applyMiddleware)(u.default.withExtraArgument(t)))}},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("react-dom/server")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(0)),u=r(14),o=r(5),a=s(r(6)),l=r(3),c=r(2),i=s(r(13));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return'\n     <html>\n     <head>\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n     </head>\n       <div id="root">'+(0,u.renderToString)(n.default.createElement(c.Provider,{store:t},n.default.createElement(o.StaticRouter,{location:e.path,context:{}},n.default.createElement("div",null,(0,l.renderRoutes)(a.default)))))+"</div>\n       <script>\n         window.INITIAL_STATE = "+(0,i.default)(t.getState())+'\n       <\/script>\n       <script src="bundle.js" ><\/script>\n     </html>\n  '}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(0),o=(n=u)&&n.__esModule?n:{default:n},a=r(5),l=r(2);t.default=(0,l.connect)(function(e){return{auth:e.auth}})(function(e){var t=e.auth;console.log("My auth status is -> ",t);var r=t?o.default.createElement("a",{href:"/api/logout"},"Logout"):o.default.createElement("a",{href:"/api/auth/google"},"Login");return o.default.createElement("nav",null,o.default.createElement("div",{className:"nav-wrapper"},o.default.createElement(a.Link,{to:"/",className:"brand-logo"},"DAC SSR"),o.default.createElement("ul",{className:"right"},o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/users"},"Users")),o.default.createElement("li",null,o.default.createElement(a.Link,{to:"/admins"},"Admins")),o.default.createElement("li",null,r))))})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(r(0)),u=r(3),o=l(r(16)),a=r(1);function l(e){return e&&e.__esModule?e:{default:e}}t.default={component:function(e){var t=e.route;return n.default.createElement("div",null,n.default.createElement(o.default,null),(0,u.renderRoutes)(t.routes))},loadData:function(e){return(0,e.dispatch)((0,a.fetchCurrentUser)())}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=r(0),a=(n=o)&&n.__esModule?n:{default:n},l=r(2),c=r(1);var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),u(t,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"renderUsers",value:function(){return this.props.users.map(function(e){return a.default.createElement("li",{key:e.id},e.name)})}},{key:"render",value:function(){return a.default.createElement("div",null,"Here's a big list of users:",a.default.createElement("ul",null,this.renderUsers()))}}]),t}();t.default={loadData:function(e){return e.dispatch((0,c.fetchUsers)())},component:(0,l.connect)(function(e){return console.log(e),{users:e.users}},{fetchUsers:c.fetchUsers})(i)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(0),o=(n=u)&&n.__esModule?n:{default:n};t.default={component:function(){return o.default.createElement("div",{className:"center-align",style:{marginTop:"200px"}},o.default.createElement("h3",null,"Welcome"),o.default.createElement("p",null,"Checkout these awesome features!!"))}}},function(e,t){e.exports=require("express-http-proxy")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";r(22);var n=i(r(21)),u=r(3),o=i(r(20)),a=i(r(6)),l=i(r(15)),c=i(r(12));function i(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.default)();s.use("/api",(0,o.default)("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(e){return e.headers["x-forwarded-host"]="localhost:3000",e}})),s.use(n.default.static("public")),s.get("*",function(e,t){var r=(0,c.default)(e),n=(0,u.matchRoutes)(a.default,e.path).map(function(e){var t=e.route;return t.loadData?t.loadData(r):null});Promise.all(n).then(function(){t.send((0,l.default)(e,r))})}),s.listen(3e3,function(){console.log("Listening on port 3000")})}]);